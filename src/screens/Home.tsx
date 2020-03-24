import React, { lazy, Suspense, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orm } from "../orm";
import { Dispatch } from "../store";

const TodoItem = lazy(() => import("../components/TodoItem"));

function Home() {
  const dispatch: Dispatch = useDispatch();

  const { authors } = useSelector((state: any) => {
    const session = orm.session(state.orm);

    return {
      todos: state.todoStore.todos,
      authors: session.Author.all()
        .toModelArray()
        .map(model => {
          return {
            ...model.ref,
            books: model.books.all().toRefArray()
          };
        })
    };
  });

  const [name, setName] = useState("");

  const addAuthorHandler = useCallback(
    e => {
      e.preventDefault();
      dispatch.todoStore.addAuthor({ name });
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

          <button type="submit" onClick={addAuthorHandler}>
            add author
          </button>
        </form>
      </div>

      <div>
        {authors.map((author: string, index: number) => {
          return (
            <Suspense fallback={null} key={index}>
              <TodoItem author={author} />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
