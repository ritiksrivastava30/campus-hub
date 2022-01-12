export const Button = (props) => {
    return (
        <button className="btn btn-warning btn-group" onClick = {props.onClick} >{props.text}</button>
    );
}