interface IA
{
    name : string;
}
interface IB extends IA
{
    age : number;
}
const a: IB =
{
    name : "",
    age:10
}

interface userType 
{
    name:string;
    age?: number  //variable mentioned with ? is a optional 
}
//type userType =
//{
    //name:string;
    //age?: number  //variable mentioned with ? is a optional 
//}
type UserPrifileType =
{
    email : string;
}
type COmpositeUserType = userType & UserPrifileType;

const u: COmpositeUserType =
{
    name :"fj",
    //age : 10,  //we mentioned it as a option by using ? symbol
    email : 'ema@il.com'
}


type ReadOnlyUserType = Readonly<userType>;
type OptionalUserType = Partial<userType>;

 const a1: ReadOnlyUserType =
 {
     name:'hg',
     age:16
 }
 const a2: OptionalUserType =
 {
     name:'hg',
     age:16
 }