function isValidWalk(walk) {
    if(walk.length !== 10){
      return false
    } else {
      let nadira = {};
      walk.forEach(element => {
       let count = nadira[element] || 0;
       count++;
       nadira[element] = count;
      });
      
      return nadira['n'] == nadira['s'] && nadira['e'] == nadira['w'];
    }
};


console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));

console.log(isValidWalk(['n','s','e','w','n','s','e','w','n','s']));

console.log(isValidWalk(['n', 'e', 'w', 's', 'n', 's', 'e', 'w', 'n', 's']));