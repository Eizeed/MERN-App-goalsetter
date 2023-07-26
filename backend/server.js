import express from 'express'
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import colors from 'colors'
import { errorHandler } from './middleware/errorMiddleware.js'
import goalRoutes from './routes/goalRoutes.js'
import userRoutes from './routes/userRoutes.js'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
const port = process.env.PORT || 5000

connectDB()

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', goalRoutes)
app.use('/api/users', userRoutes)

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    const buildPath = join(dirname(__dirname), 'frontend/build');
    app.use(express.static(buildPath));

    app.get('*', (req, res) => res.sendFile(resolve(buildPath, 'index.html')));
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
}

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port: ${port}`))