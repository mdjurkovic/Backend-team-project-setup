import {port} from './config/environment';
import express from 'express';
import graphqlServer from './graphql';

const app = express();

try {
    graphqlServer.start().then(r => {
        graphqlServer.applyMiddleware({
            app,
        });
        app.listen(port);
        console.log(`🚀  GraphQL server running at port: ${port}/graphql`);
    });
} catch {
    console.log('Not able to run GraphQL server');
}
