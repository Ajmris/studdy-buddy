import React, { useState, useEffect } from 'react';
import { ArticleWrapper, ContentWrapper, NewsSectionHeader, TitleWrapper, Wrapper } from './NewsSection.styles';
import { Button } from '../../atoms/Button/Button';
import axios from 'axios';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  console.log(import.meta.env.VITE_DATOCMS_TOKEN);
  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query:`
         {
          allArticles {
            id
            title
            category
            content
            image {
              url
            }
          }
        }
      `,
        },
        {
          headers: {
            authorization: `Bearer ${import.meta.env.VITE_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => {
        setError(`Sorry, we couldn't load articles for you`);
      });
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </ContentWrapper>
            <Button isBig>Read more</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;