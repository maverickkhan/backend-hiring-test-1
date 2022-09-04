// import { DefaultAzureCredential } from '@azure/identity';
// import { SecretClient } from '@azure/keyvault-secrets';
// import { JwtModuleAsyncOptions } from '@nestjs/jwt';
// import * as fs from 'fs';
// import * as path from 'path';

// export const jwtConfig: JwtModuleAsyncOptions = {
//   useFactory: async () => {
//     return {
//       secret: await getJWTSecret(),
//       signOptions: {
//         expiresIn: +process.env.JWT_EXPIRE_IN || 360000,
//         algorithm: 'RS256',
//       },
//     };
//   },
// };

// export const getJWTSecret = async () => {
//   if (process.env.NODE_ENV !== 'production') {
//     return fs.readFileSync(path.resolve('./jwtRS256.key'));
//   }
//   const credentials = new DefaultAzureCredential();
//   const client = new SecretClient(process.env.AZURE_KEY_VAULT_URI, credentials);
//   const secret = `
// -----BEGIN RSA PRIVATE KEY-----
// ${(await client.getSecret('jwtRS256')).value}
// -----END RSA PRIVATE KEY-----
//   `
//   return secret;
// };
