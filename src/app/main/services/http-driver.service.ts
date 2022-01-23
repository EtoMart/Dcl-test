import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DriverDataInterface } from 'src/app/main/interfaces/form-data';
import { driverHttpAuthToken } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpDriverService {
  constructor(private http: HttpClient) {}

  public postData(driverData: DriverDataInterface): any {
    console.log('HttpPostData');
    const body = {
      last_name: driverData.lastName,
      first_name: driverData.firstName,
      patronymic: driverData.middleName,
      birth_date: driverData.birthday,
      credential: [
        {
          credential_type: 'DRIVER_LICENSE',
          series: driverData.driverLicence.slice(0, 4),
          number: driverData.driverLicence.slice(4, 10),
          issue_date: driverData.startExpDate,
        },
      ],
      address: [],
      contact: [],
      driving_experience_started: driverData.startExpDate,
    };
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: driverHttpAuthToken.token,
      }),
    };
    return this.http
      .post(
        'https://market.polismarket.store/v2/insured_objects/drivers',
        body,
        options
      );
  }
}