import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mainComponents, mainRoutes } from './main.routes';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [...mainComponents, MainComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class MainModule { }
