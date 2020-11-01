import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AssociationService } from 'src/app/_services/association.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-blood-donation',
  templateUrl: './add-blood-donation.component.html',
  styleUrls: ['./add-blood-donation.component.css']
})
export class AddBloodDonationComponent implements OnInit {
  formBlood :FormGroup;
  res : any=[];
  constructor(
      private _service : AssociationService,
      private  _fb: FormBuilder
      ) { }

  ngOnInit(): void {
    this.formBlood = this._fb.group({
      type:  ['', [Validators.required, Validators.minLength(3)]],
      quantity:  ['', [Validators.required]],
      Adress:  ['', [Validators.required]],
      state:  ['', [Validators.required]],
      city:  ['', [Validators.required]],
      postal:  ['', [Validators.required]],
      phone1:  ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.minLength(8),Validators.maxLength(8)]],
      phone2:  ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.minLength(8),Validators.maxLength(8)]],
      description:  ['', [Validators.required, Validators.minLength(6)]],    
    });
  }

  newBlood(){
    swal.fire(
      'تم !',
      'لقد ثمنا بإضافة طلب تبر للدم!',
      'success'
    );
    this.formBlood.reset();
    this._service.addBlood(this.formBlood.value)
    
     .subscribe(res=>{
       console.log(res);
       swal.fire(
         'تم !',
         'لقد ثمنا بإضافة طلب تبر للدم!',
         'success'
       );
       this.formBlood.reset();
     });
}

}
