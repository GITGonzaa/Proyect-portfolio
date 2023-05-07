import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonloginComponent } from './components/buttonlogin/buttonlogin.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoApComponent } from './components/navbar/logo-ap/logo-ap.component';
import { CabeceraComponent } from './components/navbar/cabecera/cabecera.component';
import { RedessocComponent } from './components/navbar/redessoc/redessoc.component';
import { PortadaComponent } from './components/portada/portada.component';
import { FotoperfilComponent } from './components/portada/fotoperfil/fotoperfil.component';
import { InfosobremiComponent } from './components/portada/infosobremi/infosobremi.component';
import { MenunavintComponent } from './components/portada/menunavint/menunavint.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HeaderComponent } from './components/header/header.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonloginComponent,
    CarouselComponent,
    EducacionComponent,
    ExperienciaComponent,
    FooterComponent,
    NavbarComponent,
    LogoApComponent,
    CabeceraComponent,
    RedessocComponent,
    PortadaComponent,
    FotoperfilComponent,
    InfosobremiComponent,
    MenunavintComponent,
    ProyectosComponent,
    SkillsComponent,
    HeaderComponent,
    CuerpoComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
