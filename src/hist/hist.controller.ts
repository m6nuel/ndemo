import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HistService } from './hist.service';
import { CreateHistDto } from './dto/create-hist.dto';
import { UpdateHistDto } from './dto/update-hist.dto';
import { Auth } from '../auth/decorators/auth.decorator';
import { Role } from '../common/enums/rol.enum';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Histories')
@ApiBearerAuth()
@Controller('hist')
export class HistController {
  constructor(private readonly histService: HistService) {}

  @Auth(Role.User)
  @Post()
  @ApiResponse({
    status: 201,
    description: 'The history has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createHistDto: CreateHistDto) {
    return this.histService.create(createHistDto);
  }

  @Get()
  findAll() {
    return this.histService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.histService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateHistDto: UpdateHistDto) {
    return this.histService.update(id, updateHistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.histService.remove(id);
  }
}
