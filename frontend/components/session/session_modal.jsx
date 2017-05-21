import React from "react";
import Transition from "../../utils/transition_util";
import { gentlePop } from "../../styles/transitions";
import SessionFormContainer from "./session_form_container";
import Modal from "../../utils/modal_util";

const SessionModal = () => (
  <Modal redirectPath={"/"}>
    <Transition identifier="sessionform" {...gentlePop}>
      <SessionFormContainer />
    </Transition>
  </Modal>
);

export default SessionModal;
