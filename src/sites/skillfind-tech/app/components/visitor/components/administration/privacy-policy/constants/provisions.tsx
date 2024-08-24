import React from 'react'

const versions = {
  '1.0': '2024.08.25',
}

export const provisions = [
  {
    item: '1.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Jaki podmiot jest administratorem danych osobowych?</span>,
    en: <span>Which entity is the controller of the personal data?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Administratorem zbieranych w Serwisie danych osobowych w rozumieniu Rozporządzenia Parlamentu Europejskiego i
        Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem
        danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
        rozporządzenie o ochronie danych) jest Usługodawca, czyli Warsaw Digital Sp. z o.o., z siedzibą w Warszawie.
      </span>
    ),
    en: (
      <span>
        The controller of the personal data collected in the Service, within the meaning of the Regulation (EU) 2016/679
        of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard
        to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC
        (General Data Protection Regulation), is the Service Provider, namely Warsaw Digital Sp. z o.o., headquartered
        in Warsaw.
      </span>
    ),
  },

  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        W przypadku aplikowania na stanowisko objęte danym Ogłoszeniem Współpracy poprzez formularz znajdujący się poza
        Serwisem, do którego dostęp uzyskuje się poprzez przekierowanie z Serwisu na adres podany przy tym ogłoszeniu
        przez Ogłoszeniodawcę, wyłącznym administratorem danych osobowych zebranych poprzez taki formularz jest podmiot,
        który te dane zebrał i podmiot ten jest wyłącznie odpowiedzialny za przetwarzanie tych danych osobowych, a
        Usługodawca w tym zakresie nie występuje w roli administratora.
      </span>
    ),
    en: (
      <span>
        In the case of applying for a position covered by a given Job Posting through a form located outside the
        Service, accessed by redirecting from the Service to the address provided with that posting by the Poster, the
        sole controller of personal data collected through such a form is the entity which collected such data and this
        entity is solely responsible for processing this personal data, while the Service Provider does not act as a
        controller in this regard.
      </span>
    ),
  },

  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        W przypadku zaaplikowanie na stanowisko objęte danym Ogłoszeniem Współpracy poprzez formularz aplikacyjny
        znajdujący się w Serwisie przy danym ogłoszeniu, dane te udostępniane są Ogłoszeniodawcy w celu przeprowadzenia
        procesu rekrutacyjnego, a Ogłoszeniodawca również staje się administratorem tych danych osobowych i jest
        wyłącznie odpowiedzialny za przetwarzanie tych danych osobowych w zakresie tego procesu rekrutacyjnego, a
        Usługodawca w tym zakresie nie występuje w roli administratora. Usługodawca zachowuje udostępnione
        Ogłoszeniodawcy dane osobowe tylko w celu zabezpieczenia się przed ewentualnymi roszczeniami w przyszłości, a po
        okresie przedawnienia ewentualnych roszczeń dane te są usuwane.
      </span>
    ),
    en: (
      <span>
        In the case of applying for a position covered by a given Job Posting through the application form located in
        the Service at that posting, the data is made available to the Poster for the purpose of conducting the
        recruitment process, and the Poster also becomes the controller of this personal data and is solely responsible
        for processing this data within the scope of this recruitment process, while the Service Provider does not act
        as a controller in this regard. The Service Provider retains the personal data shared with the Poster solely to
        protect against potential future claims, and after the statute of limitations for potential claims has expired,
        this data is deleted.
      </span>
    ),
  },
  {
    item: '2.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Kim są Zaufani Partnerzy Usługodawcy?</span>,
    en: <span>Who are the Trusted Partners of the Service Provider?</span>,
  },

  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        W niniejsze Polityce Prywatności, jak i w całym Regulaminie, przez Zaufanych Partnerów rozumie się podmioty
        świadczące na rzecz Usługodawcy usługi hostingu danych, wysyłania wiadomości email oraz sms, generowania map,
        prowadzenia statystyki, oraz współpracujące z Usługodawcą w odniesieniu do wyświetlania treści marketingowych.
      </span>
    ),
    en: (
      <span>
        In this Privacy Policy, as well as throughout the Terms of Service, Trusted Partners refer to entities providing
        data hosting services, email and SMS delivery services, map generation, statistical analysis, and cooperating
        with the Service Provider regarding the display of marketing content.
      </span>
    ),
  },
  {
    item: '3.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Jakie rodzaje danych osobowych zbierane są przez Usługodawcę?</span>,
    en: <span>What kinds of personal data are gathered by the Service Provider?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Usługodawca może gromadzić informacje o Odwiedzających Serwis odnoszące się do ich zachowań w Serwisie, ich
        lokalizacji oraz rodzaju urządzeń wykorzystywanych do odwiedzania Serwisu.
      </span>
    ),
    en: (
      <span>
        The Service Provider may gather data regarding Service's Visitors regarding their behavior in the Service, their
        location and kinds of devices used during visiting the Service.
      </span>
    ),
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Założenie Konta Ogłoszeniodawcy w Serwisie może wymagać podania firmy przedsiębiorcy, logo, adresu email, numeru
        identyfikacji podatkowej, oraz danych adresowych.
      </span>
    ),
    en: (
      <span>
        Creating a Poster's Account in the Service may require providing the following information: business name, logo,
        email address, tax identification number, and address details.
      </span>
    ),
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Złożenie aplikacji na stanowisko objęte danym Ogłoszeniem Współpracy wymaga podania imienia, nazwiska, adresu
        email, oraz CV, a ponadto umożliwia podanie telefonu, adresu profilu na LinkedIn oraz adresu profilu na GitHub.
      </span>
    ),
    en: (
      <span>
        Applying for a position covered by a specific Job Posting requires providing the first name, last name, an email
        address, and CV. Additionally, it is also possible to provide a phone number, LinkedIn profile address, and
        GitHub profile address.
      </span>
    ),
  },
  {
    item: '4.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>W jaki sposób Usługodawca gromadzi dane osobowe?</span>,
    en: <span>By what means the Service Provider gathers the personal data?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        W odniesieniu do Odwiedzających dane osobowe gromadzone są poprzez zanonimizowaną, zsumowaną analizę ich
        zachowań w Serwisie przy zastosowaniu między innymi technologii, o których mowa w <u>Polityce Plików Cookies</u>
        .
      </span>
    ),
    en: (
      <span>
        In relation to Visitors, personal data is collected through anonymized, aggregated analysis of their behaviors
        in the Service, using technologies described, among others, in <u>the Cookie Policy</u>.
      </span>
    ),
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>W odniesieniu do Ogłoszeniodawców dane osobowe gromadzone są w trakcie tworzenia Konta.</span>,
    en: <span>Regarding Posters, personal data is collected during the creation of their Account.</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        W odniesieniu do osób aplikujących na stanowiska objęte Ogłoszeniami Współpracy, dane osobowe gromadzone są po
        wysłaniu przez te osoby formularza dostępnego przy tych ogłoszeniach w Serwisie.
      </span>
    ),
    en: (
      <span>
        For individuals applying for positions covered by Job Postings, personal data is collected after they submit the
        form available on these postings in the Service.
      </span>
    ),
  },
  {
    item: '5.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>W jakim celu Usługodawca przetwarza dane osobowe?</span>,
    en: <span>What is the purpose of data processing by the Service Provider?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Usługodawca przetwarza dane osobowe:</span>,
    en: <span>The Service Provider processes personal data:</span>,
  },
  {
    item: 'a)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        gdy jest to niezbędne w celu zapewnienia bezpieczeństwa Odwiedzających, Ogłoszeniodawców, Kandydatów oraz
        Serwisu,
      </span>
    ),
    en: <span>when necessary to ensure the safety of Visitors, Posters, Candidates, and the Service itself.</span>,
  },
  {
    item: 'b)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>w celu prowadzenia statystyki, gdy osoba, której dane dotyczą wyrazi na to zgodę,</span>,
    en: <span>for statistical purposes when the data subject has given their consent,</span>,
  },
  {
    item: 'c)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>w celu dostosowania treści marketingowych, gdy osoba, której dane dotyczą wyrazi na to zgodę,</span>,
    en: <span>for the purpose of customizing marketing content when the data subject has given their consent,</span>,
  },
  {
    item: 'd)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>w celu umożliwienia przeprowadzania transakcji płatności elektronicznych, oraz</span>,
    en: <span>to enable the conduct of electronic payment transactions, and</span>,
  },
  {
    item: 'e)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        w celu udostępnienia Ogłoszeniodawcy danych osobowych w odniesieniu do osoby, która złożyła aplikację na to
        stanowisko objęte danym Ogłoszeniem Współpracy poprzez formularz dostępny w Serwisie przy tym ogłoszeniu, w celu
        przeprowadzenia przez Ogłoszeniodawcę procesu rekrutacyjnego na to stanowisko, gdy osoba, której dane dotyczą
        wyrazi na to zgodę,
      </span>
    ),
    en: (
      <span>
        to make the personal data available to the Poster regarding a person who submitted an application for the
        position covered by a given Job Posting through the form available in the Service with that posting, for the
        purpose of the Poster conducting the recruitment process for that position, when the data subject gives their
        consent.,
      </span>
    ),
  },
  {
    item: 'f)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        w celu udostępnienia Ogłoszeniodawcy danych osobowych w odniesieniu do osoby, która wyraziła chęć na
        udostępnienie tych danych w celu prowadzenia przez Ogłoszeniodawcę przyszłych rekrutacji,
      </span>
    ),
    en: (
      <span>
        to make the personal data available to the Poster regarding a person who has expressed a desire to share this
        data for the purpose of the Poster conducting future recruitment processes.,
      </span>
    ),
  },
  {
    item: '6.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Czy dane osobowe przekazywane są podmiotom trzecim?</span>,
    en: <span>Is the personal data transferred to third parties?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Dane osobowe mogą być przekazywane Ogłoszeniodawcom zgodnie z Punktami 5(e) oraz 5(f) niniejszej Polityki
        Prywatności.
      </span>
    ),
    en: (
      <span>
        Personal data may be disclosed to Posters in accordance with Sections 5(e) and 5(f) of this Privacy Policy.
      </span>
    ),
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Ponadto, dla wypełnienia celów, o których mowa w Punkcie 5 niniejszej Polityki Prywatności, dane osobowe
        zbierane przez Usługodawcę mogą być przekazywane Zaufanym Partnerom.
      </span>
    ),
    en: (
      <span>
        Furthermore, to fulfill purposes referred to under Point 5 of this Privacy Policy, the personal data gathered by
        the Service Provider may be transferred to the Trusted Partners.
      </span>
    ),
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Usługodawca oraz Zaufani Partnerzy mogą przekazywać zbierane dane osobowe organom publicznym w przypadkach
        wymaganych przepisami prawa.
      </span>
    ),
    en: (
      <span>
        The Service Provider and the Trusted Partners may provide the public authorities with the collected personal
        data in the cases envisioned by the law.
      </span>
    ),
  },
  {
    item: '7.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Jaki jest zakres obowiązywania niniejszej Polityki w odniesieniu przekierowań?</span>,
    en: <span>What is the scope of this Privacy Policy with respect to redirects?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        W przypadku, w którym w Serwisie zawarte są przekierowania (<i>linki</i>) do innych serwisów internetowych
        Odwiedzający podążający za takim przekierowaniem przyjmuje do wiadomości, że niniejsza Polityka Prywatności nie
        znajduje zastosowania do tych serwisów internetowych, a proces przetwarzania tych danych odbywa się na zasadach
        i warunkach przewidzianych przez reguły odnoszące się do tych serwisów internetowych.
      </span>
    ),
    en: (
      <span>
        In the event that the Service contains redirections (links) to other web services, Visitors following such
        redirections acknowledge that this Privacy Policy does not apply to those web services. The processing of data
        on those web services occurs under the rules and conditions specified by the policies of those web services.
      </span>
    ),
  },
  {
    item: '8.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Jakie mam prawa w odniesieniu do moich danych osobowych?</span>,
    en: <span>What are my rights with respect to my personal data?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>W odniesieniu do Twoich danych osobowych przysługują Tobie prawa między innymi do:</span>,
    en: <span>With respect to your personal data you have, among others, the rights of:</span>,
  },
  {
    item: 'a)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>dostępu,</span>,
    en: <span>access,</span>,
  },
  {
    item: 'b)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>sprostowywania,</span>,
    en: <span>rectification,</span>,
  },
  {
    item: 'c)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>wyrażenia sprzeciwu co ich przetwarzania,</span>,
    en: <span>objection to the processing,</span>,
  },
  {
    item: 'd)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>żądania ograniczenia ich przetwarzania,</span>,
    en: <span>demanding processing restriction,</span>,
  },
  {
    item: 'e)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>żądania ich usunięcia,</span>,
    en: <span>demanding its erasure,</span>,
  },
  {
    item: 'f)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>cofnięcia wyrażonych zgód, oraz</span>,
    en: <span>withdrawal of the consents, and</span>,
  },
  {
    item: 'g)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>transferu.</span>,
    en: <span>transfer.</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Wykonanie powyższych praw pozostaje bez wpływu na dotychczasowe przetwarzanie, a ponadto może wiązać się z
        ograniczeniem funkcjonalności Serwisu, takich jak, między innymi, posiadanie Konta.
      </span>
    ),
    en: (
      <span>
        The execution of the abovementioned rights does not affect the past processing, and, furthermore, may be
        connected with limitation of the Service's functionality, such as, among others, Account possession.
      </span>
    ),
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Wykonanie powyższych praw następuje poprzez wysłanie pisma na adres rejestrowy Usługodawcy lub emaila na adres{' '}
        <i>kontakt@skillfind.tech</i> wskazujących wykonywane prawa.
      </span>
    ),
    en: (
      <span>
        The execution of the abovementioned rights is made through sending a letter to the Service Provider's registered
        address or an email to <i>contact@skillfind.tech</i> with indication of the rights being executed.
      </span>
    ),
  },

  {
    item: '9.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Czy dane osobowe przekazywane są poza EOG?</span>,
    en: <span>Is personal data transferred outside of EEA?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        W celach wskazanych w Punkcie 5. niniejszej Polityki Prywatności, Usługodawca korzysta z usług Zaufanych
        Partnerów mających siedziby na obszarze Europejskiego Obszaru Gospodarczego (EOG) lub w Stanach Zjednoczonych
        Ameryki. Gwarancje należytej ochrony danych osobowych przez Zaufanych Partnerów mających siedziby w Stanach
        Zjednoczonych opierają się między innymi, ale nie wyłącznie, na zobowiązaniach do stosowania przez te podmioty
        standardowych klauzul umownych przyjętych przez Komisję Unii Europejskiej oraz wydanych przez Komisję decyzjach
        o adekwatności.
      </span>
    ),
    en: (
      <span>
        For the purposes outlined in Point 5 of this Privacy Policy, the Service Provider utilizes services of Trusted
        Partners located within the European Economic Area (EEA) or in the United States of America. The Trusted
        Partners located in the United States ensure proper data protection guarantees based, among other factors, on
        commitments to apply standard contractual clauses adopted by the European Commission and decisions on adequacy
        issued by the Commission.
      </span>
    ),
  },
  {
    item: '10.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Jak długo przechowywane są dane osobowe przez Usługodawcę?</span>,
    en: <span>How long the personal data is stored by the Service Provider?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Dane osobowe przechowywane są przez Usługodawcę przez okres nieprzekraczający terminu przedawnienia roszczeń w
        odniesieniu do relacji łączących Usługodawcę z daną osobą.
      </span>
    ),
    en: (
      <span>
        The personal data is stored by the Service Provider for the period not surpassing the period of limitation with
        respect to relations connecting the Service Provider with a given person.
      </span>
    ),
  },
]
