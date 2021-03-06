import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const PostList = ({ posts, setFilterPostField, setFilterPostDirection, orderField, orderDirection, votePost }) => {
    return (
        <div>        
            <select value={orderField} onChange={(e) => setFilterPostField(e.target.value)}>
                <option value="voteScore">Vote Score</option>
                <option value="timestamp">Timestamp</option>
            </select>
            <select value={orderDirection} onChange={(e) => setFilterPostDirection(e.target.value)}>
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
            </select>

            {posts.map((post) => (
                <div class="blog-post" key={post.id}>
                    <Link to={`/${post.category}/${post.id}`}>
                        <h2 class="blog-post-title">{post.title}</h2>
                    </Link>

                    <button onClick={() => votePost(post.id, 'upVote')}>Upvote</button>
                    <button onClick={() => votePost(post.id, 'downVote')}>Downvote</button>

                    <p class="blog-post-meta">
                        {moment(post.timestamp).format('MMMM Do YYYY')}
                        , by {post.author}
                        . [voteScore: {post.voteScore}]
                         [comments: {post.commentCount}]
                    </p>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default PostList