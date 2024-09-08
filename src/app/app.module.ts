import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { TypingAnimationComponent } from './components/typing-animation/typing-animation.component';
import { GradeComponent } from './components/grade/grade.component';
import { SobreMimComponent } from './components/sobre-mim/sobre-mim.component';
import { CarroselComponent } from './components/carrosel/carrosel.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    TypingAnimationComponent,
    GradeComponent,
    SobreMimComponent,
    CarroselComponent,
    ProjetosComponent,
    ContatoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
