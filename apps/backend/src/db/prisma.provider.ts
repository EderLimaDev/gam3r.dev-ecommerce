import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaProvider
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private _pedido: any;
    public get pedido(): any {
        return this._pedido;
    }
    public set pedido(value: any) {
        this._pedido = value;
    }
  private _itemPedido: any;
    public get itemPedido(): any {
        return this._itemPedido;
    }
    public set itemPedido(value: any) {
        this._itemPedido = value;
    }
  private _pedidoEntrega: any;
    public get pedidoEntrega(): any {
        return this._pedidoEntrega;
    }
    public set pedidoEntrega(value: any) {
        this._pedidoEntrega = value;
    }
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
 
}