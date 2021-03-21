function count (string) {  
   
    let finalObject = {};

     string.split('').forEach(el => {
        
         if (finalObject[el] !== undefined) {
             finalObject[el] = finalObject[el];
             finalObject[el]++
         } else {
             finalObject[el] = 1;
         }
         
    });

    return finalObject;

};


console.log(count('abaaabccccccccccca'));C