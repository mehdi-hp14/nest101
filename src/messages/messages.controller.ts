import { Body, Controller,Get,Param,Post, Query } from '@nestjs/common';
import { query } from 'express';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages(){
        return 'xxx';
    }

    @Post()
    createMessages(@Body() body: CreateMessageDto, @Query() query:any){
        console.log(body,query);

        return 'createMessagescreateMessages';
    }

    @Get('/:id')
    getMessages(@Param('id') id:string){
        console.log(id);
        
    }
}
