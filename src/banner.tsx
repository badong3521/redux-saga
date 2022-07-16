import React from "react";
import "./global.css";

function Banner(props: any) {
  interface User {
    name: string;
    age: number;
  }

  const user: User = {
    name: "string",
    age: 12,
  };
  console.log(user);
  return (
    <div className={`banner ${props.active ? "active" : ""}`}>
      {props.children}
    </div>
  );
}

export default Banner;
