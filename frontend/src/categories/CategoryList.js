import React from 'react'
import { apiFetchCategories } from '../utils/api'

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
                    <a key={category.name} href="#">
                        <div>{category.name} {category.path}</div>
                    </a>
                ))}
            </div>
        )
    }
} 

export default CategoryList