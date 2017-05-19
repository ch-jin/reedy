import React from "react";
import SessionFormContainer from "./session_form_container";
import Modal from "../../utils/modal_util";

const SessionModal = () => (
  <Modal redirectPath={"/"}>
    {console.log("adasdsads")}
    <SessionFormContainer />
  </Modal>
);

export default SessionModal;
