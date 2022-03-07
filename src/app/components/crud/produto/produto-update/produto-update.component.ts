import { Produto } from './../../../../models/produto';
import { ProdutoService } from './../../../../services/produto.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  template: 'passed in {{ data.idProduto }}',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {
  public produtoFormUpdate: FormGroup;

  constructor(
    private fb:FormBuilder,
    public dialogRef: MatDialogRef<ProdutoUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {idProduto: number},
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.buscarProduto();
    this.preencherFormulario();
  }

  preencherFormulario(){
    this.produtoFormUpdate = this.fb.group({
      nome: ['', [Validators.required]],
      preco: ['',[Validators.required]],
      descricao: [''],
    });
  }

  produto: Produto;
  
  buscarProduto(){
    this.produtoService.buscarPorId(this.data.idProduto).subscribe((obj) => {
      this.produto = obj;
    });
  }

  atualizarProduto(){
    this.produtoService.atualizar(this.produto).subscribe(results => {});
    this.dialogRef.close();
    window.location.reload();
  }

  cancelar(): void {
    this.dialogRef.close();
    this.produtoFormUpdate.reset();
  }
}
