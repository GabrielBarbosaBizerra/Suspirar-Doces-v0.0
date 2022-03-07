import { LoginComponent } from './components/login/login.component';
import { TelaInicioFinanceiroComponent } from './components/financeiro/tela-inicio-financeiro/tela-inicio-financeiro.component';
import { PedidoReadComponent } from './components/crud/pedido/pedido-read/pedido-read.component';
import { EstoqueReadComponent } from './components/crud/estoque/estoque-read/estoque-read.component';
import { ProdutoReadComponent } from './components/crud/produto/produto-read/produto-read.component';
import { ClienteReadComponent } from "./components/crud/cliente/cliente-read/cliente-read.component";
import { SobreSuporteComponent } from "./components/tela-info/sobre-suporte/sobre-suporte.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./components/tela-inicial/main/main.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path:"cliente",
    component:ClienteReadComponent
  },
  {
    path:"produto",
    component:ProdutoReadComponent
  },
  {
    path:"estoque",
    component:EstoqueReadComponent
  },
  {
    path:"pedido",
    component:PedidoReadComponent
  },
  {
    path:"financeiro",
    component:TelaInicioFinanceiroComponent
  },
  {
    path:"sobre",
    component: SobreSuporteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
