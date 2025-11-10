import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const features = [
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Только оригинальная продукция от проверенных производителей',
    },
    {
      icon: 'Truck',
      title: 'Быстрая доставка',
      description: 'Доставим ваш заказ в течение 1-2 дней по всей России',
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
      description: 'Наши специалисты всегда готовы помочь вам с выбором',
    },
    {
      icon: 'Award',
      title: 'Лучшие цены',
      description: 'Конкурентные цены и регулярные акции для наших клиентов',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">О нас</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            VapeStore — ведущий интернет-магазин премиальных устройств в России. 
            Мы предлагаем только качественную продукцию и первоклассный сервис.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border hover:border-primary transition-colors duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary">
                  <Icon name={feature.icon as any} className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
