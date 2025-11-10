import { useState } from 'react';
import ProductCard from './ProductCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const products = [
  {
    id: 1,
    name: 'IQOS ILUMA ONE',
    price: 3990,
    image: 'https://cdn.poehali.dev/projects/cad86043-c545-40f1-9a06-70c7162fd54f/files/ffd393e8-7f6f-4b04-81c4-0d430a5359ac.jpg',
    category: 'Устройства',
    isNew: true,
  },
  {
    id: 2,
    name: 'JUUL Starter Kit',
    price: 2490,
    image: 'https://cdn.poehali.dev/projects/cad86043-c545-40f1-9a06-70c7162fd54f/files/ffd393e8-7f6f-4b04-81c4-0d430a5359ac.jpg',
    category: 'Устройства',
    discount: 20,
  },
  {
    id: 3,
    name: 'Картриджи Mango Mix',
    price: 990,
    image: 'https://cdn.poehali.dev/projects/cad86043-c545-40f1-9a06-70c7162fd54f/files/6739f338-6366-44af-804b-fed20e0d283b.jpg',
    category: 'Картриджи',
  },
  {
    id: 4,
    name: 'HQD Cuvie Plus',
    price: 450,
    image: 'https://cdn.poehali.dev/projects/cad86043-c545-40f1-9a06-70c7162fd54f/files/ffd393e8-7f6f-4b04-81c4-0d430a5359ac.jpg',
    category: 'Одноразовые',
    isNew: true,
  },
  {
    id: 5,
    name: 'Картриджи Berry Blast',
    price: 890,
    image: 'https://cdn.poehali.dev/projects/cad86043-c545-40f1-9a06-70c7162fd54f/files/6739f338-6366-44af-804b-fed20e0d283b.jpg',
    category: 'Картриджи',
    discount: 15,
  },
  {
    id: 6,
    name: 'RELX Infinity',
    price: 2990,
    image: 'https://cdn.poehali.dev/projects/cad86043-c545-40f1-9a06-70c7162fd54f/files/ffd393e8-7f6f-4b04-81c4-0d430a5359ac.jpg',
    category: 'Устройства',
  },
];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['Все', 'Устройства', 'Картриджи', 'Одноразовые'];

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  return (
    <section id="catalog" className="py-20 bg-secondary/20">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Каталог товаров</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите из широкого ассортимента устройств, картриджей и аксессуаров
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full md:w-auto">
            <TabsList className="grid grid-cols-4 w-full md:w-auto">
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat}>
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <Icon name="SlidersHorizontal" className="h-5 w-5 text-muted-foreground" />
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Популярные</SelectItem>
                <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Показать еще
            <Icon name="ChevronDown" className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
