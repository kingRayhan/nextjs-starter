const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

module.exports = {
    webpack: config => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty',
        }

        return config
    },
}

dotenvLoad()
const withNextEnv = nextEnv()
module.exports = withNextEnv({})
