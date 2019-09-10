
var i = 0;

    var nameQuestion = prompt('p1 what is your name?');

    if(nameQuestion !== ''||null){
        alert('hello  '+nameQuestion);  
    }

    if(nameQuestion === ''||null){
        while(true){
            var nameQuestion = prompt('p1 what is your name?');
            if(nameQuestion !== ''||null){
                alert('hello '+nameQuestion);
            }else{
                while(true){
                    var nameQuestion = prompt('p1 what is your name?');

                    if(nameQuestion !== ''||null){
                        break;
                    }
                }
            }
            break;
        }
    }

    var nameQuestion2 = prompt('p2 what is your name?');

    if(nameQuestion2 !== ''||null){
        alert('hello  '+nameQuestion2);  
    }

    if(nameQuestion2 === ''||null){
        while(true){
            var nameQuestion2 = prompt('p2 what is your name?');
            if(nameQuestion2 !== ''||null){
                alert('hello '+nameQuestion2);
            }else{
                while(true){
                    var nameQuestion2 = prompt('p2 what is your name?');

                    if(nameQuestion2 !== ''||null){
                        break;
                    }
                }
            }
            break;
        }
    }


    var word = prompt('you have to input start word.');

    if(word === ''||null){
        while(true){
            var word = prompt('you have to input start word.');
            if(word !== ''||null){
                play(word);
            }else{
                while(true){
                    var word = prompt('you have to input start word.');

                    if(word !== ''||null){
                        alert('start game!');
                        play(word);
                        break;
                    }
                }
            }
            break;
        }
    }
    

    function play(word){
        while(i<5){
            i++;
            if(i%2 === 1){
                alert(nameQuestion+' your turn!');
            }else if(i%2 === 0){
                alert(nameQuestion2+' your turn!');
            }
            var answer = prompt(word);

            if(word[word.length - 1] === answer[0]){
                alert('right');
                var word = answer;
            }else{
                alert('false');
            }
        }
    }