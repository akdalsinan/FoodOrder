import React, { useState } from "react";
import { Button, Input, Space } from "antd";
import { SendOutlined } from "@ant-design/icons";

import io from "socket.io-client";

const socket = io("https://food-order-backend2-5tu9.onrender.com");

function AdminChatMessage({ currentRoom, messages }) {
  // console.log("messages", messages);
  // console.log("currentRoom", currentRoom);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    socket.emit("sendMessage", {
      room: currentRoom,
      message: inputValue,
      sender: "Admin",
    });
    setInputValue("");
  };

  return (
    <div className="flex flex-col justify-between h-96 w-72 border border-gray-300 rounded-lg overflow-hidden">
      <div className="flex-1 p-2 overflow-y-auto bg-gray-100">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <strong className="text-gray-800">{msg.sender}:</strong>{" "}
            {msg.message}
          </div>
        ))}
      </div>
      <div>
        <Space direction="vertical" size="large">
          <Space style={{ width: "100%" }}>
            <Input
              placeholder="Mesajınızı Girin..."
              style={{ width: "220px" }}
              value={inputValue}
              onChange={handleInputChange}
              onPressEnter={handleSubmit}
            />
            <Button
              onClick={handleSubmit}
              type="primary"
              className="bg-primary text-secondary hover:text-secondary cursor-pointer"
            >
              <SendOutlined style={{ fontSize: "20px", color: "black" }} />
            </Button>
          </Space>
        </Space>
      </div>
    </div>
  );
}

export default AdminChatMessage;
