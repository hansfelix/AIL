import { Controller, Post, Body } from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';

import { Expression } from 'runtime/src/lang/Expressions';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post()
  create(@Body() createApiDto: Expression) {
    return this.apiService.create(createApiDto);
  }
}
