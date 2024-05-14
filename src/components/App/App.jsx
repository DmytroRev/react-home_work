import { useState } from "react";
import initialTasks from "../../tasks.json";
import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import TaskList from "../TaskList/TaskList";
import { Test } from "../test/Test";

// export const App = () => {
//   const [clicks, setClicks] = useState(() => {
//     const savedClicks = window.localStorage.getItem("saved-clicks");
//     if (savedClicks !== null) {
//       return savedClicks;
//     }
//     return 0;
//   });

//   useEffect(() => {
//     window.localStorage.setItem("saved-clicks", clicks);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("");

  const addTasks = (newTasks) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTasks];
    });
  };

  const deleteTasks = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      {/* <Form onAdd={addTasks} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList tasks={visibleTasks} onDelete={deleteTasks} /> */}
      <Test />
    </div>
  );
}
