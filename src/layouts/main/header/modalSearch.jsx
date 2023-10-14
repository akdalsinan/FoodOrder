import React from "react";

import { Avatar, List, Modal, Table } from "antd";
import PropTypes from "prop-types";
import Search from "antd/es/input/Search";

ModalSearch.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};
function ModalSearch({ setIsModalOpen, isModalOpen }) {

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  }; 
  
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];
  const onSearch = (value) => console.log("vaule", value);
  return (
    <Modal
      className="mb-10"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <div>
        <Search
          // className="mb-10"
          placeholder="Yemek İstediğin Yemeği Araaa..."
          onSearch={onSearch}
          enterButton
        />
      </div>
    </Modal>
  );
}

export default ModalSearch;
