import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookListService {
    constructor(private http: Http) {

    }
    
    getBooks() {
        var _url = "http://it-ebooks-api.info/v1/search/book/php";
        return this.http.get(_url)
          .map((resp: Response) =>(resp.json()));
    }
}
