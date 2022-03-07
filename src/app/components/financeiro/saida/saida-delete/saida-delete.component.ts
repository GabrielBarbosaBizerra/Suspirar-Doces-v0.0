import { Saida } from './../../../../models/saida';
import { SaidaService } from './../../../../services/saida.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-saida-delete',
  templateUrl: './saida-delete.component.html',
  template: 'passed in {{ data.idSaida }}',
  styleUrls: ['./saida-delete.component.css']
})
export class SaidaDeleteComponent implements OnInit {

  public saidaFormDelete: FormGroup;

  constructor(
    private fb:FormBuilder,
    public dialogRef: MatDialogRef<SaidaDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {idSaida: number},
    private saidaService: SaidaService
  ) { }

  ngOnInit(): void {
    this.buscarSaida();
    this.preencherFormulario();
  }

  preencherFormulario(){
    this.saidaFormDelete = this.fb.group({
      nome: [''],
      valor: [''],
      descricao: [''],
      data: ['']
    });
  }

  saida: Saida;

  buscarSaida(){
    this.saidaService.buscarPorId(this.data.idSaida).subscribe((obj) => {
      this.saida = obj;
    });
  }

  removerSaida(){
    this.saidaService.remover(this.data.idSaida).subscribe(results =>{});
    this.dialogRef.close();
    window.location.reload();
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
