window.onload = function(){
    
    var availableTags = [
        "5-й парк вулиця",
        "700-річчя Львова площа",
        "Абхазька вулиця",
        "Авіаційна вулиця",
        "Автобудівельників проїзд",
        "Агабек-Заде вулиця",
        "Агрусова вулиця",
        "Азовська вулиця",
        "Айвазовського І. вулиця",
        "Акацієва вулиця",
        "Алмазна вулиця",
        "Алмазова О. ген. вулиця",
        "Алчевської Х. вулиця",
        "Ангарна вулиця",
        "Ангеловича А. митр. вулиця",
        "Антоненка-Давидовича Б. вулиця",
        "Антонича Б.-І. вулиця",
        "Антоновича В. вулиця",
        "Апостола Д. вулиця",
        "Аральська вулиця",
        "Аркаса М. вулиця",
        "Арсенальська вулиця",
        "Архипенка О. вулиця",
        "Архівна вулиця",
        "Архітекторська вулиця",
        "Бабія О. вулиця",
        "Багалія Д. вулиця",
        "Багряного І. вулиця",
        "Бажана М. вулиця",
        "Базальтова вулиця",
        "Базарна вулиця",
        "Бакинська вулиця",
        "Балабана М. вулиця",
        "Балкова вулиця",
        "Балтійська вулиця",
        "Бальзака О. вулиця",
        "Банаха С. вулиця",
        "Бандери С. вулиця",
        "Бандрівського Д. вулиця",
        "Банківська вулиця",
        "Барбарисова вулиця",
        "Барвінок Г. вулиця",
        "Барвінських вулиця",
        "Баронча С. вулиця",
        "Басараб О. вулиця",
        "Батуринська вулиця",
        "Бахматюка О. вулиця",
        "Бачинського Ю. вулиця",
        "Баштанна вулиця",
        "Белзька вулиця",
        "Бенцаля М. вулиця",
        "Бережанська вулиця",
        "Березова вулиця",
        "Берестяна вулиця",
        "Беринди П. вулиця",
        "Бескидська вулиця",
        "Бетховена Л. вулиця",
        "Біберовича І. вулиця",
        "Бібліотечна вулиця",
        "Бігова вулиця",
        "Біласа В. вулиця",
        "Білинського М. вулиця",
        "Білогорська восьма вулиця",
        "Білогорська дванадцята вулиця",
        "Білогорська дев\'ята вулиця",
        "Білогорська десята вулиця",
        "Білогорська друга вулиця",
        "Білогорська одинадцята вулиця",
        "Білогорська перша вулиця",
        "Білогорська п\'ята вулиця",
        "Білогорська сьома вулиця",
        "Білогорська третя вулиця",
        "Білогорська тринадцята вулиця",
        "Білогорська четверта вулиця",
        "Білогорська чотирнадцята вулиця",
        "Білогорська шоста вулиця",
        "Білогорща вулиця",
        "Білоруська вулиця",
        "Білоцерківська вулиця",
        "Біляшівського М. вулиця",
        "Бічна Прилбицька вулиця",
        "Бічна Сотника Панаса вулиця",
        "Блажкевич І. вулиця",
        "Боберського І. вулиця",
        "Бобинського В. вулиця",
        "Богданівська вулиця",
        "Богомольця О. акад. вулиця",
        "Богуна І. вулиця",
        "Боднарська вулиця",
        "Бодянського О. вулиця",
        "Бой-Желенського Т. вулиця",
        "Бойківська вулиця",
        "Бойчука М. вулиця",
        "Болбочана П. полк. вулиця",
        "Болгарська вулиця",
        "Боровиковського Л. вулиця",
        "Бортнянського Д. вулиця",
        "Ботанічна вулиця",
        "Ботєва Х. вулиця",
        "Боткіна С. вулиця",
        "Братів Климових вулиця",
        "Братів Міхновських вулиця",
        "Братів Рогатинців вулиця",
        "Братів Тимошенків вулиця",
        "Братня вулиця",
        "Братуня Р. вулиця",
        "Бринського М. вулиця",
        "Броварна вулиця",
        "Броварського Л. вулиця",
        "Бродівська вулиця",
        "Бруснична вулиця",
        "Бруснівська вулиця",
        "Брюллова К. вулиця",
        "Брюховицька вулиця",
        "Бузинова вулиця",
        "Бузкова вулиця",
        "Буйка П. вулиця",
        "Букова вулиця",
        "Буковинська вулиця",
        "Буська вулиця",
        "Буцманюка Ю. вулиця",
        "Бучми А. вулиця",
        "Вагилевича І. вулиця",
        "Вагова вулиця",
        "Вагонна вулиця",
        "Валова вулиця",
        "Варшавська вулиця",
        "Васильківського С. вулиця",
        "Васильченка С. вулиця",
        "Вахнянина А. вулиця",
        "Вашингтона Дж. вулиця",
        "Веделя А. вулиця",
        "Величка С. вулиця",
        "Величковського І. вулиця",
        "Венеціанова О. вулиця",
        "Вербицького М. вулиця",
        "Вербова вулиця",
        "Вересая Остапавулиця",
        "Вернадського В. вулиця",
        "Вернигори вулиця",
        "Верхратського І. вулиця",
        "Вершницька вулиця",
        "Весела вулиця",
        "Весняна вулиця",
        "Ветеранів вулиця",
        "Вечірня вулиця",
        "Вигін вулиця",
        "Виговського І. вулиця",
        "Вигоди вулиця",
        "Визвольна вулиця",
        "Вилітна вулиця",
        "Винниківська вулиця",
        "Винниця вулиця",
        "Винниченка В. вулиця",
        "Виноградна вулиця",
        "Випасова вулиця",
        "Висока вулиця",
        "Високий Замок вулиця",
        "Височана С. вулиця",
        "Вишенського І. вулиця",
        "Вишиваного В. площа",
        "Вишнева вулиця",
        "Вівсяна вулиця",
        "Віденська вулиця",
        "Відкрита вулиця",
        "Війтовича П. вулиця",
        "Вільде І. вулиця",
        "Вільхова вулиця",
        "Віри, Надії, Любові вулиця",
        "Вірменська вулиця",
        "Вітвера Г. вулиця",
        "Вітовського Д. вулиця",
        "Вітрякова вулиця",
        "Вітряна вулиця",
        "Вічева вулиця",
        "Вічева, площа",
        "Вовка Ф. вулиця",
        "Водна вулиця",
        "Водогінна вулиця",
        "Возняка М. акад. вулиця",
        "Волинська вулиця",
        "Володимира Великого вулиця",
        "Волоська вулиця",
        "Волошина А. вулиця",
        "Волошкова вулиця",
        "Волощака А. вулиця",
        "Воля вулиця",
        "Воробкевича С. вулиця",
        "Вороного М. вулиця",
        "Врізана вулиця",
        "Врубеля М. вулиця",
        "Втіха вулиця",
        "Вугільна вулиця",
        "Вузька вулиця",
        "Вулецька вулиця",
        "Гавришкевича С. вулиця",
        "Газова вулиця",
        "Гайворонського М. вулиця",
        "Гайдамацька вулиця",
        "Гайдучка С. вулиця",
        "Гайова вулиця",
        "Гайовської Л. вулиця",
        "Галечко С. вулиця",
        "Галицька вулиця",
        "Галицька, площа",
        "Галілея Г. вулиця",
        "Гамалії М. вулиця",
        "Ганкевича Л. вулиця",
        "Ганцова В. вулиця",
        "Гарматія Л. вулиця",
        "Гасина О. площа",
        "Гашека Я. вулиця",
        "Геологічна вулиця",
        "Героїв Крут вулиця",
        "Героїв Майдану вулиця",
        "Героїв УПА вулиця",
        "Герцена О. вулиця",
        "Геца Л. вулиця",
        "Гіацинтова вулиця",
        "Гіпсова вулиця",
        "Гірника О. вулиця",
        "Глибока вулиця",
        "Глиняна вулиця",
        "Глинянський Тракт вулиця",
        "Глібова Л. вулиця",
        "Глінки М. вулиця",
        "Гнатевича Б. вулиця",
        "Гнатюка В. акад. вулиця",
        "Гніздовського Я. вулиця",
        "Гоголя М. вулиця",
        "Годованця М. вулиця",
        "Голинського М. вулиця",
        "Головатого А. вулиця",
        "Головацького Я. вулиця",
        "Голубина вулиця",
        "Голубовича С. вулиця",
        "Голубця М. вулиця",
        "Гонти І. вулиця",
        "Горбачевського І. вулиця",
        "Горбкова вулиця",
        "Гординських вулиця",
        "Гордієнка К. вулиця",
        "Горівська вулиця",
        "Горіхова вулиця",
        "Горліса-Горського Ю. вулиця",
        "Горобинна вулиця",
        "Городницька вулиця",
        "Городоцька вулиця",
        "Горської А. вулиця",
        "Господарська вулиця",
        "Гостинна вулиця",
        "Грабова вулиця",
        "Грабовського П. вулиця",
        "Грабянки Г. вулиця",
        "Гранична вулиця",
        "Гранітна вулиця",
        "Гребінки Є. вулиця",
        "Грекова О. ген. вулиця",
        "Грецька вулиця",
        "Гречана вулиця",
        "Грибова вулиця",
        "Григоренка П. ген. площа",
        "Григоровича І. вулиця",
        "Грицая Д. ген. вулиця",
        "Грінченка Б. вулиця",
        "Грузинська вулиця",
        "Грунтова вулиця",
        "Грушева вулиця",
        "Грушевського М. вулиця",
        "Грюнвальдська вулиця",
        "Грядкова вулиця",
        "Гулака-Артемовського С. вулиця",
        "Гуні Д. вулиця",
        "Гуцульська вулиця",
        "Гушалевича І. вулиця",
        "Дагестанська вулиця",
        "Дальня вулиця",
        "Данила Галицького, площа",
        "Данилишина Д. вулиця",
        "Дашкевича Р. вулиця",
        "Двірцева, площа",
        "Декарта Р. вулиця",
        "Демнянська вулиця",
        "Детька Д. вулиця",
        "Джерельна вулиця",
        "Дзиндри Є. вулиця",
        "Дивізійна вулиця",
        "Диктова вулиця",
        "Динівська вулиця",
        "Діаманда Г. вулиця",
        "Дібровна вулиця",
        "Дідушка В. вулиця",
        "Дніпрової Чайки вулиця",
        "Дніпровська вулиця",
        "Дністерська вулиця",
        "Довбуша О. вулиця",
        "Довга вулиця",
        "Довженка О. вулиця",
        "Дозвільна вулиця",
        "Доленка Г. акад. вулиця",
        "Долинського Л. вулиця",
        "Долішня вулиця",
        "Донецька вулиця",
        "Донцова Д. вулиця",
        "Доробок вулиця",
        "Дорогичинська вулиця",
        "Дороша Ю. вулиця",
        "Дорошенка П. вулиця",
        "Дорошенка П. (Малехів) вулиця",
        "Досвітня вулиця",
        "Доступна вулиця",
        "Драгана М. вулиця",
        "Драгоманова М. вулиця",
        "Драй-Хмари М. вулиця",
        "Дріжджова вулиця",
        "Дрогобицька вулиця",
        "Дрогобича Ю. вулиця",
        "Друкарська вулиця",
        "Дублянська вулиця",
        "Дубнівська вулиця",
        "Дубова вулиця",
        "Дубовицька вулиця",
        "Дудаєва Дж. вулиця",
        "Дунайська вулиця",
        "Духновича О. вулиця",
        "Дучимінської О. вулиця",
        "Емінеску М. вулиця",
        "Енергетична вулиця",
        "Естонська вулиця",
        "Євського С. вулиця",
        "Єрошенка В. вулиця",
        "Єфремова С. акад. вулиця",
        "Жасминова вулиця",
        "Ждахи М. вулиця",
        "Жемчужникова Л. вулиця",
        "Жижки Яна вулиця",
        "Житня вулиця",
        "Житомирська вулиця",
        "Жнивна вулиця",
        "Жовківська вулиця",
        "Жуковського В. вулиця",
        "Журавлина вулиця",
        "Заболотівська вулиця",
        "Заводська вулиця",
        "Загірна вулиця",
        "Загородня вулиця",
        "Загула Д. вулиця",
        "Заклинських вулиця",
        "Залізнична вулиця",
        "Залізняка М. вулиця",
        "Залісна вулиця",
        "Замарстинівська вулиця",
        "Заміська вулиця",
        "Замкнена вулиця",
        "Замкова вулиця",
        "Заньковецької М. вулиця",
        "Заозерна вулиця",
        "Заозерний пров. 1-й провулок",
        "Заозерний пров. 2-й провулок",
        "Заозерний пров. 3-й провулок",
        "Заозерний пров. 4-й провулок",
        "Заозерний пров. 5-й провулок",
        "Заозерний пров. 6-й провулок",
        "Запашна вулиця",
        "Заповітна вулиця",
        "Запольської Г. вулиця",
        "Запорізька вулиця",
        "Зарицьких вулиця",
        "Засядька О. ген. вулиця",
        "Затишна вулиця",
        "Захарієвича Ю. вулиця",
        "Збаразька вулиця",
        "Збиральна вулиця",
        "Збоїща вулиця",
        "Зборівська вулиця",
        "Звенигородська, площа",
        "Зв\'язкова вулиця",
        "Здоров\'я вулиця",
        "Зелена вулиця",
        "Земельна вулиця",
        "Землеробна вулиця",
        "Зернова вулиця",
        "Зерова М. вулиця",
        "Зигзаг вулиця",
        "Зимновідська вулиця",
        "Зимова вулиця",
        "Зимова горішня вулиця",
        "Зимова долішня вулиця",
        "Золота вулиця",
        "Золочівська вулиця",
        "Зоряна вулиця",
        "Зрубова вулиця",
        "Зубрицького Д. вулиця",
        "Зубрівська вулиця",
        "Зустрічна вулиця",
        "Іванова гора вулиця",
        "Іванюти М. вулиця",
        "Івасюка В. вулиця",
        "Ігорева вулиця",
        "Ільмова вулиця",
        "Інструментальна вулиця",
        "Ірчана М. вулиця",
        "Кавалерідзе І. вулиця",
        "Кавказька вулиця",
        "Каганця М. вулиця",
        "Казахська вулиця",
        "Калинова вулиця",
        "Каліча Гора вулиця",
        "Калнишевського П. вулиця",
        "Каменярів вулиця",
        "Камінна вулиця",
        "Кам\'янецька вулиця",
        "Кам\'янка вулиця",
        "Канівська вулиця",
        "Караджича В. вулиця",
        "Караїмська вулиця",
        "Карла Мікльоша вулиця",
        "Кармалюка У. вулиця",
        "Карманського П. вулиця",
        "Карпатська вулиця",
        "Карпинця І. вулиця",
        "Карпінського О. вулиця",
        "Кастелівка вулиця",
        "Катедральна, площа",
        "Каховська вулиця",
        "Качали С. вулиця",
        "Каштанова вулиця",
        "Квітки-Основ\'яненка Г. вулиця",
        "Квітнева вулиця",
        "Квітова вулиця",
        "Кедрова вулиця",
        "Керамічна вулиця",
        "Керченська вулиця",
        "Кибальчича М. вулиця",
        "Київська вулиця",
        "Кирила і Мефодія вулиця",
        "Кирилівська вулиця",
        "Китайська вулиця",
        "Кишинівська вулиця",
        "Кінцева вулиця",
        "Кленова вулиця",
        "Клепарівська вулиця",
        "Кльоновича С. вулиця",
        "Княгині Ольги вулиця",
        "Княжа вулиця",
        "Князя Мстислава Удатного вулиця",
        "Князя Романа вулиця",
        "Князя Святослава, площа",
        "Князя Ярослава Осмомисла, площа",
        "Кобзарська вулиця",
        "Кобилиці Л. вулиця",
        "Кобилянської О. вулиця",
        "Кобринської Н. вулиця",
        "Ковалева С. вулиця",
        "Ковалевської С. вулиця",
        "Ковалика, вулиця",
        "Ковальська вулиця",
        "Ковельська вулиця",
        "Коверка А. вулиця",
        "Ковжуна П. вулиця",
        "Козацька вулиця",
        "Козельницька вулиця",
        "Козика М. вулиця",
        "Козланюка П. вулиця",
        "Козловського О. вулиця",
        "Кокорудза І. вулиця",
        "Колесси Ф. акад. вулиця",
        "Коліївщини, площа",
        "Колійна вулиця",
        "Колісна вулиця",
        "Колодзінського М. вулиця",
        "Колодійська вулиця",
        "Колодязна вулиця",
        "Коломийська вулиця",
        "Колоскова вулиця",
        "Колумба Х. вулиця",
        "Кольберга О. вулиця",
        "Комаринця Т. вулиця",
        "Комарова В. вулиця",
        "Конвеєробудівників вулиця",
        "Кондратюка Ю. вулиця",
        "Кондукторська вулиця",
        "Кониського О. вулиця",
        "Коновальця Є. вулиця",
        "Конопницької М. вулиця",
        "Конотопська вулиця",
        "Конюшинна вулиця",
        "Кооперативна вулиця",
        "Копальна вулиця",
        "Копача І. вулиця",
        "Коперника М. вулиця",
        "Копистинського Т. вулиця",
        "Кордуби М. вулиця",
        "Корейська вулиця",
        "Корецька вулиця",
        "Корінна вулиця",
        "Коріятовича Ф. вулиця",
        "Корнякта К. вулиця",
        "Короленка В. вулиця",
        "Корольова С. вулиця",
        "Коротка вулиця",
        "Корпанюків вулиця",
        "Корсунська вулиця",
        "Кортумівка вулиця",
        "Корякська вулиця",
        "Кос-Анатольського А. вулиця",
        "Косинського К. вулиця",
        "Космічна вулиця",
        "Костомарова М. вулиця",
        "Костюшка Т. вулиця",
        "Котика Б. вулиця",
        "Котка Д. вулиця",
        "Котляревського І. вулиця",
        "Котлярська вулиця",
        "Коциловського Й. вулиця",
        "Коцка А. вулиця",
        "Коцюбинського М. вулиця",
        "Кочегарська вулиця",
        "Кошиця О. вулиця",
        "Кошова вулиця",
        "Кравецька вулиця",
        "Кравса А. ген. вулиця",
        "Кравченко У. вулиця",
        "Кравчука М. акад. вулиця",
        "Крайня вулиця",
        "Краківська вулиця",
        "Красівська вулиця",
        "Краснянська вулиця",
        "Кревецького І. вулиця",
        "Кременецька вулиця",
        "Крехівська вулиця",
        "Кривоноса М. вулиця",
        "Кривчицька Дорога вулиця",
        "Кримська вулиця",
        "Кринична площа",
        "Крип\'якевича І. акад. вулиця",
        "Кричевського М. вулиця",
        "Кропивницького М. площа",
        "Кругла вулиця",
        "Кругова вулиця",
        "Круп\'ярська вулиця",
        "Крута вулиця",
        "Крушельницької С. вулиця",
        "Кубанська вулиця",
        "Кубійовича В. вулиця",
        "Кузневича Г. вулиця",
        "Кузнярівка вулиця",
        "Кузьми О. вулиця",
        "Кукурудзяна вулиця",
        "Куликівська вулиця",
        "Куліша П. вулиця",
        "Кульпарківська вулиця",
        "Кульчицького С. ген. вулиця",
        "Кульчицької О. вулиця",
        "Купали Я. вулиця",
        "Купальська вулиця",
        "Купчинського Р. вулиця",
        "Курбаса Л. вулиця",
        "Курильська вулиця",
        "Курінна вулиця",
        "Курмановича В. ген. вулиця",
        "Куроня Я. площа",
        "Кутова вулиця",
        "Кучера Р. акад. вулиця",
        "Кушевича С. вулиця",
        "Кущова вулиця",
        "Лаврівського І. вулиця",
        "Лазаренка Є. акад. вулиця",
        "Лазнева вулиця",
        "Ламана вулиця",
        "Ланова вулиця",
        "Ластів\'яча вулиця",
        "Латвійська вулиця",
        "Лебедина вулиця",
        "Левандівська вулиця",
        "Левинського І. вулиця",
        "Левицького К. вулиця",
        "Лемика М. вулиця",
        "Лемківська вулиця",
        "Леннона Дж. вулиця",
        "Леонтовича М. вулиця",
        "Лепкого Б. вулиця",
        "Лесі Українки вулиця",
        "Ливарна вулиця",
        "Лижв\'ярська вулиця",
        "Липи Ю. вулиця",
        "Липинського В. вулиця",
        "Липківського В. митр. вулиця",
        "Липнева, площа",
        "Липова Алея вулиця",
        "Лисеницька вулиця",
        "Лисенка М. вулиця",
        "Листова вулиця",
        "Листопадна вулиця",
        "Листопадового Чину вулиця",
        "Литвиненка С. вулиця",
        "Литовська вулиця",
        "Личаківська вулиця",
        "Лікувальна вулиця",
        "Лінкольна А. вулиця",
        "Лірницька вулиця",
        "Лісна вулиця",
        "Лісна (Сихів) вулиця",
        "Ліста Ф. вулиця",
        "Ліська вулиця",
        "Літня вулиця",
        "Ліщинова вулиця",
        "Лобачевського М. вулиця",
        "Ловецька вулиця",
        "Лодія П. вулиця",
        "Лотоцького А. вулиця",
        "Луганська вулиця",
        "Лугова вулиця",
        "Лукасевича І. вулиця",
        "Лукаша М. вулиця",
        "Лукича І. вулиця",
        "Лукіяновича Д. вулиця",
        "Луцька вулиця",
        "Луцького О. вулиця",
        "Лучкая М. вулиця",
        "Лушпинського О. вулиця",
        "Льва вулиця",
        "Льняна вулиця",
        "Любачівська вулиця",
        "Любінська вулиця",
        "Людкевича С. вулиця",
        "Люльки А. акад. вулиця",
        "Лютнева вулиця",
        "Ляйнберга С. вулиця",
        "Магазинова вулиця",
        "Мазепи І. гетьм. вулиця",
        "Маївського Д. вулиця",
        "Майданна вулиця",
        "Майорівка вулиця",
        "Маковея О. вулиця",
        "Максимовича М. вулиця",
        "Мала вулиця",
        "Маланюка Є. площа",
        "Малинова вулиця",
        "Малицької К. вулиця",
        "Малі Кривчиці вулиця",
        "Малковицька вулиця",
        "Малоголосківська вулиця",
        "Манастирського А. вулиця",
        "Марійська, площа",
        "Марка Вовчка вулиця",
        "Мартовича Л. вулиця",
        "Марунька вулиця",
        "Маршалківка вулиця",
        "Масарика Т. вулиця",
        "Матейка Я. вулиця",
        "Мацієвича Л. вулиця",
        "Машиністів вулиця",
        "Меблярська вулиця",
        "Медведецького Ю. вулиця",
        "Медова вулиця",
        "Медової Печери вулиця",
        "Межова вулиця",
        "Мележа І. вулиця",
        "Мельника А. вулиця",
        "Мельничука С. вулиця",
        "Менделєєва Д. вулиця",
        "Менцинського М. вулиця",
        "Меретина Б. вулиця",
        "Металістів вулиця",
        "Метлинського А. вулиця",
        "Метрологічна вулиця",
        "Механічна вулиця",
        "Мечникова І. вулиця",
        "Микитки О. ген. вулиця",
        "Миклухо-Маклая М. вулиця",
        "Миколайчука І. вулиця",
        "Мила вулиця",
        "Милорадович Є. вулиця",
        "Милятинська вулиця",
        "Миргородська вулиця",
        "Мирна вулиця",
        "Мирного Панаса вулиця",
        "Мисливська вулиця",
        "Митна, площа",
        "Митрополита Андрея вулиця",
        "Михальчука І.-В. вулиця",
        "Мишуги О. вулиця",
        "Мідна вулиця",
        "Міжгірна вулиця",
        "Міртова вулиця",
        "Міцкевича А. площа",
        "Млинова вулиця",
        "Мови В. вулиця",
        "Могили П. вулиця",
        "Могильницького А. вулиця",
        "Молдавська вулиця",
        "Молодіжна вулиця",
        "Молочна вулиця",
        "Монгольська вулиця",
        "Моринецька вулиця",
        "Морозенка Н. вулиця",
        "Морозна вулиця",
        "Моршинська вулиця",
        "Мостова вулиця",
        "Мосяжна вулиця",
        "Моторна вулиця",
        "Моха Р. вулиця",
        "Музейна, площа",
        "Музики Я. вулиця",
        "Мукачівська вулиця",
        "Мулярська вулиця",
        "Мундяк М. вулиця",
        "Мурави М. вулиця",
        "Мурашка О. вулиця",
        "Мурована вулиця",
        "Мучна вулиця",
        "Мушака Ю. вулиця",
        "На Копані вулиця",
        "На Нивах вулиця",
        "На Сторожі вулиця",
        "На Чвертях вулиця",
        "Навколишня вулиця",
        "Навої А. вулиця",
        "Навроцького В. вулиця",
        "Нагірна вулиця",
        "Нагірних вулиця",
        "Над Джерелом вулиця",
        "Надійна вулиця",
        "Над\'ярна вулиця",
        "Назарука О. вулиця",
        "Наливайка С. вулиця",
        "Нарбута Г. вулиця",
        "Народна вулиця",
        "Нарцисова вулиця",
        "Насипна вулиця",
        "Насінна вулиця",
        "Наступальна вулиця",
        "Наукова вулиця",
        "Нафтова вулиця",
        "Невелика вулиця",
        "Некрасова М. вулиця",
        "Немирівська вулиця",
        "Нестора Літописця вулиця",
        "Нечая Д. вулиця",
        "Нечуя-Левицького І. вулиця",
        "Нижанківського О. вулиця",
        "Низинна вулиця",
        "Низова вулиця",
        "Низький Замок вулиця",
        "Ніжинська вулиця",
        "Ніщинського П. вулиця",
        "Новаківського О. вулиця",
        "Новий Світ вулиця",
        "Новознесенська вулиця",
        "о. Омеляна Ковча вулиця",
        "Огієнка І. вулиця",
        "Огіркова вулиця",
        "Оглоблина О. вулиця",
        "Одеська вулиця",
        "Ожешко Е. вулиця",
        "Ожинова вулиця",
        "Озаркевича Є. вулиця",
        "Озерна вулиця",
        "Околична вулиця",
        "Окружна вулиця",
        "Окуневського Т. вулиця",
        "Олесницького Є. вулиця",
        "Олеся О. вулиця",
        "Олешківська вулиця",
        "Олійна вулиця",
        "Ольжича О. вулиця",
        "Опільського Ю. вулиця",
        "Опришківська вулиця",
        "Орельська вулиця",
        "Орлика П. вулиця",
        "Орлина вулиця",
        "Орна вулиця",
        "Освицька вулиця",
        "Осикова вулиця",
        "Остроградських вулиця",
        "Острозького К. вулиця",
        "Остряниці Я. вулиця",
        "Очаківська вулиця",
        "Очеретяна вулиця",
        "Павлика М. вулиця",
        "Павлова І. акад. вулиця",
        "Павлокомська вулиця",
        "Падури Т. вулиця",
        "Палія С. вулиця",
        "Панаса В. сотника вулиця",
        "Панча П. вулиця",
        "Панчишина М. вулиця",
        "Паньківського С. вулиця",
        "Папарівка вулиця",
        "Святого Івана Павла II Папи Римського, майдан площа",
        "Папоротна вулиця",
        "Параджанова С. вулиця",
        "Паращука М. вулиця",
        "Паркова вулиця",
        "Парова вулиця",
        "Паровозна вулиця",
        "Парфановичів вулиця",
        "Пасіки Галицькі вулиця",
        "Пасічна вулиця",
        "Пастернака Я. вулиця",
        "Патона Є. вулиця",
        "Пачовського В. вулиця",
        "Пекарська вулиця",
        "Перекопська вулиця",
        "Перелітна вулиця",
        "Перемиська вулиця",
        "Переможна вулиця",
        "Перехід вулиця",
        "Переяславська вулиця",
        "Перова В. вулиця",
        "Персенківка вулиця",
        "Перфецького Л. вулиця",
        "Петлюри С. вулиця",
        "Петрицького А. вулиця",
        "Петровського Г. вулиця",
        "Петрусенко О. вулиця",
        "Петрушевича Є. площа",
        "Пикулицька вулиця",
        "Пильникарська вулиця",
        "Пимоненка М. вулиця",
        "Пинська вулиця",
        "Пирогівка вулиця",
        "Півколо вулиця",
        "Північна (Білогорща) вулиця",
        "Під Голоском вулиця",
        "Під Дубом вулиця",
        "Підвальна вулиця",
        "Підгаєцька вулиця",
        "Підгірна вулиця",
        "Піддубного І. вулиця",
        "Підзамче вулиця",
        "Підкови І. площа",
        "Підлісна вулиця",
        "Підміська вулиця",
        "Підмурна вулиця",
        "Підрічна вулиця",
        "Підстригача Я. акад. вулиця",
        "Пілотів вулиця",
        "Піскова вулиця",
        "Піша вулиця",
        "Планерна вулиця",
        "Пластова вулиця",
        "Плетенецького Є. вулиця",
        "Плугова вулиця",
        "Плужника Є. вулиця",
        "Плющова вулиця",
        "Повітряна вулиця",
        "Поворотна вулиця",
        "Повстанська вулиця",
        "Погідна вулиця",
        "Погулянка вулиця",
        "Подолинського С. вулиця",
        "Поетична вулиця",
        "Пожежників вулиця",
        "Покутська вулиця",
        "Поліська вулиця",
        "Політехнічна вулиця",
        "Поліщука В. вулиця",
        "Половинна вулиця",
        "Полтави П. вулиця",
        "Полтв\'яна вулиця",
        "Полуботка П. вулиця",
        "Полуднева вулиця",
        "Полунична вулиця",
        "Польна вулиця",
        "Польова вулиця",
        "Помірки вулиця",
        "Поморянська вулиця",
        "Поперечна вулиця",
        "Поповича Є. вулиця",
        "Порічкова вулиця",
        "Порохова вулиця",
        "Потебні О. вулиця",
        "Потелицька вулиця",
        "Похила вулиця",
        "Почаївська вулиця",
        "Поштова вулиця",
        "Прилбицька вулиця",
        "Природна вулиця",
        "Прихильна вулиця",
        "Приязна вулиця",
        "Прогулкова вулиця",
        "Проїзд Крива Липа проїзд",
        "Прокоповича І. вулиця",
        "Промислова вулиця",
        "Пропелерна вулиця",
        "Просвіти вулиця",
        "Проста вулиця",
        "Простора вулиця",
        "Професорська вулиця",
        "Пстрака Я. вулиця",
        "Пташина вулиця",
        "Пулюя І. вулиця",
        "Пустомитівська вулиця",
        "Пчілки О. вулиця",
        "Пшенична вулиця",
        "П\'ясецького А. вулиця",
        "Равська вулиця",
        "Радехівська вулиця",
        "Радість вулиця",
        "Райдужна вулиця",
        "Райніса Я. вулиця",
        "Раковського І. вулиця",
        "Ранкова вулиця",
        "Раппапорта Я. вулиця",
        "Ратича О. вулиця",
        "Рахівська вулиця",
        "Ребета Л. вулиця",
        "Ревуцького Л. вулиця",
        "Резедова вулиця",
        "Реміснича вулиця",
        "Рєпіна І. вулиця",
        "Ржегоржа Ф. вулиця",
        "Рибна вулиця",
        "Рилєєва К. вулиця",
        "Рильського М. вулиця",
        "Римлянина П. вулиця",
        "Ринок, площа",
        "Рівна вулиця",
        "Рівненська вулиця",
        "Рівнинна вулиця",
        "Різні, площа",
        "Різьбярська вулиця",
        "Рільнича вулиця",
        "Річицька вулиця",
        "Робітнича вулиця",
        "Родини Крушельницьких вулиця",
        "Рожева вулиця",
        "Розбіжна вулиця",
        "Розвилиста вулиця",
        "Розкіш вулиця",
        "Розлога вулиця",
        "Розсадна вулиця",
        "Розточчя вулиця",
        "Роксоляни вулиця",
        "Романицького Б. вулиця",
        "Романчука Ю. вулиця",
        "Ромашкова вулиця",
        "Ромоданівська вулиця",
        "Росиста вулиця",
        "Рослинна вулиця",
        "Россі К. вулиця",
        "Рубінова вулиця",
        "Рубчака І. вулиця",
        "Рудакі А. вулиця",
        "Руданського С. вулиця",
        "Рудненська вулиця",
        "Рудницького С. акад. вулиця",
        "Русових вулиця",
        "Руставелі Ш. вулиця",
        "Руська вулиця",
        "Рутковича І. вулиця",
        "Ручай вулиця",
        "Рядова вулиця",
        "Ряснянська вулиця",
        "Ряшівська вулиця",
        "Сагайдачного П. вулиця",
        "Садибна вулиця",
        "Садівнича вулиця",
        "Садова вулиця",
        "Садовського М. вулиця",
        "Саковича К. вулиця",
        "Саксаганського П. вулиця",
        "Самарська вулиця",
        "Самбірська вулиця",
        "Самійленка В. вулиця",
        "Самокиша М. вулиця",
        "Самчука У. вулиця",
        "Санітарна вулиця",
        "Сарненська вулиця",
        "Сар\'яна М. вулиця",
        "Сахарова А. акад. вулиця",
        "Свєнціцького І. вулиця",
        "Свидницького А. вулиця",
        "Світанкова вулиця",
        "Світла вулиця",
        "Свободи, просп. проспект",
        "Святого Теодора, площа",
        "Святого Юра, площа",
        "Севастопольська вулиця",
        "Севери І. вулиця",
        "Сельських вулиця",
        "Селянська вулиця",
        "Семирадського Г. вулиця",
        "Сеньковича Ф. вулиця",
        "Сербська вулиця",
        "Сєченова І. вулиця",
        "Сигнальна вулиця",
        "Сигнівка вулиця",
        "Симиренків вулиця",
        "Симоненка В. вулиця",
        "Синявського О. вулиця",
        "Сихівська вулиця",
        "Сімовича В. вулиця",
        "Сінна вулиця",
        "Сірка І. вулиця",
        "Січинського Д. вулиця",
        "Січнева вулиця",
        "Січова вулиця",
        "Січових Стрільців вулиця",
        "Скельна вулиця",
        "Скидана К. вулиця",
        "Скісна вулиця",
        "Скляна вулиця",
        "Скнилівська вулиця",
        "Скнилівський пров. 10-й провулок",
        "Скнилівський пров. 1-й провулок",
        "Скнилівський пров. 2-й провулок",
        "Скнилівський пров. 3-й провулок",
        "Скнилівський пров. 4-й провулок",
        "Скнилівський пров. 5-й провулок",
        "Скнилівський пров. 6-й провулок",
        "Скнилівський пров. 7-й провулок",
        "Скнилівський пров. 8-й провулок",
        "Скнилівський пров. 9-й провулок",
        "Сковороди Г. вулиця",
        "Скорини Ф. вулиця",
        "Скрипника М. вулиця",
        "Скромна вулиця",
        "Сластіона О. вулиця",
        "Сливова вулиця",
        "Сліпого Й. вулиця",
        "Слобідська вулиця",
        "Слободівни М. вулиця",
        "Словацького Ю. вулиця",
        "Слов\'янська вулиця",
        "Слюсарська вулиця",
        "Смакули О. вулиця",
        "Смаль-Стоцького С. вулиця",
        "Смерекова вулиця",
        "Сметани Б. вулиця",
        "Сміла вулиця",
        "Сміливих вулиця",
        "Смолича Ю. вулиця",
        "Смольського Г. вулиця",
        "Смотрицького М. вулиця",
        "Снігурівська вулиця",
        "Сніжна вулиця",
        "Снопківська вулиця",
        "Соборна, площа",
        "Сокільницька вулиця",
        "Соколина вулиця",
        "Солов\'їна вулиця",
        "Солодова вулиця",
        "Солом\'янка вулиця",
        "Сонячна вулиця",
        "Соняшникова вулиця",
        "Сороки М. вулиця",
        "Сорохтея О. вулиця",
        "Сорочинська вулиця",
        "Сосенка М. вулиця",
        "Соснова вулиця",
        "Сосюри В. вулиця",
        "Спадиста вулиця",
        "Спокійна вулиця",
        "Сполучна вулиця",
        "Сріблиста вулиця",
        "Ставова вулиця",
        "Ставропігійська вулиця",
        "Стадників вулиця",
        "Станційна вулиця",
        "Станція Личаків вулиця",
        "Стара вулиця",
        "Старий Ринок, площа",
        "Старицького М. вулиця",
        "Стародубська вулиця",
        "Староєврейська вулиця",
        "Старознесенська вулиця",
        "Староміська вулиця",
        "Стеблиста вулиця",
        "Стельмаха М. вулиця",
        "Степанівни О. вулиця",
        "Степового Я. вулиця",
        "Стефаника В. вулиця",
        "Стеценка К. вулиця",
        "Стецька Я. вулиця",
        "Стешенка І. вулиця",
        "Стороженка О. вулиця",
        "Стрийська вулиця",
        "Стрілецька вулиця",
        "Стрімка вулиця",
        "Струмок вулиця",
        "Студентська вулиця",
        "Студинського К. вулиця",
        "Стуса В. вулиця",
        "Суботівська вулиця",
        "Судова вулиця",
        "Сулими І. вулиця",
        "Сумська вулиця",
        "Сусідня вулиця",
        "Суха вулиця",
        "Сушка Р. вулиця",
        "Сушкевича К. вулиця",
        "Сушко-Скачківської Х. вулиця",
        "Східна вулиця",
        "Сходова вулиця",
        "Сяйво вулиця",
        "Сянська вулиця",
        "Табірна вулиця",
        "Таджицька вулиця",
        "Таллінська вулиця",
        "Таманська вулиця",
        "Танячкевича Д. вулиця",
        "Тарасівська вулиця",
        "Таращанська вулиця",
        "Тарнавка вулиця",
        "Тарнавського М. ген. вулиця",
        "Татарбунарська вулиця",
        "Татарська вулиця",
        "Творча вулиця",
        "Театральна вулиця",
        "Теліги О. вулиця",
        "Темницьких вулиця",
        "Тена Б. вулиця",
        "Теребовлянська вулиця",
        "Терлецького О. вулиця",
        "Тернова вулиця",
        "Тернопільська вулиця",
        "Тершаковців вулиця",
        "Тесленка А. вулиця",
        "Теслярська вулиця",
        "Технічна вулиця",
        "Тиверська вулиця",
        "Тиктора І. вулиця",
        "Тисова вулиця",
        "Тиха вулиця",
        "Тичини П. вулиця",
        "Тіниста вулиця",
        "Тісна вулиця",
        "Ткацька вулиця",
        "Тобілевича І. вулиця",
        "Толстого Л. вулиця",
        "Томашівська вулиця",
        "Томашівського С. вулиця",
        "Топольна вулиця",
        "Топольний пров. 1-й провулок",
        "Топольний пров. 2-й провулок",
        "Топольний пров. 3-й провулок",
        "Топольний пров. 4-й провулок",
        "Топольний пров. 5-й провулок",
        "Топольний пров. 6-й провулок",
        "Торгова вулиця",
        "Торф\'яна вулиця",
        "Трависта вулиця",
        "Трещаківського Л. вулиця",
        "Трильовського К. вулиця",
        "Тролейбусна вулиця",
        "Тростинна вулиця",
        "Трускавецька вулиця",
        "Труша І. вулиця",
        "Трясила Т. вулиця",
        "Туган-Барановського М. вулиця",
        "Тунельна вулиця",
        "Турецька вулиця",
        "Туркменська вулиця",
        "Турянського О. вулиця",
        "Тучапського П. вулиця",
        "Тюльпанова вулиця",
        "Тютюнників вулиця",
        "Угнівська вулиця",
        "Угорська вулиця",
        "Ударна вулиця",
        "Ужгородська вулиця",
        "Узбецька вулиця",
        "Уманська вулиця",
        "Університетська вулиця",
        "Урожайна вулиця",
        "Устияновича М. вулиця",
        "Фабрична вулиця",
        "Федорова І. вулиця",
        "Федьковича Ю. вулиця",
        "Фещенка-Чопівського І. вулиця",
        "Фіалкова вулиця",
        "Філатова В. акад. вулиця",
        "Флінти З. вулиця",
        "Франка І. вулиця",
        "Франка І. площа",
        "Фредра О. вулиця",
        "Фурманська вулиця",
        "Харківська вулиця",
        "Хасевича Н. вулиця",
        "Хвильового М. вулиця",
        "Хімічна вулиця",
        "Хлібна вулиця",
        "Хмельницького Б. вулиця",
        "Хмільова вулиця",
        "Холмська вулиця",
        "Холодна вулиця",
        "Холодного П. вулиця",
        "Холодноярська вулиця",
        "Хорватська вулиця",
        "Хоробрих вулиця",
        "Хортицька вулиця",
        "Хотинська вулиця",
        "Хоткевича Г. вулиця",
        "Художня вулиця",
        "Хуторівка вулиця",
        "Цегельського Л. вулиця",
        "Центральний проїзд",
        "Церетелі А. вулиця",
        "Цетнерівка вулиця",
        "Цехова вулиця",
        "Циганівка вулиця",
        "Цісик К. вулиця",
        "Чагарникова вулиця",
        "Чайковського П. вулиця",
        "Чарнецького М. єписк. вулиця",
        "Червона вулиця",
        "Червоної Калини, просп. проспект",
        "Черемхова вулиця",
        "Черемшини М. вулиця",
        "Черешнева вулиця",
        "Черкаська вулиця",
        "Чернеча Гора вулиця",
        "Черника Ф. вулиця",
        "Чернівецька вулиця",
        "Чернігівська вулиця",
        "Чесанівська вулиця",
        "Чехова А. вулиця",
        "Чечета Г. вулиця",
        "Чигиринська вулиця",
        "Чижевського Д. вулиця",
        "Чикаленка Є. вулиця",
        "Чмоли І. вулиця",
        "Чоловського О. вулиця",
        "Чорновола В. просп. проспект",
        "Чорноморська вулиця",
        "Чубинського П. вулиця",
        "Чуваська вулиця",
        "Чугайстра вулиця",
        "Чукаріна В. вулиця",
        "Чумацька вулиця",
        "Чупринки Т. ген. вулиця",
        "Чучмана Ю. вулиця",
        "Шараневича І. вулиця",
        "Шатківського О. вулиця",
        "Шафарика П. вулиця",
        "Шахтарська вулиця",
        "Шашкевича М. площа",
        "Шведська вулиця",
        "Шевська вулиця",
        "Шевченка Т. вулиця",
        "Шевченка Т. просп. проспект",
        "Шептицьких вулиця",
        "Шеремети П. вулиця",
        "Широка вулиця",
        "Шишманова І. вулиця",
        "Шімзерів вулиця",
        "Шкільна вулиця",
        "Шкіряна вулиця",
        "Шкрібляків вулиця",
        "Шолом-Алейхема Ш. вулиця",
        "Шопена Ф. вулиця",
        "Шпитальна вулиця",
        "Шполянська вулиця",
        "Шумського О. вулиця",
        "Шухевича В. вулиця",
        "Щекавицька вулиця",
        "Щепкіна М. вулиця",
        "Щепова вулиця",
        "Щирецька вулиця",
        "Щоголева Я. вулиця",
        "Щурата В. вулиця",
        "Юнаківа М. ген. вулиця",
        "Юнацька вулиця",
        "Яблунева вулиця",
        "Яворівська вулиця",
        "Яворницького Д. вулиця",
        "Яворського С. площа",
        "Яловець вулиця",
        "Ялтинська вулиця",
        "Янева В. вулиця",
        "Яновського Ю. вулиця",
        "Януша Б. вулиця",
        "Японська вулиця",
        "Яреми Я. вулиця",
        "Яричівська вулиця",
        "Ярова вулиця",
        "Ярослава Мудрого вулиця",
        "Ярославенка Я. вулиця",
        "Ярославська вулиця",
        "Ярошинської Є. вулиця",
        "Ясна вулиця",
        "Яцкова М. вулиця"
    ];
    jQuery( ".js-snear-autocomplete-custom" ).autocomplete({
    source: availableTags
    });

};



