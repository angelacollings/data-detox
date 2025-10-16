import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('renders the Profile heading', () => {
    render(<App />);
    expect(screen.getByText(/Profile/i)).toBeDefined();
  });

  it('renders a user name', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 2 })).toBeDefined();
  });
});
