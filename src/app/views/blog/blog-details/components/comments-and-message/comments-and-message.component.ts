import { CommonModule } from '@angular/common';
import { Component, ViewChild, type AfterViewInit, type ElementRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { comments } from '@app/views/blog/data';
declare var NiceSelect: any;

@Component({
    selector: 'app-comments-and-message',
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    templateUrl: './comments-and-message.component.html',
    styles: ``
})
export class CommentsAndMessageComponent implements AfterViewInit {
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
    comments = comments
}
