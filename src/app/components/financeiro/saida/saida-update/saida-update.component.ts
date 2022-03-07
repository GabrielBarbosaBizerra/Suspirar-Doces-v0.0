import { Saida } from './../../../../models/saida';
import { SaidaService } from './../../../../services/saida.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-saida-update',
  templateUrl: './saida-update.component.html',
  template: 'passed in {{ data.idSaida }}',
  styleUrls: ['./saida-update.component.css']
})
export class SaidaUpdateComponent implements OnInit {

  public saidaFormUpdate: FormGroup;

  constructor(
    private fb:FormBuilder,
    public dialogRef: MatDialogRef<SaidaUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {idSaida: number},
    private saidaService: SaidaService
  ) { }

  ngOnInit(): void {
    this.buscarSaida();
    this.preencherFormulario();
  }

  preencherFormulario(){
    this.saidaFormUpdate = this.fb.group({
      nome: ['', [Validators.required]],
      valor: ['',[Validators.required]],
      descricao: ['']
    });
  }

  saida: Saida;
  
  buscarSaida(){
    this.saidaService.buscarPorId(this.data.idSaida).subscribe((obj) => {
      this.saida = obj;
    });
  }

  atualizarSaida(){
    this.saidaService.atualizar(this.saida).subscribe(results => {});
    this.dialogRef.close();
    window.location.reload();
  }

  cancelar(): void {
    this.dialogRef.close();
    this.saidaFormUpdate.reset();
  }

}
