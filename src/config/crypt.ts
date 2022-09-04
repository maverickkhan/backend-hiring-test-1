// import * as bcrypt from 'bcrypt';
// import { UnauthorizedException } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// const configService = new ConfigService();

// export class Crypt {
//   static saltRounds = 10;

//   static async hashString(input: string): Promise<string> {
//     return await bcrypt.hash(input, this.saltRounds);
//   }

//   static async compare(plainString: string, hash: string): Promise<boolean> {
//     return await bcrypt.compare(plainString, hash);
//   }

//   static async validateHash(hash: string): Promise<boolean> {
//     if (!hash) {
//       throw new UnauthorizedException('auth token not provided');
//     }
//     const apiKey: string = configService.get<string>('API_KEY');
//     if (!apiKey) throw new UnauthorizedException('api key not found');

//     const response = await Crypt.compare(apiKey, hash);
//     if (!response) {
//       throw new UnauthorizedException();
//     }
//     return response;
//   }

//   static async validateHashForIntellicon(hash: string): Promise<boolean> {
//     if (!hash) {
//       throw new UnauthorizedException('auth token not provided');
//     }
//     const apiKey = 'Intellicon'; // TODO: why is it called api key? is it supposed to be a secret?
//     const response = await Crypt.compare(apiKey, hash);
//     if (!response) {
//       throw new UnauthorizedException();
//     }
//     return response;
//   }
// }
