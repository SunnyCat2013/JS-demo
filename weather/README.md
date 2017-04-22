# 查询中国主要城市天气状况的应用
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
# 预想功能
1. version 0.1.0
- [ ] 增加城市
- [ ] 删除城市
2. version 0.2.0
- [ ] 在地图上显示选定城市

# 实施
1. 搭建 react 工作平台。
- 安装 nvm （会自动安装 nodejs 和 npm）
- hello react
  - [ ] 配置 ndoejs 并显示 『hello react』
  - [ ] webpack
  - [ ] 添加 node server
  - [ ] hot reload
  - [ ] redux
  - [ ] saga
2. 使用 OpenWeatherMap api 获得天气信息，并显示城市列表
3. 在地图上定位新添加的城市信息
<!-- 读取 react class properties -->
<!-- 通过 [cities list api](http://www.weather.com.cn/data/city3jdata/china.html) 可以拿到 [中国天气网](http://www.weather.com.cn/) 的一份包含省份代码和省份名称的 json 数据。但是，它并不支持跨域访问（不支持 CORS，cross-origin resource sharing）。不得已，我使用了 OpenWeatherMap 的免费账户。但是，它并没有汉字的城市名称。
 -->
# 实现效果
![2017-04-22 12 24 34 pm](https://cloud.githubusercontent.com/assets/4412909/25301373/1f5b3d26-2758-11e7-8000-69d9f7b1c43b.png)

# 参考
- [OpenWeatherMap](https://openweathermap.org/api) 通过 OpenWeatherMap 的免费 api 获得天气数据。
- [《根据中国气象局提供的API接口实现天气查询》](http://blog.csdn.net/gebitan505/article/details/14166763)
从该博客中学习如何获取中国气象局中城市 ID 的方法。
- [hot reload](https://www.npmjs.com/package/webpack-hot-middleware)
