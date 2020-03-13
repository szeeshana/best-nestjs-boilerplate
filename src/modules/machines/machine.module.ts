import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PricingRepository } from '../pricingModel/prices.repository';
import { PricingService } from '../pricingModel/prices.service';
import { MachineController } from './machine.controller';
import { MachineRepository } from './machine.repository';
import { MachineService } from './machine.service';

@Module({
    imports: [TypeOrmModule.forFeature([MachineRepository, PricingRepository])],
    controllers: [MachineController],
    exports: [MachineService],
    providers: [MachineService, PricingService],
})
export class MachineModule {}
