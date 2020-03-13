import { Injectable } from '@nestjs/common';

import { MachineEntity } from './machine.entity';
import { MachineRepository } from './machine.repository';

@Injectable()
export class MachineService {
    constructor(public readonly machineRepository: MachineRepository) {}

    /**
     * Get Machines
     */
    async getMachines(options: {}): Promise<MachineEntity[]> {
        return this.machineRepository.find(options);
    }
    /**
     * Get Machines
     */
    async getOneMachine(options: {}): Promise<MachineEntity> {
        return this.machineRepository.findOne(options);
    }

    /**
     * Add Machine
     */
    async addMachine(data: {}): Promise<MachineEntity> {
        const machineCreated = this.machineRepository.create(data);
        return this.machineRepository.save(machineCreated);
    }

    /**
     * Update Machine
     */
    async updateMachine(options: {}, data: {}): Promise<{}> {
        return this.machineRepository.update(options, data);
    }

    /**
     * Delete Machine
     */
    async deleteMachine(options: {}): Promise<{}> {
        return this.machineRepository.delete(options);
    }
}
