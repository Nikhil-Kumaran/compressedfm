import PropTypes from 'prop-types';

const Facebook = ({ className, height, width }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.7 17.7V32H18.7V17.8H23.5L24.7 11.9H18.8C18.8 11.9 18.8 9.1 18.8 7.5C18.7 6.9 19 6 20 6C21.5 6 23.4 6 23.4 6V0C23.4 0 20.4 0 17.1 0C14.9 0 11.7 2.7 11.7 5.5C11.7 8.4 11.7 11.6 11.7 11.6H8V17.6L11.7 17.7Z"
    />
  </svg>
);

Facebook.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Facebook.defaultProps = {
  className: '',
  height: '32',
  width: '32',
};

export { Facebook };
