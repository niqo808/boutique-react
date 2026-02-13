export default function ContactView() {
  return (
    <div className="w-full p-6 lg:p-12 bg-gray-50">
      
      {/* Título */}
      <h1 className="text-3xl lg:text-4xl font-bold text-center text-red-700 mb-8">
        Contactanos
      </h1>

      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* FORMULARIO */}
        <form className="flex-1 space-y-6 bg-white p-8 rounded-xl shadow-md">
          <label className="block">
            <span className="text-sm font-semibold text-gray-700">Nombre</span>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-gray-700">Email</span>
            <input
              type="email"
              name="email"
              placeholder="tu@ejemplo.com"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-gray-700">Mensaje</span>
            <textarea
              name="message"
              rows={5}
              placeholder="Escribí tu mensaje aquí..."
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
              required
            ></textarea>
          </label>

          <button
            type="submit"
            className="w-full bg-red-700 text-white py-3 rounded-lg font-bold hover:bg-red-800 transition"
          >
            Enviar Mensaje
          </button>
        </form>

        {/* INFORMACIÓN DE CONTACTO */}
        <div className="flex-1 space-y-6 bg-white p-8 rounded-xl shadow-md">
          
          {/* Teléfono */}
          <div>
            <h2 className="font-semibold text-lg text-red-700">Teléfono</h2>
            <p className="text-gray-800">+54 11 1234-5678</p>
          </div>

          {/* Email */}
          <div>
            <h2 className="font-semibold text-lg text-red-700">Email</h2>
            <p className="text-gray-800">contacto@lapaz.com.ar</p>
          </div>

          {/* Dirección */}
          <div>
            <h2 className="font-semibold text-lg text-red-700">Dirección</h2>
            <p className="text-gray-800">
              Av. Corrientes 1234, CABA, Argentina
            </p>
          </div>

          {/* Redes Sociales */}
          <div>
            <h2 className="font-semibold text-lg text-red-700">Redes</h2>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-red-700 hover:text-red-900">
                <i className="fab fa-facebook-square text-2xl"></i>
              </a>
              <a href="#" className="text-red-700 hover:text-red-900">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
