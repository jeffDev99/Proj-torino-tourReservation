"use client"
import styles from "./Button.module.css";
function Button({ children, onClick, className, type, varient, color, bgColor, hoverBgColor, hoverTextColor }) {
  return (
    //! must edit : add hover effect
    <button
      className={`rounded-lg p-2 flex items-center gap-1 ${styles[varient]}  ${className}`}
      style={{
        color: color,
        backgroundColor: varient === "containd" ? bgColor : "transparent",
        borderColor: varient === "outline" ? bgColor : "transparent",
      }}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
