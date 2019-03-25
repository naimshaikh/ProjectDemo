import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { Domain } from '../domain.model';
import { ManageDomainService } from '../manage-domain.service';

@Component({
  selector: 'one-talent-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  /**
   * Declear the variable
   */
  public domainListForm: FormGroup;
  public submitted: boolean = false;
  /**
   *  inject the service.
   * @param domainService - for domain service
   * @param formBuilder - for usnig form builder in reactive forms
   */
  constructor (private domainService: ManageDomainService, private formBuilder: FormBuilder, private dialogRef: MatDialogRef<AddComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Domain, private routes: Router) {

  }

  public onNoClick (): void {
    this.dialogRef.close();
  }

  public ngOnInit (): void {
    this.domainListForm = this.formBuilder.group({
      id: [this.data.id],
      domainName: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  /**
   * addDomain method are used to add domain using reactive forms
   */

  public addDomain (id: number): void {
    if (isNaN(this.data.id)) {
      const addDomianData: Domain = this.domainListForm.value;
      this.domainService.createDomain(addDomianData).subscribe();
      this.domainService.setInsert(true);
      this.dialogRef.close();
    } else {
      this.domainService.updateDomain(this.domainListForm.value);
      this.dialogRef.close();
    }

  }
}
