import _ from 'lodash';
import { getDivisibles } from '../../utils/math';

class FizzBuzz {
    constructor(range) {
        this.range = range;
    }

    getOutputs({ rangeFrom, rangeTo }) {
        let outputs = [];

        for(let num = rangeFrom; num <= rangeTo; num++) {
            outputs.push(this.getOutput(num, rangeFrom, rangeTo));
        }

        return outputs;
    }

    getOutput(num, rangeFrom, rangeTo) {
        let divisibleBy = getDivisibles({ 
            num, 
            rangeFrom, 
            rangeTo
        });

        if(_.includes(divisibleBy, 3) && !_.includes(divisibleBy, 15)) {
            return "fizz";
        } else if(_.includes(divisibleBy, 5) && !_.includes(divisibleBy, 15)) {
            return "buzz";
        } else if(_.includes(divisibleBy, 15)) {
            return "fizzbuzz";
        } else {
            return num;
        }

    }

    printOutput() {
        let outputs = this.getOutputs(this.range);

        let outputStr = _.reduce(outputs, (outputStr, item) => {
            return `${outputStr} ${item}`; 
        }, '').trim();

        return outputStr;
    }
}

export default FizzBuzz;