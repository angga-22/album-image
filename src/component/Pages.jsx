import React, { useState, useEffect } from "react";
import "./Pages.scss";
import CardImage from "./CardImage";
import ButtonUpload from "./ButtonUpload";
import { postPhotos } from "../api/index";

const Pages = () => {
  const [imageAppear, setImageAppear] = useState([]);

  useEffect(() => {
    postPhotos(0, 100).then((res) => setImageAppear(res.data.documents));
  }, []);

  const onCheckbox = (e) => {
    console.log(e, "okee");
  };

  return (
    <div>
      <ButtonUpload />
      <div className="pages">
        {imageAppear.map((item, i) => (
          <CardImage item={item} key={i} onCheckbox={onCheckbox} />
        ))}
      </div>
    </div>
  );
};

export default Pages;
