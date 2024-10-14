const express = require('express');
const connectDB = require('./DB');
const app = express();
const cors = require('cors');


app.use(cors());

app.use(express.json());


const authRoutes = require('./routers/auth'); 
app.use('/api/auth', authRoutes);



connectDB().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch((error) => {
    console.error('Failed to connect to the database:', error);
});
