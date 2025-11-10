import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (800) 123-45-67',
      link: 'tel:+78001234567',
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@vapestore.ru',
      link: 'mailto:info@vapestore.ru',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'г. Москва, ул. Примерная, д. 1',
      link: '#',
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      value: 'Ежедневно с 10:00 до 22:00',
      link: '#',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-md transition-shadow animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <Icon name={info.icon as any} className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm text-muted-foreground mb-1">
                          {info.title}
                        </h3>
                        {info.link !== '#' ? (
                          <a 
                            href={info.link}
                            className="text-sm font-semibold hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Мы в социальных сетях</h3>
                <div className="flex gap-3">
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Icon name="MessageCircle" className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Icon name="Instagram" className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Icon name="Send" className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="animate-scale-in">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-6">Напишите нам</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" />
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон" />
                </div>
                <div>
                  <Textarea 
                    placeholder="Ваше сообщение" 
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
