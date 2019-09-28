import React from 'react'

const version = {
  '1.0': '2019.07.28'
}
export const text = [
  {
    item: '1.', tier: 'header', version: version['1.0'],
    polish: <span>Wprowadzenie</span>,
    english: <span>Introduction</span>
  },
  {
    item: '', tier: 'point', version: version['1.0'],
    polish: <span>Niniejszy Regulamin określa zasady korzystania z Serwisu.</span>,
    english: <span>These Terms of Service stipulate the terms of use of the Service.</span>
  },
  {
    item: '2.', tier: 'header', version: version['1.0'],
    polish: <span>Definicje</span>,
    english: <span>Definitions</span>
  },
  {
    item: '1.1.', tier: 'point', version: version['1.0'],
    polish: <span>W niniejszym Regulaminie wyrażenia pisane z wielkiej litery będą miały następujące znaczenia:</span>,
    english: <span>In these Terms of Service the capitalized expressions shall have the following meanings:</span>
  },

  {
    item: 'a)', tier: 'subpoint', version: version['1.0'],
    polish: <span><strong>Serwis</strong> - serwis internetowy znajdujący się pod adresem <u>www.warsawlease.pl</u>.</span>,
    english: <span><strong>Service</strong> - a web service located at the address <u>www.warsawlease.pl</u>.</span>
  },
  {
    item: 'b)', tier: 'subpoint', version: version['1.0'],
    polish: <span><strong>Administrator</strong> - Warsaw Digital Sp. z o.o., z siedzibą w Warszawie przy ul.&nbsp;Twardej&nbsp;18, 00-105 Warszawa, zarejestrowana w rejestrze przedsiębiorców prowadzonym przez Sąd Rejonowy dla m. st. Warszawy, XII Wydział Gospodarczy Krajowego Rejestru Sądowego, pod numerem KRS 0000735294, o kapitale zakładowym 20.000,00 PLN, w pełni wpłaconym, posiadająca numer REGON 380529016 oraz numer NIP 5252753799.</span>,
    english: <span><strong>Administrator</strong>  - Warsaw Digital Sp. z o.o., with its registered office in Warsaw at&nbsp;Twarda 18 St., 00-105 Warsaw, registered in the register of entrepreneurs held by the District Court for the capital city of Warsaw, XII Commercial Division of the National Court Register, under the KRS number 0000735294, with share capital of 20,000.00 PLN, fully paid, with REGON number 380529016, and NIP number 5252753799.</span>
  },
  {
    item: 'c)', tier: 'subpoint', version: version['1.0'],
    polish: <span><strong>Ogłoszenie</strong> - zapis w bazie danych Serwisu zawierający dane dotyczące danej nieruchomości, który, po spełnieniu określonych warunków, jest publicznie, czasowo dostępny w Serwisie, dla wszystkich Odwiedzających.</span>,
    english: <span><strong>Announcement</strong> - a record in the Service's database containing data regarding a given real estate, which, upon meeting specified conditions, is tenably publicly available within the Service to all Visitors.</span>
  },
  {
    item: 'd)', tier: 'subpoint', version: version['1.0'],
    polish: <span><strong>Konto</strong> - umowa pomiędzy Administratorem oraz danym podmiotem i odpowiadający tej umowie zapis w bazie danych Serwisu umożliwiające temu podmiotowi, po spełnieniu określonych warunków, dodawanie Ogłoszeń w bazie danych Serwisu.</span>,
    english: <span><strong>Account</strong> - an Agreement between the Administrator and a given entity and a corresponding record in the Service's database, which enable that entity, upon meeting specified conditions, adding Announcements in the Service's database. </span>
  },
  {
    item: 'e)', tier: 'subpoint', version: version['1.0'],
    polish: <span><strong>Odwiedzający</strong> - osoba, która uzyskała dostęp do Serwisu, np. poprzez przeglądarkę internetową.</span>,
    english: <span><strong>Visitor</strong> - a person which obtained an access to the Service, for example through a web browser.</span>
  },
  {
    item: 'f)', tier: 'subpoint', version: version['1.0'],
    polish: <span><strong>Użytkownik</strong> - podmiot posiadający Konto w Serwisie.</span>,
    english: <span><strong>User</strong> - an entity having an Account in the Service.</span>
  },
  {
    item: 'g)', tier: 'subpoint', version: version['1.0'],
    polish: <span><strong>Ogłoszeniodawca</strong> - podmiot, który dodał dane Ogłoszenie w Serwisie.</span>,
    english: <span><strong>Announcer</strong> - an entity, which added a given Announcement in the Service.</span>
  },
  {
    item: '2.', tier: 'header', version: version['1.0'],
    polish: <span>Serwis</span>,
    english: <span>The Service</span>
  },
  {
    item: '2.1.', tier: 'point', version: version['1.0'],
    polish: <span>Właścicielem i administratorem Serwisu jest Administrator.</span>,
    english: <span>The owner and the administrator of the Service is the Administrator.</span>,
  },
  {
    item: '2.2.', tier: 'point', version: version['1.0'],
    polish: <span>Serwis przeznaczony jest do prezentowania Ogłoszeń odnoszących się do wynajmu biur oraz lokali użytkowych znajdujących się w obrębie m.st.&nbsp;Warszawy.</span>,
    english: <span>The Service is intended to present Announcemnets regarding lease of offices and usable premises located in the area of the capital city of Warsaw.</span>
  },
  {
    item: '3.', tier: 'header', version: version['1.0'],
    polish: <span>Konta</span>,
    english: <span>Accounts</span>
  },

  {
    item: '3.1.', tier: 'point', version: version['1.0'],
    polish: <span>Konto w Serwisie może założyć wyłącznie podmiot posiadający status przedsiębiorcy działający samodzielnie lub poprzez osobę go&nbsp;reprezentującą.</span>,
    english: <span>An Account in the Service can only be created by an entity being an entrepreneur acting in its own name or by a person representing such an entrepreneur.</span>
  },
  {
    item: '3.2.', tier: 'point', version: version['1.0'],
    polish: <span>Administrator uprawniony jest do deaktywacji lub usunięcia Konta w przypadku stwierdzenia naruszenia Regulaminu przez Użytkownika.</span>,
    english: <span>The Administrator is entitled to de-activate and/or delete an Account in case of determining of violation of these Terms of Service by the User.</span>
  },
  {
    item: '4.', tier: 'header', version: version['1.0'],
    polish: <span>Ogłoszenia</span>,
    english: <span>Annoucements</span>
  },
  {
    item: '4.1.', tier: 'point', version: version['1.0'],
    polish: <span>Ogłoszenia nie stanowią ofert w rozumieniu polskiego kodeksu cywilnego, a jedynie zaproszenia do rozpoczęcia negocjacji.</span>,
    english: <span>The Announcements do not constitute offers within meaning of the Polish Civil Code, and constitute only invitations to commence negotiations.</span>
  },
  {
    item: '4.2.', tier: 'point', version: version['1.0'],
    polish: <span>Ogłoszeniodawcy odpowiedzialni są za zapewnienie, aby treść Ogłoszeń przez nich dodawanych była zgodna z prawem, dobrymi obyczajami oraz normami etycznymi.</span>,
    english: <span>Announcers are obligated to ensure that the content of the Announcements added by them is congruent with law, public decency and moral rules.</span>
  },
  {
    item: '4.3.', tier: 'point', version: version['1.0'],
    polish: <span>Odpowiedzialność za treść Ogłoszeń, dotyczącą między innymi ich pełności, aktualności oraz poprawności, ponoszą wyłącznie ich Ogłoszeniodawcy.</span>,
    english: <span>The liability for the content of Announcements, regarding - among others - their completeness, up-to-date status and correctness, lies solely with the respective Announcers.</span>
  },
  {
    item: '4.4.', tier: 'point', version: version['1.0'],
    polish: <span>W trakcie dodawania Ogłoszenia, na podstawie podawanego przez Ogłoszeniodawcę miesięcznego czynszu netto, algorytmy Serwisu automatycznie wyliczają miesięczny czynsz brutto, poprzez pomnożenie miesięcznego czynszu netto przez 1,23. Ogłoszeniodawca dodający dane Ogłoszenie potwierdza poprawność tych wyliczeń.</span>,
    english: <span>During adding an Annoucement, on the basis of the provided by its Announcer monthly net rent, the Service's algorithms automatically calculate monthly gross rent through mutliplying the monthly net rent by 1.23. The Announcer adding the Announcement confirms the correctness of those calculations.</span>
  },
  {
    item: '4.5.', tier: 'point', version: version['1.0'],
    polish: <span>W trakcie dodawania Ogłoszenia, na podstawie podawanych przez Ogłoszeniodawcę miesięcznego czynszu netto oraz powierzchni, oraz wyliczonego zgodnie z Punktem 4.4 miesięcznego czynszu brutto, algorytmy Serwisu automatycznie wyliczają stawki miesięcznego czynszu netto oraz brutto w odniesieniu do jednego metra kwadratowego powierzchni poprzez odpowiednie podzielenie tych czynszów przez podaną powierzchnię. Ogłoszeniodawca dodający dane Ogłoszenie potwierdza poprawność tych wyliczeń.</span>,
    english: <span>During adding an Announcement, on the basis of the provided by its Announcer monthly net rent and the area, and monthly gross rent calculated pursuant to Point 4.4, the Service's algorithms automatically calculate the amounts of the monthly net rent and the monthly gross rent with respect to one square meter of the area through division of those rents by the provided area. The Announcer adding the respective Announcement confirms correctness of those calculations.</span>
  },
  {
    item: '4.6.', tier: 'point', version: version['1.0'],
    polish: <span>Wyliczenia, o których mowa w Punktach 4.4 oraz 4.5 dokonywane są do dwóch miejsc po przecinku z zastosowaniem zaokrąglenia w górę.</span>,
    english: <span>The calculations referred to under Points 4.4 and 4.5 are made to two decimal points and with application of rounding up.</span>
  },
  {
    item: '4.7.', tier: 'point', version: version['1.0'],
    polish: <span>W okresie promocyjnym dodanie lub wydłużenie okresu aktywności Ogłoszenia w Serwisie jest nieodpłatne. Po tym okresie cena za dodanie lub wydłużenie okresu aktywności Ogłoszenia będzie ustalona zgodnie z cennikiem.</span>,
    english: <span>During promotional period adding and/or extending activation period of an Announcement in the Service is gratuitous. After that period the price of adding and/or extending activation period of an Annoucement shall be provided in the price list.</span>
  },
  {
    item: '4.8.', tier: 'point', version: version['1.0'],
    polish: <span>Początek, czas trwania oraz zakres okresu promocyjnego ustala Administrator.</span>,
    english: <span>The beginning, duration and extent of the promotional period is determined by the Administrator.</span>
  },
  {
    item: '4.9.', tier: 'point', version: version['1.0'],
    polish: <span>Dodane Ogłoszenie pozostaje aktywne przez okres 30 dni, chyba, że zostanie wcześniej usunięte przez Ogłoszeniodawcę lub Administratora. Po upływie tego okresu Ogłoszenie zostaje automatycznie usunięte, chyba, że okres aktywacji zostanie przedłużony przez Ogłoszeniodawcę. Ogłoszeniodawca może usunąć ogłoszenie w każdym momencie.</span>,
    english: <span>An added Announcement stays active for the period of 30 days, unless, it is earlier deleted by the Announcer or the Administrator. After that period the Announcement is automatically deleted, unless, the activation period is extended by the Announcer. The Announcement can be deleted by the Announcer at any time.</span>
  },
  {
    item: '4.10.', tier: 'point', version: version['1.0'],
    polish: <span>Ogłoszenie może być w każdym momencie ukryte przez Ogłoszeniodawcę, co pozostaje jednakże bez wpływu na okres aktywności. Ogłoszenie ukryte jest niewidoczne dla Odwiedzających.</span>,
    english: <span>An Announcement can at any time be hidden by the Announcer, which however does not impact the activation period. The hidden Announcement is invisible to Visitors.</span>
  },
  {
    item: '4.11.', tier: 'point', version: version['1.0'],
    polish: <span>Administrator uprawniony jest do ukrycia, deaktywacji lub usunięcia Ogłoszenia w przypadku stwierdzenia naruszenia Regulaminu przez Ogłoszeniodawcę.</span>,
    english: <span>The Administrator is entitled to hide, de-activate and/or delete an Annoucement in case of determining of violation of these Terms of Service by the Announcer.</span>
  },
  {
    item: '5.', tier: 'header', version: version['1.0'],
    polish: <span>Prawa i odpowiedzialność Administratora.</span>,
    english: <span>The rights and liability of the Administrator</span>
  },
  {
    item: '5.1.', tier: 'point', version: version['1.0'],
    polish: <span>Administrator uprawniony jest w każdym momencie do zaprzestania świadczenia usług poprzez Serwis, jak i do wprowadzania przerw w świadczeniu tych usług, z zastrzeżeniem  Punktu 5.2.</span>,
    english: <span>The Administrator is entitled at any time to terminate rendering of the services through the Service, and/or to interrupt rendering of those services, with the reservation of Point 5.2.</span>
  },
  {
    item: '5.2.', tier: 'point', version: version['1.0'],
    polish: <span>W przypadku zaprzestania świadczenia usług, bądź wprowadzenia przerw w ich świadczeniu, Ogłoszeniodawcy dotkniętemu takim zaprzestaniem lub przerwą przysługuje jedynie proporcjonalny zwrot kwoty zapłaconej Administratorowi za dodanie ogłoszenia dotkniętego takim zaprzestaniem lub przerwą.</span>,
    english: <span>In case of termination of rendering of the services or their interruptions an Announcer affected by that termination or interruption is entitled only to a proportional reimbursement of the amount paid to the Administrator for adding of the Annoucement affected by that termination or interruption.</span>
  },
  {
    item: '5.3.', tier: 'point', version: version['1.0'],
    polish: <span>Odpowiedzialność Administratora wobec danego Ogłoszeniodawcy w odniesieniu do danego Ogłoszenia ograniczona jest do wysokości opłaty poniesionej przez tego Ogłoszeniodawcę w odniesieniu do tego Ogłoszenia na rzecz Administratora.</span>,
    english: <span>The liability of the Administrator to a given Announcer with respect to a given Announcement is limited to the amount paid by that Announcer with respect to that Announcement to the Administrator.</span>
  },
  {
    item: '6.', tier: 'header', version: version['1.0'],
    polish: <span>Ochrona danych osobowych</span>,
    english: <span>Personal Data Protection</span>
  },
  {
    item: '6.1.', tier: 'point', version: version['1.0'],
    polish: <span>Integralnymi częściami niniejszego Regulaminu są Polityka Prywatności oraz Polityka Plików Cookies.</span>,
    english: <span>The Privacy Policy and the Cookies and Similar Technologies Policy consitute integral parts of these Terms of Service.</span>
  },
  {
    item: '6.2.', tier: 'point', version: version['1.0'],
    polish: <span>Podmiot tworzący Konto upoważania Administratora do przetwarzanie danych osobowych powiązanych z tym Kontem.</span>,
    english: <span>An entity creating an Account authorizes the Administrator to process personal data connected with that Account.</span>
  },
  {
    item: '6.3.', tier: 'point', version: version['1.0'],
    polish: <span>Użytkownicy przyjmują do wiadomości, że dodanie Ogłoszenia w Serwisie wiąże się z nieograniczonym upublicznieniem ich nazwy (firmy) oraz numeru telefonu, podanych przy rejestracji Konta lub później.</span>,
    english: <span>Users acknowledge that the adding of the Announcement in the Service is connected with unlimited publication of their business name and phone numbers, provided during creation of the Account or later.</span>
  },
  {
    item: '7.', tier: 'header', version: version['1.0'],
    polish: <span>Postanowienia końcowe</span>,
    english: <span>Final Provisions</span>
  },
  {
    item: '7.1.', tier: 'point', version: version['1.0'],
    polish: <span>Niniejszy Regulamin poddany jest prawu polskiemu.</span>,
    english: <span>These Terms of Service are governed by the Polish law.</span>
  },
  {
    item: '7.2.', tier: 'point', version: version['1.0'],
    polish: <span>Wszelkie spory wynikłe z niniejszego Regulaminu rozstrzygane będą przez sąd właściwy dla Administratora.</span>,
    english: <span>Any disputes arising out of these Terms of Service shall be determined by the court having jurisdiction over the Administrator.</span>
  },
  {
    item: '7.3.', tier: 'point', version: version['1.0'],
    polish: <span>Niniejszy Regulamin wchodzi w życie z dniem 28 października 2019 r.</span>,
    english: <span>These Terms of Service are applicable as of 28th October 2019.</span>
  },
  {
    item: '7.4.', tier: 'point', version: version['1.0'],
    polish: <span>Administrator ma prawo do zmiany Regulaminu, Polityki Prywatności, Polityki Plików Cookies i Podobnych Technologii oraz Cennika poprzez zamieszczenie nowych tekstów jednolitych tych dokumentów w Serwisie pod adresem <i>www.warsawlease.pl</i>. Zmiany te wchodzą w&nbsp;życie po upływie okresu 14 dni od ich ogłoszenia.</span>,
    english: <span>The Administrator is authorised to amend these Terms of Service, the Privacy Policy, the Cookies and Similar Technologies Policy and the Pricing through publication of new unified texts of those documents within the Service under the address <i>www.warsawlease.pl</i>. The amendments are applicable after the lapse of the period of 14 days from their publication.</span>
  },
]
