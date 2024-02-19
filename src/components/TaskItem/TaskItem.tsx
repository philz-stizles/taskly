import { Button } from '..';
import { Task } from '../../models/Task';
import classes from './TaskItem.module.css';

type Props = {
  task: Task;
};

const TaskItem = ({ task }: Props) => {
  return (
    <li className={classes.TaskItem}>
      <div>
        <p>{task.name}</p>
      </div>
      <Button label="Edit" />
    </li>
  );
};

export default TaskItem;
