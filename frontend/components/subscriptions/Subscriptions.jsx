import React from "react";
import { Route } from "react-router-dom";
import Loader from "../../utils/loader_util";
import { StyledFeedWrapper } from "../../styles/feed";
import ArticleListContainer from "../articles/ArticleListContainer";
import ArticleDetailContainer from "../articles/ArticleDetailContainer";

class Subscriptions extends React.Component {
  componentDidMount() {
    this.props.fetchFollowedCollections();
    this.props.fetchFollowedArticles();
  }

  render() {
    const { loading } = this.props;
    return (
      <StyledFeedWrapper>
        {loading && <Loader />}
        <ArticleListContainer path="/subscriptions" />
        <Route
          path="/subscriptions/:feedId/articles/:articleId"
          render={() => (
            <ArticleDetailContainer redirectToParent="/subscriptions" />
          )}
        />
      </StyledFeedWrapper>
    );
  }
}

export default Subscriptions;
