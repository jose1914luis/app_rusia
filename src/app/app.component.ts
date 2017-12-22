import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';
import { CrearCuentaPage } from '../pages/crear-cuenta/crear-cuenta';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = ListPage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    // used for an example of ngFor and navigation
    /*this.pages = [
      { title: 'Mis eventos', component: HomePage },
      { title: 'Proximos Tours', component: ProximoPage },
      { title: 'Punto de Encuentro', component: PuntoPage },
      { title: 'Mapas', component: MapaPage },
      { title: 'Promociones', component: PromocionPage },
      { title: 'Preguntas F.A.Q.', component: FaqPage },
      { title: 'Contacto', component: ContactoPage },
      { title: 'Mi perfil', component: PerfilPage }
    ];*/

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
