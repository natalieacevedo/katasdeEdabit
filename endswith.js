function solution(str, ending){
    
    let indice = str.length - ending.length;

    return str.slice(indice) === ending;
   
}
  

console.log(solution('abcde', 'cde'));