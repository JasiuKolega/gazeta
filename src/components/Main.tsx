import { Box, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";

const Main = () => {
  return (
    <Box pt={"50px"}>
      <Box textAlign={"center"}>
        <Heading fontSize={"60px"}>Zajazd na Soplicowo</Heading>
      </Box>

      <Box display={"flex"} borderBottom={"3px solid #000"} pb={"20px"}>
        <Box width={"500px"}>
          <Text
            textAlign={"center"}
            fontSize={"25px"}
            fontWeight={700}
            pt={"20px"}
          >
            Jak doszło do zajazdu na Soplicowo?
          </Text>
          <Text fontSize={"20px"} pt={"10px"}>
            Powodem zajazdu na Soplicowo był spór Horeszków z Soplicami o zamek.
            Zamek był pierwotnie rodową siedzibą stolnika Horeszki. Właściciel
            zginął podczas napadu wojsk rosyjskich od śmiertelnego postrzału
            Jacka Soplicy. Po zakończeniu wojny rząd odebrał dobra Horeszkom i
            część wraz z zamkiem przekazał w dowód wdzięczności Soplicom. Zamek
            od tego czasu niszczał, a jedynym jego opiekunem był dawny sługa
            Stolnika – klucznik Gerwazy. On opowiedział Hrabiemu całą historię
            zamku. Hrabia postanowił odzyskać nieprawnie zagrabione dobra. Do
            kłótni z Soplicami dochodzi podczas wieczerzy na zamku, którą
            przygotował Protazy, sługa Sędziego. Protazy chciał w ten sposób
            przekonać wszystkich, że dawna siedziba Horeszków jest we władaniu
            Sopliców. Po kłótni doszło do bijatyki. Po jednej stronie był
            Klucznik z Hrabią, po drugiej Podkomorzy, Wojski i inni goście
            Sędziego. Gdy goście opuścili zamek Gerwazy przedstawia ostatniemu z
            rodu Horeszków plan zajazdu. Tłumaczy, że na pomoc trzeba wezwać
            szlachtę z zaścianka w Dobrzyniu i innych miejscowościach, gdzie
            mieszkańcy są przychylni Horeszkom. Obiecuje zebrać „trzystu
            wąsatych szlachciców”.
          </Text>
          <Box pt={"30px"}>
            <Image
              src={"/bitwa.jpg"}
              alt={"bitwa img"}
              width={"480"}
              height={"800"}
            />
            <Text textAlign={"center"} fontSize={"20px"} fontWeight={600}>
              Maksymilian Gierymski - Zajazd na Soplicowo
            </Text>
          </Box>
        </Box>
        <Box width={"500px"} display={"flex"} flexDirection={"column"}>
          <Box pt={"20px"}>
            <Image
              src={"/zajazd.jpg"}
              alt={"zajazd img"}
              width={"500"}
              height={"700"}
            />
          </Box>
          <Box pt={"10px"}>
            <Text fontSize={"25px"} fontWeight={700}>
              Opis bitwy w Soplicowo
            </Text>
            <Text fontSize={"20px"}>
              Po uczcie na zamku do Soplicowa przybywają Moskale z zakutą
              szlachtą. Sędzia stara się załagodzić incydent, ale bez
              skutecznie. Tymczasem na dziedziniec wjeżdża kwestarz Robak,
              przywożąc pełne wozy ukrytej broni. Wozami powożą Maciek
              Dobrzyński i Bartek Prusak. Robak udaje zadowolonego z losu
              szlachty, ale jednocześnie stara się spić żołnierzy. Podpity Płut
              narzuca się kobietom i dostaje za to policzek od Tadeusza.
              Rozpoczyna to walkę. Szlachta zostaje rozkuta i wspiera
              walczących. Polacy zdobywają przewagę, ale Rykow formuje szyk i
              rusza w stronę dworu. Szlachcie udaje się odbić atak. Żołnierze
              rosyjscy formują klin, aby odeprzeć szturm dżokejów Hrabiego.
              Następuje impas w walkach. Jedynie Tadeusz co pewien czas zabija
              kogoś zza drzewa. W celu zaprzestania rozlewu krwi Tadeusz
              proponuje pojedynek, ale major Płut wykręca się. Pojedynkować ma
              się Rykow z Hrabią, jednak do pojedynku nie dochodzi, ponieważ z
              szeregów rosyjskich pada strzał. Porozumienie zostaje zerwane.
              Walkę kończy przygniecenie żołnierzy rosyjskich ogromną
              spróchniałą sernicą. Szlachta dobija niedobitków, a Robak ratuje
              życie Gerwazemu, który pędził wprost na Rosjan. Po tych
              wydarzeniach Podkomorzy ogłasza koniec bitwy.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box display={"flex"} mb={"50px"}>
        <Box pt={"30px"} width={"500px"}>
          <Heading textAlign={"center"} fontSize={"25px"}>
            OGŁOSZENIE
          </Heading>
          <Text pt={"10px"} textAlign={"center"} fontSize={"20px"} pr={"10px"}>
            Uwaga! Drodzy czytelniki, dnia 24 lipca 2023 roku gazeta literacka
            przestanie produkować gazety! Zaznaliśmy znacznych strat
            pieniężnych, więć kupujcie szybciej nasze najnowsze wydania
          </Text>
          <Text textAlign={"right"} fontSize={"20px"} pt={"15px"} pr={"20px"}>
            W imieniu Gazety Literackiej
          </Text>
          <Text textAlign={"right"} fontSize={"20px"} pr={"20px"}>
            XYZ
          </Text>
        </Box>
        <Box pt={"30px"} width={"500px"}>
          <Heading textAlign={"center"} fontSize={"25px"}>
            KUP PIERWSZY!
          </Heading>
          <Text pt={"10px"} textAlign={"center"} fontSize={"20px"} pr={"10px"}>
            Chętnie zapraszamy wszystkich czytelników do zapoznania się z naszą
            nową gazetą, która zostanie opublikowana 10 kwietnia 2023 roku o
            godzinie 17:00. W tej gazecie będzie omawiana lektura Quo Vadis.
            Ważna informacja! Gazeta będzie kosztowała na 50 grosz więcej i ten,
            kto pierwszy kupie tę gazetę otrzyma tajny prezent.
          </Text>
          <Text textAlign={"right"} fontSize={"20px"} pt={"15px"}>
            W imieniu Gazety Literackiej
          </Text>
          <Text textAlign={"right"} fontSize={"20px"}>
            XYZ
          </Text>
        </Box>
      </Box>
      <Box pb={"20px"}>
        <Text textAlign={"center"} opacity={0.5}>
          &copy; Alexandr Holobokov. All rights reserved
        </Text>
      </Box>
    </Box>
  );
};

export default Main;
