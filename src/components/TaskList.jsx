import Task from './Task';

const TaskList = () => {
  const task = [
    { id: 1, name: 'Task 1', completed: false },
    { id: 2, name: 'Task 2', completed: true },
    { id: 3, name: 'Task 3', completed: false },
  ];

  return (
    <div>
      {task.map(task => (
        <Task key={task.id} name={task.name} completed={task.completed} />
      ))}
    </div>
  );
};

export default TaskList;
