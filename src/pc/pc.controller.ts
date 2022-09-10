import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PcService } from './pc.service';
import { CreatePcDto } from './dto/create-pc.dto';
import { Pc } from './pc.model';

@ApiTags('Pc')
@Controller('pc')
export class PcController {
  constructor(private pcService: PcService) {}

  @ApiOperation({summary: 'Создание пк'})
  @ApiResponse({status: 200, type: Pc})
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() pcDto: CreatePcDto) {
    return this.pcService.createPc(pcDto)
  }

  @ApiOperation({summary: 'Получить все pc'})
  @ApiResponse({status: 200, type: [Pc]})
  @Get()
  getAll() {
    return this.pcService.getAllPc()
  }

  @ApiOperation({summary: 'Получить pc по id'})
  @ApiResponse({status: 200, type: Pc})
  @Get('/:id')
  getById(@Param() id: string) {
    return this.pcService.getPcById(id)
  }

  @ApiOperation({summary: 'Обновить данные pc'})
  @ApiResponse({status: 200, type: Pc})
  @Put('/:id')
  update(@Param() id: string, @Body() dto: CreatePcDto) {
    return this.pcService.updatePc(id , dto)
  }

  @ApiOperation({summary: 'Удалить pc'})
  @ApiResponse({status: 200, type: Pc})
  @Delete('/:id')
  delete(@Param() id: string) {
    return this.pcService.deletePc(id)
  }
}
