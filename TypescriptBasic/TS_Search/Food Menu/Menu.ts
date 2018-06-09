(function()
{
    interface Iproducts
    {
        id : number;
        title : string;
        ImageUrl :string;
        Price : number;
    }
    interface Icartitem
    {
        id : number;
        productid: number;
        quantity: number;
    }
class cartitem
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
class productlist
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
const products: Array<Iproducts> = [
    {
            id: 1,
            title: 'Malabar Biriyani',
            ImageUrl: 'https://i.imgur.com/ULHbPTa.jpg',
            Price: 100
        },
        {
            id: 2,
            title: 'Pasta',
            ImageUrl: 'https://i.imgur.com/r7rQBCS.jpg',
            Price: 200
        },
        {
            id: 3,
            title: 'Chicken Fried Rice',
            ImageUrl: 'https://i.imgur.com/pYSgtB4.jpg',
            Price: 250
        },
        {
            id: 4,
            title: 'Chicken Noodles',
            ImageUrl: 'https://i.imgur.com/6VY0ci9.png',
            Price: 250
        }
];
const cart = new cartitem();
const productList =new productlist(products, cart);

productList.renderlist();
//cart.renderCartBox();

})();