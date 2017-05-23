import { connect } from "react-redux";
import { allCollections } from "../../utils/collections_util";
import CollectionList from "./CollectionList";
import { allFeeds } from "../../selectors/feed_selectors";

const mapStateToProps = state => ({
  feeds: state.feeds.all,
  collections: allCollections(state),
  hasFeeds: allFeeds(state).length > 0,
});

export default connect(mapStateToProps)(CollectionList);
