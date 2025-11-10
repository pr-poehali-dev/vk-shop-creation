import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  discount?: number;
}

const ProductCard = ({ name, price, image, category, isNew, discount }: ProductCardProps) => {
  const finalPrice = discount ? price * (1 - discount / 100) : price;

  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative overflow-hidden bg-secondary/30">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {isNew && (
              <Badge className="bg-primary text-primary-foreground">
                Новинка
              </Badge>
            )}
            {discount && (
              <Badge variant="destructive">
                -{discount}%
              </Badge>
            )}
          </div>
        </div>

        <div className="p-5 space-y-4">
          <div>
            <Badge variant="secondary" className="mb-2">
              {category}
            </Badge>
            <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
              {name}
            </h3>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-foreground">
                {finalPrice.toLocaleString('ru-RU')} ₽
              </span>
              {discount && (
                <span className="text-sm text-muted-foreground line-through">
                  {price.toLocaleString('ru-RU')} ₽
                </span>
              )}
            </div>
          </div>

          <Button className="w-full group/btn" size="lg">
            <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
            В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
