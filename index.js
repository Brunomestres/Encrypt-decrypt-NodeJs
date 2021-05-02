const CryptoHelper = require('./src/cryptoHelper');
const app = require('./src/app');
const CustomFSPromises = require('./src/customFSPromises');
const Decorator = require('./src/decorator');

;(async () => {

  const config = {

    cryptoKey: 'minha-senha-super-segura'
  }

  const cryptoHelper = await CryptoHelper.setup(config);

  const result = await cryptoHelper.encrypt('Hello World');

  const decrypt = await cryptoHelper.decrypt(result);


  const customFSPromises = new CustomFSPromises({ cryptoHelper }).configure();

  console.log({ result, decrypt });

  Decorator.decorateModule(customFSPromises, require('fs').promises);


  await app.run();

})();
