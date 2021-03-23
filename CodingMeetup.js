function allContinents(list) {
    
    let continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    return list.reduce((acc, el) => {
      
        if (continents.indexOf(el.continent) !== -1 && acc.indexOf(el.continent) === -1) {
            return acc.concat(el.continent);
        };
        return acc;
    }, []).length === continents.length;
};

let list1 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Africa', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Asia', age: 25, language: 'JavaScript' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' }
  ];
  
  

console.log(allContinents(list1));