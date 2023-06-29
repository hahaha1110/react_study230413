import "./Body.css";

const Body = () => {
  const numA = 1;
  const numB = 2;
  const strA = "안녕!";
  const strB = "리액트";

  const objA = {
    a: 1,
    b: 2,
  };

  return (
    <div className="body">
      <h1>{numA + numB}</h1>
      <h2>{strA + strB}</h2>
      <p>객체 자료형을 표시하고 싶어!</p>
      <h2>{objA.a}</h2>
      <h2>{objA.b}</h2>
    </div>
  );
};

export default Body;
