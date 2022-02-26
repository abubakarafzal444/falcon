//this requires array of options, input click handler function that decides to show
// list ,and value that decides whether to show list or not
import { useState } from 'react';
import { Form } from 'react-bootstrap';
const DropDownInput = props => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [input, setInput] = useState(props.formik.values[props.name]);

  const onChange = e => {
    const userInput = e.target.value;

    // Filter our suggestions that don't contain the user's input
    const unLinked = props.array.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    props.dataReciver({ data: e.target.value, name: props.name });
    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
  };

  const onClick = e => {
    setFilteredSuggestions([]);
    props.dataReciver({ data: e.target.innerText, name: props.name });
    setInput(e.target.innerText);
    setActiveSuggestionIndex(0);
  };
  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul className="suggestions">
        {filteredSuggestions.map((suggestion, index) => {
          let className;

          // Flag the active suggestion with a class
          if (index === activeSuggestionIndex) {
            className = 'suggestion-active';
          }

          return (
            <li className={className} key={suggestion} onClick={onClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : (
      <ul className="suggestions">
        {props.array.map((suggestion, index) => {
          let className;

          // Flag the active suggestion with a class
          if (index === activeSuggestionIndex) {
            className = 'suggestion-active';
          }

          return (
            <li className={className} key={suggestion} onClick={onClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    );
  };

  //..................//

  return (
    <>
      <Form.Group
        className="mb-3"
        controlId="formGroupEmail"
        style={{ width: '100%' }}
        key={props.key}
      >
        <Form.Label>{props.formLabel}</Form.Label>

        <Form.Control
          type="text"
          onChange={onChange}
          onClick={props.invertClick}
          value={input}
          readOnly={props.disabled}
          autoComplete="off"
          isInvalid={props.formik.errors[props.name]}
        />

        {!props.disabled && props.Inputclicked && <SuggestionsListComponent />}
        {props.formik.errors[props.name] ? (
          <Form.Text className="text-muted">
            {props.formik.errors[props.name]}
          </Form.Text>
        ) : null}
      </Form.Group>
    </>
  );
};
export default DropDownInput;
