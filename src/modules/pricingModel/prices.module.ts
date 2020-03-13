import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PricingController } from './prices.controller';
import { PricingRepository } from './prices.repository';
import { PricingService } from './prices.service';

@Module({
    imports: [TypeOrmModule.forFeature([PricingRepository])],
    controllers: [PricingController],
    exports: [PricingService],
    providers: [PricingService],
})
export class PricingModule {}
