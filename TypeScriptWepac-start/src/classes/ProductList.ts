import {Iproducts} from '../models/product';
import {Icartitem} from '../models/cartitem';
import {cartitem} from './/cart';
export class productlist
{
    private productlistcontainer:HTMLDivElement
    constructor(private list:Array<Iproducts>, public cart: cartitem)
    {
        this.productlistcontainer =document.querySelector('.product-list') as HTMLDivElement 
    }
    renderlist(): void 
    {
        this.list.forEach((item: Iproducts) => 
        {
            const productDivEl:HTMLDivElement=document.createElement('div');
            productDivEl.className ='product-item';
            const productTitleEl : HTMLHeadingElement =document.createElement('h3') as HTMLHeadingElement;
            const productImageEl : HTMLImageElement =document.createElement('img') as HTMLImageElement;
            const ProductPriceEl :HTMLParagraphElement =document.createElement('Price') as HTMLParagraphElement
            const productbuttonEl : HTMLButtonElement =document.createElement('button') as HTMLButtonElement;
            

            productTitleEl.textContent = item.title;
            productImageEl.src =item.ImageUrl;
            ProductPriceEl.textContent=item.Price.toString();
            productbuttonEl.textContent =" Add to Cart";
            productbuttonEl.addEventListener('click', () => 
            {
                this.cart.addtocart(item.id);
            });

            productDivEl.appendChild(productTitleEl);
            productDivEl.appendChild(productImageEl);
            productDivEl.appendChild(ProductPriceEl);
            productDivEl.appendChild(productbuttonEl);
            
            this.productlistcontainer.appendChild(productDivEl);
        });
    }
}