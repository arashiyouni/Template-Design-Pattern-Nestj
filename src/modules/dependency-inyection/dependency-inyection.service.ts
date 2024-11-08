import { Injectable } from '@nestjs/common';
import { DatabaseStrategyService } from './database-strategy.service';
import { IUser } from 'src/common/interface/IOperation';
import { OperationType } from 'src/common/types/types';

@Injectable()
export class DependencyInyectionService {
    constructor(
        private operation: DatabaseStrategyService
    ){}

    Insert(type: OperationType, user: IUser){
        const service = this.operation.getService(type)
        return service.Create(user)
    }

    Update(type: OperationType, user: IUser){
        const service = this.operation.getService(type)
        return service.Update(user)
    }

    Delete(type: OperationType, id: string){
        const service = this.operation.getService(type)
        return service.Delete(id)
    }

    SearchByUsername(type: OperationType, user: IUser){
        const service = this.operation.getService(type)
        return service.SearchByUsername(user)
    }

    SearchBlogPost(type: OperationType, id: string){
        const service = this.operation.getService(type)
        return service.SearchBlogPost(id)
    }
}
