import { Component } from '@angular/core';
import { SenhaService } from '../services/senha.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public senhaService: SenhaService) {}

}
