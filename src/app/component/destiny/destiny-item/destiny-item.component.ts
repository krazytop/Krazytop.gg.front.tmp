import {Component, Input, OnChanges} from '@angular/core';
import {DestinyItemModel} from "../../../model/destiny/destiny-item.model";
import {DestinyComponent} from "../destiny.component";

@Component({
  selector: 'destiny-item',
  templateUrl: './destiny-item.component.html',
  styleUrls: ['./destiny-item.component.css']
})
export class DestinyItemComponent implements OnChanges {

  @Input() item!: DestinyItemModel;

  ngOnChanges() {
  }

  formatThousands(nb: number) { //TODO duplication lol damage
    let formatString = "";
    let index = 0;
    for(let digit of nb.toString().split('').reverse().join('')) {
      if (index === 3) {
        index = 1;
        formatString += " " + digit;
      } else {
        index++;
        formatString += digit;
      }
    }
    return formatString.split('').reverse().join('');
  }

  protected readonly DestinyComponent = DestinyComponent;
  protected readonly console = console;
}
