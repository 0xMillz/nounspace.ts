import React, { useState } from 'react';
import { RiPencilFill } from "react-icons/ri";
import AddFidgetButton from './AddFidgetButton';

export default function Toolbar({editMode, switchMode}){
  const [isOpen, setIsOpen] = useState(false);

  const toggleToolbar = () => {
    setIsOpen(!isOpen);
  };

  const onClick = () => {
    switchMode();
    toggleToolbar();
  }

  return (
    <div className="toolbar-container">
        <button
            onClick={onClick}
            className={
                editMode
                ? "border shadow-md opacity-90 rounded-full bg-white size-12 absolute top-6 right-4 z-10 flex hover:opacity-100 duration-500"
                : "opacity-50 rounded-full bg-white size-12 absolute top-6 right-4 z-10 flex hover:opacity-100 duration-500"
        }>
            <RiPencilFill
            className={
                editMode
                ? "text-slate-900 font-semibold text-2xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                : "text-gray-700 font-semibold text-2xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            }
            />
        </button>
        <div className={`toolbar ${isOpen ? 'open border shadow-md' : ''}`}>   
            <AddFidgetButton/>

        </div>
    </div>
  );
};