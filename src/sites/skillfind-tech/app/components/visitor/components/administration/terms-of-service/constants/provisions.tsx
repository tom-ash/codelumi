import React from 'react'

const versions = {
  '1.0': '2024.07.29',
}

export const provisions = [
  {
    item: '1.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Przedmiot Regulaminu</span>,
    en: <span>The Subject of the Terms of Service</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Przedmiotem Regulaminu jest określenie zasad i warunków świadczenia Usług przez Usługodawcę w ramach Serwisu, zgodnie z definicjami wskazanymi w Punkcie 2 poniżej.
      </span>
    ),
    en: (
      <span>
        The subject of the Terms of Service is defining the terms and conditions for the provision of Services by the Service Provider within the Service, in accordance with the definitions specified in Point 2 below.
      </span>
    ),
  },
  {
    item: '2.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Definicje</span>,
    en: <span>Definitions</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>W niniejszym Regulaminie wyrażenia pisane z wielkiej litery mają następujące znaczenia:</span>,
    en: <span>In these Terms of Service the capitalized terms have the following meanings:</span>,
  },
  {
    item: 'a)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        <strong>Regulamin</strong> - niniejszy regulamin,
      </span>
    ),
    en: (
      <span>
        <strong>Terms of Service</strong> - these terms of service,
      </span>
    ),
  },
  {
    item: 'a)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        <strong>Serwis</strong> - serwis internetowy znajdujący się pod adresem <u>skillfind.tech</u>,
      </span>
    ),
    en: (
      <span>
        <strong>Service</strong> - an Internet service located at the address <u>skillfind.tech</u>,
      </span>
    ),
  },
  {
    item: 'b)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        <strong>Usługodawca</strong> - Warsaw Digital Sp. z o.o., z siedzibą w Warszawie przy ul. Twardej 18,
        00-105 Warszawa, zarejestrowana w rejestrze przedsiębiorców prowadzonym przez Sąd Rejonowy dla m. st. Warszawy,
        XII Wydział Gospodarczy Krajowego Rejestru Sądowego, pod numerem KRS 0000735294, o kapitale zakładowym 20.000,00
        PLN, w pełni wpłaconym, posiadająca numer REGON 380529016 oraz numer NIP 5252753799,
      </span>
    ),
    en: (
      <span>
        <strong>Service Provider</strong> - Warsaw Digital Sp. z o.o., with its registered office in Warsaw
        at Twarda 18 St., 00-105 Warsaw, registered in the register of entrepreneurs held by the District Court for
        the capital city of Warsaw, XII Commercial Division of the National Court Register, under the KRS number
        0000735294, with the share capital of 20,000.00 PLN, fully paid, with REGON number 380529016, and NIP number
        5252753799,
      </span>
    ),
  },
  {
    item: 'b)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <div>
        <strong>Usługi</strong> - usługi świadczone przez Usługodawcę w ramach Serwisu wymienione niewyczerpująco w
        Puncie 3.2 poniżej,
      </div>
    ),
    en: (
      <span>
        <strong>Services</strong> - services provided by the Service Provider within the Service, listed non-exhaustively in Point 3.2 below,
      </span>
    ),
  },
  {
    item: 'c)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        <strong>Odwiedzający</strong> - osoba fizyczna, która uzyskała dostęp do Serwisu,
      </span>
    ),
    en: (
      <span>
        <strong>Visitor</strong> - a natural person which obtained access to the Service,
      </span>
    ),
  },
  {
    item: 'c)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        <strong>Konto</strong> - zapis w bazie danych Serwisu identyfikujący dany podmiot w Serwisie przy użyciu systemu
        logowania,
      </span>
    ),
    en: (
      <span>
        <strong>Account</strong> - a record in the Service's database identifying a given entity within the Service
        using the login system,
      </span>
    ),
  },
  {
    item: 'e)',
    tier: 'subpoint',
    version: versions['1.0'],
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
    item: 'f)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        <strong>Ogłoszeniodawca</strong> - podmiot wykonujący we własnym imieniu działalność gospodarczą, który posiada
        Konto w Serwisie dedykowane dodawaniu Ogłoszeń Współpracy,
      </span>
    ),
    en: (
      <span>
        <strong>Poster</strong> - entity conducting business activities on its own behalf, which holds an Account on the Service dedicated to adding Job Postings,
      </span>
    ),
  },
  {
    item: 'f)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        <strong>Ogłoszenie Współpracy</strong> - zapis w bazie danych Serwisu, którego niektóre elementy pod określonymi
        warunkami są publicznie dostępne, które informują o poszukiwaniu osób fizycznych do pracy na podstawie
        umowy o pracę lub współpracę na podstawie umowy cywilnoprawnej innej niż umowa o pracę, na stanowiska o profilu
        technologicznym,
      </span>
    ),
    en: (
      <span>
        <strong>Job Posting</strong> - an record in the Service's database, certain elements of which are publicly
        available under specified conditions, informing about the search for natural persons for employment based on an employment contract and/or cooperation based on a civil law contract other than an
        employment contract, for positions with a technological profile,
      </span>
    ),
  },
  {
    item: 'f)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        <strong>Kandydat</strong> - osoba fizyczna, która zaaplikowała na dane stanowisko objęte danym Ogłoszeniem
        Współpracy poprzez dostępny w Serwisie formularz aplikacyjny,
      </span>
    ),
    en: (
      <span>
        <strong>Candidate</strong> - a natural person, which applied to a given position covered by a given Job Posting throught the application form available in the Service,
      </span>
    ),
  },
  {
    item: '3.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Serwis</span>,
    en: <span>The Service</span>,
  },
  {
    item: '3.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Właścicielem i administratorem Serwisu jest Usługodawca.</span>,
    en: <span>The owner and the administrator of the Service is the Service Provider.</span>,
  },
  {
    item: '3.2',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Usługi świadczone przez Usługodawcę w ramach niniejszego Serwisu obejmują w szczególności, ale nie wyłącznie,
        na:
      </span>
    ),
    en: <span>The services provided by the Service Provider within this Service include, without limitation:</span>,
  },
  {
    item: 'a)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>przyjmowaniu od Ogłoszeniodawców Ogłoszeń Współpracy do publikacji ich w Serwisie,</span>,
    en: <span>accepting Job Postings from Posters for publication in the Service,,</span>,
  },
  {
    item: 'b)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>publikowaniu Ogłoszeń Współpracy w Serwisie,</span>,
    en: <span>publishing Job Postings in the Service,</span>,
  },
  {
    item: 'c)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        przyjmowaniu aplikacji od osób fizycznych do stanowisk objętych Ogłoszeniami Współpracy i udostępnianiu tych aplikacji Ogłoszeniodawcom, oraz
      </span>
    ),
    en: <span>accepting applications from natural persons for positions covered by Job Postings and making these applications available to Posters,</span>,
  },
  {
    item: 'd)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>udostępnianiu treści cyfrowych, w tym w szczególności, ale nie wyłącznie, artykułów technicznych.</span>,
    en: <span>providing access to digital content, including, without limitation, technical articles,</span>,
  },
  {
    item: '3.3',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Korzystanie z Serwisu wymaga od Odwiedzającego spełnienia następujących wymagań technicznych:
      </span>
    ),
    en: <span>Using the Service requires the Visitor to meet the following technical requirements:</span>,
  },
  {
    item: 'a)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>posiadanie dostępu do urządzenia komputerowego lub mobilnego z dostępem do Internetu, które zapewnia bezpieczeństwo swoich użytkowników,</span>,
    en: <span>having access to a computer or mobile device with Internet access that ensures user security,</span>,
  },
  {
    item: 'b)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>posiadanie na urządzeniu aktualnej wersji przeglądarki internetowej Google Chrome, Mozilla Firefox, Microsoft Edge, Opera, Safari lub innej kompatybilnej z wymienionymi, oraz</span>,
    en: <span>having on the device the current version of a web browser such as Google Chrome, Mozilla Firefox, Microsoft Edge, Opera, Safari, or another compatible with the aforementioned,,</span>,
  },
  {
    item: 'c)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>włączenie w przeglądarce internetowej obsługi JavaScript oraz plików cookies,</span>,
    en: <span>enabling JavaScript and cookies support in the web browser.,</span>,
  },
  {
    item: '4.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Ogłoszeniodawcy</span>,
    en: <span>Posters</span>,
  },
  {
    item: '4.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Konto dedykowane dodawaniu Ogłoszeń Współpracy w Serwisie może założyć wyłącznie podmiot wykonujący we własnym imieniu działalność gospodarczą.
      </span>
    ),
    en: (
      <span>
        An account dedicated to adding Job Postings in the Service may only be created by entities conducting business activities on their own behalf.
      </span>
    ),
  },
  {
    item: '4.2.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Osoby fizyczne, która działają w imieniu Ogłoszeniodawcy w odniesieniu do czynności podejmowanych w ramach Serwisu wobec Usługodawcy oraz wobec osób trzecich, zobowiązane są mieć odpowiednie prawa reprezentacji lub umocowania.
      </span>
    ),
    en: (
      <span>
        Natural persons acting on behalf of the Poster concerning activities within the Service towards the Service Provider and third parties must have appropriate representation rights or authorization.
      </span>
    ),
  },
  {
    item: '4.3.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Usługodawca uprawniony jest do dezaktywacji lub usunięcia Konta Ogłoszeniodawcy w przypadku stwierdzenia naruszenia Regulaminu przez tego Ogłoszeniodawcę, a Ogłoszeniodawcy z tego tytułu nie przysługuje ani zwrot jakichkolwiek kosztów, ani odszkodowanie, ani jakiekolwiek inne roszczenie.
      </span>
    ),
    en: (
      <span>
        The Service Provider is entitled to deactivate and/or delete a Poster's Account in case of a breach of the Terms of Service by the Poster. The Poster is not entitled to any refund of costs, damages, or any other claim in this regard.
      </span>
    ),
  },
  {
    item: '5.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Ogłoszenia Współpracy</span>,
    en: <span>Job Postings</span>,
  },
  {
    item: '5.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Ogłoszenia Współpracy nie stanowią ofert w rozumieniu polskiego kodeksu cywilnego, a jedynie zaproszenia do rozpoczęcia procesu rekrutacyjnego w celu zawarcia umowy o pracę lub negocacji w celu zawarcia innego rodzaju umowy.</span>,
    en: <span>Job Postings do not constitute offers within the meaning of the Polish Civil Code, but only invitations to commence a recruitment process for entering into an employment contract or negotiations for entering into another type of contract.</span>,
  },
  {
    item: '5.2.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Ogłoszeniodawcy odpowiedzialni są za zapewnienie, aby treść Ogłoszeń Współpracy przez nich publikowana była zgodna z prawem, dobrymi obyczajami oraz normami etycznymi</span>,
    en: <span>Posters are responsible for ensuring that the content of Job Postings they publish complies with the law, good practices, and ethical standards.</span>,
  },
  {
    item: '5.3.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Odpowiedzialność za treść Ogłoszeń Współpracy, dotyczącą między innymi ich pełności, aktualności oraz poprawności, ponoszą wyłącznie ich Ogłoszeniodawcy.</span>,
    en: <span>The responsibility for the content of Job Postings, including their completeness, timeliness, and accuracy, lies solely with the Posters.</span>,
  },
  {
    item: '5.4.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Ogłoszenie Współpracy pozostaje aktywne przez okres 60 dni od daty publikacji, chyba, że zostanie wcześniej usunięte przez Ogłoszeniodawcę lub Usługodawcę. Po upływie okresu aktywacji Ogłoszenie jest niewidoczne dla Odwiedzających.</span>,
    en: <span>Each Job Posting remains active for a period of 60 days from the publication date, unless removed earlier by the Poster or the Service Provider. Upon expiration of the activation period, the Job Posting becomes invisible to Visitors.</span>,
  },
  {
    item: '5.5.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Ogłoszenie może być w każdym momencie usunięte przez Ogłoszeniodawcę.</span>,
    en: <span>A Job Posting can be deleted by the Poster at any time.</span>,
  },
  {
    item: '5.6.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Usługodawca uprawniony jest do usunięcia Ogłoszenia w przypadku stwierdzenia naruszenia Regulaminu przez Ogłoszeniodawcę, a Ogłoszeniodawcy z tego tytułu nie przysługuje ani zwrot jakichkolwiek kosztów, ani odszkodowanie, ani jakiekolwiek inne roszczenie.</span>,
    en: <span>The Service Provider reserves the right to remove a Job Posting if it determines that the Poster has violated the Terms of Service. The Poster is not entitled to any refund of costs, damages, or any other claim in this regard.</span>,
  },
  {
    item: '5.7.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Zabronione jest umieszczanie w Ogłoszeniach Współpracy zapytań o dane osobowe ujawniające pochodzenie rasowe lub etniczne, poglądy polityczne, przekonania religijne lub filozoficzne, przynależność wyznaniową, partyjną lub związkową, jak również danych o stanie zdrowia, kodzie genetycznym, nałogach lub życiu seksualnym oraz danych dotyczących skazań, orzeczeń o ukaraniu i mandatów karnych, a także innych orzeczeń wydanych w postępowaniu sądowym lub administracyjnym.</span>,
    en: <span>It is prohibited to include in Job Postings inquiries about personal data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, membership in a religious denomination, political party or trade union, as well as data concerning health, genetic code, addictions or sexual life, and data regarding criminal convictions, penalties, and fines, as well as other judgments issued in court or administrative proceedings.</span>,
  },
  {
    item: '5.8.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>W celach promocyjnych Ogłoszenia Współpracy mogą być publikowane przez Usługodawcę w całości, w części lub w formie streszczeń poza Serwisem, w innych serwisach internetowych, platformach reklamowych, materiałach promocyjnych, listach mailingowych oraz innych miejscach, w sposób zawierający Utwory Ogłoszeniodawcy, zgodnie z ich definicją zawartą w Punkcie 6.1 poniżej.</span>,
    en: <span>For promotional purposes, Job Postings may be published by the Service Provider in whole, in part, or in summary form outside of the Service, on other websites, advertising platforms, promotional materials, mailing lists, and other locations, in a manner that includes the Posters's Works, as defined in Section 6.1 below.</span>,
  },
  {
    item: '6.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Licencja</span>,
    en: <span>License</span>,
  },
  {
    item: '6.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Ogłoszeniodawca przy zakładaniu Konta, edycji Konta i dodawaniu Ogłoszeń, jak i przy korzystaniu z innych usług
        świadczonych przez Usługodawcę w ramach Serwisu, podaje nazwy handlowe, znaki graficzne oraz znaki słowne (dalej
        zwane "<strong>Utworami Ogłoszeniodawcy</strong>").
      </span>
    ),
    en: <span>When creating an Account, editing an Account, adding Job Postings, and using other services provided by the Service Provider within the Service, a Poster provides trade names, graphic symbols, and verbal marks (hereinafter referred to as the <strong>"Poster's Works"</strong>).</span>,
  },
  {
    item: '6.2.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Ogłoszeniodawca oświadcza, że ma pełnię majątkowych praw autorskich lub właściwe licencje do Utworów
        Ogłoszeniodawcy i ich podanie zgodnie z Punktem 6.1 powyżej nie narusza praw osób trzecich, a w szczególności,
        ale nie wyłącznie, praw autorskich, licencji i dóbr osobistych osób trzecich.
      </span>
    ),
    en: <span>The Poster declares that they hold full proprietary copyrights or appropriate licenses to the Poster's Works, and providing them in accordance with Section 6.1 above does not infringe the rights of third parties, particularly but not limited to copyrights, licenses, and personal rights of third parties.</span>,
  },
  {
    item: '6.3.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Ogłoszeniodawca ponosi pełną i wyłączną odpowiedzialność wobec osób trzecich w związku z podaniem Utworów
        Ogłoszeniodawcy zgodnie z Punktem 6.1 powyżej i zobowiązuje się pokryć koszty związane z zaspakajaniem roszczeń
        osób trzecich wobec Usługodawcy w związku z tym podaniem.
      </span>
    ),
    en: <span>The Poster assumes full and exclusive responsibility towards third parties in connection with providing the Poster's Works in accordance with Section 6.1 above and agrees to cover costs related to satisfying third-party claims against the Service Provider in this regard.</span>,
  },
  {
    item: '6.4.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Ogłoszeniodawca udziela Usługodawcy nieograniczonej terytorialnie oraz niewyłącznej licencji na używanie Utworów
        Ogłoszeniodawcy w celu realizacji usług świadczonych na rzecz Ogłoszeniodawcy przez Serwis, takich jak, w
        szczególności, ale nie wyłącznie, publiczne udostępnianie Ogłoszeń publikowanych przez Ogłoszeniodawcę, które
        zawierają Uwtory Ogłoszeniodawcy, jak i w celu promowania tych Ogłoszeń.
      </span>
    ),
    en: <span>The Poster grants the Service Provider a territorially unlimited and non-exclusive license to use the Poster's Works for the purpose of providing services to the Poster through the Service, including, but not limited to, publicly sharing Job Postings published by the Poster that contain the Poster's Works, as well as promoting these Job Postings.</span>,
  },
  {
    item: '6.5.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Licencja, o której mowa w Punkcie 6.4. powyżej udzielana jest nieodpłatnie w celu i na czas realizacji usług na
        rzecz Ogłoszeniodawcy przez Usługodawcę poprzez Serwis.
      </span>
    ),
    en: <span>The license referred to in Section 6.4 above is granted free of charge for the purpose and duration of providing services to the Poster by the Service Provider through the Service.</span>,
  },
  {
    item: '6.6.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        W celu realizacji usług na rzecz Ogłoszeniodawcy, w tym w szczególności, ale niewyłącznie, w celu promowania
        Ogłoszeń Ogłoszeniodawcy, Usługodawca uprawniony jest do udzielania sublicencji w odniesieniu do Utworów
        Ogłoszeniodawcy.
      </span>
    ),
    en: <span>To provide services to the Poster, including, but not limited to, promoting the Poster's Job Postings, the Service Provider is authorized to grant sublicenses concerning the Poster's Works.</span>,
  },
  {
    item: '6.7.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>Licencja, o której mowa w Punkcie 6.4. powyżej, udzielana jest na następującyh polach eksploatacji:</span>
    ),
    en: <span>The license referred to in Section 6.4 above is granted for the following fields of exploitation:</span>,
  },
  {
    item: 'a)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        w zakresie zastosowania Utworów Ogłoszeniodawcy: jednokrotne lub wielokrotne zastosowanie Utworów
        Ogłoszeniodawcy, w celach wskazanych w Punkcie 6.4. powyżej,
      </span>
    ),
    en: <span>regarding the application of the Poster's Works: single or multiple use of the Poster's Works for the purposes indicated in Section 6.4 above,</span>,
  },
  {
    item: 'b)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        w zakresie utrwalania i zwielokrotniania Utworów Ogłoszeniodawcy: wytwarzanie różnymi technikami egzemplarzy
        Utworów Ogłoszeniodawcy, w tym w szczególności, ale nie wyłącznie, technikami poligraficznymi, drukarskimi,
        reprograficznymi, magnetycznymi, informatycznymi, cyfrowymi, fotograficznymi, plastycznymi, wizualnymi,
        audiowizualnymi, multimedialnymi, a ponadto trwałe lub czasowe zwielokrotnianie Utworów Ogłoszeniodawcy w
        całości lub w części jakimikolwiek środkami i w jakiejkolwiek formie,
      </span>
    ),
    en: <span>regarding the preservation and reproduction of the Poster's Works: production of copies of the Poster's Works by various techniques, including but not limited to printing, reprographic, magnetic, IT, digital, photographic, artistic, visual, audiovisual, multimedia techniques, and furthermore, permanent or temporary reproduction of the Poster's Works in whole or in part by any means and in any form,</span>,
  },
  {
    item: 'c)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        w zakresie rozpowszechniania Utworów Ogłoszeniodawcy: publiczne wykonanie, wystawienie, wyświetlenie,
        odtwarzanie oraz nadawanie i reemitowanie, a także udostępnianie Utworów Ogłoszeniodawcy w taki sposób, aby
        każdy mógł mieć do nich dostęp w miejscu i w czasie przez siebie wybranym, w tym w szczególności, ale nie
        wyłącznie, w sieci Internet,
      </span>
    ),
    en: <span>regarding the dissemination of the Poster's Works: public performance, exhibition, display, playback, and broadcasting and rebroadcasting, as well as making the Poster's Works available in such a way that anyone can access them at a place and time chosen by them, including but not limited to on the Internet,</span>,
  },
  {
    item: 'd)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        w zakresie ingerencji w Utwory Ogłoszeniodawcy: tłumaczenia, przystosowywania, zmiany układu, dokonywanie
        skrótów lub jakiekolwiek inne zmiany tych utworów, z zachowaniem praw osoby, która tych zmian dokonała.
      </span>
    ),
    en: <span>regarding interference with the Poster's Works: translation, adaptation, rearrangement, making of summaries, or any other changes to these works, with the rights of the person making these changes being preserved.</span>,
  },
  {
    item: '6.8.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Ogłoszeniodawca niniejszym wyraża zgodę na anonimowe korzystanie przez Usługodawcę z Utworów Ogłoszeniodawcy na
        wszystkich polach eksploatacji wskazanych w Punkcie 6.7 powyżej, a w szczególności, ale nie wyłącznie,
        Usługodawca ma prawo do korzystania z Utworów Ogłoszeniodawcy bez oznaczenia autorstwa Ogłoszeniodawcy.
      </span>
    ),
    en: <span>The Poster hereby agrees to the anonymous use of the Poster's Works by the Service Provider in all fields of exploitation indicated in Section 6.7 above, particularly but not exclusively, the Service Provider has the right to use the Poster's Works without indicating the authorship of the Poster.</span>,
  },
  {
    item: '7.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Ochrona danych osobowych</span>,
    en: <span>Personal Data Protection</span>,
  },
  {
    item: '7.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>Integralnymi częściami niniejszego Regulaminu są Polityka Prywatności oraz Polityka Plików Cookies.</span>
    ),
    en: <span>The Privacy Policy and the Cookies Policy are integral parts of these Terms of Service.</span>,
  },
  {
    item: '7.2.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        W odniesieniu do danych osobowych Odwiedzających przetwarzanych przez Usługodawcę w związku ze świadczeniem
        Usług w ramach Serwisu, administratorem danych osobowych jest Usługodawca.
      </span>
    ),
    en: <span>With regard to the personal data of Visitors processed by the Service Provider in connection with the provision of Services within the Service, the Service Provider is the data controller.</span>,
  },
  {
    item: '7.3.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Usługodawca nie jest administratorem danych osobowych podanych poza Serwisem, nawet, gdy podanie tych danych
        nastąpiło po przekierowaniu z Serwisu, a administratorami tych danych są podmioty, które te dane
        zebrały lub przetwarzają.
      </span>
    ),
    en: <span>The Service Provider is not the data controller for personal data provided outside the Service, even if such data was provided after being redirected from the Service. The data controllers for such data are the entities that collected or process this data.</span>,
  },
  {
    item: '7.4.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Po zebraniu danych osobowych i udostępnieniu ich Ogłoszeniodawcy, zgodnie z Punktem 3.1
        b), administratorem tych danych osobowych staje się również Ogłoszeniodawca, który jest wyłącznie odpowiedzialny
        za przetwarzanie tych danych osobowych przez tego Ogłoszeniodawcę, które następuje po ich udostępnieniu, a
        Usługodawca w tym zakresie nie występuje w roli administratora.
      </span>
    ),
    en: <span>After collecting personal data and providing it to the Poster in accordance with Section 3.1(b), the Poster also becomes the data controller for these personal data, being solely responsible for the processing of this personal data that occurs after the provision. The Service Provider does not act as the data controller in this regard.</span>,
  },
  {
    item: '7.5.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Ogłoszeniodawca, który stał się administratorem danych osobowych zgodnie z Punktem 7.4 powyżej zobowiązany jest
        do wypełniania wszelkich obowiązków wymaganych przepisami prawa jako administrator danych osobowych, w tym w
        szczególności, ale nie wyłącznie, wdrożenia odpowiednich środków technicznych i organizacyjnych w celu
        wypełnienia obowiązków nakreślonych przepisami prawa oraz zapewniających bezpieczeństwo danych osobowych, oraz 
        <strong>wypełnienia obowiązków informacyjnych wobec osób, których dane dotyczą</strong>.
      </span>
    ),
    en: <span>The Poster, who has become the data controller in accordance with Section 7.4 above, is obliged to fulfill all legal obligations required as a data controller, including but not limited to, implementing appropriate technical and organizational measures to meet legal obligations and ensure data security, as well as <strong>fulfilling informational obligations towards the data subjects</strong>.</span>,
  },
  {
    item: '8.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Prawa i odpowiedzialność Usługodawcy.</span>,
    en: <span>The rights and liability of the Service Provider</span>,
  },
  {
    item: '8.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Usługodawca uprawniony jest w każdym momencie do zaprzestania świadczenia usług poprzez Serwis, jak i do
        wprowadzania przerw w świadczeniu tych usług.
      </span>
    ),
    en: (
      <span>
        The Service Provider is entitled to cease providing services through the Service at any time, as well as to introduce interruptions in the provision of these services.
      </span>
    ),
  },
  {
    item: '8.2.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Usługodawca nie daje jakiejkolwiek gwarancji, że informacje, dane i opinie zamieszczone w artykułach zawartych w
        Serwisie są poprawne.
      </span>
    ),
    en: (
      <span>
        The Service Provider does not guarantee that the information, data, and opinions presented in the articles contained in the Service are correct.
      </span>
    ),
  },
  {
    item: '8.3.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Odpowiedzialność Usługodawcy wobec danego Ogłoszeniodawcy ograniczona jest do wysokości kosztów, jakie Ogłoszeniodawca poniósł na zakup Usług Usługodawcy w ramach Serwisu, chyba, że Usługodawca działał z winy umyślnej.
      </span>
    ),
    en: (
      <span>
        The Service Provider's liability to a given Poster is limited to the amount of costs incurred by the Poster for purchasing the Service Provider's Services within the Service, unless the Service Provider acted with willful misconduct.
      </span>
    ),
  },
  {
    item: '8.3.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Usługodawca nie ponosi odpowiedzialności, gdy jego działania lub zaniechania wynikają z obowiązków nakładanych przez bezwzględnie obowiązujące przepisy prawa.
      </span>
    ),
    en: (
      <span>
        The Service Provider is not liable when its actions or omissions result from obligations imposed by mandatory provisions of law.
      </span>
    ),
  },
  {
    item: '9.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Reklamacje</span>,
    en: <span>Complaints</span>,
  },
  {
    item: '9.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Odwiedzający oraz Użytkownicy Serwisu mają prawo do składania reklamacji w sprawach świadczenia Usług przez Usługodawcę w ramach Serwisu.
      </span>
    ),
    en: <span>Visitors and Users of the Service have the right to file complaints regarding the provision of Services by the Service Provider within the Service.</span>,
  },
  {
    item: '9.2.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Reklamacje, o których mowa w Punkcie 9.1 powyżej, można składać listownie na adres rejestrowy Usługodawcy lub mailowo na kontakt@skillfind.tech.
      </span>
    ),
    en: <span>Complaints referred to in Section 9.1 above can be submitted by mail to the registered address of the Service Provider or by email to contact@skillfind.tech.</span>,
  },
  {
    item: '9.3.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Usługodawca dokłada starań, aby reklamacje rozpatrywane były w terminie do 30 dni kalendarzowych.
      </span>
    ),
    en: <span>The Service Provider strives to address complaints within 30 calendar days.</span>,
  },
  {
    item: '10.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Zmiana Regulaminu</span>,
    en: <span>Amendments to the Terms of Service</span>,
  },
  {
    item: '10.1',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Usługodawca ma prawo do zmiany Regulaminu oraz jego integralnych części, takich jak w szczególności, ale nie
        wyłącznie, Polityka Prywatności oraz Polityka Cookies, w odniesieniu do:
      </span>
    ),
    en: (
      <span>
        The Service Provider is entitled to amend these Terms of Service and their integral parts, including, without
        limitation, the Privacy Policy and the Cookies Policy, with regard to:
      </span>
    ),
  },
  {
    item: 'a)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>zmian wymaganych z uwagi na bezwzględnie obowiązujące przepisy prawa,</span>,
    en: <span>amendments required due to the mandatory provisions of law,</span>,
  },
  {
    item: 'b)',
    tier: 'subpoint',
    version: versions['1.0'],
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
    version: versions['1.0'],
    pl: <span>rozpoczęcia świadczenia nowych usług przez Usługodawcę w ramach Serwisu,</span>,
    en: <span>commencement of the provision of new services by the Service Provider within the Service,</span>,
  },
  {
    item: 'd)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>zmian w zakresie świadczenia dotychczasowych usług przez Usługodawcę w ramach Serwisu,</span>,
    en: (
      <span>
        amendments in the scope provisioning of the existing services by the Service Provider within the Service,
      </span>
    ),
  },
  {
    item: 'e)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>zakończenia świadczenia dotychczasowych usług przez Usługodawcę w ramach Serwisu,</span>,
    en: <span>termination of the provision of the existing services by the Service Provider within the Service,</span>,
  },
  {
    item: 'f)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>zmian w zakresie funkcjononowania Serwisu,</span>,
    en: <span>amendments in the scope of the functioning of the Service,</span>,
  },
  {
    item: 'g)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>zmian w zakresie ochrony prywatności Odwiedzających oraz analizy zachowań Odwiedzających Serwis,</span>,
    en: <span>amendments in the scope of privacy protection of the Visitors and the Visitor behavior analysis,</span>,
  },
  {
    item: 'h)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>zmian redakcyjnych.</span>,
    en: <span>editorial amendments.</span>,
  },
  {
    item: '10.2',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Zmiany Regulaminu wchodzą w życie w terminie wskazanym przez Usługodawcę, jednakże nie krótszym niż 14 dni od
        dnia powiadomienia o tych zmianach poprzez ich publikację na stronie dostępnej pod adresem
        https://skillfind.tech/regulamin, oraz w odniesieniu do dotychczasowych Użytkowników poprzez przesłanie
        informacji o tych zmianach na adres email Użytkownika podany przez Użytkownika i zapisany w Serwisie.
      </span>
    ),
    en: (
      <span>
        Aamendments to the Terms of Service enter into force on the date indicated by the Service Provider, however not
        shorter than 15 days from the date of notification about those amendments through their publication on the
        website available at https://skillfind.tech/terms-of-service, and with regard to the existing Users through
        sending information about these changes to the User's email address provided by the User and saved within the
        Service.
      </span>
    ),
  },
  {
    item: '10.3',
    tier: 'point',
    version: versions['1.0'],
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
    item: '10.5',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        W przypadku braku akceptacji planowanych zmian Regulaminu, dotychczasowy Użytkownik uprawniony jest do
        wypowiedzenia umowy dotyczącej prowadzenia Konta w Serwisie ze skutkiem natychmiastowym, w terminie 14 dni od
        dnia otrzymania powiadomienia o tych zmianach, poprzez wysłanie wiadomości email o odpowiedniej treści na adres{' '}
        <u>kontakt@skillfind.tech</u>, z zastrzeżeniem, że takie wypowiedzenie nie ma zastosowania do odpłatnch usług
        Usługodawcy świadczonych w ramach Serwisu aktywowanych przez Użytkownika przed tymi zmianami, aż do czasu
        zakończenia świadczenia tych usług.
      </span>
    ),
    en: (
      <span>
        In case of non-acceptance of the planned amendments to the Terms of Service, the existing User is entitiled
        terminate the agreement regarding Account maintenance within the Service with immediate effect, within the
        period of 14 days from the date of receiving notification of these changes, through sending an email message
        with the relevant content to the address <u>contact@skillfind.tech</u>, with the reservation that such
        termination is not applicable to the paid services provisioned by the Service Provider within the Service
        activated before these amendements, until the termination of provisioning of those services.
      </span>
    ),
  },
  {
    item: '10.6',
    tier: 'point',
    version: versions['1.0'],
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
    version: versions['1.0'],
    pl: <span>Postanowienia końcowe</span>,
    en: <span>Final Provisions</span>,
  },
  {
    item: '11.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Niniejszy Regulamin poddany jest prawu polskiemu.</span>,
    en: <span>These Terms of Service are governed by the Polish law.</span>,
  },
  {
    item: '11.2.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Spory wynikłe z niniejszego Regulaminu rozstrzygane będą przez sąd właściwy dla Usługodawcy, chyba, że bezwzględnie obowiązujące przepisy prawa określają inną właściwość.</span>,
    en: (
      <span>
        Disputes arising from these Terms of Service will be resolved by the court having jurisdiction over the Service Provider, unless mandatory provisions of law specify otherwise.
      </span>
    ),
  },
  {
    item: '11.3.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Niniejszy Regulamin obowiązuje od dnia 28 lipca 2024 r.</span>,
    en: <span>These Terms of Service are applicable as of July 28th, 2024.</span>,
  },
]
