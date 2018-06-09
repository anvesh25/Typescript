//const a: string ="anvesh";

//Array<string>
//Array<number>

class GenericList<A, X>{
    private list: Array<A> =[];
    insertToList(item:A, another: X): void{
        this.list.push(item);
    }
    getItems(): Array<A>{
        return this.list;
    }
}

const strList: GenericList<string, number> = new GenericList<string, number>();
strList.insertToList("anvesh", 10);

const NumberList: GenericList<number, string> = new GenericList<number, string>();
NumberList.insertToList(10, "gfhj");

class stringList{
    private list: Array<string> =[];
    insertToList(item:string): void{
        this.list.push(item);
    }
    getItems(): Array<string>{
        return this.list;
    }
}
class numberList{
    private list: Array<Number> =[];
    insertToList(item:Number): void{
        this.list.push(item);
    }
    getItems(): Array<Number>{
        return this.list;
    }
}
