import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { login } from '../redux/actions/auth'
import { Card, CardSection, Input, Button, Spinner, Thumbnail } from '../commons/index'
import {Actions, Scene, Router, ActionConst} from 'react-native-router-flux'


class ChatList extends Component {

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
        return array.map((e, i) => (
            <Card key={i}>
                <CardSection>
                    <Text>{e[0].firstName[0]}</Text>
                </CardSection>
                {e.map((ele, idx) => (
                    <CardSection key={`${i} ${idx}`}>
                        <Thumbnail image={ele.image} />
                        <Text>{`${ele.firstName} ${ele.lastName}`}</Text>
                    </CardSection>
                ))}
            </Card>
        ))
    }

  render() {
    const { friends } = this.props
    return (
      <ScrollView>
        {this.renderContactList()}
      </ScrollView>
    )
  }
}

ChatList = reduxForm({
    form: 'ChatList'
})(ChatList)

export default connect(state => ({
    friends: state.friends.data
}))(ChatList)
