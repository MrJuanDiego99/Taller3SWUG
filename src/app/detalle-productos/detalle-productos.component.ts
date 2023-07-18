import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../shared/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoModel } from '../shared/producto.model';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent implements OnInit{
  idProducto = '';
  producto = new ProductoModel("", "", "", "");

  constructor(private productoService: ProductoService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.idProducto = this.route.snapshot.params['idProducto'];
    console.log("El id de Producto es :" + this.idProducto);

    if (this.idProducto) {
      this.productoService.obtenerProducto(this.idProducto).subscribe(data => {
        this.producto = data[0];
      }, error => {
        console.log(error);
      });
    }
    else {
      //Nuevo Producto
      console.log('Nuevo Producto');
    }
  }
}
