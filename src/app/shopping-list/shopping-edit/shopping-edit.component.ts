import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const imgName = this.nameInputRef.nativeElement.value;
    const imgAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(imgName, imgAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
