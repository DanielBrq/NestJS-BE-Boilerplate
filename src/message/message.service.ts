import { Injectable } from '@nestjs/common';
import { MessageRepository } from '@/message/message.repository';
// import { CreateMessageDto } from '@/message/dto/create-message.dto';
// import { UpdateMessageDto } from '@/message/dto/update-message.dto';

@Injectable()
export class MessageService {
    constructor(private readonly messageRepository: MessageRepository) { }

}
