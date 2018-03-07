import { Injectable } from '@angular/core';
import { NgForage } from "@ngforage/ngforage-ng4";

@Injectable()
export class LocalforageService {

    constructor(private ngForage: NgForage) {}

    public setItem(options) : Promise<any> {
        console.log(options);
        if(!options || !options.key) {
           return Promise.reject(null);
        }
        return this.ngForage.setItem(options.key, options.value).then(data => {
             return Promise.resolve(data);
        }, error => {
             return Promise.reject(error);
        });
    };

    public getItem(options) : Promise<any> {
        if(!options || !options.key) {
            return Promise.reject(null);
        }
        return this.ngForage.getItem(options.key).then(data => {
             return Promise.resolve(data);
        }, error => {
             return Promise.reject(error);
        });
    };

    public removeItem(options) : Promise<any> {
        if(!options || !options.key) {
          return Promise.reject(null);
        }
        return this.ngForage.removeItem(options.key).then(data => {
             return Promise.resolve(data);
        }, error => {
             return Promise.reject(error);
        });
    };

    public removeAllItem() : Promise<any> {
        return this.ngForage.clear().then(data => {
             return Promise.resolve(data);
        }, error => {
             return Promise.reject(error);
        });
    };

}
