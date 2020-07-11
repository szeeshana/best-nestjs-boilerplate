import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import * as _ from 'lodash';

import { ResponseFormat } from '../../interfaces/IResponseFormat';
import { ResponseFormatService } from '../../shared/services/response-format.service';
import { PricingService } from './prices.service';
@Controller('pricing-models')
export class PricingController {
    constructor(private readonly _pricingService: PricingService) {}

    @Post()
    async addPricing(@Body() body: {}): Promise<ResponseFormat> {
        const response = await this._pricingService.addPricing(body);
        return ResponseFormatService.responseOk(
            response,
            'Created Successfully',
        );
    }

    @Post(':id/prices')
    async addPricingPrices(
        @Param('id') id: string,
        @Body() body: {},
    ): Promise<ResponseFormat> {
        const pricingData = await this._pricingService.getOnePricing({ id });
        if (pricingData && pricingData.pricing) {
            const newData = _.flatMap([pricingData.pricing, body]);

            await this._pricingService.updatePricing(
                { id },
                {
                    pricing: newData,
                },
            );
            return ResponseFormatService.responseOk(
                newData,
                'New Config Added',
            );
        }
        return ResponseFormatService.responseOk([], 'No Data Found');
    }

    @Get()
    async getAllPricings(): Promise<ResponseFormat> {
        const options = {};
        const pricings = await this._pricingService.getPricings(options);
        return ResponseFormatService.responseOk(pricings, 'All');
    }

    @Get(':id/prices')
    async getPricingPrices(@Param('id') id: string): Promise<ResponseFormat> {
        const pricingData = await this._pricingService.getOnePricing({ id });
        return ResponseFormatService.responseOk(
            pricingData && pricingData.pricing ? pricingData.pricing : [],
            'All',
        );
    }

    @Get(':id')
    async getPricing(@Param('id') id: string): Promise<ResponseFormat> {
        const pricingData = await this._pricingService.getPricings({ id });
        return ResponseFormatService.responseOk(pricingData, 'All');
    }

    @Patch(':id')
    async updatePricing(
        @Param('id') id: string,
        @Body() body: {},
    ): Promise<ResponseFormat> {
        const updateData = await this._pricingService.updatePricing(
            { id },
            body,
        );
        return ResponseFormatService.responseOk(updateData, '');
    }
    @Delete(':id/prices/:priceId')
    async deletePricingPrices(
        @Param('id') id: string,
        @Param('priceId') priceId: string,
    ): Promise<ResponseFormat> {
        const pricingData = await this._pricingService.getOnePricing({ id });
        if (pricingData && pricingData.pricing) {
            if (
                !_.find(pricingData.pricing, function(o: any) {
                    // eslint-disable-next-line eqeqeq
                    return o.price == priceId;
                })
            ) {
                return ResponseFormatService.responseOk([], 'No price found');
            }
            const newData = _.filter(pricingData.pricing, function(o: any) {
                // eslint-disable-next-line eqeqeq
                return o.price != priceId;
            });
            await this._pricingService.updatePricing(
                { id },
                {
                    pricing: newData,
                },
            );
            return ResponseFormatService.responseOk(
                newData,
                'Deleted Price Id',
            );
        }
        return ResponseFormatService.responseOk(
            [],
            'No data found for pricing model',
        );
    }
    @Delete(':id')
    async removePricing(@Param('id') id: string): Promise<ResponseFormat> {
        const deleteData = await this._pricingService.deletePricing({ id });
        return ResponseFormatService.responseOk(deleteData, '');
    }
}
