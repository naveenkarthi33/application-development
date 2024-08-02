import React, { useState } from 'react';
import './Task.css';

const Task = ({ addTaskAndRedirect }) => {
  const [task, setTask] = useState({
    name: '',
    description: '',
    dueDate: '',
    priority: 'low',
    assignee: '',
    status: 'incomplete'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name && task.description && task.dueDate && task.assignee) {
      addTaskAndRedirect(task);
    }
  };

  return (
    <div className="task-container">
      <h2>Add Task</h2>
      <div className="form-container">
        <form className="task-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Task Name"
            value={task.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={task.description}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
          />
          <select name="priority" value={task.priority} onChange={handleChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input
            type="text"
            name="assignee"
            placeholder="Assignee"
            value={task.assignee}
            onChange={handleChange}
          />
          <select name="status" value={task.status} onChange={handleChange}>
            <option value="incomplete">Incomplete</option>
            <option value="in progress">In Progress</option>
            <option value="complete">Complete</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default Task;
