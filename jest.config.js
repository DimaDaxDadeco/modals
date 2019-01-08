module.exports = {
  "setupFiles": [
    "<rootDir>/src/tests/test-shim.js",
    "<rootDir>/src/tests/test-setup.js"
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "<rootDir>/src/tests/test-preprocessor.js"
  },
  "testMatch": [
    "**/tests/*.test.(ts|tsx|js)"
  ],
  "moduleNameMapper": {
    "\\.(css|less)$": "identity-obj-proxy"
  }
};
