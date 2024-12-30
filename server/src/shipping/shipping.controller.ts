import { Controller, Post, Get, Body } from '@nestjs/common';
import { ShippingService } from './shipping.service';

@Controller('shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Post()
  async addShippingDetails(@Body() shippingDto: any) {
    return this.shippingService.addShippingDetails(shippingDto);
  }

  @Get()
  async getAllShippingDetails() {
    return this.shippingService.getAllShippingDetails();
  }
}
