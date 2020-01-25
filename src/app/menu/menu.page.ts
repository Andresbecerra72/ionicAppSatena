import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { icon } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
{
  title:'Home',
  url: '/menu/first',
  icon: 'home'
},
{
  title:'Servicios',
  url: '/menu/second',
  icon: 'information-circle-outline'
},
{
  title:'Registrate',
  url: '/menu/third',
  icon: 'contact'
},

  ];

  selectedPath = '';

  constructor(private router: Router) { 
    this.router.events.subscribe((event: RouterEvent) =>{
      if(event && event.url)
      {
        this.selectedPath = event.url;
      }
    })
  }

  ngOnInit() {
  }

}
