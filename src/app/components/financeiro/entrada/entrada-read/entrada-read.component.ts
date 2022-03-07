import { EntradaDeleteComponent } from './../entrada-delete/entrada-delete.component';
import { EntradaUpdateComponent } from './../entrada-update/entrada-update.component';
import { EntradaCreateComponent } from './../entrada-create/entrada-create.component';
import { EntradaService } from './../../../../services/entrada.service';
import { MatDialog } from '@angular/material/dialog';
import { Entrada } from './../../../../models/entrada';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada-read',
  templateUrl: './entrada-read.component.html',
  styleUrls: ['./entrada-read.component.css']
})
export class EntradaReadComponent implements OnInit {

  entradas: Entrada[];
  dataSource: MatTableDataSource<Entrada>;  

  displayedColumns = ['id', 'nome', 'valor', 'descricao','data', 'acoes'];

  constructor(public dialog: MatDialog, private entradaService: EntradaService) {
    this.buscarEntradas();
  }

  ngOnInit():void{
   
  }

  buscarEntradas(){
    this.entradaService.listarEntradas().subscribe(data =>{  
      this.dataSource = new MatTableDataSource(data);
    });
  }

  addEntrada(): void {
    const dialogRef = this.dialog.open(EntradaCreateComponent, {
      minWidth: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  atualizarEntrada(id:number): void{
    const dialogRefAtualizarEntrada = this.dialog.open(EntradaUpdateComponent, {
      minWidth: '600px',
      data: {idEntrada: id}
    });
  }

  deletarEntrada(id:number): void{
    const dialogRefDeletarEntrada = this.dialog.open(EntradaDeleteComponent, {
      minWidth: '600px',
      data: {idEntrada: id}
    });
  }
}