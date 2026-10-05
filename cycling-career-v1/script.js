// ============================================
// CYCLING CAREER
// script.js — Del 1
// Game State & Core Structure
// ============================================


// --------------------------------------------
// GAME STATE
// --------------------------------------------

const game = {

    // Game
    version: "0.1.0",
    currentScreen: "start",
    gameStarted: false,

    // Career
    career: {
        currentDate: "2026-01-01",
        season: 2026,
        daysPassed: 0
    },

    // Player
    player: null,

    // Team
    team: null,

    // Contract
    contract: null,

    // Agent
    agent: null,

    // Current race
    currentRace: null,

    // World
    world: {
        year: 2026,
        simulationDays: 0,
        worldEvents: []
    },

    // Inbox
    inbox: [],

    // Career history
    history: [],

    // Relationships
    relationships: [],

    // Save data
    saveVersion: 1
};


// --------------------------------------------
// SCREEN SYSTEM
// --------------------------------------------

const screens = [
    "start",
    "create-rider",
    "offers",
    "dashboard",
    "rider",
    "calendar",
    "team",
    "inbox",
    "world",
    "career",
    "contract",
    "settings",
    "race"
];


// --------------------------------------------
// NAVIGATION
// --------------------------------------------

function changeScreen(screen) {

    if (!screens.includes(screen)) {
        console.error(`Unknown screen: ${screen}`);
        return;
    }

    game.currentScreen = screen;

    console.log(`Screen changed to: ${screen}`);

    render();
}


// --------------------------------------------
// GAME START
// --------------------------------------------

function startNewCareer() {

    console.log("Starting new career...");

    game.currentScreen = "create-rider";
    game.gameStarted = false;

    render();
}


// --------------------------------------------
// CONTINUE CAREER
// --------------------------------------------

function continueCareer() {

    console.log("Continue career");

    if (!game.player) {
        console.log("No career found.");
        changeScreen("start");
        return;
    }

    changeScreen("dashboard");
}


// --------------------------------------------
// BASIC RENDER SYSTEM
// --------------------------------------------

function render() {

    console.log("Rendering:", game.currentScreen);

    /*
        HTML bliver koblet på her senere.

        Vi bygger først selve spillets
        JavaScript-struktur, så alle systemer
        har et fælles fundament.
    */
}


// --------------------------------------------
// INITIALIZE GAME
// --------------------------------------------

function initializeGame() {

    console.log("Cycling Career initialized.");

    console.log("Game state:", game);

    render();
}


// --------------------------------------------
// START
// --------------------------------------------

initializeGame();
// ============================================
// CYCLING CAREER
// script.js — Del 2
// Screen System & Navigation
// ============================================

function getCurrentScreen() {
    return game.currentScreen;
}

function isScreen(screen) {
    return game.currentScreen === screen;
}

function goToStart() {
    changeScreen("start");
}

function goToCreateRider() {
    changeScreen("create-rider");
}

function goToOffers() {
    changeScreen("offers");
}

function goToDashboard() {
    if (!game.player) {
        console.warn("Cannot open dashboard without a player.");
        return;
    }

    changeScreen("dashboard");
}

function goToRider() {
    if (!game.player) {
        console.warn("Cannot open rider screen without a player.");
        return;
    }

    changeScreen("rider");
}

function goToCalendar() {
    if (!game.player) {
        console.warn("Cannot open calendar without a player.");
        return;
    }

    changeScreen("calendar");
}

function goToTeam() {
    if (!game.team) {
        console.warn("Cannot open team screen without a team.");
        return;
    }

    changeScreen("team");
}

function goToInbox() {
    changeScreen("inbox");
}

function goToWorld() {
    changeScreen("world");
}

function goToCareer() {
    if (!game.player) {
        console.warn("Cannot open career screen without a player.");
        return;
    }

    changeScreen("career");
}

function goToContract() {
    changeScreen("contract");
}

function goToSettings() {
    changeScreen("settings");
}

function goToRace() {
    if (!game.currentRace) {
        console.warn("Cannot enter race mode without a race.");
        return;
    }

    changeScreen("race");
}

function returnToDashboard() {
    if (game.player) {
        changeScreen("dashboard");
    } else {
        changeScreen("start");
    }
}

function getAvailableNavigation() {
    if (!game.player) {
        return [
            "start",
            "create-rider",
            "offers"
        ];
    }

    return [
        "dashboard",
        "rider",
        "calendar",
        "team",
        "inbox",
        "world",
        "career",
        "contract",
        "settings"
    ];
}

function canNavigateTo(screen) {
    return getAvailableNavigation().includes(screen);
}

function navigateTo(screen) {
    if (!canNavigateTo(screen)) {
        console.warn(`Navigation blocked: ${screen}`);
        return;
    }

    changeScreen(screen);
}

function getScreenTitle(screen = game.currentScreen) {
    const titles = {
        start: "Cycling Career",
        "create-rider": "Create Rider",
        offers: "Team Offers",
        dashboard: "Dashboard",
        rider: "Rider",
        calendar: "Calendar",
        team: "Team",
        inbox: "Inbox",
        world: "World",
        career: "Career",
        contract: "Contract",
        settings: "Settings",
        race: "Race"
    };

    return titles[screen] || "Cycling Career";
}

function getScreenDescription(screen = game.currentScreen) {
    const descriptions = {
        start: "Build your cycling career.",
        "create-rider": "Create your rider and begin your journey.",
        offers: "Choose where your professional career begins.",
        dashboard: "Your current career at a glance.",
        rider: "Your rider, attributes and development.",
        calendar: "Your season, races and opportunities.",
        team: "Your team, teammates and staff.",
        inbox: "Messages and important career decisions.",
        world: "The cycling world around your career.",
        career: "Your results, records and career history.",
        contract: "Your contract, role and opportunities.",
        settings: "Game and career settings.",
        race: "Race simulation."
    };

    return descriptions[screen] || "";
}

function getNavigationItems() {
    return [
        {
            id: "dashboard",
            label: "Dashboard",
            screen: "dashboard"
        },
        {
            id: "rider",
            label: "Rider",
            screen: "rider"
        },
        {
            id: "calendar",
            label: "Calendar",
            screen: "calendar"
        },
        {
            id: "team",
            label: "Team",
            screen: "team"
        },
        {
            id: "inbox",
            label: "Inbox",
            screen: "inbox"
        },
        {
            id: "world",
            label: "World",
            screen: "world"
        },
        {
            id: "career",
            label: "Career",
            screen: "career"
        },
        {
            id: "contract",
            label: "Contract",
            screen: "contract"
        },
        {
            id: "settings",
            label: "Settings",
            screen: "settings"
        }
    ];
}

function getActiveNavigationItem() {
    return getNavigationItems().find(
        item => item.screen === game.currentScreen
    ) || null;
}

console.log("Screen system loaded.");
// ============================================
// CYCLING CAREER
// script.js — Del 3
// Rider Generator
// ============================================

const riderProfiles = {
    quick: {
        name: "Quick",
        description: "A rider with strong speed and acceleration.",
        tendencies: {
            sprint: 7,
            acceleration: 7,
            endurance: 4,
            recovery: 4,
            flat: 6,
            hill: 5,
            mediumMountain: 3,
            mountain: 2,
            cobblestones: 5,
            itt: 4,
            positioning: 6,
            raceIQ: 5,
            technique: 6,
            mentality: 5,
            teamwork: 5
        }
    },

    climber: {
        name: "Climber",
        description: "A rider who naturally performs well in the mountains.",
        tendencies: {
            sprint: 3,
            acceleration: 4,
            endurance: 7,
            recovery: 7,
            flat: 3,
            hill: 5,
            mediumMountain: 7,
            mountain: 8,
            cobblestones: 2,
            itt: 4,
            positioning: 5,
            raceIQ: 6,
            technique: 5,
            mentality: 6,
            teamwork: 5
        }
    },

    classics: {
        name: "Classics Rider",
        description: "A versatile rider suited to hills, cobbles and hard one-day races.",
        tendencies: {
            sprint: 5,
            acceleration: 7,
            endurance: 7,
            recovery: 5,
            flat: 6,
            hill: 8,
            mediumMountain: 6,
            mountain: 3,
            cobblestones: 8,
            itt: 4,
            positioning: 7,
            raceIQ: 7,
            technique: 7,
            mentality: 6,
            teamwork: 5
        }
    },

    timeTrialist: {
        name: "Time Trialist",
        description: "A rider with a natural strength in individual time trials.",
        tendencies: {
            sprint: 3,
            acceleration: 3,
            endurance: 8,
            recovery: 5,
            flat: 8,
            hill: 5,
            mediumMountain: 5,
            mountain: 3,
            cobblestones: 3,
            itt: 9,
            positioning: 4,
            raceIQ: 6,
            technique: 6,
            mentality: 7,
            teamwork: 4
        }
    },

    allround: {
        name: "Allround",
        description: "A balanced rider without one clearly dominant specialty.",
        tendencies: {
            sprint: 5,
            acceleration: 5,
            endurance: 6,
            recovery: 6,
            flat: 6,
            hill: 6,
            mediumMountain: 5,
            mountain: 5,
            cobblestones: 5,
            itt: 5,
            positioning: 6,
            raceIQ: 6,
            technique: 6,
            mentality: 6,
            teamwork: 6
        }
    },

    custom: {
        name: "Own Profile",
        description: "A completely individual rider profile.",
        tendencies: {
            sprint: 5,
            acceleration: 5,
            endurance: 5,
            recovery: 5,
            flat: 5,
            hill: 5,
            mediumMountain: 5,
            mountain: 5,
            cobblestones: 5,
            itt: 5,
            positioning: 5,
            raceIQ: 5,
            technique: 5,
            mentality: 5,
            teamwork: 5
        }
    }
};

const riderStatDefinitions = [
    {
        id: "sprint",
        name: "Sprint",
        category: "Physical"
    },
    {
        id: "acceleration",
        name: "Acceleration",
        category: "Physical"
    },
    {
        id: "endurance",
        name: "Endurance",
        category: "Physical"
    },
    {
        id: "recovery",
        name: "Recovery",
        category: "Physical"
    },
    {
        id: "flat",
        name: "Flat",
        category: "Terrain"
    },
    {
        id: "hill",
        name: "Hill",
        category: "Terrain"
    },
    {
        id: "mediumMountain",
        name: "Medium Mountain",
        category: "Terrain"
    },
    {
        id: "mountain",
        name: "Mountain",
        category: "Terrain"
    },
    {
        id: "cobblestones",
        name: "Cobblestones",
        category: "Terrain"
    },
    {
        id: "itt",
        name: "ITT",
        category: "Terrain"
    },
    {
        id: "positioning",
        name: "Positioning",
        category: "Race"
    },
    {
        id: "raceIQ",
        name: "Race IQ",
        category: "Race"
    },
    {
        id: "technique",
        name: "Technique",
        category: "Race"
    },
    {
        id: "mentality",
        name: "Mentality",
        category: "Race"
    },
    {
        id: "teamwork",
        name: "Teamwork",
        category: "Race"
    }
];

function randomInt(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;
}

function clamp(value, min, max) {
    return Math.max(
        min,
        Math.min(max, value)
    );
}

function getRandomDevelopmentSpeed() {
    const speeds = [
        "Slow",
        "Below Average",
        "Average",
        "Above Average",
        "Fast"
    ];

    return speeds[
        randomInt(0, speeds.length - 1)
    ];
}

function getDevelopmentProfile(age) {
    const profiles = [
        "Early Developer",
        "Balanced Developer",
        "Late Developer"
    ];

    if (age === 16) {
        return profiles[
            randomInt(0, 2)
        ];
    }

    if (age === 18) {
        return profiles[
            randomInt(1, 2)
        ];
    }

    return "Balanced Developer";
}

function getPotentialRange(age) {
    if (age === 16) {
        return {
            minimum: 70,
            maximum: 88
        };
    }

    if (age === 17) {
        return {
            minimum: 72,
            maximum: 90
        };
    }

    return {
        minimum: 74,
        maximum: 92
    };
}

function generatePotential(age) {
    const range = getPotentialRange(age);

    return randomInt(
        range.minimum,
        range.maximum
    );
}

