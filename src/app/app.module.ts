import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/shared/nav-menu/nav-menu.component';
import { ClientesComponent } from './components/personas/clientes/clientes.component';
import { ColaboradoresComponent } from './components/personas/colaboradores/colaboradores.component';
import { PersonasComponent } from './components/personas/personas.component';
import { CitasComponent } from './components/citas/citas.component';
import { CrearComponent } from './components/citas/crear/crear.component';
import { ListarComponent } from './components/citas/listar/listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearColaboradorComponent } from './components/personas/colaboradores/crear-colaborador/crear-colaborador.component';
import { ListarColaboradorComponent } from './components/personas/colaboradores/listar-colaborador/listar-colaborador.component';
import { CrearClienteComponent } from './components/personas/clientes/crear-cliente/crear-cliente.component';
import { ListarClienteComponent } from './components/personas/clientes/listar-cliente/listar-cliente.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { CrearservicioComponent } from './components/servicios/crearservicio/crearservicio.component';
import { EditarComponent } from './components/servicios/editar/editar.component';
import { EliminarComponent } from './components/servicios/eliminar/eliminar.component';
import { HttpClientModule } from '@angular/common/http';
import { LstserviciosComponent } from './components/servicios/lstservicios/lstservicios.component';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ClientesComponent,
    ColaboradoresComponent,
    PersonasComponent,
    CitasComponent,
    CrearComponent,
    ListarComponent,
    CrearColaboradorComponent,
    ListarColaboradorComponent,
    CrearClienteComponent,
    ListarClienteComponent,
    ServiciosComponent,
    CrearservicioComponent,
    EditarComponent,
    EliminarComponent,
    LstserviciosComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
