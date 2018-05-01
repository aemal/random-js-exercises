export function getDivisibles({ num, rangeFrom, rangeTo }) {
    let divisibles = [];

    for(let i = 1; i <= 20; i++) {
        if(num % i === 0) {
            divisibles.push(i);
        }
    }

    return divisibles;
}
