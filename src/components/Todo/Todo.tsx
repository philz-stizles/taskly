import { BiPlus } from 'react-icons/bi';
import { FloatingButton, GoPro } from '..';
import { Task } from '../../models/Task';
import TaskList from '../TaskList/TaskList';
import imageSrc from './../../assets/user.png';
import classes from './Todo.module.css';

type Props = {
  tasks: Task[];
  onCreate: () => void;
};

const Todo = ({ tasks, onCreate }: Props) => {
  return (
    <section className={classes.Todo}>
      <div className={classes.TodoHeader}>
        <img src={imageSrc} alt="" />
        <div>
          <h6>Hello, John</h6>
          <p>What are your plans for today?</p>
        </div>
      </div>
      <GoPro />
      <section className={classes.TodoList}>
        <TaskList tasks={tasks} />
        <FloatingButton icon={BiPlus} onClick={onCreate} />
      </section>
    </section>
  );
};

export default Todo;
