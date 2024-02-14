import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

function Tooltip({
  className,
  id,
  content,
  AfterCLickContent,
  place,
  children,
}) {
  return (
    <div
      data-tooltip-html={content}
      data-tooltip-id={id}
      onClick={(e) =>
        e.currentTarget.setAttribute(
          "data-tooltip-content",
          AfterCLickContent ? AfterCLickContent : content
        )
      }
      className={className}
    >
      {children}
      <ReactTooltip
        place={place}
        className="shadow-massive-2 z-20 opacity-100 !backdrop-blur-0 text-white/90 border border-onyx-800 !bg-onyx-900 rounded-xl"
        id={id}
      />
    </div>
  );
}

export default Tooltip;
