// ============================================
// CYCLING CAREER
// data/races.js — Del 28
// 2026 Real Race Calendar
// ============================================


// ============================================
// RACE DATA STORAGE
// ============================================

const raceDatabase = [];


// ============================================
// RACE CREATION HELPER
// ============================================

function addRaceData({
    id,
    name,
    country,
    startDate,
    endDate = startDate,

    type,
    level,

    terrain = "mixed",
    finishType = "mixed",

    stages = [],
    features = [],
    climbs = [],

    description = ""
}) {
    const race = {
        id,
        name,

        country,

        startDate,
        endDate,

        type,
        level,

        terrain,
        finishType,

        stages,
        features,
        climbs,

        description
    };

    raceDatabase.push(race);

    return race;
}


// ============================================
// 2026 UCI WORLDTOUR
// ============================================


// --------------------------------------------
// JANUARY
// --------------------------------------------

addRaceData({
    id: "2026-tour-down-under",
    name: "Santos Tour Down Under",
    country: "Australia",

    startDate: "2026-01-20",
    endDate: "2026-01-25",

    type: "stageRace",
    level: "worldTour",

    terrain: "mixed",
    finishType: "mixed",

    description:
        "Australian opening stage race of the WorldTour season."
});


addRaceData({
    id: "2026-cadel-evans-great-ocean-road-race",
    name: "Cadel Evans Great Ocean Road Race",
    country: "Australia",

    startDate: "2026-01-25",

    type: "oneDay",
    level: "worldTour",

    terrain: "rolling",
    finishType: "punchy",

    description:
        "Australian WorldTour one-day race."
});


// --------------------------------------------
// FEBRUARY
// --------------------------------------------

addRaceData({
    id: "2026-uae-tour",
    name: "UAE Tour",
    country: "United Arab Emirates",

    startDate: "2026-02-16",
    endDate: "2026-02-22",

    type: "stageRace",
    level: "worldTour",

    terrain: "mixed",
    finishType: "mixed",

    description:
        "Seven-day WorldTour stage race through the UAE."
});


addRaceData({
    id: "2026-omloop-het-nieuwsblad",
    name: "Omloop Nieuwsblad",
    country: "Belgium",

    startDate: "2026-02-28",

    type: "oneDay",
    level: "worldTour",

    terrain: "cobbles",
    finishType: "punchy",

    features: [
        "cobbles",
        "narrowRoads",
        "positionBattle"
    ],

    description:
        "Opening Belgian WorldTour classic."
});


// --------------------------------------------
// MARCH
// --------------------------------------------

addRaceData({
    id: "2026-strade-bianche",
    name: "Strade Bianche",
    country: "Italy",

    startDate: "2026-03-07",

    type: "oneDay",
    level: "worldTour",

    terrain: "gravel",
    finishType: "uphillSprint",

    features: [
        "gravel",
        "shortClimbs",
        "technicalRoads"
    ],

    description:
        "Italian classic known for its gravel sectors."
});


addRaceData({
    id: "2026-paris-nice",
    name: "Paris-Nice",
    country: "France",

    startDate: "2026-03-08",
    endDate: "2026-03-15",

    type: "stageRace",
    level: "worldTour",

    terrain: "mixed",
    finishType: "mixed",

    description:
        "Eight-day French stage race."
});


addRaceData({
    id: "2026-tirreno-adriatico",
    name: "Tirreno-Adriatico",
    country: "Italy",

    startDate: "2026-03-09",
    endDate: "2026-03-15",

    type: "stageRace",
    level: "worldTour",

    terrain: "mixed",
    finishType: "mixed",

    description:
        "Italian stage race between the Tyrrhenian and Adriatic seas."
});


addRaceData({
    id: "2026-milano-sanremo",
    name: "Milano-Sanremo",
    country: "Italy",

    startDate: "2026-03-21",

    type: "monument",
    level: "worldTour",

    terrain: "rolling",
    finishType: "sprint",

    features: [
        "longDistance",
        "shortClimbs",
        "technicalFinish"
    ],

    description:
        "The first Monument of the 2026 season."
});


