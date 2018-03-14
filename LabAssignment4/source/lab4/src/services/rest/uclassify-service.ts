import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class UClassifyService {
 
    constructor(private http:Http) {
 
    }
 
    searchSentiment(movieDescription) {
        var url= window.location.origin + "/v1/uClassify/Sentiment/classify/?readKey=RiI5dO1glGLc&text=" + encodeURI(movieDescription);
        var response = this.http.get(url).map(res => res.json());
        return response;
    }    
}