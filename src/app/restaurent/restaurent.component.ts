import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurentData } from './restaurent.model';
@Component({
  selector: 'app-restaurent',
  templateUrl: './restaurent.component.html',
  styleUrls: ['./restaurent.component.css']
})

export class RestaurentComponent implements OnInit {

  formValue!: FormGroup
  restaurentModelObj: RestaurentData = new RestaurentData;
  allRestaurentData: any;
  showAdd!: boolean;
  showBtn!: boolean;
  showingForm: boolean = false;
  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      address: [''],
      services: [''],
    })
    this.getAllData();
  }
  clickAddResto() {
    this.formValue.reset();
    this.showAdd = true;
    this.showBtn = false;
    this.showingForm = true;
  }
  closeForm(): void {
    this.showingForm = false;
  }

  addRestaurent() {
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.phone = this.formValue.value.phone;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.services = this.formValue.value.services;
    console.log(this.restaurentModelObj, 'here you see');
    this.api.postRestaurent(this.restaurentModelObj).subscribe(res => {
      console.log(res);
      alert("Restaurent Added Successfully");
      this.formValue.reset();

      let ref = document.getElementById('close');
      ref?.click();

      this.getAllData();

    }, err => {
      console.log(err);
      alert("Restaurent Added Failed!");
    })
  }

  getAllData() {
    this.api.getRestaurent().subscribe(res => {
      this.allRestaurentData = res;
    }, err => {
      console.log(err);
    })
  }

  deleteResto(data: any) {
    this.api.deleteRestaurant(data).subscribe((res: any) => {
      console.log(res);
      alert("Restaurent Deleted Successfully");
      this.getAllData();
    })
  }

  onEditResto(data: any) {
    this.showAdd = false;
    this.showBtn = true;

    this.restaurentModelObj.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['phone'].setValue(data.phone);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);
  }

}
