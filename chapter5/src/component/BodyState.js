import React, { useState } from "react";

const BodyState = () => {
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const today = new Date().toISOString().slice(0, 10);
  console.log(today);
  const [date, setDate] = useState(today);

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const [option, setOption] = useState(1);

  const handleSelectChange = (e) => {
    setOption(e.target.value);
  };

  console.log("option :: " + option);

  return (
    <div>
      <div>
        <input value={text} onChange={handleOnChange} />
      </div>
      <div>{text}</div>
      <h3>날짜 폼</h3>
      <input type="date" value={date} onChange={handleDate} />

      <h3>날짜 폼</h3>
      <select value={option} onChange={handleSelectChange}>
        <option value={1}>1번</option>
        <option value={2}>2번</option>
        <option value={3}>3번</option>
      </select>
    </div>
  );
};

export default BodyState;
