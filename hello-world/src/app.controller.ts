import { Controller, Get } from '@nestjs/common';
import { Env, EnvService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly envService: EnvService) {}

  @Get()
  getHello(): Promise<string> {
    return this.envService.get(Env.MESSAGE);
  }
}
