import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';

import { prices } from '../../common/constants/general';
import { ResponseFormat } from '../../interfaces/IResponseFormat';
import { ResponseFormatService } from '../../shared/services/response-format.service';
import { PricingService } from '../pricingModel/prices.service';
import { MachineService } from './machine.service';
@Controller('machine')
export class MachineController {
    constructor(
        private readonly _machineService: MachineService,
        private readonly _pricingService: PricingService,
    ) {}

    @Post()
    async addMachine(@Body() body: {}): Promise<ResponseFormat> {
        const response = await this._machineService.addMachine(body);
        return ResponseFormatService.responseOk(
            response,
            'Created Successfully',
        );
    }

    @Get()
    async getAllMachines(): Promise<ResponseFormat> {
        const options = {
            relations: ['pricingModel'],
        };
        const machines = await this._machineService.getMachines(options);
        return ResponseFormatService.responseOk(machines, 'All');
    }

    @Get(':id')
    async getMachine(@Param('id') id: string): Promise<ResponseFormat> {
        const machines = await this._machineService.getMachines({ id });
        return ResponseFormatService.responseOk(machines, 'All');
    }

    @Get(':id/prices')
    async getMachinePriceModel(
        @Param('id') id: string,
    ): Promise<ResponseFormat> {
        const machineData = await this._machineService.getOneMachine({
            where: {
                id,
            },
        });

        if (!machineData) {
            return ResponseFormatService.responseUnprocessableEntity(
                [],
                'No Machine Found',
            );
        }

        return ResponseFormatService.responseOk(
            machineData && machineData.pricingModel
                ? machineData.pricingModel
                : prices,
            'Updated Machine Data',
        );
    }

    @Patch(':id')
    async updateMachine(
        @Param('id') id: string,
        @Body() body: {},
    ): Promise<ResponseFormat> {
        const updateData = await this._machineService.updateMachine(
            { id },
            body,
        );
        return ResponseFormatService.responseOk(updateData, '');
    }

    @Patch(':id/prices/:pmId')
    async updateMachinePriceModel(
        @Param('id') id: string,
        @Param('pmId') pmId: string,
    ): Promise<ResponseFormat> {
        const pricingModel = await this._pricingService.getOnePricing({
            where: {
                id: pmId,
            },
        });
        const machineData = await this._machineService.getOneMachine({
            where: {
                id,
            },
        });
        if (!pricingModel) {
            return ResponseFormatService.responseUnprocessableEntity(
                [],
                'No PriceModel Found',
            );
        }
        if (!machineData) {
            return ResponseFormatService.responseUnprocessableEntity(
                [],
                'No Machine Found',
            );
        }
        const updatedMachine = await this._machineService.updateMachine(
            { id },
            { pricingModel: pmId },
        );
        return ResponseFormatService.responseOk(
            updatedMachine,
            'Updated Machine Data',
        );
    }

    @Delete(':id')
    async removeMachine(@Param('id') id: string): Promise<ResponseFormat> {
        const deleteData = await this._machineService.deleteMachine({ id });
        return ResponseFormatService.responseOk(deleteData, '');
    }
    @Delete(':id/prices/:pmId')
    async deleteMachinePriceModel(
        @Param('id') id: string,
        @Param('pmId') pmId: string,
    ): Promise<ResponseFormat> {
        const pricingModel = await this._pricingService.getOnePricing({
            where: {
                id: pmId,
            },
        });
        const machineData = await this._machineService.getOneMachine({
            where: {
                id,
            },
        });
        if (!pricingModel) {
            return ResponseFormatService.responseUnprocessableEntity(
                [],
                'No PriceModel Found',
            );
        }
        if (!machineData) {
            return ResponseFormatService.responseUnprocessableEntity(
                [],
                'No Machine Found',
            );
        }
        const updatedMachine = await this._machineService.updateMachine(
            { id },
            { pricingModel: null },
        );
        return ResponseFormatService.responseOk(
            updatedMachine,
            'Updated Machine Data',
        );
    }
}
