const express = require('express');
const Lead = require('../models/Lead');
const auth = require('../middleware/auth');
const { sendLeadNotification } = require('../utils/mailer');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, phone, email, businessType, requirement, message, source } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ message: 'Name and phone are required.' });
    }

    const lead = new Lead({ name, phone, email, businessType, requirement, message, source });
    await lead.save();

    sendLeadNotification(lead).catch(() => {});

    res.status(201).json({ message: 'Thank you! We will contact you shortly.', lead });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    console.error('Lead creation error:', err);
    res.status(500).json({ message: 'Something went wrong. Please try again.' });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const { page = 1, limit = 20, source, search } = req.query;
    const filter = {};

    if (source) filter.source = source;
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
        { businessType: { $regex: search, $options: 'i' } },
      ];
    }

    const total = await Lead.countDocuments(filter);
    const leads = await Lead.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json({ leads, total, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (err) {
    console.error('Fetch leads error:', err);
    res.status(500).json({ message: 'Failed to fetch leads.' });
  }
});

router.get('/export', auth, async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 }).lean();

    const headers = ['Name', 'Phone', 'Email', 'Business Type', 'Requirement', 'Message', 'Source', 'Date'];
    const rows = leads.map(l => [
      l.name, l.phone, l.email || '', l.businessType || '', l.requirement || '',
      `"${(l.message || '').replace(/"/g, '""')}"`, l.source,
      new Date(l.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    ]);

    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=leads.csv');
    res.send(csv);
  } catch (err) {
    console.error('Export error:', err);
    res.status(500).json({ message: 'Export failed.' });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ message: 'Lead deleted.' });
  } catch (err) {
    res.status(500).json({ message: 'Delete failed.' });
  }
});

module.exports = router;
