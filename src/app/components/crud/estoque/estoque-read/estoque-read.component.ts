import { EstoqueAdicionarComponent } from './../estoque-adicionar/estoque-adicionar.component';
import { EstoqueDeleteComponent } from './../estoque-delete/estoque-delete.component';
import { EstoqueUpdateComponent } from './../estoque-update/estoque-update.component';
import { EstoqueCreateComponent } from './../estoque-create/estoque-create.component';
import { EstoqueService } from './../../../../services/estoque.service';
import { Estoque } from './../../../../models/estoque';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-estoque-read',
  templateUrl: './estoque-read.component.html',
  styleUrls: ['./estoque-read.component.css']
})
export class EstoqueReadComponent implements OnInit {
  listaEstoque: Estoque[];

  dataSource: MatTableDataSource<Estoque>;

  displayedColumns = ['id', 'nome', 'quantidade' , 'quantidadeMinima', 'acoes'];

  constructor(public dialog: MatDialog, private estoqueService: EstoqueService) { 
  }
  
  ngOnInit(): void {
    this.bucarEstoques();
  }

  cadastrarEstoque(){
    const dialogCadastrarEstoque = this.dialog.open(EstoqueCreateComponent, {
      minWidth: '600px'
    })
  }
  bucarEstoques(){
    this.estoqueService.listarEstoques().subscribe((estoques: Estoque[]) => {
      this.listaEstoque = estoques;
    });
  }

  adicionarEstoque(id: number): void {
    const dialogRef = this.dialog.open(EstoqueAdicionarComponent, {
      minWidth: '600px',
      data: {idEstoque: id}
    });
  }

  atualizarEstoque(id:number): void{
    const dialogRefAtualizarEstoque = this.dialog.open(EstoqueUpdateComponent, {
      minWidth: '600px',
      data: {idEstoque: id}
    });

  }

  deletarEstoque(id:number): void{
    const dialogRefDeletarEstoque = this.dialog.open(EstoqueDeleteComponent, {
      minWidth: '600px',
      data: {idEstoque: id}
    });
  }
}