function generateStatValue(tendency, age) {
    const ageModifier = age === 16
        ? -1
        : age === 18
            ? 1
            : 0;

    const variation = randomInt(-2, 2);

    return clamp(
        tendency + variation + ageModifier,
        1,
        85
    );
}

function generateStats(profileKey, age) {
    const profile =
        riderProfiles[profileKey] ||
        riderProfiles.allround;

    const stats = {};

    riderStatDefinitions.forEach(stat => {
        const tendency =
            profile.tendencies[stat.id] ?? 5;

        stats[stat.id] =
            generateStatValue(
                tendency,
                age
            );
    });

    return stats;
}

function calculateCurrentLevel(stats) {
    const values = Object.values(stats);

    if (!values.length) {
        return 0;
    }

    const total =
        values.reduce(
            (sum, value) => sum + value,
            0
        );

    return Math.round(
        total / values.length
    );
}

function createRiderData({
    name,
    country,
    age,
    profile = "allround"
} = {}) {

    if (!name || !country || !age) {
        console.error(
            "Rider requires a name, country and age."
        );

        return null;
    }

    const stats =
        generateStats(
            profile,
            age
        );

    const potential =
        generatePotential(age);

    const developmentSpeed =
        getRandomDevelopmentSpeed();

    const developmentProfile =
        getDevelopmentProfile(age);

    const currentLevel =
        calculateCurrentLevel(stats);

    return {
        id: `player-${Date.now()}`,

        name,
        country,
        age,

        profile: {
            key: profile,
            name:
                riderProfiles[profile]?.name ||
                "Allround",
            description:
                riderProfiles[profile]?.description ||
                riderProfiles.allround.description
        },

        stats,

        potential: {
            value: potential,
            visible: true,
            uncertainty: randomInt(1, 4)
        },

        development: {
            speed: developmentSpeed,
            profile: developmentProfile,
            currentLevel,
            recentTrend: "Stable"
        },

        experience: 0,

        form: 75,
        energy: 100,
        fatigue: 0,

        injuries: [],

        career: {
            races: 0,
            wins: 0,
            podiums: 0,
            top10s: 0,
            raceDays: 0
        },

        status: "Unsigned",

        createdAt: game.career.currentDate
    };
}

function generatePlayer({
    name,
    country,
    age,
    profile
} = {}) {

    const rider =
        createRiderData({
            name,
            country,
            age,
            profile
        });

    if (!rider) {
        return null;
    }

    game.player = rider;

    console.log(
        "Generated player:",
        game.player
    );

    return rider;
}

function regeneratePlayer({
    name,
    country,
    age,
    profile
} = {}) {

    if (!game.player) {
        console.warn(
            "No existing player to regenerate."
        );

        return null;
    }

    return generatePlayer({
        name:
            name ||
            game.player.name,

        country:
            country ||
            game.player.country,

        age:
            age ||
            game.player.age,

        profile:
            profile ||
            game.player.profile.key
    });
}

function getPlayerStat(statId) {
    if (!game.player) {
        return null;
    }

    return game.player.stats[statId] ?? null;
}

function getPlayerStatDefinition(statId) {
    return riderStatDefinitions.find(
        stat => stat.id === statId
    ) || null;
}

function getPlayerPotential() {
    if (!game.player) {
        return null;
    }

    return game.player.potential.value;
}

function getPlayerLevel() {
    if (!game.player) {
        return null;
    }

    return game.player.development.currentLevel;
}

function getPlayerDevelopmentSummary() {
    if (!game.player) {
        return null;
    }

    return {
        currentLevel:
            game.player.development.currentLevel,

        potential:
            game.player.potential.value,

        speed:
            game.player.development.speed,

        profile:
            game.player.development.profile,

        trend:
            game.player.development.recentTrend
    };
}

console.log("Rider Generator loaded.");
// ============================================
// CYCLING CAREER
// script.js — Del 4
// Rider Creation State
// ============================================

const riderCreation = {
    name: "",
    country: null,
    age: null,

    profile: null,

    physicalTendency: "Balanced",
    technicalTendency: "Balanced",

    generated: false,
    accepted: false
};

const validRiderAges = [16, 17, 18];

const physicalTendencies = [
    {
        id: "physical",
        name: "Physical",
        description: "Slightly favors physical development."
    },
    {
        id: "balanced",
        name: "Balanced",
        description: "Keeps physical and technical development balanced."
    },
    {
        id: "technical",
        name: "Technical",
        description: "Slightly favors technical and race development."
    }
];

function resetRiderCreation() {
    riderCreation.name = "";
    riderCreation.country = null;
    riderCreation.age = null;

    riderCreation.profile = null;

    riderCreation.physicalTendency = "Balanced";
    riderCreation.technicalTendency = "Balanced";

    riderCreation.generated = false;
    riderCreation.accepted = false;
}

function setRiderName(name) {
    if (typeof name !== "string") {
        console.warn("Invalid rider name.");
        return false;
    }

    const cleanName = name.trim();

    if (cleanName.length < 2) {
        console.warn("Rider name is too short.");
        return false;
    }

    if (cleanName.length > 40) {
        console.warn("Rider name is too long.");
        return false;
    }

    riderCreation.name = cleanName;

    return true;
}

function setRiderCountry(country) {
    if (!country) {
        console.warn("No country selected.");
        return false;
    }

    riderCreation.country = country;

    return true;
}

function setRiderAge(age) {
    const numericAge = Number(age);

    if (!validRiderAges.includes(numericAge)) {
        console.warn(
            "Rider age must be 16, 17 or 18."
        );

        return false;
    }

    riderCreation.age = numericAge;

    return true;
}

function setRiderProfile(profile) {
    if (!riderProfiles[profile]) {
        console.warn(
            `Unknown rider profile: ${profile}`
        );

        return false;
    }

    riderCreation.profile = profile;

    return true;
}

function setPhysicalTendency(tendency) {
    const valid =
        physicalTendencies.some(
            item =>
                item.name === tendency
        );

    if (!valid) {
        console.warn(
            `Unknown physical tendency: ${tendency}`
        );

        return false;
    }

    riderCreation.physicalTendency =
        tendency;

    return true;
}

function setTechnicalTendency(tendency) {
    const valid =
        physicalTendencies.some(
            item =>
                item.name === tendency
        );

    if (!valid) {
        console.warn(
            `Unknown technical tendency: ${tendency}`
        );

        return false;
    }

    riderCreation.technicalTendency =
        tendency;

    return true;
}

function getRiderCreationState() {
    return {
        ...riderCreation
    };
}

function isRiderCreationComplete() {
    return (
        riderCreation.name.length >= 2 &&
        riderCreation.country !== null &&
        validRiderAges.includes(
            riderCreation.age
        ) &&
        riderCreation.profile !== null
    );
}

function validateRiderCreation() {
    const errors = [];

    if (!riderCreation.name) {
        errors.push(
            "A rider name is required."
        );
    }

    if (!riderCreation.country) {
        errors.push(
            "A country must be selected."
        );
    }

    if (!validRiderAges.includes(
        riderCreation.age
    )) {
        errors.push(
            "Age must be 16, 17 or 18."
        );
    }

    if (!riderCreation.profile) {
        errors.push(
            "A rider profile must be selected."
        );
    }

    return {
        valid: errors.length === 0,
        errors
    };
}

function generateCreatedRider() {
    const validation =
        validateRiderCreation();

    if (!validation.valid) {
        console.warn(
            "Rider creation is incomplete:",
            validation.errors
        );

        return null;
    }

    const rider =
        generatePlayer({
            name: riderCreation.name,
            country: riderCreation.country,
            age: riderCreation.age,
            profile: riderCreation.profile
        });

    if (!rider) {
        return null;
    }

    riderCreation.generated = true;
    riderCreation.accepted = false;

    return rider;
}

function regenerateCreatedRider() {
    if (!riderCreation.generated) {
        console.warn(
            "Generate the rider before regenerating."
        );

        return null;
    }

    return generateCreatedRider();
}

function acceptCreatedRider() {
    if (!game.player) {
        console.warn(
            "No generated rider exists."
        );

        return false;
    }

    if (!riderCreation.generated) {
        console.warn(
            "Generate the rider before accepting."
        );

        return false;
    }

    riderCreation.accepted = true;

    game.gameStarted = true;

    return true;
}

function beginRiderCreation() {
    resetRiderCreation();

    game.player = null;
    game.team = null;
    game.contract = null;
    game.agent = null;
    game.currentRace = null;

    changeScreen("create-rider");
}

function finishRiderCreation() {
    if (!riderCreation.accepted) {
        console.warn(
            "Rider has not been accepted."
        );

        return false;
    }

    if (!game.player) {
        console.warn(
            "No player exists."
        );

        return false;
    }

    changeScreen("offers");

    return true;
}

function getSelectedProfile() {
    if (!riderCreation.profile) {
        return null;
    }

    return riderProfiles[
        riderCreation.profile
    ];
}

function getAvailableRiderProfiles() {
    return Object.entries(
        riderProfiles
    ).map(([id, profile]) => ({
        id,
        name: profile.name,
        description: profile.description
    }));
}

console.log(
    "Rider Creation system loaded."
);
// ============================================
// CYCLING CAREER
// script.js — Del 5
// Advanced Rider Stat Generation
// ============================================

const statGroups = {
    physical: [
        "sprint",
        "acceleration",
        "endurance",
        "recovery"
    ],

    terrain: [
        "flat",
        "hill",
        "mediumMountain",
        "mountain",
        "cobblestones",
        "itt"
    ],

    technical: [
        "positioning",
        "raceIQ",
        "technique",
        "mentality",
        "teamwork"
    ]
};

const tendencyModifiers = {
    Physical: {
        physical: 1.2,
        terrain: 0.2,
        technical: -0.2
    },

    Balanced: {
        physical: 0,
        terrain: 0,
        technical: 0
    },

    Technical: {
        physical: -0.2,
        terrain: 0.2,
        technical: 1.2
    }
};

function getStatGroup(statId) {
    if (statGroups.physical.includes(statId)) {
        return "physical";
    }

    if (statGroups.terrain.includes(statId)) {
        return "terrain";
    }

    if (statGroups.technical.includes(statId)) {
        return "technical";
    }

    return null;
}

function getTendencyModifier(statId) {
    const group = getStatGroup(statId);

    if (!group) {
        return 0;
    }

    const physical =
        tendencyModifiers[
            riderCreation.physicalTendency
        ] || tendencyModifiers.Balanced;

    const technical =
        tendencyModifiers[
            riderCreation.technicalTendency
        ] || tendencyModifiers.Balanced;

    /*
        Physical tendency primarily affects
        physical stats.

        Technical tendency primarily affects
        race/technical stats.

        Terrain stays comparatively neutral
        so that the rider profile remains the
        main influence there.
    */

    return (
        physical[group] +
        technical[group]
    );
}

function getProfileTendency(
    profileKey,
    statId
) {
    const profile =
        riderProfiles[profileKey] ||
        riderProfiles.allround;

    return profile.tendencies[statId] ?? 5;
}

function generateIndividualStat({
    profileKey,
    statId,
    age
}) {
    const base =
        getProfileTendency(
            profileKey,
            statId
        );

    const tendency =
        getTendencyModifier(statId);

    /*
        Young riders should not have completely
        polished stats.

        Variation makes two riders with the same
        profile different from each other.
    */

    const naturalVariation =
        randomInt(-2, 2);

    const developmentVariation =
        Math.random() < 0.20
            ? randomInt(-1, 1)
            : 0;

    /*
        Age has only a small influence at creation.
        We do not want 18-year-olds automatically
        being much better than 16-year-olds.
    */

    let ageModifier = 0;

    if (age === 16) {
        ageModifier = -0.5;
    }

    if (age === 18) {
        ageModifier = 0.5;
    }

    const rawValue =
        base +
        tendency +
        naturalVariation +
        developmentVariation +
        ageModifier;

    return clamp(
        Math.round(rawValue),
        1,
        85
    );
}

function generateAdvancedStats(
    profileKey,
    age
) {
    const stats = {};

    riderStatDefinitions.forEach(stat => {
        stats[stat.id] =
            generateIndividualStat({
                profileKey,
                statId: stat.id,
                age
            });
    });

    return stats;
}

