/**
 * @author - Naim Shaikh
 * @description - This service file are communication between component to server.
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/';
// -------------------------------------------------
import { Domain } from './domain.model';

@Injectable({
  providedIn: 'root',
})
export class ManageDomainService {

  /*  Declare the URL variable for server */
  public domainUrl: string = 'http://localhost:3000/domain';
  public behaviorSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public updateData: BehaviorSubject<Domain> = new BehaviorSubject(new Domain());

  /* Inject http Client service */
  constructor (private http: HttpClient) {
  }

  public setInsert (data: boolean): void {
    this.behaviorSubject.next(data);
  }

  public getInsert (): Observable<boolean> {
    return this.behaviorSubject.asObservable();
  }

  public setDataForUpdate (data: Domain): void {
    this.updateData.next(data);
  }

  public getDataForUpdate (): Observable<Domain> {
    return this.updateData.asObservable();
  }
  /* getAllDomain method are get all domain details from the server*/

  public getAllDomainList (): Observable<Domain[]> {
    return this.http.get<Domain[]>(this.domainUrl);
  }

  public getAllDomainListById (id: number): Observable<Domain[]> {
    console.log(this.domainUrl + '/' + id);
    return this.http.get<Domain[]>(this.domainUrl + '/' + id);
  }

  /**
   * CreatesDomain method are add new domain in the server
   * @param domain  - get the domain data
   */
  public createDomain (domainData: Domain): Observable<Domain> {
    return this.http.post<Domain>(this.domainUrl, domainData);
  }
  /**
   * updateDomain method are update the domain deatils on server
   * @param domain - get update deatils as per domain
   */
  public updateDomain (domain: Domain): Observable<Domain> {
    return this.http.put<Domain>(this.domainUrl + '/' + domain.id, domain);
  }
  /**
   * deleteDomainById method are used for delete the record from order
   * @param domainId - delete the record as per domain id
   */
  public deleteDomainById (domainId: number): Observable<Domain> {
    return this.http.delete<Domain>(this.domainUrl + '/' + domainId);
  }

}
