
  
    function twoSum(numbers, target) {
      
      let empty = {}

      numbers.forEach((element, index) => {
        
        empty[element] = index;

      });
      
      
      for (let i = 0; i < numbers.length; i++){

        let diferencia = target - numbers[i];

        if (empty[diferencia] !== undefined) {
          return [i, empty[diferencia]];
        }

      }
};
   
  


console.log(twoSum([1234, 5678, 9012], 14690));