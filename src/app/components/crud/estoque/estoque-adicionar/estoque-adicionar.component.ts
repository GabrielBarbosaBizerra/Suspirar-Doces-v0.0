import { EstoqueService } from './../../../../services/estoque.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Estoque } from './../../../../models/estoque';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-estoque-adicionar',
  templateUrl: './estoque-adicionar.component.html',
  template: 'passed in {{ data.idEstoque }}',
  styleUrls: ['./estoque-adicionar.component.css']
})
export class EstoqueAdicionarComponent implements OnInit {

  estoque: Estoque;
  public estoqueForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EstoqueAdicionarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {idEstoque: number},
    private estoqueService: EstoqueService
  ) { }

  ngOnInit(): void {
    this.estoqueForm = this.fb.group({
      nome: ["", [Validators.required]],
      quantidade: ["" , [Validators.required]],
      quantidadeMinima: [ ""]
    });
    this.buscarEstoque();
  }
    buscarEstoque(){
      this.estoqueService.buscarPorId(this.data.idEstoque).subscribe(obj => this.estoque = obj);
    }

    cadastrar(){
      this.estoque.quantidade += this.estoque.quantidadeNova;
      this.estoqueService.atualizar(this.estoque).subscribe(results => {});
      this.dialogRef.close();
      window.location.reload();
    }
  
    cancelar(){
      this.dialogRef.close();
    }
  
  }
