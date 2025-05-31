import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledBlogsSection = styled.section`
  max-width: 1000px;

  .blogs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 25px;
    margin-top: 50px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

const StyledBlog = styled.article`
  cursor: pointer;
  transition: var(--transition);

  &:hover,
  &:focus {
    transform: translateY(-5px);

    .blog-inner {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }
  }

  .blog-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
  }

  .blog-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
  }

  .blog-title {
    margin: 0 0 10px 0;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .blog-description {
    color: var(--light-slate);
    font-size: 17px;
  }

  .blog-date {
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    margin-top: 20px;
  }

  .blog-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: var(--border-radius);
    margin-bottom: 20px;
  }

  .loading {
    color: var(--light-slate);
    font-style: italic;
  }
`;

const Blogs = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Medium article URLs
  const mediumUrls = [
    'https://medium.com/@aniketbiswas/dirty-room-theory-4fb1f0b48bc6',
    'https://medium.com/@aniketbiswas/ship-of-theseus-and-software-development-3579a1d05eaa',
    'https://medium.com/@aniketbiswas/my-internship-experience-learning-fun-hard-goodbyes-d9cc64e3213e',
  ];

  // Fallback data in case fetching fails
  const fallbackArticles = [
    {
      title: 'Dirty Room Theory',
      description:
        'An interesting perspective on software development practices and how small inefficiencies can compound over time, drawing parallels between maintaining clean code and keeping a tidy workspace.',
      url: 'https://medium.com/@aniketbiswas/dirty-room-theory-4fb1f0b48bc6',
      publishDate: 'Published on Medium',
      image: null,
    },
    {
      title: 'Ship of Theseus and Software Development',
      description:
        'Exploring the philosophical paradox of the Ship of Theseus through the lens of software development, examining how applications evolve and transform while maintaining their core identity.',
      url: 'https://medium.com/@aniketbiswas/ship-of-theseus-and-software-development-3579a1d05eaa',
      publishDate: 'Published on Medium',
      image: null,
    },
    {
      title: 'My Internship Experience: Learning, Fun, Hard Goodbyes',
      description:
        'A personal reflection on my internship journey, sharing insights about the learning process, memorable experiences, and the emotional aspects of transitioning from internship to full-time roles.',
      url: 'https://medium.com/@aniketbiswas/my-internship-experience-learning-fun-hard-goodbyes-d9cc64e3213e',
      publishDate: 'Published on Medium',
      image: null,
    },
  ];

  // Function to fetch article metadata
  const fetchArticleMetadata = async url => {
    try {
      // Use a CORS proxy to fetch the Medium article HTML
      const proxyUrl = 'https://api.allorigins.win/get?url=';
      const response = await fetch(`${proxyUrl}${encodeURIComponent(url)}`);

      if (!response.ok) {
        throw new Error('Failed to fetch article');
      }

      const data = await response.json();
      const html = data.contents;

      // Create a temporary DOM element to parse the HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // Extract metadata from meta tags
      const getMetaContent = property => {
        const meta =
          doc.querySelector(`meta[property="${property}"]`) ||
          doc.querySelector(`meta[name="${property}"]`);
        return meta ? meta.getAttribute('content') : null;
      };

      // Extract title
      const title =
        getMetaContent('og:title') ||
        getMetaContent('twitter:title') ||
        doc.querySelector('title')?.textContent ||
        'Medium Article';

      // Extract description
      const description =
        getMetaContent('og:description') ||
        getMetaContent('twitter:description') ||
        getMetaContent('description') ||
        'Read this article on Medium';

      // Extract image
      const image = getMetaContent('og:image') || getMetaContent('twitter:image') || null;

      // Extract publish date from JSON-LD script
      let publishDate = null;
      const scripts = doc.querySelectorAll('script[type="application/ld+json"]');
      for (const script of scripts) {
        try {
          const scriptData = JSON.parse(script.textContent);
          if (scriptData.datePublished) {
            publishDate = new Date(scriptData.datePublished).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });
            break;
          }
        } catch (e) {
          // Continue to next script
        }
      }

      // Fallback: try to extract date from article content
      if (!publishDate) {
        const timeElement = doc.querySelector('time');
        if (timeElement) {
          const datetime = timeElement.getAttribute('datetime');
          if (datetime) {
            publishDate = new Date(datetime).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });
          }
        }
      }

      return {
        title: title.trim(),
        description: description.trim(),
        image,
        publishDate: publishDate || 'Published on Medium',
        url,
      };
    } catch (error) {
      console.error('Error fetching Medium article metadata:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchAllArticles = async () => {
      setLoading(true);
      try {
        const fetchedArticles = await Promise.all(
          mediumUrls.map(async (url, index) => {
            const metadata = await fetchArticleMetadata(url);
            // If fetch fails, use fallback data
            return metadata || fallbackArticles[index];
          }),
        );
        setArticles(fetchedArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
        // Use fallback data if all fetches fail
        setArticles(fallbackArticles);
      } finally {
        setLoading(false);
      }
    };

    fetchAllArticles();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledBlogsSection id="blogs" ref={revealContainer}>
      <h2 className="numbered-heading">Some Things I've Written</h2>

      {loading ? (
        <div className="loading">Loading articles...</div>
      ) : (
        <div className="blogs-grid">
          {articles.map((article, i) => (
            <StyledBlog key={i}>
              <div className="blog-inner">
                <header>
                  {article.image && (
                    <img src={article.image} alt={article.title} className="blog-image" />
                  )}

                  <h3 className="blog-title">
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      {article.title}
                    </a>
                  </h3>

                  <div className="blog-description">
                    <p>{article.description}</p>
                  </div>
                </header>

                <footer>
                  <div className="blog-date">{article.publishDate}</div>
                </footer>
              </div>
            </StyledBlog>
          ))}
        </div>
      )}
    </StyledBlogsSection>
  );
};

export default Blogs;
