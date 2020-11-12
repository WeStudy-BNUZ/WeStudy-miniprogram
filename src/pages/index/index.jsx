import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button } from '@tarojs/components'
import './index.less'

@connect(({ test }) => ({
  ...test
}))
export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = () => {
    this.props.dispatch({
      type: 'test/test',
      payload: '改变后的参数'
    })
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <View>{this.props.name}</View>
        <Button onClick={this.handleClick}>点击改变name</Button>
      </View>
    )
  }
}
