import React from 'react';

export default function Stats() {
  const stats = [
    { label: 'Contacts cleaned', value: '7,500+' },
    { label: 'Lead Scores Updated', value: '4,000+' },
    { label: 'Hours given back to salespeople', value: '1250+' },
  ];

  return (
    <section className="section stats">
      <div className="container stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
