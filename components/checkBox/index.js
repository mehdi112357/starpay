import { useState } from "react";

const CheckBox = ({ label }) => {
  const [checked, setChecked] = useState(true);
  return (
    <div className="form-control rounded-md">
      <label className="label cursor-pointer">
        <input
          type="checkbox"
          // checked={checked}
          className="w-5 h-5  border border-[#B3B3B3] rounded-[1px] checkbox-accent"
          onChange={() => setChecked(!checked)}
        />
        <span className="label-text ml-2 text-[16px]">{label}</span>
      </label>
    </div>
  );
};

export default CheckBox;
