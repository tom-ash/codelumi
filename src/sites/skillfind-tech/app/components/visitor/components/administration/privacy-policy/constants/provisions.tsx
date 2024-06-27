import React from 'react'

const versions = {
  '1.0': '2021.06.01',
}

export const provisions = [
  {
    item: '1.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Jaki podmiot jest administratorem danych osobowych?</span>,
    en: <span>Which entity is the Service Provider of the personal data?</span>,
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
        {/* the Service Provider of the personal data gathered in the Service with the meaning of the Regulation (EU) 2016/679
        of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard
        to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC
        (General Data Protection Regulation) is the Service Provider, i.e. Warsaw Digital Sp. z o.o., with its registered
        office in Warsaw. */}
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
        Serwisem, do którego dostęp uzyskuje się poprzez przekierowanie z Serwisu na adres podany przy Ogłoszeniu przez
        Ogłoszeniodawcę, wyłącznym administratorem danych osobowych zebranych poprzez taki formularz jest
        Ogłoszeniodawca lub podmiot przetwarzający te dane w jego imieniu i podmioty te są wyłącznie odpowiedzialne za
        przetwarzanie tych danych osobowych, a Usługodawca w tym zakresie nie występuje w roli administratora.
      </span>
    ),
    en: <span>TODO</span>,
  },

  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Ponadto, Usługodawca umożliwia zaaplikowanie na stanowisko objęte danym Ogłoszeniem Współpracy poprzez formularz
        aplikacyjny znajdujący się na stronie Usługodawcy przy danym Ogłoszeniu. W takiej sytuacji zebrane od Kandydata
        dane osobowe udostępniane są Ogłoszeniodawcy w celu przeprowadzenia procesu rekrutacyjnego, a Ogłoszeniodawca
        również staje się administratorem tych danych osobowych i jest wyłącznie odpowiedzialny za przetwarzanie tych
        danych osobowych w tym zakresie, a Usługodawca w tym zakresie nie występuje w roli administratora. Usługodawca
        zachowuje udostępnione Ogłoszeniodawcy dane osobowe tylko w celu zabezpieczenia się przed ewentualnymi
        roszczeniami w przyszłości, a po okresie przedawnienia ewentualnych roszczeń dane te są usuwane.
      </span>
    ),
    en: <span>TODO</span>,
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
        In this Privacy Policy, as well as in the Terms of Service as a whole, entities rendering to the Service
        Provider the services of data hosting, email and phone messaging, map generation, statistics, and cooperating
        with the Service Provider with regard to marketing content are considered Trusted Partners.
      </span>
    ),
  },
  {
    item: '3.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Jakie rodzaje danych osobowych zbierane są przez Usługodawcy?</span>,
    en: <span>What kinds of personal data are gathered by the Service Provider?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Założenie Konta w Serwisie wymaga podania adresu email oraz hasła, a ponadto imienia w przypadku Konta
        Prywatnego albo firmy (nazwy) przedsiębiorcy w przypadku Konta firmowego. Wystawienie faktury może wymagać
        podania dalszych danych.
      </span>
    ),
    en: (
      <span>
        The registration of an Account in the Service requires provision of an email and a password, and furthermore a
        first name in case of the Private Account or a business name in case of the Business Account. Invoice issuance
        may require provision of additional data.
      </span>
    ),
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Ponadto, Usługodawca może gromadzić informacje o Odwiedzających Serwis odnoszące się do ich zachowań w Serwisie,
        ich lokalizacji oraz rodzaju urządzeń wykorzystywanych do odwiedzania serwisu.
      </span>
    ),
    en: (
      <span>
        Furthermore, the Service Provider may gather data regarding Service's Visitors regarding their behavior in the
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
        Usługodawcy.
      </span>
    ),
    en: (
      <span>
        The data referred to above is hosted on the servers of entites providing hosting services to the Service
        Provider.
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
        Usługodawca gromadzi dane osobowe pozyskane od Użytkowników przy tworzeniu i zmianie danych Konta oraz od
        Odwiedzających poprzez zanonimizowaną, zsumowaną analizę ich zachowań w Serwisie przy zastosowaniu między innymi
        technologii, o których mowa w <u>Polityce Plików Cookies</u>.
      </span>
    ),
    en: (
      <span>
        the Service Provider gathers personal data acquired from the Users at the Account registration and changing
        Account data, and, from the Visitors through anonymised, combined analysis of their behaviour through usage of -
        among others - technologies reffered to under the <u>Cookies Policy</u>.
      </span>
    ),
  },
  {
    item: '5.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>W jakim celu Usługodawca zbiera dane osobowe</span>,
    en: <span>What is the purpose of gathering of the personal data by the Service Provider?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Usługodawca zbiera dane osobowe w celu:</span>,
    en: <span>the Service Provider gathers personal data to:</span>,
  },
  {
    item: 'a)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>zapewnienia bezpieczeństwa Odwiedzających, Ogłoszeniodawców, Kandydatów oraz Serwisu,</span>,
    en: <span>ensure safety of the Visitors, the Posters and the Service,</span>,
  },
  {
    item: 'b)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>prowadzenia statystyki,</span>,
    en: <span>to maintain statistics,</span>,
  },
  {
    item: 'c)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>dostosowania treści marketingowych do preferencji Odwiedzających, oraz</span>,
    en: <span>adjust marketing content to Visitors' preferences, and</span>,
  },
  {
    item: 'd)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>umożliwienia przeprowadzania transakcji płatności elektronicznych.</span>,
    en: <span>enable electronic payments.</span>,
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
        Dla wypełnienia celów, o których mowa w Punkcie 5 niniejsze Polityki Prywatności, dane osobowe zbierane przez
        Usługodawcy mogą być przekazywane Zaufanym Partnerom.
      </span>
    ),
    en: (
      <span>
        To fulfill purposes referred to under Point 5 of this Privacy Policy, the personal data gathered by the Service
        Provider may be transferred to the Trusted Partners.
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
        the Service Provider and the Trusted Partners may provide the public authorities with the personal data in the
        cases envisioned by the law.
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
        W przypadku, w którym w Serwisie zawarte są przekierowania (<i>linki</i>) Odwiedzający podążający za takim
        przekierowaniem przyjmuje do wiadomości, że niniejsza Polityka Prywatności nie znajduje zastosowania do tych
        stron, a proces przetwarzania tych danych odbywa się na zasadach i warunkach przewidzianych przez reguły
        odnoszące się do tych stron.
      </span>
    ),
    en: (
      <span>
        In case in which the Service includes redirests (<i>links</i>) the Visitor following such a redirect
        acknowledges that this Privacy Policy is not applicable to those websites, and data processing is governed by
        the terms and conditions envisioned by the rules relevant to those websites.
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
        Wykonanie powyższych praw następuje poprzez wysłanie pisma na adres korespondencyjny Usługodawcy lub emaila na
        adres <i>kontakt@warsaw.digital</i> wskazujących wykonywane prawa.
      </span>
    ),
    en: (
      <span>
        The execution of the abovementioned rights is made through sending a letter to the Service Provider's
        correspondence address or an email to <i>contact@warsaw.digital</i> with indication of the rights being
        executed.
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
        Partnerów mających siedziby na obszarze Europejskiego Obszaru Gospodarczego (EOG) lub w Stanach Zjednoczonych. W
        związku z tym dane osobowe mogą być przekazywane poza granice EOG. Gwarancje należytej ochrony danych osobowych
        przez Zaufanych Partnerów mających siedziby w Stanach Zjednoczonych opierają się między innymi, ale nie
        wyłącznie, na zobowiązaniach do stosowania przez te podmioty standardowych klauzul umownych przyjętych przez
        Komisję Unii Europejskiej oraz wydanych przez Komisję decyzjach o adekwatności.
      </span>
    ),
    en: (
      <span>
        {/* With the purposes referred to under Point 5 of this Privacy Policy, the Service Provider employs the services of
        Trusted Partners with registered offices within the European Economic Area and/or in the United States.
        Therefore, the personal data may be transferred outside of EEA. The guarantees of the proper protection of the
        personal data by the Trusted Partners with their registered offices in United States are based, among others, on
        the obligations of those entities to apply standard contractual clauses approved by the Commission of the
        European Union and the participation in the Privacy Shield program. */}
      </span>
    ),
  },
  {
    item: '10.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Jak długo przechowywane są dane osobowe przez Usługodawcy?</span>,
    en: <span>How long the personal data is stored by the Service Provider?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Dane osobowe przechowywane są przez Usługodawcy przez okres nieprzekraczający terminu przedawnienia roszczeń w
        odniesieniu do relacji łączących Usługodawcy z daną osobą.
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
