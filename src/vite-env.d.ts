

/// <reference types="vite/client" />

// Déclarations de type pour une bibliothèque tierce
declare module "ma-bibliotheque" {
}

// Types spécifiques au projet
type MonTypePersonnalise = {
};

// Types globaux
declare global {
  interface Window {
  }
}

// Déclarations de type pour des modules personnalisés
declare module "mon-module-personnalise" {
}

// Déclarations de type pour des plugins Vite
declare module "vite-plugin-mon-plugin" {
}
