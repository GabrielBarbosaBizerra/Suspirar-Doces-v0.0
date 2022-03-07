import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from './../../../../services/cliente.service';
import { Cliente } from './../../../../models/cliente';
import { ClienteDeleteComponent } from './../cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './../cliente-update/cliente-update.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClienteCreateComponent } from '../cliente-create/cliente-create.component';

/**
 * @title Table with sticky header
 */
 @Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit{
  clientes: Cliente[];
  dataSource: MatTableDataSource<Cliente>;  

  displayedColumns = ['id','cpf', 'nome', 'telefone', 'cidade', 'acoes'];

  constructor(public dialog: MatDialog, private clienteService: ClienteService) {
    
  }

  ngOnInit():void{
    this.buscarClientes();
  }
  
  buscarClientes(){
    this.clienteService.listarClientes().subscribe(data =>{  
      this.dataSource = new MatTableDataSource(data);
    });
  }

  addCliente(): void {
    const dialogRef = this.dialog.open(ClienteCreateComponent, {
      minWidth: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  atualizarCliente(id:number): void{
    const dialogRefAtualizarCliente = this.dialog.open(ClienteUpdateComponent, {
      minWidth: '600px',
      data: {idCliente: id}
    });
  }

  deletarCliente(id:number): void{
    const dialogRefDeletarCliente = this.dialog.open(ClienteDeleteComponent, {
      minWidth: '600px',
      data: {idCliente: id}
    });
  }
}