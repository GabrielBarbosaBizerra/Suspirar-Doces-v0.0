import { Observable, map } from 'rxjs';
import { ListaProduto } from './../../../../models/listaProduto';
import { MatTableDataSource } from '@angular/material/table';
import { ProdutoService } from './../../../../services/produto.service';
import { ClienteService } from './../../../../services/cliente.service';
import { Cliente } from './../../../../models/cliente';
import { MatDialogRef} from '@angular/material/dialog';
import { PedidoService } from './../../../../services/pedido.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Pedido } from 'src/app/models/pedido';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';


@Component({
  selector: 'app-pedido-create',
  templateUrl: './pedido-create.component.html',
  styleUrls: ['./pedido-create.component.css']
})


export class PedidoCreateComponent implements OnInit {
  cliente: Cliente;
  valorDeEntrada: number = 0;
  valorAPagar: number = 0;
  valorTotal: number = 0;
  quantidade: number = 0;
  pedidoForm: FormGroup;
  clientes: Cliente[];
  produtos: Produto[];
  pedido: Pedido = {
    idCliente: 0,
    produtosPedidos: [],
    valorAPagar: 0,
    valorDeEntrada: 0,
    valorTotal: 0,
    dataDeEntrega: null,
    localDeEntrega: '',
    dataDoPedido: new Date(),
    status: false
  };
  listaProdutosPedidos: ListaProduto[] =[];
  produtoPedido:ListaProduto = {
    idProduto:0,
    quantidade:0,
    nome: ''
  };
  idproduto: number;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['idProduto', 'nome', 'quantidade', 'acoes'];

  filteredOptions: Observable<Cliente[]>;
  myControl = new FormControl();

  constructor(private fb: FormBuilder, private pedidoService: PedidoService, public dialogRef: MatDialogRef<PedidoCreateComponent>, private clienteService: ClienteService, private produtoService: ProdutoService) { }
  ngOnInit(): void {
    this.buscarClientes();
    this.buscarProdutos();
    this.preencherFormulario();
    this.dataSource.data = this.listaProdutosPedidos;

    this.filteredOptions = this.myControl.valueChanges.pipe(
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.clientes.slice())),
    );
  }
  
  buscarClientes(){
    this.clienteService.listarClientes().subscribe(data => {
      this.clientes = data
    });
  }
  buscarProdutos(){
    this.produtoService.listarProdutos().subscribe(data => {this.produtos = data});
  }

  preencherFormulario(){
    this.pedidoForm = this.fb.group({
      cliente: ["", [Validators.required]],
      valorTotal: ["" , [Validators.required]],
      valorDeEntrada: ["", [Validators.required]],
      valorAPagar: [ "", [Validators.required]],
      dataDeEntrega: ["", [Validators.required]],
      localDeEntrega: [""],
      produto: ["", [Validators.required]],
      quantidade: ["", [Validators.required]]
    });
  }

  adicionarProduto(): void {
    this.produtoPedido.quantidade = this.quantidade;
    this.produtoService.buscarPorId(this.produtoPedido.idProduto).subscribe(data => {this.produtoPedido.nome = data.nome, this.listaProdutosPedidos.push({idProduto: this.produtoPedido.idProduto, quantidade: this.produtoPedido.quantidade, nome: this.produtoPedido.nome}), this.dataSource.data = this.listaProdutosPedidos, this.valorTotal = this.valorTotal + data.preco * this.quantidade, console.log(typeof(data.preco)), console.log(this.valorTotal)});
    this.dataSource.data = this.listaProdutosPedidos;
  }

  deletarProduto(id:number): void{
    var index = this.listaProdutosPedidos.findIndex(x => x.idProduto == id);
    this.listaProdutosPedidos.splice(index);
    this.dataSource.data = this.listaProdutosPedidos;
    this.valorTotal = 0;
  }

  adicionarPedido(){
    this.pedido.idCliente = this.cliente.id;
    this.pedido.valorTotal = this.valorTotal;
    this.pedido.valorDeEntrada = this.valorDeEntrada;
    this.pedido.valorAPagar = this.valorAPagar;
    this.listaProdutosPedidos.forEach(produto => {
      this.pedido.produtosPedidos.push({idProduto: produto.idProduto, quantidade: produto.quantidade})
    });
    this.pedidoService.cadastrar(this.pedido).subscribe(results => {});
    this.dialogRef.close();
    window.location.reload();
  }

  gerarValorPagar(event: Event) {
    let entrada = (event.target as HTMLInputElement).value;
    var valor: number = +entrada;
    this.valorAPagar = parseFloat((this.valorTotal - valor).toFixed(2));
  }
  cancelar(){
    this.dialogRef.close();
  }


  displayFn(cliente: Cliente): string {
    return cliente && cliente.nome ? cliente.nome : '';
  }

  private _filter(name: string): Cliente[] {
    const filterValue = name.toLowerCase();
    return this.clientes.filter(x => x.nome.toLowerCase().includes(filterValue));
  }
}
