import { notification } from "antd";
// import React from "react";

const MyNotification = (type, description) => {

    notification[type]({ message: description });

};

export default MyNotification;
