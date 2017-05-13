import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base'
​

class PostEntry extends Component {

    render() {
        const { author, message, image,  likes } = this.props
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={image} />
                        <Body>
                            <Text>{author}</Text>
                            <Text note>Created By</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Text>{message}</Text>
                </CardItem>
                <CardItem>
                    <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>{likes && likes.length > 1 ? `${likes.length} Likes`: likes && likes.length == 1 ? `${likes.length} Like`: null}</Text>
                    </Button>
                    <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>4 Comments</Text>
                    </Button>
                    <Button transparent>
                        <Icon active name="rose" />
                        <Text>Favorite</Text>
                    </Button>
                </CardItem>
            </Card>
        )
    }
}

PostEntry = reduxForm({
    form: 'PostEntry'
})(PostEntry)

export default connect(state => ({
}))(PostEntry)