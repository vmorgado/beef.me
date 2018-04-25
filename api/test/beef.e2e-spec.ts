import request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { BeefModule } from './../src/beef/beef.module';
import { AppModule } from './../src/app.module';

describe('BeefModule (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule, BeefModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET /beef', () => {
    return request(app.getHttpServer())
      .get('/beef')
      .expect(200)
      .expect('[{"id":1,"filename":"teste.mp3","views":4,"props":5,"createdOn":"2018-04-24","isPublished":true}]');
  });
  it('/GET /beef/id', () => {
    return request(app.getHttpServer())
      .get('/beef/1')
      .expect(200)
      .expect('{"id":1,"filename":"teste.mp3","views":4,"props":5,"createdOn":"2018-04-24","isPublished":true}');
  });
});