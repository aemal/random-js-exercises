import _ from 'lodash';
import { getDivisibles } from '../../utils/math';
import FizzBuzzLucky from '../fizz-buzz-lucky';

class FizzBuzzLuckyCount extends FizzBuzzLucky {
    getOutputs({ rangeFrom, rangeTo }) {
        let outputs = [];

        for(let num = rangeFrom; num <= rangeTo; num++) {
            if(String(num).match('3')) {
                outputs.push("lucky");
            } else {
                outputs.push(this.getOutput(num, rangeFrom, rangeTo));
            }
        }

        outputs = [...outputs, ...this.countItems(outputs)];

        return outputs;
    }

    countItems(outputs) {
        let counts = outputs.reduce((p, c) => {
            if(Number.isInteger(c)) {
                p.hasOwnProperty('integer') === true 
                    ? p['integer']++
                    :p['integer'] = 1;
            } else {
                p.hasOwnProperty(c) !== true
                    ? p[c] = 0
                    : p[c]++;
            }
            return p;
        }, {});

        let countOutput = [];
        for(let count in counts) {
            countOutput.push(count + ": " + counts[count]);
        }

        return countOutput;
    }

}

export default FizzBuzzLuckyCount;