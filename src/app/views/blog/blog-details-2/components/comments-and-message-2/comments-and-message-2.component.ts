import { CommonModule } from '@angular/common';
import { Component, ViewChild, type AfterViewInit, type ElementRef } from '@angular/core';
import { comments } from '@app/views/blog/data';
declare var NiceSelect: any;

@Component({
  selector: 'app-comments-and-message-2',
  imports: [CommonModule],
  templateUrl: './comments-and-message-2.component.html',
  styles: ``
})
export class CommentsAndMessage2Component  implements AfterViewInit {
comments=comments

@ViewChild('countrySelect', { static: false }) countrySelect!: ElementRef;


countries = [
    'Belgium',
    'Brazil',
    'Argentina',
    'Bangladesh',
    'Germany'
];

ngAfterViewInit(): void {
    if (this.countrySelect) {
        NiceSelect.bind(this.countrySelect.nativeElement);
    }
}
}
