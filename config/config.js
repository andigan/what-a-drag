module.exports = {
  port: 80,
  mainDir: __dirname.replace('/config', ''),

  useCDN: true, // use CDNs rather than local modules
  useIGram: true, // enable Instagram integration

  // storage options
  storageOpt: {
    s3:         { save: true,  del: true,  loc: 'https://s3.amazonaws.com/wall-collective/' },
    local:      { save: true, del: true, loc: '/images/'},
    cloudinary: { save: false, del: false,  loc: 'temp' },
    log:        { save: true, loc: '/logs/' }
  },

  // set directories
  staticImageDir: 'public/images',

  // set up s3
  bucket: 'wall-collective',

  // choose url to save to DB
  UrlToDB: 's3', // s3, local, or cloudinary

  // reload option:
  reloadFrom: 'db', // db, s3, local, or cloudinary

  // session string generator
  sessionStr: { length: 10,
                charset: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' },

  // filename string generator
  imageStr: { length: 6,
                charset: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' },

  // temporary holding spot for database
  backgroundColor: '#000000'
};
