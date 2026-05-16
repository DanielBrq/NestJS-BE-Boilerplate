import { Injectable } from '@nestjs/common';
import { ChatRepository } from '@/chat/chat.repository';
// import { CreateChatDto } from '@/chat/dto/create-chat.dto';
// import { UpdateChatDto } from '@/chat/dto/update-chat.dto';

@Injectable()
export class ChatService {
    constructor(private readonly chatRepository: ChatRepository) { }

}
