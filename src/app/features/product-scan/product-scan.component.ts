import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';

@Component({
  selector: 'app-product-scan',
  imports: [AutoComplete, FormsModule, CommonModule],
  templateUrl: './product-scan.component.html',
  styleUrl: './product-scan.component.css'
})
export class ProductScanComponent {
selectedProduct: any;
filteredProducts: any[] = [];
userAllergens: string[] = []; // Fetch this from service
containsAllergen = false;

products = [
  { name: 'Peanut Butter', ingredients: ['peanuts', 'salt'] },
  { name: 'Bread', ingredients: ['wheat', 'yeast', 'gluten'] }
];

searchProducts(event: any) {
  const query = event.query.toLowerCase();
  this.filteredProducts = this.products.filter(p =>
    p.name.toLowerCase().includes(query)
  );
}

ngOnChanges() {
  this.checkForAllergens();
}

checkForAllergens() {
  if (this.selectedProduct) {
    this.containsAllergen = this.selectedProduct.ingredients.some((ingredient: string) =>
      this.userAllergens.includes(ingredient.toLowerCase())
    );
  }
}

}
