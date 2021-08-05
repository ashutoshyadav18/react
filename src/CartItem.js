import React from 'react';

const CartItem = (props) => {
    const { price, title, qty } = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img src={product.img} style={styles.image} />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: '#777' }}>Rs {price}</div>
                <div style={{ color: '#777' }}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img
                        alt="increase"
                        className="action-icons"
                        src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
                        onClick={() => onIncreaseQuantity(product)}>
                    </img>
                    <img
                        alt="decrease"
                        className="action-icons"
                        src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                        onClick={() => onDecreaseQuantity(product)}>
                    </img>
                    <img
                        alt="delete"
                        className="action-icons"
                        src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
                        onClick={() => onDeleteProduct(product.id)}>
                    </img>

                </div>
            </div>
        </div>
    );
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;












///////////////// FOR REFERENCE ////////////////

    // testing() {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000)
    //     })

    //     // setState acts like a synchronous call
    //     promise.then(() => {
    //         this.setState({ qty: 100 });

    //         console.log("this.state", this.state);
    //     });
    // }

    // increaseQuantity = () => {


    //     //set state form 1
    //     this.setState({
    //         qty: this.state.qty + 1
    //     });

        //set state form 2 - if previous state required use this
        // this.setState((prevState) => {
        //     return {
        //         qty: this.state.qty + 1
        //     }
        // });
    // }

    // decreaseQuantity = () => {

    //     const { qty } = this.state;
    //     if (qty === 0) {
    //         return;
    //     }

    //     this.setState((prevState) => {
    //         return {
    //             qty: this.state.qty - 1
    //         }
    //     });
    // }