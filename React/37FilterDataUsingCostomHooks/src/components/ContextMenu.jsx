import React from "react";

export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  rowId,
  setExpenses
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
      <div onClick={handleDelete}>Edit</div>
      <div>Delete</div>
    </div>
  );
}