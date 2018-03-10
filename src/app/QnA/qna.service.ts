import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class QnaService {
    public url: string;

    constructor(public http: Http) {
        this.url = 'http://localhost:8080/QnA';
    }
    getData(): Observable<Response> {
        return this.http
            .get(this.url)
            .map((response: Response) =>
                <any>response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
