'use strict';

require('dotenv').config();

if (!process.env.NODE_ENV) {
  throw new Error('UNDEFINED NODE_ENV');
}

require('./src/main');
