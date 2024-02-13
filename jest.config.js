module.exports = {
    verbose: true,
    testEnvironment: 'jsdom',
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest"
    },
    "moduleNameMapper": {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    "collectCoverage": true,
    "coverageReporters": ["json", "lcov", "text", "clover"],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
  };