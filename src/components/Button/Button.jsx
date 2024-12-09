const variants = {
  primary:
    "text-text-text-on-color bg-button-primary-bg-default hover:bg-button-primary-bg-hover",
  secondary:
    "text-text-inverse bg-button-secondary-bg-default border-2 border-button-secondary-border-default hover:bg-button-secondary-bg-hover",
  tertiary:
    "text-text-inverse bg-button-tertiary-bg-default hover:bg-button-tertiary-bg-hover",
};
export function Button(props) {
  return (
    <button
      className={`w-full px-6 h-14 rounded-xl ${variants[props.variant]}`}
      {...props}
    >
      {props.children}
    </button>
  );
}
