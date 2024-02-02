const services = [
  {
    title: "Luces",
    description:
      "Verificar que las luces, aires acondicionados y el toallero eléctrico del baño se encuentren debidamente apagados.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
  },
  {
    title: "Estufa",
    description:
      "Asegurarse de que la estufa quede en modo piloto (indicado por la estrellita) al salir.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
  },
  {
    title: "Ventanas",
    description:
      "Asegurarse de dejar siempre las ventanas de la cocina y del baño abiertas para favorecer la ventilación y el flujo de aire.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
  },
  {
    title: "Llaves",
    description:
      "No te olvides de llevar las llaves con vos. En caso contrario, podríamos demorar en la entrega de una copia.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
  },
  {
    title: "Limpieza",
    description:
      "Les pedimos amablemente que mantengan la cocina limpia y barran con frecuencia.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
  },
  {
    title: "Cuidados",
    description:
      "En caso de que algún objeto desaparezca accidentalmente, les agradecemos que nos informen al respecto.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>`,
  },
];

export { services };

const card = [
  {
    title: "Doña Cocina Tipo Casa",
    description: "Pastas",
    image: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0805797066364!2d-58.41732272565612!3d-34.60212384858446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca620e123895%3A0x4a3a55a0ff8e1c55!2sDo%C3%B1a%20Cocina%20Tipo%20Casa!5e0!3m2!1sen!2ses!4v1706798822570!5m2!1sen!2ses" 
    width="100%"
    height="100%"
    style="max-width: 250px; max-height: 200px; display: flex; justify-content: center;"
    allowfullscreen="none" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    site: "https://www.instagram.com/donacocinatipocasa/?hl=es-la",
    buttonText: "Ver Instagram",
  },
  {
    title: "Cantina Pierino",
    description: "Pastas",
    image: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1373818683364!2d-58.415034899999995!3d-34.6006874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca89a2dce659%3A0x8d246067c2fabfc2!2sCantina%20Pierino!5e0!3m2!1sen!2ses!4v1706799468850!5m2!1sen!2ses" 
    width="100%"
    height="100%"
    style="max-width: 250px; max-height: 200px; display: flex; justify-content: center;"
    allowfullscreen="none" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    site: "https://maps.app.goo.gl/c3uftdEnhMNzt7uL9",
    buttonText: "Ver Maps",
  },
  {
    title: "The Flour Store",
    description: "Hamburgueseria",
    image: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3284.1375558564337!2d-58.4176098!3d-34.600683!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb99c1fdc45b%3A0x81a4c562dd1476ca!2sThe%20Flour%20Store!5e0!3m2!1sen!2ses!4v1706799649169!5m2!1sen!2ses" 
      width="100%" 
      height="100%" 
      style="max-width: 250px; max-height: 200px; display: flex; justify-content: center;"
      allowfullscreen="none" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    site: "https://instagram.com/theflourstore",
    buttonText: "Ver Instagram",
  },
  {
    title: "Lo de Mary",
    description: "Parrilla",
    image: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3284.0985820388732!2d-58.4248475!3d-34.6016686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca6378077b57%3A0x924baf1b0917854a!2sParrilla%20Lo%20De%20Mary%20-%20Restaurante!5e0!3m2!1sen!2ses!4v1706801804493!5m2!1sen!2ses" width="100%" height="100%" style="max-width: 250px; max-height: 200px; display: flex; justify-content: center;" allowfullscreen="none" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    site: "https://m.facebook.com/Parrilla-Lo-de-Mary--975432635873215/",
    buttonText: "Ver Facebook",
  },
  {
    title: "Aport",
    description: "Bar",
    image: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.122762844694!2d-58.4179597!3d-34.601057100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb4b763eba4f%3A0x4eb74cc714131aa6!2sAport!5e0!3m2!1sen!2ses!4v1706801934008!5m2!1sen!2ses" width="100%" height="100%" style="max-width: 250px; max-height: 200px; display: flex; justify-content: center;" allowfullscreen="none" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    site: "http://www.aportdespensa.com/",
    buttonText: "Ver Sitio Web",
  },
  {
    title: "El Banderín",
    description: "Bar",
    image: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.103026748167!2d-58.415428399999996!3d-34.601556200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca897fa355ff%3A0xb31a6384d9d7773e!2sEl%20Bander%C3%ADn!5e0!3m2!1sen!2ses!4v1706802073704!5m2!1sen!2ses" width="100%" height="100%" style="max-width: 250px; max-height: 200px; display: flex; justify-content: center;" allowfullscreen="none" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    site: "https://maps.app.goo.gl/RoRGJYadtWmiG2kz7",
    buttonText: "Ver Maps",
  },
];

export { card };