function calculatePhysicalLevel(stats) {
    return calculateGroupLevel(
        stats,
        statGroups.physical
    );
}

function calculateTerrainLevel(stats) {
    return calculateGroupLevel(
        stats,
        statGroups.terrain
    );
}

function calculateTechnicalLevel(stats) {
    return calculateGroupLevel(
        stats,
        statGroups.technical
    );
}

function calculateGroupLevel(
    stats,
    group
) {
    const values = group
        .map(stat => stats[stat])
        .filter(
            value => typeof value === "number"
        );

    if (!values.length) {
        return 0;
    }

    const total =
        values.reduce(
            (sum, value) => sum + value,
            0
        );

    return Math.round(
        total / values.length
    );
}

function calculateCurrentLevelAdvanced(stats) {
    const physical =
        calculatePhysicalLevel(stats);

    const terrain =
        calculateTerrainLevel(stats);

    const technical =
        calculateTechnicalLevel(stats);

    /*
        All three areas contribute to the
        overall level. This is not a hidden
        "player rating"; it is simply useful
        for displaying the general strength
        of the rider.
    */

    return Math.round(
        (
            physical +
            terrain +
            technical
        ) / 3
    );
}

function getStrongestStats(stats, amount = 3) {
    return Object.entries(stats)
        .sort(
            (a, b) => b[1] - a[1]
        )
        .slice(0, amount)
        .map(([statId, value]) => ({
            statId,
            value,
            definition:
                getPlayerStatDefinition(statId)
        }));
}

function getWeakestStats(stats, amount = 3) {
    return Object.entries(stats)
        .sort(
            (a, b) => a[1] - b[1]
        )
        .slice(0, amount)
        .map(([statId, value]) => ({
            statId,
            value,
            definition:
                getPlayerStatDefinition(statId)
        }));
}

function getDevelopmentDescription(
    developmentProfile
) {
    const descriptions = {
        "Early Developer":
            "Tends to develop earlier than average, but may reach a plateau sooner.",

        "Balanced Developer":
            "Tends to develop steadily across the career.",

        "Late Developer":
            "May develop more slowly early on and improve strongly later."
    };

    return (
        descriptions[developmentProfile] ||
        descriptions["Balanced Developer"]
    );
}

function generateDevelopmentProfile(age) {
    const profile =
        getDevelopmentProfile(age);

    const speed =
        getRandomDevelopmentSpeed();

    return {
        profile,
        speed,
        description:
            getDevelopmentDescription(profile),
        recentTrend: "Stable"
    };
}

function generateAdvancedPotential(age) {
    const basePotential =
        generatePotential(age);

    /*
        Potential is visible but not an absolute
        promise. The uncertainty represents that
        the displayed potential is an estimate.
    */

    const uncertainty =
        randomInt(1, 4);

    return {
        value: basePotential,
        minimum: Math.max(
            1,
            basePotential - uncertainty
        ),
        maximum: Math.min(
            100,
            basePotential + uncertainty
        ),
        visible: true,
        uncertainty
    };
}

function generateCompleteRiderData({
    name,
    country,
    age,
    profile
}) {
    if (
        !name ||
        !country ||
        !validRiderAges.includes(
            Number(age)
        ) ||
        !riderProfiles[profile]
    ) {
        console.error(
            "Cannot generate rider: invalid creation data."
        );

        return null;
    }

    const numericAge =
        Number(age);

    const stats =
        generateAdvancedStats(
            profile,
            numericAge
        );

    const potential =
        generateAdvancedPotential(
            numericAge
        );

    const development =
        generateDevelopmentProfile(
            numericAge
        );

    const currentLevel =
        calculateCurrentLevelAdvanced(
            stats
        );

    return {
        id: `player-${Date.now()}`,

        name,
        country,
        age: numericAge,

        profile: {
            key: profile,
            name:
                riderProfiles[profile].name,
            description:
                riderProfiles[profile].description
        },

        stats,

        potential,

        development: {
            ...development,
            currentLevel
        },

        experience: 0,

        form: 75,
        energy: 100,
        fatigue: 0,

        injuries: [],

        career: {
            races: 0,
            wins: 0,
            podiums: 0,
            top10s: 0,
            raceDays: 0
        },

        status: "Unsigned",

        createdAt:
            game.career.currentDate
    };
}

function generateCreatedRider() {
    const validation =
        validateRiderCreation();

    if (!validation.valid) {
        console.warn(
            "Rider creation is incomplete:",
            validation.errors
        );

        return null;
    }

    const rider =
        generateCompleteRiderData({
            name:
                riderCreation.name,

            country:
                riderCreation.country,

            age:
                riderCreation.age,

            profile:
                riderCreation.profile
        });

    if (!rider) {
        return null;
    }

    game.player = rider;

    riderCreation.generated = true;
    riderCreation.accepted = false;

    console.log(
        "Generated rider:",
        rider
    );

    return rider;
}

function regenerateCreatedRider() {
    if (!riderCreation.generated) {
        console.warn(
            "Generate the rider before regenerating."
        );

        return null;
    }

    return generateCreatedRider();
}

function getRiderCreationPreview() {
    if (!game.player) {
        return null;
    }

    return {
        name: game.player.name,
        country: game.player.country,
        age: game.player.age,

        profile:
            game.player.profile,

        currentLevel:
            game.player.development.currentLevel,

        potential:
            game.player.potential,

        development:
            game.player.development,

        strongest:
            getStrongestStats(
                game.player.stats
            ),

        weakest:
            getWeakestStats(
                game.player.stats
            ),

        stats:
            game.player.stats
    };
}

console.log(
    "Advanced Rider Stat Generator loaded."
);
// ============================================
// CYCLING CAREER
// script.js — Del 6
// Rider Creation Flow
// ============================================

const riderCreationOptions = {
    ages: [16, 17, 18],

    profiles: [
        "quick",
        "climber",
        "classics",
        "timeTrialist",
        "allround",
        "custom"
    ],

    tendencies: [
        "Physical",
        "Balanced",
        "Technical"
    ]
};

function setDevelopmentTendency(tendency) {
    const valid =
        riderCreationOptions.tendencies.includes(
            tendency
        );

    if (!valid) {
        console.warn(
            `Unknown development tendency: ${tendency}`
        );

        return false;
    }

    riderCreation.developmentTendency =
        tendency;

    return true;
}

function getDevelopmentTendency() {
    return (
        riderCreation.developmentTendency ||
        "Balanced"
    );
}

function setCreationValue(type, value) {
    switch (type) {
        case "name":
            return setRiderName(value);

        case "country":
            return setRiderCountry(value);

        case "age":
            return setRiderAge(value);

        case "profile":
            return setRiderProfile(value);

        case "tendency":
            return setDevelopmentTendency(value);

        default:
            console.warn(
                `Unknown creation value: ${type}`
            );

            return false;
    }
}

function getCreationOptions() {
    return {
        ages:
            riderCreationOptions.ages,

        profiles:
            getAvailableRiderProfiles(),

        tendencies:
            riderCreationOptions.tendencies
    };
}

function getCreationProgress() {
    let completed = 0;
    const total = 5;

    if (riderCreation.name) {
        completed++;
    }

    if (riderCreation.country) {
        completed++;
    }

    if (riderCreation.age) {
        completed++;
    }

    if (riderCreation.profile) {
        completed++;
    }

    if (
        riderCreation.developmentTendency
    ) {
        completed++;
    }

    return {
        completed,
        total,
        percentage:
            Math.round(
                (completed / total) * 100
            )
    };
}

function getCreationMissingFields() {
    const missing = [];

    if (!riderCreation.name) {
        missing.push("name");
    }

    if (!riderCreation.country) {
        missing.push("country");
    }

    if (!riderCreation.age) {
        missing.push("age");
    }

    if (!riderCreation.profile) {
        missing.push("profile");
    }

    if (
        !riderCreation.developmentTendency
    ) {
        missing.push("developmentTendency");
    }

    return missing;
}

function validateCompleteCreation() {
    const missing =
        getCreationMissingFields();

    return {
        valid: missing.length === 0,
        missing
    };
}

function prepareRiderGeneration() {
    const validation =
        validateCompleteCreation();

    if (!validation.valid) {
        console.warn(
            "Rider creation is incomplete.",
            validation.missing
        );

        return {
            success: false,
            missing: validation.missing
        };
    }

    /*
        The tendency is used when generating
        the rider's initial stats.
    */

    return {
        success: true,
        data: {
            name:
                riderCreation.name,

            country:
                riderCreation.country,

            age:
                riderCreation.age,

            profile:
                riderCreation.profile,

            developmentTendency:
                riderCreation.developmentTendency
        }
    };
}

function generateRiderFromCreation() {
    const preparation =
        prepareRiderGeneration();

    if (!preparation.success) {
        return null;
    }

    const rider =
        generateCompleteRiderData({
            name:
                preparation.data.name,

            country:
                preparation.data.country,

            age:
                preparation.data.age,

            profile:
                preparation.data.profile
        });

    if (!rider) {
        return null;
    }

    /*
        Store the chosen tendency on the rider.
        The actual stat influence will be handled
        by the stat-development system.
    */

    rider.development.tendency =
        preparation.data.developmentTendency;

    game.player = rider;

    riderCreation.generated = true;
    riderCreation.accepted = false;

    return rider;
}

function regenerateRiderFromCreation() {
    if (!riderCreation.generated) {
        console.warn(
            "No rider has been generated yet."
        );

        return null;
    }

    return generateRiderFromCreation();
}

function acceptGeneratedRider() {
    if (!game.player) {
        console.warn(
            "No generated rider exists."
        );

        return false;
    }

    if (!riderCreation.generated) {
        console.warn(
            "Generate a rider first."
        );

        return false;
    }

    riderCreation.accepted = true;

    game.gameStarted = true;

    return true;
}

function getGeneratedRider() {
    if (!riderCreation.generated) {
        return null;
    }

    return game.player;
}

function getCreationSummary() {
    return {
        name:
            riderCreation.name || "Not selected",

        country:
            riderCreation.country || "Not selected",

        age:
            riderCreation.age || "Not selected",

        profile:
            riderCreation.profile
                ? riderProfiles[
                    riderCreation.profile
                ].name
                : "Not selected",

        developmentTendency:
            riderCreation.developmentTendency ||
            "Not selected",

        progress:
            getCreationProgress(),

        generated:
            riderCreation.generated,

        accepted:
            riderCreation.accepted
    };
}

function canGenerateRider() {
    return validateCompleteCreation().valid;
}

function canAcceptRider() {
    return (
        riderCreation.generated &&
        !!game.player
    );
}

function canContinueFromCreation() {
    return (
        riderCreation.accepted &&
        !!game.player
    );
}

/*
    Override the old reset function so the new
    development tendency is always reset too.
*/

function resetRiderCreationState() {
    riderCreation.name = "";
    riderCreation.country = null;
    riderCreation.age = null;
    riderCreation.profile = null;

    riderCreation.developmentTendency =
        null;

    riderCreation.generated = false;
    riderCreation.accepted = false;
}

console.log(
    "Rider Creation Flow loaded."
);
// ============================================
// CYCLING CAREER
// script.js — Del 7
// Team Offers System
// ============================================

const teamOfferState = {
    offers: [],
    selectedOfferId: null,
    decisionMade: false
};

const offerTypes = {
    development: {
        name: "Development",
        description:
            "A team focused on giving young riders experience and development opportunities."
    },

    opportunity: {
        name: "Opportunity",
        description:
            "A team where a young rider may receive more responsibility early in the career."
    },

    competition: {
        name: "Competition",
        description:
            "A stronger team with more competition for race selection and roles."
    }
};

function resetTeamOffers() {
    teamOfferState.offers = [];
    teamOfferState.selectedOfferId = null;
    teamOfferState.decisionMade = false;
}

function createTeamOffer({
    teamId,
    teamName,
    teamLevel,
    role,
    salary,
    raceAccess,
    development,
    leadership,
    offerType = "development"
}) {
    return {
        id: `offer-${teamId}-${Date.now()}-${randomInt(100, 999)}`,

        teamId,
        teamName,
        teamLevel,

        role,

        salary,

        raceAccess,

        development,

        leadership,

        offerType,

        status: "Pending",

        createdAt:
            game.career.currentDate
    };
}

