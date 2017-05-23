import React from "react";
import { Route } from "react-router-dom";
import Loader from "../../utils/loader_util";
import ArticleListContainer from "../articles/ArticleListContainer";
import ArticleDetailContainer from "../articles/ArticleDetailContainer";

class Subscriptions extends React.Component {
  componentDidMount() {
    this.props.fetchFollowedCollections();
    this.props.fetchFollowedArticles();
  }

  componentWillUnmount() {
    console.log("unmounting subs");
  }

  render() {
    const { loading } = this.props;
    return (
      <div>
        {loading && <Loader />}
        <ArticleListContainer path="discover" />
        <Route
          path="/subscriptions/:feedId/articles/:articleId"
          component={ArticleDetailContainer}
        />
      </div>
    );
  }
}

export default Subscriptions;
