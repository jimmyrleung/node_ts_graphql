import { Server } from "http";

export const onError = (server: Server) => {
    return (error: NodeJS.ErrnoException): void => {
        const address = server.address();
        const port = typeof address === 'string' ? address : address.port;
        if (error.syscall !== 'listen') throw error;
        let bind = (typeof port === 'string') ? `pipe ${port}` : `port ${port}`;
        switch (error.code) {
            case 'EACCES':
                console.error(`${bind} requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`${bind} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    }
}