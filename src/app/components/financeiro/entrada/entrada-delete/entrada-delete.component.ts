import { Entrada } from './../../../../models/entrada';
import { EntradaService } from './../../../../services/entrada.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-entrada-delete',
  templateUrl: './entrada-delete.component.html',
  template: 'passed in {{ data.idEntrada }}',
  styleUrls: ['./entrada-delete.component.css']
})
export class EntradaDeleteComponent implements OnInit {

  public entradaFormDelete: FormGroup;

  constructor(
    private fb:FormBuilder,
    public dialogRef: MatDialogRef<EntradaDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {idEntrada: number},
    private entradaService: EntradaService
  ) { }

  ngOnInit(): void {
    this.buscarEntrada();
    this.preencherFormulario();
  }

  preencherFormulario(){
    this.entradaFormDelete = this.fb.group({
      nome: [''],
      valor: [''],
      descricao: [''],
      data: ['']
    });
  }

  entrada: Entrada;

  buscarEntrada(){
    this.entradaService.buscarPorId(this.data.idEntrada).subscribe((obj) => {
      this.entrada = obj;
    });
  }

  removerEntrada(){
    this.entradaService.remover(this.data.idEntrada).subscribe(results =>{});
    this.dialogRef.close();
    window.location.reload();
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
