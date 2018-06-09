(function () {
    var cartitem = /** @class */ (function () {
        function cartitem() {
            this.items = [];
        }
        cartitem.prototype.addtocart = function (productid) {
            this.items.push({
                id: this.items.length + 1,
                productid: productid,
                quantity: 1
            });
            this.renderCartBox();
        };
        cartitem.prototype.getCartitem = function () {
        };
        cartitem.prototype.renderCartBox = function () {
            var miniCartContainerEl = document.querySelector('.mini-cart');
            miniCartContainerEl.textContent = "You have " + this.items.length + " items in your cart";
        };
        return cartitem;
    }());
    var productlist = /** @class */ (function () {
        function productlist(list, cart) {
            this.list = list;
            this.cart = cart;
            this.productlistcontainer = document.querySelector('.product-list');
        }
        productlist.prototype.renderlist = function () {
            var _this = this;
            this.list.forEach(function (item) {
                var productDivEl = document.createElement('div');
                productDivEl.className = 'product-item';
                var productTitleEl = document.createElement('h3');
                var productImageEl = document.createElement('img');
                var ProductPriceEl = document.createElement('Price');
                var productbuttonEl = document.createElement('button');
                productTitleEl.textContent = item.title;
                productImageEl.src = item.ImageUrl;
                ProductPriceEl.textContent = item.Price.toString();
                productbuttonEl.textContent = " Add to Cart";
                productbuttonEl.addEventListener('click', function () {
                    _this.cart.addtocart(item.id);
                });
                productDivEl.appendChild(productTitleEl);
                productDivEl.appendChild(productImageEl);
                productDivEl.appendChild(ProductPriceEl);
                productDivEl.appendChild(productbuttonEl);
                _this.productlistcontainer.appendChild(productDivEl);
            });
        };
        return productlist;
    }());
    var products = [
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
    var cart = new cartitem();
    var productList = new productlist(products, cart);
    productList.renderlist();
    cart.renderCartBox();
})();
