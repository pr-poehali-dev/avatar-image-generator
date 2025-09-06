import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [imagePrompt, setImagePrompt] = useState('');
  const [avatarStyle, setAvatarStyle] = useState('cyberpunk');
  const [generatedImages] = useState([
    '/img/0b419512-4122-4236-93e3-d2e80b724ae9.jpg',
    '/img/0ffbcadd-347a-44c4-85c4-2c6de0ae8f0a.jpg',
    '/img/acb85690-85e0-49a8-ba4f-5be18450f9ea.jpg'
  ]);

  const avatarStyles = [
    { id: 'cyberpunk', name: 'Киберпанк', color: 'from-blue-500 to-purple-600' },
    { id: 'fantasy', name: 'Фэнтези', color: 'from-green-500 to-emerald-600' },
    { id: 'cartoon', name: 'Мультяшный', color: 'from-orange-500 to-red-500' },
    { id: 'realistic', name: 'Реалистичный', color: 'from-gray-500 to-slate-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  ArtGen Studio
                </h1>
                <p className="text-sm text-muted-foreground">ИИ-генератор изображений</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#generator" className="text-foreground/80 hover:text-foreground transition-colors">
                Генератор
              </a>
              <a href="#avatars" className="text-foreground/80 hover:text-foreground transition-colors">
                Аватары
              </a>
              <a href="#gallery" className="text-foreground/80 hover:text-foreground transition-colors">
                Галерея
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Создавай искусство с ИИ
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Преврати свои идеи в потрясающие изображения и уникальные аватары с помощью искусственного интеллекта
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-base">
                <Icon name="Zap" size={16} className="mr-2" />
                Молниеносно быстро
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-base">
                <Icon name="Palette" size={16} className="mr-2" />
                Безграничное творчество
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-base">
                <Icon name="Sparkles" size={16} className="mr-2" />
                ИИ нового поколения
              </Badge>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <Tabs defaultValue="generator" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="generator" className="flex items-center gap-2">
              <Icon name="Image" size={16} />
              Генератор
            </TabsTrigger>
            <TabsTrigger value="avatars" className="flex items-center gap-2">
              <Icon name="User" size={16} />
              Аватары
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <Icon name="Grid" size={16} />
              Галерея
            </TabsTrigger>
          </TabsList>

          {/* Image Generator */}
          <TabsContent value="generator" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Wand2" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">Генератор изображений</CardTitle>
                  <CardDescription>
                    Опиши свою идею, и ИИ создаст уникальное изображение
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="prompt">Описание изображения</Label>
                    <Textarea
                      id="prompt"
                      placeholder="Например: Космический пейзаж с летающими островами, северное сияние, магические кристаллы..."
                      value={imagePrompt}
                      onChange={(e) => setImagePrompt(e.target.value)}
                      className="min-h-24 resize-none"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                      <Icon name="Sparkles" size={16} className="mr-2" />
                      Сгенерировать
                    </Button>
                    <Button variant="outline">
                      <Icon name="Settings" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-gradient-to-br from-slate-50 to-gray-100">
                <CardContent className="p-6">
                  <div className="aspect-square bg-white rounded-lg shadow-inner flex items-center justify-center mb-4">
                    {generatedImages[0] ? (
                      <img
                        src={generatedImages[0]}
                        alt="Generated artwork"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-center text-muted-foreground">
                        <Icon name="ImageIcon" size={48} className="mx-auto mb-2" />
                        <p>Здесь появится ваше изображение</p>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      Разрешение: 1024×1024
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Icon name="Download" size={16} />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Icon name="Share" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Avatar Creator */}
          <TabsContent value="avatars" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="UserCircle" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">Создатель аватаров</CardTitle>
                  <CardDescription>
                    Создай уникальный аватар в любом стиле
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Стиль аватара</Label>
                    <div className="grid grid-cols-2 gap-3 mt-2">
                      {avatarStyles.map((style) => (
                        <Button
                          key={style.id}
                          variant={avatarStyle === style.id ? "default" : "outline"}
                          className={`h-12 ${
                            avatarStyle === style.id 
                              ? `bg-gradient-to-r ${style.color} hover:opacity-90` 
                              : ""
                          }`}
                          onClick={() => setAvatarStyle(style.id)}
                        >
                          {style.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="avatar-description">Описание персонажа</Label>
                    <Input
                      id="avatar-description"
                      placeholder="Молодой маг с голубыми глазами..."
                      className="mt-2"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90">
                    <Icon name="User" size={16} className="mr-2" />
                    Создать аватар
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-gradient-to-br from-orange-50 to-yellow-50">
                <CardContent className="p-6">
                  <div className="aspect-square bg-white rounded-lg shadow-inner flex items-center justify-center mb-4">
                    {generatedImages[1] ? (
                      <img
                        src={generatedImages[1]}
                        alt="Generated avatar"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-center text-muted-foreground">
                        <Icon name="UserCircle" size={48} className="mx-auto mb-2" />
                        <p>Здесь появится ваш аватар</p>
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <Button size="sm" variant="outline">
                      <Icon name="Palette" size={16} className="mr-1" />
                      Цвета
                    </Button>
                    <Button size="sm" variant="outline">
                      <Icon name="Shirt" size={16} className="mr-1" />
                      Одежда
                    </Button>
                    <Button size="sm" variant="outline">
                      <Icon name="Crown" size={16} className="mr-1" />
                      Аксессуары
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      Стиль: {avatarStyles.find(s => s.id === avatarStyle)?.name}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Icon name="Download" size={16} />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Icon name="Heart" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Gallery */}
          <TabsContent value="gallery" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Галерея работ</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Вдохновляйся работами других пользователей и делись своими творениями
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {generatedImages.map((image, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-scale-in">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">
                          {index === 0 ? 'Пейзаж' : index === 1 ? 'Аватар' : 'Абстракция'}
                        </Badge>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Icon name="Heart" size={14} />
                          <span>{Math.floor(Math.random() * 100) + 10}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {index === 0 
                          ? 'Магический пейзаж с летающими островами и северным сиянием'
                          : index === 1 
                          ? 'Киберпанк аватар с неоновыми элементами'
                          : 'Абстрактная композиция в ярких цветах'
                        }
                      </p>
                      <div className="flex justify-between items-center mt-3">
                        <div className="text-xs text-muted-foreground">
                          @user{index + 1}
                        </div>
                        <div className="flex gap-1">
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                            <Icon name="Download" size={14} />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                            <Icon name="Share" size={14} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center pt-8">
              <Button variant="outline" className="px-8">
                <Icon name="Plus" size={16} className="mr-2" />
                Загрузить больше
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Stats Section */}
        <section className="grid md:grid-cols-4 gap-6 py-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Icon name="Image" size={32} className="mx-auto mb-2 text-primary" />
              <div className="text-3xl font-bold text-primary">1.2M+</div>
              <div className="text-sm text-muted-foreground">Изображений создано</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Icon name="Users" size={32} className="mx-auto mb-2 text-secondary" />
              <div className="text-3xl font-bold text-secondary">50K+</div>
              <div className="text-sm text-muted-foreground">Активных пользователей</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Icon name="Zap" size={32} className="mx-auto mb-2 text-accent" />
              <div className="text-3xl font-bold text-accent">2.5s</div>
              <div className="text-sm text-muted-foreground">Средняя генерация</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Icon name="Star" size={32} className="mx-auto mb-2 text-yellow-500" />
              <div className="text-3xl font-bold text-yellow-500">4.9</div>
              <div className="text-sm text-muted-foreground">Рейтинг пользователей</div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={16} className="text-white" />
              </div>
              <span className="font-bold">ArtGen Studio</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 ArtGen Studio. Создано с помощью ИИ.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;