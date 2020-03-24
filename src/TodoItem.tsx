import React from "react";

function TodoItem({ todo }: { todo: string }) {
  return (
    <div>
      <div>{todo}</div>
    </div>
  );
}
export default TodoItem;
