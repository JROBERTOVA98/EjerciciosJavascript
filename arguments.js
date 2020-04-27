//arguments & parameters

const speak = function(name = 'Roberto', time = 'nigth'){
    console.log('good ${time} ${name}');    
};

speak();
speak('Sofia')
speak('Roberto','morning');