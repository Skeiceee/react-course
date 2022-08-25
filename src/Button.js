import PropTypes from "prop-types";

function handleClick(){
  console.log('Hola Mundo!');
}

export function Button({ text, name }) {
  return (
    <button onClick={handleClick}>
      {text} - {name}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string,
};

Button.defaultProps = {
  text: "Enviar",
  name: "Usuario",
};
