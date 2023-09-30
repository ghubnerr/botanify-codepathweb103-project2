import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'

import TreesController from '../controllers/trees.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', TreesController.getTrees)

router.get('/:treeId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/tree.html'))
})

export default router
