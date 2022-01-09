import React from "react";
import { useDrag } from "react-dnd";

function Picture({ url, id }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "image",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <img
      src={url}
      alt={url}
      width={100}
      ref={dragRef}
      style={{
        borderColor: isDragging ? "pink" : undefined,
      }}
    />
  );
}

export default Picture;
