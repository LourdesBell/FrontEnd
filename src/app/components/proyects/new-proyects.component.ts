import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos} from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-new-proyects',
  templateUrl: './new-proyects.component.html',
  styleUrls: ['./new-proyects.component.css']
})
export class NewProyectsComponent implements OnInit {

  nombreProyectos: string = '';
  urlProyectos: string = '';

  constructor(private sProyectos: SProyectosService, private router: Router) { };

  ngOnInit(): void {
  }

  onCreate(): void {
    const pro = new Proyectos(this.nombreProyectos, this.urlProyectos);
    this.sProyectos.save(pro).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}