import React from "react";
import { Route } from "react-router-dom";
import { ArticleLoader } from "../../utils/loader_util";
import Transition from "../../utils/transition_util";
import { enterFade } from "../../styles/transitions";
import ArticleList from "../articles/ArticleList";
import ArticleDetailContainer from "../articles/ArticleDetailContainer";
import ErrorPage from "../misc/ErrorPage";
import {
  SubscribeHeader,
  SubscribeWrapper,
  ShortFeedWrapper,
} from "../../styles/feed";
import { PageHeaderIcon } from "../../styles/theme";

class SavedArticles extends React.Component {
  componentDidMount() {
    this.props.resetCurrentFeed();
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
        <Transition identifier="saved-articles" {...enterFade}>
          <SubscribeWrapper>
            <SubscribeHeader>
              <PageHeaderIcon className="fa fa-bookmark" />Saved
            </SubscribeHeader>
            <ShortFeedWrapper>
              <ArticleList imageOverride path="/saved" articles={articles} />
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
        <ErrorPage>
          Oops! Looks like you have no saved articles!
          <br /><br />
          Click below to browse feeds:
        </ErrorPage>
      );
    }
  }
}

export default SavedArticles;
