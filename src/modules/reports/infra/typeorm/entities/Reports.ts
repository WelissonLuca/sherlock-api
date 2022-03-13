import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { ILocalizationDTO } from '@modules/reports/dtos/ICreateReportDTO';

@Entity('reports')
class Report {
  @PrimaryColumn()
  id: string;
  @Column({
    type: 'jsonb',
  })
  localization: ILocalizationDTO;
  @Column()
  status: string;
  @Column()
  problem: string;
  @Column()
  description: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  constructor() {
    this.id = this.id ?? uuid();
  }
}

export { Report };
