import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StockService } from 'src/app/service/stock.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  product: any;
  updateId: any;
  successMessage: string = "";
  errMessage: string = "";
  addProductForm!: FormGroup;
  constructor(private productService: StockService, public fb: FormBuilder, private messageService: MessageService, private route: ActivatedRoute) {
    this.updateId = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      productid: ['', [Validators.required]],
      productname: ['', [Validators.required]],
      units: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
 
  }



}
