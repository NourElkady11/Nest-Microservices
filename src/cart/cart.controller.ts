import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async addToCart(@Body() item: any) {
    return this.cartService.addItem(item);
  }

  @Get(':userId')
  async viewCart(@Param('userId') userId: string) {
    return this.cartService.getCart(userId);
  }

  @Delete(':id')
  async removeFromCart(@Param('id') id: string) {
    return this.cartService.removeItem(id);
  }
}
