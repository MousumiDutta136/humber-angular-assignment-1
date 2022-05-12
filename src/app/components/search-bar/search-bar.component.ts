import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor() { }
  // 12.Set up an event so that when a user types anything into the search bar, the key the
//typed is logged in the chrome console
// <input type="text" (keyup)= "onType($KeyboardEvent)">
// onType(event: KeyboardEvent) {
//   console.log("user just typed in: " + event.key)
// }

  ngOnInit(): void {
  }

}
