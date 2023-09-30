import express from 'express'

import './config/dotenv.js'

import treesRouter from './routes/trees.js'

const app = express()

app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))

app.use('/trees', treesRouter)

app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">botanify API</h1>')
})

const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(` Srver listening on http://localhost:${PORT}`)
})
