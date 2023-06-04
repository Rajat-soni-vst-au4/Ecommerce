import React from "react";
import "./MusicList.css";

const productsArr = [
  {
    id: 1,
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: 2,
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: 3,
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: 4,
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const MusicList = () => {
  const showContent = productsArr.map((item) => (
    <div key={item.id} className="itemBox">
        <h2>Album</h2>
      <div className="title">{item.title}</div>
      <div className="imge">
        <img src={item.imageUrl} />
      </div>
      <div className="price">{item.price}</div>
    </div>
  ));
  return (
    <div className="album">
      {showContent}
    </div>
  );
};

export default MusicList;
