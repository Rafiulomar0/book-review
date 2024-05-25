import PropTypes from "prop-types";
const Tags = ({ text }) => {
  return (
    <span className="bg-base-200 text-lime-500 px-3 rounded-full">{text}</span>
  );
};

Tags.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tags;
