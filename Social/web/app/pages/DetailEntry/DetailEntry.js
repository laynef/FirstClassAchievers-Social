import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, FormReducer, Form } from 'redux-form'
import { getTestimonials } from '../../redux/actions/testimonial'
import { setFavorites } from '../../redux/actions/favorite'
import pull from 'lodash/pull'


class DetailEntry extends Component {

    static formSubmit() {
        const { dispatch, favorites, user, params } = this.props
        let body = {}
        let array = favorites.entries.slice()
        if (array.includes(params.entryId)) {
             pull(array, params.entryId)
        } else {
            array.push(params.entryId)
        }
        body.user_id = user.id
        body.entries = array
        dispatch(setFavorites(body, user.id))
    }

    render() {
        const { testimonial, params, user, favorites, handleSubmit } = this.props
        return (
            <div id="DetailEntry">
                {testimonial
                    .filter(e => e.id == params.entryId)
                    .map((e, i)=> (
                    <div className="PostEntry" key={i}>
                    <h1>{e.author + `'s Testimonial`}</h1>
                        <div className="card bodi share col1" data-social="item" style={{width: '100%'}}>
                            <div className="circle" data-toggle="tooltip" title="" data-container="body" data-original-title="Label"></div>
                                <div className="card-header clearfix">
                                    <div className="user-pic">
                                        <img alt={`Profile Image ${e.user_id}`}
                                            width="122" height="122" 
                                            data-src-retina={e.image ? e.image : "http://i.imgur.com/sRbuHxN.png"} 
                                            data-src={e.image ? e.image : "http://i.imgur.com/sRbuHxN.png"} 
                                            src={e.image ? e.image : "http://i.imgur.com/sRbuHxN.png"} />
                                    </div>
                                    <h5>{e.author}</h5>
                                    <h6>Created posted
                                        <span className="location semi-bold">
                                            <i className="icon-map"></i> 
                                        </span>
                                    </h6>
                                </div>
                            <Form onSubmit={handleSubmit(DetailEntry.formSubmit.bind(this))}>
                                {(favorites && e.user_id != user.id)  ? 
                                    (favorites.entries.includes(e.id)) ? 
                                    (<button type="submit" className="btn"><i className="fa fa-heart"></i></button>) 
                                    : (<button type="submit" className="btn"><i className="fa fa-heart-o"></i></button>)
                                : null}
                            </Form>
                            <div className="card-description">
                                <p>{e.message}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

}

DetailEntry = reduxForm({
    form: 'DetailEntry'
})(DetailEntry)

export default connect(state => ({
    testimonial: state.testimonial.data,
    user: state.user.data,
    favorites: state.favorites.data
}))(DetailEntry)