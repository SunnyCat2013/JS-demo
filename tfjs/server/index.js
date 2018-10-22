import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackConfig from '../config/webpack.config.js'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'



const compiler = webpack(webpackConfig)
const ROOT = path.join(__dirname, '..')

const app = express()

app.use(webpackDevMiddleware(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.get('/', (req, res) => {
  res.sendFile(path.join(ROOT, 'index.html'))
})

app.use('/static', express.static(path.join(ROOT, 'dist')))

const PORT = 3000
app.listen(PORT, () => {
  console.log('Listening on port:', PORT)
})
