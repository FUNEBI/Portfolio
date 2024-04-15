import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{

  homeArea:boolean=true;
  AboutPage:boolean=false;
  experiencePage:boolean=false
  projectsPage:boolean=false

  isLoaded:boolean = false
  ngOnInit(): void {
    
  }

  move(e:any){
    const root = document.documentElement
    const x = e.clientX / innerWidth
    const y = e.clientY / innerHeight
    root.style.setProperty('--mouse-x', `${x}`)
    root.style.setProperty('--mouse-y', `${y}`)
   
    
  }
  getSelectedValue(e:any){
    const id = e.target.innerHTML
    if(id === 'Skills'){
      this.homeArea = true
      console.log(id)
      this.homeArea = true
      this.AboutPage = false
      this.experiencePage = false
      this.projectsPage = false
    }else if(id === "About" ){
      console.log(this.AboutPage)
      this.homeArea = false
      this.AboutPage = true
      this.projectsPage = false
      console.log(this.AboutPage)
      this.experiencePage = false   
    }else if(id == 'Projects'){
      this.projectsPage = true
      console.log(this.projectsPage)
      this.AboutPage = false
      this.homeArea = false      
      this.experiencePage = false
      
    }else{
      this.homeArea = true
      this.AboutPage = false
      this.projectsPage = false
      this.experiencePage = false
    }
      
    }
  
 
}

