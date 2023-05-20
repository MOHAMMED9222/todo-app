import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LoginProvider, { LoginContext } from '.';

describe('Auth Provider Tests', () => {
  it('initial state loads as expected', () => {
    render(
      <LoginProvider>
        <LoginContext.Consumer>
          {
            ({ loggedIn, user }) => (
              <>
                <p data-testid="loggedIn"> {loggedIn.toString()} </p>
                <p data-testid="userObject">{typeof(user)}</p>
                <p data-testid="userKeys">{Object.keys(user).length}</p>
              </>
            )
          }
        </LoginContext.Consumer>
      </LoginProvider>
    );
    let loggedInP = screen.getByTestId('loggedIn');
    let userObjectP = screen.getByTestId('userObject');
    let userKeysP = screen.getByTestId('userKeys');

    expect(loggedInP).toHaveTextContent('false');
    expect(userObjectP).toHaveTextContent('object');
    expect(userKeysP).toHaveTextContent('1');
  })
})