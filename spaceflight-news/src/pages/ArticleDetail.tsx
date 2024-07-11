import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Article } from '../interfaces/Article';

function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticleById = async () => {
      try {
        if (id) {
          const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
          const data = await response.json();
          setArticle(data);
          setLoading(false); 
        }
      } catch (error) {
        console.error('Error fetching article:', error);
        setLoading(false);
      }
    };

    fetchArticleById();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-4">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!article) {
    return <p>Error loading article</p>; 
  }

  return (
    <div className="container d-flex justify-content-center border border-dark p-4 bg-white rounded">
      <div className="article-detail text-center">
        <h1 className="mb-4">{article.title}</h1>
        <img src={article.image_url} className="img-fluid " alt={article.title} />
        <p className="text-muted mt-4">Published at: {new Date(article.published_at).toLocaleDateString()}</p>
        
        <p>{article.summary}</p>
        
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read full article</a>
      </div>
    </div>
  );
}

export default ArticleDetail;
