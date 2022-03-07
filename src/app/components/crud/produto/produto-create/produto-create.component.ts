import { ProdutoService } from './../../../../services/produto.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { Produto } from './../../../../models/produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto = {
    nome: '',
    preco: null,
    descricao: ''
  };

  public produtoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProdutoCreateComponent>,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.produtoForm = this.fb.group({
      nome: ['', [Validators.required]],
      preco: ['', [Validators.required]],
      descricao: ['']
    });
  }

  cadastrar(){
    this.produtoService.cadastrar(this.produto).subscribe(results => {});
    this.dialogRef.close();
    window.location.reload();
  }

  cancelar(){
    this.dialogRef.close();
  }

}
