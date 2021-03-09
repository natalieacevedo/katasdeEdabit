function sum(num) {
    let all = [];
    let count = 0;
    
    for (let i = 1; i < num; i++){
        //all.push(i);
        for (let j = 0; j < i; j++){
            if (i + j === num) {
                all.push([i, j]);
            
            } else {
                i + j
            }
        }

    };
    return all;
};


console.log(sum(4));