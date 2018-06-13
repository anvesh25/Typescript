import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import './App.css';
import MiniCart from './components/mini-cart/MiniCart';
import ProductList from './components/product-list/ProductList';
import ICartItem from './models/cartItem';
import IProduct from './models/product';

interface IState {
  cart: ICartItem[];
  products: IProduct[];
};

class App extends React.Component<{}, IState> {
  public state : Readonly<IState> = {
    cart: [],
    products: [
      {"id":1,"title":"Fantastic Granite Chair","description":"Aruba","price":708.00,"imageUrl":"https://unsplash.it/200?image=1"},
      {"id":2,"title":"Generic Cotton Salad","description":"Steel","price":349.00,"imageUrl":"https://unsplash.it/200?image=2"}
    ]
  };

  public componentWillMount(){
    // super({});
    const promise = axios.get('http://5b209253ca762000147b256a.mockapi.io/api/products');
    promise.then((response)=> {
      this.setState({
        products: response.data
      });
    });
  }

  public render() {
    return (
      <div className="container">
        <nav className="site-header sticky-top row">
          <div className="col-4">
            <h3>Food App</h3>
          </div>          
          <div className="col-4">
              <MiniCart cart={this.state.cart} />
          </div>
        </nav>
        <div className="container">            
            <ProductList list={this.state.products} />
        </div>
      </div>
    );
  }
}

export default App;

