module.exports = {
    // Use the jsdom environment to simulate a browser environment
    testEnvironment: 'jsdom',
  
    // Specify the directories where Jest should look for test files
    roots: ['<rootDir>/__tests__'],
  
    // Transform files using babel-jest (if you're using Babel)
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  
    // Specify the file extensions Jest should look for
    moduleFileExtensions: ['js'],
  
    // Mock static assets (e.g., CSS, images) during testing
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    },
  
    // Collect test coverage and specify the directories to include/exclude
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js'],
    coveragePathIgnorePatterns: ['/node_modules/'],
  
    // Setup files to run before each test
    //setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  };