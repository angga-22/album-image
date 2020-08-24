import React from "react";
import { Checkbox } from "antd";
import "./CardImage.scss";

const CardImage = (props) => {
  const { album, name, raw } = props.item;
  const onCheckbox = props.onCheckbox;
  return (
    <div className="card-image">
      <Checkbox
        onChange={(e) => onCheckbox(e)}
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
