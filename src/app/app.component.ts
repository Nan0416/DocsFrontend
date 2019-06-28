import { Component , OnInit} from '@angular/core';
import {Router, Event, NavigationEnd, ActivatedRoute} from '@angular/router';
import { WindowResizeService } from './services/window-resize.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  verticalWidth: Number = 560;
  isVertical: boolean = true;
  isShowingDropdown: boolean = false;
  currentUrl: string = '';
  isShowUI: boolean = true;
  constructor(
    private router: Router,
    private windowResize: WindowResizeService,
  ){ 
  }

  
  /**
   * The initialization of the app
   * 1. setup subscriber. listen user login, user logout
   *                      listen the modification of url.
   * 
   * 2. test if a valid user session exist, auto login.
   *  */
  ngOnInit(){
    this.isVertical = this.windowResize.getWidth() < this.verticalWidth;
    // set resize listener
    this.windowResize.listenWidthThreshold(this.verticalWidth).subscribe(width=>{
      console.log("app.component windows resize invoked");
      if(width >= this.verticalWidth){
        this.isVertical = false;
      }else{
        this.isVertical = true;
        this.isShowingDropdown = false;
      }
    });
    this.router.events.pipe(
      filter((e: Event)=> e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd)=>{
      this.currentUrl = e.urlAfterRedirects;
      
    });
  }



  // UI event handler
  toggleDropdown(evt){
    evt.stopPropagation();
    this.isShowingDropdown = !this.isShowingDropdown;
  }
  
  closeDropdown(){
    this.isShowingDropdown = false;
  }
}
