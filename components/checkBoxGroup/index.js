const CheckBoxGroup = ({
  options,
}) => {
  const toggleCheck = (value) => {
    const newArray = [...options];
    const index = newArray.findIndex((item) => item.value === value);
    newArray[index].isChecked = !newArray[index].isChecked;
  };
  return (
    <div className="grid grid-cols-1">
      <div className="form-control rounded-md grid md:grid-cols-2 xs:grid-cols-1 gap-6">
        {options.map((item) => {
          return (
            <>
              <input
                type="checkbox"
                className="text-[16px] text-black-900 mr-3 "
                value={item.value}
                onChange={() => toggleCheck(item.value)}
              />
              <label htmlFor={item.value}>{item.value}</label>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CheckBoxGroup;
