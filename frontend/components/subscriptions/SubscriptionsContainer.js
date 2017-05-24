import { connect } from "react-redux";
import { loadingSubscriptions } from "../../selectors/loading_selectors";
import InitializeUtil from "../../utils/initialize_util";
import Subscriptions from "./Subscriptions";

const mapStateToProps = state => ({
  loading: loadingSubscriptions(state),
});

const mapDispatchToProps = InitializeUtil;

export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);
