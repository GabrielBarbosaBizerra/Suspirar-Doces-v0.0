import { ProdutoCreateComponent } from './../produto-create/produto-create.component';
import { ProdutoUpdateComponent } from './../produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './../produto-delete/produto-delete.component';
import { ProdutoService } from './../../../../services/produto.service';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from './../../../../models/produto';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit {
  produto: Produto[];
  dataSource: MatTableDataSource<Produto>;

  displayedColumns = ['id', 'nome', 'preco', 'descricao', 'acoes'];

  constructor(public dialog: MatDialog, private produtoService: ProdutoService) { 
    
  }

  ngOnInit(): void {
    this.bucarProdutos();
  }

  bucarProdutos(){
    this.produtoService.listarProdutos().subscribe(data => this.dataSource = new MatTableDataSource(data));
  }

  addProduto(): void {
    const dialogRef = this.dialog.open(ProdutoCreateComponent, {
      minWidth: '600px',
    });
  }

  atualizarProduto(id:number): void{
    const dialogRefAtualizarProduto = this.dialog.open(ProdutoUpdateComponent, {
      minWidth: '600px',
      data: {idProduto: id}
    });
  }

  deletarProduto(id:number): void{
    const dialogRefDeletarProduto = this.dialog.open(ProdutoDeleteComponent, {
      minWidth: '600px',
      data: {idProduto: id}
    });
  }
}
