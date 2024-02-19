import { useCallback, useState } from 'react';
import { Task } from './models/Task';
import { EditTask, Todo } from './components';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleCreate = useCallback(() => {
    setSelectedTask(null);
  }, []);

  const handleSave = useCallback((task: Task) => {
    setTasks((prevState) => {
      const index = prevState.findIndex((task) => task.name === task.name);
      if (index === -1) {
        return [...prevState, task];
      }
      return prevState;
    });
  }, []);

  const handleDelete = useCallback((id: string) => {
    setTasks((prevState) => {
      return prevState.filter((t) => t.id !== id);
    });
  }, []);

  return (
    <main>
      <Todo tasks={tasks} onCreate={handleCreate} />
      <EditTask
        task={selectedTask}
        onSave={handleSave}
        onDelete={handleDelete}
      />
    </main>
  );
}

export default App;
