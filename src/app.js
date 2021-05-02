const { promises } = require('fs');

async function run()
{
  const fileTarget = 'super-secure.txt.enc';
  console.log('writing file to: ', fileTarget);

  const text = `É agora ${new Date().toISOString()}`;

  await promises.writeFile(fileTarget,text);

  console.log('decrypted content', (await (await promises.readFile(fileTarget)).toString()));
  console.log('finish');
}


module.exports = { run }
