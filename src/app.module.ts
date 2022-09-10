import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/users.model';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { AuthModule } from './auth/auth.module';
import { CaseModule } from './case/case.module';
import { Case } from './case/case.model';
import { Cooller } from './cooller/cooller.model';
import { CoollerModule } from './cooller/cooller.module';
import { Cpu } from './cpu/cpu.model';
import { Gpu } from './gpu/gpu.model';
import { Motherboard } from './motherboard/motherboard.model';
import { Pc } from './pc/pc.model';
import { Psu } from './psu/psu.model';
import { Ram } from './ram/ram.model';
import { Ssd } from './ssd/ssd.model';
import { CpuModule } from './cpu/cpu.module';
import { GpuModule } from './gpu/gpu.module';
import { MotherboardModule } from './motherboard/motherboard.module';
import { PcModule } from './pc/pc.module';
import { PsuModule } from './psu/psu.module';
import { RamModule } from './ram/ram.module';
import { SsdModule } from './ssd/ssd.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        User,
        Role,
        UserRoles,
        Case,
        Cooller,
        Cpu,
        Gpu,
        Motherboard,
        Pc,
        Psu,
        Ram,
        Ssd,
      ],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    CaseModule,
    CoollerModule,
    CpuModule,
    GpuModule,
    MotherboardModule,
    PcModule,
    PsuModule,
    RamModule,
    SsdModule,
  ],
})
export class AppModule {}