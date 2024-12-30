import { Schema, Document } from 'mongoose';
import { Prop, SchemaFactory, Schema as MongooseSchema } from '@nestjs/mongoose';

export type OrderDocument = Order & Document;

@MongooseSchema()
export class Order {
  @Prop({ required: true })
  product: string;

  @Prop({ required: true })
  quantity: number;

  @Prop()
  price: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
