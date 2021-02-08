
let vocales = {
    'a' :1,
    'e': 2,
    'i': 3,
    'o': 4,
    'u': 5
}


function encode(string) {

    for (let i = 0; i < string.length; i++){
        if (vocales.hasOwnProperty(string[i])) {
        
         string = string.replace(string[i], vocales[string[i]]);
        
        } 
    }
    return string;

  }
  
function decode(string) {

    
    for (let j = 0; j < string.length; j++){
        for (let key in vocales) {
            if (vocales[key] == string[j]) {
                string = string.replace(string[j], key)
                continue;
            }
        }
    }
    return string;
  }

console.log(encode('hello'));
console.log(decode('h2ll4'));