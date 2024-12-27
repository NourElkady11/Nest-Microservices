import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './products.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name, 'ordersDB') private readonly productModel: Model<ProductDocument>,
  ) {}

  async addProduct(productDto: any): Promise<Product> {
    const newProduct = new this.productModel(productDto);
    return newProduct.save();
  }

  async getAllProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async updateProduct(id: string, productDto: any): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, productDto, { new: true }).exec();
  }

  async deleteProduct(id: string): Promise<Product> {
    return this.productModel.findByIdAndDelete(id).exec();
  }
}
