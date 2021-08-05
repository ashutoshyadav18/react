import React from 'react';
import reactDom from 'react-dom';
import Cart from './Cart';
import Navbar from './Navbar';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 9999,
          title: 'Watch',
          qty: 2,
          img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
          id: 1
        },
        {
          price: 20000,
          title: 'Mobile Phone',
          qty: 4,
          img: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
          id: 2
        },
        {
          price: 70000,
          title: 'Laptop',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this) {instead of this use ' = () => ' for binding this to the instance};
    // this.testing();
  }

  handleIncreaseQuantity = (product) => {
    console.log('hey please increase the qty of', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products: products
    })
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products: products
    })
  }

  handelDeleteProduct = (id) => {
    const { products } = this.state;

    // will return array "items" with no element whos id is input _id
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let total = 0;

    products.forEach((product) => {
      total = total +  (product.qty) * (product.price);
    })

    return total;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar
          count={this.getCartCount()}
        />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handelDeleteProduct}
        />
        <div style={{fontSize: 20 , padding: 10, color: '#7d8ba8'}}>
          TOTAL: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
