import React from "react";
import { Rectangle } from "react-shapes";

function Square(props) {
  return (
      <Rectangle
        width={48}
        height={48}
        fill={{ color: "#dddddd" }}
        stroke={{ color: "#3468d8" }}
        strokeWidth={3}
      />
  );
}

export default Square;
