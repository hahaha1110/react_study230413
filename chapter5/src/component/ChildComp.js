const ChildComp = () => {
  const handleOnClick = () => {
    alert("리액트의 클릭 이벤트");
  };
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h4>나는 Body의 자식 컴포넌트 입니다.</h4>
      <button onClick={handleOnClick}>클릭!</button>
    </div>
  );
};

export default ChildComp;
