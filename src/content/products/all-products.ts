import { catalogProducts } from './catalog';
import { wheelSpecifications } from './specifications';

export interface ProductCatalogEntry {
  id: string;
  sku: string;
  series: string;
  name: string;
  image: string;
  description: string;
  finish: string;
  colors: readonly string[];
  diameters: readonly number[];
  widths: readonly number[];
  pcd: readonly string[];
  vehicles: readonly string[];
  offsets: readonly number[];
  centerBores: readonly number[];
  isSpecification: boolean;
}

const conceptProducts: ProductCatalogEntry[] = catalogProducts.map((product) => ({
  ...product,
  offsets: [],
  centerBores: [],
  isSpecification: false,
}));

const specificationProducts: ProductCatalogEntry[] = wheelSpecifications.map((product) => ({
  id: product.id,
  sku: product.sku,
  series: 'specification',
  name: `${product.diameter}" × ${product.width}J`,
  image: product.image,
  description: '',
  finish: 'Specification',
  colors: [],
  diameters: [product.diameter],
  widths: [product.width],
  pcd: [product.pcd],
  vehicles: [],
  offsets: [product.offset],
  centerBores: [product.centerBore],
  isSpecification: true,
}));

export const allCatalogProducts: ProductCatalogEntry[] = [
  ...conceptProducts,
  ...specificationProducts,
];
