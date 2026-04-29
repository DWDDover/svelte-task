const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const cors = require('cors');
const projectsRouter = require('./routes/projects'); 
const profileRouter = require('./routes/profiles'); 
const pagesRouter = require('./routes/pages'); 
const technologiesRouter = require('./routes/technologies');

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(cors());
app.use('/api/projects', projectsRouter);
app.use('/api/profiles', profileRouter);
app.use('/profiles', pagesRouter);
app.use('/api/technologies', technologiesRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

// Error handling configuration

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const body = {
        status,
        error: err.message || 'Internal Server Error'
    };
    if (err.details) {
        body.details = err.details;
    }
    res.status(status).json(body);
});

app.use((req, res, next) => {
    if (req.path.startsWith('/api/')) {
        const err = new Error('Not found');
        err.status = 404;
        return next(err);
    }
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

 app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});