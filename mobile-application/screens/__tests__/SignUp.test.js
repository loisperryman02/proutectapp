import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignUp from '../SignUp';
import axios from 'axios';

jest.mock('axios');

describe('SignUp', () => {
  it('renders all text and placeholder', () => {
    const navigationMock = { navigate: jest.fn() };
    const { getByPlaceholderText, getByText } = render(<SignUp navigation={navigationMock} />);
    expect(getByPlaceholderText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByPlaceholderText('Name')).toBeTruthy();
    expect(getByPlaceholderText('Confirm Password')).toBeTruthy();
    expect(getByText('Register')).toBeTruthy();
    expect(getByText('Sign up')).toBeTruthy();
  });
});

it('displays error message when two different passwords are entered', async () => {
  const navigationMock = { navigate: jest.fn() };
  axios.post.mockRejectedValue({ response: { status: 400, data: { message: 'Passwords do not match.' } } });

  const { getByPlaceholderText, getByText } = render(<SignUp navigation={navigationMock} />);

  fireEvent.changeText(getByPlaceholderText('Password'), 'wronguser');
  fireEvent.changeText(getByPlaceholderText('Confirm Password'), 'wrongpassword');
  fireEvent.press(getByText('Register'));

  await waitFor(() => {
    expect(getByText('Passwords do not match.')).toBeTruthy();
  });
});

it('displays error message when a user already exists', async () => {
  const navigationMock = { navigate: jest.fn() };
  axios.post.mockRejectedValue({ response: { status: 400, data: { message: 'Username already exists.' } } });

  const { getByPlaceholderText, getByText } = render(<SignUp navigation={navigationMock} />);

  fireEvent.changeText(getByPlaceholderText('Username'), 'existingUser');

  fireEvent.press(getByText('Register'));

  await waitFor(() => {
    expect(getByText('Username already exists.')).toBeTruthy();
  });
});

it('displays error message when there is a server error', async () => {
  const navigationMock = { navigate: jest.fn() };
  axios.post.mockRejectedValue({ response: { status: 500, data: { message: "Server error" } } });

  const { getByPlaceholderText, getByText } = render(<SignUp navigation={navigationMock} />);

  fireEvent.changeText(getByPlaceholderText('Username'), 'user');
  fireEvent.changeText(getByPlaceholderText('Password'), 'password');
  fireEvent.changeText(getByPlaceholderText('Confirm Password'), 'password');
  fireEvent.changeText(getByPlaceholderText('Name'), 'name');

  fireEvent.press(getByText('Register'));

  await waitFor(() => {
    expect(getByText("Server error")).toBeTruthy();
  });
});

it('navigates to the login page after a successful sign up', async () => {
  const navigationMock = { navigate: jest.fn() };
  axios.post.mockResolvedValue({ data: { message: "Sign up Successful" } });
  
  const { getByText } = render(<SignUp navigation={navigationMock} />);
  fireEvent.press(getByText('Register'));

  await waitFor(() => {
    expect(navigationMock.navigate).toHaveBeenCalledWith("Login");
  });
});


