import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { SendOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";

const socket = io("http://localhost:5000");

const UserChat = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const room = user && `user-${user.id}`;

  useEffect(() => {
    socket.emit("joinRoom", room);

    socket.on("receiveMessage", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    socket.on("loadMessages", (loadedMessages) => {
      setMessages(loadedMessages);
    });

    return () => {
      socket.off("receiveMessage");
      socket.off("loadMessages");
    };
  }, [room]);

  const handleSubmit = () => {
    socket.emit("sendMessage", {
      room,
      message: inputValue,
      sender: user.username,
    });
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
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
              className="bg-primary text-secondary hover:text-secondary cursor-pointer "
            >
              <SendOutlined style={{ fontSize: "20px", color: "black" }} />
            </Button>
          </Space>
        </Space>
      </div>
    </div>
  );
};

export default UserChat;
