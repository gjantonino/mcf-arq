import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor() { }
  section: string = 'HOME';
  showHideObras: boolean = false;
  showHideMenu: boolean = false;


  @Input() textColor:string;
  @Input() bgColor:string;  
  @Output() sectionClick: EventEmitter<string> = new EventEmitter<string>();

  itemClick (item: string) {
    this.section = item;
    if (this.section === 'OBRAS') {
      this.showHideObras = !this.showHideObras;
    } else {
      if (this.showHideObras) this.showHideObras = false;
    }
    this.sectionClick.emit(item);
  }

  showMenu () {
      this.showHideMenu = !this.showHideMenu;
  }

  ngOnInit() {
  }
}
