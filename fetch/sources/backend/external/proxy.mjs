import fetch from 'node-fetch';

export default {
    goTo: {
        handler: async (parameters) => {
            return await fetch(parameters.URL);
        },
        parameters: {
            URL: "string"
        }
    }
};