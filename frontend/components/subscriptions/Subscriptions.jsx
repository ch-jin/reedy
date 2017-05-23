import React from "react";
import { Route } from "react-router-dom";
import { ArticleLoader } from "../../utils/loader_util";
import { StyledFeedWrapper } from "../../styles/feed";
import ArticleListContainer from "../articles/ArticleListContainer";
import ArticleDetailContainer from "../articles/ArticleDetailContainer";

class Subscriptions extends React.Component {
  componentDidMount() {
    this.props.fetchAllCollections();
    this.props.fetchFollowedArticles();
  }

  render() {
    const { loading } = this.props;
    return (
      <div>
        {loading && <ArticleLoader />}
        <StyledFeedWrapper>
          <ArticleListContainer path="/subscriptions" />
        </StyledFeedWrapper>
        <Route
          path="/subscriptions/:feedId/articles/:articleId"
          render={() => (
            <ArticleDetailContainer redirectToParent="/subscriptions" />
          )}
        />
      </div>
    );
  }
}

export default Subscriptions;
