import { PricingController } from './prices.controller';
import { PricingService } from './prices.service';
import { PricingRepository } from './prices.repository';
import { PricingModelEntity } from './price.entity';

describe('CatsController', () => {
    let pricingController: PricingController;
    let pricingService: PricingService;
    let pricingRepository: PricingRepository;

    beforeEach(() => {
        pricingService = new PricingService(pricingRepository);
        pricingController = new PricingController(pricingService);
    });

    describe('addPricing', () => {
        it('should test addPricing for Pricing Controller', async () => {
            const data = {
                name: 'Super Value Option2',
                pricing: [
                    {
                        price: 3,
                        name: '10 minutes',
                        value: 10,
                    },
                    {
                        price: 5,
                        name: '20 minutes',
                        value: 20,
                    },
                ],
            };
            const result: PricingModelEntity = {
                id: 1,
                name: 'Super Value Option',
                pricing: {
                    price: 5,
                    name: '20 minutes',
                    value: 20,
                },
            };
            jest.spyOn(pricingService, 'addPricing').mockResolvedValue(
                Promise.resolve(result),
            );
            expect(
                await (await pricingController.addPricing(data)).statusCode,
            ).toBe(200);
        });
    });
    describe('addPricingPrices', () => {
        it('should test addPricingPrices for Pricing Controller', async () => {
            const data = [
                {
                    price: 9,
                    name: '100 minutes',
                    value: 100,
                },
            ];
            const result: PricingModelEntity = {
                id: 1,
                name: 'Super Value Option',
                pricing: {
                    price: 5,
                    name: '20 minutes',
                    value: 20,
                },
            };
            jest.spyOn(pricingService, 'updatePricing').mockResolvedValue(
                Promise.resolve(result),
            );
            jest.spyOn(pricingService, 'getOnePricing').mockResolvedValue(
                Promise.resolve(result),
            );
            expect(
                await (await pricingController.addPricingPrices('1', data))
                    .statusCode,
            ).toBe(200);
        });
    });
    describe('getAllPricings', () => {
        it('should test getAllPricings for Pricing Controller', async () => {
            const result: PricingModelEntity[] = [
                {
                    id: 1,
                    name: 'Super Value Option',
                    pricing: {
                        price: 5,
                        name: '20 minutes',
                        value: 20,
                    },
                },
            ];
            jest.spyOn(pricingService, 'getPricings').mockImplementation(() =>
                Promise.resolve(result),
            );
            expect(
                await (await pricingController.getAllPricings()).statusCode,
            ).toBe(200);
        });
    });
    describe('getPricingPrices', () => {
        it('should test getPricingPrices for Pricing Controller', async () => {
            const result: PricingModelEntity = {
                id: 1,
                name: 'Super Value Option',
                pricing: {
                    price: 5,
                    name: '20 minutes',
                    value: 20,
                },
            };

            jest.spyOn(pricingService, 'getOnePricing').mockResolvedValue(
                Promise.resolve(result),
            );
            expect(
                await (await pricingController.getPricingPrices('1'))
                    .statusCode,
            ).toBe(200);
        });
    });
    describe('getPricing', () => {
        it('should test getPricing for Pricing Controller', async () => {
            const result: PricingModelEntity[] = [
                {
                    id: 1,
                    name: 'Super Value Option',
                    pricing: {
                        price: 5,
                        name: '20 minutes',
                        value: 20,
                    },
                },
            ];

            jest.spyOn(pricingService, 'getPricings').mockResolvedValue(
                Promise.resolve(result),
            );
            expect(
                await (await pricingController.getPricing('1')).statusCode,
            ).toBe(200);
        });
    });
    describe('updatePricing', () => {
        it('should test updatePricing for Pricing Controller', async () => {
            const result: PricingModelEntity = {
                id: 1,
                name: 'Super Value Option',
                pricing: {
                    price: 5,
                    name: '20 minutes',
                    value: 20,
                },
            };

            jest.spyOn(pricingService, 'updatePricing').mockResolvedValue(
                Promise.resolve(result),
            );
            expect(
                await (
                    await pricingController.updatePricing(
                        '1',
                        PricingModelEntity,
                    )
                ).statusCode,
            ).toBe(200);
        });
    });
    describe('deletePricingPrices', () => {
        it('should test deletePricingPrices for Pricing Controller', async () => {
            const result: PricingModelEntity = {
                id: 1,
                name: 'Super Value Option',
                pricing: {
                    price: 5,
                    name: '20 minutes',
                    value: 20,
                },
            };

            jest.spyOn(pricingService, 'getOnePricing').mockResolvedValue(
                Promise.resolve(result),
            );
            jest.spyOn(pricingService, 'deletePricing').mockResolvedValue(
                Promise.resolve(result),
            );
            expect(
                await (await pricingController.deletePricingPrices('1', '1'))
                    .statusCode,
            ).toBe(200);
        });
    });
    describe('removePricing', () => {
        it('should test removePricing for Pricing Controller', async () => {
            const result: PricingModelEntity = {
                id: 1,
                name: 'Super Value Option',
                pricing: {
                    price: 5,
                    name: '20 minutes',
                    value: 20,
                },
            };
            jest.spyOn(pricingService, 'deletePricing').mockResolvedValue(
                Promise.resolve(result),
            );
            expect(
                await (await pricingController.removePricing('1'))
                    .statusCode,
            ).toBe(200);
        });
    });
});
