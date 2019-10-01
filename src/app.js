const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || '0.0.0.0';

app.use(cors());
app.use(morgan('dev'));

const users = [
    { login: 'admin', pass: 'admin' }
];

function auth(token) {
    const decodedToken = Buffer.from(token, 'base64').toString('utf-8');
    const [login, pass] = decodedToken.split(':');
    const NOT_FOUND_INDEX = -1;
    const index = users.findIndex((user) => {
        return user.login === login && user.pass === pass;
    });
    return (index !== NOT_FOUND_INDEX);
}

app.get('/', (req, res) => {
    const token = (req.headers.authorization || '').replace('Barear ', '');
    const status = auth(token);
    res.json({ auth: status });
});

app.listen(PORT, () => {
    console.log(`Server was started at http://${HOST}:${PORT}`);
});
