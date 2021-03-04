function titleCase(title, minorWords) {
    let noMinorWords = function (string) {
        return string.split(' ').map(el => `${el[0].toUpperCase()}${el.slice(1).toLowerCase()}`.join(' '));
    
    }

    minorWords === undefined ? minorWords = "" : minorWords;
    title === undefined ? title = "" : title;
    
let titleMinusculo = `${title[0].toUpperCase()}${title.slice(1).toLowerCase()}`.split(' ');
let minorWordsFinal = minorWords.toLowerCase().split(' ').map(el => [el, el]);
let objetoMinor = Object.fromEntries(minorWordsFinal);
    
 /*return  titleMinusculo.map(el =>minorWordsFinal.indexOf(el) === -1 ? `${el[0].toUpperCase()}${el.slice(1).toLowerCase()}` : el  )
    
    */
    let finalfinal = titleMinusculo.map(el => {
        if (el === objetoMinor[el]) {
            return el
        } else {
            return `${el[0].toUpperCase()}${el.slice(1).toLowerCase()}`
        }

    }).join(' ');
    return title;
    
}

console.log(titleCase('')); //'A Clash of Kings'

