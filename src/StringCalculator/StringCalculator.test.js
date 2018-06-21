const StringCalculator = require('./StringCalculator');

describe('StringCalculator', () => {
  it('An empty string returns zero', () => {
    expect(StringCalculator.add('')).toEqual(0);
  });

  it('A single number returns the value', () => {
    expect(StringCalculator.add('1')).toEqual(1);
    expect(StringCalculator.add('2')).toEqual(2);
  });

  it('Two numbers, comma delimited, returns the sum', () => {
    expect(StringCalculator.add('1,2')).toEqual(3);
    expect(StringCalculator.add('10,20')).toEqual(30);
  });

  it('Two numbers, newline delimited, returns the sum', () => {
    expect(StringCalculator.add('1\n2')).toEqual(3);
    expect(StringCalculator.add('10,\n20')).toEqual(30);
  });

  it('Three numbers, delimited either way, returns the sum', () => {
    expect(StringCalculator.add('1\n2,3\n4')).toEqual(10);
  });

  it('Negative numbers throw an exception with the message', () => {
    expect(() => StringCalculator.add('-1,2,-3'))
      .toThrowError('negatives not allowed: -1,-3');
  });

  it('Numbers greater than 1000 are ignored', () => {
    expect(StringCalculator.add('1001')).toEqual(0);
  });

  it('A single char delimiter can be defined on the first line starting with //', () => {
    expect(StringCalculator.add('//#\n1#2')).toEqual(3);
  });

  it('A multi char delimiter can be defined on the first line starting with //', () => {
    expect(StringCalculator.add('//###\n1###2')).toEqual(3);
  });
});
