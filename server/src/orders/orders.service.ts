import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './orders.schema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name, 'ordersDB') // Correctly inject the model and connection
    private readonly orderModel: Model<OrderDocument>,
  ) {}

  // Create a new order
  async create(orderDto: any): Promise<Order> {
    const createdOrder = new this.orderModel(orderDto);
    return createdOrder.save();
  }

  // Find all orders
  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  // Update an order by ID
  async update(id: string, orderDto: any): Promise<Order> {
    return this.orderModel.findByIdAndUpdate(id, orderDto, { new: true });
  }

  // Delete an order by ID
  async delete(id: string): Promise<Order> {
    return this.orderModel.findByIdAndDelete(id);
  }
}
