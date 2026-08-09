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
              Practical database support, built on first-hand
              experience of how individual real estate salespeople actually work.
            </p>
          </div>

          <div className="about-vision">
            <div>
              <div className="about-section-label">Our Vision</div>
              <h2>A database is only valuable if it works.</h2>
            </div>
            <div className="about-vision-copy">
              <p>
                Our vision is to help real estate professionals keep their
                databases accurate, current and ready to use. Because when you
                trust your information, it&apos;s easier to stay in touch with
                clients, recognise opportunities and focus on what you do best.
              </p>
              <p>Less time behind the computer. More time in front of clients.</p>
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
                Hi, I&apos;m Donna, the person behind Data Detox.
              </p>
              <p>
                I&apos;ve worked in real estate as both a salesperson and a personal
                assistant, so I&apos;ve seen firsthand how important a good database
                is, and how quickly it can become overwhelming when you get busy.
              </p>
              <p>
                Time and time again, I watched databases become something people
                avoided. Not because they didn&apos;t care, but because selling
                property always came first. The problem was that no one had the
                time to bring everything back up to date.
              </p>
              <p>That&apos;s why I started Data Detox.</p>
              <p>
                I genuinely enjoy bringing order to chaos. I love taking
                something that&apos;s become difficult to use and turning it into a
                database that agents can trust again. For me, every piece of
                information in a database has a purpose. If it doesn&apos;t add
                value, it probably doesn&apos;t belong there.
              </p>
              <p>
                I don&apos;t want to be the person with my name up in lights. I&apos;m
                happiest being part of the support crew, helping agents behind
                the scenes so they can spend more time building relationships,
                winning listings, and growing their business.
              </p>
              <p>
                Over the years, I&apos;ve also worked in client contact roles,
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
                well maintained database can make.
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
