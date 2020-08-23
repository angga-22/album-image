import React, { useState, useEffect } from "react";
import "./Pages.scss";
import CardImage from "./CardImage";
import ButtonUpload from "./ButtonUpload";
import { postPhotos } from "../api/index";

const Pages = () => {
  const [imageAppear, setImageAppear] = useState([]);
  const [deleteList, setDeleteList] = useState([
    { album: "Personal", documents: "" },
    { album: "Nature", documents: "" },
    { album: "Food", documents: "" },
    { album: "Travel", documents: "" },
    { album: "Others", documents: "" },
  ]);

  useEffect(() => {
    postPhotos(0, 100).then((res) => setImageAppear(res.data.documents));
  }, []);

  const onCheckbox = (e) => {
    const album = e.target.album;
    const documents = e.target.name;
    let tempList = deleteList;
    let newDoc = "";
  };

  switch (album) {
    case "Personal":
      newDoc = tempList[0].documents + ", " + documents;
      tempList[0].documents = newDoc;
      setDeleteList(tempList);
      break;
    case "Nature":
      newDoc = tempList[0].documents + ", " + documents;
      tempList[0].documents = newDoc;
      setDeleteList(tempList);
      break;
    case "Food":
      newDoc = tempList[0].documents + ", " + documents;
      tempList[0].documents = newDoc;
      setDeleteList(tempList);
      break;
    case "Travel":
      newDoc = tempList[0].documents + ", " + documents;
      tempList[0].documents = newDoc;
      setDeleteList(tempList);
      break;
    case "Others":
      newDoc = tempList[0].documents + ", " + documents;
      tempList[0].documents = newDoc;
      setDeleteList(tempList);
      break;
    default:
      console.log("error");
      break;
  }

  return (
    <div>
      <ButtonUpload />
      <div className="pages">
        {imageAppear.map((item, i) => (
          <CardImage item={item} key={i} onCheckbox={(e) => onCheckbox(e)} />
        ))}
      </div>
    </div>
  );
};

export default Pages;
