import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToCatalog = () => {
    const element = document.querySelector('#catalog');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
      <div className="container py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Icon name="Sparkles" className="h-4 w-4" />
              <span>Новая коллекция 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Премиальные устройства для вашего образа жизни
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md">
              Широкий выбор качественных устройств и жидкостей. Быстрая доставка по всей России.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToCatalog} className="group">
                Перейти в каталог
                <Icon name="ArrowRight" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                const element = document.querySelector('#about');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Узнать больше
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Товаров</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">Рейтинг</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
            <img
              src="https://cdn.poehali.dev/projects/cad86043-c545-40f1-9a06-70c7162fd54f/files/cf6cd352-7e0f-4b8e-9c3a-ebdec4b64462.jpg"
              alt="Premium vape products"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
