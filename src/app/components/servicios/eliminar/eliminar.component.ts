import { Component, OnInit } from '@angular/core';
import { ServiciosResponse } from 'src/app/models/servicios-response';
import { ServicioService } from 'src/app/service/servicio.service';

declare var $: any;
declare var jQuery: any;
declare var dt : 'datatables.net';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss']
})
export class EliminarComponent implements OnInit {
  data:any;

 
  // lstcargos:ServiciosResponse[]=[];
  constructor(private serviciosService:ServicioService) { }

  ngOnInit(): void {
     this.CargarServicios();
  }

  // async CargarCargos(){

  //   const result = await this.serviciosService.ViewRecords();
  //   this.lstcargos=result;
  //   console.log(this.lstcargos);
  
  // }


  async CargarServicios(){
    let jq=this;
    const result = await this.serviciosService.ViewRecords();
    this.data=result;
    //console.log(this.lstcargos);
    $(document).ready(function () {
      $('#servicio').dataTable(
 {
          retrieve:true,
          pageLength:3,
          pagingType:'full_numbers',
          
          language:{
            url:'//cdn.datatables.net/plug-ins/1.12.1/i18n/es-ES.json'
          }
        }
      );
  });
  
  }
  EliminarRegistro(id:any){
    console.log(id);
    this.serviciosService.DeleteRecord(id).subscribe(result=>{});
    this.CargarServicios();

  }

}
