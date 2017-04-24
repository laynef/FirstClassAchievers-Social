import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { getTestimonials } from '../../redux/actions/testimonial'


class DetailEntry extends Component {

    render() {
        const { testimonial, params } = this.props
        return (
            <div id="DetailEntry">
                {testimonial
                    .filter(e => e.id == params.entryId)
                    .map(e => (
                    <div className="PostEntry">
                    <h1>{e.author + `'s Testimonial`}</h1>
                        <div className="card share col1" data-social="item" style={{width: '100%'}}>
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
    testimonial: state.testimonial.data
}))(DetailEntry)