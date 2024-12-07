"use client"
import styles from "./Button.module.css";
function Button({ children, onClick, className, type, varient, color, bgColor, hoverBgColor, hoverTextColor }) {
  return (
    <button
      className={`rounded-lg p-2 flex items-center gap-1 ${styles[varient]}  ${className}`}
      style={{
        color: color,
        backgroundColor: varient === "containd" ? bgColor : "transparent",
        borderColor: varient === "outline" ? bgColor : "transparent",
      }}
      type={type}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (hoverBgColor || hoverTextColor) {
          e.target.style.backgroundColor = hoverBgColor;
          e.target.style.color = hoverTextColor;
        }
      }}
      onMouseLeave={(e) => {
        if (hoverBgColor || hoverTextColor) {
          e.target.style.backgroundColor = varient === "containd" ? bgColor : "transparent";
          e.target.style.color = color;
        }
      }}
    >
      {children}
    </button>
  );
}

export default Button;
