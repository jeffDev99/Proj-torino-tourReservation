import styles from "./Button.module.css"
function Button({ children, onClick, className, type }) {
  return (
    <button className={`rounded-lg p-2 flex items-center gap-1 ${styles[className]}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
