import PropTypes from 'prop-types';
const ItemsListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
    </div>
  );
};


ItemsListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
  };

export default ItemsListContainer;
