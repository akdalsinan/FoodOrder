import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Search from "antd/es/input/Search";

import { SendOutlined } from "@ant-design/icons";
import { Button, Form, Input, List, Popover, Space } from "antd";
import { useDispatch } from "react-redux";
import { setMessage } from "../../../reducer/adminMessage";
import AdminChatMessage from "./adminChatMessage";

const socket = io("https://food-order-backend2-5tu9.onrender.com");

const AdminChat = () => {
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [aktifmessages, setaktifMessages] = useState([]);
  const [unreadRooms, setUnreadRooms] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

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
    console.log("room", room);
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

  // console.log("rooms", rooms);

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

  // Aktif ve diğer odaları ayır
  const activeRooms = rooms.filter((room) => unreadRooms.includes(room));
  const otherRooms = rooms.filter((room) => !unreadRooms.includes(room));

  // Aktif odaları en üstte, diğer odaları altta göster
  const sortedRooms = [...activeRooms, ...otherRooms];

  const [open, setOpen] = useState(false);

  const [openRooms, setOpenRooms] = useState({});

  const handlePopoverOpenChange = (room, newOpen) => {
    console.log("rooooooooooooooooooooom", room);
    setOpenRooms((prevOpenRooms) => ({
      ...prevOpenRooms,
      [room]: newOpen,
    }));
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

  return (
    <div>
      <ul>
        {sortedRooms.map((room, index) => (
          <li key={index} onClick={() => handleRoomSelect(room)}>
            <Popover
              content={
                currentRoom &&
                messages && (
                  <AdminChatMessage
                    currentRoom={currentRoom}
                    messages={messages}
                  />
                )
              }
              trigger="click"
              open={openRooms[room] || false}
              onOpenChange={(newOpen) => handlePopoverOpenChange(room, newOpen)}
            >
              <span>
                {room} {unreadRooms.includes(room) && "🔔"}
              </span>
            </Popover>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminChat;
