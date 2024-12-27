import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderDto } from './order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  createOrder(@Body() orderDto: OrderDto) {
    return this.ordersService.create(orderDto);
  }

  @Get()
  getAllOrders() {
    return this.ordersService.findAll();
  }

  @Put(':id')
  updateOrder(@Param('id') id: string, @Body() orderDto: OrderDto) {
    return this.ordersService.update(id, orderDto);
  }

  @Delete(':id')
  deleteOrder(@Param('id') id: string) {
    return this.ordersService.delete(id);
  }
}
