import { Controller, Get, Header, HttpCode, NotFoundException, Param, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/response')
  getResponse(@Res() res: Response){
    return res.status(200).send({
      'result': 'foobar'
    });
  } 

  
  @Get('/exception')
  getException(@Res() res: Response){
    // 기본적으로 nest에서 지원하는 Exception -> HttpException를 상속받고 있으며 기본적으로 status, error 프로퍼티를 가지고 있음.
    // https://docs.nestjs.com/exception-filters#built-in-http-exceptions 참조
    throw new NotFoundException('generate NotFound Exception'); 
    // output
    // {
    //   "statusCode": 404,
    //   "message": "generate NotFound Exception",
    //   "error": "Not Found"
    // }
  }

  @Get('/customheader')
  @Header('x-custom','foobar')
  getCustomHeader(): string{
    return 'foobar';
    // output
    // Headers: {[x-custom, foobar], [Connection, keep-alive], [Keep-Alive, timeout=5], [Content-Length, 6]...}
  }

  /**
   * Param, Query를 이용할 때 뒤에 정의한 type에 일치하지 않는 type이 들어왔을 경우 (validation없이)
   * 들어온 값을 그대로 사용한다.
   */

  @Get('/routeparameter/:id')
  getRouteParameter(@Param('id') id: number): number{
    console.log(typeof id);
    
    return id;
  }

  @Get('/querystring')
  getQueryString(@Query('id') id:number): number{
    console.log(typeof id);
    return id;
  }
  
  @Get('/he*lo')
  getHelloWithWildcard(): string {
    return this.appService.getHello();
  }

  @Post()
  getRequest(@Req() req: Request) {
    console.log(req.headers);
    console.log(req.body);
  }
}
