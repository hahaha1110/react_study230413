import { useState } from "react";

export default function StateStudy() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>State Hook Study</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