addRaceData({
    id: "2026-volta-catalunya",
    name: "Volta Ciclista a Catalunya",
    country: "Spain",

    startDate: "2026-03-23",
    endDate: "2026-03-29",

    type: "stageRace",
    level: "worldTour",

    terrain: "mountain",
    finishType: "mixed",

    description:
        "Spanish stage race with significant climbing."
});


addRaceData({
    id: "2026-great-sprint-classic",
    name: "The Great Sprint Classic",
    country: "Belgium",

    startDate: "2026-03-25",

    type: "oneDay",
    level: "worldTour",

    terrain: "flat",
    finishType: "sprint",

    description:
        "Belgian WorldTour one-day race."
});


addRaceData({
    id: "2026-e3-saxo-classic",
    name: "E3 Saxo Classic",
    country: "Belgium",

    startDate: "2026-03-27",

    type: "oneDay",
    level: "worldTour",

    terrain: "cobbles",
    finishType: "punchy",

    features: [
        "cobbles",
        "shortClimbs",
        "narrowRoads"
    ],

    description:
        "Major Belgian cobbled classic."
});


addRaceData({
    id: "2026-gent-wevelgem",
    name: "Gent-Wevelgem in Flanders Fields",
    country: "Belgium",

    startDate: "2026-03-29",

    type: "oneDay",
    level: "worldTour",

    terrain: "cobbles",
    finishType: "sprint",

    features: [
        "crosswinds",
        "cobbles",
        "positionBattle"
    ],

    description:
        "Belgian classic combining cobbles, wind and a possible sprint."
});


// --------------------------------------------
// APRIL
// --------------------------------------------

addRaceData({
    id: "2026-dwars-door-vlaanderen",
    name: "Dwars door Vlaanderen",
    country: "Belgium",

    startDate: "2026-04-01",

    type: "oneDay",
    level: "worldTour",

    terrain: "cobbles",
    finishType: "punchy",

    features: [
        "cobbles",
        "shortClimbs",
        "narrowRoads"
    ],

    description:
        "Belgian cobbled classic before the Tour of Flanders."
});


addRaceData({
    id: "2026-tour-of-flanders",
    name: "Ronde van Vlaanderen",
    country: "Belgium",

    startDate: "2026-04-05",

    type: "monument",
    level: "worldTour",

    terrain: "cobbles",
    finishType: "punchy",

    features: [
        "cobbles",
        "shortClimbs",
        "positionBattle",
        "narrowRoads"
    ],

    description:
        "Monument of the Flemish classics."
});


addRaceData({
    id: "2026-itzulia-basque-country",
    name: "Itzulia Basque Country",
    country: "Spain",

    startDate: "2026-04-06",
    endDate: "2026-04-11",

    type: "stageRace",
    level: "worldTour",

    terrain: "hills",
    finishType: "mixed",

    features: [
        "shortClimbs",
        "technicalRoads"
    ],

    description:
        "Basque stage race with steep climbs and technical roads."
});


addRaceData({
    id: "2026-paris-roubaix",
    name: "Paris-Roubaix",
    country: "France",

    startDate: "2026-04-12",

    type: "monument",
    level: "worldTour",

    terrain: "cobbles",
    finishType: "flatSolo",

    features: [
        "cobbles",
        "longDistance",
        "positionBattle"
    ],

    description:
        "Monument known for its demanding cobbled sectors."
});


addRaceData({
    id: "2026-amstel-gold-race",
    name: "Amstel Gold Race",
    country: "Netherlands",

    startDate: "2026-04-19",

    type: "oneDay",
    level: "worldTour",

    terrain: "hills",
    finishType: "punchy",

    features: [
        "shortClimbs",
        "positionBattle"
    ],

    description:
        "Dutch WorldTour classic through Limburg."
});


