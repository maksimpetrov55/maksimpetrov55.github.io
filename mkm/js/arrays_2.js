


var calc2_cityArr = [

    {id:1,  value: "1",    name: 'Калининград'},
    {id:2,  value: "0.80", name: 'Светлогорск'},
    {id:3,  value: "0.75", name: 'Зеленоградск'},
    {id:4,  value: "0.56", name: 'Пионерский'},
    {id:5,  value: "0.38", name: 'Черняховск'},
    {id:6,  value: "0.53", name: 'Гвардейск'},
    {id:7,  value: "0.39", name: 'Багратионовск'},
    {id:8,  value: "0.78", name: 'Балтийск'},
    {id:9,  value: "0.94", name: 'Гурьевск'},
    {id:10, value: "0.75", name: 'Гусев'},
    {id:11, value: "0.26", name: 'Знаменск'},
    {id:12, value: "0.43", name: 'Ладушкин'},
    {id:13, value: "0.40", name: 'Мамоново'},
    {id:14, value: "0.80", name: 'Неман'},
    {id:15, value: "0.60", name: 'Нестеров'},
    {id:16, value: "0.34", name: 'Озерск'},
    {id:17, value: "0.60", name: 'Полесск'},
    {id:18, value: "0.28", name: 'Правдинск'},
    {id:19, value: "0.54", name: 'Приморск'},
    {id:20, value: "1.30", name: 'Светлый'},
    {id:21, value: "0.51", name: 'Славск'},
    {id:22, value: "0.51", name: 'Советск'},
    {id:23, value: "0.90", name: 'Янтарный'} 

]


var calc2_borderArr = [
    {id:1, value: '0', name: 'Участок не огорожен/огорожен временным забором'},
    {id:2, value: '600', name: 'Участок огорожен забором из сетки рабицы и подобным материалом по стоимости'},
    {id:3, value: '1390', name: 'Участок огорожен забором из профнастила/ панельной сетки и подобным материалом по стоимости'},
    {id:4, value: '2280', name: 'Участок огорожен забором из живой изгороди/поликарбоната/евроштакетника и подобным материалом по стоимости'},
    {id:5, value: '4000', name: 'Участок огорожен кованным забором и подобным материалом по стоимости'},
    {id:6, value: '7800', name: 'Участок огорожен каменным забором и подобным материалом по стоимости'}
]


var calc2_greenArr = [
    {id:1, value: '0', name: 'Благоустройства территории на участке  не проводилось'},
    {id:2, value: '3000', name: 'На участке проведены ландшафтные работы (очищен от мусора, территория выровнена'},
    {id:3, value: '20000', name: 'Участок с  ландшафтным дизайном эконом'},
    {id:4, value: '40000', name: 'Участок с  ландшафтным дизайном стандарт'},
    {id:5, value: '60000', name: 'Участок с  ландшафтным дизайном премиум'}
]

var calc2_homebaseArr = [
    {id:1, value: '0.92', name: 'Ленточный'},
    {id:2, value: '1.02', name: 'Монолитная плита'},
    {id:3, value: '0.86', name: 'Винтовые сваи'},
    {id:4, value: '0.96', name: 'Буронабивной (свайно-ростверковый)'},
    {id:5, value: '1', name: 'Дом с цокольным этажом'}
]

var calc2_hometypeArr = [
    {id:1, value: '1', name: 'Одноэтажный'},
    {id:2, value: '1.17', name: 'Одноэтажный с мансардой'},
    {id:3, value: '1.2', name: 'Одноэтажный с цокольным этажем'},
    {id:4, value: '1.41', name: 'Одноэтажный с цокольным этажем и мансардой'},
    {id:5, value: '1.57', name: 'Двухэтажный'},
    {id:6, value: '1.78', name: 'Двухэтажный с мансардой'},
    {id:7, value: '1.81', name: 'Двухэтажный с цокольным этажем'},
    {id:8, value: '2.03', name: 'Двухэтажный с цокольным этажем и мансардой'},
    {id:9, value: '2.18', name: 'Трехэтажный'},
    {id:10, value: '2.4', name: 'Трехэтажный с мансардой'},
    {id:11, value: '2.43', name: 'Трехэтажный с цокольным этажем'},
    {id:12, value: '2.64', name: 'Трехэтажный с цокольным этажем и мансардой'}
]

