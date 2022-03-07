import { Estoque } from './../../../../models/estoque';
import { EstoqueService } from './../../../../services/estoque.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-estoque-delete',
  templateUrl: './estoque-delete.component.html',
  template: 'passed in {{ data.idEstoque }}',
  styleUrls: ['./estoque-delete.component.css']
})
export class EstoqueDeleteComponent implements OnInit {
  public estoqueFormDelete: FormGroup;

  constructor(
    private fb:FormBuilder,
    public dialogRef: MatDialogRef<EstoqueDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {idEstoque: number},
    private estoqueService: EstoqueService
  ) { }

  ngOnInit(): void {
    this.buscarEstoque();
    this.preencherFormulario();
  }

  preencherFormulario(){
    this.estoqueFormDelete = this.fb.group({
      nome: ["", [Validators.required]],
      quantidade: ["" , [Validators.required]],
      quantidadeMinima: ["", [Validators.required]]
    });
  }

  estoque: Estoque;

  buscarEstoque(){
    this.estoqueService.buscarPorId(this.data.idEstoque).subscribe((obj) => {
      this.estoque = obj;
    });
  }

  removerEstoque(){
    this.estoque.quantidade = 0;
    this.estoqueService.atualizar(this.estoque).subscribe(results =>{});
    this.dialogRef.close();
    window.location.reload();
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