addRaceData({
    id: "2026-fleche-wallonne",
    name: "La Flèche Wallonne",
    country: "Belgium",

    startDate: "2026-04-22",

    type: "oneDay",
    level: "worldTour",

    terrain: "hills",
    finishType: "uphillSprint",

    features: [
        "shortClimbs",
        "steepFinish"
    ],

    description:
        "Belgian hill classic famous for its steep finale."
});


addRaceData({
    id: "2026-liege-bastogne-liege",
    name: "Liège-Bastogne-Liège",
    country: "Belgium",

    startDate: "2026-04-26",

    type: "monument",
    level: "worldTour",

    terrain: "hills",
    finishType: "punchy",

    features: [
        "longDistance",
        "shortClimbs",
        "positionBattle"
    ],

    description:
        "The oldest of the five Monuments."
});


addRaceData({
    id: "2026-tour-de-romandie",
    name: "Tour de Romandie",
    country: "Switzerland",

    startDate: "2026-04-28",
    endDate: "2026-05-03",

    type: "stageRace",
    level: "worldTour",

    terrain: "mountain",
    finishType: "mixed",

    description:
        "Swiss stage race traditionally suited to climbers and time trialists."
});


addRaceData({
    id: "2026-eschborn-frankfurt",
    name: "Eschborn-Frankfurt",
    country: "Germany",

    startDate: "2026-05-01",

    type: "oneDay",
    level: "worldTour",

    terrain: "rolling",
    finishType: "sprint",

    features: [
        "shortClimbs",
        "technicalFinish"
    ],

    description:
        "German WorldTour one-day race."
});


// --------------------------------------------
// MAY
// --------------------------------------------

addRaceData({
    id: "2026-giro-ditalia",
    name: "Giro d'Italia",
    country: "Italy",

    startDate: "2026-05-09",
    endDate: "2026-05-31",

    type: "grandTour",
    level: "grandTour",

    terrain: "mixed",
    finishType: "mixed",

    description:
        "First Grand Tour of the 2026 season."
});


// --------------------------------------------
// JUNE
// --------------------------------------------

addRaceData({
    id: "2026-dauphine",
    name: "Critérium du Dauphiné",
    country: "France",

    startDate: "2026-06-07",
    endDate: "2026-06-14",

    type: "stageRace",
    level: "worldTour",

    terrain: "mountain",
    finishType: "mixed",

    description:
        "Major French preparation race before the Tour de France."
});


addRaceData({
    id: "2026-tour-de-suisse",
    name: "Tour de Suisse",
    country: "Switzerland",

    startDate: "2026-06-17",
    endDate: "2026-06-21",

    type: "stageRace",
    level: "worldTour",

    terrain: "mountain",
    finishType: "mixed",

    description:
        "Swiss WorldTour stage race."
});


addRaceData({
    id: "2026-copenhagen-sprint",
    name: "Copenhagen Sprint",
    country: "Denmark",

    startDate: "2026-06-14",

    type: "oneDay",
    level: "worldTour",

    terrain: "flat",
    finishType: "sprint",

    features: [
        "technicalFinish",
        "positionBattle"
    ],

    description:
        "Danish WorldTour one-day sprint race."
});


// --------------------------------------------
// JULY
// --------------------------------------------

addRaceData({
    id: "2026-tour-de-france",
    name: "Tour de France",
    country: "France",

    startDate: "2026-07-04",
    endDate: "2026-07-26",

    type: "grandTour",
    level: "grandTour",

    terrain: "mixed",
    finishType: "mixed",

    description:
        "The biggest stage race in professional cycling."
});


// --------------------------------------------
// AUGUST
// --------------------------------------------

