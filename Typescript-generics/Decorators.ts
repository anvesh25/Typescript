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


//function abc(x,y)
//{
    //console.log(this.myname);
//}
//var obj ={
    //myname: 'anvesh';
//}

//obj.abc('myname');


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

//Pass by value and Pass by reference
//object is an pass by reference
//premitive data type are pass by values.

// ...a is a spread operator
const a ={}
const b=a;
b.prop1='hello';
console.log(a);


const z ={
    myvar:'fhjk',
    another:'ghfjk'
};
const y={
    ...z,
    newprop:'hjkl'
};
console.log(b);





