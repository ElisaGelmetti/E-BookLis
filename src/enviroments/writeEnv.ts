const setEnv = () => {
  // Configure Angular `environment.ts` file path
  const targetPath = './src/environments/environment.ts';
  // Load node modules
  require('dotenv').config({
    path: '/Prova2/src/environments/.env',
  });
  // `environment.ts` file structure
  const envConfigFile = `export const environment = {
//il nome delle APIKEY deve corrispondere a quello del .env
    API_KEY_AP_FOOT: '${process.env['API_KEY_AP_FOOT']}',
    API_KEY_FOOT_PRED":'${process.env['API_KEY_FOOT_PRED']}'
  production: true,
};
`;

  require('fs').writeFile(targetPath, envConfigFile, (err: any) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(
        `Angular environment.ts file generated correctly at ${targetPath} \n`
      );
    }
  });
};

setEnv();
