// app-observation.component.ts

import { Component, ElementRef, ViewChild } from '@angular/core';

interface Item {
  basvuruNo: number;
  tcKimlikNo: number;
  adSoyad: string;
  tarih: string;
  talepTutar: string;
  onaylananTutar: string;
  status: string;
}

@Component({
  selector: 'app-app-observation',
  templateUrl: './app-observation.component.html',
  styleUrls: ['./app-observation.component.scss']
})

export class AppObservationComponent {

  selectedAction: string | null = "İşlemi Seçiniz";
  showActionDropdown: boolean = false;
  isCancellationConfirmed: boolean = false; //* cancel confirmation status
  isSmsSent: boolean = false; //* SMS sent status
  showSmsConfirmation: boolean = false;  //* for SMS Confirmation
  selectedApplicationId: number | null = null;
  showCancelConfirmation = false; //* cancel modal

  items: Item[] = [
    // Table Data
    { basvuruNo: 123456, tcKimlikNo: 12345678901, adSoyad: 'NGSS', tarih: '01/01/2023', talepTutar: '10.000 TL', onaylananTutar: '9.000 TL', status: 'Onaylandı' },
    { basvuruNo: 123457, tcKimlikNo: 12345678901, adSoyad: 'NGSS', tarih: '01/01/2023', talepTutar: '25.000 TL', onaylananTutar: '20.000 TL', status: 'Onaylandı' },
  ];
  getDefaultStartDate(): string {
    const currentDate = new Date();
    const defaultStartDate = new Date(currentDate);
    defaultStartDate.setDate(currentDate.getDate() - 90);

    const year = defaultStartDate.getFullYear();
    const month = ('0' + (defaultStartDate.getMonth() + 1)).slice(-2); 
    const day = ('0' + defaultStartDate.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
  }

   // open modal for selecting
   openCancelConfirmation(): void {
    this.showCancelConfirmation = true;
  }

  //* cancel process
  confirmCancellation(): void {
    this.isCancellationConfirmed = true;
  }

  //* close modal
  closeCancelConfirmation(): void {
    this.showCancelConfirmation = false;
    this.isCancellationConfirmed = false;
  }

  //* detects select change
  onActionChange(action: string): void {
    this.closeCancelConfirmation();
    
    switch (action) {
      case 'İptal':
        this.openCancelConfirmation();
        break;
      case 'SMS':
        this.showSmsConfirmation = true;
        break;
    }
  }

  //* Method to close SMS confirmation modal
  closeSmsConfirmation(): void {
    this.showSmsConfirmation = false;
    this.isSmsSent = false;
  }

  //* Handle SMS confirmation
  confirmSmsSending(): void {
    this.isSmsSent = true;  //* Set SMS sent
  }

  openDropdown(basvuruNo: number): void {
    this.showActionDropdown = true;
    this.selectedApplicationId = basvuruNo;
    const element: HTMLElement = document.querySelector('.action-dropdown select') as HTMLElement;
    element.focus();
  }

  constructor() { }

  ngOnInit(): void {
  }
}
