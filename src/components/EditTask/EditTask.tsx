import { useEffect, useState } from 'react';
import { Button, Input } from '..';
import { Task } from '../../models/Task';
import classes from './EditTask.module.css';

type Props = {
  task: Task | null;
  onSave: (task: Task) => void;
  onDelete: (id: string) => void;
};

const EditTask = ({ task, onSave, onDelete }: Props) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (task && task.name) {
      setName(task.name);
    }
  }, [task]);

  const editMode = !!task;

  return (
    <section className={classes.EditTask}>
      <div className={classes.EditTaskHeader}>
        <h2>Edit Task</h2>
      </div>

      <div className={classes.EditTaskForm}>
        <Input
          label="Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className={classes.EditTaskActions}>
          {editMode && (
            <Button
              variant="danger"
              label="Delete"
              disabled={!editMode}
              onClick={() => onDelete(task.id)}
            />
          )}
          <Button
            expanded
            label="Save"
            onClick={() => {
              onSave({
                id: editMode ? task.id : new Date().toISOString(),
                name,
              });
              if (!editMode) {
                setName('');
              }
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default EditTask;
