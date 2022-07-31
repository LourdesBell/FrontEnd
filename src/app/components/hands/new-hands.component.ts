import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { SHabilidadesService } from 'src/app/service/s-habilidades.service';

@Component({
  selector: 'app-new-hands',
  templateUrl: './new-hands.component.html',
  styleUrls: ['./new-hands.component.css']
})
export class NewHandsComponent implements OnInit {
  
  nombreHabilidades: string = '';
  descripcionHabilidades: number = 100;

  constructor(private sHabilidades: SHabilidadesService, private router: Router) { };

  ngOnInit(): void {
  }

  onCreate(): void {
    const hab = new Habilidades(this.nombreHabilidades, this.descripcionHabilidades);
    this.sHabilidades.save(hab).subscribe(
      data => {
        alert("Habilidad añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}