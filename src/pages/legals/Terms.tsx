import LegalLayout from "./components/LegalLayout";

export default function Privacy() {
  return <LegalLayout data={data} title="Términos y condiciones" />;
}

const data = [
  {
    sections: [
      {
        title: "1. Aplicabilidad",
        texts: [
          {
            text: `Estos términos y condiciones de uso (en adelante, "Términos de Uso") se aplican a todos los visitantes y a todos los usuarios de este sitio web https://tecate.com/ (en adelante, “Sitio Web”), de Cervezas Cuauhtémoc Moctezuma, sus empresas filiales y subsidiarias (en adelante, "CCM"), así como toda la información, recomendaciones y servicios que se proporcionan a través de este Sitio Web (la "Información").`,
          },
          {
            text: "Al usar este Sitio Web está aceptando la validez de estos Términos de Uso. Estos Términos de Uso pueden modificarse unilateralmente, en cualquier momento y sin previo aviso a los usuarios. Tales modificaciones entrarán en vigor en cuanto se publiquen los nuevos Términos de Uso. Se aconseja a los usuarios del sitio que lean con regularidad los Términos de Uso, para que estén al tanto de cualquier posible cambio.",
          },
        ],
      },
      {
        title: "2. Reconocimiento de Mayoría de Edad",
        texts: [
          {
            text: "Reconociendo el presente como un sitio relacionado con la publicidad de bebidas alcohólicas, el usuario reconoce y acepta que es mayor de edad y se obliga a no compartir su contenido con personas menores de edad. Igualmente, el usuario se compromete a no compartir en el Sitio Web o en las redes sociales de la marca, contenido que promueva el consumo excesivo o irresponsable de bebidas alcohólicas. CCM y sus marcas se reservan el derecho de eliminar a su completa discreción y sin aviso previo cualquier material que no cumpla con sus estándares, no sea apropiado o no cumpla con las reglas de las disposiciones legales aplicables.",
          },
        ],
      },
      {
        title: "3. Información y Responsabilidad",
        texts: [
          {
            text: "La Información es sólo para propósitos generales y no constituye una recomendación. CCM no será responsable de ningún daño resultante del uso (o imposibilidad de hacer uso) de este Sitio Web e Información, incluyendo daños causados por virus o cualquier incorrección o falta de integridad de la Información, a menos que tales daños sean resultado de cualquier mala conducta deliberada o negligencia grave por parte de CCM.",
          },
          {
            text: "CCM no será responsable de los daños resultantes por la falta de adecuación, oportunidad o precisión de este Sitio Web o de la Información.",
          },
          {
            text: "Los usuarios se comprometen a utilizar el Sitio Web y la Información de conformidad con la ley, estos Términos de Uso, y cualquier otra política publicada en el Sitio Web de CCM, así como de acuerdo con la moral, las buenas costumbres y el orden público. Los usuarios se obligan a abstenerse de utilizar el Sitio Web y/o la Información con fines o efectos ilícitos, contrarios a lo establecido en los Términos de Uso, lesivos de los derechos e intereses de terceros o que de cualquier forma puedan dañar, inutilizar, sobrecargar o deteriorar el Sitio Web y/o la Información o impedir la normal utilización o disfrute del Sitio Web y/o la Información por parte de los usuarios.",
          },
          {
            text: "Está prohibido el uso de cualquier dispositivo, software u otro medio tendiente a interferir tanto en las actividades y operaciones de CCM como en el Sitio Web, Información o en las bases de datos de CCM. Cualquier intromisión, tentativa o actividad violatoria y/o a las prohibiciones estipuladas en estos Términos de Uso harán a su responsable sujeto de las acciones legales pertinentes, y a las sanciones previstas por este acuerdo, así como responsable de indemnizar por los daños ocasionados.",
          },
        ],
      },
      {
        title: "4. Exclusión de responsabilidad por fallas en el sistema",
        texts: [
          {
            text: "CCM no se responsabiliza por ningún daño, perjuicio o pérdida al usuario causada por fallas en el sistema, en el servidor o en internet. CCM tampoco será responsable por cualquier virus que pudiera infectar el equipo del usuario como consecuencia del acceso, uso o examen de su Sitio Web o a raíz de cualquier transferencia de datos, archivos, imágenes, textos, o audio contenidos en el mismo. Los usuarios no podrán imputarle responsabilidad alguna, en virtud de perjuicios resultantes de dificultades técnicas o fallas en los sistemas o en internet. CCM no garantiza el acceso y uso continuado o ininterrumpido de su Sitio Web.",
          },
          {
            text: "El sistema puede eventualmente no estar disponible, debido a dificultades técnicas o fallas de internet, o por cualquier otra circunstancia ajena a CCM; en tales casos se procurará restablecerlo con la mayor celeridad posible sin que por ello pueda imputársele algún tipo de responsabilidad. CCM no será responsable por ningún error u omisión contenidos en su Sitio Web. CCM niega cualquier garantía incluyendo, entre otras, las garantías de condición, calidad, mercantibilidad, adecuación para un propósito determinado y no infracción de derechos.",
          },
        ],
      },
      {
        title: "5. Información de Terceros",
        texts: [
          {
            text: "La información procedente de terceros constituye una expresión de las opiniones personales de dichos terceros. CCM no se hace responsable de dicha información.",
          },
          {
            text: "Los hipervínculos de este Sitio Web pueden dirigir a los visitantes a sitios web externos mantenidos por terceros. CCM no se hace responsable por el contenido y el funcionamiento de tales sitios web externos. CCM tampoco será responsable de la calidad de los productos o servicios que puedan ofrecerse en tales sitios web externos.",
          },
        ],
      },
    ],
  },
];
