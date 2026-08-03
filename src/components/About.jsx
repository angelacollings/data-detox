import React from 'react';

export default function About() {
  return (
    <main id="main-content" className="about-page" tabIndex="-1">
      <section className="section">
        <div className="container about-page-inner">
          <a className="back-link" href="/">
            Back to home
          </a>

          <div className="section-header about-page-header">
            <h1>About Data Detox</h1>
            <p>
              Data Detox exists to make database work feel simpler, clearer and
              more valuable for real estate professionals.
            </p>
          </div>

          <div className="about-vision">
            <div>
              <div className="about-section-label">Our vision</div>
              <h3>Better data should make better business possible.</h3>
            </div>
            <div className="about-vision-copy">
              <p>
                We believe a well-maintained database should be one of the most
                useful assets in a real estate business—not another job waiting
                at the bottom of the list.
              </p>
              <p>
                Our vision is to help agencies and salespeople work with
                accurate, organised information so they can prospect with
                confidence, strengthen relationships and spend more time serving
                their clients.
              </p>
            </div>
          </div>

          <section className="about-donna" aria-labelledby="donna-title">
            <div
              className="about-photo-placeholder"
              role="img"
              aria-label="Placeholder for a future portrait of Donna"
            >
              <span>Donna&apos;s photo</span>
              <small>Coming soon</small>
            </div>
            <div className="about-donna-copy">
              <div className="about-section-label">Behind Data Detox</div>
              <h3 id="donna-title">Meet Donna</h3>
              <p>
                Donna founded Data Detox after seeing how much opportunity can
                sit unnoticed inside a busy or inconsistent real estate
                database.
              </p>
              <p>
                Donna brings more than 1,500 hours of hands-on experience
                working inside Ray White CRM systems, helping agents keep their
                databases accurate, organised and ready for prospecting.
              </p>
              <p>
                Her practical understanding of real estate workflows shapes the
                way we work: carefully, confidentially and with a focus on
                making every database genuinely useful.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