function calculateOfferScore(offer) {
    const roleScore =
        getRoleScore(offer.role);

    const developmentScore =
        getOfferValueScore(
            offer.development
        );

    const raceAccessScore =
        getOfferValueScore(
            offer.raceAccess
        );

    const leadershipScore =
        getOfferValueScore(
            offer.leadership
        );

    return Math.round(
        (
            roleScore +
            developmentScore +
            raceAccessScore +
            leadershipScore
        ) / 4
    );
}

function getRoleScore(role) {
    const scores = {
        "Development rider": 55,
        "Domestique": 60,
        "Important rider": 72,
        "Secondary leader": 82,
        "Co-leader": 91,
        "Captain": 100
    };

    return scores[role] ?? 50;
}

function getOfferValueScore(value) {
    if (typeof value === "number") {
        return clamp(value, 0, 100);
    }

    if (typeof value !== "string") {
        return 50;
    }

    const normalized =
        value.toLowerCase();

    if (
        normalized.includes("excellent") ||
        normalized.includes("very high")
    ) {
        return 90;
    }

    if (
        normalized.includes("high") ||
        normalized.includes("strong")
    ) {
        return 75;
    }

    if (
        normalized.includes("medium") ||
        normalized.includes("average")
    ) {
        return 55;
    }

    if (
        normalized.includes("low") ||
        normalized.includes("limited")
    ) {
        return 35;
    }

    return 50;
}

function sortTeamOffers() {
    teamOfferState.offers.sort(
        (a, b) =>
            calculateOfferScore(b) -
            calculateOfferScore(a)
    );
}

function addTeamOffer(offer) {
    if (!offer || !offer.id) {
        console.warn(
            "Invalid team offer."
        );

        return false;
    }

    teamOfferState.offers.push(offer);

    sortTeamOffers();

    return true;
}

function getTeamOffers() {
    return teamOfferState.offers;
}

function getTeamOfferById(offerId) {
    return teamOfferState.offers.find(
        offer =>
            offer.id === offerId
    ) || null;
}

function selectTeamOffer(offerId) {
    const offer =
        getTeamOfferById(offerId);

    if (!offer) {
        console.warn(
            `Team offer not found: ${offerId}`
        );

        return false;
    }

    if (teamOfferState.decisionMade) {
        console.warn(
            "A team decision has already been made."
        );

        return false;
    }

    teamOfferState.selectedOfferId =
        offerId;

    return true;
}

function getSelectedTeamOffer() {
    if (
        !teamOfferState.selectedOfferId
    ) {
        return null;
    }

    return getTeamOfferById(
        teamOfferState.selectedOfferId
    );
}

function generateTeamOffers() {
    if (!game.player) {
        console.warn(
            "Cannot generate offers without a player."
        );

        return [];
    }

    resetTeamOffers();

    /*
        Temporary offers.

        These are placeholders for the real
        team database that will later live in
        data/teams.js.

        The offer system itself does not depend
        on fictional team names.
    */

    const offers = [
        createTeamOffer({
            teamId: "development-placeholder",
            teamName: "Development Team",
            teamLevel: "Continental",
            role: "Development rider",
            salary: 12000,
            raceAccess: 55,
            development: 85,
            leadership: 45,
            offerType: "development"
        }),

        createTeamOffer({
            teamId: "opportunity-placeholder",
            teamName: "Opportunity Team",
            teamLevel: "ProTeam",
            role: "Important rider",
            salary: 18000,
            raceAccess: 70,
            development: 72,
            leadership: 70,
            offerType: "opportunity"
        }),

        createTeamOffer({
            teamId: "competition-placeholder",
            teamName: "Competition Team",
            teamLevel: "ProTeam",
            role: "Development rider",
            salary: 22000,
            raceAccess: 60,
            development: 65,
            leadership: 35,
            offerType: "competition"
        })
    ];

    offers.forEach(
        offer => addTeamOffer(offer)
    );

    return getTeamOffers();
}

function acceptTeamOffer(offerId) {
    if (teamOfferState.decisionMade) {
        console.warn(
            "A team decision has already been made."
        );

        return false;
    }

    const offer =
        getTeamOfferById(offerId);

    if (!offer) {
        console.warn(
            `Cannot accept unknown offer: ${offerId}`
        );

        return false;
    }

    if (!game.player) {
        console.warn(
            "Cannot accept offer without a player."
        );

        return false;
    }

    teamOfferState.selectedOfferId =
        offerId;

    teamOfferState.decisionMade =
        true;

    offer.status = "Accepted";

    game.team = {
        id: offer.teamId,
        name: offer.teamName,
        level: offer.teamLevel,
        playerRole: offer.role,
        joinedDate:
            game.career.currentDate
    };

    game.contract = {
        teamId: offer.teamId,
        startDate:
            game.career.currentDate,
        endDate:
            getContractEndDate(2),
        salary: offer.salary,
        role: offer.role,
        raceAccess: offer.raceAccess,
        development:
            offer.development,
        leadership:
            offer.leadership,
        status: "Active"
    };

    game.player.status =
        "Under Contract";

    teamOfferState.offers.forEach(
        otherOffer => {
            if (
                otherOffer.id !== offerId &&
                otherOffer.status === "Pending"
            ) {
                otherOffer.status =
                    "Rejected";
            }
        }
    );

    addHistoryEntry({
        type: "Team",
        title: "First professional contract",
        description:
            `Joined ${offer.teamName} as ${offer.role}.`
    });

    return true;
}

function rejectTeamOffer(offerId) {
    const offer =
        getTeamOfferById(offerId);

    if (!offer) {
        console.warn(
            `Cannot reject unknown offer: ${offerId}`
        );

        return false;
    }

    if (
        offer.status !== "Pending"
    ) {
        return false;
    }

    offer.status = "Rejected";

    return true;
}

function rejectAllTeamOffers() {
    teamOfferState.offers.forEach(
        offer => {
            if (
                offer.status === "Pending"
            ) {
                offer.status =
                    "Rejected";
            }
        }
    );
}

function getContractEndDate(years) {
    const date =
        new Date(
            game.career.currentDate
        );

    date.setFullYear(
        date.getFullYear() + years
    );

    return date
        .toISOString()
        .split("T")[0];
}

function hasAcceptedTeam() {
    return (
        !!game.team &&
        !!game.contract &&
        game.contract.status === "Active"
    );
}

function getCurrentTeam() {
    return game.team;
}

function getCurrentContract() {
    return game.contract;
}

function getTeamOfferSummary(offer) {
    if (!offer) {
        return null;
    }

    return {
        id: offer.id,
        teamName: offer.teamName,
        teamLevel: offer.teamLevel,
        role: offer.role,
        salary: offer.salary,
        raceAccess: offer.raceAccess,
        development: offer.development,
        leadership: offer.leadership,
        offerType:
            offerTypes[
                offer.offerType
            ] || null,
        score:
            calculateOfferScore(offer),
        status: offer.status
    };
}

function getAllTeamOfferSummaries() {
    return teamOfferState.offers.map(
        offer =>
            getTeamOfferSummary(offer)
    );
}

console.log(
    "Team Offers system loaded."
);
// ============================================
// CYCLING CAREER
// script.js — Del 8
// Career Date & Time System
// ============================================

const careerTime = {
    startDate: "2026-01-01",

    simulation: {
        daysPassed: 0,
        weeksPassed: 0,
        monthsPassed: 0,
        yearsPassed: 0
    }
};

function parseCareerDate(dateString) {
    const date =
        new Date(`${dateString}T00:00:00`);

    if (Number.isNaN(date.getTime())) {
        console.error(
            `Invalid career date: ${dateString}`
        );

        return null;
    }

    return date;
}

function formatCareerDate(date) {
    if (!(date instanceof Date)) {
        return null;
    }

    return date
        .toISOString()
        .split("T")[0];
}

function getCurrentDate() {
    return game.career.currentDate;
}

function getCurrentDateObject() {
    return parseCareerDate(
        game.career.currentDate
    );
}

function setCareerDate(date) {
    const parsed =
        typeof date === "string"
            ? parseCareerDate(date)
            : date;

    if (!parsed) {
        return false;
    }

    game.career.currentDate =
        formatCareerDate(parsed);

    updateCareerSeason();

    return true;
}

function addDaysToCareer(days) {
    const numericDays =
        Number(days);

    if (
        !Number.isFinite(numericDays) ||
        numericDays < 0
    ) {
        console.warn(
            "Days must be a positive number."
        );

        return false;
    }

    const currentDate =
        getCurrentDateObject();

    if (!currentDate) {
        return false;
    }

    currentDate.setDate(
        currentDate.getDate() +
        numericDays
    );

    game.career.currentDate =
        formatCareerDate(currentDate);

    game.career.daysPassed +=
        numericDays;

    careerTime.simulation.daysPassed +=
        numericDays;

    updateCareerSeason();

    return true;
}

function advanceOneDay() {
    return addDaysToCareer(1);
}

function advanceDays(days) {
    return addDaysToCareer(days);
}

function advanceOneWeek() {
    return addDaysToCareer(7);
}

function advanceWeeks(weeks) {
    return addDaysToCareer(
        Number(weeks) * 7
    );
}

function getCurrentYear() {
    const date =
        getCurrentDateObject();

    if (!date) {
        return null;
    }

    return date.getFullYear();
}

function getCurrentMonth() {
    const date =
        getCurrentDateObject();

    if (!date) {
        return null;
    }

    return date.getMonth() + 1;
}

function getCurrentDay() {
    const date =
        getCurrentDateObject();

    if (!date) {
        return null;
    }

    return date.getDate();
}

function getDayOfYear() {
    const date =
        getCurrentDateObject();

    if (!date) {
        return null;
    }

    const start =
        new Date(
            date.getFullYear(),
            0,
            0
        );

    const difference =
        date - start;

    const oneDay =
        1000 * 60 * 60 * 24;

    return Math.floor(
        difference / oneDay
    );
}

function getWeekOfYear() {
    const date =
        getCurrentDateObject();

    if (!date) {
        return null;
    }

    const start =
        new Date(
            date.getFullYear(),
            0,
            1
        );

    const difference =
        date - start;

    const oneWeek =
        1000 * 60 * 60 * 24 * 7;

    return Math.ceil(
        (
            difference /
            oneWeek
        ) + 1
    );
}

function getMonthName(month) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return months[month - 1] || "";
}

function getDayName(date = getCurrentDateObject()) {
    if (!date) {
        return "";
    }

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    return days[
        date.getDay()
    ];
}

function getFormattedCareerDate(
    date = getCurrentDateObject()
) {
    if (!date) {
        return "";
    }

    const day =
        String(
            date.getDate()
        ).padStart(2, "0");

    const month =
        String(
            date.getMonth() + 1
        ).padStart(2, "0");

    const year =
        date.getFullYear();

    return `${day}/${month}/${year}`;
}

function getLongCareerDate(
    date = getCurrentDateObject()
) {
    if (!date) {
        return "";
    }

    const day =
        date.getDate();

    const month =
        getMonthName(
            date.getMonth() + 1
        );

    const year =
        date.getFullYear();

    return `${day} ${month} ${year}`;
}

function getSeasonPhase() {
    const month =
        getCurrentMonth();

    if (!month) {
        return null;
    }

    if (month === 1) {
        return "Season Setup";
    }

    if (month >= 2 && month <= 3) {
        return "Early Season";
    }

    if (month === 4) {
        return "Spring Classics";
    }

    if (month >= 5 && month <= 6) {
        return "Stage Race Season";
    }

    if (month === 7) {
        return "Tour Season";
    }

    if (month >= 8 && month <= 9) {
        return "Late Season";
    }

    if (month === 10) {
        return "Autumn";
    }

    return "Offseason";
}

function updateCareerSeason() {
    const year =
        getCurrentYear();

    if (!year) {
        return;
    }

    game.career.season =
        year;

    game.world.year =
        year;
}

