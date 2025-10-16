import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Donna&#39;s Data Detox</div>
        <div className="muted">
          Serving real estate agents — contact for pricing & custom work
        </div>
      </div>
    </footer>
  );
}
