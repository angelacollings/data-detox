import React from 'react';

export default function Stats() {
  const stats = [
    { label: 'Contacts cleaned', value: '7,500+' },
    { label: 'Lead scores updated', value: '4,000+' },
    { label: 'Hands-on database experience', value: '1,500+ hrs' },
  ];

  return (
    <section className="section stats">
      <div className="container">
        <div className="section-header stats-header">
          <div className="eyebrow">Hands-on experience</div>
          <h2 className="section-title">Database knowledge built through real conversations.</h2>
          <p>
            I&apos;ve spent more than 1,500 hours working inside Ray White CRM
            systems, calling contacts, updating records, finding missing
            information and helping agents uncover opportunities in their
            existing databases.
          </p>
          <p>
            That experience means I understand both sides of the job — the
            information inside the CRM and the real conversations behind it.
          </p>
        </div>
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
