import { TaskItem } from '..';
import { Task } from '../../models/Task';
import classes from './TaskList.module.css';

type Props = {
  tasks: Task[];
};

const TaskList = ({ tasks }: Props) => {
  return (
    <ul className={classes.TaskList}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
