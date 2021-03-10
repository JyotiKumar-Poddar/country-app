import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountryApiService } from './services/country-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CountryApiService]
})

export class AppComponent implements OnInit {
 title = 'country-app';
  theForm: FormGroup;
  public countryDetail: any;
  public countryName: string;
  public countriesList: any;

  constructor(private countryApiService: CountryApiService, private fb: FormBuilder){
    this.createForm();
  }

  createForm(){
    this.theForm = this.fb.group({
      countries: ['']
    })
    this.theForm.get('countries').setValue('default');
  }
//
  ngOnInit() {
    this.countryApiService.getCountries().subscribe(res => {
      this.countriesList = res;
    });
    this.theForm.get('countries').valueChanges.subscribe(val => {
      if (val !== 'default') {
        this.countryApiService.getCountryDetail(val).subscribe(details => {
          this.countryDetail = details;
        });
      } else {
        this.countryDetail = null;
      }
    });
  }
}
