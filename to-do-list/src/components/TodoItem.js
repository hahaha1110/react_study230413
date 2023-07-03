import "./TodoItem.css";
const TodoItem = ({ isDone, key, text, date }) => {
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input type="checkbox" checked={isDone} />
      </div>
      <div className="title_col">{text}</div>
      <div className="date_col">{date}</div>
      <div className="btn_col">
        <button>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
