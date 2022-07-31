import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['./edit-about-me.component.css']
})

export class EditAboutMeComponent implements OnInit {

  persona: persona = new persona("","","");

  constructor(public personaService: PersonaService, private activatedRouter: ActivatedRoute,
    private router: Router) { };

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.personaService.getPersona().subscribe(
        data =>{
          this.persona = data;
        }, err =>{
          alert("Error al modificar habilidades");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.personaService.getPersona().subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
           alert("Error al modificar habilidades");
           this.router.navigate(['']);
        }
      )
    }

}


