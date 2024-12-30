import { Controller, Post, Get, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  async addPayment(@Body() paymentDto: any) {
    return this.paymentsService.addPayment(paymentDto);
  }

  @Get()
  async getAllPayments() {
    return this.paymentsService.getAllPayments();
  }
}
