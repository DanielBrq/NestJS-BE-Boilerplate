import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatService } from '@/chat/chat.service';
// import { CreateChatDto } from '@/chat/dto/create-chat.dto';
// import { UpdateChatDto } from '@/chat/dto/update-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) { }


}
