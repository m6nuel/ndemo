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
import { Auth } from '../auth/decorators/auth.decorator';
import { Role } from '../common/enums/rol.enum';
import { ActiveUser } from '../common/decorators/ActiveUser.decorator';
import { UserActiveInterface } from '../common/interface/userActive.interface';

@Controller('tema')
export class TemaController {
  constructor(private readonly temaService: TemaService) {}

  @Auth(Role.User)
  @Post()
  create(
    @Body() createTemaDto: CreateTemaDto,
    @ActiveUser() user: UserActiveInterface,
  ) {
    return this.temaService.create(createTemaDto, user);
  }

  @Auth(Role.User)
  @Get()
  findAll(@ActiveUser() user: UserActiveInterface) {
    return this.temaService.findAll(user);
  }

  @Auth(Role.User)
  @Get(':id')
  findOne(@Param('id') id: number, @ActiveUser() user: UserActiveInterface) {
    return this.temaService.findOne(id, user);
  }

  @Auth(Role.User)
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateTemaDto: UpdateTemaDto,
    @ActiveUser() user: UserActiveInterface,
  ) {
    return this.temaService.update(id, updateTemaDto, user);
  }

  @Auth(Role.User)
  @Delete(':id')
  remove(@Param('id') id: number, @ActiveUser() user: UserActiveInterface) {
    return this.temaService.remove(id, user);
  }
}
