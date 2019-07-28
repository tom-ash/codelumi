import React from 'react'

const versions = {
  10: '1.0 (2019.07.28)'
}
export const text = [
  {
    item: '1.', tier: 'header', version: versions[10],
    polish: <span>Jaki podmiot jest administratorem danych osobowych?</span>,
    english: <span>Which entity is the administrator of the personal data?</span>
  },
  {
    item: '', tier: 'point', version: versions[10],
    polish: <span>Administratorem danych osobowych w rozumieniu Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w&nbsp;sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz&nbsp;uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) jest Administrator, czyli Warsaw Digital Sp. z o.o., z siedzibą w&nbsp;Warszawie.</span>,
    english: <span>The administrator of the personal data within meaning of the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation) is the Administrator, i.e. Warsaw Digital Sp. z o.o., with its registered office in Warsaw.</span>
  },
  {
    item: '2.', tier: 'header', version: versions[10],
    polish: <span>Jakie rodzaje danych osobowych zbierane są przez Administratora?</span>,
    english: <span>What kinds of personal data are gathered by the Administrator?</span>
  },
  {
    item: '', tier: 'point', version: versions[10],
    polish: <span>Założenie Konta w Serwisie wymaga podania firmy (nazwy) przedsiębiorcy, numeru NIP oraz numer telefonu. Ponadto, osoba reprezentująca przedsiębiorcę przy zakładaniu konta podaje swój adres email oraz hasło.</span>,
    english: <span>The creation of an Account in the Service requires provision of the business name of the entrepreneur, NIP (tax ID) number and the phone number. Furthermore, the person representing the entrepreneur at the Account creation provides its email address and password.</span>
  },
  {
    item: '', tier: 'point', version: versions[10],
    polish: <span>Ponadto, Administrator oraz jego Zaufani Partnerzy gromadzą informacje o Odwiedzającyh Serwis odnoszące się do ich zachowań w Serwisie oraz rodzaju urządzeń wykorzystywanych do odwiedzania serwisu.</span>,
    english: <span>Furthermore, the Administrator and its Trusted Partners gather data regarding Service's Visitors regarding their behavior in the Service and kinds of devices used during visiting the Service.</span>
  },
  {
    item: '', tier: 'point', version: versions[10],
    polish: <span>Dane, o których mowa powyżej przechowywane są na serwerach usługodawców świadczących usługi hostingu na rzecz Administratora. Firma (nazwa) przedsiębiorcy, numer NIP, numer telefonu oraz adres email są szyfrowane, a hasło podwójnie haszowane (ang. <i>hashing</i>).</span>,
    english: <span>The data referred to above is hosted on the servers of entites providing hosting services to the Administrator. The business name, NIP (tax ID) number, phone number and email address are encrypted, and the password is doubly hashed.</span>
  },
  {
    item: '3.', tier: 'header', version: versions[10],
    polish: <span>Jakie dane osobowe ogłoszeniodawców są udostępniane publicznie?</span>,
    english: <span>What kinds of personal data are available publicly?</span>
  },
  {
    item: '', tier: 'point', version: versions[10],
    polish: <span>Przy każdym dodanym Ogłoszeniu dostępny jest publicznie numer telefonu Ogłoszeniodawcy oraz jego firma (nazwa) i logo.</span>,
    english: <span>With each added Announcement the phone number, the business name and the logo of its Announcer are available publicly.</span>
  },
  {
    item: '4.', tier: 'header', version: versions[10],
    polish: <span>W jaki sposób Administrator gromadzi dane osobowe?</span>,
    english: <span>By what means the Administrator gathers the personal data?</span>
  },
  {
    item: '', tier: 'point', version: versions[10],
    polish: <span>Administrator oraz jego Zaufani Partnerzy gromadzą dane osobowe pozyskane od Użytkowników przy tworzeniu Konta, a ponadto za pośrednictwem technologii technologii takich jak pliki cookies oraz lokalny magazyn danych (ang. <i>local storage</i>). Szersze informacje w tym zakresie znajdziesz w&nbsp;<u>Polityce plików cookies i podobnych technologii</u>.</span>,
    english: <span>The Administrator and its Trusted Partners gather personal data acquired from the Users at the Account creation, and, furthermore through use of such technologies as cookie files and local storage. More information with that regard is available in the Cookies and Similar Technologies Policy.</span>
  },
  {
    item: '5.', tier: 'header', version: versions[10],
    polish: <span>W jakim celu Administrator zbiera dane osobowe</span>,
    english: <span>What is the purpose of gathering of the personal data by the Administrator?</span>
  },
  {
    item: '', tier: 'point', version: versions[10],
    polish: <span>Administrator oraz jego Zaufani Partnerzy zbierają dane osobowe w celu:</span>,
    english: <span>The Administrator and its Trusted Partners gather personal data to:</span>
  },
  {
    item: 'a)', tier: 'subpoint', version: versions[10],
    polish: <span>umożliwienia korzystania z Serwisu, w tym, między innymi, dodawania Ogłoszeń,</span>,
    english: <span>enable usage of the Service, including, among others, adding Announcements,</span>
  },
  {
    item: 'b)', tier: 'subpoint', version: versions[10],
    polish: <span>zapewnienia bezpieczeństwa Użytkowników, Odwiedzających oraz Serwisu,</span>,
    english: <span>ensure safety of the Users, Visitors and the Service,</span>
  },
  {
    item: 'c)', tier: 'subpoint', version: versions[10],
    polish: <span>prowadzenia statystyki,</span>,
    english: <span>to maintain statistics,</span>
  },
  {
    item: 'd)', tier: 'subpoint', version: versions[10],
    polish: <span>dostosowania treści wyświetlanych reklam do preferencji Odwiedzających, oraz</span>,
    english: <span>adjust advertisement content to Visitors' preferences, and</span>
  },
  {
    item: 'e)', tier: 'subpoint', version: versions[10],
    polish: <span>umożliwienia przeprowadzania transakcji płatności elektronicznych.</span>,
    english: <span>enable electronic payments.</span>
  },
  {
    item: '6.', tier: 'header', version: versions[10],
    polish: <span>Czy dane osobowe przekazywane są podmiotom trzecim?</span>,
    english: <span>Is the personal data transferred to third parties?</span>
  },
  {
    item: '', tier: 'point', version: versions[10],
    polish: <span>Dane osobowe zbierane przez Administratora przekazywane są Zaufanym Partnerom, w tym między innymi, podmiotom trzecim świadczącym usługi: hostingu danych oraz masowego wysyłania emaili i wiadomości sms.</span>,
    english: <span>The personal data gathered by the Administrator is transferred to its Trusted Partners, including, among others, third parties rendering services of data hosting, and email/phone messages sending.</span>
  },
  {
    item: '', tier: 'point', version: versions[10],
    polish: <span>Administrator może przekazywać zbierane dane osobowe organom publicznym w przypadkach wymaganych przepisami prawa.</span>,
    english: <span>The Administrator may provide the public authorities with the personal data in the cases envisioned by the law.</span>
  },
  {
    item: '7.', tier: 'header', version: versions[10],
    polish: <span>Jaki jest zakres obowiązywania niniejszej Polityki w odniesieniu przekierowań?</span>,
    english: <span>What is the scope of this Privacy Policy with respect to redirects?</span>
  },
  {
    item: '', tier: 'point', version: versions[10],
    polish: <span>W przypadku, w którym Ogłoszeniodawcy zawierają w treści ogłoszeń przekierowania (<i>linki</i>) do stron internetowych innych niż Serwis, Odwiedzający podążająca za takim przekierowaniem przyjmuje do wiadomości, że niniejsza Polityka nie znajduje zastosowania do tych stron, a&nbsp;proces przetwarzania tych danych odbywa się na zasadach i warunkach przewidzianych przez regułu odnoszące się do tych stron.</span>,
    english: <span>In case in which Announcers include in their Announcements redirects (links) to websites other than the Service, the Visitor following such a redirect acknowledges that this Privacy Policy is not applicable to those websites, and data processing is governed by the terms and conditions envisioned by the rules relevant for those websites.</span>
  },
  {
    item: '8.', tier: 'header', version: versions[10],
    polish: <span>Jakie mam prawa w odniesieniu do moich danych osobowych?</span>,
    english: <span>What are my rights with respect to my personal data?</span>
  },
  {
    item: '', tier: 'point', version: versions[10],
    polish: <span>W odniesieniu do Twoich danych osobowych przysługują Tobie prawa między innymi do:</span>,
    english: <span>With respect to your personal data you have, among others, the rights of:</span>
  },
  {
    item: 'a)', tier: 'subpoint', version: versions[10],
    polish: <span>dostępu,</span>,
    english: <span>access,</span>
  },
  {
    item: 'b)', tier: 'subpoint', version: versions[10],
    polish: <span>sprostowywania,</span>,
    english: <span>rectification,</span>
  },
  {
    item: 'c)', tier: 'subpoint', version: versions[10],
    polish: <span>wyrażenia sprzeciwu co ich przetwarzania,</span>,
    english: <span>objection to the processing,</span>
  },
  {
    item: 'c)', tier: 'subpoint', version: versions[10],
    polish: <span>żądania ograniczenia ich przetwarzania,</span>,
    english: <span>demanding processing restriction,</span>
  },
  {
    item: 'd)', tier: 'subpoint', version: versions[10],
    polish: <span>żądania ich usunięcia,</span>,
    english: <span>demanding its erasure,</span>
  },
  {
    item: 'd)', tier: 'subpoint', version: versions[10],
    polish: <span>cofnięcia wyrażonych zgód, oraz</span>,
    english: <span>withdrawal of the consents, and</span>
  },
  {
    item: 'e)', tier: 'subpoint', version: versions[10],
    polish: <span>transferu.</span>,
    english: <span>transfer.</span>
  },
  {
    item: '', tier: 'point', version: versions[10],
    polish: <span>Wykonanie powyższych praw pozostaje bez wpływu na dotychczasowe przetwarzanie, a ponadto może wiązać się z ograniczeniem funkcjonalności Serwisu, takich jak, między innymi, posiadanie Konta oraz&nbsp;dodawanie Ogłoszeń.</span>,
    english: <span>The execution of the abovementioned rights does not influence the past processing, and, furthermore, may be connected with limitation of the Service's functionality, such as, among others, Account possession and adding Announcements.</span>
  },
  {
    item: '', tier: 'point', version: versions[10],
    polish: <span>Wykonanie powyższych praw następuje poprzez wysłanie na adres korespondencyjny Administratora pisma lub emaila na adres <i>kontakt@warsaw.digital</i> o odpowiedniej treści.</span>,
    english: <span>The execution of the abovementioned rights is made through sending a letter to the Administrator's correspondence address or an email to <i>contact@warsaw.digital</i>.</span>
  },
  {
    item: '9.', tier: 'header', version: versions[10],
    polish: <span>Czy dane osobowe przekazywane są poza EOG?</span>,
    english: <span>Is personal data transferred outside of EEA?</span>
  },
  {
    item: '', tier: 'point', version: versions[10],
    polish: <span>W celu hostingu danych oraz w celu wysyłania poczty elektronicznej Administrator korzysta z usług podmiotów mających siedziby na obszarze Europejskiego Obszaru Gospodarczego (EOG), jak i w Stanach Zjednoczonych. W związku z tym dane osobowe mogą być przekazywane poza granice EOG. Gwarancje należytej ochrony danych osobowych przez podmioty mające siedziby w Stanach Zjednoczoncyh opierają się między innymi na zobowiązaniach do stosowania przez te podmioty standardowych klauzul umownych przyjętych przez Komisję Unii Europejskiej oraz&nbsp;uczestnictwa w Tarczy Prywatności (ang. Privacy Shield).</span>,
    english: <span>To host data and to send emails the Administrator uses the services of entities with registered offices within the European Economic Area and the United States. Therefore, the personal data may be transferred outside of EEA. The guarantees of the proper protection of the personal data by the entities with their registered offices in United States are based, among others, on the obligations of those entities to apply standard contractual clauses approved by the Commission of the European Union and the participation in the Privacy Shield program.</span>
  },
  {
    item: '10.', tier: 'header', version: versions[10],
    polish: <span>Jak długo przechowywane są dane osobowe przez Administratora?</span>,
    english: <span>How long the personal data is stored by the Administrator?</span>
  },
  {
    item: '', tier: 'point', version: versions[10],
    polish: <span>Dane osobowe odnoszące się do danego podmiotu przechowywane są przez Administratora przez okres nieprzekraczający terminu przedawnienia roszczeń w stosunku do tego podmiotu.</span>,
    english: <span>The personal data regarding a given entity is stored by the Administrator for the period not surpassing the period of limitation with respect to that entity.</span>
  },
  {
    item: '', tier: '', version: versions[10],
    polish: <span></span>,
    english: <span></span>
  }
]