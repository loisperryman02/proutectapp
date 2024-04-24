import React from 'react';
import { render, fireEvent, act, waitFor} from '@testing-library/react-native';
import FeedbackPage from '../FeedbackPage'; // Adjust the import path as necessary
import axios from 'axios';

jest.mock('axios');

const mockNavigation = {
  navigate: jest.fn(),
};

const mockRoute = {
  params: { someKey: 'someValue' },
};

describe('FeedbackPage', () => {
  it('renders correctly', () => {
    const { getByText } = render(<FeedbackPage navigation={mockNavigation} route={mockRoute} />);
    expect(getByText('Route Feedback')).toBeTruthy();
    expect(getByText('Next')).toBeTruthy();
    expect(getByText('1. How safe did you feel on the route?')).toBeTruthy();
    expect(getByText("2. How well-lit was the route?")).toBeTruthy();
    expect(getByText("3. How exposed was the route to the public?")).toBeTruthy();
    expect(getByText("4. How accessible were emergency services?")).toBeTruthy();
  });

  it('updates rating on button press', () => {
    const { getAllByText } = render(<FeedbackPage navigation={mockNavigation} route={mockRoute} />);
    const ratingButtons = getAllByText('1'); // Assuming '1' is visible on the buttons

    act(() => {
      fireEvent.press(ratingButtons[0]); // Press the first rating button
    });

    // Assuming some text changes or something in the component to reflect the rating change
    expect(ratingButtons[0].props.style).toEqual({
      color: 'white' // Check if the style changes to clicked
    });
  });
});
