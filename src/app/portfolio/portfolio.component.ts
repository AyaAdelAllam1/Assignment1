import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
 isHidden:boolean=true;
 img:string='';
 imgSrc:string[]=[
  '../../assets/image1/poert1.png',
  '../../assets/image1/port2.png',
  '../../assets/image1/port3.png',
  '../../assets/image1/poert1.png',
  '../../assets/image1/port2.png',
  '../../assets/image1/port3.png',
 ]
 Hide(event:EventTarget |null , el:HTMLImageElement):void{
    if(event == el){
      return;
    }else{
      this.isHidden=true;
    }
 }
}
