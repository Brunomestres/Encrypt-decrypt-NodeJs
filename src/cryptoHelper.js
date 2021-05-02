const { createCipheriv, createDecipheriv } = require('crypto');

class CryptoHelper {
  constructor({ cryptoKey })
  {
    this.cryptoConfig = Object.values({
      algorithm: 'aes-192-ecb',
      cryptoKey,
      initializationVectorKey: null
    });
  }

  static async setup({ cryptoKey })
  {
    return new CryptoHelper({ cryptoKey });
  }

  async encrypt(data)
  {
    const cipher = createCipheriv(...this.cryptoConfig);

    return cipher
      .update(data, 'utf8', 'base64')
      .concat(cipher.final('base64'));
  }

  async decrypt(data)
  {
    const cipher = createDecipheriv(...this.cryptoConfig);

    return cipher
      .update(data.toString() , 'base64' , 'utf-8')
      .concat(cipher.final('utf-8'))


  }
}

module.exports = CryptoHelper;
