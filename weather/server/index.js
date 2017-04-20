import path from 'path'
import express from 'express'

const ROOT = path.join(__dirname, '..')

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(ROOT, 'index.html'))
})


const PORT = 3000
app.listen(PORT, () => {
  console.log('Listening on port ', PORT)
})















import path from 'path'
import express from 'express'
import morgan from 'morgan'
import webpack from 'webpack'
import config from './webpack.config.js'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

const app = express()
const compiler = webpack(config)
const options = {
  noInfo: true,
  publicPath: config.output.publicPath
}
app.use(webpackDevMiddleware(compiler, options))
app.use(webpackHotMiddleware(compiler, options))
app.use(morgan('tiny'))
app.use('/static', express.static(path.join(__dirname, 'dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

const PORT = 5000
app.listen(PORT, 'localhost', error => {
  if (error) {
    console.error(error)
  } else {
    console.log(`listening on port ${PORT}`)
  }
})
