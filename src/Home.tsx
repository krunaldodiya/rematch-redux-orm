import React, { lazy, Suspense, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "./store";

const TodoItem = lazy(() => import("./TodoItem"));

function Home() {
  const dispatch: Dispatch = useDispatch();
  const { todos } = useSelector((state: any) => {
    return {
      todos: state.todoStore.todos
    };
  });

  const [name, setName] = useState("");

  const addTodoHandler = useCallback(
    e => {
      e.preventDefault();
      dispatch.todoStore.addTodo(name);
      setName("");
    },
    [dispatch, name]
  );

  return (
    <div style={{ padding: 10 }}>
      <div>
        <form>
          <input
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
          />

          <button type="submit" onClick={addTodoHandler}>
            add todo
          </button>
        </form>
      </div>

      <div>
        {todos.map((todo: string, index: number) => {
          return (
            <Suspense fallback={null} key={index}>
              <TodoItem todo={todo} />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
