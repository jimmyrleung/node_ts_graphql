import * as http from 'http';
import express from './express';
import { normalizePort, onError, onListening } from './events/index';

const server = http.createServer(express);
const port = normalizePort(process.env.port || 3000);

server.listen(port);
server.on('error', onError(server));
server.on('listening', onListening(server));