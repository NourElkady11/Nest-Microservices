import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { PaymentsModule } from './payments/payments.module';
import { ShippingModule } from './shipping/shipping.module';
import { ReviewsModule } from './reviews/reviews.module';
import {OrdersModule} from './orders/orders.module'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB1,{connectionName:'authDB'}),
    MongooseModule.forRoot(process.env.DB2,{connectionName:'ordersDB'}),
    ProductsModule,
    CartModule,
    PaymentsModule,
    ShippingModule,
    ReviewsModule,
    OrdersModule,
    AuthModule 
  ],
})
export class AppModule {}
