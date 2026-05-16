import { Module } from '@nestjs/common';
import { MessageService } from '@/message/message.service';
import { MessageController } from '@/message/message.controller';

@Module({
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
