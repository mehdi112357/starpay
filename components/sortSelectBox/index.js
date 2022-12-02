export default function SelectBox({ label, options }) {
  return (
    <>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <select className="select w-full  rounded-none border-b-1 border-b-slate-300 my-selectBox font-normal	">
        {options.map((item, index) => {
          return <option key={index}>{item.value}</option>;
        })}
      </select>
    </>
  );
}
