import _ from 'lodash';
import { getDivisibles } from '../../utils/math';
import FizzBuzz from '../fizz-buzz';

class FizzBuzzLucky extends FizzBuzz {
    constructor(range) {
        super(range);
    }

    getOutputs({ rangeFrom, rangeTo }) {
        let outputs = [];

        for(let num = rangeFrom; num <= rangeTo; num++) {
            if(String(num).match('3')) {
                outputs.push("lucky");
            } else {
                outputs.push(this.getOutput(num, rangeFrom, rangeTo));
            }
        }

        return outputs;
    }

}

export default FizzBuzzLucky;