import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { CommonEntity } from '../../common/common.entity';
import { PricingModelEntity } from '../pricingModel/price.entity';

@Entity('machines')
export class MachineEntity extends CommonEntity {
    @Column({ type: 'varchar', length: 250 })
    name: string;

    @ManyToOne(() => PricingModelEntity)
    @JoinColumn()
    pricingModel: PricingModelEntity;
}
