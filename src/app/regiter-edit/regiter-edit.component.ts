import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-regiter-edit",
  templateUrl: "./regiter-edit.component.html",
  styleUrls: ["./regiter-edit.component.scss"]
})
export class RegiterEditComponent implements OnInit {
  @Input() logInfo: any = { name: "", email: "" };
  formGroup: FormGroup;
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [this.logInfo.name, [Validators.required]],
      email: [this.logInfo.email, [Validators.email, Validators.required]]
    });
  }
}
