import { useState } from 'react';
import { taskService } from '../services/taskServices';
import "../styles/addTask.css"

const AddTask = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = await taskService.createTask({ title, description });
      onTaskAdded(newTask);
      setTitle('');
      setDescription('');
      setError('');
    } catch (err) {
      setError('Failed to create task');
    }
  };

  return (
    <div class="add-task-container">
      <h2 class="add-task-title">Add New Task</h2>
      {error && (
        <div class="error-message">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div class="form-container">
          <div class="form-group">
            <label class="form-label">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              class="form-input"
            />
          </div>
          <div class="form-group">
            <label class="form-label">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              class="form-textarea"
            />
          </div>
          <button
            type="submit"
            class="submit-button"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;