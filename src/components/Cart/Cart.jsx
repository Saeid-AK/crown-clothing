import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selector';

import CustomButton from '../Custom-button/Custom-Button';
import CartItem from '../Cart-item/Cart-item';

import './Cart.scss';

const Cart = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(Cart);
