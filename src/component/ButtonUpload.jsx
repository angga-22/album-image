import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Select, Form, Button } from "antd";
import {
  CloseOutlined,
  UploadOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { putPhotos } from "../api/index";
import Modal from "react-modal";
import "./ButtonUpload.scss";

const ButtonUpload = (props) => {
  const [modalButton, setModalButton] = useState(false);
  const [album, setAlbum] = useState("");
  const [files, setFiles] = useState([]);

  const submitPhoto = () => {
    let fd = new FormData();
    fd.append("album", album);
    files.map((file) => fd.append("documents", file));
    putPhotos(fd)
      .then((res) => alert("success upload photo"))
      .catch((err) => console.log(err));
    setModalButton(false);
  };

  //   const deletePhotos = () => {
  //     let array = [];
  //     delPhotos(array);
  //   };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "200px" }} alt="preview" />
      </div>
    </div>
  ));

  const Album = async (value) => {
    await setAlbum(value);
  };

  return (
    <div className="button-upload">
      <h1 style={{ fontWeight: "bold" }}>Photos</h1>
      <div className="del">
        <Button danger style={{ border: "none" }} onClick={props.onDelete}>
          <DeleteOutlined />
        </Button>
      </div>

      <button onClick={() => setModalButton(true)}>
        <UploadOutlined /> Upload |
      </button>
      <p>{files.length}</p>
      <Modal
        className="modal"
        isOpen={modalButton}
        onRequestClose={() => setModalButton(false)}
      >
        <div className="modal-header">
          <h1>Upload Photos</h1>
          <button onClick={() => setModalButton(false)}>
            <CloseOutlined />
          </button>
        </div>
        <div className="drop-zone" {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag 'n Drop file here, or click to select files</p>
        </div>
        <div className="images">{images}</div>
        <div className="dropzone-footer">
          <Form.Item
            label="Select Album"
            name="Select Album"
            style={{ display: "inline-block", width: "30%", marginLeft: "8px" }}
          >
            <Select onChange={Album}>
              <Select.Option value="Food"> Food </Select.Option>
              <Select.Option value="Nature"> Nature </Select.Option>
              <Select.Option value="Personal"> Personal </Select.Option>
              <Select.Option value="Travel"> Travel </Select.Option>
              <Select.Option value="Others"> Other </Select.Option>
            </Select>
          </Form.Item>
          <Button onClick={submitPhoto}>
            <UploadOutlined /> Upload
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ButtonUpload;