function getSeasonProgress() {
    const day =
        getDayOfYear();

    if (!day) {
        return 0;
    }

    const currentYear =
        getCurrentYear();

    const start =
        new Date(
            currentYear,
            0,
            1
        );

    const end =
        new Date(
            currentYear + 1,
            0,
            1
        );

    const totalDays =
        (
            end - start
        ) / (
            1000 * 60 * 60 * 24
        );

    return Math.round(
        (
            day /
            totalDays
        ) * 100
    );
}

function getDaysBetween(
    startDate,
    endDate
) {
    const start =
        parseCareerDate(
            startDate
        );

    const end =
        parseCareerDate(
            endDate
        );

    if (!start || !end) {
        return null;
    }

    const difference =
        end - start;

    return Math.round(
        difference /
        (
            1000 *
            60 *
            60 *
            24
        )
    );
}

function isDateBefore(
    firstDate,
    secondDate
) {
    const first =
        parseCareerDate(
            firstDate
        );

    const second =
        parseCareerDate(
            secondDate
        );

    if (!first || !second) {
        return false;
    }

    return first < second;
}

function isDateAfter(
    firstDate,
    secondDate
) {
    const first =
        parseCareerDate(
            firstDate
        );

    const second =
        parseCareerDate(
            secondDate
        );

    if (!first || !second) {
        return false;
    }

    return first > second;
}

function isDateSameDay(
    firstDate,
    secondDate
) {
    return (
        firstDate ===
        secondDate
    );
}

function getCareerTimeState() {
    return {
        date:
            getCurrentDate(),

        formattedDate:
            getFormattedCareerDate(),

        longDate:
            getLongCareerDate(),

        year:
            getCurrentYear(),

        month:
            getCurrentMonth(),

        day:
            getCurrentDay(),

        dayOfYear:
            getDayOfYear(),

        week:
            getWeekOfYear(),

        season:
            getSeasonPhase(),

        seasonProgress:
            getSeasonProgress(),

        daysPassed:
            game.career.daysPassed
    };
}

function resetCareerTime() {
    game.career.currentDate =
        careerTime.startDate;

    game.career.season =
        2026;

    game.career.daysPassed =
        0;

    game.world.year =
        2026;

    careerTime.simulation.daysPassed =
        0;

    careerTime.simulation.weeksPassed =
        0;

    careerTime.simulation.monthsPassed =
        0;

    careerTime.simulation.yearsPassed =
        0;
}

console.log(
    "Career Time system loaded."
);
// ============================================
// CYCLING CAREER
// script.js — Del 9
// Career Events & Continue System
// ============================================

const careerEvents = {
    queue: [],
    currentEvent: null,
    lastProcessedEvent: null
};

const careerEventTypes = {
    race: {
        name: "Race",
        priority: 100
    },

    selection: {
        name: "Race Selection",
        priority: 90
    },

    contract: {
        name: "Contract",
        priority: 85
    },

    injury: {
        name: "Medical",
        priority: 80
    },

    meeting: {
        name: "Meeting",
        priority: 70
    },

    training: {
        name: "Training",
        priority: 60
    },

    world: {
        name: "World Event",
        priority: 40
    },

    summary: {
        name: "Period Summary",
        priority: 20
    }
};

function createCareerEvent({
    id,
    type,
    date,
    title,
    description = "",
    data = {},
    priority = null,
    requiresAction = true
}) {
    if (!id || !type || !date || !title) {
        console.warn(
            "Cannot create incomplete career event."
        );

        return null;
    }

    if (!careerEventTypes[type]) {
        console.warn(
            `Unknown career event type: ${type}`
        );

        return null;
    }

    return {
        id,

        type,

        date,

        title,

        description,

        data,

        priority:
            priority ??
            careerEventTypes[type].priority,

        requiresAction,

        status: "Pending",

        createdAt:
            game.career.currentDate
    };
}

function addCareerEvent(event) {
    if (!event) {
        return false;
    }

    const existing =
        careerEvents.queue.find(
            item =>
                item.id === event.id
        );

    if (existing) {
        console.warn(
            `Career event already exists: ${event.id}`
        );

        return false;
    }

    careerEvents.queue.push(event);

    sortCareerEvents();

    return true;
}

function sortCareerEvents() {
    careerEvents.queue.sort(
        (a, b) => {
            const dateDifference =
                getDaysBetween(
                    a.date,
                    b.date
                );

            if (
                dateDifference !== 0 &&
                dateDifference !== null
            ) {
                return dateDifference;
            }

            return (
                b.priority -
                a.priority
            );
        }
    );
}

function getPendingCareerEvents() {
    return careerEvents.queue.filter(
        event =>
            event.status === "Pending"
    );
}

function getUpcomingCareerEvents() {
    return getPendingCareerEvents()
        .filter(
            event =>
                !isDateBefore(
                    event.date,
                    game.career.currentDate
                )
        );
}

function getNextCareerEvent() {
    const events =
        getUpcomingCareerEvents();

    if (!events.length) {
        return null;
    }

    return events[0];
}

function getCareerEventById(eventId) {
    return careerEvents.queue.find(
        event =>
            event.id === eventId
    ) || null;
}

function markCareerEventComplete(
    eventId
) {
    const event =
        getCareerEventById(eventId);

    if (!event) {
        return false;
    }

    event.status = "Completed";

    careerEvents.lastProcessedEvent =
        event;

    if (
        careerEvents.currentEvent?.id ===
        eventId
    ) {
        careerEvents.currentEvent =
            null;
    }

    return true;
}

function cancelCareerEvent(eventId) {
    const event =
        getCareerEventById(eventId);

    if (!event) {
        return false;
    }

    event.status = "Cancelled";

    if (
        careerEvents.currentEvent?.id ===
        eventId
    ) {
        careerEvents.currentEvent =
            null;
    }

    return true;
}

function setCurrentCareerEvent(event) {
    if (!event) {
        careerEvents.currentEvent =
            null;

        return false;
    }

    careerEvents.currentEvent =
        event;

    return true;
}

function getCurrentCareerEvent() {
    return careerEvents.currentEvent;
}

function hasPendingAction() {
    return getPendingCareerEvents()
        .some(
            event =>
                event.requiresAction &&
                isDateSameDay(
                    event.date,
                    game.career.currentDate
                )
        );
}

function getEventsForDate(date) {
    return careerEvents.queue.filter(
        event =>
            event.date === date &&
            event.status === "Pending"
    );
}

function getEventsBetweenDates(
    startDate,
    endDate
) {
    return careerEvents.queue.filter(
        event =>
            event.status === "Pending" &&
            !isDateBefore(
                event.date,
                startDate
            ) &&
            !isDateAfter(
                event.date,
                endDate
            )
    );
}

function createInitialCareerEvents() {
    careerEvents.queue = [];
    careerEvents.currentEvent = null;
    careerEvents.lastProcessedEvent = null;

    if (!game.player) {
        return;
    }

    /*
        These are structural events for now.
        Real races and selection dates will later
        come from data/races.js.
    */

    const firstSelectionDate =
        addDaysToDateString(
            game.career.currentDate,
            7
        );

    addCareerEvent(
        createCareerEvent({
            id: "initial-selection",
            type: "selection",
            date: firstSelectionDate,
            title: "First team selection",
            description:
                "Your team will review your first race opportunities.",
            priority: 90,
            requiresAction: true
        })
    );

    const firstTrainingDate =
        addDaysToDateString(
            game.career.currentDate,
            3
        );

    addCareerEvent(
        createCareerEvent({
            id: "initial-training",
            type: "training",
            date: firstTrainingDate,
            title: "Training block",
            description:
                "Your first training period begins.",
            priority: 60,
            requiresAction: true
        })
    );
}

function addDaysToDateString(
    dateString,
    days
) {
    const date =
        parseCareerDate(
            dateString
        );

    if (!date) {
        return null;
    }

    date.setDate(
        date.getDate() +
        Number(days)
    );

    return formatCareerDate(date);
}

function advanceToDate(date) {
    if (!date) {
        return false;
    }

    const days =
        getDaysBetween(
            game.career.currentDate,
            date
        );

    if (
        days === null ||
        days < 0
    ) {
        return false;
    }

    if (days > 0) {
        advanceDays(days);
    }

    return true;
}

function processNextCareerEvent() {
    const nextEvent =
        getNextCareerEvent();

    if (!nextEvent) {
        return {
            success: false,
            reason: "No upcoming events."
        };
    }

    const reached =
        advanceToDate(
            nextEvent.date
        );

    if (!reached) {
        return {
            success: false,
            reason:
                "Could not advance to event."
        };
    }

    setCurrentCareerEvent(
        nextEvent
    );

    return {
        success: true,
        event: nextEvent
    };
}

function continueCareer() {
    if (!game.player) {
        console.warn(
            "Cannot continue without a player."
        );

        return false;
    }

    const result =
        processNextCareerEvent();

    if (!result.success) {
        console.log(
            "No career event found."
        );

        return false;
    }

    console.log(
        "Next career event:",
        result.event
    );

    handleCareerEvent(
        result.event
    );

    return true;
}

function handleCareerEvent(event) {
    if (!event) {
        return;
    }

    switch (event.type) {
        case "race":
            handleRaceEvent(event);
            break;

        case "selection":
            handleSelectionEvent(event);
            break;

        case "contract":
            handleContractEvent(event);
            break;

        case "injury":
            handleInjuryEvent(event);
            break;

        case "meeting":
            handleMeetingEvent(event);
            break;

        case "training":
            handleTrainingEvent(event);
            break;

        case "world":
            handleWorldEvent(event);
            break;

        case "summary":
            handleSummaryEvent(event);
            break;

        default:
            console.warn(
                `Unhandled career event: ${event.type}`
            );
    }
}

function handleRaceEvent(event) {
    console.log(
        "Race event reached:",
        event.title
    );

    /*
        Race Engine will take over here later.
    */

    changeScreen("race");
}

function handleSelectionEvent(event) {
    console.log(
        "Selection event reached:",
        event.title
    );

    /*
        Selection system will take over here later.
    */

    addInboxMessage({
        type: "Sports Director",
        priority: "ACTION REQUIRED",
        title: event.title,
        body: event.description
    });

    changeScreen("inbox");
}

function handleContractEvent(event) {
    console.log(
        "Contract event reached:",
        event.title
    );

    changeScreen("contract");
}

function handleInjuryEvent(event) {
    console.log(
        "Medical event reached:",
        event.title
    );

    addInboxMessage({
        type: "Medical/Performance",
        priority: "Important",
        title: event.title,
        body: event.description
    });

    changeScreen("inbox");
}

function handleMeetingEvent(event) {
    console.log(
        "Meeting event reached:",
        event.title
    );

    addInboxMessage({
        type: "Team",
        priority: "ACTION REQUIRED",
        title: event.title,
        body: event.description
    });

    changeScreen("inbox");
}

function handleTrainingEvent(event) {
    console.log(
        "Training event reached:",
        event.title
    );

    addInboxMessage({
        type: "Medical/Performance",
        priority: "Important",
        title: event.title,
        body: event.description
    });

    changeScreen("inbox");
}

function handleWorldEvent(event) {
    console.log(
        "World event reached:",
        event.title
    );

    changeScreen("world");
}

function handleSummaryEvent(event) {
    console.log(
        "Period summary:",
        event.title
    );

    changeScreen("dashboard");
}

function getContinueState() {
    const nextEvent =
        getNextCareerEvent();

    if (!nextEvent) {
        return {
            available: false,
            nextEvent: null,
            daysUntil: null
        };
    }

    return {
        available: true,

        nextEvent,

        daysUntil:
            getDaysBetween(
                game.career.currentDate,
                nextEvent.date
            )
    };
}

console.log(
    "Career Events & Continue system loaded."
);
// ============================================
// CYCLING CAREER
// script.js — Del 10
// Inbox System
// ============================================

const inboxState = {
    selectedMessageId: null,
    unreadCount: 0,
    actionRequiredCount: 0
};

const inboxMessageTypes = {
    "Sports Director": {
        name: "Sports Director"
    },

    "Team": {
        name: "Team"
    },

    "Agent": {
        name: "Agent"
    },

    "Medical/Performance": {
        name: "Medical/Performance"
    },

    "Media": {
        name: "Media"
    },

    "Cycling World": {
        name: "Cycling World"
    }
};

