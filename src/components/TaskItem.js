import "../styles/taskItems.css"

const TaskItem = ({ task, onDelete, onStatusChange }) => {
    return (
      <div class="task-item">
      <div class="task-content">
        <div class="task-info">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={(e) => onStatusChange(task._id, e.target.checked)}
            class="task-checkbox"
          />
          <div class="task-text">
            <h3 class={`task-title ${task.completed ? 'completed' : ''}`}>
              {task.title}
            </h3>
            <p class="task-description">{task.description}</p>
          </div>
        </div>
        <button
          onClick={() => onDelete(task._id)}
          class="delete-button"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;