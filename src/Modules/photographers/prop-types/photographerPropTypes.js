import PropTypes from 'prop-types';

const photographerPropTypes = {
  photographer: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    city: PropTypes.string,
    country: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    tagline: PropTypes.string,
    price: PropTypes.number,
    portrait: PropTypes.string,
  }).isRequired,
};

export default photographerPropTypes;
