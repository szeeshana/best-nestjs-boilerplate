import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { MachineEntity } from './machine.entity';

@EntityRepository(MachineEntity)
export class MachineRepository extends Repository<MachineEntity> {}
