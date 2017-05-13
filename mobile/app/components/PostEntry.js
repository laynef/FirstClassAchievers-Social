import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button, Spinner } from '../commons/index'
​

class PostEntry extends Component {

    render() {
        const { author, message, image,  likes } = this.props
        return (
            <Card>
                <CardSection>
                    {author}
                </CardSection>
                <CardSection>
                    {message}
                </CardSection>
            </Card>
        )
    }
}

export default connect(state => ({
}))(PostEntry)