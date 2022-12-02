export default function Input({ label, type, grayBg, inputValue, onChange }) {
  return (
    <div className="did-floating-label-content">
      <input
        className={`did-floating-input ${
          grayBg === true ? "bg-[#f8f8f8]" : ""
        }`}
        type={type}
        placeholder=" "
        onChange={(e) => onChange(e.target.value)}
        value={inputValue}
      />
      <label
        className={`did-floating-label  ${
          grayBg === true ? "bg-[#f8f8f8]" : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
}
