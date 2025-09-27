import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-10-05T23:59:59');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Fixed Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="https://cdn.poehali.dev/files/ab8d087a-c873-400b-ba81-c59b4d8d0b9d.png" 
                alt="НейроБизнес Крым" 
                className="h-8 w-auto"
              />
              <span className="font-montserrat font-bold text-purple-900">НейроБизнес Крым</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#program" className="text-gray-700 hover:text-primary transition-colors">Программа</a>
              <a href="#speakers" className="text-gray-700 hover:text-primary transition-colors">Спикеры</a>
              <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors">Цены</a>
              <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">FAQ</a>
            </nav>
            <Button className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-500">
              Регистрация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen text-center">
          <div className="w-full">
            <div className="mb-8">
              <img 
                src="https://cdn.poehali.dev/files/ab8d087a-c873-400b-ba81-c59b4d8d0b9d.png" 
                alt="НейроБизнес Крым" 
                className="h-24 md:h-32 w-auto mx-auto mb-6"
              />
            </div>
            <h1 className="font-montserrat font-black text-4xl md:text-6xl text-white mb-6 animate-fade-in">
              НейроБизнес Крым 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in max-w-4xl mx-auto">
              Первая региональная конференция по ИИ для крымского бизнеса
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 text-white">
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={20} />
                <span className="text-lg">22 октября 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={20} />
                <span className="text-lg">Крым • ZNClubHouse</span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="mb-12">
              <p className="text-orange-400 text-lg mb-4">Предварительная продажа до 5 октября заканчивается через:</p>
              <div className="flex justify-center gap-4">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-sm text-gray-300 capitalize">{
                      unit === 'days' ? 'дней' : 
                      unit === 'hours' ? 'часов' : 
                      unit === 'minutes' ? 'минут' : 'секунд'
                    }</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-500 text-white font-semibold text-lg px-8 py-4">
                Купить билет Early Bird за 6 000 ₽
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 text-lg px-8 py-4">
                Смотреть программу
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-purple-900 mb-4">
              За 1 день вы получите практические ИИ-решения для вашего бизнеса
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "FileText",
                title: "50+ готовых кейсов",
                description: "Реальные примеры внедрения ИИ в бизнес"
              },
              {
                icon: "Clock",
                title: "Персональная 15-минутная ИИ-консультация",
                description: "Индивидуальный разбор вашей ситуации"
              },
              {
                icon: "Monitor",
                title: "Демозоны по отраслям",
                description: "Практические демонстрации ИИ-решений"
              },
              {
                icon: "Users",
                title: "Нетворкинг с 300+ предпринимателями",
                description: "Знакомства и деловые связи"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-purple-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-purple-900 mb-4">
              Крымский бизнес, который хочет расти с ИИ
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Bed",
                title: "Туризм & HoReCa",
                subtitle: "отели, рестораны",
                description: "Автоматизация бронирования, персонализация услуг"
              },
              {
                icon: "Grape",
                title: "Агро & Виноделие",
                subtitle: "фермеры, винодельни",
                description: "Прогнозирование урожая, оптимизация производства"
              },
              {
                icon: "Building2",
                title: "Строительство & Девелопмент",
                subtitle: "застройщики, подрядчики",
                description: "Планирование проектов, контроль качества"
              },
              {
                icon: "Store",
                title: "Малый и средний бизнес",
                subtitle: "услуги, торговля",
                description: "Автоматизация процессов, аналитика продаж"
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-purple-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{item.subtitle}</p>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a href="#" className="text-accent-500 hover:text-accent-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Узнайте, как ИИ решит ваши задачи
                    <Icon name="ArrowRight" size={16} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Preview */}
      <section id="program" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-purple-900 mb-4">
              Программа конференции
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  time: "10:00-12:00",
                  title: "Пленарная часть",
                  description: "Главные тренды ИИ в бизнесе, кейсы ведущих компаний"
                },
                {
                  time: "12:00-16:00",
                  title: "Секции по отраслям",
                  description: "Специализированные треки для туризма, агро, строительства и SMB"
                },
                {
                  time: "16:00-18:00",
                  title: "Демозоны и консультации",
                  description: "Практические демонстрации ИИ-решений и персональные консультации"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm">
                  <div className="bg-accent-500 text-white px-4 py-2 rounded-lg font-semibold min-w-fit">
                    {item.time}
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-xl text-purple-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" className="border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white">
                Полная программа PDF
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Preview */}
      <section id="speakers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-purple-900 mb-4">
              Эксперты и практики ИИ
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Анна Петрова",
                company: "Сбер AI",
                topic: "ИИ в финтехе",
                avatar: "👩‍💼"
              },
              {
                name: "Михаил Сидоров",
                company: "Яндекс.Практикум",
                topic: "Машинное обучение для бизнеса",
                avatar: "👨‍💻"
              },
              {
                name: "Елена Козлова",
                company: "AI Crimea",
                topic: "Локальные кейсы внедрения",
                avatar: "👩‍🔬"
              }
            ].map((speaker, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">{speaker.avatar}</div>
                  <h3 className="font-montserrat font-semibold text-xl text-purple-900 mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-accent-500 font-medium mb-2">{speaker.company}</p>
                  <p className="text-gray-600">{speaker.topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white">
              Все спикеры
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-4">
              Билеты на конференцию
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Предварительная продажа",
                price: "6 000 ₽",
                originalPrice: "8 000 ₽",
                popular: true,
                features: [
                  "Доступ ко всем секциям",
                  "Материалы конференции",
                  "Кофе-брейки и обед",
                  "Сертификат участника"
                ]
              },
              {
                name: "Стандартный",
                price: "8 000 ₽",
                popular: false,
                features: [
                  "Доступ ко всем секциям",
                  "Материалы конференции",
                  "Кофе-брейки и обед",
                  "Сертификат участника"
                ]
              },
              {
                name: "VIP",
                price: "15 000 ₽",
                popular: false,
                features: [
                  "Все из стандартного",
                  "Доступ в спикерскую",
                  "Приоритетные консультации",
                  "Закрытый нетворкинг"
                ]
              }
            ].map((ticket, index) => (
              <Card key={index} className={`relative ${ticket.popular ? 'ring-2 ring-orange-500' : ''} bg-white`}>
                {ticket.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white">
                    ПОПУЛЯРНЫЙ
                  </Badge>
                )}
                <CardContent className="p-6 text-center">
                  <h3 className="font-montserrat font-semibold text-xl text-purple-900 mb-4">
                    {ticket.name}
                  </h3>
                  <div className="mb-6">
                    {ticket.originalPrice && (
                      <div className="text-gray-400 line-through text-lg">{ticket.originalPrice}</div>
                    )}
                    <div className="text-3xl font-bold text-purple-900">{ticket.price}</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {ticket.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${ticket.popular ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-500 text-white' : 'bg-accent-500 hover:bg-accent-600'}`}>
                    Купить билет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-purple-900 mb-4">
              Часто задаваемые вопросы
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Что входит в билет?",
                answer: "В стоимость билета входит доступ ко всем секциям конференции, материалы, кофе-брейки, обед и сертификат участника."
              },
              {
                question: "Будет ли онлайн-трансляция?",
                answer: "Да, для тех, кто не сможет присутствовать лично, будет организована онлайн-трансляция основных секций."
              },
              {
                question: "Как добраться до места проведения?",
                answer: "ZNClubHouse находится в центре города. Подробная схема проезда будет отправлена в письме с билетом."
              },
              {
                question: "Можно ли получить справку для налогового вычета?",
                answer: "Да, после конференции мы предоставим все необходимые документы для налогового вычета."
              },
              {
                question: "Что если я не смогу приехать?",
                answer: "Билеты можно вернуть до 15 октября с удержанием 10% комиссии или передать другому участнику."
              },
              {
                question: "Предусмотрен ли перевод для иностранных спикеров?",
                answer: "Все выступления будут на русском языке. При необходимости предоставляется синхронный перевод."
              }
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 py-4 font-montserrat font-semibold text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/ab8d087a-c873-400b-ba81-c59b4d8d0b9d.png" 
                  alt="НейроБизнес Крым" 
                  className="h-8 w-auto"
                />
                <span className="font-montserrat font-bold">НейроБизнес Крым</span>
              </div>
              <p className="text-gray-300">
                Первая региональная конференция по искусственному интеллекту для крымского бизнеса
              </p>
            </div>
            
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-300">
                <p>📧 info@neurobusiness-crimea.ru</p>
                <p>📱 +7 (978) 123-45-67</p>
                <p>📍 г. Симферополь, ZNClubHouse</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Icon name="MessageCircle" size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Icon name="Send" size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Icon name="Youtube" size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 НейроБизнес Крым. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;