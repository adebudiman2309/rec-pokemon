const { iterativeFib } = require("../services/fibonacci/fibonacci");
const { isPrime } = require("../services/prime-number/prime-number");
const { getRandom } = require("../services/random/random");

test('generate fibonacci 4-th is 2', () => {
    // return assert.equal(iterativeFib(3), 2);
    expect(iterativeFib(4)).toBe(2);
});

test("5 is a prime number", () => {
    expect(isPrime(5)).toBeTruthy();
});

test("generate random between 1 - 10", () => {
    for(var i = 0; i <= 10; i++) {
        expect(getRandom(1,10)).toBeGreaterThanOrEqual(1);
        expect(getRandom(1,10)).toBeLessThanOrEqual(10);
    }
})