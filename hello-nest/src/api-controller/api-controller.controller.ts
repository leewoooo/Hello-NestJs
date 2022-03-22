import { Controller, Get } from '@nestjs/common';

// 하위 도메인 설정
// 들어온 요청을 서로 다르게 처리하고 싶을 때 하위 도메인을 설정할 수 있음.
@Controller({
  host: 'api.localhost'
})
export class ApiControllerController {

  @Get()
  index(): string{
    return 'Hello, API';
  }
}
