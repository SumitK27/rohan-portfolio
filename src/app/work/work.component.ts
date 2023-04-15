import { Component, Input, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Work } from '../portfolio.model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent {
  @Input() workData!: Work;

  previewItem: any;
  selectedTag: string = 'all';
  completeItems: any;
  isModalOpen: boolean = false;

  constructor(public _sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.completeItems = this.workData?.items;
  }

  onTagClick(tag: string) {
    this.selectedTag = tag;
    if (tag === 'all') {
      this.completeItems = this.workData?.items;
    } else {
      this.completeItems = this.workData?.items.filter((item: any) =>
        item.tags.includes(tag)
      );
    }
  }

  onItemClick(index: number) {
    this.isModalOpen = true;
    this.previewItem = this.completeItems[index];
  }

  onModalClose() {
    this.isModalOpen = false;
    this.previewItem = null;
    const ytPlayer = document.getElementById('ytplayer');
    ytPlayer?.setAttribute('src', '');
  }
}
