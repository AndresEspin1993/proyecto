import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent implements OnInit {


  frmRegistro:FormGroup;

  validationMessage={

    id: [
    
    {type:'required', message:'el id es obligatorio'}
    ], 
    nombre: [
    
      {type:'required', message:'ingrese su nombre'}
      ],

      apellido: [
    
        {type:'required', message:'ingrese su apellido'}
        ],

        email: [
    
          {type:'required', message:'el email es requerido'}
          ],

          fk_idsexo: [
    
            {type:'required', message:'ingrese el genero'}
            ],

            fk_idcar: [
    
              {type:'required', message:'campo requerido'}
              ]
    
    };

  constructor(private fb: FormBuilder) { 

    this.frmRegistro=this.fb.group({
      id: new FormControl('',Validators.compose([Validators.required])),
      nombre: new FormControl('',Validators.compose([Validators.required])),
      apellido: new FormControl('',Validators.compose([Validators.required])),
      email: new FormControl('',Validators.compose([Validators.required])),
      fk_idsexo: new FormControl('',Validators.compose([Validators.required])),
      fk_idcar: new FormControl('',Validators.compose([Validators.required])),



    });




  }

  ngOnInit(): void {
  }

}
