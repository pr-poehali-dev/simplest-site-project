import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-primary/10 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex gap-8 justify-center">
            <a href="#main" className="text-foreground hover:text-accent transition-colors font-semibold">
              Главная
            </a>
            <a href="#bio" className="text-foreground hover:text-accent transition-colors font-semibold">
              О Пушкине
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section id="main" className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              Александр Сергеевич Пушкин
            </h1>
            <p className="text-xl text-muted-foreground">
              1799 — 1837
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/projects/d55b54a9-ac3b-4806-81bb-b1de3aaf30fe/files/b0271b14-5fd4-4485-afe5-4afc0185cf62.jpg"
              alt="Портрет А.С. Пушкина"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </section>

        <section id="bio" className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Card className="p-8 md:p-12 max-w-4xl mx-auto bg-white shadow-xl">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">
              Общая характеристика
            </h2>
            
            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              <p className="leading-relaxed">
                Александр Сергеевич Пушкин — величайший русский поэт, драматург и прозаик, 
                основоположник современного русского литературного языка. Его творчество считается 
                вершиной русской литературы и золотым веком русской поэзии.
              </p>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                Литературное наследие
              </h3>
              <p className="leading-relaxed">
                Пушкин создал произведения различных жанров: лирические стихотворения, поэмы, 
                драматические произведения, прозу. Среди его знаменитых работ — роман в стихах 
                «Евгений Онегин», трагедия «Борис Годунов», поэма «Медный всадник», повести 
                «Капитанская дочка» и «Пиковая дама».
              </p>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                Значение для русской культуры
              </h3>
              <p className="leading-relaxed">
                Творчество Пушкина оказало огромное влияние на развитие русской литературы и культуры. 
                Он создал литературный язык, объединивший книжные и разговорные формы речи. 
                Его произведения переведены на многие языки мира и продолжают вдохновлять читателей 
                по всему свету.
              </p>

              <div className="mt-10 pt-8 border-t border-accent/30">
                <p className="text-center text-muted-foreground italic">
                  «Пушкин есть явление чрезвычайное и, может быть, единственное явление русского духа»
                  <br />
                  <span className="text-sm">— Н.В. Гоголь</span>
                </p>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <footer className="mt-20 py-8 border-t border-primary/10 bg-white/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>Школьный проект, 9 класс</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
