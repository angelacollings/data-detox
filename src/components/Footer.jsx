import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <div>© {new Date().getFullYear()} Data Detox</div>
          <div className="muted">
            Database support for real estate salespeople
          </div>
        </div>
        <nav className="footer-links" aria-label="Legal links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </nav>
      </div>
    </footer>
  );
}
