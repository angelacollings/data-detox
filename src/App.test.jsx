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
        name: /Make your database work for you/i,
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
        name: /Make your database useful again/i,
      })
    ).toBeDefined();
    expect(container.querySelector('h3.section-title')).toBeNull();
    expect(
      screen.getByRole('link', { name: /Explore Database Revitalisation/i })
    ).toBeDefined();
    expect(
      screen.getByRole('link', { name: /Explore Client Verification/i })
    ).toBeDefined();
    expect(
      screen.getByRole('link', { name: /Explore Appraisal Preparation/i })
    ).toBeDefined();
  });

  it('renders the supporting hero statement', () => {
    setPath('/');
    render(<App />);
    expect(
      screen.getByText(
        /organises and updates your database/i
      )
    ).toBeDefined();
  });

  it('renders the hero outcomes card', () => {
    setPath('/');
    render(<App />);
    expect(screen.getAllByText(/Confident prospecting/i)).toHaveLength(2);
    expect(screen.getByText(/Clear follow-up opportunities/i)).toBeDefined();
    expect(
      screen.getByText(/More productive time for salespeople/i)
    ).toBeDefined();
  });

  it('renders all four how it works steps', () => {
    setPath('/');
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /From uncertain data/i })
    ).toBeDefined();
    expect(screen.getAllByRole('listitem')).toHaveLength(7);
  });

  it('renders About as a separate page', () => {
    setPath('/about');
    render(<App />);
    expect(
      screen.getByText(/Hi, I'm Donna, the person behind Data Detox/i)
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
        name: /A database is only valuable if it works/i,
      })
    ).toBeDefined();
    expect(
      screen.getByText(/keep their databases accurate, current and ready to use/i)
    ).toBeDefined();
    expect(
      screen.getByText(/Less time behind the computer. More time in front of clients/i)
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
    expect(screen.getByLabelText(/What do you need help with/i)).toBeDefined();
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
    expect(screen.getByText(/Tell us what you need help with/i)).toBeDefined();
  });

  it('renders a dedicated service page', () => {
    setPath('/database-revitalisation');
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /Database Revitalisation/i })
    ).toBeDefined();
    expect(
      screen.getByRole('link', { name: /Back to services/i })
    ).toBeDefined();
    expect(
      screen.getByText(/A real estate database is never finished/i)
    ).toBeDefined();
    expect(
      screen.getByText(/That’s where Data Detox comes in/i)
    ).toBeDefined();
  });

  it('renders the full Client Verification content', () => {
    setPath('/client-verification');
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /Client Verification/i })
    ).toBeDefined();
    expect(
      screen.getByText(/information in your NurtureCloud database/i)
    ).toBeDefined();
    expect(
      screen.getByText(/Every conversation is recorded/i)
    ).toBeDefined();
    expect(
      screen.getByText(/referred back to the agent/i)
    ).toBeDefined();
    expect(
      screen.getByText(/stronger foundation for prospecting/i)
    ).toBeDefined();
  });

  it('renders the full Appraisal Preparation content', () => {
    setPath('/appraisal-preparation');
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /Appraisal Preparation/i })
    ).toBeDefined();
    expect(
      screen.getByText(/Less time behind the computer/i)
    ).toBeDefined();
    expect(
      screen.getByText(/prepared in Property Smarts/i)
    ).toBeDefined();
    expect(
      screen.getByText(/final appraisal price and commission/i)
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
