import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Hero } from '../portfolio.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  @Input() heroData!: Hero;
  safeURL: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.heroData?.videoUrl
    );
  }
}
