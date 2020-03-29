import Taro, {Component} from '@tarojs/taro'
import {Provider} from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {
<<<<<<< HEAD

  componentDidMount() {
  }

=======
>>>>>>> d5a57655fa4705d9f602c6a71e3c38cafa759d27
  config = {
    pages: [
        'pages/index/index',
        'pages/post/post',
    ],
      tabBar: {
          "color": "#8B8682",
          "selectedColor": "#EF7E00",
          "backgroundColor": "#000000",
          "borderStyle": "white",
          "list": [
              {
                  pagePath: "pages/index/index",
                  iconPath: "./static/images/search@2x.png",
                  selectedIconPath: "./static/images/search-active@2x.png",
                  text: "View"
              },
              {
                  "pagePath": "pages/post/post",
                  "iconPath": "./static/images/profile@2x.png",
                  "selectedIconPath": "./static/images/profile-active@2x.png",
                  "text": "Post"
              }
          ],
          position: 'top'
      },
    window: {
        "navigationBarTitleText": "Cozystay驿家短租",
        "navigationBarBackgroundColor": "#EF8600",
        "navigationBarTextStyle": "white",
        "backgroundTextStyle": "light"
    }
  };
<<<<<<< HEAD
=======

  componentDidMount () {}
>>>>>>> d5a57655fa4705d9f602c6a71e3c38cafa759d27

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
