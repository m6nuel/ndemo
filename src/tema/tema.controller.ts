import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TemaService } from './tema.service';
import { CreateTemaDto } from './dto/create-tema.dto';
import { UpdateTemaDto } from './dto/update-tema.dto';
// import { Auth } from '../auth/decorators/auth.decorator';
// import { Role } from '../common/enums/rol.enum';

@Controller('tema')
export class TemaController {
  constructor(private readonly temaService: TemaService) {}

  // @Auth(Role.User)
  @Post()
  create(@Body() createTemaDto: CreateTemaDto) {
    return this.temaService.create(createTemaDto);
  }

  @Get()
  findAll() {
    return this.temaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.temaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTemaDto: UpdateTemaDto) {
    return this.temaService.update(id, updateTemaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.temaService.remove(+id);
  }
}
