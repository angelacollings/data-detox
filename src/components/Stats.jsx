import React from 'react';

export default function Stats() {
  const stats = [
    { label: 'Contacts cleaned', value: '1,200+' },
    { label: 'Confirmed numbers', value: '78%' },
    { label: 'Appraisal leads generated', value: '320+' },
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
