import express from 'express'
import { body, validationResult } from 'express-validator'
import { supabase } from '../utils/supabaseClient.js'

export const contactRouter = express.Router()

contactRouter.post(
  '/',
  [
    body('name')
      .isString()
      .trim()
      .isLength({ min: 1, max: 100 })
      .withMessage('Name is required'),
    body('email')
      .isString()
      .trim()
      .isEmail()
      .withMessage('A valid email is required'),
    body('phone')
      .isString()
      .trim()
      .isLength({ min: 6, max: 20 })
      .withMessage('A valid phone is required'),
    body('message')
      .isString()
      .trim()
      .isLength({ min: 5, max: 2000 })
      .withMessage('Message must be at least 5 characters')
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: 'Validation failed',
          details: errors.array()
        })
      }

      const payload = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
      }

      const { data, error } = await supabase.from('contacts').insert(payload).select('id').single()
      if (error) throw error

      res.status(201).json({ ok: true, contactId: data?.id })
    } catch (err) {
      next(err)
    }
  }
)

