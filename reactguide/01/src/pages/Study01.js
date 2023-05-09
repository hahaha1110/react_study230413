function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Hj",
  lastName: "ha",
};

export default function Study01() {
  return (
    <div>
      <h1>study01</h1>
      Hello, {formatName(user)} !
    </div>
  );
}
