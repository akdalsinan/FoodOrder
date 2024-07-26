import React, { useRef, useState } from "react";
import { Popover } from "antd";
import Draggable from "react-draggable";
import UserChat from "../../pages/home/chat/userChat";
import SendMessageButton from "../sendMessageButton";

const DraggableButton = ({ user }) => {
  const nodeRef = useRef(null);
  const [position, setPosition] = useState({ x: 20, y: 150 });

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <Draggable
      scale={1}
      nodeRef={nodeRef}
      position={position}
      onDrag={handleDrag}
    >
      <div
        ref={nodeRef}
        style={{
          position: "absolute",
          zIndex: 1000,
        }}
      >
        <Popover
          content={<UserChat user={user} />}
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}
        >
          <div>
            <SendMessageButton />
          </div>
        </Popover>
      </div>
    </Draggable>
  );
};

export default DraggableButton;
