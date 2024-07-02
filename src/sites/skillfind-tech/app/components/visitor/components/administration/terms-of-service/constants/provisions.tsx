import React from 'react'

const versions = {
  '1.0': '2020.06.01',
}

export const provisions = [
  {
    item: '1.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Przedmiot Regulaminu</span>,
    en: <span>TODO</span>,
  },
  {
    item: '',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Przedmiotem Regulaminu jest określenie zasad świadczenia Usług przez Usługodawcę w ramach Serwisu, zgodnie z
        definicjami wskazanymi w Punkcie 2.1 poniżej.
      </span>
    ),
    en: <span>TODO</span>,
  },

  {
    item: '2.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Definicje</span>,
    en: <span>Definitions</span>,
  },
  {
    item: '2.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>W niniejszym Regulaminie wyrażenia pisane z wielkiej litery mają następujące znaczenia:</span>,
    en: <span>In these Terms of Service the capitalized expressions have the following meanings:</span>,
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
    en: <span>TODO,</span>,
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
        <strong>Service</strong> - a web service located at the address <u>skillfind.tech</u>,
      </span>
    ),
  },
  {
    item: 'b)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        <strong>Usługodawca</strong> - Warsaw Digital Sp. z o.o., z siedzibą w Warszawie przy ul.&nbsp;Twardej&nbsp;18,
        00-105 Warszawa, zarejestrowana w rejestrze przedsiębiorców prowadzonym przez Sąd Rejonowy dla m. st. Warszawy,
        XII Wydział Gospodarczy Krajowego Rejestru Sądowego, pod numerem KRS 0000735294, o kapitale zakładowym 20.000,00
        PLN, w pełni wpłaconym, posiadająca numer REGON 380529016 oraz numer NIP 5252753799,
      </span>
    ),
    en: (
      <span>
        <strong>Service Provider</strong> - Warsaw Digital Sp. z o.o., with its registered office in Warsaw
        at&nbsp;Twarda 18 St., 00-105 Warsaw, registered in the register of entrepreneurs held by the District Court for
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
        Puncie 3.1 poniżej,
      </div>
    ),
    en: (
      <span>
        <strong>TODO</strong> - TODO
      </span>
    ),
  },

  {
    item: 'c)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        <strong>Odwiedzający</strong> - osoba fizyczna, która uzyskała dostęp do Serwisu, np. poprzez przeglądarkę internetową,
      </span>
    ),
    en: (
      <span>
        <strong>Visitor</strong> - a natural person which obtained access to the Service, for example through a web browser,
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
        using the logging system,
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
        <strong>Poster</strong> - an entity conducting business activity in its own name, which has an Account in the
        Service dedidacted to adding Job Postings,
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
        warunkami są publicznie dostępne i informują o poszukiwaniu osoby lub osób fizycznych do pracy na podstawie
        umowy o pracę lub współpracę na podstawie umowy cywilnoprawnej innej niż umowa o pracę, na stanowiska o profilu
        technologicznym,
      </span>
    ),
    en: (
      <span>
        <strong>Job Posting</strong> - an record in the Service's database, some elements of which are publicly
        available under certain conditions and inform about the search for a natural person and/or persons for
        employment based on an employment contract and/or cooperation based on a civil law contract other than an
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
        <strong>Candidate</strong> - TODO,
      </span>
    ),
  },

  {
    item: '3.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Usługi Usługodawcy</span>,
    en: <span>TODO</span>,
  },
  {
    item: '3.1',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Usługi świadczone przez Usługodawcę w ramach niniejszego Serwisu polegają w szczególności, ale nie wyłącznie,
        na:
      </span>
    ),
    en: <span>TODO</span>,
  },

  {
    item: 'a)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>przyjmowaniu od Ogłoszeniodawców Ogłoszeń Współpracy i publikowaniu ich w Serwisie,</span>,
    en: <span>TODO,</span>,
  },
  {
    item: 'b)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        przyjmowaniu aplikacji od Odwiedzających w odniesieniu do Ogłoszeń Współpracy i udostępnianiu tych aplikacji
        Ogłoszeniodawcom,
      </span>
    ),
    en: <span>TODO,</span>,
  },
  {
    item: 'c)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        przekierowywaniu Odwiedzających do formularzy aplikacyjnych Ogłoszeniodawców znajdujących się poza Serwisem,
        oraz
      </span>
    ),
    en: <span>TODO,</span>,
  },
  {
    item: 'd)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: <span>udostępnianiu treści cyfrowych, w tym w szczególności, ale nie wyłącznie, artykułów technicznych,</span>,
    en: <span>TODO,</span>,
  },

  {
    item: '2.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Serwis</span>,
    en: <span>The Service</span>,
  },
  {
    item: '2.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Właścicielem i administratorem Serwisu jest Usługodawca.</span>,
    en: <span>The owner and the administrator of the Service is the Service Provider.</span>,
  },
  {
    item: '2.2.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Serwis przeznaczony jest do prezentowania artykułów dotyczących programowania komputerowego.</span>,
    en: <span>The Service is intended to present articles regarding computer programming.</span>,
  },
  {
    item: '3.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Ogłoszeniodawcy</span>,
    en: <span>TODO</span>,
  },
  {
    item: '3.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Konto dedykowane dodawaniu Ogłoszeń Współpracy w Serwisie może założyć wyłącznie podmiot wykonujący we własnym imieniu działalność gospodarczą.
      </span>
    ),
    en: (
      <span>
        {/* An Account in the Service can be registered by a) a natural person not acting as an entrepreneur (Private
        Account) and/or b) an entity acting as an entrepreneur (Business Account). */}
      </span>
    ),
  },

  // TODO

  {
    item: '3.2.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Osoby fizyczne, która działają w imieniu Ogłoszeniodawcy w odniesieniu do czynności podejmowanych w ramach Serwisu wobec Usługodawcy oraz wobec osób trzecich, zobowiązane są mieć odpowiednie prawa reprezentacji lub umocowania.
      </span>
    ),
    en: (
      <span>
        TODO
      </span>
    ),
  },

  {
    item: '3.2.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Usługodawca uprawniony jest do deaktywacji lub usunięcia Konta w przypadku stwierdzenia naruszenia Regulaminu
        przez Użytkownika.
      </span>
    ),
    en: (
      <span>
        The Service Provider is entitled to de-activate and/or delete the Account in case of determining of violation of
        these Terms of Service by the User.
      </span>
    ),
  },

  {
    item: '4.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Ogłoszenia Współpracy</span>,
    en: <span>TODO</span>,
  },
  {
    item: '4.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Ogłoszenia Współpracy nie stanowią ofert w rozumieniu polskiego kodeksu cywilnego, a jedynie zaproszenia do rozpoczęcia procesu rekrutacyjnego w celu zawarcia umowy o pracę lub negocacji w celu zawarcia innego rodzaju umowy.</span>,
    en: <span>TODO</span>,
  },
  {
    item: '4.2.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Ogłoszeniodawcy odpowiedzialni są za zapewnienie, aby treść Ogłoszeń Współpracy przez nich publikowana była zgodna z prawem, dobrymi obyczajami oraz normami etycznymi</span>,
    en: <span>TODO</span>,
  },
  {
    item: '4.3.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Odpowiedzialność za treść Ogłoszeń Współpracy, dotyczącą między innymi ich pełności, aktualności oraz poprawności, ponoszą wyłącznie ich Ogłoszeniodawcy.</span>,
    en: <span>TODO</span>,
  },
  {
    item: '4.4.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Dodane Ogłoszenie pozostaje aktywne przez okres 60 dni, chyba, że zostanie wcześniej usunięte przez Ogłoszeniodawcę lub Usługodawcę. Po upływie okresu aktywacji Ogłoszenie jest niewidoczne dla Odwiedzających.</span>,
    en: <span>TODO</span>,
  },
  {
    item: '4.5.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Ogłoszenie może być w każdym momencie usunięte przez Ogłoszeniodawcę.</span>,
    en: <span>TODO</span>,
  },
  {
    item: '4.6.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Usługodawca uprawniony jest do usunięcia Ogłoszenia w przypadku stwierdzenia naruszenia Regulaminu przez Ogłoszeniodawcę, a Ogłoszeniodawcy z tego tytułu nie przysługuje ani zwrot jakichkolwiek kosztów, ani odszkodowanie, ani jakiekolwiek inne roszczenie.</span>,
    en: <span>TODO</span>,
  },
  {
    item: '4.7.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Zabronione jest umieszczanie w Ogłoszeniach Współpracy zapytań o dane osobowe ujawniające pochodzenie rasowe lub etniczne, poglądy polityczne, przekonania religijne lub filozoficzne, przynależność wyznaniową, partyjną lub związkową, jak również danych o stanie zdrowia, kodzie genetycznym, nałogach lub życiu seksualnym oraz danych dotyczących skazań, orzeczeń o ukaraniu i mandatów karnych, a także innych orzeczeń wydanych w postępowaniu sądowym lub administracyjnym.</span>,
    en: <span>TODO</span>,
  },

  {
    item: '4.7.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>W celach promocyjnych Ogłoszenia Współpracy mogą być publikowane przez Usługodawcę w całości, w części lub w formie streszczeń poza Serwisem, w innych serwisach internetowych, platformach reklamowych, materiałach promocyjnych, listach mailingowych oraz innych miejscach, w sposób zawierający Utwory Ogłoszeniodawcy, zgodnie z ich definicją zawartą w Punkcie X.1 poniżej.</span>,
    en: <span>TODO</span>,
  },

  // REPRESENTATION

  {
    item: 'X.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Licencja</span>,
    en: <span>License</span>,
  },
  {
    item: 'X.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Ogłoszeniodawca przy zakładaniu Konta, edycji Konta i dodawaniu Ogłoszeń, jak i przy korzystaniu z innych usług
        świadczonych przez Usługodawcę w ramach Serwisu, podaje nazwy handlowe, znaki graficzne oraz znaki słowne (dalej
        zwane "<strong>Utworami Ogłoszeniodawcy</strong>").
      </span>
    ),
    en: <span>TODO</span>,
  },
  {
    item: 'X.2.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Ogłoszeniodawca oświadcza, że ma pełnię majątkowych praw autorskich lub właściwe licencje do Utworów
        Ogłoszeniodawcy i ich podanie zgodnie z Punktem X.1 powyżej nie narusza praw osób trzecich, a w szczególności,
        ale nie wyłącznie, praw autorskich, licencji i dóbr osobistych osób trzecich.
      </span>
    ),
    en: <span>TODO</span>,
  },
  {
    item: 'X.3.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Ogłoszeniodawca ponosi pełną i wyłączną odpowiedzialność wobec osób trzecich w związku z podaniem Utworów
        Ogłoszeniodawcy zgodnie z Punktem X.1 powyżej i zobowiązuje się pokryć koszty związane z zaspakajaniem roszczeń
        osób trzecich wobec Usługodawcy w związku z tym podaniem.
      </span>
    ),
    en: <span>TODO</span>,
  },
  {
    item: 'X.4.',
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
    en: <span>TODO</span>,
  },
  {
    item: 'X.5.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Licencja, o której mowa w Punkcie X.4. powyżej udzielana jest nieodpłatnie w celu i na czas realizacji usług na
        rzecz Ogłoszeniodawcy przez Usługodawcę poprzez Serwis.
      </span>
    ),
    en: <span>TODO</span>,
  },
  {
    item: 'X.6.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        W celu realizacji usług na rzecz Ogłoszeniodawcy, w tym w szczególności, ale niewyłącznie, w celu promowania
        Ogłoszeń Ogłoszeniodawcy, Usługodawca uprawniony jest do udzielania sublicencji w odniesieniu do Utworów
        Ogłoszeniodawcy.
      </span>
    ),
    en: <span>TODO</span>,
  },

  {
    item: 'X.7.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>Licencja, o której mowa w Punkcie X.4. powyżej, udzielana jest na następującyh polach eksploatacji:</span>
    ),
    en: <span>TODO</span>,
  },
  {
    item: 'a)',
    tier: 'subpoint',
    version: versions['1.0'],
    pl: (
      <span>
        w zakresie zastosowania Utworów Ogłoszeniodawcy: jednokrotne lub wielokrotne zastosowanie Utworów
        Ogłoszeniodawcy, w celach wskazanych w Punkcie X.4. powyżej,
      </span>
    ),
    en: <span>TODO</span>,
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
    en: <span>TODO</span>,
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
    en: <span>TODO</span>,
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
    en: <span>TODO</span>,
  },
  {
    item: 'X.8.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Ogłoszeniodawca niniejszym wyraża zgodę na anonimowe korzystanie przez Usługodawcę z Utworów Ogłoszeniodawcy na
        wszystkich polach eksploatacji wskazanych w Punkcie X.7 powyżej, a w szczególności, ale nie wyłącznie,
        Usługodawca ma prawo do korzystania z Utworów Ogłoszeniodawcy bez oznaczenia autorstwa Ogłoszeniodawcy.
      </span>
    ),
    en: <span>TODO</span>,
  },
  {
    item: '9.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Ochrona danych osobowych</span>,
    en: <span>Personal Data Protection</span>,
  },
  {
    item: '9.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>Integralnymi częściami niniejszego Regulaminu są Polityka Prywatności oraz Polityka Plików Cookies.</span>
    ),
    en: <span>The Privacy Policy and the Cookies Policy consitute integral parts of these Terms of Service.</span>,
  },
  {
    item: '9.2.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        W odniesieniu do danych osobowych Odwiedzających przetwarzanych przez Usługodawcę w związku ze świadczeniem
        Usług w ramach Serwisu, administratorem danych osobowych jest Usługodawca.
      </span>
    ),
    en: <span>TODO</span>,
  },

  {
    item: '9.3.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Usługodawca nie jest administratorem danych osobowych podanych poza Serwisem, nawet, gdy podanie tych danych
        nastąpiło po przekierowaniu z Serwisu. W szczególności, ale nie wyłącznie, Usługodawca nie jest administratorem
        danych osobowych podanych po przekierowaniu Odwiedzających do formularzy aplikacyjnych Ogłoszeniodawców
        znajdujących się poza Serwisem, zgodnie z Punktem 3.1 c), których administratorem są podmioty, które te dane
        zebrały lub przetwarzają.
      </span>
    ),
    en: <span>TODO</span>,
  },
  {
    item: '9.4.',
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
    en: <span>TODO</span>,
  },
  {
    item: '9.5.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Ogłoszeniodawca, który stał się administratorem danych osobowych zgodnie z Punktem 9.4 powyżej zobowiązany jest
        do wypełniania wszelkich obowiązków wymaganych przepisami prawa jako administrator danych osobowych, w tym w
        szczególności, ale nie wyłącznie, wdrożenia odpowiednich środków technicznych i organizacyjnych w celu
        wypełnienia obowiązków nakreślonych przepisami prawa oraz zapewniających bezpieczeństwo danych osobowych, oraz{' '}
        <strong>spełnienia obowiązków informacyjnych wobec osób, których dane dotyczą</strong>.
      </span>
    ),
    en: <span>TODO</span>,
  },



  {
    item: '5.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Prawa i odpowiedzialność Usługodawcy.</span>,
    en: <span>The rights and liability of the Service Provider</span>,
  },
  {
    item: '5.1.',
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
        The Service Provider is entitled at any time to terminate rendering of the services through the Service, and/or
        to interrupt rendering of those services.
      </span>
    ),
  },
  {
    item: '5.2.',
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
        The Service Provider does not give any guarantee that the information, data and opinions included in the
        articles in the Service are correct.
      </span>
    ),
  },

  {
    item: 'X.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Reklamacje</span>,
    en: <span>TODO</span>,
  },
  {
    item: 'X.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Użytkownicy Serwisu mają prawo do składania reklamacji w sprawach świadczenia Usług przez Usługodawcę w ramach Serwisu.
      </span>
    ),
    en: <span>TODO</span>,
  },
  {
    item: 'X.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Reklamacje, o których mowa w Punkcie X.1 powyżej, można składać listownie na adres rejestrowy Usługodawcy lub mailowo na kontakt@skillfind.tech.
      </span>
    ),
    en: <span>TODO</span>,
  },
  {
    item: 'X.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: (
      <span>
        Usługodawca dokłada starań, aby reklamacje rozpatrywane były w terminie do 30 dni kalendarzowych.
      </span>
    ),
    en: <span>TODO</span>,
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
    item: '7.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>Postanowienia końcowe</span>,
    en: <span>TODO</span>,
  },
  {
    item: '7.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Niniejszy Regulamin poddany jest prawu polskiemu.</span>,
    en: <span>These Terms of Service are governed by the Polish law.</span>,
  },
  {
    item: '7.2.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Spory wynikłe z niniejszego Regulaminu rozstrzygane będą przez sąd właściwy dla Usługodawcy.</span>,
    en: (
      <span>
        Disputes arising out of these Terms of Service shall be determined by the court having jurisdiction over the
        Service Provider.
      </span>
    ),
  },
  {
    item: '7.3.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>Niniejszy Regulamin obowiązuje od dnia 1 czerwca 2021 r.</span>,
    en: <span>These Terms of Service are applicable as of 1st June 2020.</span>,
  },
  {
    item: 'X.',
    tier: 'header',
    version: versions['1.0'],
    pl: <span>TODO</span>,
    en: <span>TODO</span>,
  },
  {
    item: 'X.1.',
    tier: 'point',
    version: versions['1.0'],
    pl: <span>TODO</span>,
    en: <span>TODO</span>,
  },
]
