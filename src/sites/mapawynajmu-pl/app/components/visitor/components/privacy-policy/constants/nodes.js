import React from 'react'

const versions = {
  '1.0': '2020.01.01',
  1.1: '2020.03.12',
}

const nodes = [
  {
    item: '1.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Jaki podmiot jest administratorem danych osobowych?</span>,
    en: <span>Which entity is the administrator of the personal data?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Administratorem zbieranych w Serwisie danych osobowych w rozumieniu Rozporządzenia Parlamentu Europejskiego i
        Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w&nbsp;sprawie ochrony osób fizycznych w związku z przetwarzaniem
        danych osobowych i w sprawie swobodnego przepływu takich danych oraz&nbsp;uchylenia dyrektywy 95/46/WE (ogólne
        rozporządzenie o ochronie danych) jest Administrator, czyli Warsaw Digital Sp. z o.o., z siedzibą
        w&nbsp;Warszawie.
      </span>
    ),
    en: (
      <span>
        The administrator of the personal data gathered in the Service with the meaning of the Regulation (EU) 2016/679
        of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard
        to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC
        (General Data Protection Regulation) is the Administrator, i.e. Warsaw Digital Sp. z o.o., with its registered
        office in Warsaw.
      </span>
    ),
  },
  {
    item: '2.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Kim są Zaufani Partnerzy Administratora?</span>,
    en: <span>Who are the Trusted Partners of the Administrator?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        W niniejsze Polityce Prywatności, jak i w całym Regulaminie, przez Zaufanych Partnerów rozumie się podmioty
        świadczące na rzecz Administratora usługi hostingu danych, wysyłania wiadomości email oraz sms, generowania map,
        prowadzenia statystyki, oraz współpracujące z Administratorem w odniesieniu do wyświetlania treści
        marketingowych.
      </span>
    ),
    en: (
      <span>
        In this Privacy Policy, as well as in the Terms of Service as a whole, entities rendering to the Administrator
        the services of data hosting, email and phone messaging, map generation, statistics, and cooperating with the
        Administrator with regard to marketing content are considered Trusted Partners.
      </span>
    ),
  },
  {
    item: '3.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Jakie rodzaje danych osobowych zbierane są przez Administratora?</span>,
    en: <span>What kinds of personal data are gathered by the Administrator?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.1'],
    pl: (
      <span>
        Założenie Konta w Serwisie wymaga podania adresu email, numeru telefonu oraz hasła, a ponadto imienia w
        przypadku Konta Prywatnego albo firmy (nazwy) przedsiębiorcy w przypadku Konta firmowego. Wystawienie faktury
        może wymagać podania dalszych danych.
      </span>
    ),
    en: (
      <span>
        The registration of an Account in the Service requires provision of an email, phone number and password, and
        furthermore a first name in case of the Private Account or a business name in case of the Business Account.
        Invoice issuance may require provision of additional data.
      </span>
    ),
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Ponadto, Administrator może gromadzić informacje o Odwiedzających Serwis odnoszące się do ich zachowań w
        Serwisie, ich lokalizacji oraz rodzaju urządzeń wykorzystywanych do odwiedzania serwisu.
      </span>
    ),
    en: (
      <span>
        Furthermore, the Administrator may gather data regarding Service's Visitors regarding their behavior in the
        Service, their location and kinds of devices used during visiting the Service.
      </span>
    ),
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Dane, o których mowa powyżej przechowywane są na serwerach usługodawców świadczących usługi hostingu na rzecz
        Administratora.
      </span>
    ),
    en: (
      <span>
        The data referred to above is hosted on the servers of entites providing hosting services to the Administrator.
      </span>
    ),
  },
  {
    item: '4.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Jakie dane osobowe są udostępniane publicznie?</span>,
    en: <span>What kinds of personal data are available publicly?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.1'],
    pl: (
      <span>
        Przy każdym dodanym Ogłoszeniu numer telefonu Ogłoszeniodawcy oraz jego imię w przypadku Konta Prywatnego albo
        firma (nazwa) w przypadku Konta firmowego dostępne są publicznie.
      </span>
    ),
    en: (
      <span>
        With each added Announcement the phone number of its Announcer and furthermore the Announcer's first name in
        case of the Private Account or a business name in case of the Business Account are available publicly.
      </span>
    ),
  },
  {
    item: '5.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>W jaki sposób Administrator gromadzi dane osobowe?</span>,
    en: <span>By what means the Administrator gathers the personal data?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Administrator gromadzi dane osobowe pozyskane od Użytkowników przy tworzeniu i&nbsp;zmianie danych Konta oraz od
        Odwiedzających poprzez zanonimizowaną, zsumowaną analizę ich zachowań w Serwisie przy zastosowaniu między innymi
        technologii, o których mowa w <u>Polityce Plików Cookies</u>.
      </span>
    ),
    en: (
      <span>
        The Administrator gathers personal data acquired from the Users at the Account registration and changing Account
        data, and, from the Visitors through anonymised, combined analysis of their behaviour through usage of - among
        others - technologies reffered to under the <u>Cookies Policy</u>.
      </span>
    ),
  },
  {
    item: '6.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>W jakim celu Administrator zbiera dane osobowe</span>,
    en: <span>What is the purpose of gathering of the personal data by the Administrator?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Administrator zbiera dane osobowe w celu:</span>,
    en: <span>The Administrator gathers personal data to:</span>,
  },
  {
    item: 'a)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>umożliwienia korzystania z Serwisu, w tym, między innymi, dodawania Ogłoszeń,</span>,
    en: <span>enable usage of the Service, including, among others, adding Announcements,</span>,
  },
  {
    item: 'b)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>zapewnienia bezpieczeństwa Użytkowników, Ogłoszeniodawców, Odwiedzających oraz Serwisu,</span>,
    en: <span>ensure safety of the Users, Announcers, Visitors and the Service,</span>,
  },
  {
    item: 'c)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>prowadzenia statystyki,</span>,
    en: <span>to maintain statistics,</span>,
  },
  {
    item: 'd)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>dostosowania treści marketingowych do preferencji Odwiedzających, oraz</span>,
    en: <span>adjust marketing content to Visitors' preferences, and</span>,
  },
  {
    item: 'e)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>umożliwienia przeprowadzania transakcji płatności elektronicznych.</span>,
    en: <span>enable electronic payments.</span>,
  },
  {
    item: '7.',
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
        Dla wypełnienia celów, o których mowa w Punkcie 6 niniejsze Polityki Prywatności, dane osobowe zbierane przez
        Administratora mogą być przekazywane Zaufanym Partnerom.
      </span>
    ),
    en: (
      <span>
        To fulfill purposes referred to under Point 6 of this Privacy Policy, the personal data gathered by the
        Administrator may be transferred to the Trusted Partners.
      </span>
    ),
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Administrator oraz Zaufani Partnerzy mogą przekazywać zbierane dane osobowe organom publicznym w przypadkach
        wymaganych przepisami prawa.
      </span>
    ),
    en: (
      <span>
        The Administrator and the Trusted Partners may provide the public authorities with the personal data in the
        cases envisioned by the law.
      </span>
    ),
  },
  {
    item: '8.',
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
        W przypadku, w którym w Serwisie zawarte są przekierowania (<i>linki</i>) lub Ogłoszeniodawcy zawierają w treści
        ogłoszeń przekierowania do stron internetowych innych niż Serwis, Odwiedzający podążający za takim
        przekierowaniem przyjmuje do wiadomości, że niniejsza Polityka Prywatności nie znajduje zastosowania do tych
        stron, a&nbsp;proces przetwarzania tych danych odbywa się na zasadach i warunkach przewidzianych przez reguły
        odnoszące się do tych stron.
      </span>
    ),
    en: (
      <span>
        In case in which the Service includes redirests (<i>links</i>) and/or Announcers include in their Announcements
        redirects to websites other than the Service, the Visitor following such a redirect acknowledges that this
        Privacy Policy is not applicable to those websites, and data processing is governed by the terms and conditions
        envisioned by the rules relevant to those websites.
      </span>
    ),
  },
  {
    item: '9.',
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
        Wykonanie powyższych praw pozostaje bez wpływu na dotychczasowe przetwarzanie, a&nbsp;ponadto może wiązać się z
        ograniczeniem funkcjonalności Serwisu, takich jak, między innymi, posiadanie Konta oraz&nbsp;dodawanie Ogłoszeń.
      </span>
    ),
    en: (
      <span>
        The execution of the abovementioned rights does not affect the past processing, and, furthermore, may be
        connected with limitation of the Service's functionality, such as, among others, Account possession and adding
        Announcements.
      </span>
    ),
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Wykonanie powyższych praw następuje poprzez wysłanie pisma na adres korespondencyjny Administratora lub emaila na adres <i>kontakt@mapawynajmu.pl</i> wskazujących wykonywane prawa.
      </span>
    ),
    en: (
      <span>
        The abovementioned rights are exercised through sending a letter to the Administrator's correspondence address or an email to <i>contact@mapawynajmu.pl</i> with indication of the rights being executed.
      </span>
    ),
  },
  {
    item: '10.',
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
        W celach wskazanych w Punkcie 6. niniejszej Polityki Prywatności, Administrator korzysta z usług Zaufanych
        Partnerów mających siedziby na obszarze Europejskiego Obszaru Gospodarczego (EOG) lub w Stanach Zjednoczonych. W
        związku z tym dane osobowe mogą być przekazywane poza granice EOG. Gwarancje należytej ochrony danych osobowych
        przez Zaufanych Partnerów mających siedziby w Stanach Zjednoczonych opierają się między innymi na zobowiązaniach
        do stosowania przez te podmioty standardowych klauzul umownych przyjętych przez Komisję Unii Europejskiej
        oraz&nbsp;uczestnictwa w Tarczy Prywatności (ang. Privacy Shield).
      </span>
    ),
    en: (
      <span>
        With the purposes referred to under Point 6 of this Privacy Policy, the Administrator employs the services of
        Trusted Partners with registered offices within the European Economic Area and/or in the United States.
        Therefore, the personal data may be transferred outside of EEA. The guarantees of the proper protection of the
        personal data by the Trusted Partners with their registered offices in United States are based, among others, on
        the obligations of those entities to apply standard contractual clauses approved by the Commission of the
        European Union and the participation in the Privacy Shield program.
      </span>
    ),
  },
  {
    item: '11.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Jak długo przechowywane są dane osobowe przez Administratora?</span>,
    en: <span>How long the personal data is stored by the Administrator?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Dane osobowe przechowywane są przez Administratora przez okres nieprzekraczający terminu przedawnienia roszczeń
        w odniesieniu do relacji łączących Administratora z daną osobą.
      </span>
    ),
    en: (
      <span>
        The personal data is stored by the Administrator for the period not surpassing the period of limitation with
        respect to relations connecting the Administrator with a given person.
      </span>
    ),
  },
]

export default nodes
