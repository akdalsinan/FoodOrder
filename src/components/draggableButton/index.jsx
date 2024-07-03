import React, { useRef, useState } from "react";
import { Button, Popover } from "antd";
import Draggable from "react-draggable";
import UserChat from "../../pages/home/chat/userChat";
import { MailOutlined } from "@ant-design/icons";

const DraggableButton = ({ user }) => {
  const nodeRef = useRef(null);
  const [position, setPosition] = useState({ x: 10, y: 10 });

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
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
          <Button className="bg-primary text-secondary hover:text-secondary cursor-pointer ">
            <MailOutlined style={{ fontSize: "25px", color: "black" }} />
          </Button>
        </Popover>
      </div>
    </Draggable>
  );
};

export default DraggableButton;
