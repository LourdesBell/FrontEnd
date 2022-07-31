import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { SHabilidadesService } from 'src/app/service/s-habilidades.service';

@Component({
  selector: 'app-edit-hands',
  templateUrl: './edit-hands.component.html',
  styleUrls: ['./edit-hands.component.css']
})
export class EditHandsComponent implements OnInit {

  habilidades: Habilidades = null;
  
    constructor(private sHabilidades: SHabilidadesService, private activatedRouter: ActivatedRoute,
      private router: Router) { }
  
    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sHabilidades.detail(id).subscribe(
        data =>{
          this.habilidades = data;
        }, err =>{
          alert("Error al modificar habilidades");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.sHabilidades.update(id, this.habilidades).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
           alert("Error al modificar habilidades");
           this.router.navigate(['']);
        }
      )
    }
  
  }