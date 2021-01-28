function factory(num) {
    
    return function (arr) {
        return arr.map(el =>el/ num)
    }
};

let arrr = [100, 60, 36];

console.log(arr);

console.log(factory(2)(arrr));
