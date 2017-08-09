import { connect } from "react-redux";
import MainSideNav from "./MainSideNav";
import { addFeed } from "../../actions/feed_actions";

const mapDispatchToProps = dispatch => ({
  addFeed: url => dispatch(addFeed(url)),
});

export default connect(null, mapDispatchToProps)(MainSideNav);
