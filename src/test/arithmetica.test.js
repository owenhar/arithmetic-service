const {add, subtract, multiply, divide} = require('../arithmetica');

test('2 + 3 is equal to 5', () => {
    expect(add(2,3)).toBe(5);
})

test('12.5 + 3000 is equal to 3012.5', () => {
    expect(add(12.5,3000)).toBe(3012.5);
})

test('3000000 + 0.00000001 is equal to 3000000.00000001', () => {
    expect(add(0.00000001,3000000)).toBe(3000000.00000001);
})

test('5 * 6 = 30', () => {
    expect(multiply(5,6)).toBe(30);
})

test('5 * 0 = 0', () => {
    expect(multiply(5,0)).toBe(0);
})

test('5 - 3 = 2', () => {
    expect(subtract(5,3)).toBe(2);
})
test('1 - 4 = -3', () => {
    expect(subtract(1,4)).toBe(-3);
})

test('1 / 4 = 0.25', () => {
    expect(divide(1,4)).toBe(0.25);
})

test('20 / 5 = 4', () => {
    expect(divide(20,5)).toBe(4);
})
