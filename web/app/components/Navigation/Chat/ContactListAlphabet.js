import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


class ContactListAlphabet extends Component {

    render() {
        return (
        <div id="ContactListAlphabet">
        {/* Alphabet map */}
            <div data-init-list-view="ioslist" className="list-view boreded no-top-border">
                <h2 className="list-view-fake-header"> b</h2>
                <div className="scroll-wrapper list-view-wrapper" style={{position: "absolute"}}>
                    <div className="list-view-wrapper scroll-content scroll-scrolly_visible" data-ios="false" style={{height: 'auto', marginBottom: '0px', marginRight: '0px', maxHeight: "808px"}}>
                            <div className="list-view-group-container">
                                <div className="list-view-group-header text-uppercase"> b</div>
                                <ul>
                                    <li className="chat-user-list clearfix">
                                        <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                            <span className="col-xs-height col-middle">
                                                <span className="thumbnail-wrapper d32 circular bg-success">
                                                    <img width="34" height="34" alt="" data-src-retina="theme/assets/img/profiles/1x.jpg" data-src="theme/assets/img/profiles/1.jpg" src="theme/assets/img/profiles/1.jpg" className="col-top"/>
                                                </span>
                                            </span>
                                            <p className="p-l-10 col-xs-height col-middle col-xs-12">
                                                <span className="text-master">ava flores</span>
                                                <span className="block text-master hint-text fs-12">Hello there</span>
                                            </p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        <div className="list-view-group-container"></div>
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
