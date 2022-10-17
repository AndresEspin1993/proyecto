import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasComponent } from './components/citas/citas.component';
import { CrearComponent } from './components/citas/crear/crear.component';
import { ListarComponent } from './components/citas/listar/listar.component';
import { ClientesComponent } from './components/personas/clientes/clientes.component';
import { CrearClienteComponent } from './components/personas/clientes/crear-cliente/crear-cliente.component';
import { ListarClienteComponent } from './components/personas/clientes/listar-cliente/listar-cliente.component';
import { ColaboradoresComponent } from './components/personas/colaboradores/colaboradores.component';
import { CrearColaboradorComponent } from './components/personas/colaboradores/crear-colaborador/crear-colaborador.component';
import { ListarColaboradorComponent } from './components/personas/colaboradores/listar-colaborador/listar-colaborador.component';
import { PersonasComponent } from './components/personas/personas.component';
import { CrearservicioComponent } from './components/servicios/crearservicio/crearservicio.component';
import { EditarComponent } from './components/servicios/editar/editar.component';
import { EliminarComponent } from './components/servicios/eliminar/eliminar.component';
import { LstserviciosComponent } from './components/servicios/lstservicios/lstservicios.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NavMenuComponent } from './components/shared/nav-menu/nav-menu.component';

const routes: Routes = [
  {path:'inicio',component:NavMenuComponent,
    children:[  
       {path:'citas',component:CitasComponent,
        children:[ 
         {path:'progcita',component:CrearComponent},
         {path:'listarcita',component:ListarComponent},
         {path:'**',pathMatch:'full',redirectTo:'listarcita'}
       ]   
     },
     {path:'personas',component:PersonasComponent,
        children:[
          {path:'clientes',component:ClientesComponent,
            children:[
             {path:'crearcliente',component:CrearClienteComponent},
             {path:'vercliente',component:ListarClienteComponent},
             {path:'**',pathMatch:'full',redirectTo:'vercliente'}

     
            ]     
          },
          {path:'colaboradores',component:ColaboradoresComponent,
             children:[
                {path:'crearcolaborador',component:CrearColaboradorComponent},
                {path:'vercolaborador',component:ListarColaboradorComponent},
                {path:'**',pathMatch:'full',redirectTo:'vercolaborador'}
              ]
          },
         ]      
     },
     {path:'serviciosindex',component:ServiciosComponent,
       children:[ 
        {path:'crearservicio',component:CrearservicioComponent},
        {path:'editar',component:EditarComponent},
        {path:'eliminar',component:EliminarComponent},
        {path:'listar',component:LstserviciosComponent},
        {path:'**',pathMatch:'full',redirectTo:'listar'}
      ]   
    }
   ] 

  },

{path:'**',pathMatch:'full',redirectTo:'inicio'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
