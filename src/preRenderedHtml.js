import React from 'react';
import ReactDOMServer from 'react-dom/server'
import Images from "./Images";

const { html: preRenderedHtml } = ReactDOMServer.renderToString(<Images data={[]} />)
module.exports = preRenderedHtml