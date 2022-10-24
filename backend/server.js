require('dotenv').config();
const express = require('express');
const app = express();

const router =require('./routes')

app.use(express.json())


const PORT = process.env.PORT || 5500;

app.use(router);
app.get('/', (req,res) => {

    res.send('Hello from express');
    
})

app.listen(PORT, () => console.log(`Listening on the Port ${PORT}`));