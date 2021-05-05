import React from 'react'

const versions = {
  '1.0': '2020.06.01'
}

const nodes = [
  {
    item: '1.', tier: 'header', version: versions['1.0'],
    pl: <span>Wprowadzenie</span>,
    en: <span>Introduction</span>
  },
  {
    item: '', tier: 'point', version: versions['1.0'],
    pl: <span>Niniejszy Regulamin określa zasady korzystania z Serwisu.</span>,
    en: <span>These Terms of Service stipulate the terms of use of the Service.</span>
  },
  {
    item: '2.', tier: 'header', version: versions['1.0'],
    pl: <span>Definicje</span>,
    en: <span>Definitions</span>
  },
  {
    item: '1.1.', tier: 'point', version: versions['1.0'],
    pl: <span>W niniejszym Regulaminie wyrażenia pisane z wielkiej litery będą miały następujące znaczenia:</span>,
    en: <span>In these Terms of Service the capitalized expressions shall have the following meanings:</span>
  },
  {
    item: 'a)', tier: 'subpoint', version: versions['1.0'],
    pl: <span><strong>Serwis</strong> - serwis internetowy znajdujący się pod adresem <u>www.codelumi.com</u>.</span>,
    en: <span><strong>Service</strong> - a web service located at the address <u>www.codelumi.com</u>.</span>
  },
  {
    item: 'b)', tier: 'subpoint', version: versions['1.0'],
    pl: <span><strong>Administrator</strong> - Warsaw Digital Sp. z o.o., z siedzibą w Warszawie przy ul.&nbsp;Twardej&nbsp;18, 00-105 Warszawa, zarejestrowana w rejestrze przedsiębiorców prowadzonym przez Sąd Rejonowy dla m. st. Warszawy, XII Wydział Gospodarczy Krajowego Rejestru Sądowego, pod numerem KRS 0000735294, o kapitale zakładowym 20.000,00 PLN, w pełni wpłaconym, posiadająca numer REGON 380529016 oraz numer NIP 5252753799.</span>,
    en: <span><strong>Administrator</strong>  - Warsaw Digital Sp. z o.o., with its registered office in Warsaw at&nbsp;Twarda 18 St., 00-105 Warsaw, registered in the register of entrepreneurs held by the District Court for the capital city of Warsaw, XII Commercial Division of the National Court Register, under the KRS number 0000735294, with the share capital of 20,000.00 PLN, fully paid, with REGON number 380529016, and NIP number 5252753799.</span>
  },
  {
    item: 'c)', tier: 'subpoint', version: versions['1.0'],
    pl: <span><strong>Konto</strong> - umowa pomiędzy Administratorem oraz danym podmiotem i odpowiadający tej umowie zapis w bazie danych Serwisu.</span>,
    en: <span><strong>Account</strong> - an Agreement between the Administrator and a given entity and a corresponding record in the Service's database. </span>
  },
  {
    item: 'd)', tier: 'subpoint', version: versions['1.0'],
    pl: <span><strong>Odwiedzający</strong> - osoba, która uzyskała dostęp do Serwisu, np. poprzez przeglądarkę internetową.</span>,
    en: <span><strong>Visitor</strong> - a person which obtained access to the Service, for example through a web browser.</span>
  },
  {
    item: 'e)', tier: 'subpoint', version: versions['1.0'],
    pl: <span><strong>Użytkownik</strong> - podmiot posiadający Konto w Serwisie.</span>,
    en: <span><strong>User</strong> - an entity having an Account in the Service.</span>
  },
  {
    item: '2.', tier: 'header', version: versions['1.0'],
    pl: <span>Serwis</span>,
    en: <span>The Service</span>
  },
  {
    item: '2.1.', tier: 'point', version: versions['1.0'],
    pl: <span>Właścicielem i administratorem Serwisu jest Administrator.</span>,
    en: <span>The owner and the administrator of the Service is the Administrator.</span>,
  },
  {
    item: '2.2.', tier: 'point', version: versions['1.1'],
    pl: <span>Serwis przeznaczony jest do prezentowania artykułów dotyczących programowania komputerowego.</span>,
    en: <span>The Service is intended to present articles regarding computer programming.</span>
  },
  {
    item: '3.', tier: 'header', version: versions['1.0'],
    pl: <span>Konta</span>,
    en: <span>Accounts</span>
  },
  {
    item: '3.1.', tier: 'point', version: versions['1.1'],
    pl: <span>Konto w Serwisie może założyć a) osoba fizyczna niedziałająca jako przedsiębiorca (Konto Prywatne) lub b) podmiot działający jako przedsiębiorca (Konto Firmowe).</span>,
    en: <span>An Account in the Service can be registered by a) a natural person not acting as an entrepreneur (Private Account) and/or b) an entity acting as an entrepreneur (Business Account).</span>
  },
  {
    item: '3.2.', tier: 'point', version: versions['1.0'],
    pl: <span>Administrator uprawniony jest do deaktywacji lub usunięcia Konta w przypadku stwierdzenia naruszenia Regulaminu przez Użytkownika.</span>,
    en: <span>The Administrator is entitled to de-activate and/or delete the Account in case of determining of violation of these Terms of Service by the User.</span>
  },
  {
    item: '5.', tier: 'header', version: versions['1.0'],
    pl: <span>Prawa i odpowiedzialność Administratora.</span>,
    en: <span>The rights and liability of the Administrator</span>
  },
  {
    item: '5.1.', tier: 'point', version: versions['1.0'],
    pl: <span>Administrator uprawniony jest w każdym momencie do zaprzestania świadczenia usług poprzez Serwis, jak i do wprowadzania przerw w świadczeniu tych usług.</span>,
    en: <span>The Administrator is entitled at any time to terminate rendering of the services through the Service, and/or to interrupt rendering of those services.</span>
  },
  {
    item: '5.2.', tier: 'point', version: versions['1.0'],
    pl: <span>Administrator nie daje jakiejkolwiek gwarancji, że informacje, dane i opinie zamieszczone w artykułach zawartych w Serwisie są poprawne.</span>,
    en: <span>The Administrator does not give any guarantee that the information, data and opinions included in the articles in the Service are correct.</span>
  },
  {
    item: '6.', tier: 'header', version: versions['1.0'],
    pl: <span>Ochrona danych osobowych</span>,
    en: <span>Personal Data Protection</span>
  },
  {
    item: '6.1.', tier: 'point', version: versions['1.0'],
    pl: <span>Integralnymi częściami niniejszego Regulaminu są Polityka Prywatności oraz Polityka Plików Cookies.</span>,
    en: <span>The Privacy Policy and the Cookies Policy consitute integral parts of these Terms of Service.</span>
  },
  {
    item: '6.2.', tier: 'point', version: versions['1.0'],
    pl: <span>Podmiot tworzący Konto upoważnia Administratora do przetwarzanie danych osobowych powiązanych z tym Kontem.</span>,
    en: <span>An entity creating an Account authorizes the Administrator to process personal data connected with that Account.</span>
  },
  {
    item: '7.', tier: 'header', version: versions['1.0'],
    pl: <span>Postanowienia końcowe</span>,
    en: <span>Final Provisions</span>
  },
  {
    item: '7.1.', tier: 'point', version: versions['1.0'],
    pl: <span>Niniejszy Regulamin poddany jest prawu polskiemu.</span>,
    en: <span>These Terms of Service are governed by the Polish law.</span>
  },
  {
    item: '7.2.', tier: 'point', version: versions['1.0'],
    pl: <span>Spory wynikłe z niniejszego Regulaminu rozstrzygane będą przez sąd właściwy dla Administratora.</span>,
    en: <span>Disputes arising out of these Terms of Service shall be determined by the court having jurisdiction over the Administrator.</span>
  },
  {
    item: '7.3.', tier: 'point', version: versions['1.1'],
    pl: <span>Niniejszy Regulamin obowiązuje od dnia 1 czerwca 2021 r.</span>,
    en: <span>These Terms of Service are applicable as of 1st June 2020.</span>
  },
  {
    item: '7.4.', tier: 'point', version: versions['1.0'],
    pl: <span>Administrator ma prawo do zmiany Regulaminu, Polityki Prywatności, Polityki Cookies oraz Cennika poprzez zamieszczenie zmian tych dokumentów w Serwisie pod adresem <i>www.codelumi.com</i>. Zmiany te wchodzą w&nbsp;życie po upływie okresu 14 dni od ich ogłoszenia.</span>,
    en: <span>The Administrator is authorized to amend these Terms of Service, the Privacy Policy, the Cookies Policy and the Pricing through publication of the amendments to those documents within the Service under the address <i>www.codelumi.com</i>. The amendments are applicable after the lapse of the period of 14 days from their publication.</span>
  },
]

export default nodes
