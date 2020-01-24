import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MinhaCooperativaComponent} from './components/minha-cooperativa/minha-cooperativa.component';
import {MeusResultadosComponent} from './components/meus-resultados/meus-resultados.component';
import {RemuneracaoComponent} from './components/remuneracao/remuneracao.component';
import {
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatTableModule,
  MatDialogModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TabOutrosEventosComponent} from './components/tab-outros-eventos/tab-outros-eventos.component';
import {TabDescontosComponent} from './components/tab-descontos/tab-descontos.component';
import {TabGlosasComponent} from './components/tab-glosas/tab-glosas.component';
import {TabMovimentosComponent} from './components/tab-movimentos/tab-movimentos.component';
import {TabModificadoresComponent} from './components/tab-modificadores/tab-modificadores.component';
import {RemuneracaoService} from './service/remuneracao.service';
import {ChartsModule} from 'ng2-charts';
import {CooperativaService} from './service/cooperativa.service';
import {IndicadorComponent} from './components/indicador/indicador.component';
import {MinhaRemuneracaoComponent} from './components/minha-remuneracao/minha-remuneracao.component';
import {MinhaRemuneracaoVariavelComponent} from './components/minha-remuneracao-variavel/minha-remuneracao-variavel.component';
import {ProducaoMedicaTableComponent} from './components/producao-medica-table/producao-medica-table.component';
import {ProducaoMedicaDetalheDialogComponent} from './components/producao-medica-detalhe-dialog/producao-medica-detalhe-dialog.component';
import {ProducaoMedicaDetalheMovimentosTableComponent} from './components/producao-medica-detalhe-movimentos-table/producao-medica-detalhe-movimentos-table.component';
import {ProducaoMedicaDetalheModificadoresTableComponent} from './components/producao-medica-detalhe-modificadores-table/producao-medica-detalhe-modificadores-table.component';
import {ProducaoMedicaDetalheGlosasTableComponent} from './components/producao-medica-detalhe-glosas-table/producao-medica-detalhe-glosas-table.component';
import {ProducaoMedicaDetalheGlosasContestarDialogComponent} from './components/producao-medica-detalhe-glosas-contestar-dialog/producao-medica-detalhe-glosas-contestar-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MinhaCooperativaComponent,
    MeusResultadosComponent,
    RemuneracaoComponent,
    TabOutrosEventosComponent,
    TabDescontosComponent,
    TabGlosasComponent,
    TabMovimentosComponent,
    TabModificadoresComponent,
    IndicadorComponent,
    MinhaRemuneracaoComponent,
    MinhaRemuneracaoVariavelComponent,
    ProducaoMedicaTableComponent,
    ProducaoMedicaDetalheDialogComponent,
    ProducaoMedicaDetalheMovimentosTableComponent,
    ProducaoMedicaDetalheModificadoresTableComponent,
    ProducaoMedicaDetalheGlosasTableComponent,
    ProducaoMedicaDetalheGlosasContestarDialogComponent
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
    MatCardModule,
    MatButtonModule
  ],
  providers: [RemuneracaoService, CooperativaService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent],
  entryComponents: [ProducaoMedicaDetalheDialogComponent, ProducaoMedicaDetalheGlosasContestarDialogComponent]
})
export class AppModule {
}
