/**
 * @author - Naim Shaikh
 * @description - This model file are represent of Domain Model.
 *
 * @property domainId is unique for every record which is auto increment.
 * @property domainNAme is for name of domain
 * @property description is for description of domain
 * @property createdDate is use when domian create
 * @property modifiedDate is use when domain modified
 * @property deleteDate is use when domain deleted
 */

export class Domain {
    public id: number;
    public domainName: string;
    public description: string;
    public createdDate: Date;
    public modifiedDate?: Date;
    public deleteDate?: Date;

}