var calc2_overlapArr = [
    {id:1, value: '0.98', name: 'Деревянные'},
    {id:2, value: '1.04', name: 'Монолитные'},
    {id:3, value: '1', name: 'Плиты ЖБ'}
]

var calc2_wallsArr = [
    {id:1, value: '0.92', name: 'Каркасный'},
    {id:2, value: '0.96', name: 'Sip-панели'},
    {id:3, value: '0.93', name: 'Брус'},
    {id:4, value: '1', name: 'Клееный брус'},
    {id:5, value: '0.96', name: 'Оцилиндрованное бревно'},
    {id:6, value: '0.93', name: 'Силикатные блоки'},
    {id:7, value: '0.88', name: 'Газо/пенобетон (0,5 блока)'},
    {id:8, value: '0.93', name: 'Газо/пенобетон (1 блок)'},
    {id:9, value: '0.99', name: 'Пенополистирол'},
    {id:10, value: '0.94', name: 'Кирпич 1шт.'},
    {id:11, value: '1', name: 'Кирпич 1,5 шт.'},
    {id:12, value: '1.07', name: 'Кирпич 2 шт.'},
    {id:13, value: '0.91', name: 'Керамоблок крупноформатный (0,5 блока)'},
    {id:14, value: '0.98', name: 'Керамоблок крупноформатный (1 блок)'}
]

var calc2_outsidetrimArr = [
    {id:1, value: '1.04', name: 'Облицовочный кирпич'},
    {id:2, value: '0.97', name: 'Штукатурка'},
    {id:3, value: '0.9', name: 'Без отделки '},
    {id:4, value: '1', name: 'Декоративная штукатурка/покраска'},
    {id:5, value: '1.01', name: 'Дикий камень'},
    {id:6, value: '0.97', name: 'Сайдинг'},
    {id:7, value: '1', name: 'Без отделки (в случае кирпичной/каменной стены, не нуждающейся в отделке)'}
]

var calc2_roofArr = [
    {id:1, value: '1', name: 'Металлическая черепица'},
    {id:2, value: '1.009', name: 'Мягкая черепица'},
    {id:3, value: '1.012', name: 'Черепица цементно песчаная'},
    {id:4, value: '1.072', name: 'Черепица керамическая'},
    {id:5, value: '0.996', name: 'Шифер'}
]

var calc2_insidetrimArr = [
    {id:1, value: '0.66', name: 'Черный ключ'},
    {id:2, value: '0.82', name: 'Черный ключ + электропроводка+ окна + входная дверь'},
    {id:3, value: '0.85', name: 'Серый ключ'},
    {id:4, value: '0.88', name: 'Белый ключ'},
    {id:5, value: '1', name: 'После качественного ремонта'},
    {id:6, value: '0.8', name: 'Требуется кап. ремонт'},
    {id:7, value: '0.94', name: 'Косметический ремонт не повредит'}
]

var calc2_warmArr = [
    {id:1, value: '1', name: 'Центральное'},
    {id:2, value: '1.09', name: 'Автономное газовое'},
    {id:3, value: '0.89', name: 'Котелковое паровое с возможностью подключения магистрального газа'},
    {id:4, value: '0.79', name: 'Котелковое паровое без возможности подключения магистрального газа'},
    {id:5, value: '0.85', name: 'Печное  с возможностью подключения магистрального газа'},
    {id:6, value: '0.78', name: 'Печное  без возможности подключения магистрального газа'},
    {id:7, value: '0.89', name: 'Электрическое паровое с возможностью подключения магистрального газа'},
    {id:8, value: '0.81', name: 'Электрическое паровое без  возможности подключения магистрального газа'},
    {id:9, value: '0.89', name: 'Без отопления с возможностью подключения магистрального газа'},
    {id:10, value: '0.77', name: 'Без отопления без возможности подключения магистрального газа'}
]

var calc2_classArr = [
    {id:1, value: '1', name: 'Эконом класс'},
    {id:2, value: '1.12', name: 'Комфорт класс'},
    {id:3, value: '1.44', name: 'Бизнес класс'},
    {id:4, value: '2', name: 'Элит класс'}
]