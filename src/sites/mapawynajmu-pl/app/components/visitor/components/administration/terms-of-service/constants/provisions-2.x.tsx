import React from 'react'

const versions = {
  '2.0': '2023.06.19',
}

export const provisions = [
  {
    item: '1.',
    tier: 'header',
    version: versions['2.0'],
    pl: <span>Wprowadzenie</span>,
    en: <span>Introduction</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['2.0'],
    pl: <span>Niniejszy Regulamin określa zasady korzystania z Serwisu.</span>,
    en: <span>These Terms of Service stipulate the terms of use of the Service.</span>,
  },
  {
    item: '2.',
    tier: 'header',
    version: versions['2.0'],
    pl: <span>Definicje</span>,
    en: <span>Definitions</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['2.0'],
    pl: <span>W niniejszym Regulaminie wyrażenia pisane z wielkiej litery będą miały następujące znaczenia:</span>,
    en: <span>In these Terms of Service the capitalized expressions shall have the following meanings:</span>,
  },
  {
    item: 'a)',
    tier: 'subpoint',
    version: versions['2.0'],
    pl: (
      <span>
        <strong>Serwis</strong> - serwis internetowy znajdujący się pod adresem <u>https://mapawynajmu.pl</u>,
      </span>
    ),
    en: (
      <span>
        <strong>Service</strong> - a web service located at the address <u>https://mapawynajmu.pl</u>,
      </span>
    ),
  },
  {
    item: 'b)',
    tier: 'subpoint',
    version: versions['2.0'],
    pl: (
      <span>
        <strong>Administrator</strong> - Warsaw Digital Sp. z o.o., z siedzibą w Warszawie przy
        ul.&nbsp;Twardej&nbsp;18, 00-105 Warszawa, zarejestrowana w rejestrze przedsiębiorców prowadzonym przez Sąd
        Rejonowy dla m. st. Warszawy, XII Wydział Gospodarczy Krajowego Rejestru Sądowego, pod numerem KRS 0000735294, o
        kapitale zakładowym 20.000,00 PLN, w pełni wpłaconym, posiadająca numer REGON 380529016 oraz numer NIP
        5252753799,
      </span>
    ),
    en: (
      <span>
        <strong>Administrator</strong> - Warsaw Digital Sp. z o.o., with its registered office in Warsaw at&nbsp;Twarda
        18 St., 00-105 Warsaw, registered in the register of entrepreneurs held by the District Court for the capital
        city of Warsaw, XII Commercial Division of the National Court Register, under the KRS number 0000735294, with
        the share capital of 20,000.00 PLN, fully paid, with REGON number 380529016, and NIP number 5252753799,
      </span>
    ),
  },
  {
    item: 'c)',
    tier: 'subpoint',
    version: versions['2.0'],
    pl: (
      <span>
        <strong>Ogłoszenie</strong> - zapis w bazie danych Serwisu zawierający dane dotyczące danej nieruchomości,
        który, po spełnieniu określonych warunków, jest publicznie, czasowo dostępny w Serwisie, dla wszystkich
        Odwiedzających,
      </span>
    ),
    en: (
      <span>
        <strong>Listing</strong> - a record in the Service's database containing data regarding a given real estate,
        which, upon meeting specified conditions, is tenably publicly available within the Service to all Visitors,
      </span>
    ),
  },
  {
    item: 'd)',
    tier: 'subpoint',
    version: versions['2.0'],
    pl: (
      <span>
        <strong>Konto</strong> - umowa pomiędzy Administratorem oraz danym podmiotem i odpowiadający tej umowie zapis w
        bazie danych Serwisu umożliwiające temu podmiotowi, po spełnieniu określonych warunków, dodawanie Ogłoszeń w
        bazie danych Serwisu,
      </span>
    ),
    en: (
      <span>
        <strong>Account</strong> - an Agreement between the Administrator and a given entity and a corresponding record
        in the Service's database, which enable that entity, upon meeting specified conditions, adding Listings in the
        Service's database,
      </span>
    ),
  },
  {
    item: 'e)',
    tier: 'subpoint',
    version: versions['2.0'],
    pl: (
      <span>
        <strong>Odwiedzający</strong> - osoba, która uzyskała dostęp do Serwisu, np. poprzez przeglądarkę internetową,
      </span>
    ),
    en: (
      <span>
        <strong>Visitor</strong> - a person which obtained access to the Service, for example through a web browser,
      </span>
    ),
  },
  {
    item: 'f)',
    tier: 'subpoint',
    version: versions['2.0'],
    pl: (
      <span>
        <strong>Użytkownik</strong> - podmiot posiadający Konto w Serwisie,
      </span>
    ),
    en: (
      <span>
        <strong>User</strong> - an entity having an Account in the Service,
      </span>
    ),
  },
  {
    item: 'g)',
    tier: 'subpoint',
    version: versions['2.0'],
    pl: (
      <span>
        <strong>Ogłoszeniodawca</strong> - podmiot, który dodał Ogłoszenie w Serwisie.
      </span>
    ),
    en: (
      <span>
        <strong>Lister</strong> - an entity, which added a Listing in the Service.
      </span>
    ),
  },
  {
    item: '3.',
    tier: 'header',
    version: versions['2.0'],
    pl: <span>Serwis</span>,
    en: <span>The Service</span>,
  },
  {
    item: '3.1.',
    tier: 'point',
    version: versions['2.0'],
    pl: <span>Właścicielem i administratorem Serwisu jest Administrator.</span>,
    en: <span>The owner and the administrator of the Service is the Administrator.</span>,
  },
  {
    item: '3.2.',
    tier: 'point',
    version: versions['2.0'],
    pl: <span>Serwis przeznaczony jest do prezentowania Ogłoszeń odnoszących się do wynajmu nieruchomości.</span>,
    en: <span>The Service is intended to present Listings regarding real estate lease/rent.</span>,
  },
  {
    item: '4.',
    tier: 'header',
    version: versions['2.0'],
    pl: <span>Konta</span>,
    en: <span>Accounts</span>,
  },
  {
    item: '4.1.',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Konto w Serwisie może założyć a) osoba fizyczna niedziałająca przy dodawaniu Ogłoszenia jako przedsiębiorca
        (Konto Prywatne) lub b) podmiot działający przy dodawaniu ogłoszenia jako przedsiębiorca (Konto Firmowe).
      </span>
    ),
    en: (
      <span>
        An Account in the Service can be registered by a) a natural person not acting at adding of a Listing as an
        entrepreneur (Private Account) and/or b) an entity acting at adding of a Listing as an entrepreneur (Business
        Account).
      </span>
    ),
  },
  {
    item: '4.2.',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Administrator uprawniony jest do dezaktywacji lub usunięcia Konta w przypadku stwierdzenia naruszenia Regulaminu
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
    item: '4.3.',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Konsumentom oraz osobom fizycznym, co do których w relacjach z Administratorem znajdujde zastosowanie art. 385
        <sup>5</sup> polskiego kodeksu cywilnego, przysługuje prawo do odstąpienia od danej umowy z Administratorem w
        terminie 14 dni od jej zawarcia. Wykonanie tego prawa następuje poprzez wysłanie wiadomości email o odpowiedniej
        treści na adres <u>kontakt@mapawynajmu.pl</u>.
      </span>
    ),
    en: (
      <span>
        Consumers and individuals to whom Article 385<sup>5</sup> of the Polish Civil Code applies have the right to
        withdraw from a given agreement with the Administrator within 14 days from its conclusion. The exercise of this
        right is carried out by sending an email with the appropriate content to the address{' '}
        <u>kontakt@mapawynajmu.pl</u>.
      </span>
    ),
  },
  {
    item: '5.',
    tier: 'header',
    version: versions['2.0'],
    pl: <span>Ogłoszenia</span>,
    en: <span>Listings</span>,
  },
  {
    item: '5.1.',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Ogłoszenia nie stanowią ofert w rozumieniu polskiego kodeksu cywilnego, a jedynie zaproszenia do rozpoczęcia
        negocjacji.
      </span>
    ),
    en: (
      <span>
        Listings do not constitute offers within meaning of the Polish Civil Code, but constitute only invitations to
        commence negotiations.
      </span>
    ),
  },
  {
    item: '5.2.',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Ogłoszeniodawcy odpowiedzialni są za zapewnienie, aby treść Ogłoszeń przez nich dodawanych była zgodna z prawem,
        dobrymi obyczajami oraz normami etycznymi.
      </span>
    ),
    en: (
      <span>
        Listers are obligated to ensure that the content of the Listings added by them is congruent with law, public
        decency and moral rules.
      </span>
    ),
  },
  {
    item: '5.3.',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Odpowiedzialność za treść Ogłoszeń, dotyczącą między innymi ich pełności, aktualności oraz poprawności, ponoszą
        wyłącznie ich Ogłoszeniodawcy.
      </span>
    ),
    en: (
      <span>
        The liability for the content of Listings, regarding - among others - their completeness, up-to-date status and
        correctness, lies solely with the respective Listers.
      </span>
    ),
  },
  {
    item: '5.4.',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Jeżeli przy danym Ogłoszeniu podano miesięczny czynsz netto, algorytmy Serwisu automatycznie wyliczają
        miesięczny czynsz brutto, poprzez pomnożenie miesięcznego czynszu netto przez 1,23. Ogłoszeniodawca dodający
        dane Ogłoszenie powinien potwierdzić poprawność tych wyliczeń.
      </span>
    ),
    en: (
      <span>
        If at a given Listing monthly net rent has been provided, the Service's algorithms automatically calculate
        monthly gross rent through mutliplying the monthly net rent by 1.23. The Lister adding the Listing should
        confirm the correctness of those calculations.
      </span>
    ),
  },
  {
    item: '5.5.',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Algorytmy Serwisu automatycznie wyliczają stawki miesięcznego czynszu netto, jeżeli został podany, oraz podanego
        albo wyliczonego zgodnie z Punktem 5.4 miesięcznego czynszu brutto w odniesieniu do jednego metra kwadratowego
        powierzchni poprzez podzielenie tych kwot przez podaną powierzchnię. Ogłoszeniodawca dodający dane Ogłoszenie
        powinien potwierdzić poprawność tych wyliczeń.
      </span>
    ),
    en: (
      <span>
        The Service's algorithms automatically calculate the amounts of the monthly net rent if it was provided and the
        provided or calculated pursuant to Point 5.4 monthly gross rent with respect to one square meter of the area
        through division of those amounts by the provided area. The Lister adding the Listing should confirm the
        correctness of those calculations.
      </span>
    ),
  },
  {
    item: '5.6.',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Wyliczenia, o których mowa w Punktach 5.4 oraz 5.5 dokonywane są do dwóch miejsc po przecinku z zastosowaniem
        zaokrąglenia w górę.
      </span>
    ),
    en: (
      <span>
        The calculations referred to under Points 5.4 and 5.5 are made to two decimal points and with application of
        rounding up.
      </span>
    ),
  },
  {
    item: '5.7.',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Dodane Ogłoszenie pozostaje aktywne przez okres 60 dni, chyba, że zostanie wcześniej usunięte przez
        Ogłoszeniodawcę lub Administratora. Po upływie okresu aktywacji Ogłoszenie jest niewidoczne dla Odwiedzających,
        za wyjątkiem Ogłoszeniodawcy. Po upływie 30 dni od końca okresu aktywacji Ogłoszenie jest automatycznie usuwane.
      </span>
    ),
    en: (
      <span>
        An added Listing stays active for the period of 60 days, unless, it is earlier deleted by the Lister or the
        Administrator. After the lapse of the activation period the Listing is not visible to Visitors, excluding the
        Lister. After 30 days from the end of the activation period the Listing is automatically deleted.
      </span>
    ),
  },
  {
    item: '5.8.',
    tier: 'point',
    version: versions['2.0'],
    pl: <span>Ogłoszenie może być w każdym momencie usunięte przez Ogłoszeniodawcę.</span>,
    en: <span>A Listing can at any time be deleted by the Lister.</span>,
  },
  {
    item: '5.9.',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Ogłoszenie może być w każdym momencie ukryte przez Ogłoszeniodawcę, co pozostaje jednakże bez wpływu na okres
        aktywności. Ogłoszenie ukryte jest niewidoczne dla Odwiedzających.
      </span>
    ),
    en: (
      <span>
        A Listing can at any time be hidden by the Lister, which however does not impact the activation period. The
        hidden Listing is invisible to Visitors.
      </span>
    ),
  },
  {
    item: '5.10.',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Administrator uprawniony jest do ukrycia, dezaktywacji lub usunięcia Ogłoszenia w przypadku stwierdzenia
        naruszenia Regulaminu przez Ogłoszeniodawcę.
      </span>
    ),
    en: (
      <span>
        The Administrator is entitled to hide, de-activate and/or delete the Listing in case of determining of violation
        of these Terms of Service by the Lister.
      </span>
    ),
  },
  {
    item: '5.11.',
    tier: 'point',
    version: versions['2.0'],
    pl: <span>Ogłoszenie może być wyróżnione przez Ogłoszeniodawcę.</span>,
    en: <span>A Listing can be promoted by the Lister.</span>,
  },
  {
    item: '5.12.',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Wyróżnione ogłoszenia wyświetlane są na liście przed pozostałymi, a ikony wyróżnionych ogłoszeń są podświetlone
        i są wyświetlane ponad pozostałymi.
      </span>
    ),
    en: (
      <span>
        Promoted Listings are displayed on the list before others and the icons of promoted Listings are displayed over
        others.
      </span>
    ),
  },
  {
    item: '6.',
    tier: 'header',
    version: versions['2.0'],
    pl: <span>Cennik</span>,
    en: <span>Pricing</span>,
  },
  {
    item: '6.1.',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        W okresie promocyjnym dodanie lub wydłużenie okresu aktywności Ogłoszenia w Serwisie jest bezpłatne. Po tym
        okresie cena za dodanie lub wydłużenie okresu aktywności Ogłoszenia będzie wskazana w niniejszym Regulaminie.
      </span>
    ),
    en: (
      <span>
        During promotional period adding and/or extending activation period of a Listing in the Service is gratuitous.
        After that period the price for adding and/or extending activation period of a Listing shall be provided in
        these Terms of Service.
      </span>
    ),
  },
  {
    item: '6.2.',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Początek oraz czas trwania okresu promocyjnego, o którym mowa w Punkcie 6.1, ustala Administrator w Regulaminie.
      </span>
    ),
    en: (
      <span>
        The beginning and duration of the promotional period referred to under Point 6.1 is determined by the
        Administrator in these Terms of Service.
      </span>
    ),
  },
  {
    item: '6.3.',
    tier: 'point',
    version: versions['2.0'],
    pl: <span>Okres promocyjny, o którym mowa w Punkcie 6.1, zaczyna się 19 czerwca 2023 r.</span>,
    en: <span>The promotional period referred to under Point 6.1 commences on 19 June 2023.</span>,
  },
  {
    item: '6.4.',
    tier: 'point',
    version: versions['2.0'],
    pl: <span>Wyróżnienie ogłoszenia kosztuje 29 PLN.</span>,
    en: <span>Promotion of a Listing costs 29 PLN.</span>,
  },
  {
    item: '7.',
    tier: 'header',
    version: versions['2.0'],
    pl: <span>Płatności</span>,
    en: <span>Payments</span>,
  },
  {
    item: '7.1',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Dokonując płatności w ramach Serwisu Ogłoszeniodawca lub osoba go reprezentująca wyraża/wyrażają zgodę na
        przetwarzanie jego/ich danych osobowych niezbędnych w odniesieniu do przeprowadzania procesu płatności przez
        Administratora i partnerów Administratora, którym Administrator deleguje ten proces płatności.
      </span>
    ),
    en: (
      <span>
        By making a payment within the Service, the Lister and/or their representative gives/give consent to processing
        of their personal data necessery for the payment process by the Administrator and the Administrator's partners
        to whom the Administrator delegates the payment process.
      </span>
    ),
  },
  {
    item: '7.2',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Rozpoczęcie wykonywania odpłatnej usługi przez Administratora następuje po 14 dniach od dnia jej wykupienia
        przez Ogłoszeniodawcę, chyba że Ogłoszeniodawca wyrazi wolę rozpoczęcia świadczenia usługi przed tym terminem.
      </span>
    ),
    en: (
      <span>
        The commencement of rendering of a paid service by the Administrator takes place 14 days after its purchase by
        the Lister, unless the Lister expresses their will to commence rendering of the service before this date.
      </span>
    ),
  },
  {
    item: '7.3',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        W przypadku skorzystania z prawa do odstąpienia, o którym mowa w Punkcie 4.3, i jednoczesnego wyrażenia zgody, o
        której mowa w Punkcie 7.2, zwrot kosztów nie przysługuje za okres, w którym odpłatna usługa była świadczona.
      </span>
    ),
    en: (
      <span>
        In the event of exercising the right of withdrawal as referred to under Point 4.3, and simultaneous expression
        of consent as referred to under Point 7.2, no refund is granted for the period during which the paid service was
        provided.
      </span>
    ),
  },
  {
    item: '8.',
    tier: 'header',
    version: versions['2.0'],
    pl: <span>Prawa i odpowiedzialność Administratora.</span>,
    en: <span>The rights and liability of the Administrator</span>,
  },
  {
    item: '8.1.',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Administrator uprawniony jest w każdym momencie do zaprzestania świadczenia usług poprzez Serwis, jak i do
        wprowadzania przerw w świadczeniu tych usług, z zastrzeżeniem Punktu 8.2.
      </span>
    ),
    en: (
      <span>
        The Administrator is entitled at any time to terminate rendering of the services through the Service, and/or to
        interrupt rendering of those services, with the reservation of Point 8.2.
      </span>
    ),
  },
  {
    item: '8.2.',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        W przypadku zaprzestania świadczenia usług, bądź wprowadzenia przerw w ich świadczeniu, Ogłoszeniodawcy
        dotkniętemu takim zaprzestaniem lub przerwą przysługuje jedynie proporcjonalny zwrot kwot zapłaconych
        Administratorowi za te usługi.
      </span>
    ),
    en: (
      <span>
        In case of termination of rendering of the services or their interruptions a Lister affected by that termination
        or interruption is entitled only to the proportional reimbursement of the amounts paid to the Administrator for
        those services.
      </span>
    ),
  },
  {
    item: '9.',
    tier: 'header',
    version: versions['2.0'],
    pl: <span>Ochrona danych osobowych</span>,
    en: <span>Personal Data Protection</span>,
  },
  {
    item: '9.1.',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>Integralnymi częściami niniejszego Regulaminu są Polityka Prywatności oraz Polityka Plików Cookies.</span>
    ),
    en: <span>The Privacy Policy and the Cookies Policy consitute integral parts of these Terms of Service.</span>,
  },
  {
    item: '9.2.',
    tier: 'point',
    version: versions['2.0'],
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
    item: '9.3.',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Użytkownicy przyjmują do wiadomości, że dodanie Ogłoszenia w Serwisie wiąże się z upublicznieniem ich numeru
        telefonu, imienia lub nazwy (firmy), podanych przy rejestracji ich Konta lub później, które będą wyświetlane
        jako dane kontaktowe przy ich Ogłoszeniach.
      </span>
    ),
    en: (
      <span>
        Users acknowledge that adding of a Listing in the Service is connected with publication of their phone number,
        first name and/or business name, provided during creation of their Account or later, which will be displayed as
        contact data at their Listings.
      </span>
    ),
  },
  {
    item: '10.',
    tier: 'header',
    version: versions['2.0'],
    pl: <span>Zmiana Regulaminu</span>,
    en: <span>Amendments to Terms of Service</span>,
  },
  {
    item: '10.1',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Administrator ma prawo do zmiany Regulaminu oraz jego integralnych części, takich jak w szczególności, ale nie
        wyłącznie, Polityka Prywatności, Polityka Cookies oraz Cennik, w odniesieniu do:
      </span>
    ),
    en: (
      <span>
        The Administrator is entitled to amend these Terms of Service and their integral parts, including, without
        limitation, the Privacy Policy, the Cookies Policy and the Price List, with regard to:
      </span>
    ),
  },
  {
    item: 'a)',
    tier: 'subpoint',
    version: versions['2.0'],
    pl: <span>zmian wymaganych z uwagi na bezwzględnie obowiązujące przepisy prawa,</span>,
    en: <span>amendments required due to the mandatory provisions of law,</span>,
  },
  {
    item: 'b)',
    tier: 'subpoint',
    version: versions['2.0'],
    pl: (
      <span>
        zmian wymaganych z uwagi na przeciwdziałanie nadużyciom oraz zapewnienie bezpieczeństwa Odwiedzających oraz
        Serwisu,
      </span>
    ),
    en: (
      <span>amendments required due to counteracting abuses and ensuring safety of the Visitors and the Service,</span>
    ),
  },
  {
    item: 'c)',
    tier: 'subpoint',
    version: versions['2.0'],
    pl: <span>rozpoczęcia świadczenia nowych usług przez Administratora w ramach Serwisu,</span>,
    en: <span>commencement of the provision of new services by the Administrator within the Service,</span>,
  },
  {
    item: 'd)',
    tier: 'subpoint',
    version: versions['2.0'],
    pl: (
      <span>zmian w zakresie oraz cenach świadczenia dotychczasowych usług przez Administratora w ramach Serwisu,</span>
    ),
    en: (
      <span>
        amendments in the scope and prices of provisioning of the existing services by the Administrator within the
        Service,
      </span>
    ),
  },
  {
    item: 'e)',
    tier: 'subpoint',
    version: versions['2.0'],
    pl: <span>zakończenia świadczenia dotychczasowych usług przez Administratora w ramach Serwisu,</span>,
    en: <span>termination of the provision of the existing services by the Administrator within the Service,</span>,
  },
  {
    item: 'f)',
    tier: 'subpoint',
    version: versions['2.0'],
    pl: <span>zmian w zakresie funkcjononowania Serwisu,</span>,
    en: <span>amendments in the scope of the functioning of the Service,</span>,
  },
  {
    item: 'g)',
    tier: 'subpoint',
    version: versions['2.0'],
    pl: <span>zmian w zakresie ochrony prywatności Odwiedzających oraz analizy zachowań Odwiedzających Serwis,</span>,
    en: <span>amendments in the scope of privacy protection of the Visitors and the Visitor behavior analysis,</span>,
  },
  {
    item: 'h)',
    tier: 'subpoint',
    version: versions['2.0'],
    pl: <span>zmian redakcyjnych.</span>,
    en: <span>editorial amendments.</span>,
  },
  {
    item: '10.2',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Zmiana Regulaminu wchodzi w życie w terminie wskazanym przez Administratora, jednakże nie krótszym niż 15 dni od
        dnia powiadomienia o tych zmianach poprzez ich publikację na stronie dostępnej pod adresem
        https://mapawynajmu.pl/regulamin, oraz w odniesieniu do dotychczasowych Użytkowników poprzez przesłanie
        informacji o tych zmianach na adres email Użytkownika podany przez Użytkownika i zapisany w Serwisie.
      </span>
    ),
    en: (
      <span>
        An amendment to the Terms of Service enters into force on the date indicated by the Administrator, however not
        shorter than 15 days from the date of notification about those amendments through their publication on the
        website available at https://mapawynajmu.pl/terms-of-service, and with regard to the existing Users through
        sending information about these changes to the User's email address provided by the User and saved within the
        Service.
      </span>
    ),
  },
  {
    item: '10.3',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Zmiany Regulaminu wprowadzone z uwagi na bezwzględnie obowiązujące przepisy prawa lub z uwagi na
        przeciwdziałanie nadużyciom oraz zapewnienie bezpieczeństwa Odwiedzających oraz Serwisu mogą wejść w życie w
        terminie krótszym od przewidzianego w Punkcie 10.2, w tym nawet ze skutkiem natychmiastowym.
      </span>
    ),
    en: (
      <span>
        The amendments to the Terms of Service introduced due to the mandatory provisions of law and/or due to
        counteracting abuses and ensuring safety of the Visitors and the Service may enter into force in the period
        shorter than specified under Point 10.2, including even with immediate effect.
      </span>
    ),
  },
  {
    item: '10.4',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Zmiany Regulaminu w odniesieniu do zakresu oraz cen świadczenia dotychczasowych usług przez Administratora w
        ramach Serwisu nie są stosowane w stosunku do odpłatnych usług aktywowanych przez Użytkownika przed tymi
        zmianami.
      </span>
    ),
    en: (
      <span>
        The amendments to the Terms of Service with regard the scope and prices of provisioning of the existing services
        by the Administrator within the Service are not applicable to the paid services activated by the User before
        these amendments.
      </span>
    ),
  },
  {
    item: '10.5',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        W przypadku braku akceptacji planowanych zmian Regulaminu, dotychczasowy Użytkownik uprawniony jest do
        wypowiedzenia umowy dotyczącej prowadzenia Konta w Serwisie ze skutkiem natychmiastowym, w terminie 15 dni od
        dnia otrzymania powiadomienia o tych zmianach, poprzez wysłanie wiadomości email o odpowiedniej treści na adres{' '}
        <u>kontakt@mapawynajmu.pl</u>, z zastrzeżeniem, że takie wypowiedzenie nie ma zastosowania do odpłatnch usług
        Administratora świadczonych w ramach serwisu aktywowanych przez Użytkownika przed tymi zmianami, aż do czasu
        zakończenia świadczenia tych usług.
      </span>
    ),
    en: (
      <span>
        In case of non-acceptance of the planned amendments to the Terms of Service, the existing User is entitiled
        terminate the agreement regarding Account maintenance within the Service with immediate effect, within the
        period of 15 days from the date of receiving notification of these changes, through sending an email message
        with the relevant content to the address <u>contact@mapawynajmu.pl</u>, with the reservation that such
        termination is not applicable to the paid services provisioned by the Administrator within the Service activated
        before these amendements, until the termination of provisioning of those services.
      </span>
    ),
  },
  {
    item: '10.6',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>Po wejściu w życie zmian Regulaminu aktywowanie nowej usługi wymaga ponownej akceptacji Regulaminu.</span>
    ),
    en: (
      <span>
        Once the amendments to the Terms of Service enter into force an activation of a new service requires
        re-accaptance of the Terms of Service.
      </span>
    ),
  },
  {
    item: '11.',
    tier: 'header',
    version: versions['2.0'],
    pl: <span>Postanowienia końcowe</span>,
    en: <span>Final Provisions</span>,
  },
  {
    item: '11.1.',
    tier: 'point',
    version: versions['2.0'],
    pl: <span>Niniejszy Regulamin poddany jest prawu polskiemu.</span>,
    en: <span>These Terms of Service are governed by the Polish law.</span>,
  },
  {
    item: '11.2.',
    tier: 'point',
    version: versions['2.0'],
    pl: (
      <span>
        Spory wynikłe z niniejszego Regulaminu rozstrzygane będą przez sąd właściwy dla Administratora, chyba że
        bezwzględnie obowiązujące przepisy prawa określają inną właściwość.
      </span>
    ),
    en: (
      <span>
        Disputes arising out of these Terms of Service shall be determined by the court having jurisdiction over the
        Administrator unless mandatory provisions of law stipulate otherwise.
      </span>
    ),
  },
  {
    item: '11.3.',
    tier: 'point',
    version: versions['2.0'],
    pl: <span>Niniejszy Regulamin obowiązuje od dnia 19 czerwca 2023 r.</span>,
    en: <span>These Terms of Service are applicable as of 19 June 2023.</span>,
  },
]
