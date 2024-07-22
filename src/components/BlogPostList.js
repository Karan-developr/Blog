import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Pagination } from 'react-bootstrap';

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const apiKey = '10872e0e95b44969a9afe4380c2c9f36';

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=technology&pageSize=10&page=${currentPage}&apiKey=${apiKey}`);
      setPosts(response.data.articles);
      setTotalResults(response.data.totalResults);
    };
    fetchPosts();
  }, [currentPage]);

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <Container>
      <Row>
        {posts.map((post, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={post.urlToImage || 'placeholder.jpg'} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Card.Text>{post.publishedAt}</Card.Text>
                <Link to={`/post/${index}`} state={{ post }} className="btn btn-primary">Read More</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination className='justify-content-center'>
        <Pagination.First onClick={() => setCurrentPage(1)} />
        <Pagination.Prev onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} />
        {Array.from({ length: totalPages }, (_, i) => (
          <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} />
        <Pagination.Last onClick={() => setCurrentPage(totalPages)} />
      </Pagination>
    </Container>
  );
};

export default BlogPostList;
