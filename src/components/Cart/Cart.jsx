import CustomButton from '../Custom-button/Custom-Button';

import './Cart.scss';

const Cart = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default Cart;
