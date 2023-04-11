import React from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import Emptylist from '../../components/Common/Emptylist';
import { blogList } from '../../config/data';
import { useEffect } from 'react';
import Chip from '../../components/Common/Chip';
import { useCallback } from 'react';
import './style.css'
// import './style.css'
// import Emptylist from '../../components/Common/Emptylist';
const Blog = () => {
  const {id}=useParams();
  const [blog,setBlog]=useState(null);
  // useEffect(() => {
  //  let blog=blogList.find((blog)=>blog.id===parseInt(id));
   
  // }, []);
 // eslint-disable-line react-hooks/exhaustive-deps
 
  const get = useCallback(async () => {
 
    const ID=id;
    const blog = blogList.find((blog)=>blog.id===parseInt(ID));
    setBlog(blog);
    if(blog)
   {
    setBlog(blog);
   }
  }, [id]);
  
  useEffect(() => {
    // eslint-disable-line 
    get();
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [get]);
  

 
  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog!=null ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (<div key={i}><Chip label={category} /></div>))}
              </div>
              </header>
              <img src={blog.cover} alt='cover' />
              <p className='blog-desc'>{blog.description}
              </p>
              </div>) : (<Emptylist />)
        }
    </>
  )
}

export default Blog