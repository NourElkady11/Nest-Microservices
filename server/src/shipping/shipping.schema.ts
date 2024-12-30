import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ShippingDocument = Shipping & Document;

@Schema()
export class Shipping {
  @Prop({ required: true })
  orderId: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  status: string;
}

export const ShippingSchema = SchemaFactory.createForClass(Shipping);
