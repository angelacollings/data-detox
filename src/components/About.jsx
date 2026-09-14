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
              Hands-on database reactivation, built on first-hand experience of
              how individual real estate salespeople actually work.
            </p>
          </div>

          <div className="about-vision">
            <div>
              <div className="about-section-label">The purpose</div>
              <h2>Reconnect the people. Improve the information.</h2>
            </div>
            <div className="about-vision-copy">
              <p>
                I help real estate salespeople complete the follow-up that gets
                pushed aside: making the calls, reconnecting with contacts and
                following up old appraisals. I update the database as I go and
                hand genuine opportunities back to the salesperson.
              </p>
              <p>Each piece of work is a defined project, not an ongoing admin service.</p>
            </div>
          </div>

          <section className="about-donna" aria-labelledby="donna-title">
            <img
              className="about-photo"
              src="/assets/donna-portrait.jpg"
              alt="Donna, founder of Data Detox"
              width="1024"
              height="1280"
            />
            <div className="about-donna-copy">
              <div className="about-section-label">Behind Data Detox</div>
              <h3 id="donna-title">Meet Donna</h3>
              <p>
                I&apos;m Donna, and I&apos;ve worked on both sides of real estate — as a
                salesperson and in administration.
              </p>
              <p>
                I&apos;ve seen how easily database follow-up gets pushed aside when
                you&apos;re busy listing, selling and looking after the clients who
                need you today.
              </p>
              <p>That&apos;s why I started Data Detox.</p>
              <p>
                I take on one-off database projects and do the work that has been
                sitting at the bottom of the list — making the calls,
                reconnecting with contacts, following up old appraisals and
                updating the database as I go.
              </p>
              <p>
                I&apos;m not a call centre and Data Detox is not an automated
                service. I do the work myself, record the outcome of each
                conversation and hand opportunities back to the salesperson.
              </p>
              <p>
                I&apos;ve also worked in client contact roles,
                including cold calling and fundraising, so picking up the phone
                and having genuine conversations comes naturally to me. Those
                conversations don&apos;t just keep your database accurate, they
                often uncover opportunities that might otherwise have been
                missed.
              </p>
              <p>
                It&apos;s an honour when someone trusts me with their database. I
                know it&apos;s much more than a list of names and phone numbers,
                it&apos;s years of relationships, conversations, and future
                business. I genuinely enjoy helping people look after one of
                their most valuable business assets and seeing the difference a
                well-maintained database can make.
              </p>
              <p>
                If, after working together, you feel a sense of relief because
                your database finally works the way it should, then I&apos;ve done
                my job.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
