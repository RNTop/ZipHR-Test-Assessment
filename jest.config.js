const {defaults} = require('jest-config');

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  modulePathIgnorePatterns: ['extras'],
  setupFiles: [
    '<rootDir>/jest.setup.js',
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|react-(@native|universal|navigation)-(.*)|@react-(@native|universal|navigation)-(.*)|@react-native-community/(.*)|@react-navigation/(.*)|@twotalltotems/(.*)|rn-snackbar-component/(.*)|bs-platform)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.svg$': '<rootDir>/__mocks__/svgrMock.js',
  },
  moduleDirectories: ['node_modules', 'src'],
  verbose: true,
  timers: 'fake',
  testEnvironment: 'jsdom',
  testTimeout: 10000,
};
