import { Injectable } from '@nestjs/common';

import { PricingModelEntity } from './price.entity';
import { PricingRepository } from './prices.repository';

@Injectable()
export class PricingService {
    constructor(public readonly pricingRepository: PricingRepository) {}

    /**
     * Get Pricings
     */
    async getPricings(options: {}): Promise<PricingModelEntity[]> {
        return this.pricingRepository.find(options);
    }

    /**
     * Get One Pricings
     */
    async getOnePricing(options: {}): Promise<PricingModelEntity> {
        return this.pricingRepository.findOne(options);
    }

    /**
     * Add Pricing
     */
    async addPricing(data: {}): Promise<PricingModelEntity> {
        const pricingCreated = this.pricingRepository.create(data);
        return this.pricingRepository.save(pricingCreated);
    }

    /**
     * Update Pricing
     */
    async updatePricing(options: {}, data: {}): Promise<{}> {
        return this.pricingRepository.update(options, data);
    }

    /**
     * Delete Pricing
     */
    async deletePricing(options: {}): Promise<{}> {
        return this.pricingRepository.delete(options);
    }
}
