function diamond(n){
    let otrosEspacios = 1;
    let finalString = '';
    if (n % 2 === 0 || n < 1) {
        return null;

    } else {
      
       
        for (let i = 1; i <= n; i += 2){
            let espacios = (n - i) / 2
            //console.log(espacios);
            if (i !== n) {
                finalString += ' '.repeat(espacios) + '*'.repeat(i) + '\n';
            } else {
                finalString += '*'.repeat(i)+ '\n';
            }
        };

        for (let j = n - 2; j >= 1; j -= 2){
            console.log(otrosEspacios);
            finalString += ' '.repeat(otrosEspacios) + '*'.repeat(j) + '\n';
            otrosEspacios++;
        }
        
    }
   
    return finalString;
};


console.log(diamond(67));
