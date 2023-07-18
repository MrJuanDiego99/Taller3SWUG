import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from '../shared/producto.model';
import { ProductoService } from '../shared/producto.service';

@Component({
  selector: 'app-inicial-productos',
  templateUrl: './inicial-productos.component.html',
  styleUrls: ['./inicial-productos.component.css']
})
export class InicialProductosComponent implements OnInit{
  productos: Observable<ProductoModel[]> | undefined;

  constructor(private productoService: ProductoService) { }

  ngOnInit(){
    this.productos = this.productoService.obtenerProductos();
  }

}
