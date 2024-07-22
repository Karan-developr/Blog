import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Container, Button, Image } from 'react-bootstrap';

const BlogPostDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [post, setPost] = useState(location.state?.post || null);
  const [loading, setLoading] = useState(!post);
  const apiKey = '10872e0e95b44969a9afe4380c2c9f36';

  useEffect(() => {
    if (!post) {
      const fetchPost = async () => {
        const res = await axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}`);
        setPost(res.data.articles[id]);
        setLoading(false);
      };
      fetchPost();
    }
  }, [id, post, apiKey]);

  return (
    <Container className="mt-5">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h1>{post.title}</h1>
          <Image src={post.urlToImage || 'placeholder.jpg'} alt={post.title} fluid className="mb-3" />
          <p>{post.content}</p>
          <Button as={Link} to="/" variant="secondary">Back to Posts</Button>
        </div>
      )}
    </Container>
  );
};

export default BlogPostDetails;
