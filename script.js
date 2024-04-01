const card = document.querySelector('.cardContainer');
let nextButton = document.getElementById('nextButton');
let frontText = document.getElementById('frontText');
let backText = document.getElementById('backText');
let front = document.querySelector('.front');
let back = document.querySelector('.back');

const photoContainer = document.getElementById('photocontainer');
const questions = document.getElementById('questions');
const questionText = document.getElementById('questiontext');
const options = document.getElementById('options');



const data = [
    { 
       type: 'truefalse',
       photo: './data/hydrogen.jpg',
       question: 'Сутек қалыпты жағдайда сұйықтық',
       answer: false,
    },
    {
        type: 'truefalse',
        photo: './data/universe.jpg',
        question: 'Сутек әлемде ең көп тараған элемент',
        answer: true,
    },
    {
        type: 'truefalse',
        question: 'Өнеркәсіпте сутекті натрийді сумен әрекеттестірк арқылы алады \
        Na + H\u2082O -> NaOH + H\u2082',
        answer: false,
    },
    {
        type: 'truefalse',
        question: 'Сутекктің изоптары протий, дейтерий және тритарий',
        answer: false,
    },
    {
        type: 'truefalse',
        question: 'Сутекктің изоптары протий, дейтерий және тритий',
        answer: true,
    },
    {
        type: 'truefalse',
        photo: './data/hydrogen.jpg',
        question: 'Сутек дәмсіз, иіссіз, қара түсті газ',
        answer: false,
    },
    {
        type: 'truefalse',
        photo: './data/hydrogen.jpg',
        question: 'Сутек дәмсіз, иіссіз, түссіз, ең жеңіл газ',
        answer: true,
    },
    {
        type: 'truefalse',
        question: '2 көлем сутек және 1 көлем оттектен тұратын қоспа күркір-мүркір газы деп аталады',
        answer: false,
    },
    {
        type: 'truefalse',
        question: '2 көлем сутек және 1 көлем оттектен тұратын қоспа күркіреуік газ деп аталады',
        answer: true,
    },
    {
        type: 'truefalse',
        photo: './data/diri.jpg',
        question: 'жеңіл газ ретінде сутектің гелиймен қоспасы аэростаттар мен дирижабльдерді толтыруға қолданылады',
        answer: true,
    },
    {
        type: 'truefalse',
        question: 'Сутек ғаламшарымыздағы ең көп тараған элемент',
        answer: false,
    },
    {
        type: 'truefalse',
        question: 'Оттек ғаламшарымыздағы ең көп тараған элемент',
        answer: true,
    },
    {
        type: 'card',
        front: 'Сутекті зертханада берілген әдістермен алуға болады, нәтижесінде не түзіледі \
        1. Zn + HCl -> 2. Zn + H\u2082SO\u2084 -> 3. H\u2082O -> (электролиз)',
        back: '1. ZnCl\u2082 + H\u2082 2. ZnSO\u2084 + H\u2082 3. H\u2082 + O\u2082',
    },
    {
        type: 'card',
        front: 'Өнркәсіпте сутекті жоғары температурада көмірді су \
        буымен әрекеттестіру арқылы алады: \
        C + H\u2082O -(1000C)-> ',
        back: 'CO + H\u2082',
    },
    {
        type: 'card',
        front: 'Өнеркәсіпте сутекті метанды айыру арқылы алады: \
        CH\u2084 -(1000C)->',
        back: 'C + 2H\u2082',
    },
    {
        type: 'card',
        front: 'Өнеркәсіпте сутекті метанды су бумен реакция нәтижесінде алады: \
        CH\u2084 + H\u2082O -> [Ni катализатор қатысында және 1300C]',
        back: 'CO + 3H\u2082',
    },
    {
        type: 'card',
        front:'Оттекті зертханада алуға болады 1. HgO -> ? 2. H\u2082O -> ? 3. KClO\u2083-> ? 4.KMnO\u2084 -> ? 5. H\u2082O\u2082 (MnO\u2082 катализатор)-> ? ',
        back:'1. Hg + O\u2082 2. H\u2082 + O\u2082 3. KCl + O\u2082 4. K\u2082MnO\u2084 + MnO\u2082 + O\u2082 5. H\u2082O + O\u2082',
    },
    {
        type: 'card',
        front: 'Өнеркәсіпте оттекті алады',
        back: 'Ауадан(ауаны жоғары қысымда сұйылтып, фракциялақ жолмен айдау арқылы)',
    },
    {
        type: 'truefalse',
        question: 'Оттек түссіз, дәмсіз, иіссіз, суда аз еритін газ',
        answer: true,
    },
    {
        type: 'card',
        front: 'Ca(OH)\u2082 ерітідісіне CO\u2082 мен араластырып шайқаса ерітіндіде қандай \
        өзгеріс байқалады',
        back: 'ерітінді лайлаланады(CaCO\u2083 түзіледі))',
    },
    {
        type: 'card',
        front: 'S + O\u2082',
        back: 'SO\u2082',
    },
    {
        type: 'card',
        front: 'P + O\u2082',
        back: 'P\u2082O\u2085',
    },
    {
        type: 'card',
        front: 'Fe + O\u2082',
        back: 'FeO*Fe\u2082O\u2083(немесе Fe\u2083O\u2084) - темір қағы',
    },
    {
        type: 'truefalse',
        question: 'Шойын мен болат өндіруде, түсті металлургияда сульфидті кендерді өртеуде оттек кеңінен қолданылады',
        answer: true,
    },
    {
        type: 'card',
        front: 'Оттек аллотроптары',
        back: 'Оттек(O\u2082) және озон(O\u2083), озонатор арқылы озонды алуға болады'
    },
    {
        type: 'card',
        front: 'озон қолданылады',
        back: 'озон ауа мен ауызсуды озондауға, өндірістің ағын суларын залалсыздандыруда, \
        зымыран отынынын тотықтыруға және ағартқыш ретінде қолданылады'
    },
    {
        type: 'card',
        front: 'озон қабаты жердегі тіршілікті ультракүлгін сәулелерден қорғайды. \
        Осы қабаттың ойылуына түрлі себептер әсер етеді. Мысалы, тоңазытқыш қондырғылары \
        жылу оқшаулағыштардағы қай элементтің қосылыстары?',
        back: 'хлор'
    },
    {
        type: 'card',
        front: 'Берілген температурада зат әрі қарай ери алмаса ерітінді не деп аталады',
        back: 'қаныққан ерітінді'  
    },
    {
        type: 'card',
        front: 'Берілген температурада зат әрі қарай ери алса ерітінді не деп аталады',
        back: 'қанықпаған ерітінді'  
    },
    {
        type: 'card',
        front: 'Егер берілген темпертатурада еріген заттың мөлшері қаныққан ерітіндідегі \
        зат мөлшерінен көп болса ерітінді не деп аталады',
        back: 'аса қаныққан ерітінді'  
    },
    {
        type: 'card',
        front: 'еріген зат мөлшері көп болса ... , ал еріген зат мөлшері аз болса .....',
        back: 'концентрлі, сұйылтылған'  
    },
    {
        type: 'card',
        front: '20С та 100 г суда жақсы еритін зат, аз еритін зат, және ерімейтін зат айырмашылықтары',
        back: '100 г суда 10 г - нан көп ерісі жақсы еритін зат, 0,1 г - 1г аз еритін зат, ал 0,01 г нан төмен болса ерімейтін зат'  
    },
    {
        type: 'card',
        front: 'CaCO\u2083 -> ?',
        back: 'CaO + CO\u2082'  
    },
    {
        type: 'card',
        front: 'H\u2082SiO\u2083 -> ?',
        back: 'H\u2082O + SiO\u2082'  
    },
    {
        type: 'card',
        front: 'Cu(OH)\u2082 -> ?',
        back: 'CuO + H\u2082O'  
    },
    {
        type: 'card',
        front: 'Na\u2082+H\u2082 -> ?',
        back: 'NaOH'  
    },
    {
        type: 'card',
        front: 'CuO + H\u2082SO\u2084 -> ?',
        back: 'CuSO\u2084 + H\u2082O'  
    },
    {
        type: 'card',
        front: 'Na\u2082O + SO\u2083 -> ?',
        back: 'Na\u2082SO\u2084'  
    },
    {
        type: 'card',
        front: 'магнетит формуласы',
        back: 'Fe\u2083O\u2084'  
    },
    {
        type: 'card',
        front: 'BeO + HCl -> ?',
        back: 'BeCl\u2082 + H\u2082O'  
    },
    {
        type: 'card',
        front: 'BeO + 2NaOH -> ?',
        back: 'Na\u2082BeO\u2082 + H\u2082O'  
    },
    {
        type: 'card',
        front: 'Тұз қышқылы қолданылады',
        back: '0,5% - дық ерітіндісі медицинада асқазан сөлінің қышқылдығы төмен науқастарға беріледі, \
        сондай-ақ дәрі-дәрмектер, бояулар, пластмассалар алуда қолданылады'  
    },
    {
        type: 'card',
        front: 'Суда еритін негіздер',
        back: 'сілтілер/1-ші және 2-ші топ кейбір(Ca, Sr, Ba) элемент негіздері'
    },
    {
        type: 'truefalse',
        photo: './data/salts.jpg',
        question: 'MgOHCl негіздік тұзға жатады',
        answer: true,
    },
    {
        type: 'card',
        front: 'Негіздердің құрамындағы гидроксил топтары қышқыл \
        қалдығымен толық алмаспаған өнім түзіледі деп есептептеп \
        не түзіледі? (қатынас 1:2) Fe(OH)\u2083 + 2HCl -> ',
        back: 'Fe(OH)Cl\u2082 + 2H\u2082O [негіздік тұздарды екі және үш \
        валентті металдардың гидроксидтері түзеді]'
    },
    {
        type: 'card',
        front: 'Көміртек қосылыстарында заряд көрсетеді',
        back: '+4, -4, -2'
    },
    {
        type: 'card',
        front: 'Бір элементтен бірнеше жай заттардың түзілу құбылысы',
        back: 'аллотропия'
    },
    {
        type: 'card',
        front: 'Көміртектің ең маңызды 4 аллотропиялық түрөзгерісі (8 сынып кітабы бойынша)',
        back: 'алмаз, графит, карбин, фуллерен'
    },
    {
        type: 'card',
        front: 'Балқу температурасы 3800С, жылу мен электр тогын нашар өткізеді \
        әрбір көміртек атомымен 4 көміртек атомы байланысқан(+тетраэдр), қатты, қиын балқитын зат \
        табиғи ең қатты зат',
        back: 'алмаз'
    },
    {
        type: 'card',
        front: 'қолға ұстағанда майлы, әлсіз металдық жылтыры бар, қара сұр кристалды зат \
        кристалдық торы атомдық, бірақ көміртек атомдары қабат-қабат болып орналасқапһн \
        3700С та қатты күйден газ күйге ауысады, жылу мен электр тогын жақсы өткізеді',
        back: 'графит'
    },
    {
        type: 'card',
        front: 'қара түсті ұсақ кристалды зат, алғаш рет ХХ ғасырдың 60 жылдары \
        Ресей химиктері синтездеп алған, кейін табиғатта чаоит минералының құрамынан \
        табылды, сызықты құрылымға ие',
        back: 'карбин'
    },
    {
        type: 'card',
        front: 'ХХ ғасырдың 80 жылдары синтездеоген. 60 тан 110 ға дейін көміртек \
        атомы кіретін көпжақтардан тұрады. Жақсы зерттелген түрі ол C\u2086\u2080 - футбол \
        добы секілді 13 бесбұрыштан және 20 алтыбұрыштан тұрады',
        back: 'фуллерен'
    },
    {
        type: 'card',
        front: 'көміртек атомдары түтік тәрізді талшықтар түзетін аллотропиялық түрөзгерісі',
        back: 'нанотүтіктер'
    },
    {
        type: 'card',
        front: 'қатты заттың бетінде газ тәрізді немесе еріген заттардың сіңірілуі \
        ..... ал бөлініп шығуы десорбция деп аталады',
        back: 'адсорбция'
    },
    {
        type: 'card',
        front: 'бетінде адсорбция жүретін заттар адсорбенттер, ал сіңірілетін заттар .... деп аталады',
        back: 'адсорбаттар'
    },
    {
        type: 'card',
        front: 'Осы зат медицинада организмді зиянды заттардан тазатру, газтұтықшаларда улы \
        заттарды сіңіру үшін қолданылады',
        back: 'белсендірілген көмір("карболен")'
    },
    {
        type: 'card',
        front: 'Fe\u2082O\u2083 + C -> ?',
        back: 'Fe + CO'
    },
    {
        type: 'card',
        front: 'Бұл зат түссіз, иіссіз, дәмсіз, суда нашар еритін газ. Улы газ. Оның \
        улы әсері қан гемоглобинмен қосылып, организмнің оттекпен қамтамасыз етілуін \
        жоюға негізделген. Бұл газ пеш және іштен жану қозғалтқыштарындағы отынның \
        толық жанбауынан да түзіледі',
        back: 'CO(иіс газы)'
    },
    {
        type: 'card',
        front: 'Түссіз, иіссіз, және дәмсіз, бірақ суда еріп әлсіз көмер қышқылын түзеді',
        back: 'CO\u2082'
    },
    {
        type: 'card',
        front: 'Бұл зат қолданылады сода, жуғыш заттар, газдалған сусындар өндіруде, \
        салқындатқыш "құрғақ мұз" және өрт сөндіргіш заттар алуда. Бұл газ атмосферасында \
        түрлі тағамдық заттарды сақтайды, өйткені онда бактериялар мен зендер тіршілік ете алмайды',
        back: 'CO\u2082'
    },


]


