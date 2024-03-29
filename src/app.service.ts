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
  getStudent() {
    return {
      status: {
        code: 1000,
        header: 'SUCESSS',
        description: 'SUCCESS',
      },
      data: [
        {
          _id: 0,
          name: 'aimee Zank',
          scores: [
            { score: 1.463179736705023, type: 'exam' },
            { score: 11.78273309957772, type: 'quiz' },
            { score: 35.8740349954354, type: 'homework' },
          ],
        },
        {
          _id: 1,
          name: 'Aurelia Menendez',
          scores: [
            { score: 60.06045071030959, type: 'exam' },
            { score: 52.79790691903873, type: 'quiz' },
            { score: 71.76133439165544, type: 'homework' },
          ],
        },
        {
          _id: 2,
          name: 'Corliss Zuk',
          scores: [
            { score: 67.03077096065002, type: 'exam' },
            { score: 6.301851677835235, type: 'quiz' },
            { score: 66.28344683278382, type: 'homework' },
          ],
        },
        {
          _id: 3,
          name: 'Bao Ziglar',
          scores: [
            { score: 71.64343899778332, type: 'exam' },
            { score: 24.80221293650313, type: 'quiz' },
            { score: 42.26147058804812, type: 'homework' },
          ],
        },
        {
          _id: 4,
          name: 'Zachary Langlais',
          scores: [
            { score: 78.68385091304332, type: 'exam' },
            { score: 90.2963101368042, type: 'quiz' },
            { score: 34.41620148042529, type: 'homework' },
          ],
        },
      ],
    };
  }
}