addRaceData({
    id: "2026-san-sebastian",
    name: "DSSK - Donostia San Sebastián Klasikoa",
    country: "Spain",

    startDate: "2026-08-01",

    type: "oneDay",
    level: "worldTour",

    terrain: "hills",
    finishType: "punchy",

    features: [
        "shortClimbs",
        "technicalRoads"
    ],

    description:
        "Basque WorldTour classic."
});


addRaceData({
    id: "2026-tour-de-pologne",
    name: "Tour de Pologne",
    country: "Poland",

    startDate: "2026-08-03",
    endDate: "2026-08-09",

    type: "stageRace",
    level: "worldTour",

    terrain: "mixed",
    finishType: "mixed",

    description:
        "Polish WorldTour stage race."
});


addRaceData({
    id: "2026-adac-cyclassics",
    name: "ADAC Cyclassics",
    country: "Germany",

    startDate: "2026-08-16",

    type: "oneDay",
    level: "worldTour",

    terrain: "rolling",
    finishType: "sprint",

    features: [
        "technicalFinish"
    ],

    description:
        "Hamburg-based German WorldTour classic."
});


addRaceData({
    id: "2026-renewi-tour",
    name: "Renewi Tour",
    country: "Belgium",

    startDate: "2026-08-19",
    endDate: "2026-08-23",

    type: "stageRace",
    level: "worldTour",

    terrain: "cobbles",
    finishType: "mixed",

    features: [
        "cobbles",
        "shortClimbs"
    ],

    description:
        "Benelux stage race combining flat roads and classics-style terrain."
});


addRaceData({
    id: "2026-vuelta-a-espana",
    name: "La Vuelta Ciclista a España",
    country: "Spain",

    startDate: "2026-08-22",
    endDate: "2026-09-13",

    type: "grandTour",
    level: "grandTour",

    terrain: "mountain",
    finishType: "mixed",

    description:
        "Final Grand Tour of the 2026 season."
});


addRaceData({
    id: "2026-bretagne-classic",
    name: "Bretagne Classic - Ouest-France",
    country: "France",

    startDate: "2026-08-30",

    type: "oneDay",
    level: "worldTour",

    terrain: "rolling",
    finishType: "sprint",

    features: [
        "shortClimbs",
        "positionBattle"
    ],

    description:
        "French WorldTour classic."
});


// --------------------------------------------
// SEPTEMBER
// --------------------------------------------

addRaceData({
    id: "2026-gp-quebec",
    name: "Grand Prix Cycliste de Québec",
    country: "Canada",

    startDate: "2026-09-11",

    type: "oneDay",
    level: "worldTour",

    terrain: "hills",
    finishType: "punchy",

    features: [
        "shortClimbs",
        "technicalFinish"
    ],

    description:
        "Canadian WorldTour classic."
});


addRaceData({
    id: "2026-gp-montreal",
    name: "Grand Prix Cycliste de Montréal",
    country: "Canada",

    startDate: "2026-09-13",

    type: "oneDay",
    level: "worldTour",

    terrain: "hills",
    finishType: "punchy",

    features: [
        "shortClimbs",
        "technicalRoads"
    ],

    description:
        "Canadian WorldTour classic and important Worlds preparation race."
});


// --------------------------------------------
// WORLD CHAMPIONSHIPS
// --------------------------------------------

addRaceData({
    id: "2026-worlds-road",
    name: "2026 UCI Road World Championships - Road Race",
    country: "Canada",

    startDate: "2026-09-27",

    type: "worldsRoad",
    level: "worlds",

    terrain: "hills",
    finishType: "punchy",

    features: [
        "shortClimbs",
        "technicalRoads",
        "nationalTeams"
    ],

    description:
        "Elite men's road race at the 2026 UCI Road World Championships in Montréal."
});


addRaceData({
    id: "2026-worlds-itt",
    name: "2026 UCI Road World Championships - Individual Time Trial",
    country: "Canada",

    startDate: "2026-09-23",

    type: "worldsITT",
    level: "worlds",

    terrain: "itt",
    finishType: "itt",

    features: [
        "individualStart",
        "technicalRoads"
    ],

    description:
        "Elite individual time trial at the 2026 UCI Road World Championships."
});


