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
   //return arrayNum.sort((a, b) => a[0] - b[0]).map(el => el[1]); respuesta buena sin los strigs
    
    let flato = arrayNum.flat();
    let objeto = Object.fromEntries(arrayNum);

  /*  let sorteado = arrayNum.sort((a, b) => {
        let indexito = flato.indexOf(a[0]);
       
        let vacio = [];
        if (flato.indexOf(a[0], indexito + 1) !== -1) {
            vacio.push(a[1])
            return a[1] - b[1];
       
        } else {
           return a[0] -b[0]
        }

    });

    return sorteado;
*/
    let vacio = [];
    for (let i = 0; i < arrayNum.length; i++){
        
        if (flato.indexOf(arrayNum[i][0], flato.indexOf(arrayNum[i][0]) + 1) !== -1) {
            vacio.push(arrayNum[i][0])
        }
    }
    return vacio;
};



console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));


