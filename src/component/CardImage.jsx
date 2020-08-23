import React, { useState } from "react";
import { Checkbox } from "antd";
import "./CardImage.scss";

const CardImage = (props) => {
  const [check, setCheck] = useState([]);

  const checkBox = (e) => {
    setCheck(e.target.value);
    var data = { album: e.target.album, documents: e.target.name };
    console.log(data, "adakah data");
  };

  const { album, name, raw, onCheckbox } = props.item;
  return (
    <div className="card-image">
      <Checkbox
        onChange={onCheckbox}
        name={name}
        raw={raw}
        album={album}
      ></Checkbox>
      <img src={raw} alt="" />
      <p>{name}</p>
      <h1>{album}</h1>
    </div>
  );
};

export default CardImage;
