import { getDivisibles } from '../../utils/math';
import FizzBuzzLuckyCount from './index';

test('output method of FizzBuzzLuckyCount class returns proper array', () => {
    let output = new FizzBuzzLuckyCount().getOutputs({ rangeFrom: 1, rangeTo: 20 });
    let expectedOutput = [1, 2, "lucky", 4, "buzz", "fizz", 7, 8, "fizz", "buzz",11, "fizz", "lucky", 14, "fizzbuzz", 16, 17, "fizz", 19, "buzz", "integer: 10", "lucky: 1", "buzz: 2", "fizz: 3", "fizzbuzz: 0"];
    expect(output).toEqual(expectedOutput);
});

test('printOutput method of FizzBuzzLuckyCount class returns proper string', () => {
    let objFizzBuzzLucky = new FizzBuzzLuckyCount({ rangeFrom: 1, rangeTo: 20 });
    let expectedOutput = '1 2 lucky 4 buzz fizz 7 8 fizz buzz 11 fizz lucky 14 fizzbuzz 16 17 fizz 19 buzz integer: 10 lucky: 1 buzz: 2 fizz: 3 fizzbuzz: 0';
    
    expect(objFizzBuzzLucky.printOutput()).toBe(expectedOutput);
});

