import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShippingController } from './shipping.controller';
import { ShippingService } from './shipping.service';
import { Shipping, ShippingSchema } from './shipping.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Shipping.name, schema: ShippingSchema }],
      'ordersDB'
    ),
  ],
  controllers: [ShippingController],
  providers: [ShippingService],
})
export class ShippingModule {}
