import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Picture from "./Picture";

const pictureList = [
  { id: 1, url: "https://picsum.photos/200/300" },
  { id: 2, url: "https://picsum.photos/id/237/200/300" },
  { id: 3, url: "https://picsum.photos/200/300?grayscale" },
];

function DragDrop() {
  const [myBoard, setBoard] = useState([]);

  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: "image",
      drop: (item) => handleOnDrop(item.id),
      collect: (monitor) => ({ isOver: monitor.isOver() }),
    }),
    [myBoard]
  );

  const handleOnDrop = (id) => {
    const idx = myBoard.findIndex((pic) => pic.id === id);

    if (idx < 0) {
      const picture = pictureList.find((pic) => pic.id === id);
      if (picture) {
        setBoard((board) => [...board, picture]);
      }
    }
  };

  return (
    <>
      <div className="pictures">
        {pictureList.map((picture) => (
          <Picture {...picture} key={picture.id} />
        ))}
      </div>
      <div className="board" ref={dropRef}>
        {myBoard.map((picture) => (
          <img key={picture.id} src={picture.url} alt="" />
        ))}
      </div>
    </>
  );
}

export default DragDrop;
