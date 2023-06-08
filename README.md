# 项目初始化
1. npx react-native init xxxx
2. yarn
3. cd ios && pod install(过程需要很久，借助vpn, 也可执行pod install --verbose --no-repo-update可查看下载进度)

# 项目调试
1. 因为可能目前版本是0.71，所以默认的调试是不支持 debug with chrome，所以需要 Podfile文件hermes_enabled设置为false[可查看此篇文章]（https://github.com/facebook/react-native/issues/34615），跟着 cd ios && pod install
2. 因为在network不显示网络请求，所以在index.js 添加 global.XMLHttpRequest...


# 项目路由
使用react-navigation[react-navigation](https://reactnavigation.org/docs/7.x/getting-started)

# 添加项目地理定位
1. yarn add @react-native-community/geolocation
2. 在info.plist添加
<key>NSLocationAlwaysUsageDescription</key>
<string>This app requires access to you location.</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>This app requires access to you location.</string>
3. 删除podfile.lock和pods，再pod install



