import { MatTableDataSource } from '@angular/material/table';
import { ResultadoService } from './../../../services/resultado.service';
import { Resultado } from './../../../models/resultado';

import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})

export class ResultadoComponent implements OnInit {
  entradas: Resultado[];
  dataSource: MatTableDataSource<Resultado>;

  displayedColumns = ['data', 'entrada', 'saida', 'resultadoFinanceiro'];

  constructor(private resultadoService: ResultadoService) { 
    this.buscarResultados();
  };

  public ngOnInit() {
    this.buscarResultados();
  }

  buscarResultados() {
    this.resultadoService.listar().subscribe(dataa => {
      this.dataSource = new MatTableDataSource(dataa),
        dataa.forEach(result => {
          this.data.push([formatDate(result.data, "dd/MM", 'en-US'), result.entrada, result.saida])
        });
    });
  }

  title = 'Resultado';
  tipo = ChartType.AreaChart;
  data: any[] = [['04/03',0 , 0]]; 
  //data: any[] = [];
  options = {
  };
  width = 550;
  height = 400;
}
