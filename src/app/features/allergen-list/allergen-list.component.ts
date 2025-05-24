import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-allergen-list',
  imports: [CommonModule, AutoCompleteModule, FormsModule, ChipModule],
  templateUrl: './allergen-list.component.html',
  styleUrl: './allergen-list.component.css'
})
export class AllergenListComponent {
  allergenInput = '';
userAllergens: string[] = [];
allAllergens = ['peanuts', 'milk', 'gluten', 'soy', 'shellfish', 'wheat'];
filteredAllergens: string[] = [];

filterAllergens(event: any) {
  const query = event.query.toLowerCase();
  this.filteredAllergens = this.allAllergens.filter(a =>
    a.toLowerCase().includes(query) && !this.userAllergens.includes(a)
  );
}

addAllergen(allergen: string) {
  if (!this.userAllergens.includes(allergen)) {
    this.userAllergens.push(allergen);
    this.allergenInput = '';
  }
}

removeAllergen(allergen: string) {
  this.userAllergens = this.userAllergens.filter(a => a !== allergen);
}
}
