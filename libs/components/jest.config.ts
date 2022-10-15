/* eslint-disable */
export default {
  displayName: 'components',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest'
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/components',
  setupFilesAfterEnv: [
    "./jest-setup.ts"
  ]
};
