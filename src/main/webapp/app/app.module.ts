import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { BloodDonorSharedModule } from 'app/shared/shared.module';
import { BloodDonorCoreModule } from 'app/core/core.module';
import { BloodDonorAppRoutingModule } from './app-routing.module';
import { BloodDonorHomeModule } from './home/home.module';
import { BloodDonorEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    BloodDonorSharedModule,
    BloodDonorCoreModule,
    BloodDonorHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    BloodDonorEntityModule,
    BloodDonorAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class BloodDonorAppModule {}
