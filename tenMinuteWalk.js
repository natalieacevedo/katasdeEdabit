function isValidWalk(walk) {
    
    if (walk.length !== 10) {
        
        return false
    } else {
        let nadira = {};

        walk.forEach(element => {
            nadira[element] = 0;

        });
    
    
    
        for (let i = 0; i < walk.length; i++) {
        
            if (nadira.hasOwnProperty(walk[i])) {
                nadira[walk[i]] += 1;
            }

        }
        let directions = [['n', 's'], ['e', 'w']];

        for (let j = 0; j < directions.length; j++) {
            if (nadira[directions[j][0]] !== nadira[directions[j][1]]) {
                return false
            }
        }
        return true;
    }
};


console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));

console.log(isValidWalk(['n','s','e','w','n','s','e','w','n','s']));

console.log(isValidWalk(['n', 'e', 'w', 's', 'n', 's', 'e', 'w', 'n', 's']));