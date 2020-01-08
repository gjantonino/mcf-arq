import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'logo-component',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() fillColor:string;

  constructor() { }

  ngOnInit() {
  }

}
