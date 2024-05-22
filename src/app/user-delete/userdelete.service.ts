import { Injectable } from '@angular/core';
import { UserDetailsVO} from '../user-signup/userdetails';
import { Http, Response, Headers, ResponseOptions, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class UserdeleteService {

appstate;
headers: Headers;
  options: RequestOptions;
  constructor(private http:Http) {
      this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
        this.options = new RequestOptions({ headers: this.headers });
    }
  delete(user_delete:UserDetailsVO) : Observable<Object> {
      const params = new URLSearchParams();
      params.set('ulaId', user_delete.ulaId);
      params.set('remarks', user_delete.remarks);
    return this.http
        .put('http://localhost:8080/deleteProfile/', params, this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }
  

  private extractData(res:Response) {
  let body = res.json();
  return body || {};
}

private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
       console.error("if: ")
      const body = error.json() || '';
      console.error("error: "+body)
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      console.error("else: ")
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
