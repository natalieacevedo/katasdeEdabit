function highestRank(arr) {
    let objeto = {};
    
    for (let i = 0; i < arr.length; i++){
        let cuenta = 0;
        let nuevo = arr;
       // console.log(nuevo);
         
        while (nuevo.indexOf(arr[i]) !== -1) {
            let indexo = nuevo.indexOf(arr[i]);
            cuenta++;
            nuevo = nuevo.slice(indexo + 1);
            objeto[arr[i]] = cuenta;

        }
       
    };
    
    return arr.reduce((acc, el) => {
        if (objeto[acc] > objeto[el]) {
            return acc;
        } else if (objeto[acc] == objeto[el]) {
            return Math.max(acc, el)
        } else {
            return el
        }
    });

    
};

var arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
console.log(highestRank(arr));