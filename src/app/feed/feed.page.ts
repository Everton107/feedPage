import { Component, OnInit } from '@angular/core';
import { IonAlert, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
public nome_usuario="João Pedro";
  constructor(public navControl: NavController) { }
public soma(num1:number, num2:number): void{
alert(num1+num2);
}
//IonViewOldLoad(){
  //this.soma(10,5);
//}
  ngOnInit(): void {
      
  }

}
