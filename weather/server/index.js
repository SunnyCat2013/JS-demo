import path from 'path'
import express from 'express'

const ROOT = path.join(__dirname, '..')

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(ROOT, 'index.html'))
})

app.use('/static', express.static(path.join(ROOT, 'dist')))

const PORT = 3000
app.listen(PORT, () => {
  console.log('Listening on port:', PORT)
})
