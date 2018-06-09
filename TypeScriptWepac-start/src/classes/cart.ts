import {Icartitem} from '../models/cartitem';
export class cartitem
{
    private items:Array<Icartitem>=[];
    addtocart(productid: number)
    {
        this.items.push({
            id: this.items.length+1,
            productid: productid,
            quantity:1
        });
        this.renderCartBox();
    }
    getCartitem()
    {

    }
    renderCartBox(){
            const miniCartContainerEl = document.querySelector('.mini-cart');
            miniCartContainerEl.textContent = `You have ${this.items.length} items in your cart`;
        }
}