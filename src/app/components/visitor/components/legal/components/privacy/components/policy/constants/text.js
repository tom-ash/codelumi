import React from 'react'

const versions = {
  '1.0': '1.0 (2019.07.28)'
}
export const text = [
  {
    item: '1.', tier: 'header', version: versions['1.0'],
    polish: <span>Jaki podmiot jest administratorem danych osobowych?</span>,
    english: <span>Which entity is the administrator of the personal data?</span>
  },
  {
    item: '', tier: 'point', version: versions['1.0'],
    polish: <span>Administratorem zbierancyh w Serwisie danych osobowych w rozumieniu Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w&nbsp;sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz&nbsp;uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) jest Administrator, czyli Warsaw Digital Sp. z o.o., z siedzibą w&nbsp;Warszawie.</span>,
    english: <span>The administrator of the personal data gathered in the Service with the meaning of the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation) is the Administrator, i.e. Warsaw Digital Sp. z o.o., with its registered office in Warsaw.</span>
  },
  {
    item: '2.', tier: 'header', version: versions['1.0'],
    polish: <span>Kim są Zaufani Partnerzy Administratora?</span>,
    english: <span>Who are the Trusted Partners of the Administrator?</span>
  },
  {
    item: '', tier: 'point', version: versions['1.0'],
    polish: <span>W niniejsze Polityce Prywatności, jak i w całym Regulaminie, przez Zaufanych Partnerów rozumie się podmioty świadczące na rzecz Administratora usługi hostingu danych, wysyłania wiadomości email oraz sms, generowania map, prowadzenia statystyki, oraz współpracujące z Administratorem w odniesieniu do wyświetlania treści marketingowych.</span>,
    english: <span>In this Privacy Policy, as well as in the Terms of Service as a whole, entities rendering to the Administrator the services of data hosting, email and phone messaging, map generation, statistics, and cooperating with the Administrator with regard to marketing content are considered Trusted Partners.</span>
  },
  {
    item: '3.', tier: 'header', version: versions['1.0'],
    polish: <span>Jakie rodzaje danych osobowych zbierane są przez Administratora?</span>,
    english: <span>What kinds of personal data are gathered by the Administrator?</span>
  },
  {
    item: '', tier: 'point', version: versions['1.0'],
    polish: <span>Założenie Konta w Serwisie wymaga podania firmy (nazwy) przedsiębiorcy oraz jego numer telefonu. Ponadto, przedsiębiorca lub osoba reprezentująca przedsiębiorcę przy zakładaniu konta podaje swój adres email oraz hasło. Wystawienie faktury może wymagać podania dalszych danych, takich jak NIP oraz adres przedsiębiorcy.</span>,
    english: <span>The registration of an Account in the Service requires provision of the business name of the entrepreneur and its phone number. Furthermore, the entrepreneur or the person representing the entrepreneur at the Account registration provides its email address and password. Invoice issuance may require provision of additional data, such as tax ID number of the entreprenur and its address.</span>
  },
  {
    item: '', tier: 'point', version: versions['1.0'],
    polish: <span>Ponadto, Administrator może gromadzić informacje o Odwiedzającyh Serwis odnoszące się do ich zachowań w Serwisie oraz rodzaju urządzeń wykorzystywanych do odwiedzania serwisu.</span>,
    english: <span>Furthermore, the Administrator may gather data regarding Service's Visitors regarding their behavior in the Service and kinds of devices used during visiting the Service.</span>
  },
  {
    item: '', tier: 'point', version: versions['1.0'],
    polish: <span>Dane, o których mowa powyżej przechowywane są na serwerach usługodawców świadczących usługi hostingu na rzecz Administratora. W bazie danych Administratora firma (nazwa) przedsiębiorcy, numer NIP, numer telefonu oraz adres email są szyfrowane, a hasło podwójnie haszowane (ang. <i>hashing</i>).</span>,
    english: <span>The data referred to above is hosted on the servers of entites providing hosting services to the Administrator. In the Administrator's database the business name, NIP (tax ID) number, phone number and email address are encrypted, and the password is doubly hashed.</span>
  },
  {
    item: '4.', tier: 'header', version: versions['1.0'],
    polish: <span>Jakie dane osobowe są udostępniane publicznie?</span>,
    english: <span>What kinds of personal data are available publicly?</span>
  },
  {
    item: '', tier: 'point', version: versions['1.0'],
    polish: <span>Przy każdym dodanym Ogłoszeniu dostępny jest publicznie numer telefonu Ogłoszeniodawcy oraz jego firma (nazwa).</span>,
    english: <span>With each added Announcement the phone number and the business name of its Announcer are available publicly.</span>
  },
  {
    item: '5.', tier: 'header', version: versions['1.0'],
    polish: <span>W jaki sposób Administrator gromadzi dane osobowe?</span>,
    english: <span>By what means the Administrator gathers the personal data?</span>
  },
  {
    item: '', tier: 'point', version: versions['1.0'],
    polish: <span>Administrator gromadzi dane osobowe pozyskane od Użytkowników przy tworzeniu i zmianie danych Konta oraz od Odwiedzających poprzez zanonimizowaną, zsumowaną analizę ich zachowań w Serwisie przy zastosowaniu między innymi technologii, o których mowa w <u>Polityce Plików Cookies</u>.</span>,
    english: <span>The Administrator gathers personal data acquired from the Users at the Account registration and changing Account data, and, from the Visitors through anonymised, combined analysis of their behaviour through usage of - among others - technologies reffered to under the <u>Cookies Policy</u>.</span>
  },
  {
    item: '6.', tier: 'header', version: versions['1.0'],
    polish: <span>W jakim celu Administrator zbiera dane osobowe</span>,
    english: <span>What is the purpose of gathering of the personal data by the Administrator?</span>
  },
  {
    item: '', tier: 'point', version: versions['1.0'],
    polish: <span>Administrator zbiera dane osobowe w celu:</span>,
    english: <span>The Administrator gathers personal data to:</span>
  },
  {
    item: 'a)', tier: 'subpoint', version: versions['1.0'],
    polish: <span>umożliwienia korzystania z Serwisu, w tym, między innymi, dodawania Ogłoszeń,</span>,
    english: <span>enable usage of the Service, including, among others, adding Announcements,</span>
  },
  {
    item: 'b)', tier: 'subpoint', version: versions['1.0'],
    polish: <span>zapewnienia bezpieczeństwa Użytkowników, Ogłoszeniodawców, Odwiedzających oraz Serwisu,</span>,
    english: <span>ensure safety of the Users, Announcers, Visitors and the Service,</span>
  },
  {
    item: 'c)', tier: 'subpoint', version: versions['1.0'],
    polish: <span>prowadzenia statystyki,</span>,
    english: <span>to maintain statistics,</span>
  },
  {
    item: 'd)', tier: 'subpoint', version: versions['1.0'],
    polish: <span>dostosowania treści marketingowych do preferencji Odwiedzających, oraz</span>,
    english: <span>adjust marketing content to Visitors' preferences, and</span>
  },
  {
    item: 'e)', tier: 'subpoint', version: versions['1.0'],
    polish: <span>umożliwienia przeprowadzania transakcji płatności elektronicznych.</span>,
    english: <span>enable electronic payments.</span>
  },
  {
    item: '7.', tier: 'header', version: versions['1.0'],
    polish: <span>Czy dane osobowe przekazywane są podmiotom trzecim?</span>,
    english: <span>Is the personal data transferred to third parties?</span>
  },
  {
    item: '', tier: 'point', version: versions['1.0'],
    polish: <span>Dla wypełnienia celów, o których mowa w Punkcie 6 niniejsze Polityki Prywatności, dane osobowe zbierane przez Administratora mogą być przekazywane Zaufanym Partnerom.</span>,
    english: <span>To fulfill purposes referred to under Point 6 of this Privacy Policy, the personal data gathered by the Administrator may be transferred to the Trusted Partners.</span>
  },
  {
    item: '', tier: 'point', version: versions['1.0'],
    polish: <span>Administrator oraz Zaufani Partnerzy mogą przekazywać zbierane dane osobowe organom publicznym w przypadkach wymaganych przepisami prawa.</span>,
    english: <span>The Administrator and the Trusted Partners may provide the public authorities with the personal data in the cases envisioned by the law.</span>
  },
  {
    item: '8.', tier: 'header', version: versions['1.0'],
    polish: <span>Jaki jest zakres obowiązywania niniejszej Polityki w odniesieniu przekierowań?</span>,
    english: <span>What is the scope of this Privacy Policy with respect to redirects?</span>
  },
  {
    item: '', tier: 'point', version: versions['1.0'],
    polish: <span>W przypadku, w którym w Serwisie zawarte są przekierowania (<i>linki</i>) lub Ogłoszeniodawcy zawierają w treści ogłoszeń przekierowania do stron internetowych innych niż Serwis, Odwiedzający podążający za takim przekierowaniem przyjmuje do wiadomości, że niniejsza Polityka Prywatności nie znajduje zastosowania do tych stron, a&nbsp;proces przetwarzania tych danych odbywa się na zasadach i warunkach przewidzianych przez regułu odnoszące się do tych stron.</span>,
    english: <span>In case in which the Service includes redirests (<i>links</i>) and/or Announcers include in their Announcements redirects to websites other than the Service, the Visitor following such a redirect acknowledges that this Privacy Policy is not applicable to those websites, and data processing is governed by the terms and conditions envisioned by the rules relevant to those websites.</span>
  },
  {
    item: '9.', tier: 'header', version: versions['1.0'],
    polish: <span>Jakie mam prawa w odniesieniu do moich danych osobowych?</span>,
    english: <span>What are my rights with respect to my personal data?</span>
  },
  {
    item: '', tier: 'point', version: versions['1.0'],
    polish: <span>W odniesieniu do Twoich danych osobowych przysługują Tobie prawa między innymi do:</span>,
    english: <span>With respect to your personal data you have, among others, the rights of:</span>
  },
  {
    item: 'a)', tier: 'subpoint', version: versions['1.0'],
    polish: <span>dostępu,</span>,
    english: <span>access,</span>
  },
  {
    item: 'b)', tier: 'subpoint', version: versions['1.0'],
    polish: <span>sprostowywania,</span>,
    english: <span>rectification,</span>
  },
  {
    item: 'c)', tier: 'subpoint', version: versions['1.0'],
    polish: <span>wyrażenia sprzeciwu co ich przetwarzania,</span>,
    english: <span>objection to the processing,</span>
  },
  {
    item: 'c)', tier: 'subpoint', version: versions['1.0'],
    polish: <span>żądania ograniczenia ich przetwarzania,</span>,
    english: <span>demanding processing restriction,</span>
  },
  {
    item: 'd)', tier: 'subpoint', version: versions['1.0'],
    polish: <span>żądania ich usunięcia,</span>,
    english: <span>demanding its erasure,</span>
  },
  {
    item: 'd)', tier: 'subpoint', version: versions['1.0'],
    polish: <span>cofnięcia wyrażonych zgód, oraz</span>,
    english: <span>withdrawal of the consents, and</span>
  },
  {
    item: 'e)', tier: 'subpoint', version: versions['1.0'],
    polish: <span>transferu.</span>,
    english: <span>transfer.</span>
  },
  {
    item: '', tier: 'point', version: versions['1.0'],
    polish: <span>Wykonanie powyższych praw pozostaje bez wpływu na dotychczasowe przetwarzanie, a ponadto może wiązać się z ograniczeniem funkcjonalności Serwisu, takich jak, między innymi, posiadanie Konta oraz&nbsp;dodawanie Ogłoszeń.</span>,
    english: <span>The execution of the abovementioned rights does not influence the past processing, and, furthermore, may be connected with limitation of the Service's functionality, such as, among others, Account possession and adding Announcements.</span>
  },
  {
    item: '', tier: 'point', version: versions['1.0'],
    polish: <span>Wykonanie powyższych praw następuje poprzez wysłanie pisma na adres korespondencyjny Administratora lub emaila na adres <i>kontakt@warsaw.digital</i> wskazujących wykonywane prawa.</span>,
    english: <span>The execution of the abovementioned rights is made through sending a letter to the Administrator's correspondence address or an email to <i>contact@warsaw.digital</i> with indication of the rights being executed.</span>
  },
  {
    item: '10.', tier: 'header', version: versions['1.0'],
    polish: <span>Czy dane osobowe przekazywane są poza EOG?</span>,
    english: <span>Is personal data transferred outside of EEA?</span>
  },
  {
    item: '', tier: 'point', version: versions['1.0'],
    polish: <span>W celach wskazanych w Punkcie 6. niniejszej Polityki Prywatności, Administrator korzysta z usług Zaufanych Partnerów mających siedziby na obszarze Europejskiego Obszaru Gospodarczego (EOG) lub w Stanach Zjednoczonych. W związku z tym dane osobowe mogą być przekazywane poza granice EOG. Gwarancje należytej ochrony danych osobowych przez Zaufanych Partnerów mających siedziby w Stanach Zjednoczoncyh opierają się między innymi na zobowiązaniach do stosowania przez te podmioty standardowych klauzul umownych przyjętych przez Komisję Unii Europejskiej oraz&nbsp;uczestnictwa w Tarczy Prywatności (ang. Privacy Shield).</span>,
    english: <span>With the purposes referred to under Point 6 of this Privacy Policy, the Administrator employs the services of Trusted Partners with registered offices within the European Economic Area and/or in the the United States. Therefore, the personal data may be transferred outside of EEA. The guarantees of the proper protection of the personal data by the Trusted Partners with their registered offices in United States are based, among others, on the obligations of those entities to apply standard contractual clauses approved by the Commission of the European Union and the participation in the Privacy Shield program.</span>
  },
  {
    item: '11.', tier: 'header', version: versions['1.0'],
    polish: <span>Jak długo przechowywane są dane osobowe przez Administratora?</span>,
    english: <span>How long the personal data is stored by the Administrator?</span>
  },
  {
    item: '', tier: 'point', version: versions['1.0'],
    polish: <span>Dane osobowe przechowywane są przez Administratora przez okres nieprzekraczający terminu przedawnienia roszczeń w odniesieniu do relacji łączących Administratora z daną osobą.</span>,
    english: <span>The personal data is stored by the Administrator for the period not surpassing the period of limitation with respect to relations connecting the Administrator with a given person.</span>
  },
  {
    item: '', tier: '', version: versions['1.0'],
    polish: <span></span>,
    english: <span></span>
  }
]
