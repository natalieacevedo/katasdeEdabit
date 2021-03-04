function stockList(listOfArt, listOfCat) {
    
    let vacio = [];
    if(!listOfArt.length|| !listOfCat.length) {
        return '';
    } else {
       
        let newList = listOfArt.map(el => {
            let newO = el.split(' ');
            return newO
        });
       
        for (let i = 0; i < listOfCat.length; i++){
          let sumita = 0;
         for (let j = 0; j < newList.length; j++){
                if(listOfCat[i] === newList[j][0][0])
                    sumita += parseInt(newList[j][1])
         }
        vacio.push([listOfCat[i], sumita]);

        }
        return vacio.map(el => `(${el[0]} : ${el[1]})`).join(' - ');
    }
      
    }
   
//(A:200)-(B:1140)-(W:0)

let b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]

let c = ["A", "B", "W"]
//let res = "(A : 200) - (B : 1140)"
console.log(stockList(b,c));
/*
[…]
​
0: Array [ "ABAR", "200" ]
​
1: Array [ "CDXE", "500" ]
​
2: Array [ "BKWR", "250" ]
​
3: Array [ "BTSQ", "890" ]
​
4: Array [ "DRTY", "600" ]
​
length: 5*/
//'(A : 0) - (B : 114) - (C : 70) - (W : 0)', instead got: '(A:0)-(B:114)-(C:70)-(W:0)'