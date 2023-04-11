import React from 'react';
import Blogitem from './Blogitem';
import './style.css';

const Bloglist = ({ blogs }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <Blogitem blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default Bloglist;