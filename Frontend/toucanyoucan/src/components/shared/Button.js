import classNames from "classnames";

// add hover + onclick styling

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  className,
  text,
  disabled,
  ...remainingProps
}) {
  const classes = classNames(
    "border-2",
    {
      "border-primary bg-primary text-white":
        primary && !outline && !text && !disabled,
      "border-primary bg-background-primary text-primary":
        primary && outline && !disabled,
      "border-gray-900 bg-gray-800": secondary,
      "border-green-600 bg-green-500": success,
      "border-yellow-500 bg-yellow-400": warning,
      "border-red-600 bg-red-500": danger,
      "rounded-xl": rounded,
      "text-gray-800": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
      "border-gray-500 bg-gray-500 text-white": disabled,
    },
    className
  );

  return (
    <button disabled={disabled} className={classes} {...remainingProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    if (
      Number(!!primary) +
        Number(!!secondary) +
        Number(!!success) +
        Number(!!warning) +
        Number(!!danger) >
      1
    ) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger must be chosen"
      );
    }
  },
};

export default Button;