const inboxPriorities = {
    INFO: {
        name: "Info",
        level: 1
    },

    Important: {
        name: "Important",
        level: 2
    },

    "ACTION REQUIRED": {
        name: "Action Required",
        level: 3
    }
};

function createInboxMessage({
    id = null,
    type = "Team",
    priority = "INFO",
    title,
    body,
    date = game.career.currentDate,
    data = {},
    action = null
}) {
    if (!title || !body) {
        console.warn(
            "Inbox message requires a title and body."
        );

        return null;
    }

    if (!inboxMessageTypes[type]) {
        console.warn(
            `Unknown inbox message type: ${type}`
        );

        return null;
    }

    if (!inboxPriorities[priority]) {
        console.warn(
            `Unknown inbox priority: ${priority}`
        );

        return null;
    }

    return {
        id:
            id ||
            `message-${Date.now()}-${randomInt(100, 999)}`,

        type,

        priority,

        title,

        body,

        date,

        data,

        action,

        read: false,

        archived: false,

        completed: false,

        createdAt:
            game.career.currentDate
    };
}

function addInboxMessage(messageData) {
    const message =
        messageData?.id
            ? createInboxMessage(
                messageData
            )
            : createInboxMessage(
                messageData
            );

    if (!message) {
        return null;
    }

    const duplicate =
        game.inbox.find(
            existing =>
                existing.id === message.id
        );

    if (duplicate) {
        console.warn(
            `Inbox message already exists: ${message.id}`
        );

        return duplicate;
    }

    game.inbox.push(message);

    updateInboxCounters();

    return message;
}

function getInboxMessages({
    includeArchived = false,
    unreadOnly = false,
    actionRequiredOnly = false,
    type = null
} = {}) {
    return game.inbox.filter(
        message => {
            if (
                !includeArchived &&
                message.archived
            ) {
                return false;
            }

            if (
                unreadOnly &&
                message.read
            ) {
                return false;
            }

            if (
                actionRequiredOnly &&
                message.priority !==
                    "ACTION REQUIRED"
            ) {
                return false;
            }

            if (
                type &&
                message.type !== type
            ) {
                return false;
            }

            return true;
        }
    );
}

function getInboxMessageById(messageId) {
    return game.inbox.find(
        message =>
            message.id === messageId
    ) || null;
}

function openInboxMessage(messageId) {
    const message =
        getInboxMessageById(
            messageId
        );

    if (!message) {
        console.warn(
            `Inbox message not found: ${messageId}`
        );

        return null;
    }

    message.read = true;

    inboxState.selectedMessageId =
        messageId;

    updateInboxCounters();

    return message;
}

function markInboxMessageRead(
    messageId
) {
    const message =
        getInboxMessageById(
            messageId
        );

    if (!message) {
        return false;
    }

    message.read = true;

    updateInboxCounters();

    return true;
}

function markInboxMessageUnread(
    messageId
) {
    const message =
        getInboxMessageById(
            messageId
        );

    if (!message) {
        return false;
    }

    message.read = false;

    updateInboxCounters();

    return true;
}

function markAllInboxRead() {
    game.inbox.forEach(
        message => {
            if (!message.archived) {
                message.read = true;
            }
        }
    );

    updateInboxCounters();
}

function archiveInboxMessage(
    messageId
) {
    const message =
        getInboxMessageById(
            messageId
        );

    if (!message) {
        return false;
    }

    message.archived = true;

    if (
        inboxState.selectedMessageId ===
        messageId
    ) {
        inboxState.selectedMessageId =
            null;
    }

    updateInboxCounters();

    return true;
}

function unarchiveInboxMessage(
    messageId
) {
    const message =
        getInboxMessageById(
            messageId
        );

    if (!message) {
        return false;
    }

    message.archived = false;

    updateInboxCounters();

    return true;
}

function completeInboxAction(
    messageId
) {
    const message =
        getInboxMessageById(
            messageId
        );

    if (!message) {
        return false;
    }

    if (
        message.priority !==
        "ACTION REQUIRED"
    ) {
        console.warn(
            "This message does not require an action."
        );

        return false;
    }

    message.completed = true;
    message.read = true;

    updateInboxCounters();

    return true;
}

function deleteInboxMessage(
    messageId
) {
    const index =
        game.inbox.findIndex(
            message =>
                message.id === messageId
        );

    if (index === -1) {
        return false;
    }

    game.inbox.splice(
        index,
        1
    );

    if (
        inboxState.selectedMessageId ===
        messageId
    ) {
        inboxState.selectedMessageId =
            null;
    }

    updateInboxCounters();

    return true;
}

function getUnreadInboxMessages() {
    return getInboxMessages({
        unreadOnly: true
    });
}

function getActionRequiredMessages() {
    return getInboxMessages({
        actionRequiredOnly: true
    }).filter(
        message =>
            !message.completed
    );
}

function getInboxUnreadCount() {
    return getUnreadInboxMessages()
        .length;
}

function getInboxActionRequiredCount() {
    return getActionRequiredMessages()
        .length;
}

function updateInboxCounters() {
    inboxState.unreadCount =
        getInboxUnreadCount();

    inboxState.actionRequiredCount =
        getInboxActionRequiredCount();
}

function getInboxState() {
    updateInboxCounters();

    return {
        unreadCount:
            inboxState.unreadCount,

        actionRequiredCount:
            inboxState.actionRequiredCount,

        selectedMessageId:
            inboxState.selectedMessageId
    };
}

function getInboxSummary() {
    const messages =
        getInboxMessages();

    return {
        total:
            messages.length,

        unread:
            messages.filter(
                message =>
                    !message.read
            ).length,

        actionRequired:
            messages.filter(
                message =>
                    message.priority ===
                    "ACTION REQUIRED" &&
                    !message.completed
            ).length,

        important:
            messages.filter(
                message =>
                    message.priority ===
                    "Important"
            ).length
    };
}

function sortInboxMessages(
    messages
) {
    return [...messages].sort(
        (a, b) => {
            const priorityDifference =
                inboxPriorities[
                    b.priority
                ].level -
                inboxPriorities[
                    a.priority
                ].level;

            if (
                priorityDifference !== 0
            ) {
                return priorityDifference;
            }

            return (
                getDaysBetween(
                    b.date,
                    a.date
                ) || 0
            );
        }
    );
}

function getSortedInboxMessages(
    options = {}
) {
    return sortInboxMessages(
        getInboxMessages(
            options
        )
    );
}

function getSelectedInboxMessage() {
    if (
        !inboxState.selectedMessageId
    ) {
        return null;
    }

    return getInboxMessageById(
        inboxState.selectedMessageId
    );
}

function clearSelectedInboxMessage() {
    inboxState.selectedMessageId =
        null;
}

function createInitialInboxMessages() {
    if (!game.player) {
        return;
    }

    addInboxMessage({
        id: "welcome-team-message",
        type: "Team",
        priority: "INFO",
        title: "Welcome to the team",
        body:
            "Your career is about to begin. Your sports director and staff will guide you through your first weeks."
    });
}

function getInboxPriorityClass(priority) {
    if (
        priority ===
        "ACTION REQUIRED"
    ) {
        return "action-required";
    }

    if (
        priority === "Important"
    ) {
        return "important";
    }

    return "info";
}

function getInboxMessagePreview(
    message
) {
    if (!message) {
        return null;
    }

    return {
        id: message.id,

        type: message.type,

        priority: message.priority,

        priorityClass:
            getInboxPriorityClass(
                message.priority
            ),

        title: message.title,

        body: message.body,

        date: message.date,

        read: message.read,

        archived:
            message.archived,

        completed:
            message.completed,

        requiresAction:
            message.priority ===
            "ACTION REQUIRED"
    };
}

function getInboxMessagePreviews() {
    return getSortedInboxMessages()
        .map(
            message =>
                getInboxMessagePreview(
                    message
                )
        );
}

console.log(
    "Inbox system loaded."
);
// ============================================
// CYCLING CAREER
// script.js — Del 11
// Relationships & People System
// ============================================

const relationshipState = {
    people: [],
    selectedPersonId: null
};

const personTypes = {
    "Sports Director": {
        name: "Sports Director",
        category: "Team"
    },

    Captain: {
        name: "Captain",
        category: "Rider"
    },

    Teammate: {
        name: "Teammate",
        category: "Rider"
    },

    Coach: {
        name: "Coach",
        category: "Staff"
    },

    Medical: {
        name: "Medical/Performance",
        category: "Staff"
    },

    Mechanic: {
        name: "Mechanic",
        category: "Staff"
    },

    Agent: {
        name: "Agent",
        category: "Career"
    }
};

const relationshipLevels = {
    Strong: {
        name: "Strong",
        minimum: 75
    },

    Good: {
        name: "Good",
        minimum: 55
    },

    Neutral: {
        name: "Neutral",
        minimum: 40
    },

    Strained: {
        name: "Strained",
        minimum: 20
    },

    Poor: {
        name: "Poor",
        minimum: 0
    }
};

function createPerson({
    id,
    name,
    type,
    role = null,
    teamId = null,
    nationality = null,
    age = null,
    personality = null
}) {
    if (!id || !name || !type) {
        console.warn(
            "Person requires an id, name and type."
        );

        return null;
    }

    if (!personTypes[type]) {
        console.warn(
            `Unknown person type: ${type}`
        );

        return null;
    }

    return {
        id,

        name,

        type,

        role,

        teamId,

        nationality,

        age,

        personality,

        relationship: {
            value: 50,
            level: "Neutral",
            history: []
        },

        status: "Active",

        createdAt:
            game.career.currentDate
    };
}

function addPerson(person) {
    if (!person) {
        return false;
    }

    const existing =
        relationshipState.people.find(
            item =>
                item.id === person.id
        );

    if (existing) {
        console.warn(
            `Person already exists: ${person.id}`
        );

        return false;
    }

    relationshipState.people.push(
        person
    );

    return true;
}

function getPersonById(personId) {
    return relationshipState.people.find(
        person =>
            person.id === personId
    ) || null;
}

function getPeopleByType(type) {
    return relationshipState.people.filter(
        person =>
            person.type === type
    );
}

function getActivePeople() {
    return relationshipState.people.filter(
        person =>
            person.status === "Active"
    );
}

function selectPerson(personId) {
    const person =
        getPersonById(personId);

    if (!person) {
        return false;
    }

    relationshipState.selectedPersonId =
        personId;

    return true;
}

function getSelectedPerson() {
    if (
        !relationshipState.selectedPersonId
    ) {
        return null;
    }

    return getPersonById(
        relationshipState.selectedPersonId
    );
}

function clearSelectedPerson() {
    relationshipState.selectedPersonId =
        null;
}

function clampRelationshipValue(
    value
) {
    return clamp(
        value,
        0,
        100
    );
}

function getRelationshipLevel(value) {
    if (value >= 75) {
        return "Strong";
    }

    if (value >= 55) {
        return "Good";
    }

    if (value >= 40) {
        return "Neutral";
    }

    if (value >= 20) {
        return "Strained";
    }

    return "Poor";
}

function changeRelationship(
    personId,
    amount,
    reason = ""
) {
    const person =
        getPersonById(personId);

    if (!person) {
        console.warn(
            `Person not found: ${personId}`
        );

        return false;
    }

    const previousValue =
        person.relationship.value;

    const newValue =
        clampRelationshipValue(
            previousValue +
            Number(amount)
        );

    person.relationship.value =
        newValue;

    person.relationship.level =
        getRelationshipLevel(
            newValue
        );

    person.relationship.history.push({
        date:
            game.career.currentDate,

        change:
            newValue -
            previousValue,

        previousValue,

        newValue,

        reason
    });

    return true;
}

function improveRelationship(
    personId,
    amount,
    reason = ""
) {
    return changeRelationship(
        personId,
        Math.abs(amount),
        reason
    );
}

function damageRelationship(
    personId,
    amount,
    reason = ""
) {
    return changeRelationship(
        personId,
        -Math.abs(amount),
        reason
    );
}

