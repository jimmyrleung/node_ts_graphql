import * as Express from 'express';

class App {
    public express: Express.Application;

    constructor() {
        // Returns an express application
        this.express = Express();
        this.middleware();
    }

    private middleware(): void {
        this.express
            .use("/hello", (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
                res.send("Hello world");
            });
    }
}

export default new App().express;