import { MachineController } from './machine.controller';
import { MachineService } from './machine.service';
import { MachineRepository } from './machine.repository';
import { MachineEntity } from './machine.entity';
import { PricingService } from '../pricingModel/prices.service';
import { PricingModelEntity } from '../pricingModel/price.entity';
import { PricingRepository } from '../pricingModel/prices.repository';

describe('CatsController', () => {
    let machineController: MachineController;
    let machineService: MachineService;
    let machineRepository: MachineRepository;
    let pricingRepository: PricingRepository;
    let pricingService: PricingService;

    beforeEach(() => {
        machineService = new MachineService(machineRepository);
        pricingService = new PricingService(pricingRepository);
        machineController = new MachineController(
            machineService,
            pricingService,
        );
    });

    describe('addMachine', () => {
        it('should test addMachine for Machine Controller', async () => {
            const data = {
                name: 'Super Value Option',
                pricingModel: 1,
            };
            const result: MachineEntity = {
                id: 1,
                name: 'Super Value Option',
                pricingModel: null,
            };
            jest.spyOn(machineService, 'addMachine').mockResolvedValue(
                Promise.resolve(result),
            );
            expect(
                await (await machineController.addMachine(data)).statusCode,
            ).toBe(200);
        });
    });
    describe('getAllMachines', () => {
        it('should test getAllMachines for Machine Controller', async () => {
            const result: MachineEntity[] = [
                {
                    id: 1,
                    name: 'Super Value Option',
                    pricingModel: null,
                },
            ];
            jest.spyOn(machineService, 'getMachines').mockResolvedValue(
                Promise.resolve(result),
            );
            expect(
                await (await machineController.getAllMachines()).statusCode,
            ).toBe(200);
        });
    });
    describe('getMachine', () => {
        it('should test getMachine for Machine Controller', async () => {
            const result: MachineEntity[] = [
                {
                    id: 1,
                    name: 'Super Value Option',
                    pricingModel: null,
                },
            ];
            jest.spyOn(machineService, 'getMachines').mockResolvedValue(
                Promise.resolve(result),
            );
            expect(
                await (await machineController.getMachine('1')).statusCode,
            ).toBe(200);
        });
    });
    describe('getMachinePriceModel', () => {
        it('should test getMachinePriceModel for Machine Controller', async () => {
            const result: MachineEntity = {
                id: 1,
                name: 'Super Value Option',
                pricingModel: null,
            };
            jest.spyOn(machineService, 'getOneMachine').mockResolvedValue(
                Promise.resolve(result),
            );
            expect(
                await (await machineController.getMachinePriceModel('1'))
                    .statusCode,
            ).toBe(200);
        });
    });
    describe('updateMachine', () => {
        it('should test updateMachine for Machine Controller', async () => {
            const result: MachineEntity = {
                id: 1,
                name: 'Super Value Option',
                pricingModel: null,
            };
            const data = {
                name: 'Super Value Option1',
                pricing: [
                    {
                        price: 3,
                        name: '10 minutes1',
                        value: 10,
                    },
                    {
                        price: 5,
                        name: '20 minutes1',
                        value: 20,
                    },
                ],
            };
            jest.spyOn(machineService, 'updateMachine').mockResolvedValue(
                Promise.resolve(result),
            );
            expect(
                await (await machineController.updateMachine('1', data))
                    .statusCode,
            ).toBe(200);
        });
    });
    describe('updateMachinePriceModel', () => {
        it('should test updateMachinePriceModel for Machine Controller', async () => {
            const result: MachineEntity = {
                id: 1,
                name: 'Super Value Option',
                pricingModel: null,
            };
            const resultPricing: PricingModelEntity  = {
                id: 1,
                name: 'Super Value Option',
                pricing: {
                    price: 5,
                    name: '20 minutes',
                    value: 20,
                },
            };
            jest.spyOn(pricingService, 'getOnePricing').mockResolvedValue(
                Promise.resolve(resultPricing),
            );
            jest.spyOn(machineService, 'getOneMachine').mockResolvedValue(
                Promise.resolve(result),
            );
            jest.spyOn(machineService, 'updateMachine').mockResolvedValue(
                Promise.resolve(result),
            );
            
            expect(
                await (
                    await machineController.updateMachinePriceModel('1', '3')
                ).statusCode,
            ).toBe(200);
        });
    });
    describe('removeMachine', () => {
        it('should test removeMachine for Machine Controller', async () => {
            const result: MachineEntity = {
                id: 1,
                name: 'Super Value Option',
                pricingModel: null,
            };
           
           
            jest.spyOn(machineService, 'deleteMachine').mockResolvedValue(
                Promise.resolve(result),
            );
            
            expect(
                await (
                    await machineController.removeMachine('1')
                ).statusCode,
            ).toBe(200);
        });
    });

    describe('deleteMachinePriceModel', () => {
        it('should test deleteMachinePriceModel for Machine Controller', async () => {
            const result: MachineEntity = {
                id: 1,
                name: 'Super Value Option',
                pricingModel: null,
            };
            const resultPricing: PricingModelEntity  = {
                id: 1,
                name: 'Super Value Option',
                pricing: {
                    price: 5,
                    name: '20 minutes',
                    value: 20,
                },
            };
            jest.spyOn(pricingService, 'getOnePricing').mockResolvedValue(
                Promise.resolve(resultPricing),
            );
            jest.spyOn(machineService, 'getOneMachine').mockResolvedValue(
                Promise.resolve(result),
            );
            jest.spyOn(machineService, 'updateMachine').mockResolvedValue(
                Promise.resolve(result),
            );
            
            expect(
                await (
                    await machineController.deleteMachinePriceModel('1', '3')
                ).statusCode,
            ).toBe(200);
        });
    });
});
