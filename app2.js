var arrayOfAnswers = ['snowboarding','skateboarding','motorcycle riding','mountain biking','climbing','playing music']
question7:
for( i = 0; i < 6; i++){
    var response7 = prompt('What is one of my favorite hobbies?').toLowerCase();
    for(var j = 0; j < arrayOfAnswers.length; j++){
        if(response7 == arrayOfAnswers[j]){
            alert('Good job!')
            // rightAnswers =(rightAnswers + 1)
            break question7; 
        }
    }if( response7 != arrayOfAnswers[j]){
            alert('try again');
        }
    if( i=== 5){
        alert('you ran out of guesses')
    }
}