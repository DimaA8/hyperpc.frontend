import { JestConfigWithTsJest } from 'ts-jest'

export const config: JestConfigWithTsJest =  {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  globals: {
    "ts-jest": {
      isolatedModules: true
    }
  }
};