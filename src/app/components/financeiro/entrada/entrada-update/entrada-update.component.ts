import { Entrada } from './../../../../models/entrada';
import { EntradaService } from './../../../../services/entrada.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-entrada-update',
  templateUrl: './entrada-update.component.html',
  template: 'passed in {{ data.idEntrada }}',
  styleUrls: ['./entrada-update.component.css']
})
export class EntradaUpdateComponent implements OnInit {

  public entradaFormUpdate: FormGroup;

  constructor(
    private fb:FormBuilder,
    public dialogRef: MatDialogRef<EntradaUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {idEntrada: number},
    private entradaService: EntradaService
  ) { }

  

  ngOnInit(): void {
    this.buscarCliente();
    this.preencherFormulario();
  }

  preencherFormulario(){
    this.entradaFormUpdate = this.fb.group({
      nome: ['', [Validators.required]],
      valor: ['',[Validators.required]],
      descricao: ['']
    });
  }

  entrada: Entrada;
  
  buscarCliente(){
    this.entradaService.buscarPorId(this.data.idEntrada).subscribe((obj) => {
      this.entrada = obj;
    });
  }

  atualizarEntrada(){
    this.entradaService.atualizar(this.entrada).subscribe(results => {});
    this.dialogRef.close();
    window.location.reload();
  }

  cancelar(): void {
    this.dialogRef.close();
    this.entradaFormUpdate.reset();
  }
}
