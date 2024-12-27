import { Controller, Post, Get, Body } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  async addReview(@Body() reviewDto: any) {
    return this.reviewsService.addReview(reviewDto);
  }

  @Get()
  async getAllReviews() {
    return this.reviewsService.getAllReviews();
  }
}
