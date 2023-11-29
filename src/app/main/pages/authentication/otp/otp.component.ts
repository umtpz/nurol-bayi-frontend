import { Component, OnInit } from '@angular/core';
import { CoreConfigService } from '@core/services/config.service';
import { takeUntil, first } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  public passwordTextType: boolean;
  public coreConfig: any;
  private _unsubscribeAll: Subject<any>;

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

  ngOnInit(): void {

    
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      this.coreConfig = config;
    });
  }


  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }
}
