import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { afterEach, describe, it, expect, vi } from 'vitest';

const setPath = (path) => {
  window.history.pushState({}, '', path);
};

describe('App', () => {
  afterEach(() => {
    setPath('/');
  });

  it('renders the site brand', () => {
    setPath('/');
    render(<App />);
    expect(
      screen.getByRole('link', { name: /Data Detox home/i })
    ).toBeDefined();
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Reconnect with the people already in your database/i,
      })
    ).toBeDefined();
  });

  it('renders the primary call to action', () => {
    setPath('/');
    render(<App />);
    expect(
      screen.getByRole('link', { name: /Book a 15-minute discovery call/i })
    ).toBeDefined();
  });

  it('uses sequential homepage headings and descriptive service links', () => {
    setPath('/');
    const { container } = render(<App />);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /The follow-up that has fallen through the gaps/i,
      })
    ).toBeDefined();
    expect(container.querySelector('h3.section-title')).toBeNull();
    expect(
      screen.getByRole('link', { name: /Explore Database Reactivation/i })
    ).toBeDefined();
    expect(
      screen.getByRole('link', { name: /Explore Past Client Reconnection/i })
    ).toBeDefined();
    expect(
      screen.getByRole('link', { name: /Explore Appraisal Follow-Up/i })
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 3, name: /Farm Area Research/i })
    ).toBeDefined();
  });

  it('renders the supporting hero statement', () => {
    setPath('/');
    render(<App />);
    expect(
      screen.getByText(
        /make the calls that haven't been made/i
      )
    ).toBeDefined();
  });

  it('renders the hero outcomes card', () => {
    setPath('/');
    render(<App />);
    expect(screen.getByText(/Calls made personally by Donna/i)).toBeDefined();
    expect(screen.getByText(/Clear notes and opportunities handed back/i)).toBeDefined();
    expect(
      screen.getByText(/One defined database project/i)
    ).toBeDefined();
  });

  it('renders all four how it works steps', () => {
    setPath('/');
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /A clear start, a systematic process/i })
    ).toBeDefined();
    expect(screen.getAllByRole('listitem')).toHaveLength(7);
  });

  it('renders About as a separate page', () => {
    setPath('/about');
    render(<App />);
    expect(
      screen.getByText(/I've worked on both sides of real estate/i)
    ).toBeDefined();
    expect(screen.getByText(/That's why I started Data Detox/i)).toBeDefined();
    expect(
      screen.getByText(/your database finally works the way it should/i)
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 1, name: /About Data Detox/i })
    ).toBeDefined();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Reconnect the people. Improve the information/i,
      })
    ).toBeDefined();
    expect(
      screen.getByText(/complete the follow-up that gets pushed aside/i)
    ).toBeDefined();
    expect(
      screen.getByText(/defined project, not an ongoing admin service/i)
    ).toBeDefined();
    expect(
      screen.getByRole('img', { name: /Donna, founder of Data Detox/i })
    ).toBeDefined();
    expect(
      screen.queryByRole('link', { name: /Book a 15-minute discovery call/i })
    ).toBeNull();
  });

  it('renders all testimonials in a responsive carousel', () => {
    setPath('/');
    const { container } = render(<App />);
    expect(container.querySelectorAll('.testimonial')).toHaveLength(5);
    expect(screen.getByRole('slider', { name: /Browse testimonials/i })).toBeDefined();
  });

  it('allows a shortened testimonial to be expanded', () => {
    setPath('/');
    render(<App />);
    const moreButton = screen.getAllByRole('button', { name: /More/i })[0];
    expect(moreButton.getAttribute('aria-expanded')).toBe('false');
    fireEvent.click(moreButton);
    expect(moreButton.getAttribute('aria-expanded')).toBe('true');
    expect(moreButton.textContent).toBe('less');
  });

  it('renders the contact form fields', () => {
    setPath('/');
    render(<App />);
    expect(screen.getByLabelText(/Name/i)).toBeDefined();
    expect(screen.getByLabelText(/Email/i)).toBeDefined();
    expect(screen.getByLabelText(/What would you like me to work through/i)).toBeDefined();
    expect(
      screen.getByRole('button', { name: /Request a discovery call/i })
    ).toBeDefined();
  });

  it('shows accessible contact form errors', () => {
    setPath('/');
    const { container } = render(<App />);
    fireEvent.submit(container.querySelector('.contact-form'));
    expect(screen.getByRole('alert')).toBeDefined();
    expect(screen.getByText(/Enter your name/i)).toBeDefined();
    expect(screen.getByText(/Enter your email address/i)).toBeDefined();
    expect(screen.getByText(/Tell me what you would like me to work through/i)).toBeDefined();
  });

  it('renders a dedicated service page', () => {
    setPath('/database-revitalisation');
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /Database Reactivation/i })
    ).toBeDefined();
    expect(
      screen.getByRole('link', { name: /Back to services/i })
    ).toBeDefined();
    expect(
      screen.getByText(/Reconnect with the contacts who haven’t been spoken to recently/i)
    ).toBeDefined();
    expect(
      screen.getByText(/I make the calls/i)
    ).toBeDefined();
  });

  it('renders the full Client Verification content', () => {
    setPath('/client-verification');
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /Past Client Reconnection/i })
    ).toBeDefined();
    expect(
      screen.getByText(/Reconnect with past clients/i)
    ).toBeDefined();
    expect(
      screen.getByText(/record the outcome of each conversation/i)
    ).toBeDefined();
    expect(
      screen.getByText(/hand it back for your follow-up/i)
    ).toBeDefined();
    expect(
      screen.getByText(/clearer picture of the relationship today/i)
    ).toBeDefined();
  });

  it('renders the full Appraisal Preparation content', () => {
    setPath('/appraisal-preparation');
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /Appraisal Follow-Up/i })
    ).toBeDefined();
    expect(
      screen.getByText(/previously appraised/i)
    ).toBeDefined();
    expect(
      screen.getByText(/defined group of older appraisals/i)
    ).toBeDefined();
    expect(
      screen.getByText(/Not every call will lead to an appraisal/i)
    ).toBeDefined();
  });

  it('renders privacy and terms links', () => {
    setPath('/');
    render(<App />);
    expect(screen.getByRole('link', { name: /Privacy/i })).toBeDefined();
    expect(screen.getByRole('link', { name: /Terms/i })).toBeDefined();
  });

  it('links header navigation back to home sections', () => {
    setPath('/terms');
    render(<App />);
    expect(
      screen.getByRole('link', { name: /Services/i }).getAttribute('href')
    ).toBe('/#services');
    expect(
      screen.getByRole('link', { name: /About/i }).getAttribute('href')
    ).toBe('/about/');
    expect(
      screen.getByRole('link', { name: /Book a call/i }).getAttribute('href')
    ).toBe('/#contact');
  });

  it.each([
    ['contact', 'contact'],
    ['services', 'services'],
  ])('scrolls to the %s section after navigating home', (hash, targetId) => {
    setPath(`/#${hash}`);
    const scrollIntoView = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoView;

    render(<App />);

    expect(document.getElementById(targetId)).not.toBeNull();
    expect(scrollIntoView).toHaveBeenCalledOnce();
  });

  it('renders privacy as a separate page', () => {
    setPath('/privacy');
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /Privacy Policy/i })
    ).toBeDefined();
    expect(
      screen.queryByRole('link', { name: /Book a 15-minute discovery call/i })
    ).toBeNull();
  });

  it('renders legal pages with trailing slashes', () => {
    setPath('/privacy/');
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /Privacy Policy/i })
    ).toBeDefined();
  });

  it('renders terms as a separate page', () => {
    setPath('/terms');
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /Terms/i })
    ).toBeDefined();
    expect(screen.getByRole('link', { name: /Back to home/i })).toBeDefined();
  });
});
