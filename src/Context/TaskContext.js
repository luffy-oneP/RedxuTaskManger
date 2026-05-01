import { createContext, useContext } from "react";
export const TaskContext = createContext([]);
export const TaskDispatchContext = createContext(() => {});

export const useTask = () =>{
    return useContext(TaskContext)
}

export const UseDispatch = () =>{
    return useContext(TaskDispatchContext)
}