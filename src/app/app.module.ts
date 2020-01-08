import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MinhaCooperativaComponent } from './components/minha-cooperativa/minha-cooperativa.component';
import { MeusResultadosComponent } from './components/meus-resultados/meus-resultados.component';
import { RemuneracaoComponent } from './components/remuneracao/remuneracao.component';
import { MatSelectModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatTableModule, MatDialogModule, MatFormFieldControl, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RemuneracaoVariavelComponent } from './components/remuneracao-variavel/remuneracao-variavel.component';
import { TabProducaoMedicaComponent } from './components/tab-producao-medica/tab-producao-medica.component';
import { TabOutrosEventosComponent } from './components/tab-outros-eventos/tab-outros-eventos.component';
import { TabDescontosComponent } from './components/tab-descontos/tab-descontos.component';
import { TabGlosasComponent } from './components/tab-glosas/tab-glosas.component';
import { ModalInfoPacienteComponent } from './components/modal-info-paciente/modal-info-paciente.component';
import { TabMovimentosComponent } from './components/tab-movimentos/tab-movimentos.component';
import { TabModificadoresComponent } from './components/tab-modificadores/tab-modificadores.component';
import { TabModalGlosasComponent } from './components/tab-modal-glosas/tab-modal-glosas.component';
import { RemuneracaoService } from './service/remuneracao.service';
import { ChartsModule } from 'ng2-charts';
import { SinistralidadeAcumuladaComponent } from './components/sinistralidade-acumulada/sinistralidade-acumulada.component';
import { CarteiraClientesComponent } from './components/carteira-clientes/carteira-clientes.component';
import { ContraprestracaoEfetivaComponent } from './components/contraprestracao-efetiva/contraprestracao-efetiva.component';
import { ConsultaClienteComponent } from './components/consulta-cliente/consulta-cliente.component';
import { LiquidezCorrenteComponent } from './components/liquidez-corrente/liquidez-corrente.component';
import { CooperativaService } from './service/cooperativa.service';
import { ModalContestarGlosaComponent } from './components/modal-contestar-glosa/modal-contestar-glosa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MinhaCooperativaComponent,
    MeusResultadosComponent,
    RemuneracaoComponent,
    RemuneracaoVariavelComponent,
    TabProducaoMedicaComponent,
    TabOutrosEventosComponent,
    TabDescontosComponent,
    TabGlosasComponent,
    ModalInfoPacienteComponent,
    TabMovimentosComponent,
    TabModificadoresComponent,
    TabModalGlosasComponent,
    SinistralidadeAcumuladaComponent,
    CarteiraClientesComponent,
    ContraprestracaoEfetivaComponent,
    ConsultaClienteComponent,
    LiquidezCorrenteComponent,
    ModalContestarGlosaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    ChartsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [RemuneracaoService,CooperativaService,{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent],
  entryComponents: [ModalInfoPacienteComponent, ModalContestarGlosaComponent]
})
export class AppModule { }
