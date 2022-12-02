import SpinnerLoading from "../spinnerLoading";

export default function Button({ children, className, onClick, isLoading, type='button' }) {
  return (
    <button className={className} onClick={onClick}>
      {!isLoading && <span className="indicator-label">{children}</span>}
      {isLoading && <SpinnerLoading />}
    </button>
  );
}
