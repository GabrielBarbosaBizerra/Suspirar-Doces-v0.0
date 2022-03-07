import { EstoqueService } from './../../../../services/estoque.service';
import { Estoque } from './../../../../models/estoque';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estoque-create',
  templateUrl: './estoque-create.component.html',
  styleUrls: ['./estoque-create.component.css']
})
export class EstoqueCreateComponent implements OnInit {

  estoque: Estoque = {
    nome: '',
    quantidade: null,
    quantidadeMinima: null
  };

  public estoqueForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EstoqueCreateComponent>,
    private estoqueService: EstoqueService
  ) { }

  ngOnInit(): void {
    this.estoqueForm = this.fb.group({
      nome: ["", [Validators.required]],
      quantidade: ["" , [Validators.required]],
      quantidadeMinima: [ ""]
    });
  }

  cadastrar(){
    this.estoqueService.cadastrar(this.estoque).subscribe(results => {});
    this.dialogRef.close();
    window.location.reload();
  }

  cancelar(){
    this.dialogRef.close();
  }

}
