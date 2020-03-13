import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { PricingModelEntity } from './price.entity';

@EntityRepository(PricingModelEntity)
export class PricingRepository extends Repository<PricingModelEntity> {}
