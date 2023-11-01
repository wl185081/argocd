import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { OrderDTO } from './dto/OrderDTO.dto';


function delay(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({cmd: 'new_order'})
  newOrder(order: OrderDTO): string {
    delay(1000)
    const result = this.appService.newOrder(order) 
    if(!result) {
      return "Order exists"
    } else {
      return result;
    }
  }

  @MessagePattern({cmd: 'get_order'})
  getOrder(id: string): OrderDTO {
    return this.appService.getOrderByID(id)
  }

  @MessagePattern({cmd: 'get_orders'})
  getOrders(): OrderDTO[] {
    return this.appService.getAllOrders()
  }
}
