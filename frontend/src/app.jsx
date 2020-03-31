import Taro, {Component} from '@tarojs/taro'
import {Provider, connect} from '@tarojs/redux'
import {setLoginCode} from './actions/auth'
import Welcome from './pages/welcome'
import configStore from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

@connect(({auth}) => ({
  auth
}), (dispatch) => ({
  setLoginCode(login_code) {
    dispatch(setLoginCode(login_code))
  }
}))

class App extends Component {

  config = {
    pages: [
      'pages/welcome/welcome',
      'pages/customerIndex/customerIndex',
      'pages/sellerIndex/sellerIndex',
      'pages/sellerPost/sellerPost'
    ],
    // tabBar: {
    //     "color": "#8B8682",
    //     "selectedColor": "#EF7E00",
    //     "backgroundColor": "#000000",
    //     "borderStyle": "white",
    //     "list": [],
    //     position: 'top'
    // },
    window: {
      "navigationBarTitleText": "Cozystay驿家短租",
      "navigationBarBackgroundColor": "#EF8600",
      "navigationBarTextStyle": "white",
      "backgroundTextStyle": "light"
    }
  };

  componentDidMount() {
    this.login()
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  login() {
    //for auto
    let that = this;

    Taro.login({
      success(res) {
        that.props.setLoginCode(res.code)
      }
    });
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Welcome/>
      </Provider>
    )
  }
}

Taro.render(<App/>, document.getElementById('app'))
