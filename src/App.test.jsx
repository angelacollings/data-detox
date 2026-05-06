import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { afterEach, describe, it, expect } from 'vitest';

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
      screen.getByRole('heading', { level: 1, name: /Data Detox/i }),
    ).toBeDefined();
  });

  it('renders the primary call to action', () => {
    setPath('/');
    render(<App />);
    expect(screen.getByRole('link', { name: /Talk to us/i })).toBeDefined();
  });

  it('renders the contact form fields', () => {
    setPath('/');
    render(<App />);
    expect(screen.getByLabelText(/Name/i)).toBeDefined();
    expect(screen.getByLabelText(/Email/i)).toBeDefined();
    expect(screen.getByLabelText(/What do you need help with/i)).toBeDefined();
    expect(screen.getByRole('button', { name: /Send message/i })).toBeDefined();
  });

  it('renders privacy and terms links', () => {
    setPath('/');
    render(<App />);
    expect(screen.getByRole('link', { name: /Privacy/i })).toBeDefined();
    expect(screen.getByRole('link', { name: /Terms/i })).toBeDefined();
  });

  it('renders privacy as a separate page', () => {
    setPath('/privacy');
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 2, name: /Privacy Policy/i }),
    ).toBeDefined();
    expect(screen.queryByRole('link', { name: /Talk to us/i })).toBeNull();
  });

  it('renders terms as a separate page', () => {
    setPath('/terms');
    render(<App />);
    expect(screen.getByRole('heading', { level: 2, name: /Terms/i })).toBeDefined();
    expect(screen.getByRole('link', { name: /Back to home/i })).toBeDefined();
  });
});
