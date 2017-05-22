import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MainNavHeader from "./MainNavHeader";
import { currentFeed } from "../../selectors/feed_selectors";

const mapStateToProps = (state, { history }) => ({
  currentFeed: currentFeed(state),
  pathname: history.location.pathname,
});

export default withRouter(connect(mapStateToProps)(MainNavHeader));
