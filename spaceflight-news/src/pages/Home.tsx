import  { useState, useEffect } from 'react';
import { Article } from '../interfaces/Article';
import ArticleCard from '../components/ArticleCard';

function Home() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles');
      const data = await response.json();
      setArticles(data.results);
    };

    fetchArticles();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {articles.map(article => (
          <div key={article.id} className="col-md-4">
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
