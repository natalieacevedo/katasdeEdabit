/*Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.*/

Math.round = function(number) {
    
    let toString = number.toString();
    let toArray = toString.split('.').map(el => parseInt(el));

    return `.${toArray[1]}` >= 0.5 ? toArray[0] + 1 : toArray[0]; 


  };
  
Math.ceil = function (number) {
  let reg = /\./;
  let cadena = number.toString();
  let punto = cadena.indexOf('.');

    if (number > 0 && number < 1) {
      return 1
    } if (number > 1 && reg.test(cadena)) {
     return  parseInt(cadena.slice(0, punto)) + 1;
    }
    
  return number;

  };
  
Math.floor = function (number) {
  let reg = /\./;
  let siDecimal = reg.test(number.toString());
  let cadena = number.toString();
  let punto = cadena.indexOf('.');

  if (number > 0 && siDecimal) {
    return parseInt(cadena.slice(0, punto))
  }

  };

console.log(Math.ceil(5));//0
console.log(Math.ceil(31.000000001));//1
console.log(Math.ceil(7.12));//20
console.log(Math.ceil(16.5));//21

