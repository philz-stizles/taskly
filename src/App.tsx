import { useCallback, useState } from 'react';
import { Task } from './models/Task';
import { EditTask, Todo } from './components';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleCreate = useCallback(() => {
    setSelectedTask(null);
  }, []);

  const handleEdit = useCallback((task: Task) => {
    setSelectedTask(task);
  }, []);

  const handleSave = useCallback((task: Task) => {
    setTasks((prevState) => {
      const currentTasks = [...prevState];
      const index = currentTasks.findIndex((t) => t.name === task.name);
      if (index === -1) {
        return [...currentTasks, task];
      }
      return currentTasks;
    });
  }, []);

  const handleDelete = useCallback((id: string) => {
    setTasks((prevState) => {
      return prevState.filter((t) => t.id !== id);
    });
  }, []);

  return (
    <main>
      <Todo tasks={tasks} onCreate={handleCreate} onEdit={handleEdit} />
      <EditTask
        task={selectedTask}
        onSave={handleSave}
        onDelete={handleDelete}
      />
    </main>
  );
}

export default App;
