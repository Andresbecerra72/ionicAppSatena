import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.scss'],
})
export class ExpandComponent {

  @Input("expanded") expanded;
  @Input("expander") expander;
  @Input("expandxs") expandxs;
  @Input("expandHeight") expandHeight;
 

  currentHeight: number = 0;
 
  constructor() {}

  ngAfterViewInit() {
    //console.log(this.expanded);
    //console.log(this.expandHeight);
  }
}