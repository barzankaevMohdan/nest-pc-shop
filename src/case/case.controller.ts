import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Case } from './case.model';
import { CaseService } from './case.service';
import { CreateCaseDto } from './dto/create-case.dto';

@ApiTags('Case')
@Controller('case')
export class CaseController {
  constructor(private caseService: CaseService) {}

  @ApiOperation({summary: 'Создание case'})
  @ApiResponse({status: 200, type: Case})
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() caseDto: CreateCaseDto) {
    return this.caseService.createCase(caseDto)
  }

  @ApiOperation({summary: 'Получить все case'})
  @ApiResponse({status: 200, type: [Case]})
  @Get()
  getAll() {
    return this.caseService.getAllCase()
  }

  @ApiOperation({summary: 'Получить case по id'})
  @ApiResponse({status: 200, type: Case})
  @Get('/:id')
  getById(@Param() id: string) {
    return this.caseService.getCaseById(id)
  }

  @ApiOperation({summary: 'Обновить данные case'})
  @ApiResponse({status: 200, type: Case})
  @Put('/:id')
  update(@Param() id: string, @Body() dto: CreateCaseDto) {
    return this.caseService.updateCase(id , dto)
  }

  @ApiOperation({summary: 'Удалить case'})
  @ApiResponse({status: 200, type: Case})
  @Delete('/:id')
  delete(@Param() id: string) {
    return this.caseService.deleteCase(id)
  }
}
