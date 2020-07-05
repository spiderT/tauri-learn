import React from 'react';
import './Image.scss';

function handleZoom(src) {
}

const Image = (props) => {
  const content = props.content;
  return (
    <span className="msg-text">
      <img src={content} onClick={() => handleZoom(content)} />
    </span>
  );
};

export default Image;
