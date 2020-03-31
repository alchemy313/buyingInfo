import Taro, { Component } from '@tarojs/taro'
import { Image, View, Button, Text, RadioGroup, Label, Radio, Input, Textarea, Picker } from '@tarojs/components'

import './welcome.less'

class Welcome extends Component {
    config = {
        navigationBarTitleText: 'BuyingInfo'
    };

    state = {

    };

    customerLogin() {
      Taro.getUserInfo().then(res => {
          console.log(res)
      })

      Taro.redirectTo({url: '/pages/customerIndex/customerIndex'})

    }

    sellerLogin() {
      Taro.getUserInfo().then(res => {
        console.log(res)
      })

      Taro.redirectTo({url: '/pages/sellerIndex/sellerIndex'})
    }

    componentWillReceiveProps (nextProps) {
        console.log(this.props, nextProps)
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        return (
            <View className='welcomeView'>
                <View className='btnContent'>
                    <Button onClick={this.customerLogin} class='customer'>customer</Button>
                    <Button onClick={this.sellerLogin} class='seller'>seller</Button>
                </View>
            </View>
        )
    }
}

export default Welcome
