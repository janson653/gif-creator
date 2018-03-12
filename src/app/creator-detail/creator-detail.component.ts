import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-creator-detail',
  templateUrl: './creator-detail.component.html',
  styleUrls: ['./creator-detail.component.css']
})
export class CreatorDetailComponent implements OnInit {

  @ViewChild('myCanvas') myCanvas: ElementRef;
  @ViewChild('myImage') myImage: ElementRef;

  constructor() {
  }

  ngOnInit() {
    console.log(this.myCanvas);
    console.log(this.myImage);

  }

  onGenerate(input: String) {
    console.log('onGenerate start');

    let c = this.myCanvas.nativeElement;
    let ctx = c.getContext('2d');

    // draw text
    ctx.font = '30px Verdana';
    // 创建渐变
    let gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop('0', 'magenta');
    gradient.addColorStop('0.5', 'blue');
    gradient.addColorStop('1.0', 'red');
    // 用渐变填色
    ctx.fillStyle = gradient;
    ctx.fillText(input, 10, 90);
  }

}
