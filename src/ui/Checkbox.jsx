import { useState } from "react";

function Checkbox({ checked = false, children, name, required = false }) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="flex gap-3 items-center mx-1">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        name={name}
        id={name}
        required={required}
        className="accent-black/80 p-4 rounded-md"
      />
      <label htmlFor={name}>{children}</label>
    </div>
  );
}


export default Checkbox;