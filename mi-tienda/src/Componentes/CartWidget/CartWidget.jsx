// src/componentes/CartWidget/CartWidget.jsx
import { FaShoppingCart } from 'react-icons/fa';  // Asegúrate de tener react-icons instalado
import '../../styles/App.css';
const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="badge">3</span>
    </div>
  );
};

export default CartWidget;
