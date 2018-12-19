import { Server } from "http";

export const onListening = (server: Server) => {
    return (): void => {
        let addr = server.address();
        let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
        console.log(`Listening at ${bind}...`);
    }
}