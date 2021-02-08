
let vocales = {
    'a' :1,
    'e': 2,
    'i': 3,
    'o': 4,
    'u': 5
}


function encode(string) {
    let solucion = string;
    for (let i = 0; i < string.length; i++){
        if (vocales.hasOwnProperty(string[i])) {
        
         solucion = solucion.replace(string[i], vocales[string[i]]);
        
        }
        
    }
    return solucion;

   /* for (let key in vocales) {
       solucion =  string.replaceAll(key, vocales[key])
    }
    return solucion;
    */
  }
  
  function decode(string) {
    return
  }

console.log(encode('hello'));