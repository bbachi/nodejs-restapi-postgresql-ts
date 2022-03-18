import { Table, Column, Model, HasMany } from 'sequelize-typescript'

@Table
export class Tasks extends Model {
  
  @Column
  name: string

  @Column
  description: string

  @Column
  createdate: string;

  @Column
  updateddate: string

  @Column
  createdBy: string;

  @Column
  updatedBy: string;
  
}