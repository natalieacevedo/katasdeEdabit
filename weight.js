function orderWeight(strng) {
    let arrayNum = strng.split(' ').map(el => {

        let acumula = 0;
        let cuenta = 0;
        while (cuenta < el.length) {

            acumula += parseInt(el[cuenta], 10);
            cuenta++;
        }
        return [acumula, el] ;
         }
    
    );
    let sorteado = arrayNum.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1].localeCompare(b[1]);
        } else {
            return a[0] - b[0];
        }
    });
  

    return sorteado.map(el => el[1]).join(' ');
    

};
//"11 11 2000 10003 22 123 1234000 44444444 9999")


console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));


