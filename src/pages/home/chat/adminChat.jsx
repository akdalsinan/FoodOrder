import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Search from "antd/es/input/Search";

import { SendOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";

const socket = io("http://localhost:5000");

const AdminChat = () => {
  const [form] = Form.useForm();
  const formRef = useRef(null);

  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [unreadRooms, setUnreadRooms] = useState([]);

  useEffect(() => {
    // Odaları güncellemek için
    socket.on("updateRooms", (updatedRooms) => {
      setRooms(updatedRooms);
    });

    // Mesajları almak için
    socket.on("receiveMessage", (data) => {
      if (data.room === currentRoom) {
        setMessages((prevMessages) => [...prevMessages, data]);
      }
    });

    // Yeni mesaj olduğunda
    socket.on("newMessage", ({ room }) => {
      if (room !== currentRoom && !unreadRooms.includes(room)) {
        setUnreadRooms((prevUnreadRooms) => [...prevUnreadRooms, room]);
      }
    });

    return () => {
      socket.off("updateRooms");
      socket.off("receiveMessage");
      socket.off("newMessage");
    };
  }, [currentRoom, unreadRooms]);

  const handleRoomSelect = (room) => {
    setCurrentRoom(room);
    setMessages([]);
    socket.emit("joinRoom", room);

    // Mevcut mesajları almak için
    socket.on("loadMessages", (loadedMessages) => {
      setMessages(loadedMessages);
    });
    setUnreadRooms((prevUnreadRooms) =>
      prevUnreadRooms.filter((r) => r !== room)
    );
  };

  console.log("rooms", rooms);

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    socket.emit("sendMessage", {
      room: currentRoom,
      message: inputValue,
      sender: "Admin",
    });
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  console.log("messages", messages);

  return (
    <div>
      <ul>
        {rooms.map((room, index) => (
          <li key={index} onClick={() => handleRoomSelect(room)}>
            {room} {unreadRooms.includes(room) && <span>🔔</span>}
          </li>
        ))}
      </ul>
      {currentRoom && (
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

            {/* <Search
              ref={searchRef}
              placeholder="Type a message"
              onSearch={onSend}
              enterButton={
                <>
                  <SendOutlined style={{ fontSize: "20px", color: "black" }} />
                </>
              }
            /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminChat;
