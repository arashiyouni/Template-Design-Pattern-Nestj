import { Inject, Injectable } from '@nestjs/common';
import { ISocialMedia } from 'src/common/interface/queries-cmmons.interface';
import { OperationType } from 'src/common/types/types';

@Injectable()
export class DatabaseStrategyService {
    private strategy: {[key: string]: ISocialMedia<any>}

    constructor(
        @Inject('MONGO')
        private repositoryMongo: ISocialMedia<any>,
        @Inject('MSSQL')
        private repositoryMssql: ISocialMedia<any>
    ){
        this.strategy = {
            mongo: this.repositoryMongo,
            mssql: this.repositoryMssql
        }
    }

    getService(type: OperationType): ISocialMedia<any> {
        const service = this.strategy[type]
        console.log('🍕 | service chose: ', service)
        if (!service) {
            throw new Error(`Service not found for type: ${type}`);
          }
        return service
    }
}
