import React from "react";
import * as FeedAPIUtils from "../../utils/feeds_api_util";
import * as ArticleAPIUtils from "../../utils/articles_api_util";
import values from "lodash/values";
import Spinner from "../../utils/spinner_util";

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentDidMount() {
    FeedAPIUtils.fetchAllFeeds().then(feeds => {
      const keys = Object.keys(feeds);
      ArticleAPIUtils.fetchArticlesFromFeed(keys[0]).then(articles => {
        this.setState({ articles: values(articles) });
      });
    });
  }

  render() {
    const { articles } = this.state;

    return (
      <div>
        <Spinner active={!articles.length} />
        {articles.map(article => (
          <div>
            <h1 dangerouslySetInnerHTML={{ __html: article.title }} />
            <h1>{article.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: article.body }} />
          </div>
        ))}
      </div>
    );
  }
}

export default ArticleList;
