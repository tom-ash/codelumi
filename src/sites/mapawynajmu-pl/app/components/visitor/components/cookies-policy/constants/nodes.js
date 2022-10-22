import React from 'react'

const versions = {
  '1.0': '2020.01.01',
}

const nodes = [
  {
    item: '1.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Czym są Pliki Cookies?</span>,
    en: <span>What are Cookies?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Przez "Pliki Cookies" w niniejszej Polityce Cookies, jak i w Regulaminie w ogólności, rozumiane są dane
        informatyczne, takie jak standardowe cookies, sesyjny magazyn (ang. <i>session storage</i>), lokalny magazyn
        (ang. <i>local storage</i>), itp., przechowywane na urządzeniach Odwiedzających, takich jak, np. komputer,
        telefon lub tablet, wysyłane na te urządzenia przez Serwis.
      </span>
    ),
    en: (
      <span>
        As Cookies this Cookies Policy, and the Terms of Service as a whole, understand electronic data, such as
        standard cookies, session storage, local storage, etc., stored on the Visitors' devices, such as, for example,
        computer, phone and/or a tablet, send to those devices by the Service.
      </span>
    ),
  },

  {
    item: '2.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>W jaki sposób wykorzystywane są Pliki Cookies w Serwisie?</span>,
    en: <span>In what manner Cookies are used in the Service?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Serwis wykorzystuje Pliki Cookies w celu zapewnienia swojego należytego funkcjonowania. Korzystanie z Serwisu
        bez zmiany ustawień przeglądarki w odniesieniu do Plików Cookies oznacza, że dane informatyczne pochodzące od
        Administratora oraz Zaufanych Partnerów wysyłane z Serwisu będą zapisywane w pamięci urządzenia.
      </span>
    ),
    en: (
      <span>
        The Service uses the Cookies to ensure its proper functioning. Using of the Service without changing the
        browser's settings with respect to Cookies means that the electronic data from the Administrator and its Trusted
        Partners sent through the Service shall be stored in the device's memory.
      </span>
    ),
  },

  {
    item: '3.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>W jakim celu wykorzystywane są Pliki Cookies w Serwisie?</span>,
    en: <span>What is the purpose of using Cookies in the Service?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Pliki Cookies umożliwiają Serwisowi między innymi: zapewnienie bezpieczeństwa, wprowadzenie funkcjonalności
        tworzenia i logowania do Konta przez Użytkowników, zapamiętywanie tych zalogowań pomiędzy sesjami,
        zapamiętywanie wyborów Odwiedzających, prowadzenie statystyk oraz personalizowania funkcjonalności Serwisu
        oraz&nbsp;treści marketingowych zawartych w Serwisie.
      </span>
    ),
    en: (
      <span>
        Cookies allow the Service, among other things, to ensure security, introduction of functionality of Account
        registration and logging in by Users, remembering those logons throughout sessions, remembering of choices of
        Visitors, maintainig statistics and personalization of Service's features and marketing content included
        therein.
      </span>
    ),
  },
  {
    item: '4.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Jakie są rodzaje Plików Cookies wykorzystywanych w Serwisie?</span>,
    en: <span>What are the kinds of Cookies used in the Service?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Serwis wykorzystuje Pliki Cookies, które ze względu na swój cel można podzielić na trzy kategorie: niezbędne,
        statystyczne oraz marketingowe. Korzystanie z Serwisu oznacza akceptację Plików Cookies o niezbędnym
        charakterze. Odwiedzający może odmówić zgody na otrzymywanie Plików Cookies statystycznych oraz marketingowych.
      </span>
    ),
    en: (
      <span>
        The Service uses Cookies, which, based on their purpose, can be divided into three categories: indispensable,
        statistical and marketing. Using of the Service means the acceptance of the indispensalbe Cookies. A Visitor is
        free to not consent to using by the Service of statistical and marketing Cookies.
      </span>
    ),
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Ze względu na długość przechowywania Pliki Cookies mogą być podzielone na dwa rodzaje: sesyjne oraz czasowe.
        Pliki Cookies sesyjne wykasowywane są po zamknięciu przeglądarki, natomiast czasowe pozostają na urządzeniu
        Odwiedzającego przez określony czas. W Serwisie wykorzystywane są oba te rodzaje Plików Cookies.
      </span>
    ),
    en: (
      <span>
        With respect to the period of storage Cookies can be divided into two kinds: session and periodic. The session
        Cookies are erased after closing of the web browser, and periodic Cookies remain on the device of the Visitor
        for a specified period. Both kinds of Cookies are used by the Service.
      </span>
    ),
  },
  {
    item: '5',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Czy mogę nie zgodzić się na stosowanie Plików Cookies?</span>,
    en: <span>Can I not consent to using of Cookies?</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Podczas pierwszego odwiedzenia Serwisu, jak i w każdym momencie później, Odwiedzający może odmówić zgody na
        otrzymywanie Plików Cookies o charakterze statystycznym lub marketingowym z Serwisu.
      </span>
    ),
    en: (
      <span>
        During first visiting of the Service, as well as in any other moment, the Visitor may refuse its consent to
        receiving of statistical and/or marketing Cookies from the Service.
      </span>
    ),
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Ponadto, w ustawieniach przeglądarki istnieje możliwość zarządzania otrzymywaniem Plików Cookies.</span>,
    en: (
      <span>
        Furthermore, in the web browser's settings there is a possibility of management of receiving of the Cookies.
      </span>
    ),
  },
]

export default nodes
