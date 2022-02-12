// snowpack.config.js

module.exports = {
    plugins: ['@snowpack/plugin-typescript'],
    devOptions: {
        port: 3000, 
        out: 'docs'
    },
    buildOptions: {
        out: 'docs'
    }
};