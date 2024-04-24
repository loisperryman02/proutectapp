import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import MapScreen from '../Map';
import axios from 'axios';
import MockedNavigator from './MockedNavigator';

// Mocks
jest.mock('axios');
jest.mock('react-native-maps', () => {
  const { View } = require('react-native');
  const MockMapView = (props) => <View {...props} />;
  const MockMarker = (props) => <View {...props} />;
  MockMapView.Marker = MockMarker;
  return MockMapView;
});
jest.mock('react-native-google-places-autocomplete', () => 'GooglePlacesAutocomplete');
jest.mock('react-native-maps-directions', () => 'MapViewDirections');

describe('MapScreen', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        routes: [
          {
            overview_polyline: { points: 'abc' },
            legs: [
              {
                distance: { text: '1 km', value: 1000 },
                duration: { text: '10 mins', value: 600 },
                steps: [{ start_location: { lat: 0, lng: 0 }, end_location: { lat: 1, lng: 1 }, distance: { value: 1000 } }],
              },
            ],
          },
        ],
      },
    });

    axios.post.mockResolvedValue({
      data: { status: 'SUCCESS', data: {} }
    });
  });

  test('renders correctly', () => {
    const { getByText } = render(<MapScreen />);
    expect(getByText('Enter journey details:')).toBeTruthy();
  });

  test('handles direction fetching', async () => {
    const { getByTestId } = render(<MockedNavigator component={MapScreen} />);
    fireEvent.press(getByTestId('fetchDirectionsButton'));
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });
  });

});
