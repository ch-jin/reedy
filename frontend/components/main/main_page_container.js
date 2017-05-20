import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleUserDropdown } from "../../actions/dropdown_actions";
import { toggleArticleModal } from "../../actions/modal_actions";
import MainPage from "./main_page";

const mapStateToProps = ({ dropdown, loading, modal }) => ({
  userDropdown: dropdown.userDropdown,
  loading: loading.loadingSession,
  articleModal: modal.articleModal,
});

const mapDispatchToProps = dispatch => ({
  closeDropdown: () => dispatch(toggleUserDropdown(false)),
  toggleArticleModal: () => dispatch(toggleArticleModal()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainPage)
);
