import React from "react";
import { RouteTransition } from "react-router-transition";
import { gentlePop } from "../../styles/transitions";
import SessionFormContainer from "./session_form_container";
import Modal from "../../utils/modal_util";

const SessionModal = () => (
  <Modal redirectPath={"/"}>
    <RouteTransition pathname="/" {...gentlePop}>
      <SessionFormContainer />
    </RouteTransition>
  </Modal>
);

export default SessionModal;
