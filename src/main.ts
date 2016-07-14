import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr'

if (process.env.ENV === 'production') {
  enableProdMode();
}
bootstrap(AppComponent, [disableDeprecatedForms(), provideForms(), ToastsManager]);
