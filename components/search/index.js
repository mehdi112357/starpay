import { setValueOfSearchBox } from "../../redux/createOrganisation/createOrganisationAction";
import { useDispatch, useSelector } from "react-redux";

const Search = ({ noBtn, label }) => {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    if (value.length >= 3) {
      dispatch(setValueOfSearchBox(value));
    }
    if (value.length === 0) {
      dispatch(setValueOfSearchBox(""));
    }
  };

  return (
    <div className="form-control">
      <div className="input-group my-search relative ">
        <input
          type="text"
          placeholder={label}
          className={`input input-bordered  rounded-[100px] xs:w-full xs:text-[12px] lg:text-[14px] ${
            noBtn === true ? "w-full" : "lg:w-[23.5rem]"
          }`}
          onChange={(e) => handleChange(e.target.value)}
        />
        {noBtn === false && (
          <button className="btn btn-square bg-black-900 absolute right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
