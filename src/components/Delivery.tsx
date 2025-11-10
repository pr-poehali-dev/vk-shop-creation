import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Delivery = () => {
  const deliveryMethods = [
    {
      icon: 'Truck',
      title: 'Курьерская доставка',
      time: '1-2 дня',
      price: 'от 300 ₽',
    },
    {
      icon: 'Package',
      title: 'Пункт выдачи',
      time: '2-3 дня',
      price: 'от 150 ₽',
    },
    {
      icon: 'Mail',
      title: 'Почта России',
      time: '5-7 дней',
      price: 'от 200 ₽',
    },
  ];

  const faqItems = [
    {
      question: 'В какие регионы осуществляется доставка?',
      answer: 'Мы доставляем по всей России. Стоимость и сроки доставки зависят от вашего региона.',
    },
    {
      question: 'Можно ли оформить самовывоз?',
      answer: 'Да, вы можете забрать заказ из нашего офиса в Москве по адресу: ул. Примерная, д. 1.',
    },
    {
      question: 'Как отследить заказ?',
      answer: 'После отправки заказа вы получите трек-номер для отслеживания на электронную почту.',
    },
    {
      question: 'Что делать, если товар не подошел?',
      answer: 'Вы можете вернуть товар в течение 14 дней с момента получения согласно закону о защите прав потребителей.',
    },
  ];

  return (
    <section id="delivery" className="py-20 bg-secondary/20">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Доставка и оплата</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем несколько удобных способов доставки и оплаты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {deliveryMethods.map((method, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <Icon name={method.icon as any} className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
                  <p className="text-sm text-muted-foreground">{method.time}</p>
                </div>
                <div className="text-2xl font-bold text-primary">{method.price}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Часто задаваемые вопросы</h3>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="hover:no-underline hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
