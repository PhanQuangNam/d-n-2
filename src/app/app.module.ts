import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { HomeComponent } from './home/home.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { BannerComponent } from './banner/banner.component';
import { ServicesService } from './service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TrangchuComponent,
    HomeComponent,
    TintucComponent,
    GioithieuComponent,
    LienheComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
    
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
