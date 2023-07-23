/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const Task = ({ index, task, updateTask }) => {
  const handleDescriptionChange = (event) => {
    const newTask = { ...task, description: event.target.value };
    updateTask(index, newTask);
  };

  const handleCompletedChange = (event) => {
    const newTask = { ...task, completed: event.target.checked };
    updateTask(index, newTask);
  };

  return (
    <div>
      <input type="text" value={task.description} onChange={handleDescriptionChange} />
      <input type="checkbox" checked={task.completed} onChange={handleCompletedChange} />
    </div>
  );
};

export default Task;

