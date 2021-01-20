//Used as a Nested Component for "Product-List Component"
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    // Input decorator to decorate any property in the nested component class, including an object
    @Input() rating: number; // rating can be used as [rating] element property in <pm-start> as property binding
    starWidth: number;
    //decorate event property with @OutPut Decorator >> container can repsond to this event. Multiple output as long as they are events.
    @Output() ratingClicked: EventEmitter<string> = //as its must be an event, we defined the type of property to be eventemitter
        new EventEmitter<string>();

    // starwidth recalulated anytime the container change the rating number
    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick(): void {
        // the emit method raises the event
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}

