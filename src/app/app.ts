import { Component } from '@angular/core';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { HomeComponent } from "./features/pages/home/home.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
