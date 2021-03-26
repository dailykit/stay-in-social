import React from "react";
import Masonry from "react-masonry-css";
export default function MasonryWrapper({
  children,
  breakpointCols = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  },
  className = "wrapper-class",
  columnClassName = "column_class",
}) {
  return (
    <Masonry
      breakpointCols={breakpointCols}
      className={className}
      columnClassName={columnClassName}
    >
      {children}
    </Masonry>
  );
}
