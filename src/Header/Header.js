import React from "react";
import "antd/dist/antd.min.css";
import "./Header.css";
export default function Header() {
  return (
    //display flex is used to keep the items inline
    <div
      style={{
        fontWeight: "800",
        backgroundColor: "#FEFFFE",
        display: "flex",
        padding: "10px",
        boxShadow: "0px 2px #F7F7F6",
      }}
    >
      <div style={{ fontSize: 27, display: "flex", marginLeft: "2%" }}>
        <div style={{ color: "#133A51" }}>ATools</div>
        <div style={{ color: "#FB8205" }}>.</div>
      </div>
      <button
        style={{
          fontWeight: "700",
          backgroundColor: "#023047",
          color: "#FFF7F2",
          border: "none",
          borderRadius: "3px",
          padding: "0px 60px",
          marginLeft: "auto",
        }}
      >
        Start Free Trial
      </button>
      <button
        style={{
          fontWeight: "700",
          backgroundColor: "#FB8401",
          color: "#FFF7F2",
          border: "none",
          borderRadius: "3px",
          padding: "0px 80px",
          margin: "0px 32px",
        }}
      >
        Login
      </button>
    </div>
  );
}
