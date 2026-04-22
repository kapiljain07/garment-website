import { useState } from 'react';
import { motion } from 'framer-motion';

const COLS = [
  { key: 'grade', label: 'Grade' },
  { key: 'gsm', label: 'Paper GSM' },
  { key: 'bst', label: 'Bursting Strength' },
  { key: 'ect', label: 'ECT' },
  { key: 'flute', label: 'Flute' },
  { key: 'load', label: 'Load rating' },
  { key: 'use', label: 'Typical use' },
];

export default function SpecTable({ rows, caption }) {
  const [active, setActive] = useState(0);

  if (!rows || rows.length === 0) return null;

  return (
    <div className="bg-bone border border-line">
      {caption && (
        <div className="px-6 py-4 rule-strong border-t-0 border-b border-slate/20 flex items-center justify-between gap-4">
          <div className="eyebrow text-kraft-deep">{caption}</div>
          <span className="font-mono text-[11px] text-slate-soft">
            All specs at 50% RH, 23°C
          </span>
        </div>
      )}

      {/* Desktop: true table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-line">
              {COLS.map((c) => (
                <th
                  key={c.key}
                  className="eyebrow text-slate-soft px-5 py-4 text-[10px]"
                >
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={i}
                onMouseEnter={() => setActive(i)}
                className={`border-b border-line/70 transition-colors cursor-default ${
                  active === i ? 'bg-paper-2/60' : 'bg-transparent'
                }`}
              >
                {COLS.map((c) => (
                  <td
                    key={c.key}
                    className={`px-5 py-4 text-[13.5px] ${
                      c.key === 'grade'
                        ? 'font-display text-[16px] text-ink'
                        : c.key === 'bst' || c.key === 'ect' || c.key === 'gsm'
                          ? 'font-mono text-ink'
                          : 'text-slate'
                    }`}
                  >
                    {r[c.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: accordion-style cards */}
      <div className="md:hidden divide-y divide-line">
        {rows.map((r, i) => (
          <motion.button
            key={i}
            onClick={() => setActive(active === i ? -1 : i)}
            initial={false}
            className="w-full text-left px-5 py-4"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-[18px] text-ink">
                {r.grade}
              </span>
              <span className="font-mono text-[11px] text-kraft-deep">
                {r.bst}
              </span>
            </div>
            {active === i && (
              <motion.dl
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-[12px]"
              >
                {COLS.slice(1).map((c) => (
                  <div key={c.key}>
                    <dt className="eyebrow text-[9px] text-slate-soft">
                      {c.label}
                    </dt>
                    <dd
                      className={
                        c.key === 'gsm' || c.key === 'ect'
                          ? 'font-mono text-ink'
                          : 'text-slate'
                      }
                    >
                      {r[c.key]}
                    </dd>
                  </div>
                ))}
              </motion.dl>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
