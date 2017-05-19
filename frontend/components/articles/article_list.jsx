import React from "react";
import Loader from "../../utils/loader_util";
import { MainContentWrapper } from "../../styles/main";

class ArticleList extends React.Component {
  componentDidMount() {
    this.props.fetchArticles(this.props.feed.id);
  }

  render() {
    const { loading, articles } = this.props;

    return (
      <MainContentWrapper>
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
      </MainContentWrapper>
    );
  }
}

export default ArticleList;
