import SpinnerLoading from "../spinnerLoading";

export default function SubmitButton({ children, className, onClick, isLoading, type='button' }) {
    return (
        <button className={className} onClick={onClick} type={type}>
            {!isLoading && <span className="indicator-label">{children}</span>}
            {isLoading && <SpinnerLoading />}
        </button>
    );
}
