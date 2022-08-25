export function Greeting({ title, name = "user" }) {
  return (
    <>
      <h1>
        Hola {title}, dice {name}
      </h1>
    </>
  );
}

export function UserCard(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <p>${props.amount}</p>
      <p>{props.merried ? "Casado" : "Soltero"}</p>

      <ul>
        <li>Ciudad: {props.address.city}</li>
        <li>Calle: {props.address.street}</li>
      </ul>
    </div>
  );
}
