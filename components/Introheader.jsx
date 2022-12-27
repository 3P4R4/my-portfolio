export default function IntroHeader() {
  return (
    <header className="px-6">
      <div className="flex gap-14 max-w-4xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold mb-6">
            Hola mi nombre es: Lenin Mendoza!
            <br />
            Desarrollador Creativo
          </h1>
          <p className="text-lg mb-6">
            Hola, me llamo Lenin Mendoza y soy un Desarrollador WEB basado
            principalmente en el sistemas de Gestión de contenido de Wordpress;
            recientemente me desempeñe como diseñador de infraestructura WEB en
            T#LAB, especializado en la creación de plataformas para Eventos
            virtuales con el Framework de Elementor-Pro y implementaciones con
            la suit de Crocoblock. Me considero una persona apasionada, full
            autodidacta, competente y adicto al estudio, comprometido con mi
            preparación profesional constante.
          </p>
          <a
            href="#"
            className="bg-red-400 text-white px-6 py-3 text-lg rounded"
          >
            Mira mis trabajos
          </a>
        </div>
        <span className="m-5 inline-block before:w-full before:aspect-square before:-left-1.5 before:top-1.5 before:block before:absolute before:bg-red-400 relative z-0 before:rounded-full">
          <img
            src="lenin.jpg"
            width="840"
            height="840"
            alt="Image of Chris"
            className="z-10 relative rounded-full"
          />
        </span>
      </div>
    </header>
  );
}
