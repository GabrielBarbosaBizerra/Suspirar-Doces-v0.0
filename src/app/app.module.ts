import { Interceptor } from './app.interceptor.module';
import { ClienteCreateComponent } from './components/crud/cliente/cliente-create/cliente-create.component';
import { ClienteReadComponent } from './components/crud/cliente/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './components/crud/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/crud/cliente/cliente-delete/cliente-delete.component';
import { PedidoCreateComponent } from './components/crud/pedido/pedido-create/pedido-create.component';
import { PedidoReadComponent } from './components/crud/pedido/pedido-read/pedido-read.component';
import { PedidoUpdateComponent } from './components/crud/pedido/pedido-update/pedido-update.component';
import { PedidoDeleteComponent } from './components/crud/pedido/pedido-delete/pedido-delete.component';
import { ProdutoCreateComponent } from './components/crud/produto/produto-create/produto-create.component';
import { ProdutoReadComponent } from './components/crud/produto/produto-read/produto-read.component';
import { ProdutoUpdateComponent } from './components/crud/produto/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/crud/produto/produto-delete/produto-delete.component';
import { EstoqueCreateComponent } from './components/crud/estoque/estoque-create/estoque-create.component';
import { EstoqueReadComponent } from './components/crud/estoque/estoque-read/estoque-read.component';
import { EstoqueUpdateComponent } from './components/crud/estoque/estoque-update/estoque-update.component';
import { EstoqueDeleteComponent } from './components/crud/estoque/estoque-delete/estoque-delete.component';
import { SobreSuporteComponent } from './components/tela-info/sobre-suporte/sobre-suporte.component';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { NavComponent } from './components/tela-inicial/nav/nav.component';
import { HeaderComponent } from './components/tela-inicial/header/header.component';
import { FooterComponent } from './components/tela-inicial/footer/footer.component';
import { MainComponent } from './components/tela-inicial/main/main.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { TelaInicioFinanceiroComponent } from './components/financeiro/tela-inicio-financeiro/tela-inicio-financeiro.component';
import { ResultadoComponent } from './components/financeiro/resultado/resultado.component';
import { EntradaCreateComponent } from './components/financeiro/entrada/entrada-create/entrada-create.component';
import { EntradaReadComponent } from './components/financeiro/entrada/entrada-read/entrada-read.component';
import { EntradaDeleteComponent } from './components/financeiro/entrada/entrada-delete/entrada-delete.component';
import { EntradaUpdateComponent } from './components/financeiro/entrada/entrada-update/entrada-update.component';
import { NgxMaskModule } from 'ngx-mask'
import { GoogleChartsModule } from 'angular-google-charts';
import { SaidaReadComponent } from './components/financeiro/saida/saida-read/saida-read.component';
import { SaidaCreateComponent } from './components/financeiro/saida/saida-create/saida-create.component';
import { SaidaUpdateComponent } from './components/financeiro/saida/saida-update/saida-update.component';
import { SaidaDeleteComponent } from './components/financeiro/saida/saida-delete/saida-delete.component';
import { LoginComponent } from './components/login/login.component';
import { EstoqueAdicionarComponent } from './components/crud/estoque/estoque-adicionar/estoque-adicionar.component';
import { ConfirmarEntregaPedidoComponent } from './components/crud/pedido/confirmar-entrega-pedido/confirmar-entrega-pedido.component';


import { MatAutocompleteModule} from '@angular/material/autocomplete';
@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MainComponent,
    ClienteCreateComponent,
    ClienteReadComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    PedidoCreateComponent,
    PedidoReadComponent,
    PedidoUpdateComponent,
    PedidoDeleteComponent,
    ProdutoCreateComponent,
    ProdutoReadComponent,
    ProdutoUpdateComponent,
    ProdutoDeleteComponent,
    EstoqueCreateComponent,
    EstoqueReadComponent,
    EstoqueUpdateComponent,
    EstoqueDeleteComponent,
    SobreSuporteComponent,
    TelaInicioFinanceiroComponent,
    ResultadoComponent,
    EntradaCreateComponent,
    EntradaReadComponent,
    EntradaDeleteComponent,
    EntradaUpdateComponent,
    SaidaReadComponent,
    SaidaCreateComponent,
    SaidaUpdateComponent,
    SaidaDeleteComponent,
    LoginComponent,
    EstoqueAdicionarComponent,
    ConfirmarEntregaPedidoComponent,
  ],
  imports: [
    NgxMaskModule.forRoot({dropSpecialCharacters:true}),
    ReactiveFormsModule,
    GoogleChartsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatSelectModule,
    Interceptor,
    MatAutocompleteModule,
  ],
  providers: [HttpClientModule, FormsModule, {provide: MAT_DATE_LOCALE, useValue: 'pt-GB'}],
  bootstrap: [AppComponent]
})

export class AppModule { }
