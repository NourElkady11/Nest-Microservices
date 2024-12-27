import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  items: Array<{ productId: string; quantity: number }>;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
