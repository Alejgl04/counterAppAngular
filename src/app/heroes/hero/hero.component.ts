import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'hulk';
  public age: number  = 50;
  public buttonHide: boolean = true;


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void {
    this.buttonHide = false;
    this.name = 'Thor';
  }

  changeAge(): void {
    this.age = 40;
  }

}
