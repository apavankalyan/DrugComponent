import { Component, OnInit, Input } from '@angular/core';
import { DrugsService } from '../drug/drugs.service';
import { Drugs } from '../drug/drugsClass';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css']
})
export class DrugComponent implements OnInit {
  @Input() drug: Drugs;
  isHide = true;

  constructor() { }

  ngOnInit() {
  }

}
