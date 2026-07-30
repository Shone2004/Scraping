// src/data/productsMenu.js
// Nav-menu shape for the Products mega menu — mirrors servicesMenu.js.
// Pulls from productsdata.js (the single source of truth for product
// content) and layers on the icon + route needed for navigation.

import {
  Package,
  Layers,
  Boxes,
  Wind,
  Filter,
  Sprout,
  Flame,
  MessageSquare,
  Trash2,
  Droplets,
  Recycle,
} from 'lucide-react';
import productsData from '../data/productsdata';

// icon per product id — keeps productsdata.js free of UI concerns
const iconById = {
  1: Package,     // Plastic Bailing Machine
  2: Layers,      // Single Shaft Shredder Machine
  3: Boxes,       // Municipal Solid Waste Twin Shaft Shredder Machine
  4: Wind,        // Plastic Dust Remover Machine
  5: Filter,      // Compost Screening Machine
  6: Sprout,      // Composting Machine / Decomposition Machine
  7: Flame,       // Sanitary Napkin Incinerator
  8: MessageSquare, // Toilet Citizen Feedback Machine
  9: Trash2,      // Solid Waste Incinerator
  10: Droplets,   // Sanitary Napkins Vending Machine
  11: Recycle,    // Pet Bottle Shredder Machine
};

export const productsMenu = productsData.map((product) => ({
  label: product.name,
  to: `/products/${product.slug}`,
  desc: product.tagline,
  icon: iconById[product.id] || Package,
}));

export default productsMenu;