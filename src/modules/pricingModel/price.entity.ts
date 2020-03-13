import { Column, Entity } from 'typeorm';

import { CommonEntity } from '../../common/common.entity';

@Entity('pricing_model')
export class PricingModelEntity extends CommonEntity {
    @Column({ type: 'varchar', length: 250 })
    name: string;

    @Column({ type: 'simple-json', nullable: true })
    pricing: { price: number; name: string; value: number };
}
