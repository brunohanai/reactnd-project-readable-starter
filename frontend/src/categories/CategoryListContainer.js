import { connect } from 'react-redux'
import CategoryList from './CategoryList'
import { fetchCategoriesFromServer } from '../posts/actions'

const mapStateToProps = ({ categories }) => {
    return {
        categories,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: (data) => dispatch(fetchCategoriesFromServer()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)