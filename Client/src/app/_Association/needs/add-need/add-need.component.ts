import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AssociationService } from 'src/app/_services/association.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-need',
  templateUrl: './add-need.component.html',
  styleUrls: ['./add-need.component.css']
})
export class AddNeedComponent implements OnInit {
  formNeed :FormGroup;
  res : any=[];
  constructor(
      private _service : AssociationService,
      private  _fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.formNeed = this._fb.group({
      needstype:  ['', [Validators.required, Validators.minLength(3)]],
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

  newHospitalNeed(){

    this._service.addHospitalNeed(this.formNeed.value)
    
     .subscribe(res=>{
       console.log(res);
       swal.fire(
         'تم !',
         'لقد ثمنا بإضافة طلب مساعدة لصالح المستشفى!',
         'success'
       );
       this.formNeed.reset();
     });
}

}
