import React from "react";

const ValueContent = React.memo(function ValueContent(props) {
  let { value } = props;
  return <span>{round(value)}</span>;
});

function round(value) {
  if (isNaN(value)) {
    return "";
  } else {
    return Number(value).toFixed(2);
  }
}

export default ValueContent;
