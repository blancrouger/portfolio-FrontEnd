import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { LogoProgramComponent } from './components/logo-program/logo-program.component';
import { RedSocialComponent } from './components/red-social/red-social.component';
import { BtnLoggingComponent } from './components/btn-logging/btn-logging.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { ExperienciaParticularComponent } from './components/experiencia-particular/experiencia-particular.component';
import { EducacionesComponent } from './components/educaciones/educaciones.component';
import { EducacionParticularComponent } from './components/educacion-particular/educacion-particular.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillParticularComponent } from './components/skill-particular/skill-particular.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectoParticularComponent } from './components/proyecto-particular/proyecto-particular.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoProgramComponent,
    RedSocialComponent,
    BtnLoggingComponent,
    PerfilComponent,
    AcercaDeComponent,
    ExperienciasComponent,
    ExperienciaParticularComponent,
    EducacionesComponent,
    EducacionParticularComponent,
    SkillsComponent,
    SkillParticularComponent,
    ProyectosComponent,
    ProyectoParticularComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
