import React from "react";

export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  rowId,
  setExpens,
  setExpenses,
  rowId
}) {

  const handleDelete = () => {
    setExpenses((prev) => prev.filter((item) => item.id !== rowId));
    setMenuPosition(null);
  };

  return (
    <div
      className="context-menu"
      style={{
        top: menuPosition.top,
        left: menuPosition.left,

      }}
    >
      <div onClick={handleDelete}>Delete</div>
      <div>Edit</div>
    </div>
  );
}