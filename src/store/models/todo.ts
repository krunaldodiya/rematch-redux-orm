import produce from "immer";
import { Dispatch } from "..";

type InitialState = {
  todos: string[];
};

const initialState: InitialState = {
  todos: []
};

const todoStore = {
  state: initialState,

  reducers: {
    add: produce((state: InitialState, payload: any) => {
      state.todos.push(payload);
    })
  },

  effects: (dispatch: Dispatch) => {
    return {
      addAuthor: async (payload: any, rootState: any) => {
        dispatch({ type: "ADD_AUTHOR", payload });
      },

      addBook: async (payload: any, rootState: any) => {
        dispatch({ type: "ADD_BOOK", payload });
      }
    };
  }
};

export { todoStore };
