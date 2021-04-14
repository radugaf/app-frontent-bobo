// Fructe si Legume

export const legume = [
  { value: "Ceapa", label: "Ceapa", color: "#00B8D9", isFixed: true },
  { value: "Praz", label: "Praz", color: "#0052CC" },
  { value: "Usturoi", label: "Usturoi", color: "#5243AA" },
  { value: "Cartofi", label: "Cartofi", color: "#FF5630", isFixed: true },
  { value: "Radacinoase", label: "Radacinoase", color: "#FF8B00" },
  { value: "Ciuperci", label: "Ciuperci", color: "#FFC400" },
  { value: "Ardei", label: "Ardei", color: "#36B37E" },
  { value: "Rosii", label: "Rosii", color: "#00875A" },
  { value: "Dovlecei", label: "Dovlecei", color: "#253858" },
  { value: "Fasole", label: "Fasole", color: "#666666" },
  { value: "Morcovi", label: "Morcovi", color: "#00B8D9", isFixed: true },
  { value: "Varza", label: "Varza", color: "#0052CC" },
  { value: "Castraveti", label: "Castraveti", color: "#5243AA" },
  {
    value: "Conopida-si-Broccoli",
    label: "Conopida si Broccoli",
    color: "#FF5630",
    isFixed: true,
  },
  { value: "Vinete", label: "Vinete", color: "#FF8B00" },
  { value: "Alte-Legume", label: "Alte Legume", color: "#FFC400" },
];

export const fructe = [
  { value: "Citrice", label: "Citrice", rating: "safe" },
  { value: "Mere", label: "Mere", rating: "good" },
  { value: "Pere", label: "Pere", rating: "wild" },
  { value: "Avocado", label: "Avocado", rating: "crazy" },
  { value: "Fructe-de-Padure", label: "Fructe de Padure", rating: "safe" },
  { value: "Rodii", label: "Rodii", rating: "good" },
  { value: "Kiwi", label: "Kiwi", rating: "wild" },
  { value: "Mango", label: "Mango", rating: "crazy" },
  { value: "Struguri", label: "Struguri", rating: "safe" },
  { value: "Pepene", label: "Pepene", rating: "good" },
  { value: "Ananas", label: "Ananas", rating: "wild" },
  {
    value: "Arahide-alune-nuci",
    label: "Arahide, alune, nuci",
    rating: "crazy",
  },
  { value: "Banane", label: "Banane", rating: "good" },
  { value: "Caise", label: "Caise", rating: "wild" },
  { value: "Piersici", label: "Piersici", rating: "good" },
  { value: "Nectarine", label: "Nectarine", rating: "wild" },
  { value: "Capsuni", label: "Capsuni", rating: "good" },
];

export const salata = [
  { value: "Mix-Salata", label: "Mix Salata", rating: "safe" },
  { value: "Salata-verde", label: "Salata verde", rating: "good" },
  { value: "Alte-Plante", label: "Alte Plante", rating: "wild" },
];

export const muraturi = [
  {
    value: "Sunt-doar-muraturi",
    label: "Sunt doar Muraturi aici",
    rating: "safe",
  },
];

export const groupedOptions = [
  {
    label: "Fructe",
    options: legume,
  },
  {
    label: "Legume",
    options: fructe,
  },
  {
    label: "Salata",
    options: salata,
  },
  {
    label: "Muraturi",
    options: muraturi,
  },
];

// Lactate si Oua

export const branzeturi = [
  { value: "Cascaval", label: "Cascaval" },
  { value: "Crema-branza", label: "Crema de branza" },
  { value: "Telemea-vaca", label: "Telemea de vaca" },
  { value: "Branza-topita", label: "Branza topita" },
  { value: "Mozzarella", label: "Mozzarella" },
  { value: "Emmentaller", label: "Emmentaller" },
  { value: "Parmezan", label: "Parmezan" },
  { value: "Telemea-Capra", label: "Telemea Capra" },
  { value: "Telemea-Oaie", label: "Telemea-Oaie" },
  { value: "Specialitati-Branzeturi", label: "Specialitati Branzeturi" },
  { value: "Cascaval", label: "Cascaval" },
  { value: "Cascaval", label: "Cascaval" },
];

export const iaurt = [
  { value: "Iaurt", label: "Iaurt" },
  { value: "Chefir", label: "Chefir" },
  { value: "Smantana", label: "Smantana" },
  { value: "Specialitati din carne", label: "Lapte batut" },
];

export const generale = [
  { value: "Lapte", label: "Lapte" },
  { value: "Unt", label: "Unt" },
  { value: "Specialitati-Unt", label: "Specialitati Unt" },
  { value: "oua", label: "Oua" },
];

export const groupedOptions2 = [
  {
    label: "Branzeturi",
    options: branzeturi,
  },
  {
    label: "Iaurt",
    options: iaurt,
  },
  {
    label: "Generale",
    options: generale,
  },
];

// Mezeluri si Carne

export const mezeluri = [
  { value: "Salam", label: "Salam" },
  { value: "Pate", label: "Pate" },
  { value: "Sunca-Kaizer", label: "Sunca si Kaizer" },
  { value: "Carnati", label: "Carnati" },
  { value: "Crenvursti", label: "Crenvursti" },
  { value: "Bacon", label: "Bacon" },
  { value: "Muschi", label: "Muschi" },
  { value: "Jambon", label: "Jambon" },
  { value: "Parizer", label: "Parizer" },
  { value: "Pastrama", label: "Pastrama" },
  { value: "Alte Mezeluri", label: "Alte Mezeluri" },
];

