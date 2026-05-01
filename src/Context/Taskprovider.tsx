import { useReducer } from "react";
import { initialState, TaskReducer } from "./TaskReducer";
import { TaskContext, TaskDispatchContext } from "./TaskContext.js";
const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(TaskReducer, initialState);
  return (
    <TaskContext.Provider value={tasks}>
        <TaskDispatchContext.Provider value={dispatch}>
            {children}
        </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  )
};
export default TaskProvider