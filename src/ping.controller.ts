import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';

@Controller({
  version: VERSION_NEUTRAL,
})
@Controller()
export class PingController {
  //PING
  @Get('/ping')
  ping() {
    return 'OK';
  }
}
