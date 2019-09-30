const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || '0.0.0.0';

app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({ hint: 'Use HTTP POST method' });
});

app.post('/', (req, res) => {
    console.log(req.headers);
    res.json({ hint: 'Use HTTP POST method' });
});

app.listen(PORT, () => {
    console.log(`Server was started at http://${HOST}:${PORT}`);
});
