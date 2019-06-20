import { PopoverController, NavController } from '@ionic/angular';
import { LanguagePopoverPage } from '../../pages/language-popover/language-popover.page';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private authService: AuthenticationService, private translate: TranslateService, private popoverCtrl: PopoverController,
              public navCtrl: NavController) { }

  async openLanguagePopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

  ngOnInit() {
  }

  logout( ) {
    this.authService.logout();
  }

  public gotoRegister() {
    if (this.authService.isMaster()) {
      this.navCtrl.navigateForward('/master');
    }
  }
}
