/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignUp from '../Components/SignUp';

describe('SignUp component', () => {
  it('should have initial state with empty values for all form fields', () => {
    const { getByLabelText } = render(<SignUp />);
    expect(getByLabelText('First Name').value).toBe('');
    expect(getByLabelText('Last Name').value).toBe('');
    expect(getByLabelText('Email address').value).toBe('');
    expect(getByLabelText('Password').value).toBe('');
  });

  it('should update state on input change', () => {
    const { getByLabelText } = render(<SignUp />);
    fireEvent.change(getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(getByLabelText('Email address'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: 'password123' } });
    expect(getByLabelText('First Name').value).toBe('John');
    expect(getByLabelText('Last Name').value).toBe('Doe');
    expect(getByLabelText('Email address').value).toBe('john.doe@example.com');
    expect(getByLabelText('Password').value).toBe('password123');
  });

  it('should save form data to localStorage on form submission', () => {
    const { getByLabelText, getByRole } = render(<SignUp />);
    fireEvent.change(getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(getByLabelText('Email address'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: 'password123' } });
    fireEvent.click(getByRole('button', { name: 'Sign Up' }));
    expect(JSON.parse(localStorage.getItem('user'))).toEqual({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    });
  });

  it('should show alert on form submission', () => {
    const { getByLabelText, getByRole } = render(<SignUp />);
    fireEvent.change(getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(getByLabelText('Email address'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: 'password123' } });
    global.alert = jest.fn();
    fireEvent.click(getByRole('button', { name: 'Sign Up' }));
    expect(global.alert).toHaveBeenCalledWith('You have successfully signed up!');
  });
});
