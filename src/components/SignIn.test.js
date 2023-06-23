import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';
import SignIn from './SignIn';

test('calls signIn on form submission', () => {
  const signInMock = jest.fn(() => Promise.resolve(null)); // Devuelve una promesa resuelta
  const testContext = {
    signin: signInMock,
  };

  render(
    <Router>
      <AuthContext.Provider value={testContext}>
        <SignIn />
      </AuthContext.Provider>
    </Router>,
  );

  fireEvent.change(screen.getByPlaceholderText('Correo Institucional'), {
    target: { value: 'test@test.com' },
  });
  fireEvent.change(screen.getByPlaceholderText('Contraseña'), {
    target: { value: 'testpassword' },
  });

  fireEvent.submit(screen.getByText('Sign in'));

  expect(signInMock).toHaveBeenCalledWith({
    email: 'test@test.com',
    password: 'testpassword',
  });
});
