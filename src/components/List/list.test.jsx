import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import List from '.';
import LoginProvider from '../../Context/Auth';
import SettingsProvider from '../../Context/Settings';

describe('List Component Tests', () => {
  const item = {
    assignee: "Jordan",
    complete: false,
    difficulty: 4,
    id: "test-id",
    text: "Test Item"
  
  }
  it('renders data as expected if allowed', () => {
    render(
      <LoginProvider>
        <SettingsProvider>
          <List list={[item]} />
        </SettingsProvider>
      </LoginProvider> 
      
    );

    let assignee = screen.getByTestId('item-assignee-0');
    let text = screen.getByTestId('item-text-0');
    let difficulty = screen.getByTestId('item-difficulty-0');

    expect(assignee).toHaveTextContent('Jordan');
    expect(text).toHaveTextContent('Test Item');
    expect(difficulty).toHaveTextContent(4);

  })
})
