import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion} from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';


@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {
  nombreEducacion: string = '';
  descripcionEducacion: string = '';

  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Educacion(this.nombreEducacion, this.descripcionEducacion);
    this.sEducacion.save(edu).subscribe(
      data => {
        alert("Educacion añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}