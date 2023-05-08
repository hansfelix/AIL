import { Injectable } from '@nestjs/common';
import { CreateApiDto } from './dto/create-api.dto';

import { evaluate } from './../runtime/src/runtime/evaluation';
import { Expression } from './../runtime/src/lang/Expressions';

@Injectable()
export class ApiService {
  create(createApiDto: Expression) {
    // Map Entity

    const result = evaluate(createApiDto);
    return result;
  }
}

// function mapEntity(createApiDto: CreateApiDto): Expression {

// }
