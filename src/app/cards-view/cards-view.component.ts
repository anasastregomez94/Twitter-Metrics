import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss']
})
export class CardsViewComponent implements OnInit {

  // Default state of the cards
  userCardPosition = "front";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Rotate the card to change between sending information and getting metrics
   * @param cardName 
   * @param cardPosition 
   */
  public rotateCard(cardName: string, cardPosition?: string){
    switch (cardName) {
      case 'user':
        this.userCardPosition = cardPosition;
        break;
      case 'map':
        this.router.navigate(['/', 'map']);
        break;
      default:
        console.log("Does not exist: ", cardName);
    }
  }

}
