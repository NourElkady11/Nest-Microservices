import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart, CartDocument } from './cart.schema';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name, 'ordersDB') private readonly cartModel: Model<CartDocument>,
  ) {}

  async addItem(item: any): Promise<Cart> {
    const newCartItem = new this.cartModel(item);
    return newCartItem.save();
  }

  async getCart(userId: string): Promise<Cart[]> {
    return this.cartModel.find({ userId }).exec();
  }

  async removeItem(id: string): Promise<Cart> {
    return this.cartModel.findByIdAndDelete(id).exec();
  }
}
