import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessageService } from '@/message/message.service';
// import { CreateMessageDto } from '@/message/dto/create-message.dto';
// import { UpdateMessageDto } from '@/message/dto/update-message.dto';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) { }


}
