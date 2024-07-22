import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPostList from '../components/BlogPostList';
import BlogPostDetails from '../components/BlogPostDetails';

const Routes = () => {
  return (
    <Router>
        <Route path="/" exact component={BlogPostList} />
        <Route path="/post/:id" component={BlogPostDetails} />
    </Router>
      
      
    
  );
};

export default Routes;