import { TOGGLE_ARTICLE_MODAL } from "../actions/modal_actions";

const _initState = {
  articleModal: false,
  sessionModal: false,
};

const modalReducer = (state = _initState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case TOGGLE_ARTICLE_MODAL:
      return { ...state, articleModal: !state.articleModal };
    default:
      return state;
  }
};

export default modalReducer;
