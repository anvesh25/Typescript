//Decorators
function logger(target, name, descriptorkey)
{
    console.log(target);
    console.log(name);
    console.log('inside logger');
    const originamFn = descriptorkey.value;
    descriptorkey.value=function()
    {
        console.log(name + 'This is insid elog decorator');
        originamFn.call(this);
    }   
    return descriptorkey;
}

class Animal
{
    name: string = 'animal';
    @ourOwnLogger
    walk()
    {
        console.log(this.name + 'is walking');
    }
}

class Dog{
    @ourOwnLogger
    bark()
    {
        console.log('barking');
    }
}

const a7 =new Animal();
const a6 = new Dog();
a6.Dog();
a7.wall();


function abc(x,y)
{
    console.log(this.myname);
}
var obj ={
    myname: 'anvesh';
}

obj.abc('myname');


//Closure example
function parent(){
    let a=10;
    return function(){
        a=a+1;
        console.log(a);
    }
}
const innerfn = parent();
innerfn();
innerfn();
innerfn();
const innerfn2 = parent();
innerfn2();
innerfn();
innerfn2();
