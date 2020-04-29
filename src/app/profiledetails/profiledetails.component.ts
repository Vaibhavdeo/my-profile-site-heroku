import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiledetails',
  templateUrl: './profiledetails.component.html',
  styleUrls: ['./profiledetails.component.css']
})
export class ProfiledetailsComponent  {

  title = 'my-profile';
  showDetails:boolean = false;

  onClickExperience(){
    this.showDetails = !this.showDetails;
    console.log(this.showDetails.valueOf);
  }
  onClickTechnologies(){
    this.showDetails = !this.showDetails;
    console.log(this.showDetails.valueOf);
  }

  onClickDownLoad(){
    this.showDetails = !this.showDetails;
    console.log(this.showDetails.valueOf);
  }
}
