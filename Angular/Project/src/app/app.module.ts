import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {TranslateService} from 'ng2-translate';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { HomeService } from './home/home.service';
import { HttpModule , Http} from '@angular/http';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { UniversalTranslateLoader } from '@ngx-universal/translate-loader';
// import { HttpClient } from '@angular/common/http';

// export function translateFactory(platformId: any, http: HttpClient): TranslateLoader {
//   const browserLoader = new TranslateHttpLoader(http);
//
//   return new UniversalTranslateLoader(platformId, browserLoader, './public/assets/i18n');
// }


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // TranslateModule.forRoot()
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: (translateFactory),
    //     deps: [ Http]
    //   }
    // })
  ],
  providers: [HomeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
