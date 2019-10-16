export class Cadempresa {
  cdEmpresa: number;
  nmEmpresa: string;
  nmAbreviado: string;
  nrTelefone: string;
  enderecoCompleto: string;
  pessoContato: string;
  cnpjEmpresa: string;
  diretorioArquivos: string;
}

export class Cadamostragem {
  cdAmostragem: number;
  cdEmpresa = new Cadempresa();
  nmAmostragem: string;
}

export class Cadfrequencia {
  cdFrequencia: number;
  cdEmpresa = new Cadempresa();
  nmFrequencia: string;
}

export class Cadtipodemetodo {
  cdTipoDeMetodo: number;
  cdEmpresa = new Cadempresa();
  nmTipoDeMetodo: string;
}

export class Cadmaterial {
  cdMaterial: number;
  cdEmpresa = new Cadempresa();
  nmMaterial: string;
}

export class Cadtipodeverificador {
  cdTipoDeVerificador: number;
  nmTipoDeVerificador: string;
  nrNiveis: number;
  rotuloNivel1: string;
  rotuloNivel2: string;
  rotuloNivel3: string;
  rotuloNivel4: string;
  rotuloNivel5: string;
}

export class Cadniveldeavaliacao {
  cdNivelDeAvaliacao: number;
  nmNivelDeAvaliacao: string;
  sigla: string;
  txDescricao: string;
}

export class Verificador_m {
  codigo: number;
  cdEmpresa = new Cadempresa();
  cdTipoDeVerificador = new Cadtipodeverificador();
  cdVerificador: number;
  cadNivelDeAvaliacao = new Cadniveldeavaliacao();
  codalfa: string;
  nmverificador: string;
  limiar: string;
  p01_graco: number;
}

export class Verificador_Local_m {
  codigo: number;
  cdEmpresa = new Cadempresa();
  r15_id_Verificador_m = new Verificador_m();
  cdTipoDeVerificador = new Cadtipodeverificador();
  cdLocal1 = new Modlocal1();
  cdLocal2 = new Modlocal2();
  cdLocal3 = new Modlocal3();
  cdTipoDeMetodo = new Cadtipodemetodo();
  txMetodologia: string;
  cdFrequencia = new Cadfrequencia();
  cdAmostragem = new Cadamostragem();
  cdMaterial = new Cadmaterial();
}

export class Modlocal1 {
  cdLocal1: number;
  cdEmpresa = new Cadempresa();
  nmlocal1: string;
}


export class Modlocal2 {
  cdLocal2: number;
  cdEmpresa = new Cadempresa();
  cdLocal1 = new Modlocal1();
  nmLocal2: string;
}



export class Modlocal3 {
  cdLocal3: number;
  cdEmpresa = new Cadempresa();
  cdLocal1 = new Modlocal1();
  cdLocal2 = new Modlocal2();
  nmLocal3: string;
}




export class ModNivel1 {
  cdNivel1: number;
  cdEmpresa = new Cadempresa();
  nmNivel1: string;
}


export class ModNivel2 {
  cdNivel2: number;
  cdNivel1 = new ModNivel1();
  cdEmpresa = new Cadempresa();
  nmNivel2: string;
}



export class ModNivel3 {
  cdNivel1 = new ModNivel1();
  cdNivel2 = new ModNivel2();
  cdNivel3: number;
  cdEmpresa = new Cadempresa();
  nmNivel3: string;
}



export class ModNivel4 {
  cdNivel1 = new ModNivel1();
  cdNivel2 = new ModNivel2();
  cdNivel3 = new ModNivel3();
  cdNivel4: number;
  cdEmpresa = new Cadempresa();
  nmNivel4: string;
}


export class ModMonitoramentoTemplate {
  cdTemplate: number;
  mmTemplate: string;
  cdTipoDeVerificador = new Cadtipodeverificador();
}

export class AppMonitoramento{
  cdMonitoramento: number;
  cdTemplate = new ModMonitoramentoTemplate();
  cdEmpresa = new Cadempresa();
  nmMonitoramento: string;
  cdTipoDeVerificador = new Cadtipodeverificador();
  dtCriacao: Date;
  txLocal: string;
}

export class AppAvaliacao{
  cdAvaliacao: number;
  cdMonitoramento= new AppMonitoramento();
  cdEmpresa = new Cadempresa();
  nmAvaliacao: string;
  dtInicio: Date;
  dtFim: Date;
}





