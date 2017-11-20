import React from 'react'
import PostListContainer from '../posts/components/PostListContainer'
import CategoryListContainer from '../categories/CategoryListContainer'
import PostFormContainer from '../posts/components/PostFormContainer'

class Home extends React.Component {
    state = {
        post_form_modal_open: false,
    }

    postFormModalOpen = () => {
        this.setState({ post_form_modal_open: true })
    }

    postFormModalClose = () => {
        this.setState({ post_form_modal_open: false })
    }

    render() {
        return (
            <div>
                <PostFormContainer closeModal={this.postFormModalClose} isVisible={this.state.post_form_modal_open}/>
                
                <main role="main" class="container">
                    <div class="row">
                        <div class="col-sm-8 blog-main">
                            <PostListContainer />
                        </div>

                        <aside class="col-sm-3 ml-sm-auto blog-sidebar">
                            <div class="sidebar-module sidebar-module-inset">
                                <button onClick={this.postFormModalOpen}>New Post</button>
                            </div>
                            <div class="sidebar-module">
                                <CategoryListContainer />
                            </div>
                        </aside>
                    </div>
                </main>
          </div>
        )
    }
}

export default Home