import { Component, OnInit, HostListener } from '@angular/core';
import { CoreConfigService } from '@core/services/config.service';
import { takeUntil, first } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-auth-forgot-password-v2',
  templateUrl: './auth-forgot-password-v2.component.html',
  styleUrls: ['./auth-forgot-password-v2.component.scss'],
})

export class AuthForgotPasswordV2Component implements OnInit {
  public passwordTextType: boolean;
  public coreConfig: any;
  private _unsubscribeAll: Subject<any>;

  showInfo = false;
  passwordChanged = false;


  constructor(private _coreConfigService: CoreConfigService,) {
    // Configure the layout
    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        menu: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        customizer: false,
        enableLocalStorage: false
      }
    };



    this._unsubscribeAll = new Subject();

  }

  @HostListener('document:click', ['$event.target'])
  onClick(element: HTMLElement) {
    if (element.classList.contains('i-button')) {
      this.showInfo = true
    }
    else{
      this.showInfo = false
    }
  }

  ngOnInit(): void {


    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      this.coreConfig = config;
    });


  }


  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  changePassword(){
    this.passwordChanged = true;
  }
}