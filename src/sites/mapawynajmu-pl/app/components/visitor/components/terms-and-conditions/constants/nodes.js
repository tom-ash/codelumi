import React from 'react'

const versions = {
  '1.0': '2020.01.01',
  1.1: '2020.02.15',
  1.2: '2020.03.12',
}

const nodes = [
  {
    item: '1.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Wprowadzenie</span>,
    en: <span>Introduction</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Niniejszy Regulamin określa zasady korzystania z Serwisu.</span>,
    en: <span>These Terms of Service stipulate the terms of use of the Service.</span>,
  },
  {
    item: '2.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Definicje</span>,
    en: <span>Definitions</span>,
  },
  {
    item: '1.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>W niniejszym Regulaminie wyrażenia pisane z wielkiej litery będą miały następujące znaczenia:</span>,
    en: <span>In these Terms of Service the capitalized expressions shall have the following meanings:</span>,
  },
  {
    item: 'a)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        <strong>Serwis</strong> - serwis internetowy znajdujący się pod adresem <u>https://mapawynajmu.pl</u>.
      </span>
    ),
    en: (
      <span>
        <strong>Service</strong> - a web service located at the address <u>https://mapawynajmu.pl</u>.
      </span>
    ),
  },
  {
    item: 'b)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        <strong>Administrator</strong> - Warsaw Digital Sp. z o.o., z siedzibą w Warszawie przy
        ul.&nbsp;Twardej&nbsp;18, 00-105 Warszawa, zarejestrowana w rejestrze przedsiębiorców prowadzonym przez Sąd
        Rejonowy dla m. st. Warszawy, XII Wydział Gospodarczy Krajowego Rejestru Sądowego, pod numerem KRS 0000735294, o
        kapitale zakładowym 20.000,00 PLN, w pełni wpłaconym, posiadająca numer REGON 380529016 oraz numer NIP
        5252753799.
      </span>
    ),
    en: (
      <span>
        <strong>Administrator</strong> - Warsaw Digital Sp. z o.o., with its registered office in Warsaw at&nbsp;Twarda
        18 St., 00-105 Warsaw, registered in the register of entrepreneurs held by the District Court for the capital
        city of Warsaw, XII Commercial Division of the National Court Register, under the KRS number 0000735294, with
        the share capital of 20,000.00 PLN, fully paid, with REGON number 380529016, and NIP number 5252753799.
      </span>
    ),
  },
  {
    item: 'c)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        <strong>Ogłoszenie</strong> - zapis w bazie danych Serwisu zawierający dane dotyczące danej nieruchomości,
        który, po spełnieniu określonych warunków, jest publicznie, czasowo dostępny w Serwisie, dla wszystkich
        Odwiedzających.
      </span>
    ),
    en: (
      <span>
        <strong>Announcement</strong> - a record in the Service's database containing data regarding a given real
        estate, which, upon meeting specified conditions, is tenably publicly available within the Service to all
        Visitors.
      </span>
    ),
  },
  {
    item: 'd)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        <strong>Konto</strong> - umowa pomiędzy Administratorem oraz danym podmiotem i odpowiadający tej umowie zapis w
        bazie danych Serwisu umożliwiające temu podmiotowi, po spełnieniu określonych warunków, dodawanie Ogłoszeń w
        bazie danych Serwisu.
      </span>
    ),
    en: (
      <span>
        <strong>Account</strong> - an Agreement between the Administrator and a given entity and a corresponding record
        in the Service's database, which enable that entity, upon meeting specified conditions, adding Announcements in
        the Service's database.{' '}
      </span>
    ),
  },
  {
    item: 'e)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        <strong>Odwiedzający</strong> - osoba, która uzyskała dostęp do Serwisu, np. poprzez przeglądarkę internetową.
      </span>
    ),
    en: (
      <span>
        <strong>Visitor</strong> - a person which obtained access to the Service, for example through a web browser.
      </span>
    ),
  },
  {
    item: 'f)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        <strong>Użytkownik</strong> - podmiot posiadający Konto w Serwisie.
      </span>
    ),
    en: (
      <span>
        <strong>User</strong> - an entity having an Account in the Service.
      </span>
    ),
  },
  {
    item: 'g)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        <strong>Ogłoszeniodawca</strong> - podmiot, który dodał Ogłoszenie w Serwisie.
      </span>
    ),
    en: (
      <span>
        <strong>Announcer</strong> - an entity, which added an Announcement in the Service.
      </span>
    ),
  },
  {
    item: '2.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Serwis</span>,
    en: <span>The Service</span>,
  },
  {
    item: '2.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Właścicielem i administratorem Serwisu jest Administrator.</span>,
    en: <span>The owner and the administrator of the Service is the Administrator.</span>,
  },
  {
    item: '2.2.',
    tier: 'point',
    version: versions['1.1'],
    pl: (
      <span>
        Serwis przeznaczony jest do prezentowania Ogłoszeń odnoszących się do wynajmu długoterminowego (przynajmniej
        3-miesięcznego) mieszkań, biur oraz lokali użytkowych znajdujących się w obrębie m.st.&nbsp;Warszawy.
      </span>
    ),
    en: (
      <span>
        The Service is intended to present Announcements regarding long-term lease (at least 3 months long) of
        apartments, offices and usable premises located within the area of the capital city of Warsaw.
      </span>
    ),
  },
  {
    item: '3.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Konta</span>,
    en: <span>Accounts</span>,
  },
  {
    item: '3.1.',
    tier: 'point',
    version: versions['1.2'],
    pl: (
      <span>
        Konto w Serwisie może założyć a) osoba fizyczna niedziałająca przy dodawaniu Ogłoszenia jako przedsiębiorca
        (Konto Prywatne) lub b) podmiot działający przy dodawaniu ogłoszenia jako przedsiębiorca (Konto Firmowe).
      </span>
    ),
    en: (
      <span>
        An Account in the Service can be registered by a) a natural person not acting at adding of an Announcement as an
        entrepreneur (Private Account) and/or b) an entity acting at adding of an Announcement as an entrepreneur
        (Business Account).
      </span>
    ),
  },
  {
    item: '3.2.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Administrator uprawniony jest do deaktywacji lub usunięcia Konta w przypadku stwierdzenia naruszenia Regulaminu
        przez Użytkownika.
      </span>
    ),
    en: (
      <span>
        The Administrator is entitled to de-activate and/or delete the Account in case of determining of violation of
        these Terms of Service by the User.
      </span>
    ),
  },
  {
    item: '4.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Ogłoszenia</span>,
    en: <span>Annoucements</span>,
  },
  {
    item: '4.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Ogłoszenia nie stanowią ofert w rozumieniu polskiego kodeksu cywilnego, a jedynie zaproszenia do rozpoczęcia
        negocjacji.
      </span>
    ),
    en: (
      <span>
        Announcements do not constitute offers within meaning of the Polish Civil Code, but constitute only invitations
        to commence negotiations.
      </span>
    ),
  },
  {
    item: '4.2.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Ogłoszeniodawcy odpowiedzialni są za zapewnienie, aby treść Ogłoszeń przez nich dodawanych była zgodna z prawem,
        dobrymi obyczajami oraz normami etycznymi.
      </span>
    ),
    en: (
      <span>
        Announcers are obligated to ensure that the content of the Announcements added by them is congruent with law,
        public decency and moral rules.
      </span>
    ),
  },
  {
    item: '4.3.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Odpowiedzialność za treść Ogłoszeń, dotyczącą między innymi ich pełności, aktualności oraz poprawności, ponoszą
        wyłącznie ich Ogłoszeniodawcy.
      </span>
    ),
    en: (
      <span>
        The liability for the content of Announcements, regarding - among others - their completeness, up-to-date status
        and correctness, lies solely with the respective Announcers.
      </span>
    ),
  },
  {
    item: '4.4.',
    tier: 'point',
    version: versions['1.1'],
    pl: (
      <span>
        Jeżeli przy danym Ogłoszeniu podano miesięczny czynsz netto, algorytmy Serwisu automatycznie wyliczają
        miesięczny czynsz brutto, poprzez pomnożenie miesięcznego czynszu netto przez 1,23. Ogłoszeniodawca dodający
        dane Ogłoszenie powinien potwierdzić poprawność tych wyliczeń.
      </span>
    ),
    en: (
      <span>
        If at a given Annoucement monthly net rent has been provided, the Service's algorithms automatically calculate
        monthly gross rent through mutliplying the monthly net rent by 1.23. The Announcer adding the Announcement
        should confirm the correctness of those calculations.
      </span>
    ),
  },
  {
    item: '4.5.',
    tier: 'point',
    version: versions['1.1'],
    pl: (
      <span>
        Algorytmy Serwisu automatycznie wyliczają stawki miesięcznego czynszu netto, jeżeli został podany, oraz podanego
        albo wyliczonego zgodnie z Punktem 4.4 miesięcznego czynszu brutto w odniesieniu do jednego metra kwadratowego
        powierzchni poprzez podzielenie tych kwot przez podaną powierzchnię. Ogłoszeniodawca dodający dane Ogłoszenie
        powinien potwierdzić poprawność tych wyliczeń.
      </span>
    ),
    en: (
      <span>
        The Service's algorithms automatically calculate the amounts of the monthly net rent if it was provided and the
        provided or calculated pursuant to Point 4.4 monthly gross rent with respect to one square meter of the area
        through division of those amounts by the provided area. The Announcer adding the Announcement should confirm the
        correctness of those calculations.
      </span>
    ),
  },
  {
    item: '4.6.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Wyliczenia, o których mowa w Punktach 4.4 oraz 4.5 dokonywane są do dwóch miejsc po przecinku z zastosowaniem
        zaokrąglenia w górę.
      </span>
    ),
    en: (
      <span>
        The calculations referred to under Points 4.4 and 4.5 are made to two decimal points and with application of
        rounding up.
      </span>
    ),
  },
  {
    item: '4.7.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        W okresie promocyjnym dodanie lub wydłużenie okresu aktywności Ogłoszenia w Serwisie jest nieodpłatne. Po tym
        okresie cena za dodanie lub wydłużenie okresu aktywności Ogłoszenia będzie ustalona zgodnie z cennikiem.
      </span>
    ),
    en: (
      <span>
        During promotional period adding and/or extending activation period of an Announcement in the Service is
        gratuitous. After that period the price for adding and/or extending activation period of an Annoucement shall be
        provided in the price list.
      </span>
    ),
  },
  {
    item: '4.8.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Początek, czas trwania oraz zakres okresu promocyjnego ustala Administrator.</span>,
    en: <span>The beginning, duration and extent of the promotional period is determined by the Administrator.</span>,
  },
  {
    item: '4.9.',
    tier: 'point',
    version: versions['1.2'],
    pl: (
      <span>
        Dodane Ogłoszenie pozostaje aktywne przez okres 60 dni, chyba, że zostanie wcześniej usunięte przez
        Ogłoszeniodawcę lub Administratora. Po upływie okresu aktywacji Ogłoszenie jest niewidoczne dla Odwiedzających,
        za wyjątkiem Ogłoszeniodawcy. Po upływie 30 dni od końca okresu aktywacji Ogłoszenie jest automatycznie usuwane.
        Ogłoszeniodawca może usunąć ogłoszenie w każdym momencie.
      </span>
    ),
    en: (
      <span>
        An added Announcement stays active for the period of 60 days, unless, it is earlier deleted by the Announcer or
        the Administrator. After the lapse of the activation period the Announcement is not visible to Visitors,
        excluding the Announcer. After 30 days from the end of the activation period the Announcement is automatically
        deleted. The Announcement can be deleted by the Announcer at any time.
      </span>
    ),
  },
  {
    item: '4.10.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Ogłoszenie może być w każdym momencie ukryte przez Ogłoszeniodawcę, co pozostaje jednakże bez wpływu na okres
        aktywności. Ogłoszenie ukryte jest niewidoczne dla Odwiedzających.
      </span>
    ),
    en: (
      <span>
        An Announcement can at any time be hidden by the Announcer, which however does not impact the activation period.
        The hidden Announcement is invisible to Visitors.
      </span>
    ),
  },
  {
    item: '4.11.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Administrator uprawniony jest do ukrycia, deaktywacji lub usunięcia Ogłoszenia w przypadku stwierdzenia
        naruszenia Regulaminu przez Ogłoszeniodawcę.
      </span>
    ),
    en: (
      <span>
        The Administrator is entitled to hide, de-activate and/or delete the Annoucement in case of determining of
        violation of these Terms of Service by the Announcer.
      </span>
    ),
  },
  {
    item: '5.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Prawa i odpowiedzialność Administratora.</span>,
    en: <span>The rights and liability of the Administrator</span>,
  },
  {
    item: '5.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Administrator uprawniony jest w każdym momencie do zaprzestania świadczenia usług poprzez Serwis, jak i do
        wprowadzania przerw w świadczeniu tych usług, z zastrzeżeniem Punktu 5.2.
      </span>
    ),
    en: (
      <span>
        The Administrator is entitled at any time to terminate rendering of the services through the Service, and/or to
        interrupt rendering of those services, with the reservation of Point 5.2.
      </span>
    ),
  },
  {
    item: '5.2.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        W przypadku zaprzestania świadczenia usług, bądź wprowadzenia przerw w ich świadczeniu, Ogłoszeniodawcy
        dotkniętemu takim zaprzestaniem lub przerwą przysługuje jedynie proporcjonalny zwrot kwoty zapłaconej
        Administratorowi za dodanie ogłoszenia dotkniętego takim zaprzestaniem lub przerwą.
      </span>
    ),
    en: (
      <span>
        In case of termination of rendering of the services or their interruptions an Announcer affected by that
        termination or interruption is entitled only to a proportional reimbursement of the amount paid to the
        Administrator for adding of the Annoucement affected by that termination or interruption.
      </span>
    ),
  },
  {
    item: '6.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Ochrona danych osobowych</span>,
    en: <span>Personal Data Protection</span>,
  },
  {
    item: '6.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>Integralnymi częściami niniejszego Regulaminu są Polityka Prywatności oraz Polityka Plików Cookies.</span>
    ),
    en: <span>The Privacy Policy and the Cookies Policy consitute integral parts of these Terms of Service.</span>,
  },
  {
    item: '6.2.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Podmiot tworzący Konto upoważnia Administratora do przetwarzanie danych osobowych powiązanych z tym Kontem.
      </span>
    ),
    en: (
      <span>
        An entity creating an Account authorizes the Administrator to process personal data connected with that Account.
      </span>
    ),
  },
  {
    item: '6.3.',
    tier: 'point',
    version: versions['1.1'],
    pl: (
      <span>
        Użytkownicy przyjmują do wiadomości, że dodanie Ogłoszenia w Serwisie wiąże się z upublicznieniem ich numeru
        telefonu, imienia lub nazwy (firmy), podanych przy rejestracji ich Konta lub później, które będą wyświetlane
        jako dane kontaktowe przy ich Ogłoszeniach.
      </span>
    ),
    en: (
      <span>
        Users acknowledge that adding of an Announcement in the Service is connected with publication of their phone
        number, first name and/or business name, provided during creation of their Account or later, which will be
        displayed as contact data at their Announcements.
      </span>
    ),
  },
  {
    item: '7.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Postanowienia końcowe</span>,
    en: <span>Final Provisions</span>,
  },
  {
    item: '7.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Niniejszy Regulamin poddany jest prawu polskiemu.</span>,
    en: <span>These Terms of Service are governed by the Polish law.</span>,
  },
  {
    item: '7.2.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Spory wynikłe z niniejszego Regulaminu rozstrzygane będą przez sąd właściwy dla Administratora.</span>,
    en: (
      <span>
        Disputes arising out of these Terms of Service shall be determined by the court having jurisdiction over the
        Administrator.
      </span>
    ),
  },
  {
    item: '7.3.',
    tier: 'point',
    version: versions['1.2'],
    pl: <span>Niniejszy Regulamin obowiązuje od dnia 12 marca 2020 r.</span>,
    en: <span>These Terms of Service are applicable as of 12 March 2020.</span>,
  },
  {
    item: '7.4.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Administrator ma prawo do zmiany Regulaminu, Polityki Prywatności, Polityki Cookies oraz Cennika poprzez zamieszczenie zmian tych dokumentów w Serwisie pod adresem <u>https://mapawynajmu.pl</u>. Zmiany te wchodzą w&nbsp;życie po upływie okresu 14 dni od ich ogłoszenia.
      </span>
    ),
    en: (
      <span>
        The Administrator is authorized to amend these Terms of Service, the Privacy Policy, the Cookies Policy and the Pricing through publication of the amendments to those documents within the Service under the address{' '} <u>https://mapawynajmu.pl</u>. The amendments are applicable after the lapse of the period of 14 days from their publication.
      </span>
    ),
  },
]

export default nodes
