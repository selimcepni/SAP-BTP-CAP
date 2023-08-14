using { anubhav.db as anubhav } from '../db/datamodel';


@path : '/sap/opu/odata/sap/API_SALES_ORDER'
service MyService
{
    entity OrderSet as
        projection on anubhav.orders;
}
