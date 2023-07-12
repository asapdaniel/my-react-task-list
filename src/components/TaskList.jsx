import { useState, useEffect } from 'react';
import Task from './Task';

const TaskList = () => {
    const [tasks, setTasks] = 
  useState([]);

 useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Actualizar localStorage cada vez que cambie alguna tarea
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const newTask = { description: '', completed: false };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (index, task) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = task;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <button onClick={addTask}>Agregar tarea</button>
      {tasks.map((task, index) => (
        <Task key={index} index={index} task={task} updateTask={updateTask} />
      ))}
    </div>
  );
};

export default TaskList;

