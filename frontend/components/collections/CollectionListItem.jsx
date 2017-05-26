import React from "react";
import { Link } from "react-router-dom";
import { CollectionTitleIconWrapper } from "../../styles/theme";
import {
  StyledItemBox,
  StyledCollectionFeedWrapper,
  StyledCollectionListItemTitle,
} from "../../styles/collection";
import CollectionFeedItem from "./CollectionFeedItem";

class CollectionListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false };
    this.handleCollapseClick = this.handleCollapseClick.bind(this);
    this.renderFeeds = this.renderFeeds.bind(this);
  }

  handleCollapseClick(e) {
    e.preventDefault();
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    const { currentCollectionId, collection } = this.props;
    return (
      <StyledItemBox>
        <Link
          className="no-decoration-color"
          to={`/collections/${collection.id}/articles`}
        >
          <StyledCollectionListItemTitle
            active={currentCollectionId === collection.id}
          >
            {this.renderCollectionIcon()}

            {collection.title}
          </StyledCollectionListItemTitle>
        </Link>
        {this.renderFeeds()}
      </StyledItemBox>
    );
  }

  renderFeeds() {
    const { feeds, currentFeedId } = this.props;
    const { collapsed } = this.state;
    if (collapsed) {
      return null;
    } else {
      return (
        <StyledCollectionFeedWrapper>
          {feeds.map(feed => (
            <CollectionFeedItem
              active={currentFeedId === feed.id}
              key={"collection-feed-" + feed.id}
              feed={feed}
            />
          ))}
        </StyledCollectionFeedWrapper>
      );
    }
  }

  renderCollectionIcon() {
    const { collapsed } = this.state;
    if (collapsed)
      return (
        <CollectionTitleIconWrapper onClick={this.handleCollapseClick}>
          <i className="fa fa-angle-right" ariaHidden="true" />
        </CollectionTitleIconWrapper>
      );
    else {
      return (
        <CollectionTitleIconWrapper onClick={this.handleCollapseClick}>
          <i className="fa fa-angle-down" ariaHidden="true" />
        </CollectionTitleIconWrapper>
      );
    }
  }
}

export default CollectionListItem;
