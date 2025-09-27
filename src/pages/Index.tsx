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
    <div className="min-h-screen bg-dark-900 text-white font-space">
      {/* Fixed Header */}
      <header className="fixed top-0 w-full bg-dark-800/80 backdrop-blur-lg z-50 border-b border-neon-purple/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="https://cdn.poehali.dev/files/ab8d087a-c873-400b-ba81-c59b4d8d0b9d.png" 
                alt="НейроБизнес Крым" 
                className="h-8 w-auto"
              />
              <span className="font-orbitron font-bold text-white">НейроБизнес Крым</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#program" className="text-gray-300 hover:text-neon-cyan transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">Программа</a>
              <a href="#speakers" className="text-gray-300 hover:text-neon-cyan transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">Спикеры</a>
              <a href="#pricing" className="text-gray-300 hover:text-neon-cyan transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">Цены</a>
              <a href="#faq" className="text-gray-300 hover:text-neon-cyan transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">FAQ</a>
            </nav>
            <Button className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-300 shadow-[0_0_20px_rgba(255,0,128,0.3)] hover:shadow-[0_0_30px_rgba(255,0,128,0.5)]">
              Регистрация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-neon-pink/20 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-glow"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen text-center">
          <div className="w-full">
            <div className="mb-8 animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/files/ab8d087a-c873-400b-ba81-c59b4d8d0b9d.png" 
                alt="НейроБизнес Крым" 
                className="h-48 md:h-64 w-auto mx-auto mb-6 drop-shadow-[0_0_30px_rgba(255,0,128,0.5)]"
              />
            </div>
            <h1 className="font-orbitron font-black text-5xl md:text-7xl mb-6 animate-fade-in bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
              НейроБизнес Крым 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in max-w-4xl mx-auto font-sora">
              Первая конференция по ИИ для крымского бизнеса
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-white">
              <div className="flex items-center gap-3 bg-dark-700/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-neon-cyan/30">
                <Icon name="Calendar" size={20} className="text-neon-cyan" />
                <span className="text-lg">22 октября 2025</span>
              </div>
              <div className="flex items-center gap-3 bg-dark-700/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-neon-pink/30">
                <Icon name="MapPin" size={20} className="text-neon-pink" />
                <span className="text-lg">Крым • ZNClubHouse</span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="mb-12">
              <p className="text-neon-cyan text-xl mb-6 font-sora font-medium">
                Льготная предпродажа заканчивается через:
              </p>
              <div className="flex justify-center gap-4">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="bg-gradient-to-br from-dark-700 to-dark-600 backdrop-blur-sm rounded-xl p-6 min-w-[90px] border border-neon-purple/30 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                    <div className="text-3xl font-bold text-neon-pink font-orbitron">{value}</div>
                    <div className="text-sm text-gray-400 capitalize font-sora">{
                      unit === 'days' ? 'дней' : 
                      unit === 'hours' ? 'часов' : 
                      unit === 'minutes' ? 'минут' : 'секунд'
                    }</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-white font-bold text-lg px-8 py-4 shadow-[0_0_30px_rgba(255,0,128,0.4)] hover:shadow-[0_0_40px_rgba(255,0,128,0.6)] transition-all duration-300 border border-neon-pink/50">
                Купить билет льготной предпродажи за 6 000 ₽
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-900 text-lg px-8 py-4 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300">
                Смотреть программу
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-700 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              За 1 день вы получите практические ИИ-решения для вашего бизнеса
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "FileText",
                title: "50+ готовых кейсов",
                description: "Реальные примеры внедрения ИИ в бизнес",
                color: "from-neon-pink to-neon-purple"
              },
              {
                icon: "Clock",
                title: "Персональная 15-минутная ИИ-консультация",
                description: "Индивидуальный разбор вашей ситуации",
                color: "from-neon-cyan to-neon-blue"
              },
              {
                icon: "Monitor",
                title: "Демозоны по отраслям",
                description: "Практические демонстрации ИИ-решений",
                color: "from-neon-purple to-neon-cyan"
              },
              {
                icon: "Users",
                title: "Нетворкинг с 300+ предпринимателями",
                description: "Знакомства и деловые связи",
                color: "from-neon-blue to-neon-green"
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-[0_0_30px_rgba(255,0,128,0.2)] transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-dark-700 to-dark-600 border border-gray-700/50 hover:border-neon-pink/30">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(255,0,128,0.3)] group-hover:shadow-[0_0_30px_rgba(255,0,128,0.5)] transition-all duration-300`}>
                    <Icon name={item.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="font-orbitron font-semibold text-xl text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 font-sora">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-gradient-to-br from-dark-700 to-dark-800 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-48 h-48 bg-neon-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-48 h-48 bg-neon-cyan/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              Крымский бизнес, который хочет расти с ИИ
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Bed",
                title: "Туризм & HoReCa",
                subtitle: "отели, рестораны",
                description: "Автоматизация бронирования, персонализация услуг",
                gradient: "from-neon-pink via-neon-purple to-neon-cyan"
              },
              {
                icon: "Grape",
                title: "Агро & Виноделие",
                subtitle: "фермеры, винодельни",
                description: "Прогнозирование урожая, оптимизация производства",
                gradient: "from-neon-cyan via-neon-blue to-neon-green"
              },
              {
                icon: "Building2",
                title: "Строительство & Девелопмент",
                subtitle: "застройщики, подрядчики",
                description: "Планирование проектов, контроль качества",
                gradient: "from-neon-purple via-neon-pink to-neon-cyan"
              },
              {
                icon: "Store",
                title: "Малый и средний бизнес",
                subtitle: "услуги, торговля",
                description: "Автоматизация процессов, аналитика продаж",
                gradient: "from-neon-green via-neon-cyan to-neon-blue"
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-500 bg-gradient-to-br from-dark-700 to-dark-600 border border-gray-700/50 hover:border-neon-purple/30">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(139,92,246,0.3)]`}>
                    <Icon name={item.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="font-orbitron font-semibold text-xl text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3 font-sora">{item.subtitle}</p>
                  <p className="text-gray-300 mb-4 font-sora">{item.description}</p>
                  <a href="#" className="text-neon-cyan hover:text-neon-pink font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300 font-sora">
                    Узнайте, как ИИ решит ваши задачи
                    <Icon name="ArrowRight" size={16} className="group-hover:drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Preview */}
      <section id="program" className="py-20 bg-gradient-to-br from-dark-800 to-dark-700 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
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
                <div key={index} className="flex items-start gap-6 p-6 bg-gradient-to-r from-dark-700 to-dark-600 rounded-xl border border-gray-700/50 hover:border-neon-blue/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                  <div className="bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-900 px-4 py-2 rounded-lg font-bold min-w-fit font-orbitron shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    {item.time}
                  </div>
                  <div>
                    <h3 className="font-orbitron font-semibold text-xl text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 font-sora">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" className="border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-900 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300">
                Полная программа PDF
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Preview */}
      <section id="speakers" className="py-20 bg-gradient-to-br from-dark-700 to-dark-800 relative">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
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
              <Card key={index} className="text-center hover:shadow-[0_0_25px_rgba(255,0,128,0.2)] transition-all duration-500 bg-gradient-to-br from-dark-700 to-dark-600 border border-gray-700/50 hover:border-neon-pink/30">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4 animate-pulse-glow">{speaker.avatar}</div>
                  <h3 className="font-orbitron font-semibold text-xl text-white mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-neon-purple font-medium mb-2 font-sora">{speaker.company}</p>
                  <p className="text-gray-300 font-sora">{speaker.topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300">
              Все спикеры
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">
              Билеты на конференцию
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Льготная предпродажа",
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
              <Card key={index} className={`relative ${ticket.popular ? 'ring-2 ring-neon-pink shadow-[0_0_40px_rgba(255,0,128,0.3)]' : 'hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]'} bg-gradient-to-br from-dark-700 to-dark-600 border border-gray-700/50 transition-all duration-500`}>
                {ticket.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-orbitron shadow-[0_0_15px_rgba(255,0,128,0.5)]">
                    ПОПУЛЯРНЫЙ
                  </Badge>
                )}
                <CardContent className="p-6 text-center">
                  <h3 className="font-orbitron font-semibold text-xl text-white mb-4">
                    {ticket.name}
                  </h3>
                  <div className="mb-6">
                    {ticket.originalPrice && (
                      <div className="text-gray-400 line-through text-lg">{ticket.originalPrice}</div>
                    )}
                    <div className="text-3xl font-bold text-neon-cyan font-orbitron">{ticket.price}</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {ticket.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-neon-green" />
                        <span className="text-gray-300 font-sora">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full transition-all duration-300 ${
                    ticket.popular 
                      ? 'bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-cyan shadow-[0_0_25px_rgba(255,0,128,0.4)] hover:shadow-[0_0_35px_rgba(255,0,128,0.6)]' 
                      : 'bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-cyan shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]'
                  } text-white font-orbitron font-bold`}>
                    Купить билет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gradient-to-br from-dark-800 to-dark-700 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
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
              <AccordionItem key={index} value={`item-${index}`} className="bg-gradient-to-r from-dark-700 to-dark-600 rounded-lg border border-gray-700/50 hover:border-neon-cyan/30 transition-all duration-300">
                <AccordionTrigger className="px-6 py-4 font-orbitron font-semibold text-left text-white hover:text-neon-cyan transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300 font-sora">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-dark-900 to-dark-800 text-white py-12 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-72 h-72 bg-neon-purple/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/ab8d087a-c873-400b-ba81-c59b4d8d0b9d.png" 
                  alt="НейроБизнес Крым" 
                  className="h-8 w-auto"
                />
                <span className="font-orbitron font-bold">НейроБизнес Крым</span>
              </div>
              <p className="text-gray-300 font-sora">
                Первая конференция по искусственному интеллекту для крымского бизнеса
              </p>
            </div>
            
            <div>
              <h3 className="font-orbitron font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-300 font-sora">
                <p>📧 info@neurobusiness-crimea.ru</p>
                <p>📱 +7 (978) 123-45-67</p>
                <p>📍 г. Симферополь, ZNClubHouse</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-orbitron font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-neon-cyan transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">
                  <Icon name="MessageCircle" size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-neon-pink transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,0,128,0.5)]">
                  <Icon name="Send" size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-neon-purple transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">
                  <Icon name="Youtube" size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700/50 mt-8 pt-8 text-center text-gray-400">
            <p className="font-sora">&copy; 2025 НейроБизнес Крым. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;