export const carne = [
  { value: "Carne-pasare", label: "Carne de pasare" },
  { value: "Carne-vita", label: "Carne de vita" },
  { value: "Carne-porc", label: "Carne de porc" },
  { value: "Specialitati-carne", label: "Specialitati din carne" },
  { value: "Carne-tocata", label: "Carne tocata" },
  { value: "Vanat", label: "Vanat" },
];

export const groupedOptions3 = [
  {
    label: "Mezeluri",
    options: mezeluri,
  },
  {
    label: "Carne",
    options: carne,
  },
];

// Peste si Fructe de Mare

export const peste = [
  { value: "Somon", label: "Somon" },
  { value: "Sea Bass", label: "Sea Bass" },
  { value: "Cod", label: "Cod" },
  { value: "Tuna", label: "Tuna" },
  { value: "Alti-Pesti", label: "Alti Pesti" },
];

export const icre = [
  { value: "Icre-Crap", label: "Icre de Crap" },
  { value: "Icre-Stiuca", label: "Icre de Stiuca" },
  { value: "Alte-Icre", label: "Alte Icre" },
];

export const fructeMare = [
  { value: "Creveti", label: "Creveti" },
  { value: "Caracatita", label: "Caracatita" },
  { value: "Calamar", label: "Calamar" },
  { value: "Lobster", label: "Lobster" },
  { value: "Langustine", label: "Langustine" },
  { value: "Alte-fructe-mare", label: "Alte fructe de mare" },
];

export const groupedOptions4 = [
  {
    label: "Peste",
    options: peste,
  },
  {
    label: "Icre",
    options: icre,
  },
  {
    label: "Fructe de Mare",
    options: fructeMare,
  },
];

// Alimente de Baza

export const alimente = [
  { value: "Zahar-Alb", label: "Zahar Alb" },
  { value: "Zahar-Brun", label: "Zahar Brun" },
  { value: "Zahar Vanilat", label: "Zahar Vanilat" },
  { value: "Faina", label: "Faina" },
  { value: "Malai", label: "Malai" },
  { value: "Gris", label: "Gris" },
  { value: "Pesmet", label: "Pesmet" },
  { value: "Praf-copt", label: "Praf de copt" },
  { value: "Drojdie", label: "Drojdie" },
  { value: "Bicarbonat", label: "Bicarbonat" },
  { value: "Ulei-Masline", label: "Ulei Masline" },
  { value: "Ulei-Floarea-Soarelui", label: "Ulei de Floarea Soarelui" },
  { value: "Ulei-Palmier", label: "Ulei de Palmier" },
  { value: "Sare", label: "Sare" },
  { value: "Piper", label: "Piper" },
  { value: "Condimente-Mirodenii", label: "Condimente si Mirodenii" },
];

export const groupedOptions5 = [
  {
    label: "Alimente",
    options: alimente,
  },
];

// Sosuri si Paste de Tomate

export const sosuriTomate = [
  { value: "Ketchup", label: "Ketchup" },
  { value: "Mustar", label: "Mustar" },
  { value: "Hrean", label: "Hrean" },
  { value: "Maioneza", label: "Maioneza" },
  { value: "Sosuri-Asiatice", label: "Sosuri Asiatice" },
  { value: "Alte-Sosuri", label: "Alte Sosuri" },
];

export const pasteTomate = [
  { value: "Paste-Tomate", label: "Paste de Tomate" },
  { value: "Bulion", label: "Bulion" },
  { value: "Rosii la conserva", label: "Rosii la conserva" },
];

export const groupedOptions6 = [
  {
    label: "Sosuri",
    options: sosuriTomate,
  },
  {
    label: "Paste de Tomate",
    options: pasteTomate,
  },
];

// Sosuri si Paste de Tomate

export const paste = [
  { value: "Penne", label: "Penne" },
  { value: "Fussili", label: "Fussili" },
  { value: "Spaghete", label: "Spaghete" },
  { value: "Fidea-Taietei", label: "Fidea si Taietei" },
  { value: "Alte-Paste", label: "Alte Paste" },
];

export const orez = [{ value: "orez", label: "Orez" }];

export const groupedOptions7 = [
  {
    label: "Paste",
    options: paste,
  },
  {
    label: "Orez",
    options: orez,
  },
];

// Dulce

export const dulce = [
  { value: "Miere", label: "Miere" },
  { value: "Gem", label: "Gem" },
  { value: "Magiun", label: "Magiun" },
  { value: "Marmelada", label: "Marmelada" },
  { value: "Creme-tartinabile", label: "Creme tartinabile" },
  { value: "Dulceata", label: "Dulceata" },
  { value: "Compot", label: "Compot" },
  { value: "Ciocolata", label: "Ciocolata" },
  { value: "Baza-inghetata", label: "Baza de inghetata" },
  { value: "Arome", label: "Arome" },
  { value: "Esente", label: "Esente" },
];

export const groupedOptions8 = [
  {
    label: "Dulce",
    options: dulce,
  },
];
