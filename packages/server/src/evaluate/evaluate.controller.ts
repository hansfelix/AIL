import { Controller, Post, Body } from '@nestjs/common';
import { EvaluateService } from './evaluate.service';
import { CreateApiDto } from './dto/create-api.dto';

import { Expression } from './../runtime/src/lang/Expressions';

@Controller('evaluate')
export class EvaluateController {
  constructor(private readonly evaluateService: EvaluateService) {}

  @Post()
  create(@Body() createApiDto: Expression) {
    // Validate Payload
    return this.evaluateService.create(createApiDto);
  }
}
