const services = [
  {
    title: "Lights",
    description:
      "Verify that the lights, air conditioners and the electric towel rack in the bathroom are properly turned off.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
  },
  {
    title: "Heater",
    description:
      "Make sure that the heater is in pilot mode (indicated by the little star) when exiting.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
  },
  {
    title: "Windows",
    description:
      "Make sure to always leave kitchen and bathroom windows open to promote ventilation and air flow.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
  },
  {
    title: "Keys",
    description:
      "Don't forget to bring your keys with you. Otherwise, we may delay the delivery of a copy.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
  },
  {
    title: "Cleaning",
    description:
      "We kindly ask you to keep the kitchen clean and sweep frequently.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
  },
  {
    title: "Cares",
    description: "In case of accidental disappearance, please let us know.",
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
    buttonText: "Instagram",
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
    buttonText: "Go to Maps",
  },
  {
    title: "The Flour Store",
    description: "Hamburger Restaurant",
    image: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3284.1375558564337!2d-58.4176098!3d-34.600683!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb99c1fdc45b%3A0x81a4c562dd1476ca!2sThe%20Flour%20Store!5e0!3m2!1sen!2ses!4v1706799649169!5m2!1sen!2ses" 
      width="100%" 
      height="100%" 
      style="max-width: 250px; max-height: 200px; display: flex; justify-content: center;"
      allowfullscreen="none" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    site: "https://instagram.com/theflourstore",
    buttonText: "Instagram",
  },
  {
    title: "Lo de Mary",
    description: "Parrilla",
    image: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3284.0985820388732!2d-58.4248475!3d-34.6016686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca6378077b57%3A0x924baf1b0917854a!2sParrilla%20Lo%20De%20Mary%20-%20Restaurante!5e0!3m2!1sen!2ses!4v1706801804493!5m2!1sen!2ses" width="100%" height="100%" style="max-width: 250px; max-height: 200px; display: flex; justify-content: center;" allowfullscreen="none" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    site: "https://m.facebook.com/Parrilla-Lo-de-Mary--975432635873215/",
    buttonText: "Facebook",
  },
  {
    title: "Aport",
    description: "Bar",
    image: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.122762844694!2d-58.4179597!3d-34.601057100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb4b763eba4f%3A0x4eb74cc714131aa6!2sAport!5e0!3m2!1sen!2ses!4v1706801934008!5m2!1sen!2ses" width="100%" height="100%" style="max-width: 250px; max-height: 200px; display: flex; justify-content: center;" allowfullscreen="none" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    site: "http://www.aportdespensa.com/",
    buttonText: "Web Site",
  },
  {
    title: "El Banderín",
    description: "Bar",
    image: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.103026748167!2d-58.415428399999996!3d-34.601556200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca897fa355ff%3A0xb31a6384d9d7773e!2sEl%20Bander%C3%ADn!5e0!3m2!1sen!2ses!4v1706802073704!5m2!1sen!2ses" width="100%" height="100%" style="max-width: 250px; max-height: 200px; display: flex; justify-content: center;" allowfullscreen="none" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    site: "https://maps.app.goo.gl/RoRGJYadtWmiG2kz7",
    buttonText: "Go to Maps",
  },
  {
    title: "Guarda La Vieja",
    description: "Bar",
    image: ` <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3284.1229368344193!2d-58.4205346!3d-34.6010527!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca898f4c0149%3A0xd7bbdae926e33831!2sGuarda%20La%20Vieja!5e0!3m2!1sen!2ses!4v1707088748026!5m2!1sen!2ses"    width="100%" 
    height="100%" 
    style="max-width: 250px; max-height: 200px; display: flex; justify-content: center;"
    allowfullscreen="none" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    site: "https://www.instagram.com/guarda.lavieja",
    buttonText: "Instagram",
  },
  {
    title: "Musetta",
    description: "Bar",
    image: ` <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3284.1229368344193!2d-58.4205346!3d-34.6010527!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca89ad465c0f%3A0xf7805b8a011bbffd!2sMusetta!5e0!3m2!1sen!2ses!4v1707088685127!5m2!1sen!2ses"    
    width="100%" height="100%" style="max-width: 250px; max-height: 200px; display: flex; justify-content: center;" allowfullscreen="none" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    site: "https://menu.maxirest.com/3123",
    buttonText: "Web Site",
  },
  {
    title: "Kentucky",
    description: "Pizzeria",
    image: ` <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1642.0127161648154!2d-58.4167659!3d-34.6035184!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8a41619359%3A0xe801554ca70e5a47!2sPizzeria%20Kentucky!5e0!3m2!1sen!2ses!4v1707088905339!5m2!1sen!2ses"    width="100%" height="100%" style="max-width: 250px; max-height: 200px; display: flex; justify-content: center;" allowfullscreen="none" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    site: "https://kentucky.com.ar/",
    buttonText: "Web Site",
  },
  {
    title: "El Imperio",
    description: "Pizzeria",
    image: ` <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1642.016461122622!2d-58.4210288!3d-34.603329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca63d039bb35%3A0xda370033a425ff0e!2sPizzer%C3%ADa%20Imperio%20(Medrano)!5e0!3m2!1sen!2ses!4v1707089007235!5m2!1sen!2ses"     
    width="100%" height="100%" style="max-width: 250px; max-height: 200px; display: flex; justify-content: center;" allowfullscreen="none" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    site: "https://www.instagram.com/pizzeriaimperio1946/",
    buttonText: "Instagram",
  },
  {
    title: "La Continental",
    description: "Pizzeria",
    image: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3284.0268401517774!2d-58.4169229!3d-34.6034828!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8a0dcf8161%3A0xc5c939eeb8a80373!2sLa%20Continental!5e0!3m2!1sen!2ses!4v1707089074207!5m2!1sen!2ses"    width="100%" height="100%" style="max-width: 250px; max-height: 200px; display: flex; justify-content: center;" allowfullscreen="none" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    site: "https://www.lacontinental.com/",
    buttonText: "Web Site",
  },
  {
    title: "Napoli vs Tucuman",
    description: "Pizzeria",
    image: ` <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1641.9129006937492!2d-58.4173604!3d-34.6085662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb4b25bfb171%3A0xda17285501e757aa!2sNapoli%20vs%20Tucum%C3%A1n!5e0!3m2!1sen!2ses!4v1707089160960!5m2!1sen!2ses"    width="100%" height="100%" style="max-width: 250px; max-height: 200px; display: flex; justify-content: center;" allowfullscreen="none" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    site: "https://www.instagram.com/napolivstucuman",
    buttonText: "Instagram",
  },
  {
    title: "Napoli vs Tucuman",
    description: "Pizzeria",
    image: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1642.0868151442041!2d-58.4104081!3d-34.5997707!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8e6266fd0f%3A0x9be16c9d3924928!2sCoffee%20Bar%20Roma!5e0!3m2!1sen!2ses!4v1707089248055!5m2!1sen!2ses"      width="100%" height="100%" style="max-width: 250px; max-height: 200px; display: flex; justify-content: center;" allowfullscreen="none" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    site: "https://romadelabasto.com.ar/",
    buttonText: "Web Site",
  },
];

export { card };
