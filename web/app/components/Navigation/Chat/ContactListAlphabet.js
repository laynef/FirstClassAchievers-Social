import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import ConversionView from './ConversionView'


class ContactListAlphabet extends Component {

    renderContactList() {
        const { friends } = this.props
        let sorted = friends.sort((a, b) => a.firstName - b.firstName)
        let alphabet = { a: [], b: [], c: [], d: [], e: [], f: [], g: [], h: [], i: [], j: [], k: [], l: [], m: [], n: [], o: [], p: [], q: [], r: [], s: [], t: [], u: [], v: [], w: [], x: [], y: [], z: [] }
        sorted.forEach(e => {
            let key = e.firstName[0].toLowerCase()
            alphabet[key].push(e)
        })
        let array = []
        Object.keys(alphabet).forEach(e => {
            if (alphabet[e].length > 0) {
                array.push(alphabet[e])
            }
        })
        return array.map((ele, i) => {
            return (
                <div className="list-view-group-container">
                    <div className="list-view-group-header text-uppercase"> {ele[0].firstName[0]}</div>
                            {ele.map((e, idx) => (
                                <ul>
                                    <li key={`${i}${idx}`} className="chat-user-list clearfix">
                                        <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                            <span className="col-xs-height col-middle">
                                                <span className="thumbnail-wrapper d32 circular bg-success">
                                                    <img width="34" height="34" alt="" data-src-retina={e.image} data-src={e.image} src={e.image} className="col-top"/>
                                                </span>
                                            </span>
                                            <p className="p-l-10 col-xs-height col-middle col-xs-12">
                                                <span className="text-master">{e.firstName + ' ' + e.lastName}</span>
                                            </p>
                                        </a>
                                    </li>
                                </ul>
                            ))}
                    </div>
                )
            })
    }

    render() {
        const { friends } = this.props
        if (!friends) return null
        return (
        <div id="ContactListAlphabet">
            <div key={i} data-init-list-view="ioslist" className="list-view boreded no-top-border">
                {this.renderContactList()}
            </div>
            <div className="scroll-element scroll-x scroll-scrolly_visible">
                <div className="scroll-element_outer">
                    <div className="scroll-element_size"></div>
                    <div className="scroll-element_track"></div>
                    <div className="scroll-bar" style={{width: "89px"}}></div>
                </div>
            </div>
            <div className="scroll-element scroll-y scroll-scrolly_visible">
                <div className="scroll-element_outer">
                    <div className="scroll-element_size"></div>
                    <div className="scroll-element_track"></div>
                    <div className="scroll-bar" style={{height: "227px", top: "0px"}}></div>
                </div>
            </div>
        </div>
        )
    }

}

ContactListAlphabet = reduxForm({
    form: 'ContactListAlphabet'
})(ContactListAlphabet)

export default connect(state => ({
    friends: state.friends.data
}))(ContactListAlphabet)
