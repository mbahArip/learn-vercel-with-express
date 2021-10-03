const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./fb_ref');

app.get('/', (req, res) => {
    res.status(200);
    res.json({
        status: 'success',
        message: 'successfully connected to index'
    });
})
app.get('/post', async (req, res) => {
    res.status(200);
    const get = await db.getPorto();
    res.json(get)
})
app.get('/post/:id', async (req, res) => {
    res.status(200);
    const get = await db.getPortoID(req.params['id']);
    res.json(get);
})


app.listen(port, () => console.log(`Server online at port ${port}`));