import Taro, { Component } from '@tarojs/taro'
import { Image, View, Button, Text, RadioGroup, Label, Radio, Input, Textarea, Picker } from '@tarojs/components'


import './post.less'


class Post extends Component {
    config = {
        navigationBarTitleText: 'BuyingInfo'
    };

    state = {
        city: 'Vancouver',
        typeList: [
            {
                value: 'sold_out',
                text: '销量告罄',
                checked: true
            },
            {
                value: 'selling',
                text: '正在出售',
                checked: false
            }
        ],
        cityList: ['Vancouver', '中国', '巴西', '日本']
    };

    onChange = e => {
        this.setState({
            city: this.state.cityList[e.detail.value]
        })
    };

    componentWillReceiveProps (nextProps) {
        console.log(this.props, nextProps)
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        return (
            <View className='postView'>
                <Text className='title'>PHOTO</Text>
                <View className='photoContent'>
                    <Image src='../../static/images/camera.png' mode='aspectFill'></Image>
                </View>
                <View className='postContent'>
                    <Text className='title'>POST TYPE</Text>
                    <View className='radioContent'>
                        <RadioGroup>
                            {this.state.typeList.map((item, i) =>  (
                                <Label className='radioLabel' for={i} key={i}>
                                    <Radio color='#000000' className='radio' value={item.value} checked={item.checked}>{item.text}</Radio>
                                </Label>
                            ))}
                        </RadioGroup>
                    </View>

                    <Text className='title'>TITLE</Text>
                    <Input type='text' focus />

                    <Text className='title'>DESCRIPTION</Text>
                    <Textarea autoHeight />

                    <Text className='title'>POST IN</Text>
                    <Picker mode='selector' range={this.state.cityList} onChange={this.onChange}>
                        <View className='picker'>
                            {this.state.city}
                        </View>
                    </Picker>
                </View>
                <View className='btnContent'>
                    <Button>POST</Button>
                </View>
            </View>
        )
    }
}

export default Post
