# Analyse

## Functionale analyse project 

### Beschrijving
Een transportbedrijf dat ook goederen stockeert wil analyseren of zijn workflow efficiënter kan. Dit zou kunnen door manueel te kijken of alle goederen efficiënt doorheen het bedrijf bewegen door bij elke verandering van plaats, dit te op te schrijven en nadien dit te bekijken. Dit vergt natuurlijk een hele hoop administratie en manueel werk, dit is eenvoudiger op te lossen aan de hand van IoT!  We zouden een systeem kunnen opstellen dat alle goederen traceert binnen het bedrijf en dit logt naar een centrale database. Vanuit deze database kunnen alle locaties en dus ook routes worden opgehaald en worden weergegeven op een plattegrond van het bedrijf. De plaatsbepaling kan op enkele manieren gebeuren, maar omdat dit indoor is en toch wel een goede nauwkeurigheid vereist is, is GPS geen optie. In dit geval zouden we gebruik kunnen maken van UWB technologie.

### Marktonderzoek 
| Bedrijf  | Product |
| ------------- | ------------- |
| Decawave  | ontwikkelaar van dwm1000 modules  |
| Localino  | Ongeveer hetzelfde concept als ons  | 
| Pozyx  | Anchors + Tags  |
| Sewio  | Heathmapping  | 
| Infosoft  | Indoor tracking in industriële omgevingen  |
### Diagrammen

#### Algemene architectuur
Volledige architectuur  
![Algemene architecture](/doc/images/architecture.png)
#### Gedetailleerde diagrammen
Anchor netwerk  
![Anchor netwerk](/doc/images/anchornetwerk.png)
Flowchart Algemene werking  
![Anchor netwerk](/doc/images/GeneralFlowchart.png)
#### Schema's van het product
Volledige architectuur  
![Algemene architecture](/doc/images/architecture.png)

#### Fysiek design (Optioneel)
We gaan de behuizingen van de tags en ankers printen. Deze tekeningen kunnne we zelf ontwerpen en ook zelf printen omdat we de nodige kennis hebben van de tekensoftware. Maar er is ook een kans dat we dit op school gaan doen.

#### Niet functionele analyse 
    -Reusability: als je naar een andere locatue verhuist kan je de tags op een andere plaats zetten. en deze ook in de app aanpassen
    -Scalability: je  kan zo veel tags zetten als je wilt
    -Portability: het zijn keline divices
    -Testability: je kan gemakkelijk testen of het systeem nog werkt, als data niet  klopt kan je dit gemakkelijk zijn omdat het dan een volledige andere               locatie weergeeft

## Functionaliteit
Zie Jira

## Release Plan 
Sprints in Jira

## Inventarisatie Hardware
    - UWB modules 
    - ATmega328 
    - DWM1000
    - ESP8266
    - Raspberry Pi
    - Arduino Nano
    - 18650 Batterijen
    - NFC Tags 13.56MHz
    - NFC Reader 13.56MHz
    - USB naar UART cable
    

## Inventarisatie Software 
    - Arduino IDE 
    - Angular/Ionic
    - Autodesk Eagle 
    - Autodesk Fusion 360
    - Esher
    - Github
    - Jira
    - ASP.NET
    - Microsoft server

## Test document
    - Range test
    - Accuraccy test
    - Speed test
    - Battery live test
    -

## Verdediging
