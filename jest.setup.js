jest.mock('react-native-reanimated', () =>
  jest.requireActual('react-native-reanimated/mock'),
);
global.__reanimatedWorkletInit = jest.fn();
