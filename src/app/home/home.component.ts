import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  constructor(private _formBuilder: FormBuilder) {}
  mailForm = new FormGroup({
    from_name: new FormControl(),
    to_name: new FormControl(),
    from_email: new FormControl(),
    subject: new FormControl(),
    message: new FormControl(),
    reply_to: new FormControl(),
  })

  async sendEmail() {
    emailjs.init('rc2yqn30hrrCoSNDn');
    let response = await emailjs.send("service_4hcqqxk", "template_nbatbvz", {
        from_name: this.mailForm.controls.from_name.value,
        to_name: this.mailForm.controls.to_name.value,
        from_email: this.mailForm.controls.from_email.value,
        subject: this.mailForm.controls.subject.value,
        message: this.mailForm.controls.message.value,
        reply_to: this.mailForm.controls.reply_to.value
      }).then((res)=> console.log("success", res)).catch((err)=> console.log("field", err))
    alert("message has been send")
  }


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
}
