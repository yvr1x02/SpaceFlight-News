
import { Article } from '../interfaces/Article';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  article: Article;
}

function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="card mb-3">
      <img src={article.image_url} className="card-img-top " alt={article.title} />
      <div className="card-body ">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text"><small className="text-muted">{new Date(article.published_at).toLocaleDateString()}</small></p>
        <p className="card-text">{article.summary}</p>
        <Link to={`/articles/${article.id}`} className="btn btn-primary">Read more</Link>
      </div>
    </div>
  );
}

export default ArticleCard;
