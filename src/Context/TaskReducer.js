export const initialState = [];

export const TaskReducer = (tasks, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "UPDATE_TASK": {
      return tasks.map((t) => {
        t.id === action.id ? action.task : t;
      });
    }
    case "DELETE_TASK": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
};
