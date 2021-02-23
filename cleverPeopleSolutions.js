function highestRank(arr){
    var obj = {};
    arr.forEach(function(elem){
       if(obj[elem] === undefined)
         obj[elem] = 0;
       obj[elem]++;
    });
    console.log(obj);
    var keys = Object.keys(obj), highest = 0, key;
    keys.forEach(function(elem){
       if(obj[elem] >= highest)
       {
          highest = obj[elem];
          key = elem;
       }
    })
    return parseInt(key);
};




console.log(highestRank([5, 8, 9, 9, 4, 5, 2, 5, 1, 0,9,9]));