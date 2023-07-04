import { useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

function App() {
  const indexRef = useRef(2);
  const today = new Date().toDateString();

  // 테스트용 목업 데이터
  const mockTodo = [
    {
      index: 0,
      isDone: false,
      text: "test",
      date: today,
    },
    {
      index: 1,
      isDone: false,
      text: "test2",
      date: today,
    },
  ];

  const [todo, setTodo] = useState(mockTodo);

  const addTodo = (text) => {
    const newItem = {
      index: indexRef.current,
      isDone: false,
      text,
      date: new Date().toDateString(),
    };
    setTodo([newItem, ...todo]);
    indexRef.current += 1;
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) =>
        it.index == targetId ? { ...it, isDone: !it.isDone } : it
      )
    );
  };

  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.index !== targetId));
  };
  return (
    <div className="App">
      <Header today={today} />
      <TodoEditor addTodo={addTodo} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
