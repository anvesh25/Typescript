//(function()
//{
//interface Icontainer{
   //name:string;

//}
 //const a: Icontainer ={
     //name:'Hi'
 //}
 //console.log(a);
 import {productlist} from './classes/ProductList';
 import {cartitem} from './classes/cart';
 import {products} from './Data/Products';

 const cart = new cartitem();
 const productList =new productlist(products, cart);

 productList.renderlist();
 cart.renderCartBox();
//})();

