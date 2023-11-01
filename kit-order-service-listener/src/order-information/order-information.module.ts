import { Module } from '@nestjs/common';
import { OrderInformationService } from './order-information.service';

@Module({
  controllers: [],
  providers: [OrderInformationService],
  exports: [OrderInformationService],
})
export class OrderInformationModule {}
