module.exports = {
    preset: 'jest-puppeteer',
    testMatch: ["**/tests/**/*.ts"],
    testPathIgnorePatterns: ['/node_modules/', 'dist'],
    setupFilesAfterEnv: ['expect-puppeteer'],
    transform: {
        "^.+\\.ts?$": "ts-jest"
    },
    // globals: {
    //     'ts-jest': {
    //         tsConfig: '<rootDir>/tsconfig.json',
    //     },
    // },
    // testEnvironment: "node"
};