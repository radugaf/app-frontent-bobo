// export const apaSucuri = [
//   { value: "Sucuri", label: "Sucuri" },
//   { value: "Apa", label: "Apa" },
//   { value: "Bauturi-Energizante", label: "Bauturi Energizante" },
//   { value: "Mixere", label: "Mixere"},
 
// ];

// export const vinuri = [
//   { value: "Alb", label: "Alb" },
//   { value: "Rosu", label: "Rosu" },
//   { value: "Roze", label: "Roze" },
//   { value: "Spumant", label: "Spumant"},
//   { value: "Sampanie", label: "Sampanie" },
//   { value: "Prossecco", label: "Prossecco" },
// ];

// export const bere = [
//   { value: "Blonda", label: "Blonda" },
//   { value: "Specialitati Bere", label: "Specialitati Bere" },
// ];

// export const aperitiveSpirtoase = [
//   { value: "Whiskey", label: "Whiskey" },
//   { value: "Vodka", label: "Vodka" },
//   { value: "Brandy", label: "Brandy" },
//   { value: "Coniac", label: "Coniac" },
//   { value: "Rom", label: "Rom" },
//   { value: "Gin", label: "Gin" },
//   { value: "Lichior", label: "Lichior" },
//   { value: "Vermut", label: "Vermut" },
//   { value: "Tequila", label: "Tequila" },
//   { value: "Alte-spirtoase", label: "Alte bauturi spirtoase" },
// ];

// export const cafea = [
//   { value: "Cafea", label: "Cafea" },
//   { value: "Ceai", label: "Ceai" },
//   { value: "Ciocolata-Calda", label: "Ciocolata Calda" },
// ];

// Fructe si Legume

export const apaSucuri = [
  { value: "Sucuri", label: "Sucuri", color: "#00B8D9", isFixed: true },
  { value: "Apa", label: "Apa", color: "#0052CC" },
  { value: "Bauturi-Energizante", label: "Bauturi Energizante", color: "#5243AA" },
  { value: "Mixere", label: "Mixere", color: "#FF5630", isFixed: true },
];

export const vinuri = [
  { value: "Alb", label: "Alb", rating: "safe" },
  { value: "Rosu", label: "Rosu", rating: "good" },
  { value: "Roze", label: "Roze", rating: "wild" },
  { value: "Spumant", label: "Spumant", rating: "crazy" },
  { value: "Sampanie", label: "Sampanie", rating: "safe" },
  { value: "Prossecco", label: "Prossecco", rating: "good" },
];

export const bere = [
  { value: "Blonda", label: "Blonda", rating: "safe" },
  { value: "Specialitati Bere", label: "Specialitati Bere", rating: "good" },
];

export const aperitiveSpirtoase = [
  { value: "Whiskey", label: "Whiskey", rating: "safe" },
  { value: "Vodka", label: "Vodka", rating: "good" },
  { value: "Brandy", label: "Brandy", rating: "wild" },
  { value: "Coniac", label: "Coniac", rating: "crazy" },
  { value: "Rom", label: "Rom", rating: "safe" },
  { value: "Gin", label: "Gin", rating: "good" },
  { value: "Lichior", label: "Lichior", rating: "safe" },
  { value: "Vermut", label: "Vermut", rating: "good" },
  { value: "Tequila", label: "Tequila", rating: "wild" },
  { value: "Alte-spirtoase", label: "Alte-spirtoase", rating: "crazy" },
];

export const cafea = [
  { value: "Cafea", label: "Cafea", rating: "safe" },
  { value: "Ceai", label: "Ceai", rating: "good" },
  { value: "Ciocolata-Calda", label: "Ciocolata-Calda", rating: "wild" },
];

export const groupedOptions = [
  {
    label: "Apa si sucuri",
    options: apaSucuri,
  },
  {
    label: "Vinuri",
    options: vinuri,
  },
  {
    label: "Bere",
    options: bere,
  },
  {
    label: "Spirtoase",
    options: aperitiveSpirtoase,
  },
  {
    label: "Cafea",
    options: cafea,
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



