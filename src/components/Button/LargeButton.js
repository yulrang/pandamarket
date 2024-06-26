import Styles from "./Button.module.scss";

export default function LargeButton({
  type,
  children,
  onClick,
  id,
  className,
  disabled,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      id={id}
      className={`${Styles["btn-large"]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
