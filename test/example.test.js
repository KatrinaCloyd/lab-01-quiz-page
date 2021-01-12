// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { countsAsYes } from './utils.js';
import { percentage } from './utils.js';

const test = QUnit.test;

test('should return true when a word starting with a Y is given', (expect) => {
    const expected = true;
    const actual = countsAsYes('yelp');
    expect.equal(actual, expected);
});

test('should return false when a word that does not start with a Y is given', (expect) => {
    const expected = false;
    const actual = countsAsYes('tornado');
    expect.equal(actual, expected);
});


test('should return 67 when given 2', (expect) => {
    const expected = 67;
    const actual = percentage(2, 3);
    expect.equal(actual, expected);
});

test('should return 100 when given 3', (expect) => {
    const expected = 100;
    const actual = percentage(3, 3);
    expect.equal(actual, expected);
});

test('should return 33 when given 1', (expect) => {
    const expected = 33;
    const actual = percentage(1, 3);
    expect.equal(actual, expected);
});

