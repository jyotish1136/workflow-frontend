import { FaSpinner } from "react-icons/fa";
import clsx from "clsx";

const Button = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  variant = "primary",
  fullWidth = false,
  loading = false,
  icon: Icon = null,
  className = "",
}) => {
  const baseStyle =
    "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
  };

  const disabledStyle = "opacity-50 cursor-not-allowed";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(
        baseStyle,
        variants[variant],
        fullWidth && "w-full",
        (disabled || loading) && disabledStyle,
        className
      )}
    >
      {loading && <FaSpinner className="animate-spin mr-2" />}
      {Icon && !loading && <Icon className="mr-2" />}
      {children}
    </button>
  );
};

export default Button;
