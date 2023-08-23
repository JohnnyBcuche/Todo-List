import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Card from "./UI/Card";
import Button from "./UI/Button";
import "./ErrorModal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};

const OverlayModal = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      ,
      {ReactDOM.createPortal(
        <OverlayModal
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
          autoFocus={true}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
