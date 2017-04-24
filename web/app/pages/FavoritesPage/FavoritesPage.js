import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


class FavoritesPage extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    render() {
        return (
            <div id="FavoritesPage">
                <h1>Favorites</h1>
            </div>
        )
    }

}

FavoritesPage = reduxForm({
    form: 'FavoritesPage'
})(FavoritesPage)

export default connect(state => ({
}))(FavoritesPage)