import { ApiService } from './api.service';
import { Expression } from '@ail/runtime/src/lang/Expressions';
export declare class ApiController {
    private readonly apiService;
    constructor(apiService: ApiService);
    create(createApiDto: Expression): any;
}
