import { useState } from 'react';
import { Globe, BookOpen, Users, Heart, MapPin, Sparkles } from 'lucide-react';

function App() {
  const [lang, setLang] = useState<'ca' | 'en'>('ca');

  const content = {
    ca: {
      nav_llengua: 'Llengua',
      nav_cultura: 'Cultura',
      nav_historia: 'Història',
      nav_apren: 'Aprèn',
      hero_title: 'Benvinguts a Catalunya',
      hero_desc: 'Descobreix la riquesa del patrimoni cultural català, una llengua vibrant parlada per milions de persones i un poble orgullós amb segles de història.',
      btn_explore: 'Explora la Nostra Cultura',
      btn_learn: 'Aprèn Català',
      lang_title: 'La Llengua Catalana',
      lang_subtitle: 'Una llengua romànica amb més de 10 milions de parlants al món',
      speakers: 'Més de 10M Parlants',
      speakers_desc: 'Parlada a Catalunya, País Valencià, Illes Balears, Andorra, i parts de França i Sardenya',
      literature: 'Literatura Rica',
      literature_desc: 'Des dels trobadors medievals fins als escriptors moderns, la literatura catalana abasta més de 1.000 anys d\'història',
      official: 'Estatus Oficial',
      official_desc: 'Cooficial a Catalunya i Illes Balears, i l\'única llengua oficial d\'Andorra',
      culture_title: 'Cultura Catalana',
      culture_desc: 'Una barreja única de tradicions, art i costums que defineixen la nostra identitat',
      castells: 'Castells - Torres Humanes',
      castells_desc: 'Les icòniques torres humanes, o castells, són Patrimoni Cultural Immaterial de la UNESCO. Els equips construeixen torres de fins a 10 nivells, simbolitzant unitat, força i esforç col·lectiu.',
      castells_label: 'Patrimoni UNESCO',
      santjordi: 'Sant Jordi - Dia del Llibre i la Rosa',
      santjordi_desc: 'El 23 d\'abril, els catalans celebren el Dia de Sant Jordi intercanviant llibres i roses. Els carrers de Barcelona es plenen de parades de llibres i flors en aquesta celebració romàntica.',
      santjordi_label: 'Tradició Cultural',
      sardana: 'Ball de la Sardana',
      sardana_desc: 'La sardana és un ball tradicional en cercle que uneix comunitats. Els balladors es tenen de la mà seguint passos intricats amb música en viu, encarnant la solidaritat catalana.',
      sardana_label: 'Ball Tradicional',
      gastro: 'Excel·lència Gastronòmica',
      gastro_desc: 'Des del pa amb tomàquet fins a la cuina de renaixement mundial, la gastronomia catalana és celebrada globalment. Seu d\'alguns dels millors restaurants i innovació culinària del món.',
      gastro_label: 'Patrimoni Culinari',
      history_title: 'Una Història Plena',
      history_desc: 'Dels regnes medievals fins al renaixement cultural modern',
      history_9c: 'Naixement de Catalunya',
      history_9c_desc: 'El Comtat de Barcelona va emergir al segle IX, establint les fonaments de la identitat catalana i el desenvolupament de la llengua catalana a partir del llatí.',
      history_med: 'Edat d\'Or',
      history_med_desc: 'La Corona d\'Aragó, amb Catalunya al seu cor, es va convertir en una potència mediterrània. El comerç, la cultura i la llengua catalan van florir per tot la regió.',
      history_today: 'Renaixement Cultural',
      history_today_desc: 'La Catalunya moderna prospera com a centre cultural i econòmic, preservant la seva llengua i tradicions mentre abraça la innovació i la diversitat.',
      learn_title: 'Comença a Aprendre Català Avui',
      learn_desc: 'Uneix-te a milions de parlants i connecta amb la vibrant comunitat catalana a tot el món',
      btn_resources: 'Troba Recursos',
      btn_community: 'Connecta amb la Comunitat',
      footer_desc: 'Celebrant la llengua, cultura i poble català',
      footer_copy: '© 2024 Catalunya.cat - Preservant el patrimoni, abraçant el futur',
    },
    en: {
      nav_llengua: 'Language',
      nav_cultura: 'Culture',
      nav_historia: 'History',
      nav_apren: 'Learn',
      hero_title: 'Welcome to Catalunya',
      hero_desc: 'Discover the rich heritage of Catalan culture, a vibrant language spoken by millions, and a proud people with centuries of history.',
      btn_explore: 'Explore Our Culture',
      btn_learn: 'Learn Catalan',
      lang_title: 'La Llengua Catalana',
      lang_subtitle: 'A Romance language with over 10 million speakers worldwide',
      speakers: '10M+ Speakers',
      speakers_desc: 'Spoken in Catalonia, Valencia, the Balearic Islands, Andorra, and parts of France and Sardinia',
      literature: 'Rich Literature',
      literature_desc: 'Medieval troubadours to modern writers, Catalan literature spans over 1,000 years of history',
      official: 'Official Status',
      official_desc: 'Co-official language in Catalonia and the Balearic Islands, and the sole official language of Andorra',
      culture_title: 'Catalan Culture',
      culture_desc: 'A unique blend of traditions, art, and customs that define our identity',
      castells: 'Castells - Human Towers',
      castells_desc: 'The iconic human towers, or castells, are a UNESCO Intangible Cultural Heritage. Teams build towers up to 10 levels high, symbolizing unity, strength, and collective effort.',
      castells_label: 'UNESCO Heritage',
      santjordi: 'Sant Jordi - Book & Rose Day',
      santjordi_desc: 'On April 23rd, Catalans celebrate Sant Jordi\'s Day by exchanging books and roses. Barcelona\'s streets fill with book stalls and flower stands in this romantic celebration.',
      santjordi_label: 'Cultural Tradition',
      sardana: 'Sardana Dance',
      sardana_desc: 'The sardana is a traditional circle dance that brings communities together. Dancers hold hands and follow intricate steps to live music, embodying Catalan solidarity.',
      sardana_label: 'Traditional Dance',
      gastro: 'Gastronomic Excellence',
      gastro_desc: 'From pa amb tomàquet to world-renowned cuisine, Catalan gastronomy is celebrated globally. Home to some of the world\'s best restaurants and culinary innovation.',
      gastro_label: 'Culinary Heritage',
      history_title: 'A Storied History',
      history_desc: 'From medieval kingdoms to modern cultural renaissance',
      history_9c: 'Birth of Catalonia',
      history_9c_desc: 'The County of Barcelona emerged in the 9th century, laying the foundations for Catalan identity and the development of the Catalan language from Latin.',
      history_med: 'Golden Age',
      history_med_desc: 'The Crown of Aragon, with Catalonia at its heart, became a Mediterranean power. Catalan trade, culture, and language flourished across the region.',
      history_today: 'Cultural Renaissance',
      history_today_desc: 'Modern Catalonia thrives as a cultural and economic hub, preserving its language and traditions while embracing innovation and diversity.',
      learn_title: 'Start Learning Catalan Today',
      learn_desc: 'Join millions of speakers and connect with the vibrant Catalan community worldwide',
      btn_resources: 'Find Resources',
      btn_community: 'Connect with Community',
      footer_desc: 'Celebrating Catalan language, culture, and people',
      footer_copy: '© 2024 Catalunya.cat - Preserving heritage, embracing the future',
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Globe className="w-8 h-8 text-red-600" />
              <span className="text-2xl font-bold text-gray-900">Catalunya</span>
            </div>
            <div className="flex items-center gap-8">
              <div className="hidden md:flex gap-8">
                <a href="#language" className="text-gray-700 hover:text-red-600 transition-colors">{t.nav_llengua}</a>
                <a href="#culture" className="text-gray-700 hover:text-red-600 transition-colors">{t.nav_cultura}</a>
                <a href="#history" className="text-gray-700 hover:text-red-600 transition-colors">{t.nav_historia}</a>
                <a href="#learn" className="text-gray-700 hover:text-red-600 transition-colors">{t.nav_apren}</a>
              </div>
              <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setLang('ca')}
                  className={`px-3 py-1 rounded font-semibold transition-all ${lang === 'ca' ? 'bg-red-600 text-white' : 'text-gray-700 hover:text-gray-900'}`}
                >
                  CA
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded font-semibold transition-all ${lang === 'en' ? 'bg-red-600 text-white' : 'text-gray-700 hover:text-gray-900'}`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-amber-500 opacity-5"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            {t.hero_title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.hero_desc}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg">
              {t.btn_explore}
            </button>
            <button className="px-8 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-50 transition-all border-2 border-red-600">
              {t.btn_learn}
            </button>
          </div>
        </div>
      </section>

      <section id="language" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <BookOpen className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.lang_title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.lang_subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gradient-to-br from-red-50 to-amber-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.speakers}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.speakers_desc}
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.literature}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.literature_desc}
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-red-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.official}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.official_desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="culture" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.culture_title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.culture_desc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.castells}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.castells_desc}
              </p>
              <div className="flex items-center gap-2 text-red-600 font-semibold">
                <Users className="w-5 h-5" />
                <span>{t.castells_label}</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.santjordi}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.santjordi_desc}
              </p>
              <div className="flex items-center gap-2 text-red-600 font-semibold">
                <Heart className="w-5 h-5" />
                <span>{t.santjordi_label}</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.sardana}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.sardana_desc}
              </p>
              <div className="flex items-center gap-2 text-red-600 font-semibold">
                <Sparkles className="w-5 h-5" />
                <span>{t.sardana_label}</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.gastro}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.gastro_desc}
              </p>
              <div className="flex items-center gap-2 text-red-600 font-semibold">
                <Heart className="w-5 h-5" />
                <span>{t.gastro_label}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="history" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.history_title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.history_desc}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-red-600 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                9th C
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.history_9c}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t.history_9c_desc}
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                12-15th
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.history_med}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t.history_med_desc}
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-yellow-600 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                Today
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.history_today}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t.history_today_desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">{t.learn_title}</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            {t.learn_desc}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              {t.btn_resources}
            </button>
            <button className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all">
              {t.btn_community}
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="w-8 h-8 text-red-600" />
            <span className="text-2xl font-bold">Catalunya</span>
          </div>
          <p className="text-gray-400 mb-4">
            {t.footer_desc}
          </p>
          <p className="text-sm text-gray-500">
            {t.footer_copy}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
