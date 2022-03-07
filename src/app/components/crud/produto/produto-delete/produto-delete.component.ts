import { Produto } from './../../../../models/produto';
import { ProdutoService } from './../../../../services/produto.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Inject, OnInit, ɵɵngDeclareInjectable } from '@angular/core';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  template: 'passed in {{ data.idProduto }}',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {
  produto: Produto;
  produtoFormDelete: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialoRef: MatDialogRef<ProdutoDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {idProduto: number},
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.buscarProduto();
    this.preencherFormulario();
  }

  preencherFormulario(){
    this.produtoFormDelete = this.fb.group({
      nome: [''], preco: [0], descricao: ['']
    });
  }

  buscarProduto(){
    this.produtoService.buscarPorId(this.data.idProduto).subscribe((obj) => {this.produto = obj});
  }

  removerProduto(){
    this.produtoService.remover(this.data.idProduto).subscribe(results => {});
    this.dialoRef.close();
    window.location.reload();
  }

  cancelar(){
    this.dialoRef.close();
  }
}
