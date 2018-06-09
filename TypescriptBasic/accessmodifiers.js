var somevar;
somevar = true;
somevar = 10;
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = "Animal";
    }
    Animal.prototype.walk = function () {
        return this.name + " is walking";
    };
    return Animal;
}());
function getUser(user) {
    var newUser = user;
}
//class Animal {
//private myprop : string;
//public anotherprop : string;
//protected someprop : string;
//}
//class Dog extends Animal{
//bark(msg :string):void{
//comsole.log("Dog barks " + msg);
//}
//}
//const a  = new Animal();
//const d =new Dog();
//d.bark('biscuit');
