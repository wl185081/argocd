import { Injectable } from '@nestjs/common';
import { OrderDTO } from './dto/OrderDTO.dto';


let orderStore:OrderDTO[] = []

@Injectable()
export class AppService {
  
  getOrderByID(orderId: string) {
    return orderStore.find( (o:OrderDTO) => o.id == orderId)
  }

  getAllOrders() {
    return orderStore
  }

  newOrder(order: OrderDTO) {
    const exists = orderStore.find ( (o:OrderDTO) => {
      return o.name == order.name &&
             o.item == order.item &&
             o.date == order.date
    })
    if(exists) return false
    order.id = "Order:" + (orderStore.length +1)
    orderStore.push(order)
    return order.id;
  }
}
