import { Component, OnInit } from '@angular/core';
import { ServiciosResponse } from 'src/app/models/servicios-response';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss']
})
export class EliminarComponent implements OnInit {

 
  lstcargos:ServiciosResponse[]=[];
  constructor(private serviciosService:ServicioService) { }

  ngOnInit(): void {
    this.CargarCargos();
  }

  async CargarCargos(){

    const result = await this.serviciosService.ViewRecords();
    this.lstcargos=result;
    console.log(this.lstcargos);
  
  }

  EliminarRegistro(id:any){
    console.log(id);
    this.serviciosService.DeleteRecord(id).subscribe(result=>{});
    this.CargarCargos();

  }

}
