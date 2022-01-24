import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgbdCollapseBasicModule } from './app/collapse-basic.module';

//import { NgbdCollapseBasicModule } from './app/collapse-basic.module';

platformBrowserDynamic().bootstrapModule(NgbdCollapseBasicModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));