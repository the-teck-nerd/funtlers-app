import React from "react";
import AboutRow from "../AboutRow/AboutRow";
import InnerHeader from "../InnerHeader/InnerHeader";

import "./TermsPage.scss";

function TermsPage() {
  return (
    <div className="about_page">
      <InnerHeader
        HeaderHeading="Brukervilkår"
        PageText={"ALMINNELIGE VILKÅR FOR BRUK AV FUNTLERS AS SINE TJENESTER"}
        hideHome={false}
      />
      <div className="about_main">
        <div className="container">
          <div className="">
            <h2 className="heading-h2">Generelt</h2>
            <p className="heading-s">
              Følgende vilkår gjelder for bruk av tjenester fra Funtlers AS
              herunder nettsiden{" "}
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.funtlers.com/"
              >
                www.funtlers.com{" "}
              </a>{" "}
              og alle tilknyttede sider, apper, mobilsider og andre plattformer
              som Funtlers AS velger å benytte for sine tjenester.
              <br /> <br />
              Disse vilkårene gjelder for bruk av Funtlers AS tjenester uansett
              hvilken plattform du bruker tjenesten på. Bruken av Funtlers AS
              tjenester innebærer at du godtar disse vilkårene. Du godtar
              vilkårene ved å opprette en brukerkonto, gjennomfører et kjøp
              eller på annen måte tar i bruk Funtlers AS tjenester.
            </p>
          </div>
          <div className="terms-section">
            <h2 className="heading-h2">Om Funtlers AS </h2>
            <p className="heading-s">
              Funtlers AS er en formidler av andre sine varer og tjenester.
              Funtlers AS sin viktigste funksjon er å legge til rette for at
              våre brukere/medlemmer gis mulighet til å kjøpe
              opplevelsesaktiviteter fra tredjepartsleverandører som Funtlers AS
              har forhandlet med på brukernes vegne. Det vil fremgå tydelig av
              hvert enkelt tilbud hvem som er selger /tjenesteyter og hva
              rabatten er.
              <br />
              <br />
              For å bruke Funtlers AS sine tjenester gjelder følgende vilkår:
            </p>
            <ul className="heading-s  ul-style">
              <li>Du må være minst 18 år for å foreta et kjøp</li>
              <li>
                Du besitter myndighet til å inngå skriftlige, juridiske avtaler
              </li>
              <li>
                Du forstår og er enig med alle de spesifikke vilkår som
                presenteres i hvert kjøp, samt i dette samlede dokumentet
              </li>
              <li>
                Du er enig i at det er ditt ansvar å holde passordet til kontoen
                konfidensielt og å sjekke at din egen konto ikke bli brukt av
                uvedkommende
              </li>
              <li>
                Vår anbefaling er at du velger et passord med høy sikkerhet (Ex.
                både store og små bokstaver og spesialtegn)
              </li>
              <li>
                Kontoen din er personlig og bør ikke brukes av noen andre, selv
                med skriftlig eller muntlig tillatelse
              </li>
              <li>
                All informasjon du gir Funtlers AS i alle prosesser som er
                utført på våre plattformer må være nøyaktig og fullstendig
              </li>
            </ul>
          </div>
          <div className="terms-section">
            <h2 className="heading-h2">Behandling av personopplysninger</h2>
            <p className="heading-s">
              Funtlers AS behandler personopplysninger om deg som kunde for å
              kunne tilby våre tjenester, forbedre brukeropplevelsen og utvikle
              eksisterende og fremtidige tjenester vi tilbyr. Behandlingen av
              personopplysninger som Funtlers AS utfører, er i samsvar med
              gjeldende lov.
              <br />
              <br />
              Funtlers AS behandler en rekke personopplysninger, som navn,
              telefonnummer, e-postadresse osv. For oss på Funtlers AS , er det
              viktig å understreke at det er du som er eier av din personlige
              informasjon, og vi går alltid i fra at du selv bestemmer hva din
              personlige informasjon vil bli brukt til. Det kan imidlertid være
              tilfeller der FuntlersAS , i henhold til loven, er pålagt å
              behandle dine personopplysninger. Fortsatt behandling kan
              forekomme, for eksempel for regnskapsmessige formål eller ved
              reklamasjonshenvendelser, da vi må lagre noen av dine personlige
              data for å oppfylle våre lovbestemte forpliktelser.
            </p>
          </div>
          <div className="terms-section">
            <h2 className="heading-h2">Din konto</h2>
            <p className="heading-s">
              Hver bruker kan kun opprette én personlig konto. Brukeren er selv
              er ansvarlig for sikkerheten omkring sin konto, for eksempel at
              ikke passordet kommer på avveie og at ikke andre gis tilgang til
              kontoen. Funtlers AS er ikke ansvarlig for tap eller ulempe som
              følge av misbruk av din konto såfremt slik tap ikke skyldes
              forhold innenfor Funtlers AS sin kontroll. Hvis du oppgir uriktig
              info under registreringsprosessen eller senere, forbeholder
              Funtlers AS seg retten til å stenge kontoen og eventuelt kreve
              erstatning for økonomisk tap eller kostnader som har påløpt som
              følge av dette.
            </p>
          </div>
          <div className="terms-section">
            <h2 className="heading-h2">Avregistrering</h2>
            <p className="heading-s">
              Det er lett å avregistrere seg fra{" "}
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.funtlers.com/"
              >
                www.funtlers.com{" "}
              </a>
              . Hvis du av en eller annen grunn vil slette kontoen din, send en
              e-post til support@funtlers.com, slik at informasjonen din blir
              fjernet fra vår database.
            </p>
          </div>
          <div className="terms-section">
            <h2 className="heading-h2">
              Funtlers AS sin bruk av informasjonskapsler
            </h2>
            <p className="heading-s">
              Vi i Funtlers AS mener at bruk av informasjonskapsler hjelper deg
              som kunde, fordi det gir oss mulighet til å forbedre
              brukeropplevelsen ved å forutse hvordan du bruker nettsiden vår,
              basert på dine preferanser.
            </p>
          </div>
          <div className="terms-section">
            <h2 className="heading-h2">Priser</h2>
            <p className="heading-s">Samtlige priser er oppgitt i NOK.</p>
          </div>
          <div className="terms-section">
            <h2 className="heading-h2">Kjøp</h2>
            <p className="heading-s">
              Kjøp kan kun gjøres gjennom Funtlers AS nettside eller
              mobilnettsted. Vi aksepterer ikke kjøp via telefon, faks eller
              e-post. <br />
              <br />
              Funtlers AS fungerer som en annonseplattform for de leverandørene
              som presenteres på siden. Funtlers AS er kun en formidler av de
              tjenester og produkter som publiseres. Avtale om kjøp av aktivitet
              som du gjør inngås dermed kun med selskapet som er beskrevet i
              tilbudet og alt kjøpsrettslig ansvar ligger hos den respektive
              leverandøren. <br />
              <br />
              Ved kjøp godkjenner du at Funtlers AS ikke kan holdes ansvarlig
              for eventuelle reklamasjoner ved produktet eller tjenesten,
              herunder, inkludert, men ikke begrenset til, feil eller mangler,
              forsinkelse på levering, ikke-tilfredsstillende kundeopplevelse,
              vare/tjeneste ikke som beskrevet eller ikke tilgjengelig
              leverandør. Funtlers AS tar forbehold om skrivefeil i opplysninger
              om dealen, vilkår og prissetting.
            </p>
          </div>
          {/* <div className="terms-section">
            <h2 className="heading-h2">Betaling</h2>
            <h3 className="heading-h2 sub-heading">Klarna Checkout</h3>
            <p className="heading-s">
              Funtlers AS benytter Klarna Checkout som betalingsløsning. Klarna
              Checkout er trygg og enkel og tilbyr deg som kunde flere ulike
              betalingsalternativer. Du kan velge mellom alternativene Faktura,
              Delbetaling eller Kortbetaling. <br />
              <br />
              Klarna Checkout skiller på kjøp og betaling, hvilket innebærer at
              du først etter bekreftet kjøp velger betalingsatlernativ. Under
              følger en mer utfyllende forklaring på de ulike alternativene du
              kan velge mellom. For fullstendige vilkår til Klarna Checkout, se{" "}
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.klarna.com/no/vilkar"
              >
                www.klarna.com/no/vilkar{" "}
              </a>{" "}
              <br />
              <br />
              Merk at Klarna kan oppdatere sine vilkår. I tilfelle konflikt
              mellom disse betalingsbetingelsene og Klarnas vilkår, gjelder
              Klarnas vilkår. Ved eventuelle spørsmål er du alltid velkommen til
              å ringe Klarna på telefonummer 21 01 89 91 alle hverdager mellom
              kl. 08.00 – 17:00.
            </p>

            <h3 className="heading-h2 sub-heading">Kortbetaling</h3>
            <p className="heading-s">
              Velger du kortbetaling kan dette gjøres med hjelp av Visa eller
              Mastercard. For å benytte dette betalingsalternativet må du angi
              kortnummer, kortets gyldighetstid samt CVC-koden. Ingen avgift
              tilkommer ved kjøp gjennom kortbetaling. <br />
              <br /> Du kan enkelt velge at Klarna skal huske dine kortdetaljer,
              dette for å forenkle fremtidige kjøp.
            </p>

            <h3 className="heading-h2 sub-heading">
              Klarnas behandling av personopplysninger{" "}
            </h3>
            <p className="heading-s">
              Funtlers AS og Klarna er sammen personopplysningsansvarlige for
              behandling av personopplysninger koblet til det
              betalingsalternativet du velger ved kjøp. For en detaljert
              redgjørelse over hva dette innebærer, les vår integritetspolicy og
              Klarnas databeskyttelsespolicy.
            </p>
          </div> */}

          <div className="terms-section">
            <h2 className="heading-h2">Angrerett</h2>
            <p className="heading-s">
              Angrefristen rettes mot leverandøren av den aktuelle aktiviteten.
              Funtlers AS forplikter seg ikke til å behandle angresaken, og ved
              kjøp er kunde inneforstått med at kjøpsavtalen er inngått mellom
              kunde og oppgitt leverandør av aktiviteten. <br />
              <br /> Det er imidlertid visse vilkår som må fylles for at
              angreretten skal være gyldig. Retten til å angre frafaller ved
              følgende tilfeller:
            </p>
            <ul className="heading-s ul-style">
              <li>Hvis aktivitets-koden er brukt</li>
              <li>
                Hvis rabatten gjelder bransjer/opplevelser som ikke dekkes av
                angreretten (for eksempel billetter til arrangementer/konserter)
              </li>
            </ul>
          </div>
          <div className="terms-section">
            <h2 className="heading-h2">
              {" "}
              Ikke gjennomført booking og avbestillingsgebyr
            </h2>
            <p className="heading-s">
              Dersom aktivitet kjøpt gjennom en rabatt på{" "}
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.funtlers.com/"
              >
                www.funtlers.com{" "}
              </a>{" "}
              ikke blir benyttet innenfor frist, og du forholder deg ellers helt
              passiv, vil dette ikke gi leverandør av aktiviteten noen
              indikasjoner på hvorfor aktiviteten ikke er innløst. I
              Angrerettlovens § 11 og § 15 står det spesifisert at disse
              vilkårene gjør at du som kunde mister rettighet til å kansellere
              avtalen. <br />
              <br />
              Ved tilfelle at du har gjort en bestilling hos en av våre partnere
              og deretter uteblitt fra den bestilte aktiviteten, forbeholder
              Funtlers AS og tilbyder seg retten til å belaste deg som kunde et
              gebyr som tilsvarer aktivitetsprisen.
            </p>
          </div>
          <div className="terms-section">
            <h2 className="heading-h2">Bruk av rabatten</h2>
            <p className="heading-s">
              Dersom aktivitet kjøpt gjennom en rabatt på{" "}
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.funtlers.com/"
              >
                www.funtlers.com{" "}
              </a>{" "}
              ikke blir benyttet innenfor frist, og du forholder deg ellers helt
              passiv, vil dette ikke gi leverandør av aktiviteten noen
              indikasjoner på hvorfor aktiviteten ikke er innløst. I
              Angrerettlovens § 11 og § 15 står det spesifisert at disse
              vilkårene gjør at du som kunde mister rettighet til å kansellere
              avtalen.
            </p>
          </div>
          <div className="terms-section">
            <h2 className="heading-h2">Innsendte idéer</h2>
            <p className="heading-s">
              Funtlers AS forbeholder seg retten til å bruke innkommende forslag
              (slik som forslag til aktiviteter, utvikling av plattformen, til
              nye tjenester osv.) eller annet som kommuniseres til Funtlers AS
              uten ytterligere informasjon til/om innsender eller belønning
              til/av innsender.
            </p>
          </div>
          <div className="terms-section">
            <h2 className="heading-h2">Linker til andre sider</h2>
            <p className="heading-s">
              Alle våre plattformer kan inneholde linker til andre nettsider som
              ikke er eid av Funtler AS s. Vi er ikke ansvarlige for innholdet
              på disse sidene.
            </p>
          </div>
          <div className="terms-section">
            <h2 className="heading-h2">Kommentarer i sosiale medier</h2>
            <p className="heading-s">
              Funtlers AS lar i utvalgte tilfeller sine brukere kommentere,
              stille spørsmål eller på annen måte kommunisere direkte med
              Funtlers AS på en måte som er synlig for alle brukere. Hver enkelt
              bruker er ansvarlig for innholdet i disse kommentarene, og
              Funtlers AS verken støtter eller er medvirkende til hva som
              skrives av våre brukere og av andre. Hver bruker er også selv
              ansvarlig for å sette seg inn i hvem andre som kan se
              informasjonen som skrives, og legger inn kommentarer på eget
              ansvar. Det er ikke lov til å skrive kommentarer i andres navn
              eller benytte falskt navn. Funtlers AS forbeholder seg retten til
              å fjerne eller skjule kommentarer uten å oppgi grunn. Kommentarer
              som oppfattes som reklame (”spam”) vil fjernes umiddelbart. Det er
              ikke lov til å legge ut kopibeskyttet materiale på våre sider.
              Innhold som krenker tredjeparts rettigheter vil bli fjernet så
              snart vi får melding om dette.
            </p>
          </div>
          <div className="terms-section">
            <h2 className="heading-h2">Kontakt</h2>
            <p className="heading-s">
              Hvis du har spørsmål om våre brukervilkår, ta gjerne kontakt med
              vår kundeservice support@funtlers.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsPage;
