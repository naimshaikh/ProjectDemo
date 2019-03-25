/**
 * @author - Naim Shaikh
 * @description - This component file are List out the Domain.
 */

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddComponent } from '../add/add.component';
// -------------------------------------------------
import { Domain } from '../domain.model';
import { ManageDomainService } from '../manage-domain.service';

@Component({
  selector: 'one-talent-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  /**
   * Declear the variable
   */
  public domainList: Domain[];
  public isPopupOpened: boolean = true;

  constructor (private domainService: ManageDomainService, private dialog?: MatDialog) {
    this.domainService.getInsert().subscribe((res: boolean) => {
      if (res) {
        this.getAllDomainList();
        this.domainService.setInsert(false);
      }
    });
  }

  /**
   *  load the Domian using ngOnInit method
   */
  public ngOnInit (): void {
    this.getAllDomainList();
  }

  /**
   * Get all the Domain
   * @param  - Get domain form get getAllDomainList method
   */
  public getAllDomainList (): void {
    this.domainService.getAllDomainList()
      .subscribe(
        (data: Domain[]) => this.domainList = data);
  }
  public addDomain (): void {
    this.isPopupOpened = true;
    const dialogRef: MatDialogRef<AddComponent> = this.dialog.open(AddComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      this.isPopupOpened = false;
    });
  }

  public upadateDomain (list: Domain): void {
    this.isPopupOpened = true;
    const updateData: any = this.domainService.setDataForUpdate(list);
    const dialogRef: MatDialogRef<AddComponent> = this.dialog.open(AddComponent, {
      data: {} = updateData,

    });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      this.isPopupOpened = false;
    });
  }
  /**
   * Deletes order
   * @param deleteId - Delete record using delete id
   */
  public deleteDomainById (domainId: number): void {
    this.domainService.deleteDomainById(domainId)
      .subscribe(() => {
        this.getAllDomainList();
      });
  }

}
