require('dotenv').config({ path: '.env' })

// NODE_ENV is usually development in the local directory, which lets us use localhost
// Otherwise, it's testing.

// On the other hand, a blank domain would indicate that it's locally built.

console.log('PUB_CONFIG::APP_DOMAIN=' + process.env.APP_DOMAIN);
console.log('PUB_CONFIG::CLOUDFRONT_DOMAIN=' + process.env.CLOUDFRONT_DOMAIN)
const RAW_HOST_API = (process.env.CLOUDFRONT_DOMAIN) ? `https://${process.env.CLOUDFRONT_DOMAIN}` : 'http://localhost:1234';
let HOST_API =  '';

let DOMAIN = process.env.APP_DOMAIN;

if (!DOMAIN) {
  HOST_API =  'http://localhost:1234/';
} else if (DOMAIN === 'prod') {
  HOST_API = `https://nable.iyotah.net`;
} else { // i.e. nable.dev.iyotah.net
  HOST_API = `https://nable.${DOMAIN}.iyotah.net`;
}

console.log('PUB_CONFIG::HOST_API=' + HOST_API);
console.log('PUB_CONFIG::RAW_HOST_API=' + RAW_HOST_API);
module.exports = {
  locals: {
    HOST_API,
    RAW_HOST_API
  }
};
