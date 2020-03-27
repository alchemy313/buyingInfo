import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, ScrollView, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))

class Index extends Component {
    config = {
    navigationBarTitleText: 'BuyingInfo'
  };

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='indexView'>
          <View className='postCity'>
              <Text>All post in: Vancouver</Text>
              <Button>edit</Button>
          </View>
          <ScrollView
              className='infoCardContent'
              enable-flex='true'
              scrollY
              scrollWithAnimation>
              <View className='infoCard'>
                  <Image src='../../static/images/sac.png' mode='aspectFill'></Image>
                  <View className='infoText'>
                      <Text className='title'>(销量告罄)buy some items</Text>
                      <Text className='desc'>i can find sth in some place, post this for sharing to everyone. i can find sth in some place, post this for sharing to everyone.</Text>
                      <Text className='timeTag'>10 hours ago, 10 people verified</Text>
                  </View>
                  <View className='infoOperation'>
                      <Button class='verify'>verify</Button>
                      <Button class='reward'>Reward</Button>
                  </View>
              </View>

              <View className='infoCard'>
                  <Image src='../../static/images/sac.png' mode='aspectFill'></Image>
                  <View className='infoText'>
                      <Text className='title'>(正在出售)buy some items</Text>
                      <Text className='desc'>i can find sth in some place, post this for sharing to everyone. i can find sth in some place, post this for sharing to everyone.</Text>
                      <Text className='timeTag'>10 hours ago, 10 people verified</Text>
                  </View>
                  <View className='infoOperation'>
                      <Button class='verify'>verify</Button>
                      <Button class='reward'>Reward</Button>
                  </View>
              </View>

              <View className='infoCard'>
                  <Image src='../../static/images/sac.png' mode='aspectFill'></Image>
                  <View className='infoText'>
                      <Text className='title'>(正在出售)buy some items</Text>
                      <Text className='desc'>i can find sth in some place, post this for sharing to everyone. i can find sth in some place, post this for sharing to everyone.</Text>
                      <Text className='timeTag'>10 hours ago, 10 people verified</Text>
                  </View>
                  <View className='infoOperation'>
                      <Button class='verify'>verify</Button>
                      <Button class='reward'>Reward</Button>
                  </View>
              </View>
          </ScrollView>
      </View>
    )
  }
}

export default Index
