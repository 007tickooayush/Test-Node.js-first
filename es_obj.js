//es6 object
let human = {
    height:6,
    country:'IN',
    health:50,
    eat(){
        this.height += 0.05;
        this.health += 10;
    }
};

console.log(human.health);
human.eat();
console.log(human.health);

//es6 pre initialization
let top_speed = 200;
let bhp = 1200;

let car = {
    top_speed,
    bhp,
    name:"SRT"
}

console.log(car.top_speed);

//es6 computed property names
let prop = 'name';
let id = '1001';
let mobile = '9089925676';

let user = {
    [prop]:'Hellsent',
    [`user_${id}`]:mobile
};

console.log(user);

var i=0;
var a = {
    ['foo' + ++i]:i,
    ['foo' + ++i]:i,
    ['foo' + ++i]:i
};

console.log(a);

var param = 'size';
var config = {
    [param]: 12,
    ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};

console.log(config.mobileSize); // 4
