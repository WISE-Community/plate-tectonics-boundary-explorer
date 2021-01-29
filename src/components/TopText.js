import React from 'react';
import PropTypes from 'prop-types';

TopText.propTypes = {
  hide: PropTypes.bool,
  text: PropTypes.object,
  afterInputText: PropTypes.string,
  onInputChanged: PropTypes.func
};

function TopText(props) {
  if (props.hide) return null;

  return (
    <div className="TopText">
      <p> {props.text} </p>
      {props.afterInputText ? (
        <React.Fragment>
          <textarea
            className="TopTextInput"
            placeholder="Type your responses here!"
            rows={3}
            onChange={props.onInputChanged}
          />
          <p> {props.afterInputText} </p>
        </React.Fragment>
      ) : null}
    </div>
  );
}

export default TopText;
