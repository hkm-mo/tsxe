/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    coverageDirectory: "coverage",
    preset: "ts-jest",
    testEnvironment: "jsdom",
    testRegex: "(\\/__tests__\\/.*|(\\.|\\/)(test|spec))\\.tsx?$",
    globals: {
        "ts-jest": {
            tsconfig: "__tests__/tsconfig.json",
        },
    },
};