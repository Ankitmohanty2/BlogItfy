import React from 'react'
import Header from '../../components/Home/Header'
import Searchbar from '../../components/Home/Searchbar'
import Bloglist from '../../components/Home/Bloglist'
import { blogList } from '../../config/data'
import { useState } from 'react'
import Emptylist from '../../components/Common/Emptylist'
const Home = () => {
  const [blogs,setBlogs]=useState(blogList);
  const [searchKey,setSerachKey]=useState('');

  const handleSearchSubmit=(e)=>{
    e.preventDefault();
    handleSearchResults();
  }

  const handleSearchResults=()=>{
    const allBlogs=blogList;
    const filterBlogs=allBlogs.filter(blog=>blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));
    setBlogs(filterBlogs);
  }
  
  const handleClearSearch=()=>{
     setBlogs(blogList);
     setSerachKey('');
  }

  return (
    <div>
        <Header></Header>
        <Searchbar value={searchKey} formSubmit={handleSearchSubmit} clearSearchKey={handleClearSearch} handleSearchKey={e=>setSerachKey(e.target.value)}></Searchbar>
        {!blogs.length?<Emptylist></Emptylist>:<Bloglist blogs={blogs}></Bloglist>}
        {/* <EmptyList></EmptyList> */}
    </div>
  )
}

export default Home