// --------------------------------------------
// OCTOBER
// --------------------------------------------

addRaceData({
    id: "2026-il-lombardia",
    name: "Il Lombardia",
    country: "Italy",

    startDate: "2026-10-10",

    type: "monument",
    level: "worldTour",

    terrain: "mountain",
    finishType: "descent",

    features: [
        "longDistance",
        "longClimbs",
        "dangerousRoads",
        "technicalDescents"
    ],

    description:
        "Final Monument of the 2026 men's road season."
});


addRaceData({
    id: "2026-tour-of-guangxi",
    name: "Tour of Guangxi",
    country: "China",

    startDate: "2026-10-13",
    endDate: "2026-10-18",

    type: "stageRace",
    level: "worldTour",

    terrain: "mixed",
    finishType: "mixed",

    description:
        "Final event of the 2026 UCI WorldTour calendar."
});


// ============================================
// RACE DATABASE HELPERS
// ============================================

function getAllRaces() {
    return [...raceDatabase];
}


function getRaceById(raceId) {
    return raceDatabase.find(
        race => race.id === raceId
    ) || null;
}


function getRacesByType(type) {
    return raceDatabase.filter(
        race => race.type === type
    );
}


function getRacesByLevel(level) {
    return raceDatabase.filter(
        race => race.level === level
    );
}


function getRacesByCountry(country) {
    return raceDatabase.filter(
        race => race.country === country
    );
}


function getRacesBetweenDates(
    startDate,
    endDate
) {
    return raceDatabase.filter(race => {
        return (
            race.startDate >= startDate &&
            race.startDate <= endDate
        );
    });
}


// ============================================
// CALENDAR SORTING
// ============================================

function sortRaceCalendar(races = raceDatabase) {
    return [...races].sort(
        (a, b) =>
            a.startDate.localeCompare(
                b.startDate
            )
    );
}


function getSortedRaceCalendar() {
    return sortRaceCalendar();
}


// ============================================
// UPCOMING RACES
// ============================================

function getUpcomingRaces(
    fromDate = game.career.currentDate,
    limit = 10
) {
    return sortRaceCalendar(
        raceDatabase.filter(
            race =>
                race.startDate >= fromDate
        )
    ).slice(0, limit);
}


// ============================================
// RACES IN CURRENT SEASON
// ============================================

function getSeasonRaces(year = 2026) {
    const prefix = `${year}-`;

    return sortRaceCalendar(
        raceDatabase.filter(
            race =>
                race.startDate.startsWith(prefix)
        )
    );
}


// ============================================
// IMPORTANT RACES
// ============================================

function getMajorRaces() {
    return raceDatabase.filter(
        race =>
            race.level === "grandTour" ||
            race.type === "monument" ||
            race.level === "worlds"
    );
}


// ============================================
// RACE DATABASE SUMMARY
// ============================================

function getRaceDatabaseSummary() {
    const races =
        getAllRaces();

    return {
        total:
            races.length,

        worldTour:
            races.filter(
                race =>
                    race.level === "worldTour"
            ).length,

        grandTours:
            races.filter(
                race =>
                    race.type === "grandTour"
            ).length,

        monuments:
            races.filter(
                race =>
                    race.type === "monument"
            ).length,

        worlds:
            races.filter(
                race =>
                    race.level === "worlds"
            ).length
    };
}


// ============================================
// DEBUG
// ============================================

function debugRaceDatabase() {
    console.table(
        getSortedRaceCalendar()
            .map(race => ({
                date: race.startDate,
                name: race.name,
                country: race.country,
                type: race.type,
                level: race.level
            }))
    );

    console.log(
        "Race database summary:",
        getRaceDatabaseSummary()
    );

    return getRaceDatabaseSummary();
}