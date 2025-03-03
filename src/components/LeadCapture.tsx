import React, { useState, useEffect } from 'react';
import { ArrowRight, AlertCircle, CheckCircle2, FileQuestion, Clock, Mail, X, Upload } from 'lucide-react';

export default function LeadCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(false);
  const [fileSelected, setFileSelected] = useState(false);
  const [fileName, setFileName] = useState('');

  // Validación de email en tiempo real
  useEffect(() => {
    if (!email) {
      setEmailError('');
      setEmailValid(false);
      return;
    }
    
    // Solo validar si el usuario ha interactuado con el campo
    if (!touched) return;
    
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (!emailRegex.test(email)) {
      if (email.indexOf('@') === -1) {
        setEmailError('Falta el símbolo @');
      } else if (email.indexOf('.') === -1) {
        setEmailError('Falta un dominio válido (.com, .es, etc.)');
      } else {
        setEmailError('Dirección de email inválida');
      }
      setEmailValid(false);
    } else {
      setEmailError('');
      setEmailValid(true);
    }
  }, [email, touched]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar antes de enviar
    if (!email) {
      setEmailError('El email es obligatorio');
      setTouched(true);
      return;
    }
    
    if (!emailValid) {
      // Si hay error, resaltar pero no enviar
      setTouched(true);
      return;
    }
    
    setLoading(true);
    
    // Simulación de envío (en producción, conectar con API real)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Aquí iría el código para enviar el email a un CRM o sistema de email marketing
    }, 1000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileSelected(true);
      setFileName(e.target.files[0].name);
    } else {
      setFileSelected(false);
      setFileName('');
    }
  };

  const problems = [
    {
      title: "¿No sabes cuánto vale tu obra de arte?",
      description: "Muchos coleccionistas no conocen el valor de mercado actual de sus piezas, lo que puede llevar a ventas por debajo del precio justo o pólizas de seguro inadecuadas.",
      highlight: "tasación actualizada"
    },
    {
      title: "¿Necesitas documentación para seguros o herencias?",
      description: "Sin un informe USPAP compliant, es difícil asegurar correctamente tu colección o gestionar aspectos legales en donaciones o sucesiones.",
      highlight: "documentación profesional"
    },
    {
      title: "¿Dudas de la autenticidad o procedencia?",
      description: "El mercado está lleno de atribuciones dudosas y falsificaciones. Un análisis experto de procedencia y autenticidad puede incrementar significativamente el valor.",
      highlight: "verificación experta"
    }
  ];

  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_0.5px,transparent_0.5px)] opacity-10 [background-size:16px_16px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Problema-Solución */}
          <div className="order-2 md:order-1">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              <span className="text-primary border-b-2 border-primary pb-1">URGENTE:</span> Las valoraciones de arte fluctúan constantemente
            </h2>
            <p className="text-gray-700 mb-6">
              <strong>El mercado del arte es notablemente volátil</strong>. ¿Sabías que el valor de tu obra podría haber cambiado hasta un <span className="bg-yellow-100 px-1 font-medium">30% en el último año</span>? No arriesgues con valoraciones desactualizadas.
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex gap-3 sm:gap-4 bg-white/60 p-3 sm:p-4 rounded-lg border border-blue-100 shadow-sm hover:bg-white/80 transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    <div className="rounded-full bg-primary/10 p-1.5 sm:p-2">
                      <AlertCircle size={18} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{problem.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-600">
                      {problem.description.split(problem.highlight).map((part, i, arr) => 
                        i === arr.length - 1 ? part : 
                        <React.Fragment key={i}>
                          {part}<span className="font-medium text-primary">{problem.highlight}</span>
                        </React.Fragment>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 items-center bg-gradient-to-r from-green-50 to-blue-50 p-3 sm:p-4 rounded-lg border border-green-100 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="rounded-full bg-green-100 p-1.5 sm:p-2">
                  <CheckCircle2 size={18} className="text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 text-sm sm:text-base">Nuestra metodología de tasación</h3>
                <p className="mt-1 text-xs sm:text-sm text-gray-600">
                  Nuestros <strong>peritos certificados USPAP</strong> evalúan tus obras aplicando <span className="italic">connoisseurship</span> y análisis de mercado comparativo. Proporcionamos informes <strong>Fair Market Value (FMV)</strong> e <strong>Insurance Value</strong> respaldados por décadas de expertise.
                </p>
              </div>
            </div>
          </div>
          
          {/* Formulario de captura */}
          <div className="order-1 md:order-2 bg-white rounded-2xl shadow-xl p-5 sm:p-8 border border-gray-100 relative">
            {/* Sello de urgencia */}
            <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse flex items-center gap-1 whitespace-nowrap z-10">
              <Clock size={14} />
              VENTANA LIMITADA
            </div>
            
            {!submitted ? (
              <>
                <div className="flex items-center gap-2 sm:gap-3 mb-4">
                  <div className="flex-shrink-0">
                    <div className="rounded-full bg-blue-100 p-1.5 sm:p-2">
                      <FileQuestion size={18} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900">
                    Recibe una <span className="text-primary font-bold">mini-evaluación gratuita</span>
                  </h3>
                </div>
                
                <ul className="text-gray-600 mb-4 sm:mb-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="flex-shrink-0 mt-1 rounded-full bg-green-100 p-0.5 sm:p-1">
                      <CheckCircle2 size={10} className="text-green-600 sm:w-3 sm:h-3" />
                    </div>
                    <span className="text-xs sm:text-sm"><strong>Valoración preliminar</strong> basada en datos de mercado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex-shrink-0 mt-1 rounded-full bg-green-100 p-0.5 sm:p-1">
                      <CheckCircle2 size={10} className="text-green-600 sm:w-3 sm:h-3" />
                    </div>
                    <span className="text-xs sm:text-sm">Opinión sobre <strong>autenticidad y atribución</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex-shrink-0 mt-1 rounded-full bg-green-100 p-0.5 sm:p-1">
                      <CheckCircle2 size={10} className="text-green-600 sm:w-3 sm:h-3" />
                    </div>
                    <span className="text-xs sm:text-sm">Respuesta en <strong>24-48 horas</strong> por tasadores certificados</span>
                  </li>
                </ul>
                
                <div className="bg-blue-50 p-2 sm:p-3 rounded-lg mb-4 sm:mb-6 border-l-4 border-primary">
                  <p className="text-xs sm:text-sm text-gray-700">
                    <strong>¡URGENTE!</strong> El mercado del arte está cambiando rápidamente. Asegura el valor actual de tu obra antes de que las fluctuaciones de mercado afecten su valoración.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className={`relative ${emailError && touched ? 'animate-shake' : ''}`}>
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={16} className={`${emailError && touched ? 'text-red-500' : emailValid ? 'text-green-500' : 'text-gray-400'}`} />
                      </div>
                      
                      {email && touched && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                          {emailValid ? (
                            <CheckCircle2 size={16} className="text-green-500" />
                          ) : (
                            <X size={16} className="text-red-500" />
                          )}
                        </div>
                      )}
                      
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocused(true)}
                        onBlur={() => {
                          setFocused(false);
                          setTouched(true);
                        }}
                        required
                        placeholder="tu@email.com"
                        className={`w-full pl-10 pr-10 py-2 sm:py-3 rounded-lg border ${
                          emailError && touched
                            ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                            : emailValid
                            ? 'border-green-300 focus:ring-green-500 focus:border-green-500'
                            : 'border-gray-300 focus:ring-primary focus:border-primary'
                        } transition-colors text-sm sm:text-base focus:outline-none focus:ring-2`}
                        aria-invalid={emailError ? 'true' : 'false'}
                        aria-describedby={emailError ? 'email-error' : undefined}
                      />
                    </div>
                    
                    {emailError && touched && (
                      <p className="mt-1 text-xs text-red-600" id="email-error">
                        {emailError}
                      </p>
                    )}
                    
                    {email && !emailError && touched && (
                      <p className="mt-1 text-xs text-green-600">
                        Email válido
                      </p>
                    )}
                    
                    {focused && !touched && email && (
                      <p className="mt-1 text-xs text-gray-500">
                        Introduce un email válido para recibir la mini-evaluación
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="artwork-photo" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Foto de la obra (opcional)
                    </label>
                    <div className="relative">
                      <div className={`flex items-center justify-center w-full p-2 text-xs sm:text-sm text-gray-600 bg-gray-50 rounded-lg border ${fileSelected ? 'border-green-300' : 'border-gray-300'} cursor-pointer hover:bg-gray-100 transition-colors`}>
                        <input
                          type="file"
                          id="artwork-photo"
                          accept="image/*"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                        <label htmlFor="artwork-photo" className="flex items-center justify-center gap-2 cursor-pointer py-2 w-full">
                          <Upload size={16} className={fileSelected ? 'text-green-500' : 'text-gray-400'} />
                          {fileSelected ? (
                            <span className="truncate max-w-[200px]">{fileName}</span>
                          ) : (
                            <span>Selecciona un archivo o arrastra aquí</span>
                          )}
                        </label>
                      </div>
                    </div>
                    <p className="mt-1 text-3xs sm:text-xs text-gray-500">
                      Formatos aceptados: JPG, PNG. Máximo 5 MB.
                    </p>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full flex items-center justify-center gap-2 rounded-xl ${
                      emailValid 
                        ? 'bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90' 
                        : 'bg-gray-400 cursor-not-allowed'
                    } px-4 sm:px-6 py-2.5 sm:py-3 text-white font-medium transition-all duration-200 disabled:opacity-70 text-sm sm:text-base shadow-md hover:shadow-lg`}
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Procesando...
                      </div>
                    ) : (
                      <>
                        Solicitar mini-tasación GRATUITA
                        <ArrowRight size={16} className="sm:h-[18px] sm:w-[18px]" />
                      </>
                    )}
                  </button>
                </form>
                
                <div className="mt-4 flex items-center justify-center gap-1 text-3xs sm:text-xs text-gray-500">
                  <svg className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Información 100% confidencial - Nunca compartiremos tus datos</span>
                </div>
              </>
            ) : (
              <div className="text-center py-6 sm:py-8">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-green-100 p-3 sm:p-4">
                    <CheckCircle2 size={24} className="text-green-600 sm:h-8 sm:w-8" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
                  ¡Solicitud recibida!
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-6">
                  Gracias por contactarnos. Nuestros expertos en tasación revisarán tu obra y te enviarán una mini-evaluación a tu correo electrónico <strong className="text-primary">{email}</strong> en las próximas <strong>24-48 horas</strong>.
                </p>
                <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-100 text-left">
                  <p className="text-xs sm:text-sm text-gray-700 mb-2">
                    <strong>SIGUIENTE PASO:</strong>
                  </p>
                  <p className="text-3xs sm:text-xs text-gray-600">
                    Revisa tu bandeja de entrada. Te hemos enviado un email con información sobre cómo preparar tu obra para una tasación completa, así como detalles sobre nuestro proceso de evaluación profesional.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setEmail('');
                    setEmailValid(false);
                    setEmailError('');
                    setTouched(false);
                    setFileSelected(false);
                    setFileName('');
                  }}
                  className="mt-6 text-primary text-xs sm:text-sm font-medium hover:underline flex items-center gap-1 mx-auto"
                >
                  <ArrowRight size={12} className="transform rotate-180 sm:h-4 sm:w-4" />
                  Enviar otra solicitud
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 