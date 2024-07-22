import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const BlogPostItem = ({ post, index }) => (
  <Card className="mb-4">
    <Card.Img variant="top" src={post.urlToImage || 'placeholder.jpg'} />
    <Card.Body>
      <Card.Title>{post.title}</Card.Title>
      <Card.Text>{post.description}</Card.Text>
      <Link to={`/post/${index}`} state={{ post }} className="btn btn-primary">Read More</Link>
    </Card.Body>
  </Card>
);

export default BlogPostItem;
