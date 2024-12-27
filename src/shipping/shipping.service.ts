import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Shipping, ShippingDocument } from './shipping.schema';

@Injectable()
export class ShippingService {
  constructor(
    @InjectModel(Shipping.name, 'ordersDB') private readonly shippingModel: Model<ShippingDocument>,
  ) {}

  async addShippingDetails(shippingDto: any): Promise<Shipping> {
    const newShipping = new this.shippingModel(shippingDto);
    return newShipping.save();
  }

  async getAllShippingDetails(): Promise<Shipping[]> {
    return this.shippingModel.find().exec();
  }
}
