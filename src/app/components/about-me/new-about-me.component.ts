import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SobreMi } from 'src/app/model/sobremi';
import { SSobreMiService } from 'src/app/service/s-sobremi.service';


@Component({
  selector: 'app-new-about-me',
  templateUrl: './new-about-me.component.html',
  styleUrls: ['./new-about-me.component.css']
})
export class NewAboutMeComponent implements OnInit {

  nombreSobreMi: string = '';
  descripcionSobreMi: string = '';

  constructor(private sSobreMi: SSobreMiService, private router: Router) { };

  ngOnInit(): void {
  }

  onCreate(): void {
    const sobre = new SobreMi(this.nombreSobreMi, this.descripcionSobreMi);
    this.sSobreMi.save(sobre).subscribe(
      data => {
        alert("Añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}