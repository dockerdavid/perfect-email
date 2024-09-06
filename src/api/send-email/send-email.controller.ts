import { Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { SendEmailService } from './send-email.service';
import { ApiTags } from '@nestjs/swagger';

import { Response, Request } from 'express';

@ApiTags('email')
@Controller('email')
export class SendEmailController {
  constructor(private readonly sendEmailService: SendEmailService) {}

  @Post()
  sendMails(@Req() req: Request) {
    const url = req.protocol + '://' + req.get('host');
    return this.sendEmailService.send(url);
  }

  @Get('/track-email/:unique_id')
  async traceEmails(
    @Res() res: Response,
    @Param('unique_id') unique_id: string,
  ) {
    await this.sendEmailService.trace(unique_id);
    return res.sendFile(`${process.cwd()}/public/logo.png`);
  }

  @Get('/static/:name')
  async static(@Res() res: Response, @Param('name') name: string) {
    return res.sendFile(`${process.cwd()}/public/${name}`);
  }
}
