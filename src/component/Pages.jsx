import React, { useState, useEffect } from "react";
import "./Pages.scss";
import CardImage from "./CardImage";
import ButtonUpload from "./ButtonUpload";
import { postPhotos, delPhotos } from "../api/index";

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

    switch (album) {
      case "Personal":
        newDoc = tempList[0].documents
          ? tempList[0].documents + ", " + documents
          : documents;
        tempList[0].documents = newDoc;
        setDeleteList(tempList);
        break;
      case "Nature":
        newDoc = tempList[1].documents
          ? tempList[1].documents + ", " + documents
          : documents;
        tempList[1].documents = newDoc;
        setDeleteList(tempList);
        break;
      case "Food":
        newDoc = tempList[2].documents
          ? tempList[2].documents + ", " + documents
          : documents;
        tempList[2].documents = newDoc;
        setDeleteList(tempList);
        break;
      case "Travel":
        newDoc = tempList[3].documents
          ? tempList[3].documents + ", " + documents
          : documents;
        tempList[3].documents = newDoc;
        setDeleteList(tempList);
        break;
      case "Others":
        newDoc = tempList[4].documents
          ? tempList[4].documents + ", " + documents
          : documents;
        tempList[4].documents = newDoc;
        setDeleteList(tempList);
        break;
      default:
        console.log("error");
        break;
    }
  };

  const onDelete = () => {
    var tempList = [];
    for (var i = 0; i < deleteList.length; i++) {
      const doc = deleteList[i].documents;
      if (doc) {
        tempList.push(deleteList[i]);
      }
    }
    console.log(tempList);
    delPhotos(tempList)
      .then((res) => alert("success delete photo"))
      .catch((err) => console.log(err));
    postPhotos();
  };

  return (
    <div>
      <ButtonUpload onDelete={onDelete} />
      <div className="pages">
        {imageAppear.map((item, i) => (
          <CardImage item={item} key={i} onCheckbox={(e) => onCheckbox(e)} />
        ))}
      </div>
    </div>
  );
};

export default Pages;
