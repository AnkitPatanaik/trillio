import React from "react";
import PropTypes from "prop-types";

function InputComponent(props) {

  return (
    <div class="field">
      <label class="label" >
        {props.title}
      </label>
      <input class="input"
          id={props.title}
          name={props.name}
          type={props.type}
          onChange={props.onChange}
        />
    </div>
  );
}

InputComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

InputComponent.defaultProps = {
  type: "text"
};

export default InputComponent;
