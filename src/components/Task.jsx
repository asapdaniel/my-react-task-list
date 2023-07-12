import { useState } from "react";



// eslint-disable-next-line react/prop-types
const Task = ({ name, completed }) => {
  const [isChecked, setIsChecked] = useState(completed);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      <span style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{name}</span>
    </div>
  );
};

export default Task;
