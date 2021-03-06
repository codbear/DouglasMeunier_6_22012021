import PropTypes from 'prop-types';

const mediaPropTypes = PropTypes.shape({
  id: PropTypes.number,
  photographerId: PropTypes.number,
  tags: PropTypes.arrayOf(PropTypes.string),
  likes: PropTypes.number,
  date: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
  source: PropTypes.string,
  thumbSource: PropTypes.string,
  component: PropTypes.string,
  hasBeenLiked: PropTypes.bool,
});

export default mediaPropTypes;
