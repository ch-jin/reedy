import React from "react";
import Loader from "../../utils/loader_util";

class ArticleList extends React.Component {
  componentDidMount() {
    const { fetchAllFeeds, fetchArticles, feeds, feedId } = this.props;

    if (feeds.length) {
      fetchArticles(feedId);
    } else {
      fetchAllFeeds().then(() => fetchArticles(feedId));
    }
  }

  render() {
    const { loading, articles } = this.props;

    return (
      <div>
        {loading && <Loader />}
        {articles.map(article => (
          <div key={"article" + article.id}>
            <h1 dangerouslySetInnerHTML={{ __html: article.title }} />
            <br />
            <img src={article.image} />
            <h5 dangerouslySetInnerHTML={{ __html: article.body }} />
            <br />
            {article.pubDate}
            <br /><br /><br />
          </div>
        ))}
      </div>
    );
  }
}

export default ArticleList;
