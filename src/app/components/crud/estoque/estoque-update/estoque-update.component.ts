import { Estoque } from './../../../../models/estoque';
import { EstoqueService } from './../../../../services/estoque.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-estoque-update',
  templateUrl: './estoque-update.component.html',
  template: 'passed in {{ data.idEstoque }}',
  styleUrls: ['./estoque-update.component.css']
})
export class EstoqueUpdateComponent implements OnInit {
  estoque: Estoque;

  public estoqueFormUpdate: FormGroup;

  constructor(
    private fb:FormBuilder,
    public dialogRef: MatDialogRef<EstoqueUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {idEstoque: number},
    private estoqueService: EstoqueService,
  ) { }

  ngOnInit(): void {
    this.buscarEstoque();
    this.preencherFormulario();
  
  }

  preencherFormulario(){
    this.estoqueFormUpdate = this.fb.group({
      nome: ["", [Validators.required]],
      quantidade: ["" , [Validators.required]],
      quantidadeMinima: ["", [Validators.required]]
    });
  }

  buscarEstoque(){
    this.estoqueService.buscarPorId(this.data.idEstoque).subscribe((obj) => {
      this.estoque = obj;
    });
  }

  atualizarEstoque(){
    this.estoqueService.atualizar(this.estoque).subscribe(results => {});
    this.dialogRef.close();
    window.location.reload();
  }

  cancelar(): void {
    this.dialogRef.close();
    this.estoqueFormUpdate.reset();
  }

}