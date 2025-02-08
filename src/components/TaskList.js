import { useState, useEffect } from 'react';
import { taskService } from '../services/taskServices';
import TaskItem from './TaskItem';
import "../styles/taskList.css"

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await taskService.getAllTasks();
      setTasks(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load tasks');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await taskService.deleteTask(id);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (err) {
      setError('Failed to delete task');
    }
  };

  const handleStatusChange = async (id, completed) => {
    try {
      const updatedTask = await taskService.updateTask(id, { completed });
      setTasks(tasks.map(task => 
        task._id === id ? updatedTask : task
      ));
    } catch (err) {
      setError('Failed to update task');
    }
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div class="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />
      ))}
      {tasks.length === 0 && (
        <div class="empty-message">No tasks yet</div>
      )}
    </div>
  );
};

export default TaskList;