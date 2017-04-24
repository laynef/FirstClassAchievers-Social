import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import PostEntry from '../../components/Testimonial/PostEntry'


class FavoritesPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    render() {
        const { testimonial, favorites } = this.props
        if (!testimonial && !favorites) return null
        let regex = new RegExp(this.state.searchTerm, 'ig')
        return (
            <div id="FavoritesPage">
                <h1>Favorites</h1>
                <div id="testimonial-background" className="col-sm-12">
                    {testimonial
                        .filter(e => favorites.entries.includes(e.id))
                        .filter(e => regex.test(e.author) || regex.test(e.message))
                        .map((entry, i) => (
                        <PostEntry key={i}
                            author={entry.author}
                            message={entry.message}
                            userId={entry.user_id}
                            image={entry.image}
                            entryId={entry.id}
                            detail={false}
                        />
                    ))}
                </div>
            </div>
        )
    }

}

FavoritesPage = reduxForm({
    form: 'FavoritesPage'
})(FavoritesPage)

export default connect(state => ({
    testimonial: state.testimonial.data,
    favorites: state.favorites.data
}))(FavoritesPage)