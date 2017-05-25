import React from "react";
import { Route, Link } from "react-router-dom";
import { ArticleLoader } from "../../utils/loader_util";
import Transition from "../../utils/transition_util";
import { fade } from "../../styles/transitions";
import { ErrorDiv, ErrorDiscoverIcon } from "../../styles/theme";
import ArticleList from "../articles/ArticleList";
import ArticleDetailContainer from "../articles/ArticleDetailContainer";
import {
  SubscribeHeader,
  SubscribeWrapper,
  ShortFeedWrapper,
} from "../../styles/feed";

class SavedArticles extends React.Component {
  componentDidMount() {
    this.props.fetchAllCollections();
    this.props.fetchFollowedFeeds();
    this.props.fetchSavedArticles();
  }

  componentWillUnmount() {
    this.props.resetArticles();
  }

  render() {
    const { loading, articles, match } = this.props;

    if (loading) {
      return <ArticleLoader />;
    } else if (articles.length) {
      return (
        <Transition identifier="saved-articles" {...fade}>
          <SubscribeWrapper>
            <SubscribeHeader>
              Saved
            </SubscribeHeader>
            <ShortFeedWrapper>
              <ArticleList path="/saved" articles={articles} />
            </ShortFeedWrapper>
            <Route
              path="/saved/:feedId/articles/:articleId"
              render={() => (
                <ArticleDetailContainer redirectToParent={match.url} />
              )}
            />
          </SubscribeWrapper>
        </Transition>
      );
    } else {
      return (
        <ErrorDiv>
          Oops! Looks like you have no saved articles!
          <Link className="no-decoration-color" to="/discover">
            <ErrorDiscoverIcon className="fa fa-feed" />
          </Link>
        </ErrorDiv>
      );
    }
  }
}

export default SavedArticles;
