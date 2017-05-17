import React from "react";
import SessionFormContainer from "./session_form_container";
import Modal from "../../utils/modal_util";

class SessionModal extends React.Component {
  render() {
    return (
      <Modal redirectPath={"/"}>
        <SessionFormContainer />
      </Modal>
    );
  }
}

export default SessionModal;
