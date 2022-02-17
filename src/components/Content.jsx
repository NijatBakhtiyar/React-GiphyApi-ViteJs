import React, { useState, useEffect } from "react";
import { Children } from "react/cjs/react.production.min";
import SkeletonGiphy from "../skeletons/SkeletonGiphy";
import Card from "./Card";

function Content({ buttonName, loading, setLoading }) {
  const [data, setData] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  let url = null;
  if (buttonName) {
    url = `https://api.giphy.com/v1/gifs/search?api_key=2tD2qiRvar4aBQY6mFSREf5SLuRSb4pF&q=${buttonName}&limit=5`;
  }

  useEffect(() => {
    setData(null);

    setTimeout(async () => {
      const response = await fetch(url);
      const result = await response.json();
      setLoading(!loading);
      return setData(result.data);
    }, 3000);
  }, [buttonName]);
  let temp = false

  const handleClick = (index) => {
    console.log(temp);
    setImgUrl(index)
    temp = !temp;
  }

  return (
    <div>
      <div className="giphy-apis">
        {data &&
          data.map((value, index) => (
            <Card value={value} key={index} />
          )
          )}
        {loading &&
          [1, 2, 3, 4, 5].map((value) => <SkeletonGiphy key={value} theme={"dark"} />)}
      </div>
    </div>
  );
}

export default Content;
