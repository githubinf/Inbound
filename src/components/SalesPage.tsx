/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Check, ArrowRight, ShieldCheck, Star, HelpCircle, Mail, BarChart3, Target, BookOpen, Users, Zap, Clock, Award } from "lucide-react";

const BotonPago = ({ texto = "COMPRAR AHORA", href = "#oferta", isSmall = false }) => {
  const isInternal = href.startsWith("#");
  
  const handleClick = (e: React.MouseEvent) => {
    if (isInternal) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const buttonClasses = `${
    isSmall ? 'px-8 py-4 text-lg' : 'px-12 py-6 text-xl'
  } bg-gradient-to-r from-naranja to-dorado text-fondo font-bold uppercase tracking-widest rounded-sm hover:shadow-[0_0_30px_rgba(255,106,0,0.4)] transition-all duration-300 cursor-pointer text-center no-underline inline-block border-none`;

  return (
    <div className={`flex flex-col items-center gap-4 ${isSmall ? 'my-6' : 'my-12'}`}>
      {isInternal ? (
        <button 
          onClick={handleClick}
          className={buttonClasses}
        >
          {texto}
        </button>
      ) : (
        <a 
          href={href}
          className={buttonClasses}
        >
          {texto}
        </a>
      )}
      {!isSmall && (
        <div className="flex items-center gap-2 text-amarillo/60 text-sm font-medium">
          <ShieldCheck size={16} />
          <span>Pago seguro y encriptado • Acceso inmediato</span>
        </div>
      )}
    </div>
  );
};

const SeccionTexto = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`max-w-3xl mx-auto px-6 mb-16 text-lg leading-relaxed text-white/80 ${className}`}>
    {children}
  </div>
);

const EncabezadoEditorial = ({ children, subtitulo, numero }: { children: React.ReactNode, subtitulo?: string, numero?: string }) => (
  <div className="max-w-4xl mx-auto px-6 mb-12 text-center">
    {numero && (
      <span className="font-mono text-naranja text-sm tracking-[0.3em] uppercase mb-4 block">
        Capítulo {numero}
      </span>
    )}
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white leading-tight">
      {children}
    </h2>
    {subtitulo && (
      <p className="text-amarillo font-medium tracking-wide uppercase text-sm">
        {subtitulo}
      </p>
    )}
    <div className="editorial-divider" />
  </div>
);

