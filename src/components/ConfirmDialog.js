import React from "react";
import styled from "styled-components";

function ConfirmDialog({ message, onDialog, nameProduct }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      onClick={() => onDialog(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h3 style={{ color: "#111", fontSize: "16px" }}>{message}</h3>
        <h1 style={{ color: "blue", fontSize: "24px" }}>{nameProduct}</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={() => onDialog(true)}
            style={{
              background: "#056bfd",
              color: "white",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Hoteli Sil
          </button>
          <button
            onClick={() => onDialog(false)}
            style={{
              background: "smoke",
              color: "white",
              padding: "10px",
              marginLeft: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Vazgeç
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
