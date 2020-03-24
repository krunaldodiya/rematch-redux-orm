import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "../store";

function TodoItem({ author }: any) {
  const dispatch: Dispatch = useDispatch();
  const [name, setName] = useState("");

  const addBookHandler = useCallback(
    e => {
      e.preventDefault();
      dispatch.todoStore.addBook({ name, author_id: author.id });
      setName("");
    },
    [dispatch, name, author]
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          backgroundColor: "#000",
          padding: 10,
          margin: 10
        }}
      >
        <div style={{ color: "#fff", marginRight: 10 }}>{author.name}</div>

        <form>
          <input
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
          />

          <button type="submit" onClick={addBookHandler}>
            add book
          </button>
        </form>
      </div>

      <div style={{ marginLeft: 20 }}>
        {author.books.map((book: any, index: number) => {
          return <div key={index}>{book.name}</div>;
        })}
      </div>
    </div>
  );
}

export default TodoItem;