card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });

function randArr(arr) {
    return arr[(Math.floor(Math.random() * arr.length))];
}


nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    options.innerHTML = "";
    photoContainer.innerHTML = "";
    questionText.innerHTML = "";
    App();
});


function App() {
    randData = randArr(data);
    if (randData.type == 'truefalse') {
        card.setAttribute('style', 'display: none');
        questions.setAttribute('style', 'display: flex');
        backText.innerHTML = "";
        frontText.innerHTML = "";
        const btnTrue = document.createElement('span');
        const btnFalse = document.createElement('span');
        btnTrue.innerHTML = 'Дұрыс';
        btnFalse.innerHTML = 'Бұрыс';
        options.appendChild(btnTrue);
        options.appendChild(btnFalse);
        let click = false;
        btnTrue.addEventListener('click', (e) => {
            e.preventDefault();
            if (randData.answer && click == false) {
                btnTrue.classList.add('green');
            } else if (click == false){
                btnTrue.classList.add('red');
            }
            click = true;
        })
        btnFalse.addEventListener('click', (e) => {
            e.preventDefault();
            if (!randData.answer && click == false) {
                btnFalse.classList.add('green');
            } else if (click == false) {
                btnFalse.classList.add('red');
            }
            click = true;
        })


        if (randData.photo) {
            photoContainer.setAttribute('style', 'display: flex');
            const photoquestion = document.createElement('img');
            photoquestion.setAttribute('src',`${randData.photo}`)
            photoContainer.appendChild(photoquestion);
        } else {
            photoContainer.setAttribute('style', 'display: none');
        }
        const h3question = document.createElement('h1');
        h3question.innerHTML = randData.question;
        questionText.appendChild(h3question);

    } 
    else if (randData.type == 'card') {
        card.setAttribute('style', 'display: flex');
        questions.setAttribute('style', 'display: none');
        photoContainer.setAttribute('style', 'display: none');
        if (card.classList.contains('is-flipped')) {
            back.classList.remove('makeBack');
            back.classList.add('makeFront');
            backText.innerHTML = randData.front;
            front.classList.remove('makeFront');
            front.classList.add('makeBack');
            frontText.innerHTML = randData.back;
          } else {
            front.classList.remove('makeBack');
            front.classList.add('makeFront');
            frontText.innerHTML = randData.front;
            back.classList.remove('makeFront');
            back.classList.add('makeBack');
            backText.innerHTML = randData.back;
          }
    }

}

App();