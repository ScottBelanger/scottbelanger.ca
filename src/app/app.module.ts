import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MdAutocompleteModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdInputModule,
  MdRadioModule,
  MdSelectModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdMenuModule,
  MdSidenavModule,
  MdToolbarModule,
  MdListModule,
  MdGridListModule,
  MdCardModule,
  MdTabsModule,
  MdExpansionModule,
  MdButtonToggleModule,
  MdButtonModule,
  MdChipsModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdProgressBarModule,
  MdDialogModule,
  MdTooltipModule,
  MdSnackBarModule
} from "@angular/material";

import { KeysPipe } from "./pipes/object-key-pipe";

import { Ng2PageScrollModule } from "ng2-page-scroll";

import { routes } from "./routes";
import { AppComponent } from "./app.component";
import { HeaderBarComponent } from "./common/header-bar/header-bar.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { FooterBarComponent } from "./common/footer-bar/footer-bar.component";
import { InteractiveMapComponent } from "./interactive-map/interactive-map.component";
import { ProgrammingBackgroundComponent } from "./programming-background/programming-background.component";
import { MyPhotosComponent } from "./my-photos/my-photos.component";
import { MyHobbiesComponent } from "./my-hobbies/my-hobbies.component";
import { MyEducationComponent } from "./my-education/my-education.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { HobbiesCardComponent } from "./hobbies-card/hobbies-card.component";

import "hammerjs";
import { JqvmapGuideCardComponent } from "./common/jqvmap-guide-card/jqvmap-guide-card.component";
import { CardflipGuideCardComponent } from "./common/cardflip-guide-card/cardflip-guide-card.component";

//import { NavigateService } from './services/navigate.service';
import { ReduxStoreInitializer } from "./store";
import { NgReduxModule } from "@angular-redux/store";
import { NgReduxRouterModule } from "@angular-redux/router";

const routing = RouterModule.forRoot(routes);
const MdModules = [
  MdAutocompleteModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdInputModule,
  MdRadioModule,
  MdSelectModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdMenuModule,
  MdSidenavModule,
  MdToolbarModule,
  MdListModule,
  MdGridListModule,
  MdCardModule,
  MdTabsModule,
  MdExpansionModule,
  MdButtonToggleModule,
  MdButtonModule,
  MdChipsModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdProgressBarModule,
  MdDialogModule,
  MdTooltipModule,
  MdSnackBarModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HomePageComponent,
    FooterBarComponent,
    InteractiveMapComponent,
    ProgrammingBackgroundComponent,
    MyPhotosComponent,
    MyHobbiesComponent,
    MyEducationComponent,
    AboutMeComponent,
    HobbiesCardComponent,
    KeysPipe,
    JqvmapGuideCardComponent,
    CardflipGuideCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing,
    MdModules,
    Ng2PageScrollModule.forRoot(),
    NgReduxModule,
    NgReduxRouterModule
  ],
  exports: [MdModules],
  providers: [ReduxStoreInitializer],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private reduxStoreInitializer: ReduxStoreInitializer) {
    this.reduxStoreInitializer.initialize();
  }
}
