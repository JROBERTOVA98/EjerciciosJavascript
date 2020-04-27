//logical operators OR || and AND &&

const password = 'p@ss12';

if (password.length >= 12 && password.includes('@')){
    console.log('that password is migthy strong');    
} else if (password.length >= 8 || password.includes('@') && password.length>=5){
    console.log('that password is long enough!');    
} else {
    console.log('password is not long enough');    
}