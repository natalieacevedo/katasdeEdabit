function bingo(ticket, win) {
    
    return ticket.filter(el => {
        let subString = el[0].split('');
        let count = 0;
        
        for (let i = 0; i < subString.length; i++) {
            if (subString[i].charCodeAt() === el[1]) {
                return el;
            }
        };
        
    }).length >= win ? "Winner!" : 'Loser!';

};

