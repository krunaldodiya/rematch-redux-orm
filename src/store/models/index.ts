import { todoStore } from "./todo";

export interface RootModel {
  todoStore: typeof todoStore;
}

export const models: RootModel = { todoStore };
