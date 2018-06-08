(function(){
    let somevar : number |boolean;
    somevar =true;
    somevar =10;

    interface IAnimal{
        name :string
        walk(): string;
    }

    class Animal implements IAnimal{
        name: string ="Animal";
        walk(): string{
            return `${this.name} is walking`;
        }
    }

    interface IAdmin{
        role : string;
        name : string;
    }
    interface Iuser{
        name : string;
        desigmation: string;
    }

    function getUser (user2: IAdmin | Iuser){
        const newUser: Iuser =user2 as Iuser;
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
})()

