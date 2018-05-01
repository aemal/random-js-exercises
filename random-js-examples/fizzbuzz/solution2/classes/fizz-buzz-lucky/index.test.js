import { getDivisibles } from '../../utils/math';
import FizzBuzzLucky from './index';


test('output method of fizzBuzz class returns proper array', () => {
    let output = new FizzBuzzLucky().getOutputs({ rangeFrom: 1, rangeTo: 20 });
    let expectedOutput = [1, 2, "lucky", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", "lucky", 14, "fizzbuzz", 16, 17, "fizz", 19, "buzz"];
    expect(output).toEqual(expectedOutput);
});

test('printOutput method of FizzBuzzLucky class returns proper string', () => {
    let objFizzBuzzLucky = new FizzBuzzLucky({ rangeFrom: 1, rangeTo: 20 });
    let expectedOutput = '1 2 lucky 4 buzz fizz 7 8 fizz buzz 11 fizz lucky 14 fizzbuzz 16 17 fizz 19 buzz';
    
    expect(objFizzBuzzLucky.printOutput()).toBe(expectedOutput);
});

