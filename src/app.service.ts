import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      status: {
        code: 1000,
        header: 'SUCESSS',
        description: 'SUCCESS',
      },
      data: {
        msg: 'Hello World!',
      },
    };
  }
}
