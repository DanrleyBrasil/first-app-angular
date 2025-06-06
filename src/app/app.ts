import { Component } from '@angular/core';
import { Navbar } from "./_components/navbar/navbar";
import { CommonModule } from '@angular/common';
import { PrimaryButton } from "./_components/primary-button/primary-button";
import { SecondaryButton } from "./_components/secondary-button/secondary-button";
import { ItemCertificado } from "./_components/item-certificado/item-certificado";

@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule, PrimaryButton, SecondaryButton, ItemCertificado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'first-app';
  exibeNavbar: boolean = true;
}
