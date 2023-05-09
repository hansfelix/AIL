import { Injectable } from '@nestjs/common';
import { CreateApiDto } from './dto/create-api.dto';

import { evaluate } from '@ail/core/dist/runtime/evaluation';
import { Expression } from '@ail/core/dist/lang/Expressions';

@Injectable()
export class EvaluateService {
  create(createApiDto: Expression) {
    // Map Entity

    const result = evaluate(createApiDto);
    return result;
  }
}

// function mapEntity(createApiDto: CreateApiDto): Expression {

// }
