import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { AngularMaterialModule } from './angular-material.module';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { DockComponent } from './dock/dock.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DeterminantComponent } from './matrix/determinant/determinant.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Manifest
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Gestures
// import * as Hammer from 'hammerjs';
// import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

// Services
import { SidenavService } from './services/SidenavService';
import { MatrixComponent } from './matrix/matrix/matrix.component';

// Gesture
// export class HammerConfig extends HammerGestureConfig {
//   overrides = {
//     swipe: { direction: Hammer.DIRECTION_ALL },
//     pinch: { enable: false },
//     rotate: { enable: false }
//   } as any;
// }

// Translation AOT
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    DockComponent,
    DeterminantComponent,
    MatrixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    SidenavService
    // {
    //   provide: HAMMER_GESTURE_CONFIG,
    //   useClass: HammerConfig,
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
