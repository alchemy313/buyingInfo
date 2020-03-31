import Taro, { Component } from '@tarojs/taro'
import { Image, View, Button, Text, RadioGroup, Label, Radio, Input, Textarea, Picker } from '@tarojs/components'

import './sellerIndex.less'


class sellerPost extends Component {
    config = {
        navigationBarTitleText: 'BuyingInfo'
    };

    state = {

    };

    componentWillReceiveProps (nextProps) {
        console.log(this.props, nextProps)
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        return (
            <View className='sellerIndexView'>

            </View>
        )
    }
}

export default sellerPost
