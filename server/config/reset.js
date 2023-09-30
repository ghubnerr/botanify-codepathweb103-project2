import './dotenv.js'
import { pool } from './database.js'
import treeData from '../data/trees.js'

const createTableQuery = `
    DROP TABLE IF EXISTS trees;

    CREATE TABLE IF NOT EXISTS trees (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        text TEXT NOT NULL
    )
`

const createTreesTable = async () => {
    try {
        const res = await pool.query(createTableQuery)
        console.log('Trees table created successfully')
      } catch (err) {
        console.error('⚠️ Error creating trees table ', err)
      }
}

const seedTreesTable = async () => {
    await createTreesTable()
    treeData.forEach((tree) => {
        const insertQuery = {
            text: 'INSERT INTO trees (title, image, text) VALUES ($1, $2, $3)',
        }
        const values = [tree.title, tree.image, tree.text]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ Error inserting tree', err)
                return
            }
        
            console.log(`${tree.title} added successfully`)
        })
    })

    
}

seedTreesTable()