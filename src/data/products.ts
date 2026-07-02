import type { Product } from "@/types/products";

export const mockProducts: Product[] = [
  // CPUs
  {
    id: "cpu-1",
    name: "AMD Ryzen 9 7950X",
    category: "CPU",
    brand: "AMD",
    price: 549.99,
    originalPrice: 699.99,
    image:
      "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=500&h=500&fit=crop",
    rating: 4.8,
    reviewCount: 342,
    inStock: true,
    stockCount: 15,
    description:
      "16-core, 32-thread unlocked desktop processor with AMD 3D V-Cache technology",
    specs: {
      cores: "16",
      threads: "32",
      baseClock: "4.5 GHz",
      boostClock: "5.7 GHz",
      cache: "64MB L3",
      tdp: "170W",
      socket: "AM5",
    },
    features: [
      "Zen 4 Architecture",
      "5nm Process",
      "PCIe 5.0 Support",
      "DDR5 Memory Support",
      "Unlocked for Overclocking",
    ],
  },
  {
    id: "cpu-2",
    name: "Intel Core i9-14900K",
    category: "CPU",
    brand: "Intel",
    price: 589.99,
    image:
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&h=500&fit=crop",
    rating: 4.7,
    reviewCount: 256,
    inStock: true,
    stockCount: 8,
    description:
      "24-core (8P+16E) unlocked desktop processor with Thermal Velocity Boost",
    specs: {
      cores: "24 (8P+16E)",
      threads: "32",
      baseClock: "3.2 GHz",
      boostClock: "6.0 GHz",
      cache: "36MB Intel Smart Cache",
      tdp: "125W Base / 253W Turbo",
      socket: "LGA1700",
    },
    features: [
      "Raptor Lake Refresh",
      "Intel 7 Process",
      "PCIe 5.0 & 4.0 Support",
      "DDR5 & DDR4 Support",
      "Intel Turbo Boost Max 3.0",
    ],
  },

  // GPUs
  {
    id: "gpu-1",
    name: "NVIDIA GeForce RTX 4090",
    category: "GPU",
    brand: "NVIDIA",
    price: 1599.99,
    image:
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&h=500&fit=crop",
    rating: 4.9,
    reviewCount: 512,
    inStock: true,
    stockCount: 5,
    description:
      "Ultimate gaming graphics card with 24GB GDDR6X memory and Ada Lovelace architecture",
    specs: {
      memory: "24GB GDDR6X",
      coreClock: "2.23 GHz",
      boostClock: "2.52 GHz",
      cudaCores: "16384",
      memoryBus: "384-bit",
      tdp: "450W",
      outputs: "3x DisplayPort 1.4a, 1x HDMI 2.1",
    },
    features: [
      "Ada Lovelace Architecture",
      "DLSS 3 Technology",
      "Ray Tracing Cores 3rd Gen",
      "AV1 Encode/Decode",
      "NVIDIA Reflex",
    ],
  },
  {
    id: "gpu-2",
    name: "AMD Radeon RX 7900 XTX",
    category: "GPU",
    brand: "AMD",
    price: 999.99,
    originalPrice: 1099.99,
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&h=500&fit=crop",
    rating: 4.6,
    reviewCount: 287,
    inStock: true,
    stockCount: 12,
    description:
      "High-performance gaming GPU with 24GB GDDR6 memory and RDNA 3 architecture",
    specs: {
      memory: "24GB GDDR6",
      gameClock: "2.3 GHz",
      boostClock: "2.5 GHz",
      streamProcessors: "6144",
      memoryBus: "384-bit",
      tdp: "355W",
      outputs: "2x DisplayPort 2.1, 1x HDMI 2.1, 1x USB-C",
    },
    features: [
      "RDNA 3 Architecture",
      "AMD FidelityFX Super Resolution",
      "Ray Accelerators",
      "AV1 Encoding",
      "AMD Infinity Cache",
    ],
  },

  // RAM
  {
    id: "ram-1",
    name: "Corsair Vengeance DDR5 32GB (2x16GB)",
    category: "RAM",
    brand: "Corsair",
    price: 129.99,
    originalPrice: 159.99,
    image:
      "https://images.unsplash.com/photo-1541329249929-e94f46c43549?w=500&h=500&fit=crop",
    rating: 4.7,
    reviewCount: 428,
    inStock: true,
    stockCount: 45,
    description:
      "High-performance DDR5 memory optimized for Intel and AMD platforms",
    specs: {
      capacity: "32GB (2x16GB)",
      speed: "6000MHz",
      latency: "CL36",
      voltage: "1.35V",
      type: "DDR5",
      rgb: "No",
    },
    features: [
      "Intel XMP 3.0 Ready",
      "AMD EXPO Support",
      "Custom Performance PCB",
      "Aluminum Heat Spreader",
      "Limited Lifetime Warranty",
    ],
  },
  {
    id: "ram-2",
    name: "G.SKILL Trident Z5 RGB 64GB (2x32GB)",
    category: "RAM",
    brand: "G.SKILL",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&h=500&fit=crop",
    rating: 4.8,
    reviewCount: 194,
    inStock: true,
    stockCount: 23,
    description:
      "Premium RGB DDR5 memory with sleek design and high performance",
    specs: {
      capacity: "64GB (2x32GB)",
      speed: "6400MHz",
      latency: "CL32",
      voltage: "1.4V",
      type: "DDR5",
      rgb: "Yes",
    },
    features: [
      "Intel XMP 3.0 Certified",
      "Full RGB Lighting",
      "Hand-Sorted ICs",
      "Rigorously Tested",
      "Limited Lifetime Warranty",
    ],
  },

  // Motherboards
  {
    id: "mobo-1",
    name: "ASUS ROG Strix X670E-E Gaming",
    category: "Motherboard",
    brand: "ASUS",
    price: 429.99,
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&h=500&fit=crop",
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    stockCount: 7,
    description: "Premium AMD X670E motherboard with PCIe 5.0 and DDR5 support",
    specs: {
      chipset: "AMD X670E",
      socket: "AM5",
      formFactor: "ATX",
      memory: "DDR5, 4 DIMM, Max 128GB",
      pcie: "PCIe 5.0 x16",
      m2Slots: "4x M.2",
      ethernet: "2.5Gb Intel",
    },
    features: [
      "PCIe 5.0 Support",
      "WiFi 6E",
      "AI Overclocking",
      "Comprehensive Cooling",
      "Aura Sync RGB",
    ],
  },
  {
    id: "mobo-2",
    name: "MSI MPG Z790 Carbon WiFi",
    category: "Motherboard",
    brand: "MSI",
    price: 399.99,
    originalPrice: 449.99,
    image:
      "https://images.unsplash.com/photo-1595006086065-71a03f77c7ec?w=500&h=500&fit=crop",
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
    stockCount: 11,
    description:
      "High-performance Intel Z790 motherboard with premium features",
    specs: {
      chipset: "Intel Z790",
      socket: "LGA1700",
      formFactor: "ATX",
      memory: "DDR5, 4 DIMM, Max 128GB",
      pcie: "PCIe 5.0 x16",
      m2Slots: "5x M.2",
      ethernet: "2.5Gb Realtek",
    },
    features: [
      "PCIe 5.0 Ready",
      "WiFi 6E",
      "DDR5 Boost",
      "M.2 Shield Frozr",
      "Mystic Light RGB",
    ],
  },

  // Storage
  {
    id: "storage-1",
    name: "Samsung 990 Pro 2TB NVMe SSD",
    category: "Storage",
    brand: "Samsung",
    price: 169.99,
    originalPrice: 219.99,
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
    rating: 4.9,
    reviewCount: 672,
    inStock: true,
    stockCount: 38,
    description: "PCIe 4.0 NVMe M.2 SSD with exceptional performance",
    specs: {
      capacity: "2TB",
      interface: "PCIe 4.0 x4, NVMe 2.0",
      formFactor: "M.2 2280",
      readSpeed: "7450 MB/s",
      writeSpeed: "6900 MB/s",
      tbw: "1200 TBW",
      warranty: "5 Years",
    },
    features: [
      "Samsung V-NAND Technology",
      "Dynamic Thermal Guard",
      "Magician Software",
      "AES 256-bit Encryption",
      "Low Power Consumption",
    ],
  },

  // PSU
  {
    id: "psu-1",
    name: "Corsair RM1000x 1000W 80+ Gold",
    category: "PSU",
    brand: "Corsair",
    price: 179.99,
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
    rating: 4.8,
    reviewCount: 389,
    inStock: true,
    stockCount: 19,
    description: "Fully modular 80 PLUS Gold certified power supply",
    specs: {
      wattage: "1000W",
      efficiency: "80 PLUS Gold",
      modular: "Fully Modular",
      fanSize: "135mm",
      cables: "All Black",
      warranty: "10 Years",
    },
    features: [
      "Zero RPM Fan Mode",
      "105°C Japanese Capacitors",
      "80 PLUS Gold Certified",
      "Quiet Operation",
      "ATX 3.0 Ready",
    ],
  },

  // Cases
  {
    id: "case-1",
    name: "Lian Li O11 Dynamic EVO",
    category: "Case",
    brand: "Lian Li",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1587202372583-49330a15584d?w=500&h=500&fit=crop",
    rating: 4.9,
    reviewCount: 523,
    inStock: true,
    stockCount: 14,
    description:
      "Premium mid-tower case with exceptional airflow and build quality",
    specs: {
      type: "Mid Tower",
      motherboard: "E-ATX, ATX, Micro-ATX, Mini-ITX",
      gpuLength: "420mm",
      cpuCooler: "167mm",
      frontIO: "USB 3.2 Gen 2 Type-C, USB 3.0 x2",
      fans: "Up to 13x 120mm",
    },
    features: [
      "Tempered Glass Panels",
      "Vertical GPU Mount",
      "Cable Management System",
      "Removable Radiator Brackets",
      "Mesh Front Panel Option",
    ],
  },

  // Cooling
  {
    id: "cooling-1",
    name: "NZXT Kraken X73 RGB 360mm AIO",
    category: "Cooling",
    brand: "NZXT",
    price: 199.99,
    originalPrice: 229.99,
    image:
      "https://images.unsplash.com/photo-1573865526739-10c1dd9c41bf?w=500&h=500&fit=crop",
    rating: 4.7,
    reviewCount: 412,
    inStock: true,
    stockCount: 16,
    description: "360mm liquid cooling system with customizable LCD display",
    specs: {
      radiatorSize: "360mm",
      fanSize: "3x 120mm",
      pumpSpeed: "800-2800 RPM",
      fanSpeed: "500-2000 RPM",
      tubeLength: "400mm",
      warranty: "6 Years",
    },
    features: [
      "Customizable LCD Display",
      "RGB Lighting",
      "Reinforced Sleeved Tubing",
      "CAM Software Control",
      "Rotatable Cap",
    ],
  },
];

export const getProductsByCategory = (category: ProductCategory) => {
  return mockProducts.filter((product) => product.category === category);
};

export const getProductById = (id: string) => {
  return mockProducts.find((product) => product.id === id);
};

export const getFeaturedProducts = () => {
  return mockProducts.slice(0, 6);
};

export const getOnSaleProducts = () => {
  return mockProducts.filter((product) => product.originalPrice);
};
