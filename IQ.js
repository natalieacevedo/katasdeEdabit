function iqTest(numbers){
    
  let arraycito = numbers.split(' ').map(el => parseInt(el));
  
  let objetito = {
    'countEven': 0,
    'countOdd': 0
  };

  for (let i = 0; i < arraycito.length; i++){

    if (arraycito[i] % 2 === 0) {
      objetito.countEven += 1;
      objetito.Even = i+1
    
    } else {
      objetito.countOdd += 1;
      objetito.Odd = i+1;
    }
    if (objetito.countEven > 0 && objetito.countOdd > 0 && objetito.countOdd !== objetito.countEven) {
        break
      }
  };

  return objetito.countEven < objetito.countOdd ? objetito.Even : objetito.Odd;
    
};

    
/*function iqTest(numbers){
    
    let arraycito = numbers.split(' ').map(el => parseInt(el));
   
    let par = arraycito.filter(el => el % 2 === 0);
    let inpar = arraycito.filter(el => el % 2 !== 0);
    let chosen = par.length === 1 ? chosen[0] : inpar[0];
    return arraycito.indexOf(chosen) + 1;
    
  }*/

console.log(iqTest("2 4 7 8 10"));
