import React from 'react';
import { TrendingUp, DollarSign, Percent, ShieldCheck, Tag, Award } from 'lucide-react';

interface CaseStudy {
  title: string;
  description: string;
  metrics: {
    before: string;
    after: string;
    difference: string;
    percentChange?: string;
  };
  icon: React.ElementType;
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Cobertura de seguro optimizada',
    description: 'Una colección familiar estaba asegurada por €120.000. Tras nuestra tasación profesional, se reveló que su valor real era de €285.000, ajustando la cobertura y evitando una potencial subvaloración.',
    metrics: {
      before: '€120.000',
      after: '€285.000',
      difference: '+€165.000',
      percentChange: '+138%'
    },
    icon: ShieldCheck
  },
  {
    title: 'Venta por encima del precio estimado',
    description: 'Un cliente consideraba vender una obra en €25.000 según estimaciones online. Nuestra tasación reveló que la obra valía €68.000, precio por el que finalmente se vendió.',
    metrics: {
      before: '€25.000',
      after: '€68.000',
      difference: '+€43.000',
      percentChange: '+172%'
    },
    icon: TrendingUp
  },
  {
    title: 'Reducción en impuestos patrimoniales',
    description: 'Una colección heredada fue inicialmente valorada en €450.000 por un tasador generalista. Nuestra tasación especializada identificó obras de menor valor, reduciendo la valoración para impuestos a €320.000.',
    metrics: {
      before: '€450.000',
      after: '€320.000',
      difference: '-€130.000',
      percentChange: '-29%'
    },
    icon: Percent
  }
];

const benefitsList = [
  {
    title: 'Evitar subvaloración en seguros',
    description: 'Protege adecuadamente tu inversión artística con una valoración precisa',
    icon: ShieldCheck
  },
  {
    title: 'Maximizar precio de venta',
    description: 'Conoce el valor real de mercado para negociar desde una posición de fuerza',
    icon: DollarSign
  },
  {
    title: 'Optimizar planificación fiscal',
    description: 'Declaraciones patrimoniales precisas para donaciones, herencias e impuestos',
    icon: Percent
  },
  {
    title: 'Verificar autenticidad y procedencia',
    description: 'Confirmación experta del origen y autenticidad que incrementa el valor',
    icon: Tag
  },
  {
    title: 'Documentación profesional',
    description: 'Informes reconocidos por instituciones financieras, aseguradoras y casas de subastas',
    icon: Award
  }
];

export default function ValueProposition() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            El valor tangible de una tasación profesional
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Una tasación profesional no es un gasto, es una <span className="font-semibold text-primary">inversión con retorno cuantificable</span>. 
            Descubre cómo nuestras tasaciones han generado valor real para nuestros clientes.
          </p>
        </div>

        {/* Casos de estudio */}
        <div className="grid gap-8 lg:grid-cols-3 mb-20">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              {/* Header con gradiente */}
              <div className="bg-gradient-to-r from-blue-600 to-primary p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-white/20 p-3">
                    {React.createElement(study.icon, { 
                      className: "h-6 w-6 text-white" 
                    })}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {study.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-3 text-center">
                  <div className="p-2 rounded-l-lg bg-white/10">
                    <p className="text-xs text-white/80 uppercase font-medium">Valoración inicial</p>
                    <p className="text-xl font-bold text-white">{study.metrics.before}</p>
                  </div>
                  <div className="p-2 bg-white/10">
                    <p className="text-xs text-white/80 uppercase font-medium">Valoración final</p>
                    <p className="text-xl font-bold text-white">{study.metrics.after}</p>
                  </div>
                  <div className="p-2 rounded-r-lg bg-white/10">
                    <p className="text-xs text-white/80 uppercase font-medium">Diferencia</p>
                    <div className="flex justify-center items-center gap-1">
                      <p className="text-xl font-bold text-white">{study.metrics.difference}</p>
                      {study.metrics.percentChange && (
                        <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${study.metrics.percentChange.startsWith('+') ? 'bg-green-500/20 text-green-100' : 'bg-blue-500/20 text-blue-100'}`}>
                          {study.metrics.percentChange}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Cuerpo del caso */}
              <div className="p-6">
                <p className="text-gray-600">{study.description}</p>
                
                <div className="mt-6 flex justify-end">
                  <span className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark">
                    Ver caso completo
                    <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
              
              {/* Etiqueta ROI */}
              <div className="absolute top-0 right-0 bg-green-600 text-white py-1 px-3 text-sm font-medium rounded-bl-lg">
                ROI Demostrado
              </div>
            </div>
          ))}
        </div>

        {/* Beneficios adicionales */}
        <div className="flex flex-col items-center text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Beneficios adicionales que maximizan tu inversión
          </h3>
          <p className="text-gray-600 max-w-3xl mb-12">
            Más allá del valor económico inmediato, una tasación profesional ofrece beneficios a largo plazo 
            que <span className="font-medium">protegen y potencian</span> el valor de tu patrimonio artístico.
          </p>
        </div>
        
        {/* Lista de beneficios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsList.map((benefit, index) => (
            <div 
              key={index} 
              className="flex p-6 border border-gray-200 rounded-xl hover:border-primary hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 mr-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  {React.createElement(benefit.icon, { 
                    className: "h-6 w-6 text-primary" 
                  })}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-1">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://appraisily.com/start"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:from-primary/90 hover:to-blue-600/90 transition-all duration-200"
          >
            Obtener una tasación profesional
            <TrendingUp className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
} 