import { Button } from '..';
import { Task } from '../../models/Task';
import classes from './TaskItem.module.css';

type Props = {
  task: Task;
  onEdit: (task: Task) => void;
};

const TaskItem = ({ task, onEdit }: Props) => {
  return (
    <li className={classes.TaskItem}>
      <div>
        <p>{task.name}</p>
      </div>
      <Button label="Edit" onClick={() => onEdit(task)} />
    </li>
  );
};

export default TaskItem;
