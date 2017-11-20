import React from 'react'
import PostListContainer from '../posts/components/PostListContainer'

const Category = (props) => (
    <div>
        <h1>Category: {props.categoryName}</h1>

        <PostListContainer categoryName={props.categoryName}/>
    </div>    
)

export default Category