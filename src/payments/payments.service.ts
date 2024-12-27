import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment, PaymentDocument } from './payments.schema';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectModel(Payment.name, 'ordersDB') private readonly paymentModel: Model<PaymentDocument>,
  ) {}

  async addPayment(paymentDto: any): Promise<Payment> {
    const newPayment = new this.paymentModel(paymentDto);
    return newPayment.save();
  }

  async getAllPayments(): Promise<Payment[]> {
    return this.paymentModel.find().exec();
  }
}
