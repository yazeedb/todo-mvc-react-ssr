import path from 'path';
import express from 'express';

import { __express } from 'ejs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Home } from './src/home';

const app = express();
const PORT = 8080;

app.engine('.ejs', __express);
app.use(express.static('dist'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src'));

app.get('*', (req, res) => {
  const html = ReactDOMServer.renderToStaticMarkup(<Home />);
  res.render('index', { content: html });
});

app.listen(PORT, () => console.log('listening on', PORT));