function getRelationshipValue(
    personId
) {
    const person =
        getPersonById(personId);

    if (!person) {
        return null;
    }

    return person.relationship.value;
}

function getRelationshipLevelForPerson(
    personId
) {
    const person =
        getPersonById(personId);

    if (!person) {
        return null;
    }

    return person.relationship.level;
}

function addRelationshipMemory(
    personId,
    memory
) {
    const person =
        getPersonById(personId);

    if (!person || !memory) {
        return false;
    }

    person.relationship.history.push({
        date:
            game.career.currentDate,

        change: 0,

        previousValue:
            person.relationship.value,

        newValue:
            person.relationship.value,

        reason: memory
    });

    return true;
}

function getRelationshipHistory(
    personId
) {
    const person =
        getPersonById(personId);

    if (!person) {
        return [];
    }

    return person.relationship.history;
}

function getStrongRelationships() {
    return relationshipState.people.filter(
        person =>
            person.relationship.level ===
            "Strong"
    );
}

function getPoorRelationships() {
    return relationshipState.people.filter(
        person =>
            person.relationship.level ===
            "Poor"
    );
}

function getImportantPeople() {
    return relationshipState.people.filter(
        person =>
            [
                "Sports Director",
                "Captain",
                "Agent",
                "Coach",
                "Medical"
            ].includes(person.type)
    );
}

function createInitialTeamPeople() {
    if (!game.team) {
        return;
    }

    relationshipState.people = [];
    relationshipState.selectedPersonId =
        null;

    /*
        Temporary staff identities.

        Real staff and riders will later come
        from the team/world database.
    */

    addPerson(
        createPerson({
            id: "sports-director-placeholder",
            name: "Sports Director",
            type: "Sports Director",
            role: "Sports Director",
            teamId: game.team.id,
            personality: "Tactical"
        })
    );

    addPerson(
        createPerson({
            id: "coach-placeholder",
            name: "Head Coach",
            type: "Coach",
            role: "Coach",
            teamId: game.team.id,
            personality: "Development-focused"
        })
    );

    addPerson(
        createPerson({
            id: "performance-placeholder",
            name: "Performance Staff",
            type: "Medical",
            role: "Medical/Performance",
            teamId: game.team.id,
            personality: "Analytical"
        })
    );
}

function getRelationshipSummary(
    person
) {
    if (!person) {
        return null;
    }

    return {
        id: person.id,

        name: person.name,

        type: person.type,

        role: person.role,

        personality:
            person.personality,

        value:
            person.relationship.value,

        level:
            person.relationship.level,

        status:
            person.status
    };
}

function getAllRelationshipSummaries() {
    return relationshipState.people.map(
        person =>
            getRelationshipSummary(
                person
            )
    );
}

function getRelationshipState() {
    return {
        people:
            relationshipState.people,

        selectedPersonId:
            relationshipState.selectedPersonId,

        strong:
            getStrongRelationships()
                .length,

        poor:
            getPoorRelationships()
                .length
    };
}

function resetRelationships() {
    relationshipState.people = [];
    relationshipState.selectedPersonId =
        null;
}

console.log(
    "Relationships & People system loaded."
);
// ============================================
// CYCLING CAREER
// script.js — Del 12
// Team Structure & Roles
// ============================================

const teamRoleDefinitions = {
    "Development rider": {
        name: "Development Rider",
        level: 1,
        description:
            "A young rider focused primarily on development and gaining experience."
    },

    Domestique: {
        name: "Domestique",
        level: 2,
        description:
            "A rider whose main responsibility is supporting teammates."
    },

    "Important rider": {
        name: "Important Rider",
        level: 3,
        description:
            "A trusted rider who receives meaningful race opportunities."
    },

    "Secondary leader": {
        name: "Secondary Leader",
        level: 4,
        description:
            "A rider who can lead when the situation or race allows it."
    },

    "Co-leader": {
        name: "Co-Leader",
        level: 5,
        description:
            "One of the team's main leaders for important races."
    },

    Captain: {
        name: "Captain",
        level: 6,
        description:
            "The team's primary leader for selected objectives."
    }
};

const teamStructure = {
    hierarchy: [],
    objectives: [],
    playerRole: null,
    captainId: null,
    leadershipRivals: []
};

function getTeamRoleDefinition(role) {
    return (
        teamRoleDefinitions[role] ||
        null
    );
}

function getTeamRoleLevel(role) {
    return (
        teamRoleDefinitions[role]?.level ||
        0
    );
}

function getTeamRoleDescription(role) {
    return (
        teamRoleDefinitions[role]?.description ||
        ""
    );
}

function setPlayerTeamRole(role) {
    if (
        !teamRoleDefinitions[role]
    ) {
        console.warn(
            `Unknown team role: ${role}`
        );

        return false;
    }

    teamStructure.playerRole =
        role;

    if (game.player) {
        game.player.teamRole =
            role;
    }

    if (game.team) {
        game.team.playerRole =
            role;
    }

    if (game.contract) {
        game.contract.role =
            role;
    }

    return true;
}

function getPlayerTeamRole() {
    return (
        teamStructure.playerRole ||
        game.player?.teamRole ||
        game.team?.playerRole ||
        game.contract?.role ||
        null
    );
}

function getAvailableTeamRoles() {
    return Object.entries(
        teamRoleDefinitions
    ).map(
        ([id, role]) => ({
            id,
            name: role.name,
            level: role.level,
            description:
                role.description
        })
    );
}

function createTeamMember({
    id,
    riderId = null,
    name,
    role,
    age = null,
    nationality = null,
    teamId = null,
    stats = {},
    status = "Active"
}) {
    if (
        !id ||
        !name ||
        !role
    ) {
        console.warn(
            "Team member requires id, name and role."
        );

        return null;
    }

    return {
        id,

        riderId,

        name,

        role,

        roleLevel:
            getTeamRoleLevel(role),

        age,

        nationality,

        teamId,

        stats,

        status,

        leadership: {
            captain:
                role === "Captain",

            leader:
                [
                    "Captain",
                    "Co-leader",
                    "Secondary leader"
                ].includes(role)
        }
    };
}

function addTeamMember(member) {
    if (!member) {
        return false;
    }

    const existing =
        teamStructure.hierarchy.find(
            item =>
                item.id === member.id
        );

    if (existing) {
        return false;
    }

    teamStructure.hierarchy.push(
        member
    );

    sortTeamHierarchy();

    return true;
}

function removeTeamMember(memberId) {
    const index =
        teamStructure.hierarchy.findIndex(
            member =>
                member.id === memberId
        );

    if (index === -1) {
        return false;
    }

    const removed =
        teamStructure.hierarchy.splice(
            index,
            1
        )[0];

    if (
        teamStructure.captainId ===
        memberId
    ) {
        teamStructure.captainId =
            null;
    }

    return removed;
}

function sortTeamHierarchy() {
    teamStructure.hierarchy.sort(
        (a, b) => {
            if (
                b.roleLevel !==
                a.roleLevel
            ) {
                return (
                    b.roleLevel -
                    a.roleLevel
                );
            }

            return (
                a.name.localeCompare(
                    b.name
                )
            );
        }
    );
}

function getTeamMembers() {
    return teamStructure.hierarchy;
}

function getTeamMemberById(memberId) {
    return teamStructure.hierarchy.find(
        member =>
            member.id === memberId
    ) || null;
}

function getTeamMembersByRole(role) {
    return teamStructure.hierarchy.filter(
        member =>
            member.role === role
    );
}

function getTeamLeaders() {
    return teamStructure.hierarchy.filter(
        member =>
            [
                "Captain",
                "Co-leader",
                "Secondary leader"
            ].includes(member.role)
    );
}

function getTeamCaptain() {
    if (
        teamStructure.captainId
    ) {
        return getTeamMemberById(
            teamStructure.captainId
        );
    }

    return (
        getTeamMembersByRole(
            "Captain"
        )[0] ||
        null
    );
}

function setTeamCaptain(memberId) {
    const member =
        getTeamMemberById(memberId);

    if (!member) {
        return false;
    }

    teamStructure.hierarchy.forEach(
        item => {
            if (
                item.id !== memberId &&
                item.role === "Captain"
            ) {
                item.role =
                    "Co-leader";

                item.roleLevel =
                    getTeamRoleLevel(
                        "Co-leader"
                    );

                item.leadership.captain =
                    false;
            }
        }
    );

    member.role = "Captain";

    member.roleLevel =
        getTeamRoleLevel(
            "Captain"
        );

    member.leadership.captain =
        true;

    member.leadership.leader =
        true;

    teamStructure.captainId =
        memberId;

    sortTeamHierarchy();

    return true;
}

function addLeadershipRival(
    memberId
) {
    const member =
        getTeamMemberById(memberId);

    if (!member) {
        return false;
    }

    if (
        !teamStructure.leadershipRivals
            .includes(memberId)
    ) {
        teamStructure.leadershipRivals
            .push(memberId);
    }

    return true;
}

function removeLeadershipRival(
    memberId
) {
    const index =
        teamStructure.leadershipRivals
            .indexOf(memberId);

    if (index === -1) {
        return false;
    }

    teamStructure.leadershipRivals
        .splice(index, 1);

    return true;
}

function getLeadershipRivals() {
    return teamStructure.hierarchy
        .filter(
            member =>
                teamStructure
                    .leadershipRivals
                    .includes(member.id)
        );
}

function createTeamObjective({
    id,
    name,
    priority = "Medium",
    raceId = null,
    description = ""
}) {
    if (!id || !name) {
        return null;
    }

    return {
        id,

        name,

        priority,

        raceId,

        description,

        status: "Active",

        createdAt:
            game.career.currentDate
    };
}

function addTeamObjective(
    objective
) {
    if (!objective) {
        return false;
    }

    const existing =
        teamStructure.objectives.find(
            item =>
                item.id ===
                objective.id
        );

    if (existing) {
        return false;
    }

    teamStructure.objectives.push(
        objective
    );

    return true;
}

function getTeamObjectives() {
    return teamStructure.objectives
        .filter(
            objective =>
                objective.status ===
                "Active"
        );
}

function completeTeamObjective(
    objectiveId
) {
    const objective =
        teamStructure.objectives.find(
            item =>
                item.id ===
                objectiveId
        );

    if (!objective) {
        return false;
    }

    objective.status =
        "Completed";

    return true;
}

function getPlayerHierarchyPosition() {
    const role =
        getPlayerTeamRole();

    if (!role) {
        return null;
    }

    const roleLevel =
        getTeamRoleLevel(role);

    const strongerRoles =
        teamStructure.hierarchy.filter(
            member =>
                member.roleLevel >
                roleLevel
        );

    return {
        role,

        roleLevel,

        strongerRoles:
            strongerRoles.length,

        isLeader:
            roleLevel >= 4,

        isCaptain:
            role === "Captain"
    };
}

function canPlayerLeadRace() {
    const role =
        getPlayerTeamRole();

    return [
        "Captain",
        "Co-leader",
        "Secondary leader"
    ].includes(role);
}

function canPlayerRequestLeadership(
    raceImportance = "Medium"
) {
    const role =
        getPlayerTeamRole();

    if (role === "Captain") {
        return true;
    }

    if (
        role === "Co-leader" &&
        [
            "Medium",
            "High"
        ].includes(
            raceImportance
        )
    ) {
        return true;
    }

    if (
        role === "Secondary leader" &&
        raceImportance === "Low"
    ) {
        return true;
    }

    return false;
}

function getTeamStructureSummary() {
    return {
        playerRole:
            getPlayerTeamRole(),

        captain:
            getTeamCaptain(),

        leaders:
            getTeamLeaders(),

        members:
            getTeamMembers(),

        leadershipRivals:
            getLeadershipRivals(),

        objectives:
            getTeamObjectives(),

        playerHierarchy:
            getPlayerHierarchyPosition()
    };
}

