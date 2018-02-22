import {Injectable} from '@angular/core';
import { Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
    constructor(private http: Http) {
    }
    
    getBook(id) {
        var _url = 'http://it-ebooks-api.info/v1/book/'+id;
        return this.http.get(_url)
          .map((resp: Response) =>(resp.json()));
    }
}
