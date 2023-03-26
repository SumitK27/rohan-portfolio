import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  @Input() heroData: any;
  safeURL: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.heroData?.videoUrl
    );
  }
}
