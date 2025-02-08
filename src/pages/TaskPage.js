import { useState } from 'react';
import TaskList from '../components/TaskList';
import AddTask from '../components/AddTask';
import '../styles/taskpage.css';

const TasksPage = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleTaskAdded = () => {
    setRefreshKey(oldKey => oldKey + 1);
  };

  return (
    <div class="tasks-container">
      <h1 class="tasks-title">Your Tasks</h1>
      <AddTask onTaskAdded={handleTaskAdded} />
      <TaskList key={refreshKey} />
    </div>
  );
};

export default TasksPage;