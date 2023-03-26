import { Component, Input } from '@angular/core';
import { Contact } from '../portfolio.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @Input() contactData!: Contact;
}
