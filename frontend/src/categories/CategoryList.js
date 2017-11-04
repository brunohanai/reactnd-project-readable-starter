import React from 'react'
import { apiFetchCategories } from '../utils/api'
import { Link } from 'react-router-dom'

class CategoryList extends React.Component {
    state = {
        categories: [],
    }

    componentDidMount() {
        apiFetchCategories().then((res) => {
            const newCategories = res.categories ? res.categories : []

            this.setState({
                categories: newCategories,
            })
        })
    }

    render() {
        return (
            <div>
                <h3>Categories</h3>
                {this.state.categories.map((category) => (
                    <div key={category.path}>
                        <Link to={`/category/${category.path}`}>
                            {category.name}
                        </Link>
                    </div>
                ))}
            </div>
        )
    }
} 

export default CategoryList