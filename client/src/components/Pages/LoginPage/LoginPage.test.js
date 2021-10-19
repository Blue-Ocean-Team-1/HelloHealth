import React from 'react';
import LoginPage from './LoginPage.jsx';
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from '../../../../test-utils';

/*

// Get back DOM tree from "render"
let container = render(<LoginPage />).container;

it('examples', () => {
  // use screen.getByText, .getByRole
  const btn = screen.getByText('Click Me');
  expect(btn).toBeTruthy();

  // use container.querySelector, querySelectorAll
  const btn = container.querySelector("button")
  expect(btn).toBeTruthy()

  fireEvent.click(btn);

  const sampleInput = container.querySelector("input")
  fireEvent.change(sampleInput, { target: { value: 'customer' } });
});

*/

describe('<LoginPage />', () => {
  let container;

  beforeEach(() => {
    container = render(<LoginPage />).container;
  });

  it('renders customer type input selection', () => {
    const userTypeInput = container.querySelector('input');
    expect(userTypeInput).toBeTruthy();
  });

  it('renders continue button to move past customer type page', async () => {
    expect(screen.getByText('Continue')).toBeTruthy();
  });
});

describe('Login Page Switching', () => {
  let container;

  beforeEach(() => {
    container = render(<LoginPage />).container;
  });

  it('should navigate Customer Type then Login Page', () => {
    const userTypeInput = container.querySelector('input');
    fireEvent.change(userTypeInput, { target: { value: 'customer' } });
    fireEvent.click(screen.getByText('Continue'));
    // Changed to Log In screen
    expect(screen.getByText('Log In')).toBeTruthy();
  });
});

describe('Login Form', () => {
  let container;

  beforeEach(() => {
    container = render(<LoginPage />).container;

    // Skip past the customer type selection
    const userTypeInput = container.querySelector('input');
    fireEvent.change(userTypeInput, { target: { value: 'customer' } });
    fireEvent.click(screen.getByText('Continue'));
  });

  it('renders "Log In" title by default', () => {
    expect(screen.getByText('Log In')).toBeTruthy();
  });

  it('renders the alternate account sign in button', () => {
    expect(screen.getByText('Sign In With Google')).toBeTruthy();
    expect(screen.getByText('Sign In With Facebook')).toBeTruthy();
    // expect(screen.getByText('Sign In With Twitter')).toBeTruthy();
  });

  it('renders name, and email input', () => {
    const [
      emailInput,
      passwordInput,
    ] = container.querySelectorAll('input');

    expect(emailInput.getAttribute('name')).toBe('email');
    expect(passwordInput.getAttribute('name')).toBe('password');
  });
});

describe('Sign up Form', () => {
  let container;

  beforeEach(() => {
    container = render(<LoginPage />).container;

    // Skip past the customer type selection
    const userTypeInput = container.querySelector('input');
    fireEvent.change(userTypeInput, { target: { value: 'customer' } });
    fireEvent.click(screen.getByText('Continue'));

    // Navigate to the Sign Up page
    fireEvent.click(screen.getByText('Sign Up'));
  });

  it('renders "Sign Up" title', () => {
    expect(screen.getByText('Sign Up')).toBeTruthy();
  });

  it('renders name, email, and password form', () => {
    const [
      nameInput,
      emailInput,
      passwordInput,
    ] = container.querySelectorAll('input');

    expect(nameInput.getAttribute('name')).toBe('name');
    expect(emailInput.getAttribute('name')).toBe('email');
    expect(passwordInput.getAttribute('name')).toBe('password');
  });
});
