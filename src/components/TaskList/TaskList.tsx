import { TaskItem } from '..';
import { Task } from '../../models/Task';
import classes from './TaskList.module.css';

type Props = {
  onEdit: (task: Task) => void;
  tasks: Task[];
};

const TaskList = ({ tasks, onEdit }: Props) => {
  return (
    <ul className={classes.TaskList}>
      {tasks.map((task) => (
        <TaskItem onEdit={onEdit} key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
