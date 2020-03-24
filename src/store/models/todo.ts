import produce from "immer";
import { Dispatch } from "..";

const initialState: any = {
  todos: []
};

const todoStore = {
  state: initialState,

  reducers: {
    add: produce((state: any, payload: any) => {
      state.todos.push(payload);
    })
  },

  effects: (dispatch: Dispatch) => {
    return {
      addTodo: async (payload: any, rootState: any) => {
        dispatch.todoStore.add(payload);
      }
    };
  }
};

export { todoStore };
