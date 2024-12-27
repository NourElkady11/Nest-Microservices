import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review, ReviewDocument } from './review.schema';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(Review.name, 'ordersDB') private readonly reviewModel: Model<ReviewDocument>,
  ) {}

  async addReview(reviewDto: any): Promise<Review> {
    const newReview = new this.reviewModel(reviewDto);
    return newReview.save();
  }

  async getAllReviews(): Promise<Review[]> {
    return this.reviewModel.find().exec();
  }
}
