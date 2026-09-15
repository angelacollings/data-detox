import React, { useRef, useState } from 'react';

const QUOTE_PREVIEW_LENGTH = 230;

const data = [
  {
    quote:
      'Working with Data Detox has made managing my database so much easier. The attention to detail, accurate data cleaning, and organised approach have given me confidence that my contact information is up to date, making prospecting faster and more effective.',
    by: 'Jo, Whangarei',
  },
  {
    quote:
      'Data detox is amazing. They clean up your contacts in quick time. Update the details your missing and leave you with useful data. Highly efficient and would recommend to anyone who has limited time!',
    by: 'Fiona, Whangarei',
  },
  {
    quote:
      'Working with Donna has been an absolute lifesaver! She is so efficient, incredibly easy to talk to, and just amazing at what she does. She completely cleared out the fluff from our database, making lead management a breeze and giving us total peace of mind that our data is actually working for us.',
    by: 'Ashlee, Whangarei',
  },
  {
    quote:
      'I cant recommend Donna and Data Detox highly enough! She transformed my real estate database by matching contacts to properties, updating missing information, and cleaning everything up with incredible attention to detail. What would have taken me countless hours was completed quickly and professionally, leaving me with an accurate, organised, and genuinely useful database. If youre time-poor and want your data in top shape, Donna is absolutely worth it. Thank you for making such a daunting task so easy!',
    by: 'Sally, Whangarei',
  },
  {
    quote:
      'Detox Data completely transformed our messy database into a streamlined, highly accurate asset, drastically improving our daily efficiency and marketing reach. Their meticulous attention to detail and professional service make them an invaluable partner for any business looking to clean up and optimize their customer records.',
    by: 'Julie, Whangarei',
  },
];

function selectRandomTestimonials(items, count) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled.slice(0, count);
}

function quotePreview(quote) {
  if (quote.length <= QUOTE_PREVIEW_LENGTH) {
    return quote;
  }

  const shortened = quote.slice(0, QUOTE_PREVIEW_LENGTH);
  const lastSpace = shortened.lastIndexOf(' ');

  return shortened.slice(0, lastSpace > 0 ? lastSpace : shortened.length);
}

export default function Testimonials() {
  const [visibleTestimonials] = useState(() =>
    selectRandomTestimonials(data, data.length)
  );
  const [expandedQuotes, setExpandedQuotes] = useState(() => new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const carouselRef = useRef(null);

  const updateScrollProgress = () => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const maximumScroll = carousel.scrollWidth - carousel.clientWidth;
    setScrollProgress(
      maximumScroll > 0 ? (carousel.scrollLeft / maximumScroll) * 100 : 0
    );
  };

  const moveSlider = (event) => {
    const carousel = carouselRef.current;
    const progress = Number(event.target.value);

    setScrollProgress(progress);

    if (carousel) {
      carousel.scrollLeft =
        ((carousel.scrollWidth - carousel.clientWidth) * progress) / 100;
    }
  };

  const toggleQuote = (author) => {
    setExpandedQuotes((current) => {
      const next = new Set(current);

      if (next.has(author)) {
        next.delete(author);
      } else {
        next.add(author);
      }

      return next;
    });
  };

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">Client experience</div>
          <h2 id="testimonials-title" className="section-title">
            What clients say about working with Donna.
          </h2>
        </div>
        <div className="testimonial-carousel">
          <div
            ref={carouselRef}
            className="testimonials"
            role="region"
            aria-labelledby="testimonials-title"
            tabIndex="0"
            onScroll={updateScrollProgress}
          >
            {visibleTestimonials.map((testimonial) => {
            const isExpanded = expandedQuotes.has(testimonial.by);
            const isTruncated = testimonial.quote.length > QUOTE_PREVIEW_LENGTH;
            const displayedQuote = isExpanded
              ? testimonial.quote
              : quotePreview(testimonial.quote);

            return (
              <blockquote key={testimonial.by} className="testimonial">
                <div className="quote-mark" aria-hidden="true">“</div>
                <p>
                  &ldquo;{displayedQuote}
                  {!isExpanded && isTruncated ? '…' : ''}&rdquo;{' '}
                  {isTruncated && (
                    <button
                      type="button"
                      className="testimonial-toggle"
                      aria-expanded={isExpanded}
                      onClick={() => toggleQuote(testimonial.by)}
                    >
                      {isExpanded ? 'less' : 'more…'}
                    </button>
                  )}
                </p>
                <cite>{testimonial.by}</cite>
              </blockquote>
            );
            })}
          </div>
          <input
            className="testimonial-slider"
            type="range"
            min="0"
            max="100"
            step="1"
            value={scrollProgress}
            aria-label="Browse testimonials"
            onInput={moveSlider}
          />
        </div>
      </div>
    </section>
  );
}
