import PropTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  return <button>{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    // Number(true) = 1, Number(false) = 0, Number(!!undefined) = 0
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only 1 of primary, secondary, success, warning, danger can be true!"
      );
    }
  },
};

export default Button;
