import { Age } from "./Age";

export function Welcome(props) {
  return (
    <div className="card">
      <p>Welcome, {props.name}</p>
      {props.age > 18 && <Age age={props.age} />}
      {props.age !== undefined && <Age age={props.age} />}
      {props.age >= 18 && props.age <= 65 && <Age age={props.age} />}
      {props.name === "John" && props.age >= 18 && props.age <= 65 && (
        <Age age={props.age} />
      )}
    </div>
  );
}
