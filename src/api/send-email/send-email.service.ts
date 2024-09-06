import { HttpStatus, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { InjectRepository } from '@nestjs/typeorm';

import { concatImage } from 'src/utilities/utilities';
import { message } from 'src/common/message';

@Injectable()
export class SendEmailService {
  constructor(private readonly mailService: MailerService) {}

  async send(host: string) {
    await this.mailService.sendMail({
      from: 'luis@communicate360.net',
      to: ['davidgggomez0421@gmail.com'],
      subject:
        'Elevate Your Business with Communicate 360 - Explore Our Comprehensive Marketing Solutions',
      html: message('David', host),
      attachments: [
        {
          filename: 'Communicate360_Brochure.pdf',
          path: `${process.cwd()}/public/Communicate360_Brochure.pdf`,
        },
      ],
    });

    return {
      status: HttpStatus.OK,
      message: 'Emails sent',
      error: 'Ok',
    };
  }

  async trace(unique_id: string) {}
}
