(function(){
    const a : string="Anvesh";
    const a1: String ="Mahendra";
    const b: number=10;
    const b1: Number=20;
    const c: boolean=true;
    const c1:Boolean=false;
    const d: object = {};
    const d1: Object= {};
    const e: object = {
        KKK: "Amulya"
    };
    const f: Date =new Date();

    const arr: Array<string> = ['abc', 'def'];
    const arr1: string[]=['ghi', 'klm'];

    interface  Iuser{
        name : string;
        age : number;
    }

    const usr:Iuser={
        name: 'jh',
        age:11
    }

    let users1:Array<Iuser> = [
        {name: 'aaa',
            age:21
        }
    ];
    users1.push({
        name: 'fjh',
        age:12
    });


    function add(x,y){
        return x+y;
    }
    function log(msg: string):void{
        console.log(msg);
    }
    //const a= log('Anvesh');
    const add1=(x:number, y: number): number=> x+y


    interface Iutil{
        name : string;
        log(msg:string):string;
    }
    const util: Iutil ={
        name :'hello',
        log:(msg:string): string => {
            return msg + util.name
        }
    }

    const res: string = util.log('hi ');
    console.log(res);
})()



