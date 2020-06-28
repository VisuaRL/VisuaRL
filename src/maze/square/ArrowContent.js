import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArrowContent = React.memo(function ArrowContent(props) {
  let { arrow } = props;
  return (
    <div className="arrows">
      {arrow.up && <FontAwesomeIcon icon="arrow-up" />}
      <div className="flex-br" />
      {arrow.left && <FontAwesomeIcon icon="arrow-left" />}
      {arrow.right && <FontAwesomeIcon icon="arrow-right" />}
      <div className="flex-br" />
      {arrow.down && <FontAwesomeIcon icon="arrow-down" />}
    </div>
  );
});

export default ArrowContent;
