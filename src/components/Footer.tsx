import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'О нас', href: '#about' },
      { label: 'Доставка', href: '#delivery' },
      { label: 'Контакты', href: '#contacts' },
    ],
    catalog: [
      { label: 'Устройства', href: '#catalog' },
      { label: 'Картриджи', href: '#catalog' },
      { label: 'Одноразовые', href: '#catalog' },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Icon name="Flame" className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">VapeStore</span>
            </div>
            <p className="text-sm text-background/70">
              Премиальные устройства для вашего образа жизни
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2">
              {footerLinks.catalog.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Icon name="Phone" className="h-4 w-4" />
                <span>+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" className="h-4 w-4" />
                <span>info@vapestore.ru</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/70">
            © {currentYear} VapeStore. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-background/70 hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-sm text-background/70 hover:text-primary transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
