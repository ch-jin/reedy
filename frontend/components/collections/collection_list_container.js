import { connect } from "react-redux";
import { allCollections } from "../../utils/collections_util";
import CollectionList from "./collection_list";

const mapStateToProps = state => ({
  collections: allCollections(state),
});

export default connect(mapStateToProps)(CollectionList);
