// nice styling with custom inside icons

import { GoCheck } from "react-icons/go";

const CheckBox = ({ value, onChange }) => {
  return (
    <div className="border-2 w-5 h-5 flex justify-center items-center" onClick={onChange}>
      {value && <GoCheck />}
    </div>
  );
};

export default CheckBox;
