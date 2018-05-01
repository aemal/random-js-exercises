import { getDivisibles } from '../../utils/math';
import FizzBuzz from './index';

test('getDivisibles function exists', () => {
    expect(getDivisibles).toBeDefined
});

test('getDivisibles of 5 in range of 1 to 20', () => {
    let divisibleBy = getDivisibles({ 
        num: 5, 
        rangeFrom: 1, 
        rangeTo: 20 
    });

    expect(divisibleBy).toEqual([1, 5]);
});

test('output method of fizzBuzz class returns proper array', () => {
    let output = new FizzBuzz().getOutputs({ rangeFrom: 1, rangeTo: 20 });
    let expectedOutput = [1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz", 16, 17, "fizz", 19, "buzz"];
    expect(output).toEqual(expectedOutput);
});

test('printOutput method of fizzBuzz class returns proper string', () => {
    let outputString = new FizzBuzz({ rangeFrom: 1, rangeTo: 20 });
    let expectedOutput = '1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz';
    expect(outputString.printOutput()).toBe(expectedOutput);
});