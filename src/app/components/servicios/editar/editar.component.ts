import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiciosResponse } from 'src/app/models/servicios-response';
import { ServicioService } from 'src/app/service/servicio.service';
declare var $: any;
declare var jQuery: any;
declare var dt : 'datatables.net';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})


export class EditarComponent implements OnInit {
 
    
  frmRegistro: FormGroup;
  idFK:any=0;
  misServicios:ServiciosResponse[]=[];
  validationMessage = {
    nombre : [
      { type : 'required', message:'El nombre es obligatorio'}
    ]
  };
  constructor(private fb: FormBuilder,private serviciosService:ServicioService) { 

    this.frmRegistro = this.fb.group({
      nombre: new FormControl('',Validators.compose([Validators.required]))
    });
  }

  ngOnInit(): void {
    this.LoadServicios();
  }

  async LoadServicios(){
    

    let jq=this;
    const result = await this.serviciosService.ViewRecords();
    this.misServicios=result;
   
   
  
  }

  verCodigo(){
    this.serviciosService.VerRecordSingle(this.idFK).subscribe((res:ServiciosResponse)=>{
    
      this.frmRegistro.setValue({nombre:res.nombre});
     });
    
  }

  onEdit() {
    let jq = this;
    if ((this.frmRegistro.valid)) {
         this.serviciosService.UpdateRecord(this.frmRegistro.value,this.idFK).subscribe(result=>{
        
      })
      
    } 
  }


}