function initializeTeamStructure() {
    teamStructure.hierarchy = [];
    teamStructure.objectives = [];
    teamStructure.playerRole =
        null;
    teamStructure.captainId =
        null;
    teamStructure.leadershipRivals = [];

    if (!game.team) {
        return;
    }

    /*
        Temporary team members.
        Real riders will later come from
        data/teams.js.
    */

    addTeamMember(
        createTeamMember({
            id: "placeholder-captain",
            name: "Team Captain",
            role: "Captain",
            teamId: game.team.id
        })
    );

    addTeamMember(
        createTeamMember({
            id: "placeholder-coleader",
            name: "Team Co-Leader",
            role: "Co-leader",
            teamId: game.team.id
        })
    );

    addTeamMember(
        createTeamMember({
            id: "placeholder-domestique",
            name: "Team Domestique",
            role: "Domestique",
            teamId: game.team.id
        })
    );

    setTeamCaptain(
        "placeholder-captain"
    );

    if (game.player) {
        setPlayerTeamRole(
            game.contract?.role ||
            game.team?.playerRole ||
            "Development rider"
        );
    }
}

function resetTeamStructure() {
    teamStructure.hierarchy = [];
    teamStructure.objectives = [];
    teamStructure.playerRole =
        null;
    teamStructure.captainId =
        null;
    teamStructure.leadershipRivals = [];
}

console.log(
    "Team Structure & Roles system loaded."
);
// ============================================
// CYCLING CAREER
// script.js — Del 13
// Training & Development System
// ============================================

const trainingState = {
    activePlan: null,
    history: [],
    lastCompletedBlock: null
};

const trainingIntensities = {
    Light: {
        name: "Light",
        load: 0.65,
        developmentMultiplier: 0.75,
        fatigueMultiplier: 0.45,
        formEffect: 2
    },

    Normal: {
        name: "Normal",
        load: 1,
        developmentMultiplier: 1,
        fatigueMultiplier: 1,
        formEffect: 0
    },

    Hard: {
        name: "Hard",
        load: 1.35,
        developmentMultiplier: 1.2,
        fatigueMultiplier: 1.5,
        formEffect: -2
    }
};

const trainingFocuses = {
    sprint: {
        name: "Sprint",
        stats: ["sprint", "acceleration"]
    },

    endurance: {
        name: "Endurance",
        stats: ["endurance", "recovery"]
    },

    flat: {
        name: "Flat",
        stats: ["flat", "endurance"]
    },

    hills: {
        name: "Hills",
        stats: ["hill", "acceleration"]
    },

    mountains: {
        name: "Mountain",
        stats: ["mediumMountain", "mountain"]
    },

    cobbles: {
        name: "Cobbles",
        stats: ["cobblestones", "technique"]
    },

    timeTrial: {
        name: "Time Trial",
        stats: ["itt", "endurance", "technique"]
    },

    positioning: {
        name: "Positioning",
        stats: ["positioning", "raceIQ"]
    },

    technique: {
        name: "Technique",
        stats: ["technique", "positioning"]
    },

    raceIQ: {
        name: "Race IQ",
        stats: ["raceIQ", "mentality"]
    },

    mentality: {
        name: "Mentality",
        stats: ["mentality", "raceIQ"]
    },

    teamwork: {
        name: "Teamwork",
        stats: ["teamwork", "positioning"]
    },

    balanced: {
        name: "Balanced",
        stats: riderStatDefinitions.map(
            stat => stat.id
        )
    }
};

function getTrainingIntensity(
    intensity
) {
    return (
        trainingIntensities[
            intensity
        ] || null
    );
}

function getTrainingFocus(
    focus
) {
    return (
        trainingFocuses[
            focus
        ] || null
    );
}

function createTrainingPlan({
    focus = "balanced",
    intensity = "Normal",
    duration = 7
} = {}) {
    if (
        !trainingFocuses[focus]
    ) {
        console.warn(
            `Unknown training focus: ${focus}`
        );

        return null;
    }

    if (
        !trainingIntensities[intensity]
    ) {
        console.warn(
            `Unknown training intensity: ${intensity}`
        );

        return null;
    }

    const numericDuration =
        Number(duration);

    if (
        !Number.isFinite(
            numericDuration
        ) ||
        numericDuration < 1
    ) {
        console.warn(
            "Training duration must be at least one day."
        );

        return null;
    }

    return {
        id:
            `training-${Date.now()}`,

        focus,

        intensity,

        duration:
            Math.round(
                numericDuration
            ),

        startDate:
            game.career.currentDate,

        endDate:
            addDaysToDateString(
                game.career.currentDate,
                Math.round(
                    numericDuration
                )
            ),

        status: "Planned"
    };
}

function setTrainingPlan(plan) {
    if (!plan) {
        return false;
    }

    trainingState.activePlan =
        plan;

    return true;
}

function startTrainingPlan({
    focus = "balanced",
    intensity = "Normal",
    duration = 7
} = {}) {
    if (!game.player) {
        console.warn(
            "Cannot train without a player."
        );

        return false;
    }

    const plan =
        createTrainingPlan({
            focus,
            intensity,
            duration
        });

    if (!plan) {
        return false;
    }

    plan.status = "Active";

    setTrainingPlan(plan);

    return true;
}

function getActiveTrainingPlan() {
    return trainingState.activePlan;
}

function cancelTrainingPlan() {
    if (
        !trainingState.activePlan
    ) {
        return false;
    }

    trainingState.activePlan.status =
        "Cancelled";

    trainingState.activePlan =
        null;

    return true;
}

function getDevelopmentSpeedMultiplier() {
    if (!game.player) {
        return 1;
    }

    const speeds = {
        Slow: 0.65,
        "Below Average": 0.82,
        Average: 1,
        "Above Average": 1.15,
        Fast: 1.3
    };

    return (
        speeds[
            game.player.development
                .speed
        ] || 1
    );
}

function getDevelopmentProfileMultiplier() {
    if (!game.player) {
        return 1;
    }

    const profile =
        game.player.development
            .profile;

    if (
        profile ===
        "Early Developer"
    ) {
        if (
            game.player.age <= 20
        ) {
            return 1.12;
        }

        return 0.92;
    }

    if (
        profile ===
        "Late Developer"
    ) {
        if (
            game.player.age <= 20
        ) {
            return 0.88;
        }

        return 1.12;
    }

    return 1;
}

function getPotentialRoom(
    statId
) {
    if (!game.player) {
        return 0;
    }

    const current =
        game.player.stats[
            statId
        ] ?? 0;

    const potential =
        game.player.potential
            ?.value ?? current;

    return Math.max(
        0,
        potential - current
    );
}

function getAgeDevelopmentMultiplier() {
    if (!game.player) {
        return 1;
    }

    const age =
        game.player.age;

    if (age <= 18) {
        return 1.15;
    }

    if (age <= 21) {
        return 1.1;
    }

    if (age <= 24) {
        return 1.05;
    }

    if (age <= 27) {
        return 1;
    }

    if (age <= 30) {
        return 0.9;
    }

    if (age <= 33) {
        return 0.75;
    }

    return 0.55;
}

function calculateStatDevelopment({
    statId,
    focus,
    intensity,
    days
}) {
    if (!game.player) {
        return 0;
    }

    const focusData =
        getTrainingFocus(
            focus
        );

    const intensityData =
        getTrainingIntensity(
            intensity
        );

    if (
        !focusData ||
        !intensityData
    ) {
        return 0;
    }

    if (
        !focusData.stats.includes(
            statId
        )
    ) {
        return 0;
    }

    const potentialRoom =
        getPotentialRoom(
            statId
        );

    if (potentialRoom <= 0) {
        return 0;
    }

    const statCount =
        focusData.stats.length;

    const focusWeight =
        1 / statCount;

    const speedMultiplier =
        getDevelopmentSpeedMultiplier();

    const profileMultiplier =
        getDevelopmentProfileMultiplier();

    const ageMultiplier =
        getAgeDevelopmentMultiplier();

    const baseGain =
        0.12 *
        days *
        focusWeight;

    const result =
        baseGain *
        intensityData.developmentMultiplier *
        speedMultiplier *
        profileMultiplier *
        ageMultiplier;

    return Math.min(
        result,
        potentialRoom
    );
}

function applyTrainingDevelopment({
    focus,
    intensity,
    duration
}) {
    if (!game.player) {
        return null;
    }

    const changes = {};

    riderStatDefinitions.forEach(
        stat => {
            const gain =
                calculateStatDevelopment({
                    statId:
                        stat.id,

                    focus,

                    intensity,

                    days:
                        duration
                });

            if (gain > 0) {
                const oldValue =
                    game.player.stats[
                        stat.id
                    ];

                const newValue =
                    Math.min(
                        game.player.potential
                            .value,
                        oldValue + gain
                    );

                game.player.stats[
                    stat.id
                ] = Number(
                    newValue.toFixed(2)
                );

                changes[
                    stat.id
                ] = {
                    before:
                        oldValue,

                    after:
                        game.player.stats[
                            stat.id
                        ],

                    gain:
                        Number(
                            (
                                newValue -
                                oldValue
                            ).toFixed(2)
                        )
                };
            }
        }
    );

    return changes;
}

function applyTrainingLoad({
    intensity,
    duration
}) {
    if (!game.player) {
        return;
    }

    const intensityData =
        getTrainingIntensity(
            intensity
        );

    if (!intensityData) {
        return;
    }

    const fatigueGain =
        duration *
        1.5 *
        intensityData
            .fatigueMultiplier;

    game.player.fatigue =
        clamp(
            game.player.fatigue +
            fatigueGain,
            0,
            100
        );

    game.player.energy =
        clamp(
            game.player.energy -
            (
                duration *
                1.2 *
                intensityData.load
            ),
            0,
            100
        );

    game.player.form =
        clamp(
            game.player.form +
            (
                intensityData.formEffect
            ),
            0,
            100
        );
}

function completeTrainingPlan() {
    const plan =
        trainingState.activePlan;

    if (!plan) {
        return null;
    }

    if (!game.player) {
        return null;
    }

    const changes =
        applyTrainingDevelopment({
            focus:
                plan.focus,

            intensity:
                plan.intensity,

            duration:
                plan.duration
        });

    applyTrainingLoad({
        intensity:
            plan.intensity,

        duration:
            plan.duration
    });

    const newLevel =
        calculateCurrentLevelAdvanced(
            game.player.stats
        );

    const previousLevel =
        game.player.development
            .currentLevel;

    game.player.development
        .currentLevel =
        newLevel;

    let trend =
        "Stable";

    if (
        newLevel >
        previousLevel
    ) {
        trend = "Improving";
    }

    if (
        newLevel <
        previousLevel
    ) {
        trend = "Declining";
    }

    game.player.development
        .recentTrend =
        trend;

    const completedBlock = {
        ...plan,

        status: "Completed",

        completedDate:
            game.career.currentDate,

        statChanges:
            changes,

        levelBefore:
            previousLevel,

        levelAfter:
            newLevel
    };

    trainingState.history.push(
        completedBlock
    );

    trainingState.lastCompletedBlock =
        completedBlock;

    trainingState.activePlan =
        null;

    return completedBlock;
}

function getTrainingOptions() {
    return {
        focuses:
            Object.entries(
                trainingFocuses
            ).map(
                ([id, focus]) => ({
                    id,
                    name: focus.name,
                    stats: focus.stats
                })
            ),

        intensities:
            Object.entries(
                trainingIntensities
            ).map(
                ([id, intensity]) => ({
                    id,
                    name: intensity.name,
                    load: intensity.load,
                    developmentMultiplier:
                        intensity
                            .developmentMultiplier,
                    fatigueMultiplier:
                        intensity
                            .fatigueMultiplier
                })
            )
    };
}

function getTrainingHistory() {
    return trainingState.history;
}

function getTrainingSummary() {
    return {
        activePlan:
            trainingState.activePlan,

        lastCompletedBlock:
            trainingState.lastCompletedBlock,

        historyCount:
            trainingState.history.length,

        currentLevel:
            game.player
                ?.development
                ?.currentLevel ??
            null,

        potential:
            game.player
                ?.potential
                ?.value ??
            null,

        developmentSpeed:
            game.player
                ?.development
                ?.speed ??
            null,

        developmentProfile:
            game.player
                ?.development
                ?.profile ??
            null
    };
}

function resetTrainingSystem() {
    trainingState.activePlan =
        null;

    trainingState.history = [];

    trainingState.lastCompletedBlock =
        null;
}

console.log(
    "Training & Development system loaded."
);