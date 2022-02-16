import React from "react";

function Buttons({ search, setButtonName, setLoading }) {
  const clickHandle = (e) => {
    setButtonName(e.target.value);
    setLoading(true)
  };
  return (
    <div className="btns">
      {search.map((name, index) => {
        if (name) {
          return (
            <button key={index} onClick={clickHandle} value={name}>
              {name}{" "}
            </button>
          );
        }
      })}
    </div>
  );
}

export default Buttons;