export default function SalesPage() {
  return (
    <div className="min-h-screen selection:bg-naranja selection:text-white">
      {/* Hero Section */}
      <header className="relative pt-12 pb-24 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rojo-oscuro blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-naranja blur-[120px] rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 leading-[1.1] text-white">
              Guía Completa de <span className="text-gradient">Inbound Marketing</span>
            </h1>
            <p className="text-xl md:text-2xl text-amarillo font-medium mb-12 tracking-wide">
              Atraiga a sus clientes ideales con esta guía para negocios pequeños
            </p>
            <div className="text-lg md:text-xl text-white/70 leading-relaxed">
              La única hoja de ruta que convierte la teoría del marketing digital en acciones concretas, medibles y rentables. Sin jerga innecesaria. Sin promesas falsas. Con un método probado para empresas que necesitan resultados sin depender de la publicidad cara.
            </div>
            <div className="flex justify-center md:justify-start">
              <BotonPago texto="QUIERO LA GUÍA AHORA" isSmall={true} />
            </div>
          </div>
          <div className="flex-1 max-w-xs md:max-w-sm lg:max-w-md">
            <img 
              src="https://i.ibb.co/Sp4GnWM/guia-inbound-marketing.png" 
              alt="Portada Guía Inbound Marketing" 
              className="w-full h-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-lg transform hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
              fetchpriority="high"
            />
          </div>
        </div>
      </header>

      <main>
        {/* El Manifiesto */}
        <section className="py-24 bg-white/[0.01] border-y border-white/5">
          <EncabezadoEditorial subtitulo="Nuestra filosofía fundamental">
            El Manifiesto de la Atracción: Por qué el marketing tradicional ha muerto
          </EncabezadoEditorial>
          <SeccionTexto>
            <p className="mb-6">
              Vivimos en la era de la resistencia publicitaria. El consumidor moderno ha desarrollado una suerte de "sistema inmunológico" contra la interrupción. Ignoramos los anuncios en televisión, bloqueamos la publicidad en nuestros navegadores y saltamos los vídeos promocionales en cuanto aparece el botón de omitir.
            </p>
            <p className="mb-6">
              Sin embargo, muchos negocios pequeños siguen operando bajo el viejo paradigma: gritar más fuerte que la competencia. Invierten sus limitados recursos en anuncios que nadie quiere ver, esperando que, por pura estadística, alguien acabe comprando.
            </p>
            <p className="mb-6">
              Inbound Marketing no es solo una técnica; es un cambio de postura. Es dejar de ser el cazador que persigue a su presa para convertirse en el faro que guía a quien ya está buscando una solución.
            </p>
            <p className="mb-6">
              Este libro defiende tres pilares innegociables:
            </p>
            <ul className="space-y-6 mb-8">
              <li className="flex gap-4">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-naranja/10 text-naranja font-serif text-xl">1</div>
                <div>
                  <h6 className="text-white font-serif text-lg mb-2">La utilidad como moneda de cambio</h6>
                  <p>En internet, la atención no se compra, se gana. Y la única forma de ganarla de manera sostenible es siendo útil antes de intentar ser rentable. Si usted ayuda a su cliente a resolver un pequeño problema hoy, él confiará en usted para resolver su gran problema mañana.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-naranja/10 text-naranja font-serif text-xl">2</div>
                <div>
                  <h6 className="text-white font-serif text-lg mb-2">La autoridad basada en la generosidad</h6>
                  <p>Muchos temen "regalar" su conocimiento. Piensan que si enseñan cómo se hace, el cliente no los contratará. La realidad es la opuesta: cuando usted demuestra que sabe de lo que habla a través de contenido valioso, se posiciona como la única opción lógica cuando el cliente decide delegar esa tarea.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-naranja/10 text-naranja font-serif text-xl">3</div>
                <div>
                  <h6 className="text-white font-serif text-lg mb-2">La paciencia estratégica</h6>
                  <p>El crecimiento exponencial no ocurre de la noche a la mañana. Inbound Marketing es un interés compuesto de activos digitales. Cada artículo, cada correo y cada guía es un vendedor que trabaja para usted las veinticuatro horas del día, los siete días de la semana, para siempre.</p>
                </div>
              </li>
            </ul>
            <p className="italic text-white/60">
              Si usted está listo para dejar de gritar y empezar a atraer, ha llegado al lugar correcto.
            </p>
          </SeccionTexto>
        </section>

        {/* Introducción */}
        <SeccionTexto>
          <p className="mb-8 border-l-2 border-naranja pl-8 italic text-xl text-white">
            Este libro no es para quien busca atajos. Es para quien está cansado de sentirse ignorado.
          </p>
          <p className="mb-6">
            Usted ha creado un negocio con esfuerzo. Sabe que su producto o servicio ayuda a personas reales. Pero hay un problema:
          </p>
          <p className="mb-6 font-serif text-2xl text-white">
            Sus clientes ideales no lo encuentran.
          </p>
          <p className="mb-6">
            Y cuando lo encuentran, no confían en usted lo suficiente como para dar el paso.
          </p>
          <p className="mb-6">
            Ha intentado soluciones rápidas. Publicidad en redes sociales que cuesta dinero y no retorna inversión. Descuentos que atraen al cliente equivocado. Presencia esporádica en internet que no construye autoridad.
          </p>
          <p className="mb-6">
            La frustración es real. Usted no necesita más información. Necesita un sistema.
          </p>
        </SeccionTexto>

        <div className="editorial-divider" />

        {/* El Sueño */}
        <EncabezadoEditorial subtitulo="La transformación de su negocio">
          ¿Qué pasaría si sus clientes lo buscaran a usted en lugar de usted perseguirlos a ellos?
        </EncabezadoEditorial>

        <SeccionTexto>
          <p className="mb-6">Imagínelo durante un momento.</p>
          <p className="mb-6">
            Usted publica un artículo en su sitio web. No es un artículo cualquiera. Es un contenido que responde exactamente a la pregunta que su cliente ideal se hace a las tres de la tarde mientras busca una solución.
          </p>
          <p className="mb-6">
            Esa persona llega desde un motor de búsqueda. Lee. Confía. Y al final del artículo, encuentra una oferta tan valiosa que no puede resistirse a dejar sus datos.
          </p>
          <p className="mb-6">
            A partir de ahí, usted no necesita perseguirlo.
          </p>
          <p className="mb-6">
            Usted lo acompaña con correos electrónicos útiles. Le muestra cómo otros como él han resuelto sus problemas. Le demuestra, paso a paso, por qué su solución es la mejor opción.
          </p>
          <p className="mb-6">
            Y cuando finalmente decide comprar, no lo hace porque usted lo presionó. Lo hace porque usted lo ayudó a confiar.
          </p>
          <p className="text-naranja font-bold text-xl mt-8">
            Eso es Inbound Marketing. Eso es lo que este libro le enseña a implementar.
          </p>
        </SeccionTexto>

        <div className="editorial-divider" />

        {/* Crítica a la teoría */}
        <SeccionTexto>
          <h3 className="text-3xl font-serif text-white mb-8">Lo que otros libros no le cuentan: la teoría no paga facturas.</h3>
          <p className="mb-6">
            He leído decenas de libros de marketing. La mayoría son hermosos en la teoría y decepcionantes en la práctica.
          </p>
          <p className="mb-6">
            Le explican qué es un «perfil de cliente ideal», pero no cómo construirlo con los recursos que usted tiene ahora. Le hablan del «viaje del comprador», pero no le dan las plantillas para mapearlo. Le prometen que el «contenido es el rey», pero no le muestran un calendario editorial para los próximos treinta días.
          </p>
          <p className="mb-6">
            Este libro es diferente porque nació de la frustración de haber estado donde usted está ahora.
          </p>
          <p className="mb-6">
            No es un tratado académico de ochocientas páginas. No es un compendio de trucos mágicos. Es un taller práctico en formato libro.
          </p>
          <p className="mb-6 font-medium text-amarillo">
            Cada capítulo le entrega algo que puede usar hoy mismo.
          </p>
        </SeccionTexto>

        {/* PRIMER BOTÓN DE PAGO */}
        <div className="bg-white/5 py-16 border-y border-white/10">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h4 className="text-2xl font-serif mb-4">Comience hoy mismo.</h4>
            <p className="text-white/60 mb-8">Invierta $9,99 para transformar su estrategia de marketing.</p>
            <BotonPago texto="¡SÍ, QUIERO EMPEZAR A ATRAER CLIENTES!" />
          </div>
        </div>

        {/* Lo que construirá */}
        <section className="py-24 bg-fondo">
          <EncabezadoEditorial subtitulo="Resultados tangibles">
            Lo que construirá al trabajar este libro
          </EncabezadoEditorial>
          
          <SeccionTexto className="text-center italic mb-16">
            (No al leerlo, al trabajarlo)
          </SeccionTexto>

          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                titulo: "Un mapa del viaje de su cliente ideal",
                desc: "Sabrá exactamente qué piensa, qué siente y qué busca su cliente en cada etapa del proceso de decisión. Esto no es adivinanza. Es un documento estratégico que guiará todo su marketing."
              },
              {
                titulo: "Una lista de temas validada con datos reales",
                desc: "No perderá tiempo escribiendo sobre lo que a usted le parece interesante. Publicará contenido que su audiencia ya está buscando. Lo sabe porque lo investigó."
              },
              {
                titulo: "Un calendario editorial para las próximas cuatro semanas",
                desc: "Dejará de depender de la inspiración del momento. Publicará con constancia, que es lo único que construye autoridad a largo plazo."
              },
              {
                titulo: "Su primer imán de clientes potenciales publicado",
                desc: "Ese recurso valioso (una guía, una lista de verificación, un conjunto de plantillas) que usted entrega a cambio del correo electrónico de sus visitantes."
              },
              {
                titulo: "Una página de destino optimizada y funcionando",
                desc: "El mecanismo que convierte a un visitante anónimo en un contacto con nombre y correo electrónico. Configurada, probada y lista para generar clientes potenciales."
              },
              {
                titulo: "Una secuencia de bienvenida automatizada",
                desc: "Desde el momento en que alguien se suscribe, recibe una serie de mensajes que lo educan y lo preparan para la venta. El sistema trabaja por usted."
              },
              {
                titulo: "Optimización para motores de búsqueda",
                desc: "Aprenderá a modificar títulos, descripciones y estructura para que Google entienda mejor su contenido y lo muestre a quien lo busca."
              },
              {
                titulo: "Un cuadro de mando con sus indicadores clave",
                desc: "Dejará de adivinar qué funciona. Verá de un vistazo cuántas personas llegan a su sitio, de dónde vienen y qué hacen cuando están allí."
              },
              {
                titulo: "Un flujo de trabajo automatizado funcionando",
                desc: "Ya sea una secuencia de nutrición o una campaña de recuperación de carritos abandonados, usted tendrá un proceso que escala sus esfuerzos."
              },
              {
                titulo: "La historia principal de su marca documentada",
                desc: "Sabrá contar quién es, a quién ayuda y por qué importa. Y lo más importante, sabrá adaptar esa historia a cada formato."
              },
              {
                titulo: "Un plan para fidelizar a sus clientes",
                desc: "Porque el verdadero crecimiento no viene de la venta única, sino de los clientes que se quedan y recomiendan."
              }
            ].map((item, i) => (
              <div 
                key={i}
                className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
              >
                <h5 className="text-xl font-serif text-dorado mb-4 flex items-center gap-3">
                  <Check className="text-naranja" size={20} />
                  {item.titulo}
                </h5>
                <p className="text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Psicología del Comprador */}
        <section className="py-24 bg-fondo">
          <EncabezadoEditorial subtitulo="Entendiendo la mente de su cliente">
            La Psicología del Comprador Moderno: Por qué el 97% de su mercado no está listo para comprar hoy
          </EncabezadoEditorial>
          <SeccionTexto>
            <p className="mb-6">
              Uno de los mayores errores del marketing tradicional es tratar a todo el mercado como si estuviera listo para comprar en este preciso instante. La realidad es mucho más compleja.
            </p>
            <p className="mb-6">
              Según diversos estudios de comportamiento del consumidor, en cualquier mercado dado, solo el 3% de las personas están en "modo compra" activo. El otro 97% se divide en etapas de conciencia:
            </p>
            <div className="space-y-6 mb-12">
              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <h6 className="text-white font-serif text-lg mb-2">El 7% tiene conciencia del problema, pero no busca solución activa</h6>
                <p className="text-white/60">Saben que algo no va bien, pero no han priorizado resolverlo. Aquí es donde el contenido educativo empieza a plantar semillas.</p>
              </div>
              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <h6 className="text-white font-serif text-lg mb-2">El 30% no cree que tenga un problema</h6>
                <p className="text-white/60">Están cómodos en su situación actual. Su labor aquí es mostrarles el costo de la inacción y las oportunidades que están perdiendo.</p>
              </div>
              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <h6 className="text-white font-serif text-lg mb-2">El 60% restante es indiferente o no es su cliente ideal</h6>
                <p className="text-white/60">Y eso está bien. Inbound Marketing también sirve para filtrar a quienes no valorarán su trabajo.</p>
              </div>
            </div>
            <p className="mb-6">
              Si usted solo publica ofertas y descuentos, está compitiendo ferozmente por ese pequeño 3%. Pero si usted educa, guía y acompaña, está construyendo una relación con el 37% restante.
            </p>
            <p className="mb-6">
              Cuando ese 37% finalmente decida dar el paso hacia la compra, ¿a quién cree que elegirán? ¿Al desconocido que les lanzó un anuncio intrusivo o al experto que les ha estado ayudando durante meses de forma gratuita?
            </p>
            <p className="text-naranja font-bold">
              La respuesta es obvia. Y ese es el poder de Inbound Marketing.
            </p>
          </SeccionTexto>
        </section>

        {/* Comparativa */}
        <section className="py-24 bg-white/[0.02] border-y border-white/5">
          <EncabezadoEditorial subtitulo="La elección es suya">
            Comparativa: Marketing de Interrupción vs. Marketing de Atracción
          </EncabezadoEditorial>
          <div className="max-w-5xl mx-auto px-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-6 px-4 font-serif text-xl text-white">Característica</th>
                  <th className="py-6 px-4 font-serif text-xl text-rojo-oscuro">Marketing de Interrupción</th>
                  <th className="py-6 px-4 font-serif text-xl text-naranja">Marketing de Atracción</th>
                </tr>
              </thead>
              <tbody className="text-white/70">
                <tr className="border-b border-white/10">
                  <td className="py-6 px-4 font-bold text-white">Enfoque principal</td>
                  <td className="py-6 px-4">Vender el producto de inmediato.</td>
                  <td className="py-6 px-4">Ayudar al cliente a resolver un problema.</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-6 px-4 font-bold text-white">Relación con el cliente</td>
                  <td className="py-6 px-4">Transaccional y efímera.</td>
                  <td className="py-6 px-4">Basada en la confianza y la autoridad.</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-6 px-4 font-bold text-white">Costo a largo plazo</td>
                  <td className="py-6 px-4">Aumenta (más competencia por anuncios).</td>
                  <td className="py-6 px-4">Disminuye (activos digitales permanentes).</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-6 px-4 font-bold text-white">Percepción de marca</td>
                  <td className="py-6 px-4">Vendedor insistente o "spam".</td>
                  <td className="py-6 px-4">Líder de pensamiento y guía experto.</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-6 px-4 font-bold text-white">Medición de éxito</td>
                  <td className="py-6 px-4">Clics y ventas directas hoy.</td>
                  <td className="py-6 px-4">Valor de vida del cliente y lealtad.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="editorial-divider" />

        {/* Hoja de Ruta */}
        <section className="py-24">
          <EncabezadoEditorial subtitulo="Su plan de acción">
            Hoja de Ruta: Sus primeros 90 días con Inbound Marketing
          </EncabezadoEditorial>
          <SeccionTexto>
            <div className="space-y-12">
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-naranja flex items-center justify-center text-fondo font-bold">1</div>
                <h6 className="text-xl font-serif text-white mb-4">Días 1-30: Cimentación y Estrategia</h6>
                <p className="mb-4">Durante el primer mes, usted no publicará nada. Se dedicará a entender profundamente a su cliente. Definirá su 'Avatar', investigará los problemas que le quitan el sueño y auditará sus activos actuales. Al final de este mes, tendrá su mapa de viaje del cliente y su lista de temas validada.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-naranja flex items-center justify-center text-fondo font-bold">2</div>
                <h6 className="text-xl font-serif text-white mb-4">Días 31-60: Creación y Captación</h6>
                <p className="mb-4">Es el momento de construir su 'Fábrica de Clientes'. Creará su primer imán de clientes potenciales (una guía, una plantilla o un vídeo exclusivo) y diseñará la página de destino para capturar correos. Empezará a publicar sus primeros artículos estratégicos optimizados para SEO.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-naranja flex items-center justify-center text-fondo font-bold">3</div>
                <h6 className="text-xl font-serif text-white mb-4">Días 61-90: Automatización y Nutrición</h6>
                <p className="mb-4">Configurará su secuencia de bienvenida automatizada. Cada persona que se registre empezará a recibir valor de su parte sin que usted mueva un dedo. Empezará a medir los primeros resultados de tráfico y conversión, ajustando los títulos y llamados a la acción según los datos reales.</p>
              </div>
            </div>
          </SeccionTexto>
        </section>

        <div className="editorial-divider" />

        {/* Mitos y Realidades */}
        <section className="py-24 bg-white/[0.01]">
          <EncabezadoEditorial subtitulo="Claridad absoluta">
            Mitos y Realidades de Inbound Marketing
          </EncabezadoEditorial>
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-white/10">
              <h6 className="text-rojo-oscuro font-serif text-lg mb-4">Mito: "Necesito ser un escritor experto"</h6>
              <p className="text-white/60 italic">Realidad: Solo necesita conocer su negocio y querer ayudar. La claridad y la empatía venden mucho más que la prosa perfecta. Además, hoy existen herramientas que le ayudan a pulir sus textos.</p>
            </div>
            <div className="p-8 border border-white/10">
              <h6 className="text-rojo-oscuro font-serif text-lg mb-4">Mito: "Es solo para empresas tecnológicas"</h6>
              <p className="text-white/60 italic">Realidad: Funciona para fontaneros, abogados, psicólogos y tiendas de barrio. Cualquier negocio que resuelva un problema puede beneficiarse de educar a su audiencia antes de vender.</p>
            </div>
            <div className="p-8 border border-white/10">
              <h6 className="text-rojo-oscuro font-serif text-lg mb-4">Mito: "Lleva demasiado tiempo"</h6>
              <p className="text-white/60 italic">Realidad: Lo que lleva tiempo es perseguir clientes uno a uno. Inbound Marketing requiere una inversión inicial de tiempo, pero luego escala de forma exponencial y automática.</p>
            </div>
            <div className="p-8 border border-white/10">
              <h6 className="text-rojo-oscuro font-serif text-lg mb-4">Mito: "Regalar contenido canibaliza mis ventas"</h6>
              <p className="text-white/60 italic">Realidad: Regalar el "qué" y el "por qué" hace que la gente le pague por el "cómo" y por la implementación personalizada. La generosidad es la mejor prueba de competencia.</p>
            </div>
          </div>
        </section>

        <div className="editorial-divider" />

        {/* Costo de la Inacción */}
        <section className="py-24 bg-rojo-oscuro/10 border-y border-rojo-oscuro/20">
          <EncabezadoEditorial subtitulo="Una reflexión necesaria">
            El Costo de la Inacción: ¿Qué está perdiendo cada día que pasa?
          </EncabezadoEditorial>
          <SeccionTexto>
            <p className="mb-6">
              A menudo, cuando pensamos en invertir en una nueva estrategia, solo vemos el costo de la inversión. Pero rara vez nos detenemos a calcular el costo de no hacer nada.
            </p>
            <p className="mb-6">
              Cada día que usted no tiene un sistema de atracción funcionando, está perdiendo:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3"><ArrowRight className="text-naranja shrink-0" size={20} /> <span><strong>Datos de clientes potenciales:</strong> Personas que visitan su web y se van para siempre sin dejar rastro.</span></li>
              <li className="flex gap-3"><ArrowRight className="text-naranja shrink-0" size={20} /> <span><strong>Autoridad en su sector:</strong> Mientras usted calla, su competencia está educando a su mercado y posicionándose como la opción experta.</span></li>
              <li className="flex gap-3"><ArrowRight className="text-naranja shrink-0" size={20} /> <span><strong>Eficiencia comercial:</strong> Sus horas (o las de su equipo) se consumen en tareas repetitivas de prospección que podrían estar automatizadas.</span></li>
              <li className="flex gap-3"><ArrowRight className="text-naranja shrink-0" size={20} /> <span><strong>Tranquilidad:</strong> La incertidumbre de no saber de dónde vendrá el próximo cliente es el mayor enemigo del crecimiento.</span></li>
            </ul>
            <p className="mb-6">
              Invertir $9,99 hoy es una cifra insignificante comparada con el valor de un solo cliente fidelizado que llega a usted gracias a este método.
            </p>
          </SeccionTexto>
        </section>

        <div className="editorial-divider" />

        {/* Glosario */}
        <section className="py-24">
          <EncabezadoEditorial subtitulo="Hablamos el mismo idioma">
            Glosario de Inbound Marketing
          </EncabezadoEditorial>
          <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h6 className="text-white font-serif mb-2">Imán de Clientes (Lead Magnet)</h6>
              <p className="text-sm text-white/60">Recurso gratuito de alto valor que se entrega a cambio de la información de contacto del usuario.</p>
            </div>
            <div>
              <h6 className="text-white font-serif mb-2">Página de Destino (Landing Page)</h6>
              <p className="text-sm text-white/60">Página web diseñada con el único objetivo de convertir visitantes en contactos o clientes.</p>
            </div>
            <div>
              <h6 className="text-white font-serif mb-2">Nutrición de Contactos (Lead Nurturing)</h6>
              <p className="text-sm text-white/60">Proceso automatizado de envío de contenido relevante para guiar al cliente hacia la compra.</p>
            </div>
            <div>
              <h6 className="text-white font-serif mb-2">Viaje del Comprador (Buyer's Journey)</h6>
              <p className="text-sm text-white/60">Las etapas por las que pasa un cliente: Descubrimiento, Consideración y Decisión.</p>
            </div>
            <div>
              <h6 className="text-white font-serif mb-2">Llamada a la Acción (CTA)</h6>
              <p className="text-sm text-white/60">Instrucción clara que indica al usuario qué paso debe dar a continuación (ej. "Descargar ahora").</p>
            </div>
            <div>
              <h6 className="text-white font-serif mb-2">Conversión</h6>
              <p className="text-sm text-white/60">Cuando un usuario realiza la acción deseada, como suscribirse o comprar.</p>
            </div>
          </div>
        </section>

        <div className="editorial-divider" />

        {/* Autoridad */}
        <EncabezadoEditorial subtitulo="Experiencia real, no académica">
          Por qué confiar en esta guía
        </EncabezadoEditorial>

        <SeccionTexto>
          <p className="mb-6">
            El autor de este libro no es un conferencista internacional ni un gurú de las redes sociales. Es alguien que empezó desde cero, sin presupuesto para publicidad, y que tuvo que aprender haciendo.
          </p>
          <p className="mb-6">
            Cometió errores. Muchos.
          </p>
          <p className="mb-6">
            Invirtió tiempo en estrategias que no funcionaron. Creó contenido que nadie leyó. Configuró campañas que no convirtieron.
          </p>
          <p className="mb-6">
            Pero también aprendió lo que funciona.
          </p>
          <p className="mb-6">
            Ha asesorado a más de cincuenta negocios de diferentes sectores. Ha ayudado a emprendedores individuales a construir su primera audiencia desde cero. Ha formado equipos de marketing que querían dejar atrás las tácticas intrusivas.
          </p>
          <p className="mb-6">
            Su especialidad no es trabajar con grandes presupuestos. Es hacer más con menos.
          </p>
          <p className="mb-6">
            Cada concepto, cada ejercicio, cada recomendación práctica que encontrará en este libro viene de esa experiencia real. No es teoría sacada de manuales universitarios. Es lo que funciona en la vida real, con presupuestos reales y equipos reales (a veces equipos de una sola persona: usted).
          </p>
          <p className="mb-6 italic text-white/60">
            Además, el autor ha sido transparente sobre el uso de inteligencia artificial para estructurar ideas y corregir errores. Pero cada estrategia, cada plantilla y cada consejo práctico ha sido validado por su experiencia profesional.
          </p>
        </SeccionTexto>

        <div className="editorial-divider" />

        {/* El Problema */}
        <EncabezadoEditorial subtitulo="Los 5 errores fatales">
          El problema con la mayoría de los negocios pequeños
        </EncabezadoEditorial>

        <SeccionTexto>
          <div className="space-y-8">
            <div className="flex gap-6">
              <span className="text-4xl font-serif text-naranja opacity-50">01</span>
              <div>
                <h6 className="text-xl font-serif text-white mb-2">Publican contenido sin estrategia</h6>
                <p>Escriben un artículo aquí, publican una foto allá. No hay un plan. No saben a quién le están hablando. No miden si alguien está escuchando.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-4xl font-serif text-naranja opacity-50">02</span>
              <div>
                <h6 className="text-xl font-serif text-white mb-2">Persiguen métricas que no importan</h6>
                <p>Se obsesionan con el número de seguidores en redes sociales o con las visitas al sitio web, pero no saben cuántos de esos visitantes se convierten en clientes.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-4xl font-serif text-naranja opacity-50">03</span>
              <div>
                <h6 className="text-xl font-serif text-white mb-2">Intentan vender antes de construir confianza</h6>
                <p>Lanzan ofertas y descuentos a personas que aún no saben quiénes son. El resultado es que nadie les compra, y ellos se frustran y abandonan.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-4xl font-serif text-naranja opacity-50">04</span>
              <div>
                <h6 className="text-xl font-serif text-white mb-2">No tienen un sistema para capturar clientes potenciales</h6>
                <p>Atraen visitantes a su sitio web, pero no tienen forma de volver a contactarlos. Dependen de que el visitante recuerde volver por su cuenta.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-4xl font-serif text-naranja opacity-50">05</span>
              <div>
                <h6 className="text-xl font-serif text-white mb-2">No miden, no ajustan, no mejoran</h6>
                <p>Publican contenido, lanzan campañas, pero no saben qué funciona y qué no. Siguen haciendo lo mismo una y otra vez, esperando resultados diferentes.</p>
              </div>
            </div>
          </div>
          <p className="mt-12 text-xl text-amarillo font-medium">
            Este libro resuelve cada uno de estos errores con un sistema paso a paso.
          </p>
        </SeccionTexto>

        {/* SEGUNDO BOTÓN DE PAGO */}
        <div className="bg-white/5 py-16 border-y border-white/10">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h4 className="text-2xl font-serif mb-4">No deje que estos errores hundan su negocio.</h4>
            <p className="text-white/60 mb-8">Invierta $9,99 para transformar su estrategia de marketing.</p>
            <BotonPago texto="TRANSFORMAR MI NEGOCIO HOY MISMO" />
          </div>
        </div>

        {/* Para quién es */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="p-10 border-l-2 border-amarillo bg-white/[0.02]">
              <h4 className="text-3xl font-serif mb-8 text-amarillo">Este libro es para usted si:</h4>
              <ul className="space-y-4 text-white/80">
                <li className="flex gap-3"><Check className="text-amarillo shrink-0" size={20} /> <span>Es emprendedor o tiene una pequeña empresa y quiere atraer clientes sin depender de publicidad cara.</span></li>
                <li className="flex gap-3"><Check className="text-amarillo shrink-0" size={20} /> <span>Trabaja en marketing y necesita una guía estructurada para implementar estrategias de atracción.</span></li>
                <li className="flex gap-3"><Check className="text-amarillo shrink-0" size={20} /> <span>Es autodidacta y quiere pasar de «sé de qué va» a «ya lo estoy haciendo».</span></li>
                <li className="flex gap-3"><Check className="text-amarillo shrink-0" size={20} /> <span>Ha intentado implementar Inbound Marketing antes, pero se ha sentido abrumado.</span></li>
                <li className="flex gap-3"><Check className="text-amarillo shrink-0" size={20} /> <span>Tiene un presupuesto ajustado y necesita estrategias que funcionen sin invertir miles de dólares.</span></li>
              </ul>
            </div>
            <div className="p-10 border-l-2 border-rojo-oscuro bg-white/[0.02]">
              <h4 className="text-3xl font-serif mb-8 text-rojo-oscuro">Este libro NO es para usted si:</h4>
              <ul className="space-y-4 text-white/60">
                <li className="flex gap-3"><ArrowRight className="text-rojo-oscuro shrink-0" size={20} /> <span>Busca un tratado académico de ochocientas páginas con referencias a estudios antiguos.</span></li>
                <li className="flex gap-3"><ArrowRight className="text-rojo-oscuro shrink-0" size={20} /> <span>Espera convertirse en un experto certificado sin mover un dedo.</span></li>
                <li className="flex gap-3"><ArrowRight className="text-rojo-oscuro shrink-0" size={20} /> <span>Cree que hay atajos mágicos para hacer crecer un negocio sin esfuerzo.</span></li>
                <li className="flex gap-3"><ArrowRight className="text-rojo-oscuro shrink-0" size={20} /> <span>Necesita una solución para ayer y no está dispuesto a invertir tiempo en construir una base sólida.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-24 bg-white/[0.03]">
          <EncabezadoEditorial subtitulo="Casos de éxito reales">
            Lo que otros lectores han logrado
          </EncabezadoEditorial>
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            <div className="p-8 border border-white/10 italic text-lg text-white/80 leading-relaxed">
              "Una tienda de productos artesanales pasó de depender de la venta en ferias a generar el cuarenta por ciento de sus ingresos por internet. Aplicaron el método del capítulo tres para construir su primer imán de clientes potenciales y el capítulo cuatro para automatizar el seguimiento por correo electrónico. En tres meses, su lista de contactos creció de cero a ochocientas personas interesadas."
            </div>
            <div className="p-8 border border-white/10 italic text-lg text-white/80 leading-relaxed">
              "Una consultora de recursos humanos para pequeñas empresas dejó de invertir en publicidad que no retornaba. Implementaron la estrategia de contenido del capítulo dos y la optimización para motores de búsqueda del capítulo cinco. Al sexto mes, recibían dos solicitudes de consultoría por semana sin invertir un dólar en anuncios."
            </div>
            <div className="p-8 border border-white/10 italic text-lg text-white/80 leading-relaxed">
              "Un estudio de diseño gráfico para emprendedores construyó una comunidad de clientes fidelizados. Usaron el plan de fidelización del capítulo diez y la narrativa de marca del capítulo nueve. Su tasa de clientes recurrentes pasó del treinta por ciento al sesenta y cinco por ciento en un año."
            </div>
          </div>
        </section>

        {/* Desglose de Capítulos */}
        <section className="py-24">
          <EncabezadoEditorial subtitulo="El mapa detallado">
            Desglose del contenido
          </EncabezadoEditorial>
          
          <div className="max-w-4xl mx-auto px-6 space-y-16">
            {[
              {
                num: "Uno",
                titulo: "Los fundamentos de Inbound Marketing",
                desc: "Aprenderá qué es realmente esta metodología y por qué funciona en un mundo donde los consumidores han aprendido a ignorar la publicidad intrusiva. Definirá a su cliente ideal, mapeará su viaje de compra y establecerá objetivos medibles para su estrategia.",
                lecciones: ["El cambio de paradigma: de interrumpir a atraer.", "La matriz de conciencia del comprador.", "Definición del 'Avatar' de cliente ideal sin adivinanzas."]
              },
              {
                num: "Dos",
                titulo: "Creación de contenido estratégico",
                desc: "Descubrirá que no se trata de escribir sobre lo que a usted le interesa, sino sobre lo que su audiencia necesita saber. Investigará temas con herramientas gratuitas, diseñará un calendario editorial y creará su primera pieza de contenido piloto.",
                lecciones: ["Investigación de palabras clave para humanos, no solo para robots.", "La regla del 80/20 en el contenido editorial.", "Cómo reciclar una idea en cinco formatos diferentes."]
              },
              {
                num: "Tres",
                titulo: "Generación de clientes potenciales",
                desc: "Construirá su primer imán de clientes potenciales, diseñará una página de destino optimizada y configurará un formulario de captación efectivo. Aprenderá la diferencia entre un cliente potencial calificado para marketing y uno calificado para ventas.",
                lecciones: ["Anatomía de un imán de clientes que convierte al 20%.", "Psicología de los formularios: menos es más.", "Configuración técnica sin necesidad de ser programador."]
              },
              {
                num: "Cuatro",
                titulo: "Estrategias de correo electrónico",
                desc: "Configurará su primera secuencia de bienvenida de tres correos, segmentará su lista según el comportamiento de los suscriptores y aprenderá las métricas que realmente importan: aperturas, clics, conversiones y cancelaciones.",
                lecciones: ["El arte de escribir asuntos que obligan a hacer clic.", "La secuencia de adoctrinamiento: cómo generar confianza en 72 horas.", "Automatización básica para negocios con poco tiempo."]
              },
              {
                num: "Cinco",
                titulo: "Optimización para motores de búsqueda",
                desc: "Realizará una auditoría técnica básica de su sitio web, investigará las palabras clave que usa su audiencia y optimizará una página existente aplicando las mejores prácticas en títulos, descripciones y estructura de contenido.",
                lecciones: ["SEO semántico: por qué las palabras clave ya no son suficientes.", "La importancia de la velocidad de carga y la experiencia de usuario.", "Linkbuilding ético: cómo conseguir que otros hablen de usted."]
              },
              {
                num: "Seis",
                titulo: "Marketing de contenidos en redes sociales",
                desc: "Seleccionará las plataformas adecuadas según su cliente ideal, diseñará un calendario de publicaciones para cuatro semanas y configurará la programación automática con herramientas gratuitas.",
                lecciones: ["Por qué no necesita estar en todas las redes sociales.", "El algoritmo explicado para dueños de negocio.", "Cómo generar interacción real sin trucos baratos."]
              },
              {
                num: "Siete",
                titulo: "Analítica y medición de resultados",
                desc: "Configurará objetivos y conversiones en su herramienta de analítica, construirá un cuadro de mando con sus indicadores clave y establecerá un ciclo de mejora continua basado en datos, no en opiniones.",
                lecciones: ["Métricas de vanidad vs. métricas de negocio.", "Instalación y configuración de Google Analytics 4.", "Cómo leer los datos para tomar decisiones de inversión."]
              },
              {
                num: "Ocho",
                titulo: "Automatización del marketing",
                desc: "Diseñará su primer flujo de trabajo automatizado en papel, lo configurará en su herramienta preferida y definirá criterios básicos de puntuación de clientes potenciales para saber cuándo están listos para la venta.",
                lecciones: ["Lead Scoring: cómo identificar a los clientes con la tarjeta en la mano.", "Flujos de nutrición según el comportamiento del usuario.", "Integración entre su web y su CRM."]
              },
              {
                num: "Nueve",
                titulo: "El poder de la narrativa de marca",
                desc: "Construirá el arco narrativo de su marca, escribirá la historia principal en una página y la adaptará a tres formatos diferentes: blog, vídeo corto y redes sociales.",
                lecciones: ["El cliente es el héroe, usted es el guía.", "Cómo escribir una página de 'Sobre nosotros' que realmente venda.", "Storytelling para correos electrónicos de venta."]
              },
              {
                num: "Diez",
                titulo: "Fidelización y deleite de clientes",
                desc: "Diseñará un plan de momentos de deleite en tres puntos del ciclo de vida, creará un programa de lealtad básico y configurará un sistema automatizado para medir la satisfacción de sus clientes.",
                lecciones: ["El costo de adquisición vs. el valor de vida del cliente.", "Cómo convertir a un cliente en un embajador de marca.", "Sistemas de referidos que funcionan en piloto automático."]
              }
            ].map((cap, i) => (
              <div key={i} className="relative pl-12 border-l border-white/10">
                <div className="absolute -left-[1px] top-0 w-[1px] h-12 bg-naranja" />
                <span className="font-mono text-naranja text-xs tracking-widest uppercase mb-2 block">Capítulo {cap.num}</span>
                <h5 className="text-2xl font-serif text-white mb-4">{cap.titulo}</h5>
                <p className="text-white/70 leading-relaxed mb-6">{cap.desc}</p>
                <div className="bg-white/[0.03] p-6 rounded-sm">
                  <p className="text-amarillo text-sm font-bold uppercase tracking-wider mb-4">Lecciones clave:</p>
                  <ul className="space-y-2">
                    {cap.lecciones.map((lec, j) => (
                      <li key={j} className="flex gap-3 text-sm text-white/60">
                        <Check className="text-naranja shrink-0" size={16} />
                        {lec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TERCER BOTÓN DE PAGO */}
        <div className="bg-white/5 py-16 border-y border-white/10">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h4 className="text-2xl font-serif mb-4">Empiece sin excusas.</h4>
            <p className="text-white/60 mb-8">Las herramientas gratuitas ya las tiene. Solo le falta el método.</p>
            <BotonPago texto="ACCEDER A LA GUÍA COMPLETA AHORA" />
          </div>
        </div>

        {/* Advertencia Honesta */}
        <section className="py-24">
          <EncabezadoEditorial subtitulo="Sin falsas promesas">
            Una advertencia honesta
          </EncabezadoEditorial>
          <SeccionTexto>
            <p className="mb-6">
              Inbound Marketing no es una estrategia de resultados inmediatos.
            </p>
            <p className="mb-6">
              Si usted busca una solución para vender más la semana que viene, este libro no le va a servir.
            </p>
            <p className="mb-6">
              Inbound Marketing es como plantar un árbol. Primero prepara la tierra (define su estrategia). Luego planta la semilla (crea contenido). Luego riega y cuida (nutre a sus clientes potenciales). Los frutos llegan después, pero cuando llegan, son duraderos.
            </p>
            <p className="mb-6">
              Muchos negocios abandonan antes de tiempo. Publican tres artículos, no ven resultados y se rinden. Invierten un mes en construir su lista de correo, no ven ventas inmediatas y abandonan.
            </p>
            <p className="mb-6 font-bold text-white">
              La paciencia es parte de la estrategia.
            </p>
            <p className="mb-6">
              Si usted está dispuesto a invertir tiempo en construir una base sólida, este libro le dará las herramientas. Si no, le agradezco su honestidad y le sugiero que busque otro método.
            </p>
          </SeccionTexto>
        </section>

        {/* Herramientas */}
        <section className="py-24 bg-white/[0.02]">
          <EncabezadoEditorial subtitulo="Bajo costo, alto impacto">
            Las herramientas que necesita
          </EncabezadoEditorial>
          <SeccionTexto>
            <p className="mb-8">Una de las excusas más comunes para no empezar es pensar que Inbound Marketing requiere herramientas caras. No es cierto.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 border border-white/10">
                <h6 className="text-dorado font-serif mb-2">Gestión de Clientes (CRM)</h6>
                <p className="text-sm">HubSpot ofrece una versión sin coste que es más que suficiente para empezar.</p>
              </div>
              <div className="p-6 border border-white/10">
                <h6 className="text-dorado font-serif mb-2">Gestión de Contenidos</h6>
                <p className="text-sm">WordPress (gratuito) o plataformas sencillas por menos de quince dólares al mes.</p>
              </div>
              <div className="p-6 border border-white/10">
                <h6 className="text-dorado font-serif mb-2">Analítica Digital</h6>
                <p className="text-sm">Google Analytics es completamente gratuita y extremadamente potente.</p>
              </div>
              <div className="p-6 border border-white/10">
                <h6 className="text-dorado font-serif mb-2">Diseño Gráfico</h6>
                <p className="text-sm">Canva tiene una versión gratuita que cubre el noventa por ciento de sus necesidades.</p>
              </div>
            </div>
          </SeccionTexto>
        </section>

        {/* Garantía */}
        <section className="py-24 border-y border-naranja/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <ShieldCheck className="text-naranja mx-auto mb-8" size={64} />
            <h4 className="text-4xl font-serif mb-8">Garantía de devolución del dinero durante treinta días</h4>
            <SeccionTexto className="text-center">
              <p className="mb-6">Quiero que esta decisión sea fácil para usted.</p>
              <p className="mb-6">Si compra este libro, lo trabaja durante treinta días y no siente que ha avanzado en su estrategia de marketing, le devuelvo cada uno de sus $9,99. Sin preguntas. Sin condiciones.</p>
              <p className="mb-6">No necesito que me explique por qué no le funcionó. No necesito que me envíe una lista de ejercicios completados. Solo necesita escribirme y le reembolsaré su dinero.</p>
              <p className="text-amarillo font-medium">Esta garantía no es un truco de marketing. Es la expresión de mi confianza en que este libro le será útil si usted lo trabaja.</p>
            </SeccionTexto>
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="py-24">
          <EncabezadoEditorial subtitulo="Resolviendo sus dudas">
            Preguntas frecuentes
          </EncabezadoEditorial>
          <div className="max-w-3xl mx-auto px-6 space-y-8">
            {[
              {
                q: "¿Necesito tener un sitio web para aplicar lo que enseña este libro?",
                a: "Idealmente, sí. Inbound Marketing necesita un lugar donde su contenido viva y donde sus clientes potenciales entreguen sus datos. Pero si no tiene sitio web, el libro le explica las opciones más económicas para empezar."
              },
              {
                q: "¿Cuánto tiempo debo dedicar cada semana?",
                a: "Depende de sus objetivos. Para empezar, con cinco o seis horas a la semana puede implementar los fundamentos en un par de meses. La clave es la constancia diaria."
              },
              {
                q: "¿Necesito experiencia previa en marketing?",
                a: "No. El libro está escrito para principiantes. Los conceptos se explican desde cero. Lo único que necesita es la voluntad de aprender haciendo."
              },
              {
                q: "¿Funciona para cualquier tipo de negocio?",
                a: "Sí. Funciona para productos físicos, servicios profesionales y productos digitales. Lo que importa es que tenga claro a quién ayuda y qué problema resuelve."
              },
              {
                q: "¿Cuánto tiempo tardo en ver resultados?",
                a: "Los primeros resultados suelen aparecer entre el segundo y el cuarto mes. Los resultados significativos en ventas suelen llegar entre el sexto y el noveno mes."
              }
            ].map((faq, i) => (
              <div key={i} className="p-6 border border-white/5 bg-white/[0.01]">
                <h6 className="text-lg font-serif text-white mb-3 flex gap-3">
                  <HelpCircle className="text-naranja shrink-0" size={20} />
                  {faq.q}
                </h6>
                <p className="text-white/60 pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CUARTO BOTÓN DE PAGO */}
        <div className="bg-white/5 py-16 border-y border-white/10">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h4 className="text-2xl font-serif mb-4">Sin trucos. Sin bonos. Sin presión.</h4>
            <p className="text-white/60 mb-8">Solo un método probado que funciona si usted lo trabaja.</p>
            <BotonPago texto="DESCARGAR MI COPIA Y EMPEZAR EL CAMBIO" />
          </div>
        </div>

        {/* Invitación Final */}
        <section className="py-24">
          <EncabezadoEditorial subtitulo="El momento de decidir">
            Una invitación final a la acción
          </EncabezadoEditorial>
          <SeccionTexto>
            <p className="mb-6">Usted ha llegado hasta aquí. Ha leído esta carta de ventas hasta el final. Eso significa que algo en lo que he descrito ha resonado con usted.</p>
            <p className="mb-6">Sabe que lo que está haciendo ahora no está funcionando como debería. Sabe que necesita un cambio de enfoque. Sabe que el método de interrumpir a sus clientes potenciales con publicidad intrusiva ya no es suficiente.</p>
            <p className="mb-6">Inbound Marketing no es solo una metodología. Es una forma de entender los negocios. Es elegir atraer en lugar de interrumpir. Es construir relaciones en lugar de lanzar mensajes. Es jugar a largo plazo.</p>
            <p className="mb-6">Si usted está aquí, probablemente ya comparte esa filosofía. Ahora toca pasar de la intención a la acción.</p>
            <p className="mb-6">Las herramientas están en sus manos. El método está explicado paso a paso. Los recursos descargables están listos para ser usados.</p>
            <p className="mb-6 font-serif text-2xl text-white">Solo falta su decisión.</p>
            <p className="mb-6">Puede seguir haciendo lo mismo y esperar resultados diferentes. O puede invertir $9,99 en un sistema que le dará claridad, dirección y un plan concreto.</p>
            <p className="mb-6">El precio de este libro es menor que lo que cuesta una comida para llevar. Pero su valor no está en el precio. Está en lo que usted haga con él.</p>
          </SeccionTexto>
        </section>

        {/* SECCIÓN DE OFERTA PRINCIPAL - BLOQUE ÚNICO */}
        <section className="py-32 bg-fondo relative overflow-hidden">
          {/* Decoración de fondo para el bloque único */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-naranja)_0%,_transparent_70%)]" />
          </div>

          <div id="oferta" className="max-w-4xl mx-auto px-6 relative z-10 scroll-mt-24">
            <div className="bg-white/[0.03] border-2 border-dorado/30 p-12 md:p-20 rounded-lg shadow-[0_0_50px_rgba(255,167,38,0.1)] text-center">
              <span className="font-mono text-naranja text-sm tracking-[0.4em] uppercase mb-8 block">Oferta Exclusiva</span>
              <h4 className="text-4xl md:text-6xl font-serif mb-12 text-white leading-tight">
                Guía Completa de <br />
                <span className="text-gradient">Inbound Marketing</span>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
                <ul className="space-y-4">
                  <li className="flex gap-3 text-white/80"><Check className="text-naranja shrink-0" size={20} /> <span>Método paso a paso de 90 días</span></li>
                  <li className="flex gap-3 text-white/80"><Check className="text-naranja shrink-0" size={20} /> <span>Plantillas de viaje del cliente</span></li>
                  <li className="flex gap-3 text-white/80"><Check className="text-naranja shrink-0" size={20} /> <span>Estrategias de SEO semántico</span></li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-white/80"><Check className="text-naranja shrink-0" size={20} /> <span>Automatización de correos</span></li>
                  <li className="flex gap-3 text-white/80"><Check className="text-naranja shrink-0" size={20} /> <span>Garantía total de 30 días</span></li>
                  <li className="flex gap-3 text-white/80"><Check className="text-naranja shrink-0" size={20} /> <span>Acceso digital instantáneo</span></li>
                </ul>
              </div>

              <div className="editorial-divider opacity-20 mb-12" />

              <div className="space-y-4 mb-12">
                <p className="text-white/50 line-through text-xl">Valor real: $47,00</p>
                <p className="text-5xl md:text-7xl font-serif text-white">Solo <span className="text-dorado">$9,99</span></p>
                <p className="text-amarillo font-medium tracking-widest uppercase text-sm">Pago único • Sin suscripciones</p>
              </div>

              <BotonPago 
                texto="OBTENER ACCESO INMEDIATO POR SOLO $9,99" 
                href="https://fcofrancis.pay.clickbank.net/?cbitems=13" 
              />
              
              <p className="text-white/40 text-xs mt-8 italic">
                Al hacer clic, será redirigido a nuestra plataforma de pago seguro ClickBank.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 border-t border-white/5 text-center text-white/40 text-sm">
        <div className="max-w-4xl mx-auto px-6">
          <p className="mb-4">Guía Completa de Inbound Marketing • Atraiga a sus clientes ideales</p>
          <p className="mb-8">© Francisco González. Todos los derechos reservados.</p>
          <div className="max-w-2xl mx-auto p-6 border border-white/5 bg-white/[0.01] text-xs leading-relaxed">
            Nota final: Este libro ha sido escrito con el apoyo de herramientas de inteligencia artificial para estructurar ideas y corregir errores, pero cada concepto, cada ejercicio y cada recomendación práctica proviene de la experiencia real del autor implementando estrategias de Inbound Marketing para decenas de negocios.
          </div>
        </div>
      </footer>
    </div>
  );
}
