import React from "react";

export default function Tooltip({ text}) {
  return (
    <div className="tooltip">
      <span className="tooltip-text">{text}</span>
    </div>
  );
}
