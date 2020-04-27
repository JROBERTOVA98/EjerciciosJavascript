//Objects literals
/*
let user = {
    name: 'Roberto',
    age: 21,
    email: 'jrobertova98@gmail.com',
    location: 'Quintana Roo',
    blogs: ['blog 1', 'blog 2']
};

console.log(user);
console.log(user.name);

//user.age = 25;
console.log(user.age);

console.log(user['email']);
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user);
*/
//object literals 2
/*
let user = {
    name: 'Roberto',
    age: 21,
    email: 'jrobertova98@gmail.com',
    location: 'Quintana Roo',
    blogs: ['blog 1', 'blog 2'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    }

};

user.login();
user.logout();

const name = 'Sofia';
name.toUpperCase();
*/
// object literals 3
/*
let user = {
    name: 'Roberto',
    age: 21,
    email: 'jrobertova98@gmail.com',
    location: 'Quintana Roo',
    blogs: ['blog 1', 'blog 2'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: () => {
        //console.log(this.blogs);
         //this.blogs
         /*console.log('this user has written the following blogs: ');
         this.blogs.forEach(blog => {
            console.log(blog);           
    })
        console.log(this);

user.logBlogs();
console.log(this);
*/

//Object literals 4
//const blogs = [
//    {title: 'Blog 1', likes: 30},
//    {title: 'blog 2', likes: 50}
//];

//console.log(blogs);

let user = {
    name: 'Roberto',
    age: 21,
    email: 'jrobertova98@gmail.com',
    location: 'Quintana Roo',
    blogs = [
            {title: 'Blog 1', likes: 30},
            {title: 'blog 2', likes: 50}
        ],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        //console.log(this.blogs);
         console.log('this user has written the following blogs: ');
         this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);           
    });
        console.log(this);
    }
};

user.logBlogs();