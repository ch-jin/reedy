import React from "react";
import { Route } from "react-router-dom";
import Transition from "../../utils/transition_util";
import { ArticleLoader } from "../../utils/loader_util";
import { PageHeaderIcon } from "../../styles/theme";
import {
  ShortFeed,
  ShortFeedWrapper,
  SubscribeWrapper,
  ShortLine,
  SubscribeHeader,
} from "../../styles/feed";
import { enterFade } from "../../styles/transitions";
import ArticleList from "../articles/ArticleList";
import ArticleDetailContainer from "../articles/ArticleDetailContainer";
import FeedHeader from "../feeds/FeedHeader";

class CollectionShowArticles extends React.Component {
  constructor(props) {
    super(props);
    this.renderCollectionArticles = this.renderCollectionArticles.bind(this);
  }

  initialize() {
    this.props.fetchAllCollections();
    this.props.fetchFollowedFeeds();
    this.props.fetchCollectionArticles(this.props.collectionId);
    this.props.fetchCollection(this.props.collectionId);
  }

  componentDidMount() {
    this.props.resetCurrentFeed();
    this.initialize();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.collectionId !== nextProps.collectionId) {
      this.props.fetchCollectionArticles(nextProps.collectionId);
      this.props.fetchCollection(nextProps.collectionId);
    }
  }

  componentWillUnmount() {
    this.props.resetCurrentCollection();
    this.props.resetArticles();
  }

  render() {
    const { collection, collectionId } = this.props;

    if (!collection) {
      return <ArticleLoader />;
    } else {
      return (
        <Transition identifier={"collections"} {...enterFade}>
          <SubscribeWrapper>
            <SubscribeHeader>
              <PageHeaderIcon className="fa fa-folder-open-o" />
              {collection.title}
            </SubscribeHeader>
            {this.renderCollectionArticles()}
            <Route
              path="/collections/:collectionId/articles/:articleId"
              render={() => (
                <ArticleDetailContainer
                  redirectToParent={`/collections/${collectionId}/articles`}
                />
              )}
            />
          </SubscribeWrapper>
        </Transition>
      );
    }
  }

  renderCollectionArticles() {
    return this.props.feedsWithArticles.map((articles, idx) => {
      const { feeds, collectionId } = this.props;
      const feed = feeds[articles[0].feedId];
      return (
        <ShortFeedWrapper key={`sub-article-group-${idx}`}>
          <ShortFeed>
            <FeedHeader feed={feed} notFeed />
            <ShortLine />
            <ArticleList
              collectionId={collectionId}
              imageOverride
              path="/collections"
              articles={articles}
            />
          </ShortFeed>
        </ShortFeedWrapper>
      );
    });
  }
}

export default CollectionShowArticles;
