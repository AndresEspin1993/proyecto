import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioService } from 'src/app/service/servicio.service';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-crearservicio',
  templateUrl: './crearservicio.component.html',
  styleUrls: ['./crearservicio.component.scss']
})
export class CrearservicioComponent implements OnInit {

  frmRegistro:FormGroup;

  validationMessage={

    
    nombre: [
    
      {type:'required', message:'ingrese su nombre'}
      ],
      descripcion: [
    
        {type:'required', message:'ingrese una descripcion del servicio'}
        ]

    };
      

  constructor(private fb: FormBuilder, private servicioService:ServicioService ) { 
    this.frmRegistro=this.fb.group({
      
      nombre: new FormControl('',Validators.compose([Validators.required])),
      descripcion: new FormControl('',Validators.compose([Validators.required]))
      
  
  
  
    });
  }

  ngOnInit(): void {
  }

  onSubmitData() {
    let jQueryInstance = this;
    console.log(this.frmRegistro.value);
    if (this.frmRegistro.valid) {

      this.servicioService.InsertRecord(this.frmRegistro.value).subscribe((result)=>{
       console.log(result);
      });
      setTimeout(function(){
        //jQueryInstance.estadoProceso=-1;
      },3000);
    } else {
      Object.keys(this.frmRegistro.controls).forEach(field => {
        const control: any = this.frmRegistro.get(field);
        // handle if basic FormControl
        // tslint:disable-next-line:no-string-literal
        if (!control['controls']) {
          control.markAsTouched({ onlySelf: true });
        } else {
            // tslint:disable-next-line:no-string-literal
            const QFormArray = control['controls'];
            QFormArray.forEach((subcCtrlGp: { [x: string]: {}; get: (arg0: string) => any; }) => {
              // tslint:disable-next-line:no-string-literal
              Object.keys(subcCtrlGp['controls']).forEach(subField => {
                const nestedControl = subcCtrlGp.get(subField);
                nestedControl.markAsTouched({ onlySelf: true });
              });
            });
          }
      });
    }
  }


}