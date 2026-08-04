import React from 'react';

export default function Stats() {
  const stats = [
    { label: 'Contacts cleaned', value: '7,500+' },
    { label: 'Lead scores updated', value: '4,000+' },
    { label: 'Hands-on database experience', value: '1,500+ hrs' },
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
