import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SettingsProvider, { SettingsContext } from '.';

describe('Settings Provider Tests', () => {
  it('initial state loads as expected', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {
            ({ displayCount, sort, showComplete }) => (
              <ul>
                <li data-testid="displayCount"> {displayCount} </li>
                <li data-testid="sort"> {sort} </li>
                <li data-testid="showComplete"> {showComplete.toString()} </li>
              </ul>
            )
          }
        </SettingsContext.Consumer>
      </SettingsProvider>
    );
    let sortLi = screen.getByTestId('sort');
    let showCompleteLi = screen.getByTestId('showComplete');
    let displayCountLi = screen.getByTestId('displayCount');

    expect(showCompleteLi).toHaveTextContent('false');
    expect(sortLi).toHaveTextContent('difficulty');
    expect(displayCountLi).toHaveTextContent('3');
  })
});