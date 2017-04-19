import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


class AboutUsPage extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    render() {
        return (
            <div id="AboutUsPage">
                <h1>About Us</h1>
                <div className="col-md-12">
                    <div className="panel panel-default aboutPanel">
                        <div className="panel-heading separator">
                            <div className="panel-title">
                                Portlet One
                            </div>
                        </div>
                        <div className="panel-body">
                            <h3>
                                <span className="semi-bold">With</span>
                                Separator
                            </h3>
                            <p className="text-black hint-text">
                                    When it comes to digital design, the lines between
                                functionality, aesthetics, and psychology are inseparably blurred. Without the
                                constraints of the physical world, there’s no natural form to fall back on, and
                                every bit of constraint and affordance must be introduced intentionally. Good design
                                makes a product useful. A product is bought to be used.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="panel panel-default aboutPanel">
                        <div className="panel-heading separator">
                            <div className="panel-title">
                                Portlet Two
                            </div>
                        </div>
                        <div className="panel-body">
                            <h3>
                                <span className="semi-bold">With</span>
                                Separator
                            </h3>
                            <p className="text-black hint-text">
                                    When it comes to digital design, the lines between
                                functionality, aesthetics, and psychology are inseparably blurred. Without the
                                constraints of the physical world, there’s no natural form to fall back on, and
                                every bit of constraint and affordance must be introduced intentionally. Good design
                                makes a product useful. A product is bought to be used.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

AboutUsPage = reduxForm({
    form: 'AboutUsPage'
})(AboutUsPage)

export default connect(state => ({
}))(AboutUsPage)