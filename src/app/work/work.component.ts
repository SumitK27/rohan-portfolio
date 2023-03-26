import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent {
  @Input() workData: any;
  @ViewChild('slider') slider: any;

  previewItem: any;
  selectedTag: string = 'all';
  completeItems: any;

  constructor() {}

  ngOnInit(): void {
    this.completeItems = this.workData?.items;
    this.previewItem = this.completeItems[0];
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
    this.previewItem = this.completeItems[0];
  }

  onItemClick(index: number) {
    this.previewItem = this.completeItems[index];
  }
}
