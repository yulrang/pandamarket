import Styles from "./Button.module.scss";

export default function SmallButton({
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
      className={`${Styles["btn-small"]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
