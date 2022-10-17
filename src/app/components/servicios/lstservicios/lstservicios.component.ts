import { Component, OnInit } from '@angular/core';
import { ServiciosResponse } from 'src/app/models/servicios-response';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-lstservicios',
  templateUrl: './lstservicios.component.html',
  styleUrls: ['./lstservicios.component.scss']
})
export class LstserviciosComponent implements OnInit {

  lstservicios:ServiciosResponse[]=[];
  constructor(private serviciosService:ServicioService) { }

  ngOnInit(): void {
    this.CargarCargos();
  }

  async CargarCargos(){

    const result = await this.serviciosService.ViewRecords();
    this.lstservicios=result;
    console.log(this.lstservicios);
  
  }
}
