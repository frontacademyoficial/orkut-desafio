import { useState } from "react";
import "./styles.css";
import LikeEmpty from "./assets/like-empty.jpg";
import LikeFilled from "./assets/like-filled.png";

// Arrow function
// const Like = () => {

// }

// Function normal
// function Like() {

// }

export function Like() {
  // let liked = false;
  const [liked, setLiked] = useState(false);

  return (
    <button
      className="like-button"
      onClick={() => {
        // liked = true;
        // if (liked === true) {
        //   setLiked(false);
        // } else {
        //   setLiked(true);
        // }
        // if (liked) {
        //   setLiked(false);
        // } else {
        //   setLiked(true);
        // }
        setLiked(!liked);
      }}
    >
      {/* {liked === true && <img alt="like filled" src={LikeFilled} />}
      {liked === false && <img alt="like empty" src={LikeEmpty} />} */}

      {/* {liked && <img alt="like filled" src={LikeFilled} />}
      {!liked && <img alt="like empty" src={LikeEmpty} />} */}

      {/* if ternário */}
      {liked ? (
        <img alt="like filled" src={LikeFilled} />
      ) : (
        <img alt="like empty" src={LikeEmpty} />
      )}
    </button>
  );
}
