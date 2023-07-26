import "./styles.css";

export function AmigoAvatar(props) {
  return (
    <div className="amigo-avatar">
      <img alt="amigo" src={props.image} width={props.width} />
      <a href="/#">{props.nome}</a>
    </div>
  );
}
