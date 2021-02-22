function highestRank(arr) {
    let cuentas = new Map();
    let n = 0;
    let max = 0;
    let candidates = [];
    
    for (let num of arr) {
        n = cuentas.get(num);
        if (n === undefined) {
            n = 0;
        }
        n++;
        cuentas.set(num, n);
        if (n > max) {
            max = n;            
        }
    }

    for (let [n, count] of cuentas.entries()) {
        if (count === max) {
            candidates.push(n);
        }
    }

    console.log(candidates);

    return Math.max(...candidates);
};

var arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10, 10];
console.log(highestRank(arr));