import React from 'react'
import { Link } from 'react-router-dom'

class CategoryList extends React.Component {
    // TODO: eu fiz dessa forma... mas entao so vou conseguir usar CategoryList fazendo request http?
    // E se eu quisesse que esse componente recebesse "categories" via props? Assim as vezes poderia usar a api ou as vezes so
    // passar os objetos... 
    componentDidMount () {
        this.props.fetchCategories()
    }
    
    render () {
        return (
            <div>
                <h4>Categories</h4>

                <ol class="list-unstyled">
                    {this.props.categories.map((category) => (
                        <li key={category.path}>
                            <Link to={`/${category.path}`}>
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default CategoryList