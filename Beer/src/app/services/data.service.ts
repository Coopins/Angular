import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { IBeer } from '../interfaces/ibeer';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apiService: ApiService) { }

async getBeers(): Promise<IBeer[]> {
return await this.apiService.get();
}
}
