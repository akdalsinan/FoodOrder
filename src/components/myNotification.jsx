import { notification } from "antd";

// import React from "react";

const MyNotification = (type, message, description) => {
  notification[type]({
    message: message,
    description: description,
  });
};

export default MyNotification;
