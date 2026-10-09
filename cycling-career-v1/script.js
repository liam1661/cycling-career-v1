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
    developmentTendency: "Balanced",

    generated: false,
    accepted: false
};

const validRiderAges = [16, 17, 18];



function resetRiderCreation() {
    riderCreation.name = "";
    riderCreation.country = null;
    riderCreation.age = null;

    riderCreation.profile = null;

    riderCreation.developmentTendency = "Balanced";

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
    return generateRiderFromCreation();
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

    const tendency =
        tendencyModifiers[
            riderCreation.developmentTendency
        ] || tendencyModifiers.Balanced;

    return tendency[group] || 0;
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
    "Balanced";

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
// ============================================
// CYCLING CAREER
// script.js — Del 14
// Recovery, Form & Fatigue System
// ============================================

const recoveryState = {
    activeMode: "Normal",
    history: [],
    lastRecovery: null
};

const recoveryModes = {
    Full: {
        name: "Full Recovery",
        description:
            "Focus completely on recovery and return as fresh as possible.",
        energyRecovery: 1.35,
        fatigueReduction: 1.45,
        formEffect: 0.35,
        trainingMultiplier: 0
    },

    Normal: {
        name: "Normal",
        description:
            "Balance recovery with normal preparation and development.",
        energyRecovery: 1,
        fatigueReduction: 1,
        formEffect: 0.15,
        trainingMultiplier: 0.5
    },

    Training: {
        name: "Training",
        description:
            "Continue training while accepting slower recovery.",
        energyRecovery: 0.65,
        fatigueReduction: 0.55,
        formEffect: -0.05,
        trainingMultiplier: 1
    }
};

const fatigueLevels = {
    Fresh: {
        minimum: 0,
        maximum: 19,
        description:
            "The rider is fresh and recovering well."
    },

    Normal: {
        minimum: 20,
        maximum: 39,
        description:
            "Normal accumulated fatigue."
    },

    Tired: {
        minimum: 40,
        maximum: 59,
        description:
            "Fatigue is becoming noticeable."
    },

    VeryTired: {
        minimum: 60,
        maximum: 79,
        description:
            "High fatigue may begin to affect performance."
    },

    Exhausted: {
        minimum: 80,
        maximum: 100,
        description:
            "Severe fatigue. Recovery should become a priority."
    }
};

const energyLevels = {
    High: {
        minimum: 75,
        maximum: 100,
        description:
            "The rider has plenty of available energy."
    },

    Good: {
        minimum: 50,
        maximum: 74,
        description:
            "The rider has a solid energy reserve."
    },

    Limited: {
        minimum: 30,
        maximum: 49,
        description:
            "Energy is becoming limited."
    },

    Low: {
        minimum: 10,
        maximum: 29,
        description:
            "The rider is running low on energy."
    },

    Critical: {
        minimum: 0,
        maximum: 9,
        description:
            "Very little immediate energy remains."
    }
};

const formLevels = {
    Excellent: {
        minimum: 90,
        maximum: 100
    },

    VeryGood: {
        minimum: 80,
        maximum: 89
    },

    Good: {
        minimum: 70,
        maximum: 79
    },

    Average: {
        minimum: 55,
        maximum: 69
    },

    Poor: {
        minimum: 40,
        maximum: 54
    },

    VeryPoor: {
        minimum: 0,
        maximum: 39
    }
};


// ============================================
// RECOVERY MODE
// ============================================

function getRecoveryMode(mode) {
    return (
        recoveryModes[mode] ||
        null
    );
}

function getRecoveryModes() {
    return Object.entries(
        recoveryModes
    ).map(
        ([id, mode]) => ({
            id,
            name: mode.name,
            description:
                mode.description
        })
    );
}

function setRecoveryMode(mode) {
    if (!recoveryModes[mode]) {
        console.warn(
            `Unknown recovery mode: ${mode}`
        );

        return false;
    }

    recoveryState.activeMode =
        mode;

    return true;
}

function getActiveRecoveryMode() {
    return recoveryState.activeMode;
}


// ============================================
// LEVEL HELPERS
// ============================================

function getFatigueLevel(value) {
    const fatigue =
        clamp(
            Number(value) || 0,
            0,
            100
        );

    if (fatigue >= 80) {
        return "Exhausted";
    }

    if (fatigue >= 60) {
        return "VeryTired";
    }

    if (fatigue >= 40) {
        return "Tired";
    }

    if (fatigue >= 20) {
        return "Normal";
    }

    return "Fresh";
}

function getEnergyLevel(value) {
    const energy =
        clamp(
            Number(value) || 0,
            0,
            100
        );

    if (energy >= 75) {
        return "High";
    }

    if (energy >= 50) {
        return "Good";
    }

    if (energy >= 30) {
        return "Limited";
    }

    if (energy >= 10) {
        return "Low";
    }

    return "Critical";
}

function getFormLevel(value) {
    const form =
        clamp(
            Number(value) || 0,
            0,
            100
        );

    if (form >= 90) {
        return "Excellent";
    }

    if (form >= 80) {
        return "VeryGood";
    }

    if (form >= 70) {
        return "Good";
    }

    if (form >= 55) {
        return "Average";
    }

    if (form >= 40) {
        return "Poor";
    }

    return "VeryPoor";
}

function getFatigueDescription(value) {
    const level =
        getFatigueLevel(value);

    return (
        fatigueLevels[level]
            ?.description ||
        ""
    );
}

function getEnergyDescription(value) {
    const level =
        getEnergyLevel(value);

    return (
        energyLevels[level]
            ?.description ||
        ""
    );
}


// ============================================
// DAILY RECOVERY CALCULATIONS
// ============================================

function calculateDailyEnergyRecovery() {
    if (!game.player) {
        return 0;
    }

    const mode =
        getRecoveryMode(
            recoveryState.activeMode
        );

    if (!mode) {
        return 0;
    }

    const fatiguePenalty =
        1 -
        (
            game.player.fatigue /
            100
        ) * 0.25;

    const baseRecovery =
        8 *
        mode.energyRecovery;

    return Math.max(
        0,
        baseRecovery *
        fatiguePenalty
    );
}

function calculateDailyFatigueReduction() {
    if (!game.player) {
        return 0;
    }

    const mode =
        getRecoveryMode(
            recoveryState.activeMode
        );

    if (!mode) {
        return 0;
    }

    const baseReduction =
        5 *
        mode.fatigueReduction;

    /*
        Higher fatigue allows slightly faster
        recovery, while low fatigue naturally
        slows down.
    */

    const fatigueRecoveryFactor =
        game.player.fatigue >= 60
            ? 1.15
            : game.player.fatigue >= 30
                ? 1
                : 0.8;

    return Math.max(
        0,
        baseReduction *
        fatigueRecoveryFactor
    );
}

function calculateDailyFormChange() {
    if (!game.player) {
        return 0;
    }

    const mode =
        getRecoveryMode(
            recoveryState.activeMode
        );

    if (!mode) {
        return 0;
    }

    let change =
        mode.formEffect;

    /*
        Very high fatigue can gradually reduce
        form, while good recovery can stabilize it.
    */

    if (
        game.player.fatigue >= 70
    ) {
        change -= 0.25;
    } else if (
        game.player.fatigue <= 20 &&
        game.player.energy >= 80
    ) {
        change += 0.15;
    }

    return change;
}


// ============================================
// APPLY DAILY RECOVERY
// ============================================

function applyDailyRecovery() {
    if (!game.player) {
        return null;
    }

    const before = {
        energy:
            game.player.energy,

        fatigue:
            game.player.fatigue,

        form:
            game.player.form
    };

    const energyRecovery =
        calculateDailyEnergyRecovery();

    const fatigueReduction =
        calculateDailyFatigueReduction();

    const formChange =
        calculateDailyFormChange();

    game.player.energy =
        clamp(
            game.player.energy +
            energyRecovery,
            0,
            100
        );

    game.player.fatigue =
        clamp(
            game.player.fatigue -
            fatigueReduction,
            0,
            100
        );

    game.player.form =
        clamp(
            game.player.form +
            formChange,
            0,
            100
        );

    const recoveryResult = {
        date:
            game.career.currentDate,

        mode:
            recoveryState.activeMode,

        energy: {
            before:
                before.energy,

            after:
                Number(
                    game.player.energy.toFixed(2)
                ),

            change:
                Number(
                    (
                        game.player.energy -
                        before.energy
                    ).toFixed(2)
                )
        },

        fatigue: {
            before:
                before.fatigue,

            after:
                Number(
                    game.player.fatigue.toFixed(2)
                ),

            change:
                Number(
                    (
                        game.player.fatigue -
                        before.fatigue
                    ).toFixed(2)
                )
        },

        form: {
            before:
                before.form,

            after:
                Number(
                    game.player.form.toFixed(2)
                ),

            change:
                Number(
                    (
                        game.player.form -
                        before.form
                    ).toFixed(2)
                )
        }
    };

    recoveryState.history.push(
        recoveryResult
    );

    recoveryState.lastRecovery =
        recoveryResult;

    return recoveryResult;
}


// ============================================
// MULTI-DAY RECOVERY
// ============================================

function simulateRecoveryDays(
    days
) {
    if (!game.player) {
        return null;
    }

    const numericDays =
        Number(days);

    if (
        !Number.isFinite(
            numericDays
        ) ||
        numericDays < 1
    ) {
        console.warn(
            "Recovery days must be at least one."
        );

        return null;
    }

    const results = [];

    for (
        let day = 0;
        day < Math.floor(numericDays);
        day++
    ) {
        /*
            Recovery is applied before the date
            advances so every simulated day gets
            exactly one recovery cycle.
        */

        results.push(
            applyDailyRecovery()
        );

        if (
            day <
            Math.floor(numericDays) - 1
        ) {
            advanceDays(1);
        }
    }

    return results;
}


// ============================================
// FATIGUE MANAGEMENT
// ============================================

function addFatigue(
    amount,
    reason = ""
) {
    if (!game.player) {
        return false;
    }

    const numericAmount =
        Number(amount);

    if (
        !Number.isFinite(
            numericAmount
        )
    ) {
        return false;
    }

    const before =
        game.player.fatigue;

    game.player.fatigue =
        clamp(
            before +
            numericAmount,
            0,
            100
        );

    if (
        reason
    ) {
        game.player.lastFatigueReason =
            reason;
    }

    return true;
}

function reduceFatigue(
    amount,
    reason = ""
) {
    if (!game.player) {
        return false;
    }

    const numericAmount =
        Number(amount);

    if (
        !Number.isFinite(
            numericAmount
        )
    ) {
        return false;
    }

    const before =
        game.player.fatigue;

    game.player.fatigue =
        clamp(
            before -
            Math.abs(numericAmount),
            0,
            100
        );

    if (
        reason
    ) {
        game.player.lastRecoveryReason =
            reason;
    }

    return true;
}

function getCurrentFatigue() {
    return game.player
        ? game.player.fatigue
        : null;
}

function isHighlyFatigued() {
    return (
        !!game.player &&
        game.player.fatigue >= 60
    );
}

function isExhausted() {
    return (
        !!game.player &&
        game.player.fatigue >= 80
    );
}


// ============================================
// ENERGY MANAGEMENT
// ============================================

function addEnergy(
    amount,
    reason = ""
) {
    if (!game.player) {
        return false;
    }

    const numericAmount =
        Number(amount);

    if (
        !Number.isFinite(
            numericAmount
        )
    ) {
        return false;
    }

    game.player.energy =
        clamp(
            game.player.energy +
            numericAmount,
            0,
            100
        );

    if (reason) {
        game.player.lastEnergyReason =
            reason;
    }

    return true;
}

function consumeEnergy(
    amount,
    reason = ""
) {
    if (!game.player) {
        return false;
    }

    const numericAmount =
        Number(amount);

    if (
        !Number.isFinite(
            numericAmount
        )
    ) {
        return false;
    }

    game.player.energy =
        clamp(
            game.player.energy -
            Math.abs(numericAmount),
            0,
            100
        );

    if (reason) {
        game.player.lastEnergyReason =
            reason;
    }

    return true;
}

function getCurrentEnergy() {
    return game.player
        ? game.player.energy
        : null;
}

function isLowEnergy() {
    return (
        !!game.player &&
        game.player.energy < 30
    );
}


// ============================================
// FORM MANAGEMENT
// ============================================

function changeForm(
    amount,
    reason = ""
) {
    if (!game.player) {
        return false;
    }

    const numericAmount =
        Number(amount);

    if (
        !Number.isFinite(
            numericAmount
        )
    ) {
        return false;
    }

    const before =
        game.player.form;

    game.player.form =
        clamp(
            before +
            numericAmount,
            0,
            100
        );

    if (reason) {
        game.player.lastFormReason =
            reason;
    }

    return true;
}

function getCurrentForm() {
    return game.player
        ? game.player.form
        : null;
}

function isInGoodForm() {
    return (
        !!game.player &&
        game.player.form >= 70
    );
}

function isInPeakForm() {
    return (
        !!game.player &&
        game.player.form >= 90
    );
}


// ============================================
// RECOVERY STATUS
// ============================================

function getRecoveryStatus() {
    if (!game.player) {
        return null;
    }

    return {
        mode:
            recoveryState.activeMode,

        modeName:
            recoveryModes[
                recoveryState.activeMode
            ]?.name || "",

        energy:
            Number(
                game.player.energy.toFixed(2)
            ),

        energyLevel:
            getEnergyLevel(
                game.player.energy
            ),

        fatigue:
            Number(
                game.player.fatigue.toFixed(2)
            ),

        fatigueLevel:
            getFatigueLevel(
                game.player.fatigue
            ),

        form:
            Number(
                game.player.form.toFixed(2)
            ),

        formLevel:
            getFormLevel(
                game.player.form
            ),

        highlyFatigued:
            isHighlyFatigued(),

        exhausted:
            isExhausted(),

        lowEnergy:
            isLowEnergy(),

        goodForm:
            isInGoodForm(),

        peakForm:
            isInPeakForm()
    };
}


// ============================================
// RECOVERY HISTORY
// ============================================

function getRecoveryHistory() {
    return recoveryState.history;
}

function getLastRecovery() {
    return recoveryState.lastRecovery;
}

function clearRecoveryHistory() {
    recoveryState.history = [];
    recoveryState.lastRecovery = null;
}


// ============================================
// FULL PHYSICAL STATUS
// ============================================

function getPlayerPhysicalStatus() {
    if (!game.player) {
        return null;
    }

    return {
        energy: {
            value:
                game.player.energy,

            level:
                getEnergyLevel(
                    game.player.energy
                ),

            description:
                getEnergyDescription(
                    game.player.energy
                )
        },

        fatigue: {
            value:
                game.player.fatigue,

            level:
                getFatigueLevel(
                    game.player.fatigue
                ),

            description:
                getFatigueDescription(
                    game.player.fatigue
                )
        },

        form: {
            value:
                game.player.form,

            level:
                getFormLevel(
                    game.player.form
                )
        },

        recoveryMode:
            recoveryState.activeMode
    };
}


// ============================================
// RESET
// ============================================

function resetRecoverySystem() {
    recoveryState.activeMode =
        "Normal";

    recoveryState.history = [];

    recoveryState.lastRecovery =
        null;
}

console.log(
    "Recovery, Form & Fatigue system loaded."
);
// ============================================
// CYCLING CAREER
// script.js — Del 15
// Race Preparation & Race Readiness
// ============================================

const racePreparationState = {
    activePreparation: null,
    history: [],
    lastPreparation: null
};

const racePreparationModes = {
    "Peak": {
        name: "Peak for Race",
        description:
            "Prioritize freshness and form for the target race.",
        recoveryMultiplier: 1.2,
        formMultiplier: 1.15,
        fatigueReductionMultiplier: 1.2,
        trainingLoadMultiplier: 0.5
    },

    "Balanced": {
        name: "Balanced Preparation",
        description:
            "Balance training, recovery and race readiness.",
        recoveryMultiplier: 1,
        formMultiplier: 1,
        fatigueReductionMultiplier: 1,
        trainingLoadMultiplier: 0.8
    },

    "Development": {
        name: "Development Focus",
        description:
            "Continue development even if race freshness is lower.",
        recoveryMultiplier: 0.8,
        formMultiplier: 0.85,
        fatigueReductionMultiplier: 0.75,
        trainingLoadMultiplier: 1.15
    }
};


// ============================================
// PREPARATION CREATION
// ============================================

function createRacePreparation({
    raceId,
    raceName,
    targetDate,
    mode = "Balanced"
} = {}) {
    if (!raceId || !raceName || !targetDate) {
        console.warn(
            "Race preparation requires a race, name and target date."
        );

        return null;
    }

    if (!racePreparationModes[mode]) {
        console.warn(
            `Unknown race preparation mode: ${mode}`
        );

        return null;
    }

    if (
        isDateBefore(
            targetDate,
            game.career.currentDate
        )
    ) {
        console.warn(
            "Race target date cannot be before the current career date."
        );

        return null;
    }

    const daysUntil =
        getDaysBetween(
            game.career.currentDate,
            targetDate
        );

    return {
        id:
            `race-prep-${raceId}-${Date.now()}`,

        raceId,

        raceName,

        targetDate,

        mode,

        daysUntil,

        status: "Planned",

        createdDate:
            game.career.currentDate
    };
}

function setRacePreparation(
    preparation
) {
    if (!preparation) {
        return false;
    }

    racePreparationState.activePreparation =
        preparation;

    return true;
}

function startRacePreparation(
    options = {}
) {
    const preparation =
        createRacePreparation(
            options
        );

    if (!preparation) {
        return false;
    }

    preparation.status =
        "Active";

    setRacePreparation(
        preparation
    );

    return true;
}

function cancelRacePreparation() {
    if (
        !racePreparationState.activePreparation
    ) {
        return false;
    }

    racePreparationState
        .activePreparation
        .status =
        "Cancelled";

    racePreparationState
        .activePreparation =
        null;

    return true;
}

function getActiveRacePreparation() {
    return (
        racePreparationState
            .activePreparation ||
        null
    );
}


// ============================================
// PREPARATION MODES
// ============================================

function getRacePreparationMode(
    mode
) {
    return (
        racePreparationModes[mode] ||
        null
    );
}

function getRacePreparationModes() {
    return Object.entries(
        racePreparationModes
    ).map(
        ([id, mode]) => ({
            id,
            name: mode.name,
            description:
                mode.description
        })
    );
}


// ============================================
// READINESS COMPONENTS
// ============================================

function calculateFreshnessScore() {
    if (!game.player) {
        return 0;
    }

    /*
        Energy represents immediate availability.
        Fatigue represents accumulated physical load.
    */

    const energyScore =
        game.player.energy;

    const fatigueScore =
        100 -
        game.player.fatigue;

    return Math.round(
        (
            energyScore * 0.55 +
            fatigueScore * 0.45
        )
    );
}

function calculateFormScore() {
    if (!game.player) {
        return 0;
    }

    return clamp(
        game.player.form,
        0,
        100
    );
}

function calculateExperienceScore() {
    if (!game.player) {
        return 0;
    }

    /*
        Experience is deliberately a smaller part
        of race readiness than physical condition.
    */

    const experience =
        Number(
            game.player.experience
        ) || 0;

    return clamp(
        50 +
        experience * 0.1,
        50,
        100
    );
}

function calculateMentalReadiness() {
    if (!game.player) {
        return 0;
    }

    const mentality =
        game.player.stats
            ?.mentality ?? 0;

    const raceIQ =
        game.player.stats
            ?.raceIQ ?? 0;

    return Math.round(
        (
            mentality +
            raceIQ
        ) / 2
    );
}


// ============================================
// RACE READINESS
// ============================================

function calculateRaceReadiness() {
    if (!game.player) {
        return null;
    }

    const freshness =
        calculateFreshnessScore();

    const form =
        calculateFormScore();

    const experience =
        calculateExperienceScore();

    const mental =
        calculateMentalReadiness();

    const readiness =
        Math.round(
            freshness * 0.4 +
            form * 0.3 +
            experience * 0.1 +
            mental * 0.2
        );

    return clamp(
        readiness,
        0,
        100
    );
}

function getRaceReadinessLevel(
    readiness
) {
    const value =
        clamp(
            Number(readiness) || 0,
            0,
            100
        );

    if (value >= 90) {
        return "Excellent";
    }

    if (value >= 80) {
        return "Very Good";
    }

    if (value >= 70) {
        return "Good";
    }

    if (value >= 55) {
        return "Average";
    }

    if (value >= 40) {
        return "Poor";
    }

    return "Very Poor";
}

function getRaceReadinessDescription(
    readiness
) {
    const level =
        getRaceReadinessLevel(
            readiness
        );

    const descriptions = {
        Excellent:
            "The rider is in excellent condition for racing.",

        "Very Good":
            "The rider is very well prepared for the race.",

        Good:
            "The rider should be able to perform well.",

        Average:
            "The rider is reasonably prepared, but not at peak condition.",

        Poor:
            "The rider may struggle to perform at their normal level.",

        "Very Poor":
            "The rider is not in good condition for a demanding race."
    };

    return (
        descriptions[level] ||
        ""
    );
}


// ============================================
// RACE-SPECIFIC READINESS
// ============================================

function getRaceStatRequirement(
    raceType
) {
    const requirements = {
        sprint: [
            "sprint",
            "acceleration",
            "positioning"
        ],

        hill: [
            "hill",
            "acceleration",
            "positioning"
        ],

        mountain: [
            "mountain",
            "endurance",
            "recovery"
        ],

        mediumMountain: [
            "mediumMountain",
            "endurance",
            "recovery"
        ],

        cobbles: [
            "cobblestones",
            "technique",
            "positioning"
        ],

        itt: [
            "itt",
            "endurance",
            "technique"
        ],

        stageRace: [
            "endurance",
            "recovery",
            "raceIQ"
        ],

        allround: [
            "endurance",
            "raceIQ",
            "positioning"
        ]
    };

    return (
        requirements[raceType] ||
        requirements.allround
    );
}

function calculateRaceProfileFit(
    raceType
) {
    if (!game.player) {
        return 0;
    }

    const requiredStats =
        getRaceStatRequirement(
            raceType
        );

    const values =
        requiredStats
            .map(
                stat =>
                    game.player.stats?.[
                        stat
                    ] ?? 0
            );

    if (!values.length) {
        return 0;
    }

    const total =
        values.reduce(
            (sum, value) =>
                sum + value,
            0
        );

    return Math.round(
        total /
        values.length
    );
}

function calculateRaceSpecificReadiness(
    raceType = "allround"
) {
    if (!game.player) {
        return null;
    }

    const generalReadiness =
        calculateRaceReadiness();

    const profileFit =
        calculateRaceProfileFit(
            raceType
        );

    return clamp(
        Math.round(
            generalReadiness * 0.7 +
            profileFit * 0.3
        ),
        0,
        100
    );
}


// ============================================
// PREPARATION EFFECTS
// ============================================

function applyRacePreparationDay() {
    if (!game.player) {
        return null;
    }

    const preparation =
        getActiveRacePreparation();

    if (!preparation) {
        return null;
    }

    const mode =
        getRacePreparationMode(
            preparation.mode
        );

    if (!mode) {
        return null;
    }

    /*
        Preparation modifies the normal recovery
        behavior without replacing the Recovery system.
    */

    const energyBefore =
        game.player.energy;

    const fatigueBefore =
        game.player.fatigue;

    const formBefore =
        game.player.form;

    const energyRecovery =
        calculateDailyEnergyRecovery() *
        mode.recoveryMultiplier;

    const fatigueReduction =
        calculateDailyFatigueReduction() *
        mode.fatigueReductionMultiplier;

    let formChange =
        calculateDailyFormChange() *
        mode.formMultiplier;

    /*
        Peak preparation receives a small bonus
        when the rider is already relatively fresh.
    */

    if (
        preparation.mode === "Peak" &&
        game.player.fatigue <= 30 &&
        game.player.energy >= 70
    ) {
        formChange += 0.1;
    }

    game.player.energy =
        clamp(
            game.player.energy +
            energyRecovery,
            0,
            100
        );

    game.player.fatigue =
        clamp(
            game.player.fatigue -
            fatigueReduction,
            0,
            100
        );

    game.player.form =
        clamp(
            game.player.form +
            formChange,
            0,
            100
        );

    return {
        date:
            game.career.currentDate,

        raceId:
            preparation.raceId,

        mode:
            preparation.mode,

        energyChange:
            Number(
                (
                    game.player.energy -
                    energyBefore
                ).toFixed(2)
            ),

        fatigueChange:
            Number(
                (
                    game.player.fatigue -
                    fatigueBefore
                ).toFixed(2)
            ),

        formChange:
            Number(
                (
                    game.player.form -
                    formBefore
                ).toFixed(2)
            )
    };
}


// ============================================
// PREPARATION PROGRESS
// ============================================

function getRacePreparationProgress() {
    const preparation =
        getActiveRacePreparation();

    if (!preparation) {
        return null;
    }

    const totalDays =
        getDaysBetween(
            preparation.createdDate,
            preparation.targetDate
        );

    const remainingDays =
        getDaysBetween(
            game.career.currentDate,
            preparation.targetDate
        );

    if (
        totalDays === null ||
        remainingDays === null
    ) {
        return null;
    }

    if (totalDays <= 0) {
        return {
            percentage: 100,
            daysRemaining: 0
        };
    }

    const elapsed =
        totalDays -
        remainingDays;

    return {
        percentage:
            clamp(
                Math.round(
                    (
                        elapsed /
                        totalDays
                    ) * 100
                ),
                0,
                100
            ),

        daysRemaining:
            Math.max(
                0,
                remainingDays
            ),

        totalDays,

        elapsedDays:
            Math.max(
                0,
                elapsed
            )
    };
}


// ============================================
// TARGET RACE APPROACH
// ============================================

function isRacePreparationReady() {
    const preparation =
        getActiveRacePreparation();

    if (!preparation) {
        return false;
    }

    return (
        !isDateBefore(
            preparation.targetDate,
            game.career.currentDate
        )
    );
}

function isRaceDay() {
    const preparation =
        getActiveRacePreparation();

    if (!preparation) {
        return false;
    }

    return isDateSameDay(
        game.career.currentDate,
        preparation.targetDate
    );
}

function completeRacePreparation() {
    const preparation =
        getActiveRacePreparation();

    if (!preparation) {
        return null;
    }

    const readiness =
        calculateRaceReadiness();

    const completed = {
        ...preparation,

        status: "Completed",

        completedDate:
            game.career.currentDate,

        finalReadiness:
            readiness,

        finalReadinessLevel:
            getRaceReadinessLevel(
                readiness
            ),

        finalCondition:
            getPlayerPhysicalStatus()
    };

    racePreparationState.history.push(
        completed
    );

    racePreparationState.lastPreparation =
        completed;

    racePreparationState.activePreparation =
        null;

    return completed;
}


// ============================================
// PREPARATION HISTORY
// ============================================

function getRacePreparationHistory() {
    return racePreparationState.history;
}

function getLastRacePreparation() {
    return racePreparationState.lastPreparation;
}


// ============================================
// FULL RACE READINESS SUMMARY
// ============================================

function getRaceReadinessSummary(
    raceType = "allround"
) {
    if (!game.player) {
        return null;
    }

    const general =
        calculateRaceReadiness();

    const raceSpecific =
        calculateRaceSpecificReadiness(
            raceType
        );

    return {
        generalReadiness:
            general,

        generalLevel:
            getRaceReadinessLevel(
                general
            ),

        generalDescription:
            getRaceReadinessDescription(
                general
            ),

        raceSpecificReadiness:
            raceSpecific,

        raceSpecificLevel:
            getRaceReadinessLevel(
                raceSpecific
            ),

        freshness:
            calculateFreshnessScore(),

        form:
            game.player.form,

        energy:
            game.player.energy,

        fatigue:
            game.player.fatigue,

        experience:
            calculateExperienceScore(),

        mentalReadiness:
            calculateMentalReadiness(),

        profileFit:
            calculateRaceProfileFit(
                raceType
            ),

        preparation:
            getActiveRacePreparation()
    };
}


// ============================================
// RESET
// ============================================

function resetRacePreparationSystem() {
    racePreparationState.activePreparation =
        null;

    racePreparationState.history =
        [];

    racePreparationState.lastPreparation =
        null;
}

console.log(
    "Race Preparation & Race Readiness system loaded."
);
// ============================================
// CYCLING CAREER
// script.js — Del 16
// Race Data & Race Structure
// ============================================

const raceState = {
    availableRaces: [],
    selectedRaceId: null,
    selectedStageId: null
};


// ============================================
// RACE TYPES
// ============================================

const raceTypes = {
    oneDay: {
        id: "oneDay",
        name: "One-Day Race",
        category: "Road"
    },

    stageRace: {
        id: "stageRace",
        name: "Stage Race",
        category: "Road"
    },

    grandTour: {
        id: "grandTour",
        name: "Grand Tour",
        category: "Grand Tour"
    },

    monument: {
        id: "monument",
        name: "Monument",
        category: "Monument"
    },

    worldsRoad: {
        id: "worldsRoad",
        name: "World Championships Road Race",
        category: "Championship"
    },

    worldsITT: {
        id: "worldsITT",
        name: "World Championships ITT",
        category: "Championship"
    },

    nationalsRoad: {
        id: "nationalsRoad",
        name: "National Championships Road Race",
        category: "Championship"
    },

    nationalsITT: {
        id: "nationalsITT",
        name: "National Championships ITT",
        category: "Championship"
    }
};


// ============================================
// RACE LEVELS
// ============================================

const raceLevels = {
    grandTour: {
        name: "Grand Tour",
        prestige: 100
    },

    monument: {
        name: "Monument",
        prestige: 95
    },

    worldTour: {
        name: "WorldTour",
        prestige: 85
    },

    proSeries: {
        name: "ProSeries",
        prestige: 65
    },

    continental: {
        name: "Continental",
        prestige: 40
    },

    amateur: {
        name: "Amateur",
        prestige: 15
    }
};


// ============================================
// TERRAIN TYPES
// ============================================

const terrainTypes = {
    flat: {
        id: "flat",
        name: "Flat"
    },

    rolling: {
        id: "rolling",
        name: "Rolling"
    },

    hills: {
        id: "hills",
        name: "Hilly"
    },

    mediumMountain: {
        id: "mediumMountain",
        name: "Medium Mountain"
    },

    mountain: {
        id: "mountain",
        name: "Mountain"
    },

    cobbles: {
        id: "cobbles",
        name: "Cobblestones"
    },

    gravel: {
        id: "gravel",
        name: "Gravel"
    },

    mixed: {
        id: "mixed",
        name: "Mixed"
    },

    itt: {
        id: "itt",
        name: "Individual Time Trial"
    }
};


// ============================================
// FINISH TYPES
// ============================================

const finishTypes = {
    sprint: {
        id: "sprint",
        name: "Mass Sprint"
    },

    uphillSprint: {
        id: "uphillSprint",
        name: "Uphill Sprint"
    },

    reducedSprint: {
        id: "reducedSprint",
        name: "Reduced Sprint"
    },

    punchy: {
        id: "punchy",
        name: "Punchy Finish"
    },

    mountain: {
        id: "mountain",
        name: "Mountain Finish"
    },

    summit: {
        id: "summit",
        name: "Summit Finish"
    },

    descent: {
        id: "descent",
        name: "Descent Finish"
    },

    flatSolo: {
        id: "flatSolo",
        name: "Flat Solo Finish"
    },

    itt: {
        id: "itt",
        name: "Time Trial Finish"
    }
};


// ============================================
// WEATHER TYPES
// ============================================

const weatherTypes = {
    sun: {
        id: "sun",
        name: "Sunny"
    },

    cloudy: {
        id: "cloudy",
        name: "Cloudy"
    },

    rain: {
        id: "rain",
        name: "Rain"
    },

    strongWind: {
        id: "strongWind",
        name: "Strong Wind"
    },

    cold: {
        id: "cold",
        name: "Cold"
    },

    heat: {
        id: "heat",
        name: "Heat"
    },

    fog: {
        id: "fog",
        name: "Fog"
    },

    mixed: {
        id: "mixed",
        name: "Changing Weather"
    }
};


// ============================================
// RACE FEATURES
// ============================================

const raceFeatures = {
    crosswinds: "Crosswinds",

    technicalDescents: "Technical Descents",

    dangerousRoads: "Dangerous Roads",

    gravel: "Gravel",

    cobbles: "Cobblestones",

    longClimbs: "Long Climbs",

    shortClimbs: "Short Climbs",

    technicalFinish: "Technical Finish",

    narrowRoads: "Narrow Roads",

    exposedRoads: "Exposed Roads",

    highAltitude: "High Altitude"
};


// ============================================
// CLIMB CATEGORIES
// ============================================

const climbCategories = {
    category4: {
        id: "category4",
        name: "Category 4",
        difficulty: 1
    },

    category3: {
        id: "category3",
        name: "Category 3",
        difficulty: 2
    },

    category2: {
        id: "category2",
        name: "Category 2",
        difficulty: 3
    },

    category1: {
        id: "category1",
        name: "Category 1",
        difficulty: 4
    },

    horsCategorie: {
        id: "horsCategorie",
        name: "Hors Catégorie",
        difficulty: 5
    }
};


// ============================================
// CLIMB DATA
// ============================================

function createClimb({
    id,
    name,
    distanceKm,
    lengthKm,
    averageGradient,
    category = "category3",
    summitKm = null
}) {
    if (
        !id ||
        !name ||
        !Number.isFinite(
            Number(lengthKm)
        )
    ) {
        console.warn(
            "Invalid climb data."
        );

        return null;
    }

    if (
        !climbCategories[category]
    ) {
        console.warn(
            `Unknown climb category: ${category}`
        );

        return null;
    }

    return {
        id,

        name,

        distanceKm:
            Number(distanceKm) || 0,

        lengthKm:
            Number(lengthKm),

        averageGradient:
            Number(averageGradient) || 0,

        category,

        difficulty:
            climbCategories[
                category
            ].difficulty,

        summitKm:
            summitKm !== null
                ? Number(summitKm)
                : null
    };
}


// ============================================
// RACE WEATHER
// ============================================

function createRaceWeather({
    type = "sun",
    temperature = null,
    windSpeed = null,
    windDirection = null,
    rainChance = null,
    visibility = null,
    changing = false
} = {}) {
    if (!weatherTypes[type]) {
        console.warn(
            `Unknown weather type: ${type}`
        );

        return null;
    }

    return {
        type,

        name:
            weatherTypes[type].name,

        temperature,

        windSpeed,

        windDirection,

        rainChance,

        visibility,

        changing
    };
}


// ============================================
// RACE OBJECT
// ============================================

function createRace({
    id,
    name,
    country,
    date,
    type = "oneDay",
    level = "worldTour",
    distanceKm = 0,
    terrain = "mixed",
    finishType = "sprint",
    stages = [],
    climbs = [],
    features = [],
    weather = null,
    startLocation = null,
    finishLocation = null,
    description = "",
    prestige = null
} = {}) {
    if (
        !id ||
        !name ||
        !country ||
        !date
    ) {
        console.warn(
            "Race requires id, name, country and date."
        );

        return null;
    }

    if (!raceTypes[type]) {
        console.warn(
            `Unknown race type: ${type}`
        );

        return null;
    }

    if (!raceLevels[level]) {
        console.warn(
            `Unknown race level: ${level}`
        );

        return null;
    }

    if (!terrainTypes[terrain]) {
        console.warn(
            `Unknown terrain type: ${terrain}`
        );

        return null;
    }

    if (!finishTypes[finishType]) {
        console.warn(
            `Unknown finish type: ${finishType}`
        );

        return null;
    }

    return {
        id,

        name,

        country,

        date,

        type,

        typeName:
            raceTypes[type].name,

        level,

        levelName:
            raceLevels[level].name,

        distanceKm:
            Number(distanceKm),

        terrain,

        terrainName:
            terrainTypes[terrain].name,

        finishType,

        finishName:
            finishTypes[finishType].name,

        stages,

        stageCount:
            stages.length,

        climbs,

        features,

        weather,

        startLocation,

        finishLocation,

        description,

        prestige:
            prestige ??
            raceLevels[level].prestige,

        status: "Available"
    };
}


// ============================================
// STAGE OBJECT
// ============================================

function createStage({
    id,
    raceId,
    number,
    name,
    date,
    distanceKm,
    terrain = "mixed",
    finishType = "sprint",
    climbs = [],
    features = [],
    weather = null,
    startLocation = null,
    finishLocation = null,
    description = ""
} = {}) {
    if (
        !id ||
        !raceId ||
        !number ||
        !name ||
        !date
    ) {
        console.warn(
            "Stage requires id, raceId, number, name and date."
        );

        return null;
    }

    if (!terrainTypes[terrain]) {
        console.warn(
            `Unknown stage terrain: ${terrain}`
        );

        return null;
    }

    if (!finishTypes[finishType]) {
        console.warn(
            `Unknown stage finish type: ${finishType}`
        );

        return null;
    }

    return {
        id,

        raceId,

        number,

        name,

        date,

        distanceKm:
            Number(distanceKm),

        terrain,

        terrainName:
            terrainTypes[terrain].name,

        finishType,

        finishName:
            finishTypes[finishType].name,

        climbs,

        features,

        weather,

        startLocation,

        finishLocation,

        description,

        status: "Upcoming"
    };
}


// ============================================
// RACE STATE MANAGEMENT
// ============================================

function addAvailableRace(race) {
    if (!race) {
        return false;
    }

    const existing =
        raceState.availableRaces.find(
            item =>
                item.id === race.id
        );

    if (existing) {
        console.warn(
            `Race already exists: ${race.id}`
        );

        return false;
    }

    raceState.availableRaces.push(
        race
    );

    sortAvailableRaces();

    return true;
}

function sortAvailableRaces() {
    raceState.availableRaces.sort(
        (a, b) => {
            const dateDifference =
                getDaysBetween(
                    a.date,
                    b.date
                );

            if (
                dateDifference !== null &&
                dateDifference !== 0
            ) {
                return dateDifference;
            }

            return (
                b.prestige -
                a.prestige
            );
        }
    );
}

function getAvailableRaces() {
    return raceState.availableRaces;
}

function getRaceById(raceId) {
    return raceState.availableRaces.find(
        race =>
            race.id === raceId
    ) || null;
}

function selectRace(raceId) {
    const race =
        getRaceById(raceId);

    if (!race) {
        console.warn(
            `Race not found: ${raceId}`
        );

        return false;
    }

    raceState.selectedRaceId =
        raceId;

    raceState.selectedStageId =
        null;

    return true;
}

function getSelectedRace() {
    if (
        !raceState.selectedRaceId
    ) {
        return null;
    }

    return getRaceById(
        raceState.selectedRaceId
    );
}

function selectStage(stageId) {
    const race =
        getSelectedRace();

    if (!race) {
        return false;
    }

    const stage =
        race.stages.find(
            item =>
                item.id === stageId
        );

    if (!stage) {
        return false;
    }

    raceState.selectedStageId =
        stageId;

    return true;
}

function getSelectedStage() {
    const race =
        getSelectedRace();

    if (!race) {
        return null;
    }

    return race.stages.find(
        stage =>
            stage.id ===
            raceState.selectedStageId
    ) || null;
}


// ============================================
// RACE FILTERS
// ============================================

function getRacesByType(type) {
    return raceState.availableRaces.filter(
        race =>
            race.type === type
    );
}

function getRacesByLevel(level) {
    return raceState.availableRaces.filter(
        race =>
            race.level === level
    );
}

function getRacesByTerrain(terrain) {
    return raceState.availableRaces.filter(
        race =>
            race.terrain === terrain
    );
}

function getRacesBetweenDates(
    startDate,
    endDate
) {
    return raceState.availableRaces.filter(
        race =>
            !isDateBefore(
                race.date,
                startDate
            ) &&
            !isDateAfter(
                race.date,
                endDate
            )
    );
}

function getUpcomingRaces() {
    return raceState.availableRaces.filter(
        race =>
            !isDateBefore(
                race.date,
                game.career.currentDate
            )
    );
}


// ============================================
// RACE SUMMARY
// ============================================

function getRaceSummary(race) {
    if (!race) {
        return null;
    }

    return {
        id: race.id,

        name: race.name,

        country: race.country,

        date: race.date,

        type:
            race.typeName,

        level:
            race.levelName,

        distanceKm:
            race.distanceKm,

        terrain:
            race.terrainName,

        finish:
            race.finishName,

        stages:
            race.stageCount,

        prestige:
            race.prestige,

        features:
            race.features,

        description:
            race.description
    };
}

function getAllRaceSummaries() {
    return raceState.availableRaces.map(
        race =>
            getRaceSummary(race)
    );
}


// ============================================
// RACE STRUCTURE HELPERS
// ============================================

function isStageRace(race) {
    if (!race) {
        return false;
    }

    return (
        race.type === "stageRace" ||
        race.type === "grandTour"
    );
}

function isOneDayRace(race) {
    if (!race) {
        return false;
    }

    return (
        race.type === "oneDay" ||
        race.type === "monument" ||
        race.type === "worldsRoad" ||
        race.type === "nationalsRoad"
    );
}

function getRaceStages(race) {
    if (!race) {
        return [];
    }

    return race.stages || [];
}

function getRaceClimbs(race) {
    if (!race) {
        return [];
    }

    return race.climbs || [];
}

function getRaceFeatures(race) {
    if (!race) {
        return [];
    }

    return race.features || [];
}

function hasRaceFeature(
    race,
    feature
) {
    if (!race) {
        return false;
    }

    return race.features.includes(
        feature
    );
}

function hasClimbs(race) {
    return (
        !!race &&
        Array.isArray(race.climbs) &&
        race.climbs.length > 0
    );
}


// ============================================
// RACE DATE / DISTANCE HELPERS
// ============================================

function getRaceDuration(race) {
    if (!race) {
        return 0;
    }

    if (
        isStageRace(race)
    ) {
        return race.stages.length;
    }

    return 1;
}

function getRaceDistance(race) {
    if (!race) {
        return 0;
    }

    if (
        isStageRace(race) &&
        race.stages.length
    ) {
        return race.stages.reduce(
            (total, stage) =>
                total +
                stage.distanceKm,
            0
        );
    }

    return race.distanceKm;
}


// ============================================
// PLAYER RACE COMPATIBILITY
// ============================================

function getRaceCompatibility(
    race
) {
    if (!game.player || !race) {
        return null;
    }

    let raceType =
        "allround";

    if (
        race.terrain === "flat"
    ) {
        raceType = "sprint";
    }

    if (
        race.terrain === "hills"
    ) {
        raceType = "hill";
    }

    if (
        race.terrain ===
        "mediumMountain"
    ) {
        raceType =
            "mediumMountain";
    }

    if (
        race.terrain ===
        "mountain"
    ) {
        raceType =
            "mountain";
    }

    if (
        race.terrain ===
        "cobbles"
    ) {
        raceType =
            "cobbles";
    }

    if (
        race.terrain === "itt"
    ) {
        raceType =
            "itt";
    }

    if (
        isStageRace(race)
    ) {
        raceType =
            "stageRace";
    }

    return {
        raceType,

        profileFit:
            calculateRaceProfileFit(
                raceType
            ),

        readiness:
            calculateRaceSpecificReadiness(
                raceType
            ),

        finishType:
            race.finishType,

        terrain:
            race.terrain
    };
}


// ============================================
// RESET
// ============================================

function resetRaceSystem() {
    raceState.availableRaces = [];

    raceState.selectedRaceId =
        null;

    raceState.selectedStageId =
        null;
}

console.log(
    "Race Data & Race Structure system loaded."
);
// ============================================
// CYCLING CAREER
// script.js — Del 17
// Race Situations & Dynamic Groups
// ============================================

const raceSimulationState = {
    active: false,
    phase: "Before Race",
    currentKm: 0,
    totalKm: 0,

    currentSituation: null,
    previousSituation: null,

    groups: [],
    events: [],

    playerGroupId: null,
    playerPosition: null,

    breakawayAttempts: 0,
    attacks: 0,

    raceStartedAt: null
};


// ============================================
// RACE PHASES
// ============================================

const racePhases = {
    beforeRace: {
        id: "beforeRace",
        name: "Before Race"
    },

    earlyRace: {
        id: "earlyRace",
        name: "Early Race"
    },

    midRace: {
        id: "midRace",
        name: "Mid-Race"
    },

    finale: {
        id: "finale",
        name: "Finale"
    },

    finish: {
        id: "finish",
        name: "Finish"
    },

    completed: {
        id: "completed",
        name: "Completed"
    }
};


// ============================================
// GROUP TYPES
// ============================================

const raceGroupTypes = {
    peloton: {
        id: "peloton",
        name: "Main Peloton"
    },

    breakaway: {
        id: "breakaway",
        name: "Breakaway"
    },

    chase: {
        id: "chase",
        name: "Chase Group"
    },

    front: {
        id: "front",
        name: "Front Group"
    },

    captain: {
        id: "captain",
        name: "Captain Group"
    },

    rear: {
        id: "rear",
        name: "Rear Group"
    },

    solo: {
        id: "solo",
        name: "Solo"
    }
};


// ============================================
// SITUATION TYPES
// ============================================

const raceSituationTypes = {
    normal: {
        id: "normal",
        name: "Normal Racing"
    },

    breakawayAttempt: {
        id: "breakawayAttempt",
        name: "Breakaway Attempt"
    },

    breakawayFormed: {
        id: "breakawayFormed",
        name: "Breakaway Formed"
    },

    attack: {
        id: "attack",
        name: "Attack"
    },

    chase: {
        id: "chase",
        name: "Chase"
    },

    crosswinds: {
        id: "crosswinds",
        name: "Crosswinds"
    },

    climb: {
        id: "climb",
        name: "Climb"
    },

    descent: {
        id: "descent",
        name: "Descent"
    },

    mechanical: {
        id: "mechanical",
        name: "Mechanical"
    },

    crash: {
        id: "crash",
        name: "Crash"
    },

    positionBattle: {
        id: "positionBattle",
        name: "Position Battle"
    },

    weatherChange: {
        id: "weatherChange",
        name: "Weather Change"
    },

    fatigue: {
        id: "fatigue",
        name: "Fatigue"
    },

    finale: {
        id: "finale",
        name: "Finale"
    }
};


// ============================================
// GROUP CREATION
// ============================================

function createRaceGroup({
    id,
    type = "peloton",
    name = null,
    riders = [],
    gapSeconds = 0,
    distanceFromFrontKm = 0,
    averageStrength = 50,
    teamCount = 0
} = {}) {
    if (!id) {
        console.warn(
            "Race group requires an id."
        );

        return null;
    }

    if (!raceGroupTypes[type]) {
        console.warn(
            `Unknown race group type: ${type}`
        );

        return null;
    }

    return {
        id,

        type,

        name:
            name ||
            raceGroupTypes[type].name,

        riders,

        riderCount:
            riders.length,

        gapSeconds,

        distanceFromFrontKm,

        averageStrength,

        teamCount,

        status: "Active"
    };
}


// ============================================
// GROUP MANAGEMENT
// ============================================

function addRaceGroup(group) {
    if (!group) {
        return false;
    }

    const existing =
        raceSimulationState.groups.find(
            item =>
                item.id === group.id
        );

    if (existing) {
        return false;
    }

    raceSimulationState.groups.push(
        group
    );

    return true;
}

function getRaceGroups() {
    return raceSimulationState.groups;
}

function getRaceGroupById(groupId) {
    return raceSimulationState.groups.find(
        group =>
            group.id === groupId
    ) || null;
}

function removeRaceGroup(groupId) {
    const index =
        raceSimulationState.groups.findIndex(
            group =>
                group.id === groupId
        );

    if (index === -1) {
        return false;
    }

    raceSimulationState.groups.splice(
        index,
        1
    );

    if (
        raceSimulationState.playerGroupId ===
        groupId
    ) {
        raceSimulationState.playerGroupId =
            null;
    }

    return true;
}


// ============================================
// RIDER GROUP ASSIGNMENT
// ============================================

function addRiderToGroup(
    groupId,
    rider
) {
    const group =
        getRaceGroupById(
            groupId
        );

    if (!group || !rider) {
        return false;
    }

    if (
        group.riders.includes(
            rider.id
        )
    ) {
        return false;
    }

    group.riders.push(
        rider.id
    );

    group.riderCount =
        group.riders.length;

    return true;
}

function removeRiderFromGroup(
    groupId,
    riderId
) {
    const group =
        getRaceGroupById(
            groupId
        );

    if (!group) {
        return false;
    }

    const index =
        group.riders.indexOf(
            riderId
        );

    if (index === -1) {
        return false;
    }

    group.riders.splice(
        index,
        1
    );

    group.riderCount =
        group.riders.length;

    return true;
}

function moveRiderBetweenGroups(
    riderId,
    fromGroupId,
    toGroupId
) {
    const removed =
        removeRiderFromGroup(
            fromGroupId,
            riderId
        );

    if (!removed) {
        return false;
    }

    const added =
        addRiderToGroup(
            toGroupId,
            {
                id: riderId
            }
        );

    if (!added) {
        addRiderToGroup(
            fromGroupId,
            {
                id: riderId
            }
        );

        return false;
    }

    return true;
}

function findRiderGroup(
    riderId
) {
    return raceSimulationState.groups.find(
        group =>
            group.riders.includes(
                riderId
            )
    ) || null;
}


// ============================================
// PLAYER GROUP
// ============================================

function setPlayerRaceGroup(
    groupId
) {
    const group =
        getRaceGroupById(
            groupId
        );

    if (!group) {
        return false;
    }

    raceSimulationState.playerGroupId =
        groupId;

    return true;
}

function getPlayerRaceGroup() {
    if (
        !raceSimulationState.playerGroupId
    ) {
        return null;
    }

    return getRaceGroupById(
        raceSimulationState.playerGroupId
    );
}

function updatePlayerRaceGroup() {
    if (!game.player) {
        return null;
    }

    const group =
        findRiderGroup(
            game.player.id
        );

    if (!group) {
        raceSimulationState.playerGroupId =
            null;

        return null;
    }

    raceSimulationState.playerGroupId =
        group.id;

    return group;
}


// ============================================
// RACE POSITION
// ============================================

function setPlayerRacePosition(
    position
) {
    const numericPosition =
        Number(position);

    if (
        !Number.isFinite(
            numericPosition
        ) ||
        numericPosition < 1
    ) {
        return false;
    }

    raceSimulationState.playerPosition =
        Math.floor(
            numericPosition
        );

    return true;
}

function getPlayerRacePosition() {
    return (
        raceSimulationState
            .playerPosition ||
        null
    );
}


// ============================================
// SITUATIONS
// ============================================

function createRaceSituation({
    id,
    type = "normal",
    title,
    description = "",
    km = raceSimulationState.currentKm,
    urgency = "Normal",
    data = {}
} = {}) {
    if (!id || !title) {
        console.warn(
            "Race situation requires an id and title."
        );

        return null;
    }

    if (!raceSituationTypes[type]) {
        console.warn(
            `Unknown race situation type: ${type}`
        );

        return null;
    }

    return {
        id,

        type,

        typeName:
            raceSituationTypes[type].name,

        title,

        description,

        km,

        urgency,

        data,

        createdAt:
            game.career.currentDate
    };
}

function setCurrentRaceSituation(
    situation
) {
    if (!situation) {
        return false;
    }

    raceSimulationState.previousSituation =
        raceSimulationState.currentSituation;

    raceSimulationState.currentSituation =
        situation;

    raceSimulationState.events.push(
        situation
    );

    return true;
}

function getCurrentRaceSituation() {
    return (
        raceSimulationState
            .currentSituation ||
        null
    );
}

function getPreviousRaceSituation() {
    return (
        raceSimulationState
            .previousSituation ||
        null
    );
}

function getRaceEvents() {
    return raceSimulationState.events;
}


// ============================================
// PHASE MANAGEMENT
// ============================================

function determineRacePhase(
    currentKm,
    totalKm
) {
    if (
        currentKm <= 0
    ) {
        return "beforeRace";
    }

    if (
        currentKm >= totalKm
    ) {
        return "finish";
    }

    const progress =
        currentKm /
        totalKm;

    if (progress < 0.25) {
        return "earlyRace";
    }

    if (progress < 0.70) {
        return "midRace";
    }

    return "finale";
}

function updateRacePhase() {
    raceSimulationState.phase =
        determineRacePhase(
            raceSimulationState.currentKm,
            raceSimulationState.totalKm
        );

    return raceSimulationState.phase;
}

function getRacePhaseName(
    phase =
        raceSimulationState.phase
) {
    return (
        racePhases[phase]?.name ||
        "Unknown"
    );
}


// ============================================
// RACE DISTANCE
// ============================================

function setRaceDistance(
    currentKm,
    totalKm
) {
    const current =
        Number(currentKm);

    const total =
        Number(totalKm);

    if (
        !Number.isFinite(current) ||
        !Number.isFinite(total) ||
        total <= 0 ||
        current < 0
    ) {
        return false;
    }

    raceSimulationState.currentKm =
        Math.min(
            current,
            total
        );

    raceSimulationState.totalKm =
        total;

    updateRacePhase();

    return true;
}

function advanceRaceDistance(
    kilometers
) {
    const distance =
        Number(kilometers);

    if (
        !Number.isFinite(distance) ||
        distance < 0
    ) {
        return false;
    }

    raceSimulationState.currentKm =
        Math.min(
            raceSimulationState.currentKm +
            distance,
            raceSimulationState.totalKm
        );

    updateRacePhase();

    return true;
}

function getRaceProgress() {
    if (
        raceSimulationState.totalKm <= 0
    ) {
        return 0;
    }

    return Math.round(
        (
            raceSimulationState.currentKm /
            raceSimulationState.totalKm
        ) * 100
    );
}

function getRemainingRaceDistance() {
    return Math.max(
        0,
        raceSimulationState.totalKm -
        raceSimulationState.currentKm
    );
}


// ============================================
// GROUP GAP MANAGEMENT
// ============================================

function setGroupGap(
    groupId,
    gapSeconds
) {
    const group =
        getRaceGroupById(
            groupId
        );

    if (!group) {
        return false;
    }

    group.gapSeconds =
        Math.max(
            0,
            Number(gapSeconds) || 0
        );

    return true;
}

function changeGroupGap(
    groupId,
    seconds
) {
    const group =
        getRaceGroupById(
            groupId
        );

    if (!group) {
        return false;
    }

    group.gapSeconds =
        Math.max(
            0,
            group.gapSeconds +
            Number(seconds)
        );

    return true;
}

function getGroupGap(
    groupId
) {
    const group =
        getRaceGroupById(
            groupId
        );

    return group
        ? group.gapSeconds
        : null;
}


// ============================================
// BREAKAWAY
// ============================================

function attemptBreakaway({
    riders = [],
    strength = 50
} = {}) {
    if (!raceSimulationState.active) {
        return null;
    }

    raceSimulationState
        .breakawayAttempts++;

    const breakaway =
        createRaceGroup({
            id:
                `breakaway-${Date.now()}`,

            type: "breakaway",

            riders,

            gapSeconds: 0,

            distanceFromFrontKm: 0,

            averageStrength:
                strength
        });

    if (!breakaway) {
        return null;
    }

    addRaceGroup(
        breakaway
    );

    const situation =
        createRaceSituation({
            id:
                `situation-breakaway-${Date.now()}`,

            type:
                "breakawayAttempt",

            title:
                "Breakaway attempt",

            description:
                "A group of riders is trying to escape the peloton.",

            urgency: "High",

            data: {
                riders,
                groupId:
                    breakaway.id
            }
        });

    setCurrentRaceSituation(
        situation
    );

    return breakaway;
}

function formBreakaway(
    groupId
) {
    const group =
        getRaceGroupById(
            groupId
        );

    if (
        !group ||
        group.type !== "breakaway"
    ) {
        return false;
    }

    group.status =
        "Established";

    setCurrentRaceSituation(
        createRaceSituation({
            id:
                `situation-breakaway-formed-${Date.now()}`,

            type:
                "breakawayFormed",

            title:
                "Breakaway established",

            description:
                "The breakaway has created a meaningful gap from the peloton.",

            urgency:
                "Normal",

            data: {
                groupId
            }
        })
    );

    return true;
}


// ============================================
// ATTACKS
// ============================================

function createAttack({
    riderId,
    fromGroupId,
    targetGroupId = null,
    strength = 50
} = {}) {
    if (
        !riderId ||
        !fromGroupId
    ) {
        return null;
    }

    const fromGroup =
        getRaceGroupById(
            fromGroupId
        );

    if (!fromGroup) {
        return null;
    }

    raceSimulationState.attacks++;

    const attack = {
        id:
            `attack-${Date.now()}-${randomInt(100, 999)}`,

        riderId,

        fromGroupId,

        targetGroupId,

        strength,

        km:
            raceSimulationState.currentKm,

        status: "Active"
    };

    setCurrentRaceSituation(
        createRaceSituation({
            id:
                `situation-attack-${attack.id}`,

            type: "attack",

            title:
                "Attack",

            description:
                "A rider has accelerated away from the group.",

            urgency: "High",

            data: attack
        })
    );

    return attack;
}


// ============================================
// CROSSWINDS
// ============================================

function createCrosswindSituation({
    severity = "Strong",
    affectedGroups = []
} = {}) {
    const situation =
        createRaceSituation({
            id:
                `situation-crosswind-${Date.now()}`,

            type:
                "crosswinds",

            title:
                "Crosswinds",

            description:
                "Strong crosswinds are creating splits in the race.",

            urgency:
                severity === "Extreme"
                    ? "Critical"
                    : "High",

            data: {
                severity,
                affectedGroups
            }
        });

    setCurrentRaceSituation(
        situation
    );

    return situation;
}


// ============================================
// CLIMBS
// ============================================

function createClimbSituation(
    climb
) {
    if (!climb) {
        return null;
    }

    const situation =
        createRaceSituation({
            id:
                `situation-climb-${climb.id}-${Date.now()}`,

            type:
                "climb",

            title:
                `${climb.name} begins`,

            description:
                `${climb.lengthKm} km at an average gradient of ${climb.averageGradient}%.`,

            urgency:
                climb.difficulty >= 4
                    ? "High"
                    : "Normal",

            data: {
                climb
            }
        });

    setCurrentRaceSituation(
        situation
    );

    return situation;
}


// ============================================
// DESCENTS
// ============================================

function createDescentSituation({
    name = "Descent",
    technical = false
} = {}) {
    const situation =
        createRaceSituation({
            id:
                `situation-descent-${Date.now()}`,

            type:
                "descent",

            title:
                technical
                    ? "Technical descent"
                    : "Descent",

            description:
                technical
                    ? "A technical descent is approaching."
                    : "The race is entering a descent.",

            urgency:
                technical
                    ? "High"
                    : "Normal",

            data: {
                name,
                technical
            }
        });

    setCurrentRaceSituation(
        situation
    );

    return situation;
}


// ============================================
// MECHANICALS
// ============================================

function createMechanicalSituation({
    riderId,
    mechanicalType = "Mechanical"
} = {}) {
    if (!riderId) {
        return null;
    }

    const situation =
        createRaceSituation({
            id:
                `situation-mechanical-${Date.now()}`,

            type:
                "mechanical",

            title:
                "Mechanical problem",

            description:
                "A rider is dealing with a mechanical problem.",

            urgency:
                "High",

            data: {
                riderId,
                mechanicalType
            }
        });

    setCurrentRaceSituation(
        situation
    );

    return situation;
}


// ============================================
// CRASHES
// ============================================

function createCrashSituation({
    riders = [],
    severity = "Minor"
} = {}) {
    const situation =
        createRaceSituation({
            id:
                `situation-crash-${Date.now()}`,

            type:
                "crash",

            title:
                "Crash",

            description:
                "A crash has disrupted the race and caused a split.",

            urgency:
                severity === "Major"
                    ? "Critical"
                    : "High",

            data: {
                riders,
                severity
            }
        });

    setCurrentRaceSituation(
        situation
    );

    return situation;
}


// ============================================
// POSITION BATTLE
// ============================================

function createPositionBattleSituation({
    position,
    importance = "Normal"
} = {}) {
    const situation =
        createRaceSituation({
            id:
                `situation-position-${Date.now()}`,

            type:
                "positionBattle",

            title:
                "Position battle",

            description:
                "The road is narrowing and riders are fighting for position.",

            urgency:
                importance === "High"
                    ? "High"
                    : "Normal",

            data: {
                position,
                importance
            }
        });

    setCurrentRaceSituation(
        situation
    );

    return situation;
}


// ============================================
// WEATHER CHANGES
// ============================================

function createWeatherChangeSituation({
    from,
    to,
    description = ""
} = {}) {
    const situation =
        createRaceSituation({
            id:
                `situation-weather-${Date.now()}`,

            type:
                "weatherChange",

            title:
                "Weather change",

            description:
                description ||
                `Conditions are changing from ${from} to ${to}.`,

            urgency:
                "Normal",

            data: {
                from,
                to
            }
        });

    setCurrentRaceSituation(
        situation
    );

    return situation;
}


// ============================================
// FATIGUE SITUATION
// ============================================

function createFatigueSituation() {
    if (!game.player) {
        return null;
    }

    const situation =
        createRaceSituation({
            id:
                `situation-fatigue-${Date.now()}`,

            type:
                "fatigue",

            title:
                "Fatigue is building",

            description:
                "The accumulated effort is beginning to affect the rider.",

            urgency:
                game.player.fatigue >= 70
                    ? "High"
                    : "Normal",

            data: {
                energy:
                    game.player.energy,

                fatigue:
                    game.player.fatigue
            }
        });

    setCurrentRaceSituation(
        situation
    );

    return situation;
}


// ============================================
// RACE INITIALIZATION
// ============================================

function initializeRaceSimulation(
    race
) {
    if (!race) {
        console.warn(
            "Cannot initialize race without race data."
        );

        return false;
    }

    const totalDistance =
        getRaceDistance(race);

    if (
        totalDistance <= 0
    ) {
        console.warn(
            "Race has no valid distance."
        );

        return false;
    }

    raceSimulationState.active =
        true;

    raceSimulationState.phase =
        "beforeRace";

    raceSimulationState.currentKm =
        0;

    raceSimulationState.totalKm =
        totalDistance;

    raceSimulationState.currentSituation =
        null;

    raceSimulationState.previousSituation =
        null;

    raceSimulationState.groups =
        [];

    raceSimulationState.events =
        [];

    raceSimulationState.playerGroupId =
        null;

    raceSimulationState.playerPosition =
        null;

    raceSimulationState.breakawayAttempts =
        0;

    raceSimulationState.attacks =
        0;

    raceSimulationState.raceStartedAt =
        game.career.currentDate;

    /*
        The initial peloton is intentionally abstract.
        Later the World Engine will populate it with
        actual riders from the race start list.
    */

    addRaceGroup(
        createRaceGroup({
            id: "peloton",
            type: "peloton",
            name: "Main Peloton",
            riders: [],
            gapSeconds: 0,
            distanceFromFrontKm: 0,
            averageStrength: 50
        })
    );

    setCurrentRaceSituation(
        createRaceSituation({
            id:
                `situation-start-${Date.now()}`,

            type:
                "normal",

            title:
                "Race start",

            description:
                "The race has started and the peloton is together.",

            urgency:
                "Normal"
        })
    );

    return true;
}


// ============================================
// RACE START / END
// ============================================

function startRaceSimulation() {
    if (
        !raceSimulationState.active
    ) {
        return false;
    }

    raceSimulationState.phase =
        "earlyRace";

    return true;
}

function finishRaceSimulation() {
    if (
        !raceSimulationState.active
    ) {
        return false;
    }

    raceSimulationState.currentKm =
        raceSimulationState.totalKm;

    raceSimulationState.phase =
        "completed";

    raceSimulationState.active =
        false;

    setCurrentRaceSituation(
        createRaceSituation({
            id:
                `situation-finish-${Date.now()}`,

            type:
                "finale",

            title:
                "Race finished",

            description:
                "The race has reached the finish.",

            urgency:
                "Critical"
        })
    );

    return true;
}


// ============================================
// SIMULATION STATE
// ============================================

function getRaceSimulationState() {
    return {
        active:
            raceSimulationState.active,

        phase:
            raceSimulationState.phase,

        phaseName:
            getRacePhaseName(),

        currentKm:
            raceSimulationState.currentKm,

        totalKm:
            raceSimulationState.totalKm,

        remainingKm:
            getRemainingRaceDistance(),

        progress:
            getRaceProgress(),

        currentSituation:
            raceSimulationState.currentSituation,

        groups:
            raceSimulationState.groups,

        playerGroup:
            getPlayerRaceGroup(),

        playerPosition:
            raceSimulationState.playerPosition,

        breakawayAttempts:
            raceSimulationState
                .breakawayAttempts,

        attacks:
            raceSimulationState.attacks
    };
}


// ============================================
// RESET
// ============================================

function resetRaceSimulation() {
    raceSimulationState.active =
        false;

    raceSimulationState.phase =
        "Before Race";

    raceSimulationState.currentKm =
        0;

    raceSimulationState.totalKm =
        0;

    raceSimulationState.currentSituation =
        null;

    raceSimulationState.previousSituation =
        null;

    raceSimulationState.groups =
        [];

    raceSimulationState.events =
        [];

    raceSimulationState.playerGroupId =
        null;

    raceSimulationState.playerPosition =
        null;

    raceSimulationState.breakawayAttempts =
        0;

    raceSimulationState.attacks =
        0;

    raceSimulationState.raceStartedAt =
        null;
}

console.log(
    "Race Situations & Dynamic Groups system loaded."
);
// ============================================
// CYCLING CAREER
// script.js — Del 18
// Race Actions & Player Decisions
// ============================================

const raceActionState = {
    availableActions: [],
    selectedAction: null,
    lastAction: null,
    actionHistory: []
};


// ============================================
// ACTION CATEGORIES
// ============================================

const raceActionCategories = {
    general: {
        id: "general",
        name: "General"
    },

    attack: {
        id: "attack",
        name: "Attack"
    },

    breakaway: {
        id: "breakaway",
        name: "Breakaway"
    },

    climb: {
        id: "climb",
        name: "Climb"
    },

    finale: {
        id: "finale",
        name: "Finale"
    },

    team: {
        id: "team",
        name: "Team"
    }
};


// ============================================
// RACE ACTION DEFINITIONS
// ============================================

const raceActions = {
    holdPosition: {
        id: "holdPosition",
        name: "Hold Position",
        category: "general",
        description:
            "Maintain your current position and avoid unnecessary effort.",
        energyCost: 1,
        fatigueCost: 0.5
    },

    moveForward: {
        id: "moveForward",
        name: "Move Forward",
        category: "general",
        description:
            "Move toward the front of the group.",
        energyCost: 4,
        fatigueCost: 1.5
    },

    followWheel: {
        id: "followWheel",
        name: "Follow Wheel",
        category: "general",
        description:
            "Stay behind another rider and use their draft.",
        energyCost: 1.5,
        fatigueCost: 0.5
    },

    pull: {
        id: "pull",
        name: "Pull",
        category: "team",
        description:
            "Take a turn on the front and contribute to the pace.",
        energyCost: 6,
        fatigueCost: 2.5
    },

    saveEnergy: {
        id: "saveEnergy",
        name: "Save Energy",
        category: "general",
        description:
            "Reduce your effort and preserve energy for later.",
        energyCost: 0,
        fatigueCost: -1
    },

    waitForTeam: {
        id: "waitForTeam",
        name: "Wait for Team",
        category: "team",
        description:
            "Stay with your teammates and wait for instructions.",
        energyCost: 0.5,
        fatigueCost: 0
    },

    followAttack: {
        id: "followAttack",
        name: "Follow Attack",
        category: "attack",
        description:
            "Respond immediately to an attack.",
        energyCost: 7,
        fatigueCost: 3
    },

    closeGap: {
        id: "closeGap",
        name: "Close Gap",
        category: "attack",
        description:
            "Spend energy to close the gap to another group.",
        energyCost: 8,
        fatigueCost: 3.5
    },

    letGo: {
        id: "letGo",
        name: "Let It Go",
        category: "attack",
        description:
            "Do not respond to the attack and conserve energy.",
        energyCost: 0,
        fatigueCost: -0.5
    },

    counterAttack: {
        id: "counterAttack",
        name: "Counterattack",
        category: "attack",
        description:
            "Launch an attack immediately after another rider attacks.",
        energyCost: 10,
        fatigueCost: 4.5
    },

    waitForCaptain: {
        id: "waitForCaptain",
        name: "Wait for Captain",
        category: "team",
        description:
            "Stay with the team's leader instead of chasing the move.",
        energyCost: 0.5,
        fatigueCost: 0
    },

    tryJoinBreakaway: {
        id: "tryJoinBreakaway",
        name: "Try to Join",
        category: "breakaway",
        description:
            "Attempt to bridge across to the breakaway.",
        energyCost: 8,
        fatigueCost: 3.5
    },

    attackAlone: {
        id: "attackAlone",
        name: "Attack Alone",
        category: "breakaway",
        description:
            "Launch a solo move away from the group.",
        energyCost: 11,
        fatigueCost: 5
    },

    waitForMoment: {
        id: "waitForMoment",
        name: "Wait for the Right Moment",
        category: "breakaway",
        description:
            "Stay patient and look for a better opportunity.",
        energyCost: 0,
        fatigueCost: -0.5
    },

    stayInPeloton: {
        id: "stayInPeloton",
        name: "Stay in Peloton",
        category: "breakaway",
        description:
            "Remain in the main group and avoid unnecessary effort.",
        energyCost: 1,
        fatigueCost: 0
    },

    tempo: {
        id: "tempo",
        name: "Tempo",
        category: "climb",
        description:
            "Ride a controlled pace on the climb.",
        energyCost: 5,
        fatigueCost: 2
    },

    followClimb: {
        id: "followClimb",
        name: "Follow",
        category: "climb",
        description:
            "Follow the strongest riders on the climb.",
        energyCost: 7,
        fatigueCost: 3
    },

    attackClimb: {
        id: "attackClimb",
        name: "Attack",
        category: "climb",
        description:
            "Accelerate away from the group on the climb.",
        energyCost: 10,
        fatigueCost: 4.5
    },

    saveOnClimb: {
        id: "saveOnClimb",
        name: "Save Energy",
        category: "climb",
        description:
            "Ride conservatively and protect your energy.",
        energyCost: 2,
        fatigueCost: 0.5
    },

    prepareSprint: {
        id: "prepareSprint",
        name: "Prepare Sprint",
        category: "finale",
        description:
            "Move into position and prepare for the sprint.",
        energyCost: 5,
        fatigueCost: 2
    },

    sprint: {
        id: "sprint",
        name: "Sprint",
        category: "finale",
        description:
            "Commit to the sprint.",
        energyCost: 12,
        fatigueCost: 5
    },

    attackFinale: {
        id: "attackFinale",
        name: "Attack",
        category: "finale",
        description:
            "Make a late attack instead of waiting for the sprint.",
        energyCost: 10,
        fatigueCost: 4
    },

    helpCaptain: {
        id: "helpCaptain",
        name: "Help Captain",
        category: "team",
        description:
            "Use your own resources to support the team leader.",
        energyCost: 7,
        fatigueCost: 3
    }
};


// ============================================
// ACTION CREATION
// ============================================

function createRaceAction(
    actionId,
    context = {}
) {
    const definition =
        raceActions[actionId];

    if (!definition) {
        console.warn(
            `Unknown race action: ${actionId}`
        );

        return null;
    }

    return {
        id: definition.id,

        name: definition.name,

        category:
            definition.category,

        categoryName:
            raceActionCategories[
                definition.category
            ]?.name || "",

        description:
            definition.description,

        energyCost:
            definition.energyCost,

        fatigueCost:
            definition.fatigueCost,

        context
    };
}


// ============================================
// ACTION AVAILABILITY
// ============================================

function getGeneralRaceActions() {
    return [
        "holdPosition",
        "moveForward",
        "followWheel",
        "saveEnergy",
        "waitForTeam"
    ];
}

function getAttackRaceActions() {
    return [
        "followAttack",
        "closeGap",
        "letGo",
        "counterAttack",
        "waitForCaptain"
    ];
}

function getBreakawayRaceActions() {
    return [
        "tryJoinBreakaway",
        "attackAlone",
        "waitForMoment",
        "stayInPeloton"
    ];
}

function getClimbRaceActions() {
    return [
        "tempo",
        "followClimb",
        "attackClimb",
        "saveOnClimb"
    ];
}

function getFinaleRaceActions() {
    return [
        "prepareSprint",
        "sprint",
        "attackFinale",
        "closeGap",
        "helpCaptain"
    ];
}


// ============================================
// CONTEXT DETECTION
// ============================================

function getRaceActionContext() {
    const situation =
        getCurrentRaceSituation();

    if (!situation) {
        return "normal";
    }

    switch (situation.type) {
        case "attack":
            return "attack";

        case "breakawayAttempt":
        case "breakawayFormed":
            return "breakaway";

        case "climb":
            return "climb";

        case "finale":
            return "finale";

        default:
            return "normal";
    }
}


// ============================================
// TEAM ROLE RESTRICTIONS
// ============================================

function canUseIndependentAttack() {
    if (!game.player) {
        return false;
    }

    const role =
        getPlayerTeamRole();

    return [
        "Captain",
        "Co-leader",
        "Secondary leader",
        "Important rider",
        "Domestique",
        "Development rider"
    ].includes(role);
}

function canHelpCaptain() {
    if (!game.player) {
        return false;
    }

    const captain =
        getTeamCaptain();

    if (!captain) {
        return false;
    }

    return (
        captain.id !==
        game.player.id
    );
}

function canSprint() {
    if (!game.player) {
        return false;
    }

    return (
        raceSimulationState.phase ===
        "finale" ||
        raceSimulationState.phase ===
        "finish"
    );
}


// ============================================
// PLAYER CONDITION RESTRICTIONS
// ============================================

function canAffordRaceAction(
    actionId
) {
    if (!game.player) {
        return false;
    }

    const action =
        raceActions[actionId];

    if (!action) {
        return false;
    }

    /*
        We do not completely forbid actions because
        a rider can still make a bad decision when
        exhausted. The check is used to flag risk.
    */

    return (
        game.player.energy >=
        Math.max(
            0,
            action.energyCost
        )
    );
}

function getActionRisk(
    actionId
) {
    if (!game.player) {
        return "Unknown";
    }

    const action =
        raceActions[actionId];

    if (!action) {
        return "Unknown";
    }

    const energy =
        game.player.energy;

    const fatigue =
        game.player.fatigue;

    if (
        energy < action.energyCost ||
        fatigue >= 80
    ) {
        return "Very High";
    }

    if (
        energy < action.energyCost + 10 ||
        fatigue >= 60
    ) {
        return "High";
    }

    if (
        energy < action.energyCost + 25 ||
        fatigue >= 40
    ) {
        return "Moderate";
    }

    return "Low";
}


// ============================================
// AVAILABLE ACTIONS
// ============================================

function getAvailableRaceActions() {
    if (!raceSimulationState.active) {
        return [];
    }

    const context =
        getRaceActionContext();

    let actionIds = [];

    switch (context) {
        case "attack":
            actionIds =
                getAttackRaceActions();
            break;

        case "breakaway":
            actionIds =
                getBreakawayRaceActions();
            break;

        case "climb":
            actionIds =
                getClimbRaceActions();
            break;

        case "finale":
            actionIds =
                getFinaleRaceActions();
            break;

        default:
            actionIds =
                getGeneralRaceActions();
    }

    /*
        Team actions can be added when relevant.
    */

    if (
        canHelpCaptain() &&
        !actionIds.includes(
            "helpCaptain"
        )
    ) {
        actionIds.push(
            "helpCaptain"
        );
    }

    return actionIds
        .map(
            actionId =>
                createRaceAction(
                    actionId,
                    {
                        context,

                        risk:
                            getActionRisk(
                                actionId
                            ),

                        affordable:
                            canAffordRaceAction(
                                actionId
                            )
                    }
                )
        )
        .filter(Boolean);
}


// ============================================
// ACTION SELECTION
// ============================================

function selectRaceAction(
    actionId
) {
    const available =
        getAvailableRaceActions();

    const action =
        available.find(
            item =>
                item.id === actionId
        );

    if (!action) {
        console.warn(
            `Race action is not currently available: ${actionId}`
        );

        return false;
    }

    raceActionState.selectedAction =
        action;

    return true;
}

function getSelectedRaceAction() {
    return (
        raceActionState.selectedAction ||
        null
    );
}


// ============================================
// ACTION COSTS
// ============================================

function applyRaceActionCost(
    action
) {
    if (!game.player || !action) {
        return false;
    }

    if (
        action.energyCost > 0
    ) {
        consumeEnergy(
            action.energyCost,
            `Race action: ${action.name}`
        );
    }

    if (
        action.fatigueCost > 0
    ) {
        addFatigue(
            action.fatigueCost,
            `Race action: ${action.name}`
        );
    }

    if (
        action.fatigueCost < 0
    ) {
        reduceFatigue(
            Math.abs(
                action.fatigueCost
            ),
            `Race action: ${action.name}`
        );
    }

    return true;
}


// ============================================
// ACTION EFFECTS
// ============================================

function applyRaceActionEffect(
    action
) {
    if (!action) {
        return null;
    }

    const effects = {
        positionChange: 0,
        groupChange: null,
        attack: false,
        breakaway: false,
        supportCaptain: false,
        sprint: false,
        notes: []
    };

    switch (action.id) {
        case "holdPosition":
            effects.positionChange = 0;
            effects.notes.push(
                "Maintained position."
            );
            break;

        case "moveForward":
            effects.positionChange = -5;
            effects.notes.push(
                "Moved toward the front."
            );
            break;

        case "followWheel":
            effects.positionChange = -2;
            effects.notes.push(
                "Stayed in the draft."
            );
            break;

        case "saveEnergy":
            effects.positionChange = 2;
            effects.notes.push(
                "Saved energy."
            );
            break;

        case "waitForTeam":
            effects.positionChange = 1;
            effects.notes.push(
                "Stayed with the team."
            );
            break;

        case "followAttack":
            effects.positionChange = -4;
            effects.notes.push(
                "Responded to the attack."
            );
            break;

        case "closeGap":
            effects.positionChange = -8;
            effects.notes.push(
                "Committed to closing the gap."
            );
            break;

        case "letGo":
            effects.positionChange = 4;
            effects.notes.push(
                "Allowed the move to go."
            );
            break;

        case "counterAttack":
            effects.positionChange = -10;
            effects.attack = true;
            effects.notes.push(
                "Launched a counterattack."
            );
            break;

        case "waitForCaptain":
            effects.positionChange = 1;
            effects.notes.push(
                "Stayed with the captain."
            );
            break;

        case "tryJoinBreakaway":
            effects.positionChange = -7;
            effects.breakaway = true;
            effects.notes.push(
                "Attempted to bridge to the breakaway."
            );
            break;

        case "attackAlone":
            effects.positionChange = -12;
            effects.attack = true;
            effects.breakaway = true;
            effects.notes.push(
                "Attacked alone."
            );
            break;

        case "waitForMoment":
            effects.positionChange = 1;
            effects.notes.push(
                "Waited for a better moment."
            );
            break;

        case "stayInPeloton":
            effects.positionChange = 1;
            effects.notes.push(
                "Stayed in the peloton."
            );
            break;

        case "tempo":
            effects.positionChange = 0;
            effects.notes.push(
                "Set a controlled tempo."
            );
            break;

        case "followClimb":
            effects.positionChange = -4;
            effects.notes.push(
                "Followed the strongest riders."
            );
            break;

        case "attackClimb":
            effects.positionChange = -9;
            effects.attack = true;
            effects.notes.push(
                "Attacked on the climb."
            );
            break;

        case "saveOnClimb":
            effects.positionChange = 3;
            effects.notes.push(
                "Protected energy on the climb."
            );
            break;

        case "prepareSprint":
            effects.positionChange = -6;
            effects.notes.push(
                "Moved into sprint position."
            );
            break;

        case "sprint":
            effects.positionChange = -15;
            effects.sprint = true;
            effects.notes.push(
                "Committed to the sprint."
            );
            break;

        case "attackFinale":
            effects.positionChange = -11;
            effects.attack = true;
            effects.notes.push(
                "Attacked in the finale."
            );
            break;

        case "helpCaptain":
            effects.positionChange = 2;
            effects.supportCaptain = true;
            effects.notes.push(
                "Spent resources helping the captain."
            );
            break;

        default:
            effects.notes.push(
                "Action completed."
            );
    }

    return effects;
}


// ============================================
// EXECUTE ACTION
// ============================================

function executeRaceAction(
    actionId
) {
    if (!raceSimulationState.active) {
        console.warn(
            "Cannot execute race action outside an active race."
        );

        return null;
    }

    const available =
        getAvailableRaceActions();

    const action =
        available.find(
            item =>
                item.id === actionId
        );

    if (!action) {
        console.warn(
            `Action not available: ${actionId}`
        );

        return null;
    }

    const conditionBefore = {
        energy:
            game.player?.energy ?? null,

        fatigue:
            game.player?.fatigue ?? null,

        position:
            raceSimulationState
                .playerPosition,

        groupId:
            raceSimulationState
                .playerGroupId
    };

    applyRaceActionCost(
        action
    );

    const effects =
        applyRaceActionEffect(
            action
        );

    /*
        Position is abstract at this stage.
        The later Race Engine will translate
        this into actual group movement.
    */

    if (
        raceSimulationState.playerPosition
    ) {
        setPlayerRacePosition(
            Math.max(
                1,
                raceSimulationState
                    .playerPosition +
                effects.positionChange
            )
        );
    }

    if (
        effects.attack
    ) {
        createAttack({
            riderId:
                game.player?.id,

            fromGroupId:
                raceSimulationState
                    .playerGroupId,

            strength:
                game.player?.stats
                    ?.acceleration ?? 50
        });
    }

    if (
        effects.breakaway
    ) {
        attemptBreakaway({
            riders: [
                game.player?.id
            ],

            strength:
                game.player?.stats
                    ?.endurance ?? 50
        });
    }

    const result = {
        action,

        effects,

        conditionBefore,

        conditionAfter: {
            energy:
                game.player?.energy ?? null,

            fatigue:
                game.player?.fatigue ?? null,

            position:
                raceSimulationState
                    .playerPosition,

            groupId:
                raceSimulationState
                    .playerGroupId
        },

        km:
            raceSimulationState
                .currentKm,

        phase:
            raceSimulationState.phase,

        date:
            game.career.currentDate
    };

    raceActionState.lastAction =
        result;

    raceActionState.actionHistory.push(
        result
    );

    raceActionState.selectedAction =
        null;

    return result;
}


// ============================================
// ACTION HISTORY
// ============================================

function getRaceActionHistory() {
    return raceActionState.actionHistory;
}

function getLastRaceAction() {
    return raceActionState.lastAction;
}


// ============================================
// PLAYER DECISION SUMMARY
// ============================================

function getRaceDecisionState() {
    return {
        context:
            getRaceActionContext(),

        availableActions:
            getAvailableRaceActions(),

        selectedAction:
            getSelectedRaceAction(),

        lastAction:
            getLastRaceAction(),

        energy:
            game.player?.energy ??
            null,

        fatigue:
            game.player?.fatigue ??
            null,

        form:
            game.player?.form ??
            null,

        position:
            getPlayerRacePosition(),

        group:
            getPlayerRaceGroup()
    };
}


// ============================================
// RESET
// ============================================

function resetRaceActionSystem() {
    raceActionState.availableActions =
        [];

    raceActionState.selectedAction =
        null;

    raceActionState.lastAction =
        null;

    raceActionState.actionHistory =
        [];
}

console.log(
    "Race Actions & Player Decisions system loaded."
);
// ============================================
// CYCLING CAREER
// script.js — Del 19
// Race Decision Resolution Engine
// ============================================

const raceResolutionState = {
    lastResolution: null,
    history: [],
    resolutionCount: 0
};


// ============================================
// 1. RESULT TYPES
// ============================================

const raceResolutionResults = {
    excellent: {
        id: "excellent",
        label: "Excellent",
        strength: 1.0
    },

    success: {
        id: "success",
        label: "Success",
        strength: 0.75
    },

    partial: {
        id: "partial",
        label: "Partial",
        strength: 0.5
    },

    failure: {
        id: "failure",
        label: "Failure",
        strength: 0.25
    },

    poor: {
        id: "poor",
        label: "Poor",
        strength: 0
    }
};


// ============================================
// 2. RESOLUTION CONTEXT
// ============================================

function getRaceResolutionContext() {
    const player = game.player;
    const race = game.currentRace;
    const situation = getCurrentRaceSituation();
    const group = getPlayerRaceGroup();

    if (!player) {
        return null;
    }

    return {
        player,
        race,
        situation,
        group,

        energy: getCurrentEnergy(),
        fatigue: getCurrentFatigue(),
        form: getCurrentForm(),

        position: getPlayerRacePosition(),
        currentKm: getCurrentRaceKm(),
        raceProgress: getRaceProgress(),

        weather: race?.weather || null,
        terrain: race?.terrain || null,

        phase: raceSimulationState.phase
    };
}


// ============================================
// 3. STAT HELPERS
// ============================================

function getPlayerStatValue(statId) {
    if (!game.player || !game.player.stats) {
        return 50;
    }

    const value = game.player.stats[statId];

    if (typeof value === "number") {
        return value;
    }

    return 50;
}


function getPlayerAverageStats(statIds) {
    if (!statIds || statIds.length === 0) {
        return 50;
    }

    const values = statIds.map(statId => getPlayerStatValue(statId));

    return values.reduce((sum, value) => sum + value, 0) / values.length;
}


// ============================================
// 4. ACTION REQUIREMENTS
// ============================================

const raceActionRequirements = {

    holdPosition: [
        "positioning",
        "raceIQ"
    ],

    moveForward: [
        "positioning",
        "technique"
    ],

    followWheel: [
        "positioning",
        "raceIQ"
    ],

    pull: [
        "endurance",
        "teamwork"
    ],

    saveEnergy: [
        "raceIQ",
        "endurance"
    ],

    waitForTeam: [
        "teamwork",
        "raceIQ"
    ],

    followAttack: [
        "raceIQ",
        "acceleration",
        "endurance"
    ],

    closeGap: [
        "endurance",
        "acceleration",
        "raceIQ"
    ],

    letGo: [
        "raceIQ",
        "endurance"
    ],

    counterAttack: [
        "acceleration",
        "endurance",
        "raceIQ"
    ],

    waitForCaptain: [
        "teamwork",
        "raceIQ"
    ],

    tryJoinBreakaway: [
        "endurance",
        "acceleration",
        "raceIQ"
    ],

    attackAlone: [
        "acceleration",
        "endurance",
        "raceIQ"
    ],

    waitForMoment: [
        "raceIQ",
        "mentality"
    ],

    stayInPeloton: [
        "positioning",
        "raceIQ"
    ],

    tempo: [
        "endurance",
        "mountain",
        "raceIQ"
    ],

    followClimb: [
        "mountain",
        "endurance",
        "raceIQ"
    ],

    attackClimb: [
        "mountain",
        "acceleration",
        "endurance"
    ],

    saveOnClimb: [
        "mountain",
        "raceIQ",
        "endurance"
    ],

    prepareSprint: [
        "positioning",
        "sprint",
        "raceIQ"
    ],

    sprint: [
        "sprint",
        "acceleration",
        "positioning"
    ],

    attackFinale: [
        "acceleration",
        "endurance",
        "raceIQ"
    ],

    helpCaptain: [
        "teamwork",
        "endurance",
        "raceIQ"
    ]
};


function getActionRequirements(actionId) {
    return raceActionRequirements[actionId] || [
        "raceIQ",
        "mentality"
    ];
}


// ============================================
// 5. CONTEXT MODIFIERS
// ============================================

function getEnergyModifier(energy) {
    if (energy >= 80) return 1.08;
    if (energy >= 65) return 1.03;
    if (energy >= 50) return 1.0;
    if (energy >= 35) return 0.94;
    if (energy >= 20) return 0.86;

    return 0.75;
}


function getFatigueModifier(fatigue) {
    if (fatigue <= 20) return 1.05;
    if (fatigue <= 40) return 1.0;
    if (fatigue <= 60) return 0.94;
    if (fatigue <= 75) return 0.86;
    if (fatigue <= 90) return 0.75;

    return 0.62;
}


function getFormModifier(form) {
    if (form >= 90) return 1.08;
    if (form >= 80) return 1.04;
    if (form >= 70) return 1.0;
    if (form >= 60) return 0.95;
    if (form >= 50) return 0.89;

    return 0.82;
}


function getPhaseModifier(phase) {
    switch (phase) {
        case "earlyRace":
            return 0.98;

        case "midRace":
            return 1.0;

        case "finale":
            return 1.05;

        case "finish":
            return 1.08;

        default:
            return 1.0;
    }
}


// ============================================
// 6. TERRAIN / WEATHER EFFECTS
// ============================================

function getTerrainActionModifier(actionId, terrain) {
    if (!terrain) {
        return 1.0;
    }

    const terrainId = terrain.id || terrain;

    if (
        terrainId === "mountain" &&
        [
            "followClimb",
            "attackClimb",
            "tempo",
            "saveOnClimb"
        ].includes(actionId)
    ) {
        return 1.08;
    }

    if (
        terrainId === "cobbles" &&
        [
            "moveForward",
            "followWheel",
            "holdPosition"
        ].includes(actionId)
    ) {
        return 1.05;
    }

    if (
        terrainId === "flat" &&
        [
            "prepareSprint",
            "sprint",
            "followWheel"
        ].includes(actionId)
    ) {
        return 1.04;
    }

    return 1.0;
}


function getWeatherActionModifier(actionId, weather) {
    if (!weather) {
        return 1.0;
    }

    const weatherId = weather.type || weather.id || weather;

    if (
        weatherId === "strongWind" &&
        [
            "moveForward",
            "followWheel",
            "pull",
            "closeGap"
        ].includes(actionId)
    ) {
        return 1.05;
    }

    if (
        weatherId === "rain" &&
        [
            "followWheel",
            "moveForward"
        ].includes(actionId)
    ) {
        return 0.96;
    }

    return 1.0;
}


// ============================================
// 7. SITUATION MODIFIER
// ============================================

function getSituationActionModifier(actionId, situation) {
    if (!situation) {
        return 1.0;
    }

    const type = situation.type;

    if (
        type === "attack" &&
        [
            "followAttack",
            "closeGap",
            "counterAttack"
        ].includes(actionId)
    ) {
        return 1.08;
    }

    if (
        type === "breakawayAttempt" &&
        [
            "tryJoinBreakaway",
            "followAttack",
            "stayInPeloton"
        ].includes(actionId)
    ) {
        return 1.05;
    }

    if (
        type === "climb" &&
        [
            "followClimb",
            "attackClimb",
            "tempo",
            "saveOnClimb"
        ].includes(actionId)
    ) {
        return 1.08;
    }

    if (
        type === "finale" &&
        [
            "prepareSprint",
            "sprint",
            "attackFinale"
        ].includes(actionId)
    ) {
        return 1.08;
    }

    return 1.0;
}


// ============================================
// 8. GROUP CONTEXT
// ============================================

function getGroupModifier(actionId, group) {
    if (!group) {
        return 1.0;
    }

    const groupType = group.type;

    if (
        groupType === "peloton" &&
        [
            "saveEnergy",
            "followWheel",
            "holdPosition"
        ].includes(actionId)
    ) {
        return 1.06;
    }

    if (
        groupType === "breakaway" &&
        [
            "pull",
            "saveEnergy",
            "attackAlone"
        ].includes(actionId)
    ) {
        return 1.04;
    }

    if (
        groupType === "chase" &&
        [
            "closeGap",
            "pull",
            "followWheel"
        ].includes(actionId)
    ) {
        return 1.05;
    }

    return 1.0;
}


// ============================================
// 9. BASE DECISION SCORE
// ============================================

function calculateRaceDecisionScore(actionId, context) {
    const requirements = getActionRequirements(actionId);

    const statScore = getPlayerAverageStats(requirements);

    const energyModifier = getEnergyModifier(context.energy);
    const fatigueModifier = getFatigueModifier(context.fatigue);
    const formModifier = getFormModifier(context.form);
    const phaseModifier = getPhaseModifier(context.phase);

    const terrainModifier = getTerrainActionModifier(
        actionId,
        context.terrain
    );

    const weatherModifier = getWeatherActionModifier(
        actionId,
        context.weather
    );

    const situationModifier = getSituationActionModifier(
        actionId,
        context.situation
    );

    const groupModifier = getGroupModifier(
        actionId,
        context.group
    );

    let score = statScore;

    score *= energyModifier;
    score *= fatigueModifier;
    score *= formModifier;
    score *= phaseModifier;
    score *= terrainModifier;
    score *= weatherModifier;
    score *= situationModifier;
    score *= groupModifier;

    return Math.max(0, Math.min(100, score));
}


// ============================================
// 10. UNCERTAINTY
// ============================================

function getDecisionUncertainty(context) {
    const raceIQ = getPlayerStatValue("raceIQ");
    const mentality = getPlayerStatValue("mentality");

    const awareness = (raceIQ + mentality) / 2;

    let uncertainty = 14;

    if (awareness >= 80) {
        uncertainty = 7;
    } else if (awareness >= 65) {
        uncertainty = 10;
    } else if (awareness < 45) {
        uncertainty = 19;
    }

    if (context.fatigue >= 75) {
        uncertainty += 4;
    }

    if (context.phase === "finale") {
        uncertainty += 3;
    }

    return uncertainty;
}


function applyDecisionUncertainty(score, context) {
    const uncertainty = getDecisionUncertainty(context);

    const randomFactor =
        (Math.random() * uncertainty * 2) - uncertainty;

    return Math.max(
        0,
        Math.min(100, score + randomFactor)
    );
}


// ============================================
// 11. RESULT CLASSIFICATION
// ============================================

function classifyRaceDecision(score) {
    if (score >= 88) {
        return raceResolutionResults.excellent;
    }

    if (score >= 70) {
        return raceResolutionResults.success;
    }

    if (score >= 52) {
        return raceResolutionResults.partial;
    }

    if (score >= 32) {
        return raceResolutionResults.failure;
    }

    return raceResolutionResults.poor;
}


// ============================================
// 12. POSITION OUTCOME
// ============================================

function calculatePositionChange(actionId, result, context) {
    let change = 0;

    switch (actionId) {
        case "moveForward":
            change = 2;

            if (result.id === "excellent") {
                change = 7;
            } else if (result.id === "success") {
                change = 5;
            } else if (result.id === "partial") {
                change = 2;
            } else {
                change = 0;
            }
            break;

        case "followWheel":
            change = result.id === "poor" ? -2 : 1;
            break;

        case "holdPosition":
            change = result.id === "poor" ? -3 : 0;
            break;

        case "closeGap":
            if (result.id === "excellent") change = 8;
            else if (result.id === "success") change = 5;
            else if (result.id === "partial") change = 2;
            else change = -2;
            break;

        case "attackFinale":
        case "attackClimb":
        case "counterAttack":
            if (result.id === "excellent") change = 10;
            else if (result.id === "success") change = 6;
            else if (result.id === "partial") change = 2;
            else change = -4;
            break;

        case "sprint":
            if (result.id === "excellent") change = 12;
            else if (result.id === "success") change = 8;
            else if (result.id === "partial") change = 3;
            else change = -5;
            break;

        case "saveEnergy":
        case "saveOnClimb":
            if (result.id === "excellent") change = -1;
            else if (result.id === "success") change = -1;
            else if (result.id === "partial") change = -2;
            else change = -4;
            break;

        default:
            if (result.id === "excellent") {
                change = 4;
            } else if (result.id === "success") {
                change = 2;
            } else if (result.id === "poor") {
                change = -3;
            }
            break;
    }

    return change;
}


function applyRacePositionChange(change) {
    const currentPosition = getPlayerRacePosition();

    const newPosition = Math.max(
        1,
        currentPosition - change
    );

    raceSimulationState.playerPosition = newPosition;

    return newPosition;
}


// ============================================
// 13. GROUP OUTCOME
// ============================================

function determineGroupOutcome(actionId, result, context) {
    if (!context.group) {
        return {
            type: "unchanged",
            groupId: null
        };
    }

    const currentGroup = context.group;

    if (
        actionId === "tryJoinBreakaway" &&
        result.id !== "poor"
    ) {
        const breakaway = raceSimulationState.groups.find(
            group => group.type === "breakaway"
        );

        if (breakaway) {
            return {
                type: result.id === "excellent"
                    ? "joinedBreakaway"
                    : "attemptedBreakaway",
                groupId: breakaway.id
            };
        }
    }

    if (
        actionId === "stayInPeloton" ||
        actionId === "saveEnergy"
    ) {
        return {
            type: "stay",
            groupId: currentGroup.id
        };
    }

    if (
        actionId === "closeGap" &&
        result.id === "excellent"
    ) {
        return {
            type: "gapClosed",
            groupId: currentGroup.id
        };
    }

    return {
        type: "unchanged",
        groupId: currentGroup.id
    };
}


// ============================================
// 14. ENERGY / FATIGUE EFFECT
// ============================================

function getResolutionPhysicalEffect(actionId, result) {
    const effects = {
        excellent: {
            energy: -2,
            fatigue: 2
        },

        success: {
            energy: -4,
            fatigue: 4
        },

        partial: {
            energy: -5,
            fatigue: 5
        },

        failure: {
            energy: -7,
            fatigue: 7
        },

        poor: {
            energy: -9,
            fatigue: 9
        }
    };

    const base = effects[result.id] || effects.partial;

    const actionMultipliers = {
        saveEnergy: 0.35,
        saveOnClimb: 0.45,
        holdPosition: 0.55,
        followWheel: 0.65,
        waitForTeam: 0.5,
        letGo: 0.4,
        waitForCaptain: 0.45,
        pull: 1.25,
        closeGap: 1.3,
        counterAttack: 1.4,
        attackAlone: 1.5,
        attackClimb: 1.45,
        sprint: 1.2,
        attackFinale: 1.4
    };

    const multiplier =
        actionMultipliers[actionId] || 1.0;

    return {
        energy: Math.round(base.energy * multiplier),
        fatigue: Math.round(base.fatigue * multiplier)
    };
}


function applyResolutionPhysicalEffect(effect) {
    if (effect.energy < 0) {
        consumeEnergy(Math.abs(effect.energy));
    } else if (effect.energy > 0) {
        addEnergy(effect.energy);
    }

    if (effect.fatigue > 0) {
        addFatigue(effect.fatigue);
    } else if (effect.fatigue < 0) {
        reduceFatigue(Math.abs(effect.fatigue));
    }
}


// ============================================
// 15. SPECIAL OUTCOMES
// ============================================

function determineSpecialOutcome(actionId, result, context) {
    const outcome = {
        attack: false,
        breakaway: false,
        sprintPrepared: false,
        captainSupported: false
    };

    if (
        [
            "attackFinale",
            "attackClimb",
            "counterAttack",
            "attackAlone"
        ].includes(actionId) &&
        result.id !== "poor"
    ) {
        outcome.attack = true;
    }

    if (
        actionId === "tryJoinBreakaway" &&
        ["excellent", "success"].includes(result.id)
    ) {
        outcome.breakaway = true;
    }

    if (
        actionId === "prepareSprint" &&
        result.id !== "poor"
    ) {
        outcome.sprintPrepared = true;
    }

    if (
        actionId === "helpCaptain" &&
        result.id !== "poor"
    ) {
        outcome.captainSupported = true;
    }

    return outcome;
}


// ============================================
// 16. MAIN RESOLUTION FUNCTION
// ============================================

function resolveRaceDecision(actionId) {
    if (!raceSimulationState.active) {
        console.warn("Cannot resolve race decision: race is not active.");
        return null;
    }

    const context = getRaceResolutionContext();

    if (!context) {
        console.warn("Cannot resolve race decision: missing player.");
        return null;
    }

    const baseScore = calculateRaceDecisionScore(
        actionId,
        context
    );

    const finalScore = applyDecisionUncertainty(
        baseScore,
        context
    );

    const result = classifyRaceDecision(finalScore);

    const positionChange = calculatePositionChange(
        actionId,
        result,
        context
    );

    const newPosition = applyRacePositionChange(
        positionChange
    );

    const groupOutcome = determineGroupOutcome(
        actionId,
        result,
        context
    );

    const physicalEffect = getResolutionPhysicalEffect(
        actionId,
        result
    );

    applyResolutionPhysicalEffect(
        physicalEffect
    );

    const specialOutcome = determineSpecialOutcome(
        actionId,
        result,
        context
    );

    const resolution = {
        id: `resolution-${Date.now()}-${raceResolutionState.resolutionCount + 1}`,

        actionId,

        result: result.id,
        resultLabel: result.label,

        score: Math.round(finalScore),

        previousPosition: context.position,
        positionChange,
        newPosition,

        groupOutcome,

        physicalEffect,

        specialOutcome,

        situation: context.situation
            ? context.situation.type
            : null,

        phase: context.phase,

        km: context.currentKm,

        timestamp: Date.now()
    };

    raceResolutionState.lastResolution = resolution;
    raceResolutionState.history.push(resolution);
    raceResolutionState.resolutionCount++;

    return resolution;
}


// ============================================
// 17. HUMAN-READABLE OUTCOME
// ============================================

function getRaceDecisionOutcomeText(resolution) {
    if (!resolution) {
        return "No decision was resolved.";
    }

    switch (resolution.result) {
        case "excellent":
            return "The decision worked extremely well.";

        case "success":
            return "The decision worked well.";

        case "partial":
            return "The decision had mixed results.";

        case "failure":
            return "The decision did not work as planned.";

        case "poor":
            return "The decision went badly.";

        default:
            return "The situation developed unpredictably.";
    }
}


// ============================================
// 18. LAST RESOLUTION / HISTORY
// ============================================

function getLastRaceResolution() {
    return raceResolutionState.lastResolution;
}


function getRaceResolutionHistory() {
    return [...raceResolutionState.history];
}


function clearRaceResolutionHistory() {
    raceResolutionState.history = [];
    raceResolutionState.lastResolution = null;
    raceResolutionState.resolutionCount = 0;
}


// ============================================
// 19. RESOLUTION SUMMARY
// ============================================

function getRaceResolutionSummary() {
    const last = getLastRaceResolution();

    return {
        totalDecisions: raceResolutionState.resolutionCount,

        lastResult: last
            ? last.resultLabel
            : null,

        lastAction: last
            ? last.actionId
            : null,

        lastPosition: last
            ? last.newPosition
            : getPlayerRacePosition(),

        lastGroupOutcome: last
            ? last.groupOutcome.type
            : null,

        lastPhysicalEffect: last
            ? last.physicalEffect
            : null
    };
}


// ============================================
// 20. RESET
// ============================================

function resetRaceResolutionState() {
    raceResolutionState.lastResolution = null;
    raceResolutionState.history = [];
    raceResolutionState.resolutionCount = 0;
}
// ============================================
// CYCLING CAREER
// script.js — Del 20
// Rivaler & Race World Simulation
// ============================================

const raceWorldState = {
    riders: [],
    activeRiders: [],
    events: [],
    simulationStep: 0
};


// ============================================
// 1. RACE RIDER ROLES
// ============================================

const raceRiderRoles = {
    captain: {
        id: "captain",
        label: "Captain",
        priority: 1
    },

    leader: {
        id: "leader",
        label: "Leader",
        priority: 2
    },

    climber: {
        id: "climber",
        label: "Climber",
        priority: 3
    },

    sprinter: {
        id: "sprinter",
        label: "Sprinter",
        priority: 3
    },

    classics: {
        id: "classics",
        label: "Classics Rider",
        priority: 3
    },

    domestique: {
        id: "domestique",
        label: "Domestique",
        priority: 5
    },

    breakaway: {
        id: "breakaway",
        label: "Breakaway Rider",
        priority: 4
    },

    helper: {
        id: "helper",
        label: "Helper",
        priority: 5
    }
};


// ============================================
// 2. RACE RIDER CREATION
// ============================================

function createRaceWorldRider(data = {}) {
    const rider = {
        id: data.id || `race-rider-${Date.now()}-${Math.random()}`,

        name: data.name || "Unknown Rider",
        team: data.team || null,
        nationality: data.nationality || null,

        role: data.role || "helper",

        position: data.position || 100,
        groupId: data.groupId || null,

        energy: typeof data.energy === "number"
            ? data.energy
            : 100,

        fatigue: typeof data.fatigue === "number"
            ? data.fatigue
            : 0,

        form: typeof data.form === "number"
            ? data.form
            : 75,

        stats: data.stats || {},

        raceGoal: data.raceGoal || "team",

        status: "active",

        attacking: false,
        chasing: false,
        protectingCaptain: false,
        sprinting: false,

        lastAction: null,
        lastActionKm: null
    };

    return rider;
}


// ============================================
// 3. ADD / REMOVE RIDERS
// ============================================

function addRaceWorldRider(rider) {
    if (!rider || !rider.id) {
        return null;
    }

    const existing = raceWorldState.riders.find(
        existingRider => existingRider.id === rider.id
    );

    if (existing) {
        return existing;
    }

    raceWorldState.riders.push(rider);

    return rider;
}


function removeRaceWorldRider(riderId) {
    raceWorldState.riders =
        raceWorldState.riders.filter(
            rider => rider.id !== riderId
        );

    raceWorldState.activeRiders =
        raceWorldState.activeRiders.filter(
            rider => rider.id !== riderId
        );
}


function getRaceWorldRider(riderId) {
    return raceWorldState.riders.find(
        rider => rider.id === riderId
    ) || null;
}


function getActiveRaceWorldRiders() {
    return raceWorldState.riders.filter(
        rider => rider.status === "active"
    );
}


// ============================================
// 4. RIDER STAT HELPERS
// ============================================

function getRaceWorldRiderStat(rider, statId) {
    if (!rider || !rider.stats) {
        return 50;
    }

    const value = rider.stats[statId];

    return typeof value === "number"
        ? value
        : 50;
}


function getRaceWorldAverageStat(rider, statIds) {
    if (!statIds || statIds.length === 0) {
        return 50;
    }

    const values = statIds.map(
        statId => getRaceWorldRiderStat(rider, statId)
    );

    return values.reduce(
        (sum, value) => sum + value,
        0
    ) / values.length;
}


// ============================================
// 5. ROLE → RACE PRIORITY
// ============================================

function getRaceRolePriority(rider) {
    const role = raceRiderRoles[rider?.role];

    return role
        ? role.priority
        : 5;
}


function getRaceRoleDefinition(roleId) {
    return raceRiderRoles[roleId] || null;
}


// ============================================
// 6. RIDER GOAL
// ============================================

const raceWorldGoals = {
    gc: {
        id: "gc",
        label: "GC",
        stats: [
            "endurance",
            "mountain",
            "raceIQ"
        ]
    },

    stage: {
        id: "stage",
        label: "Stage",
        stats: [
            "endurance",
            "acceleration",
            "raceIQ"
        ]
    },

    sprint: {
        id: "sprint",
        label: "Sprint",
        stats: [
            "sprint",
            "acceleration",
            "positioning"
        ]
    },

    breakaway: {
        id: "breakaway",
        label: "Breakaway",
        stats: [
            "endurance",
            "acceleration",
            "raceIQ"
        ]
    },

    classics: {
        id: "classics",
        label: "Classics",
        stats: [
            "hill",
            "cobblestones",
            "positioning"
        ]
    },

    team: {
        id: "team",
        label: "Team",
        stats: [
            "teamwork",
            "endurance",
            "raceIQ"
        ]
    }
};


function getRaceWorldGoal(goalId) {
    return raceWorldGoals[goalId]
        || raceWorldGoals.team;
}


// ============================================
// 7. GOAL COMPATIBILITY
// ============================================

function calculateRiderGoalStrength(rider) {
    const goal = getRaceWorldGoal(
        rider.raceGoal
    );

    return getRaceWorldAverageStat(
        rider,
        goal.stats
    );
}


// ============================================
// 8. RIDER RACE STRENGTH
// ============================================

function calculateRaceWorldRiderStrength(
    rider,
    context = {}
) {
    if (!rider) {
        return 0;
    }

    let strength = calculateRiderGoalStrength(
        rider
    );

    const energyModifier =
        Math.max(0.55, rider.energy / 100);

    const fatigueModifier =
        Math.max(0.60, 1 - (rider.fatigue / 250));

    const formModifier =
        Math.max(0.70, rider.form / 100);

    strength *= energyModifier;
    strength *= fatigueModifier;
    strength *= formModifier;

    return Math.max(
        0,
        Math.min(100, strength)
    );
}


// ============================================
// 9. RIDER ACTION TYPES
// ============================================

const raceWorldActions = {
    maintain: {
        id: "maintain",
        label: "Maintain"
    },

    moveForward: {
        id: "moveForward",
        label: "Move Forward"
    },

    follow: {
        id: "follow",
        label: "Follow"
    },

    pull: {
        id: "pull",
        label: "Pull"
    },

    attack: {
        id: "attack",
        label: "Attack"
    },

    chase: {
        id: "chase",
        label: "Chase"
    },

    protect: {
        id: "protect",
        label: "Protect Captain"
    },

    saveEnergy: {
        id: "saveEnergy",
        label: "Save Energy"
    },

    prepareSprint: {
        id: "prepareSprint",
        label: "Prepare Sprint"
    }
};


// ============================================
// 10. ACTION SELECTION
// ============================================

function chooseRaceWorldAction(
    rider,
    context = {}
) {
    if (!rider || rider.status !== "active") {
        return "maintain";
    }

    const goal = rider.raceGoal;
    const phase = context.phase;
    const situation = context.situation;

    // Very tired riders naturally protect energy.
    if (rider.energy <= 20 || rider.fatigue >= 85) {
        return "saveEnergy";
    }

    // Sprinters protect energy before the finale.
    if (
        rider.role === "sprinter" &&
        phase !== "finale" &&
        phase !== "finish"
    ) {
        return "saveEnergy";
    }

    // Breakaway riders look for opportunities.
    if (
        rider.role === "breakaway" &&
        situation === "breakawayAttempt"
    ) {
        return "attack";
    }

    // GC leaders normally follow rather than waste energy.
    if (
        (goal === "gc" || rider.role === "captain") &&
        situation === "attack"
    ) {
        return "follow";
    }

    // A classics rider becomes more aggressive
    // on hills and difficult terrain.
    if (
        rider.role === "classics" &&
        (
            context.terrain === "hills" ||
            context.terrain === "cobbles"
        )
    ) {
        return "attack";
    }

    // Sprinters prepare for the finale.
    if (
        rider.role === "sprinter" &&
        phase === "finale"
    ) {
        return "prepareSprint";
    }

    // Domestiques primarily work for the team.
    if (
        rider.role === "domestique" &&
        context.captainNearby
    ) {
        return "protect";
    }

    // Chasing an active attack.
    if (
        situation === "attack" &&
        rider.role !== "domestique"
    ) {
        return "chase";
    }

    return "maintain";
}


// ============================================
// 11. ACTION ENERGY COST
// ============================================

function getRaceWorldActionCost(actionId) {
    const costs = {
        maintain: 1,
        moveForward: 3,
        follow: 3,
        pull: 5,
        attack: 10,
        chase: 8,
        protect: 4,
        saveEnergy: -2,
        prepareSprint: 1
    };

    return costs[actionId] ?? 1;
}


// ============================================
// 12. APPLY WORLD RIDER ACTION
// ============================================

function applyRaceWorldAction(
    rider,
    actionId,
    context = {}
) {
    if (!rider) {
        return null;
    }

    const cost = getRaceWorldActionCost(
        actionId
    );

    if (cost < 0) {
        rider.energy = Math.min(
            100,
            rider.energy + Math.abs(cost)
        );
    } else {
        rider.energy = Math.max(
            0,
            rider.energy - cost
        );
    }

    if (cost >= 5) {
        rider.fatigue = Math.min(
            100,
            rider.fatigue + Math.round(cost * 0.65)
        );
    }

    rider.lastAction = actionId;
    rider.lastActionKm =
        context.currentKm ?? null;

    rider.attacking =
        actionId === "attack";

    rider.chasing =
        actionId === "chase";

    rider.protectingCaptain =
        actionId === "protect";

    rider.sprinting =
        actionId === "prepareSprint";

    return rider;
}


// ============================================
// 13. TEAM RELATIONSHIP
// ============================================

function areRaceWorldTeammates(
    riderA,
    riderB
) {
    if (!riderA || !riderB) {
        return false;
    }

    return (
        riderA.team &&
        riderB.team &&
        riderA.team === riderB.team
    );
}


// ============================================
// 14. CAPTAIN SEARCH
// ============================================

function findTeamCaptain(
    rider,
    riders = raceWorldState.riders
) {
    if (!rider || !rider.team) {
        return null;
    }

    return riders.find(
        other =>
            other.team === rider.team &&
            (
                other.role === "captain" ||
                other.role === "leader"
            ) &&
            other.status === "active"
    ) || null;
}


// ============================================
// 15. NEARBY TEAMMATES
// ============================================

function getNearbyTeammates(
    rider,
    riders = raceWorldState.riders,
    maxPositionDifference = 10
) {
    if (!rider) {
        return [];
    }

    return riders.filter(other => {
        if (other.id === rider.id) {
            return false;
        }

        if (!areRaceWorldTeammates(rider, other)) {
            return false;
        }

        if (other.status !== "active") {
            return false;
        }

        return Math.abs(
            other.position - rider.position
        ) <= maxPositionDifference;
    });
}


// ============================================
// 16. RACE WORLD EVENT
// ============================================

function createRaceWorldEvent(
    type,
    data = {}
) {
    return {
        id: `world-event-${Date.now()}-${raceWorldState.events.length + 1}`,

        type,

        riderId: data.riderId || null,

        action: data.action || null,

        description:
            data.description || "",

        km: data.km ?? getCurrentRaceKm(),

        timestamp: Date.now()
    };
}


function addRaceWorldEvent(event) {
    if (!event) {
        return null;
    }

    raceWorldState.events.push(event);

    return event;
}


// ============================================
// 17. SIMULATE ONE RIDER
// ============================================

function simulateRaceWorldRider(
    rider,
    context = {}
) {
    if (!rider || rider.status !== "active") {
        return null;
    }

    const captain = findTeamCaptain(
        rider
    );

    const nearbyTeammates =
        getNearbyTeammates(rider);

    const riderContext = {
        ...context,

        captainNearby: Boolean(
            captain &&
            Math.abs(
                captain.position -
                rider.position
            ) <= 10
        ),

        nearbyTeammates
    };

    const action = chooseRaceWorldAction(
        rider,
        riderContext
    );

    applyRaceWorldAction(
        rider,
        action,
        riderContext
    );

    return {
        riderId: rider.id,
        action,
        position: rider.position,
        energy: rider.energy,
        fatigue: rider.fatigue
    };
}


// ============================================
// 18. SIMULATE WORLD STEP
// ============================================

function simulateRaceWorldStep(
    context = {}
) {
    const riders =
        getActiveRaceWorldRiders();

    const results = [];

    raceWorldState.simulationStep++;

    riders.forEach(rider => {
        const result =
            simulateRaceWorldRider(
                rider,
                context
            );

        if (result) {
            results.push(result);
        }
    });

    return results;
}


// ============================================
// 19. WORLD RIDER SORTING
// ============================================

function sortRaceWorldRidersByPosition() {
    raceWorldState.riders.sort(
        (a, b) => a.position - b.position
    );

    return raceWorldState.riders;
}


// ============================================
// 20. INITIALIZE RACE WORLD
// ============================================

function initializeRaceWorld(
    riders = []
) {
    raceWorldState.riders = [];
    raceWorldState.activeRiders = [];
    raceWorldState.events = [];
    raceWorldState.simulationStep = 0;

    riders.forEach(riderData => {
        const rider =
            riderData.id
                ? createRaceWorldRider(riderData)
                : createRaceWorldRider({
                    ...riderData
                });

        addRaceWorldRider(rider);
    });

    raceWorldState.activeRiders =
        getActiveRaceWorldRiders();

    sortRaceWorldRidersByPosition();

    return raceWorldState;
}


// ============================================
// 21. WORLD STATE
// ============================================

function getRaceWorldState() {
    return {
        riders: [...raceWorldState.riders],

        activeRiders: [
            ...getActiveRaceWorldRiders()
        ],

        events: [
            ...raceWorldState.events
        ],

        simulationStep:
            raceWorldState.simulationStep
    };
}


// ============================================
// 22. RESET
// ============================================

function resetRaceWorldState() {
    raceWorldState.riders = [];
    raceWorldState.activeRiders = [];
    raceWorldState.events = [];
    raceWorldState.simulationStep = 0;
}
// ============================================
// CYCLING CAREER
// script.js — Del 21
// Race Interaction Engine
// ============================================

const raceInteractionState = {
    activeInteractions: [],
    attacks: [],
    breakaways: [],
    chases: [],
    groupChanges: [],
    lastInteraction: null
};


// ============================================
// 1. INTERACTION TYPES
// ============================================

const raceInteractionTypes = {
    attack: "attack",
    follow: "follow",
    chase: "chase",
    breakaway: "breakaway",
    counterAttack: "counterAttack",
    groupSplit: "groupSplit",
    groupMerge: "groupMerge",
    captainSupport: "captainSupport",
    mechanical: "mechanical"
};


// ============================================
// 2. CREATE INTERACTION
// ============================================

function createRaceInteraction(
    type,
    data = {}
) {
    return {
        id: `interaction-${Date.now()}-${Math.random()}`,

        type,

        riderId: data.riderId || null,
        targetRiderId: data.targetRiderId || null,

        groupId: data.groupId || null,
        targetGroupId: data.targetGroupId || null,

        strength: data.strength ?? 0,

        successful:
            data.successful ?? false,

        description:
            data.description || "",

        km:
            data.km ?? getCurrentRaceKm(),

        timestamp: Date.now()
    };
}


function addRaceInteraction(interaction) {
    if (!interaction) {
        return null;
    }

    raceInteractionState.activeInteractions.push(
        interaction
    );

    raceInteractionState.lastInteraction =
        interaction;

    return interaction;
}


// ============================================
// 3. FIND RACE WORLD RIVALS
// ============================================

function getRaceWorldRivals() {
    if (!game.player) {
        return [];
    }

    return getActiveRaceWorldRiders().filter(
        rider =>
            rider.id !== game.player.id
    );
}


// ============================================
// 4. RIDER STRENGTH FOR SITUATION
// ============================================

function calculateInteractionStrength(
    rider,
    action,
    context = {}
) {
    if (!rider) {
        return 0;
    }

    let stats = [];

    switch (action) {
        case "attack":
            stats = [
                "acceleration",
                "endurance",
                "raceIQ"
            ];
            break;

        case "follow":
            stats = [
                "raceIQ",
                "positioning",
                "endurance"
            ];
            break;

        case "chase":
            stats = [
                "endurance",
                "acceleration",
                "raceIQ"
            ];
            break;

        case "sprint":
            stats = [
                "sprint",
                "acceleration",
                "positioning"
            ];
            break;

        default:
            stats = [
                "endurance",
                "raceIQ"
            ];
    }

    let strength =
        getRaceWorldAverageStat(
            rider,
            stats
        );

    const energyModifier =
        Math.max(
            0.5,
            rider.energy / 100
        );

    const fatigueModifier =
        Math.max(
            0.55,
            1 - rider.fatigue / 220
        );

    const formModifier =
        Math.max(
            0.7,
            rider.form / 100
        );

    strength *= energyModifier;
    strength *= fatigueModifier;
    strength *= formModifier;

    return Math.max(
        0,
        Math.min(100, strength)
    );
}


// ============================================
// 5. SHOULD RIVAL ATTACK?
// ============================================

function shouldRiderAttack(
    rider,
    context = {}
) {
    if (!rider || rider.status !== "active") {
        return false;
    }

    if (
        rider.energy < 35 ||
        rider.fatigue > 70
    ) {
        return false;
    }

    const phase = context.phase;
    const terrain = context.terrain;

    if (
        rider.role === "breakaway" &&
        context.situation === "breakawayAttempt"
    ) {
        return true;
    }

    if (
        rider.role === "classics" &&
        (
            terrain === "hills" ||
            terrain === "cobbles"
        )
    ) {
        return Math.random() < 0.35;
    }

    if (
        rider.role === "climber" &&
        terrain === "mountain"
    ) {
        return Math.random() < 0.4;
    }

    if (
        phase === "finale" &&
        rider.role === "leader"
    ) {
        return Math.random() < 0.25;
    }

    return Math.random() < 0.08;
}


// ============================================
// 6. CREATE RIVAL ATTACK
// ============================================

function createRivalAttack(
    rider,
    context = {}
) {
    if (!shouldRiderAttack(rider, context)) {
        return null;
    }

    const strength =
        calculateInteractionStrength(
            rider,
            "attack",
            context
        );

    const interaction =
        createRaceInteraction(
            raceInteractionTypes.attack,
            {
                riderId: rider.id,
                strength,
                description:
                    `${rider.name} attacks the group.`
            }
        );

    addRaceInteraction(interaction);

    rider.attacking = true;

    addRaceWorldEvent(
        createRaceWorldEvent(
            "attack",
            {
                riderId: rider.id,
                action: "attack",
                description:
                    `${rider.name} attacks.`,
                km: context.currentKm
            }
        )
    );

    return interaction;
}


// ============================================
// 7. CHOOSE RIDERS TO FOLLOW
// ============================================

function getRidersLikelyToFollow(
    attacker,
    riders,
    context = {}
) {
    if (!attacker) {
        return [];
    }

    return riders.filter(rider => {
        if (!rider || rider.id === attacker.id) {
            return false;
        }

        if (rider.status !== "active") {
            return false;
        }

        if (rider.energy < 20) {
            return false;
        }

        const strength =
            calculateInteractionStrength(
                rider,
                "follow",
                context
            );

        const raceIQ =
            getRaceWorldRiderStat(
                rider,
                "raceIQ"
            );

        const threshold =
            48 +
            (raceIQ - 50) * 0.25;

        return strength >= threshold;
    });
}


// ============================================
// 8. RESOLVE ATTACK
// ============================================

function resolveRivalAttack(
    interaction,
    context = {}
) {
    if (!interaction) {
        return null;
    }

    const attacker =
        getRaceWorldRider(
            interaction.riderId
        );

    if (!attacker) {
        return null;
    }

    const rivals =
        getRaceWorldRivals();

    const followers =
        getRidersLikelyToFollow(
            attacker,
            rivals,
            context
        );

    const attackerStrength =
        interaction.strength;

    const followStrength =
        followers.length > 0
            ? followers.reduce(
                (sum, rider) =>
                    sum +
                    calculateInteractionStrength(
                        rider,
                        "follow",
                        context
                    ),
                0
            ) / followers.length
            : 0;

    let successful =
        attackerStrength >
        followStrength;

    if (followers.length === 0) {
        successful = true;
    }

    interaction.successful =
        successful;

    if (successful) {
        createBreakawayFromAttack(
            attacker,
            followers,
            context
        );
    } else {
        attacker.attacking = false;
    }

    return {
        attacker,
        followers,
        successful
    };
}


// ============================================
// 9. CREATE BREAKAWAY
// ============================================

function createBreakawayFromAttack(
    attacker,
    followers = [],
    context = {}
) {
    const riders = [
        attacker,
        ...followers
    ];

    const groupId =
        `breakaway-${Date.now()}`;

    const group =
        createRaceGroup({
            id: groupId,
            type: "breakaway",
            riders: riders.map(
                rider => rider.id
            ),
            position:
                Math.min(
                    ...riders.map(
                        rider => rider.position
                    )
                ),
            gapToPeloton: 0
        });

    addRaceGroup(group);

    riders.forEach(rider => {
        moveRaceWorldRiderToGroup(
            rider,
            groupId
        );

        rider.attacking = false;
        rider.chasing = false;
    });

    raceInteractionState.breakaways.push({
        groupId,
        riders: riders.map(
            rider => rider.id
        ),
        km: context.currentKm
    });

    const interaction =
        createRaceInteraction(
            raceInteractionTypes.breakaway,
            {
                groupId,
                successful: true,
                strength:
                    calculateGroupStrength(riders),
                description:
                    "A breakaway has formed."
            }
        );

    addRaceInteraction(interaction);

    return group;
}


// ============================================
// 10. GROUP STRENGTH
// ============================================

function calculateGroupStrength(
    riders = []
) {
    if (!riders.length) {
        return 0;
    }

    const strengths =
        riders.map(
            rider =>
                calculateRaceWorldRiderStrength(
                    rider
                )
        );

    return strengths.reduce(
        (sum, strength) =>
            sum + strength,
        0
    ) / strengths.length;
}


// ============================================
// 11. MOVE WORLD RIDER TO GROUP
// ============================================

function moveRaceWorldRiderToGroup(
    rider,
    groupId
) {
    if (!rider) {
        return false;
    }

    const oldGroup =
        rider.groupId;

    if (oldGroup) {
        removeRiderFromRaceGroup(
            oldGroup,
            rider.id
        );
    }

    addRiderToRaceGroup(
        groupId,
        rider.id
    );

    rider.groupId = groupId;

    return true;
}


// ============================================
// 12. FIND PLAYER'S GROUP
// ============================================

function getPlayerWorldGroup() {
    if (!game.player) {
        return null;
    }

    const worldRider =
        getRaceWorldRider(
            game.player.id
        );

    if (!worldRider) {
        return null;
    }

    return getRaceGroup(
        worldRider.groupId
    );
}


// ============================================
// 13. PLAYER IMPACT FROM ATTACK
// ============================================

function resolvePlayerAgainstAttack(
    attacker,
    context = {}
) {
    if (!game.player || !attacker) {
        return null;
    }

    const player =
        getRaceWorldRider(
            game.player.id
        );

    if (!player) {
        return null;
    }

    const playerStrength =
        calculateInteractionStrength(
            player,
            "follow",
            context
        );

    const attackerStrength =
        calculateInteractionStrength(
            attacker,
            "attack",
            context
        );

    if (
        playerStrength >=
        attackerStrength
    ) {
        return {
            result: "follow",
            gapCreated: false
        };
    }

    if (
        playerStrength >=
        attackerStrength - 10
    ) {
        return {
            result: "under_pressure",
            gapCreated: false
        };
    }

    return {
        result: "dropped",
        gapCreated: true
    };
}


// ============================================
// 14. CHASE GROUP
// ============================================

function createChaseGroup(
    riders = [],
    targetGroupId = null,
    context = {}
) {
    if (!riders.length) {
        return null;
    }

    const groupId =
        `chase-${Date.now()}`;

    const group =
        createRaceGroup({
            id: groupId,
            type: "chase",
            riders: riders.map(
                rider => rider.id
            ),
            position:
                Math.min(
                    ...riders.map(
                        rider => rider.position
                    )
                ),
            gapToPeloton: 0
        });

    addRaceGroup(group);

    riders.forEach(rider => {
        moveRaceWorldRiderToGroup(
            rider,
            groupId
        );

        rider.chasing = true;
    });

    raceInteractionState.chases.push({
        groupId,
        targetGroupId,
        riders: riders.map(
            rider => rider.id
        ),
        km: context.currentKm
    });

    return group;
}


// ============================================
// 15. RESOLVE CHASE
// ============================================

function resolveChaseGroup(
    chaseGroup,
    targetGroup,
    context = {}
) {
    if (!chaseGroup || !targetGroup) {
        return null;
    }

    const chaseRiders =
        chaseGroup.riders
            .map(id =>
                getRaceWorldRider(id)
            )
            .filter(Boolean);

    const targetRiders =
        targetGroup.riders
            .map(id =>
                getRaceWorldRider(id)
            )
            .filter(Boolean);

    const chaseStrength =
        calculateGroupStrength(
            chaseRiders
        );

    const targetStrength =
        calculateGroupStrength(
            targetRiders
        );

    if (
        chaseStrength >=
        targetStrength
    ) {
        raceInteractionState.groupChanges.push({
            type: "groupMerge",
            from: chaseGroup.id,
            to: targetGroup.id,
            km: context.currentKm
        });

        chaseRiders.forEach(rider => {
            moveRaceWorldRiderToGroup(
                rider,
                targetGroup.id
            );

            rider.chasing = false;
        });

        removeRaceGroup(
            chaseGroup.id
        );

        return "merged";
    }

    return "chasing";
}


// ============================================
// 16. TEAM SUPPORT
// ============================================

function resolveTeamSupport(
    rider,
    context = {}
) {
    if (!rider) {
        return null;
    }

    const captain =
        findTeamCaptain(rider);

    if (!captain) {
        return null;
    }

    const teammates =
        getNearbyTeammates(
            rider
        );

    if (!teammates.length) {
        return null;
    }

    const helpers =
        teammates.filter(
            teammate =>
                teammate.role === "domestique" ||
                teammate.role === "helper"
        );

    if (!helpers.length) {
        return null;
    }

    const helper =
        helpers[0];

    helper.protectingCaptain = true;

    addRaceWorldEvent(
        createRaceWorldEvent(
            "captainSupport",
            {
                riderId: helper.id,
                description:
                    `${helper.name} supports ${captain.name}.`,
                km: context.currentKm
            }
        )
    );

    return {
        captain,
        helper
    };
}


// ============================================
// 17. RUN INTERACTIONS
// ============================================

function simulateRaceInteractions(
    context = {}
) {
    const riders =
        getActiveRaceWorldRiders();

    const results = [];

    // ----------------------------------------
    // Step 1: Rival attacks
    // ----------------------------------------

    riders.forEach(rider => {
        if (
            shouldRiderAttack(
                rider,
                context
            )
        ) {
            const attack =
                createRivalAttack(
                    rider,
                    context
                );

            if (attack) {
                const result =
                    resolveRivalAttack(
                        attack,
                        context
                    );

                results.push({
                    type: "attack",
                    result
                });
            }
        }
    });

    // ----------------------------------------
    // Step 2: Team support
    // ----------------------------------------

    riders.forEach(rider => {
        if (
            rider.role === "domestique" ||
            rider.role === "helper"
        ) {
            const support =
                resolveTeamSupport(
                    rider,
                    context
                );

            if (support) {
                results.push({
                    type: "support",
                    result: support
                });
            }
        }
    });

    // ----------------------------------------
    // Step 3: Sort groups
    // ----------------------------------------

    sortRaceWorldRidersByPosition();

    return results;
}


// ============================================
// 18. INTERACTION STATE
// ============================================

function getRaceInteractionState() {
    return {
        activeInteractions: [
            ...raceInteractionState.activeInteractions
        ],

        attacks: [
            ...raceInteractionState.attacks
        ],

        breakaways: [
            ...raceInteractionState.breakaways
        ],

        chases: [
            ...raceInteractionState.chases
        ],

        groupChanges: [
            ...raceInteractionState.groupChanges
        ],

        lastInteraction:
            raceInteractionState.lastInteraction
    };
}


// ============================================
// 19. RESET
// ============================================

function resetRaceInteractionState() {
    raceInteractionState.activeInteractions = [];
    raceInteractionState.attacks = [];
    raceInteractionState.breakaways = [];
    raceInteractionState.chases = [];
    raceInteractionState.groupChanges = [];
    raceInteractionState.lastInteraction = null;
}
// ============================================
// CYCLING CAREER
// script.js — Del 22
// Race Groups & World Synchronization
// ============================================


// ============================================
// 1. SYNCHRONIZATION STATE
// ============================================

const raceSyncState = {
    lastSync: null,
    syncCount: 0,
    warnings: []
};


// ============================================
// 2. GET ALL RACE GROUPS
// ============================================

function getAllRaceGroups() {
    if (!raceSimulationState.groups) {
        return [];
    }

    return raceSimulationState.groups;
}


function getActiveRaceGroups() {
    return getAllRaceGroups().filter(
        group =>
            group &&
            group.riders &&
            group.riders.length > 0
    );
}


// ============================================
// 3. FIND GROUP FOR WORLD RIDER
// ============================================

function findRaceGroupForWorldRider(
    riderId
) {
    if (!riderId) {
        return null;
    }

    return getActiveRaceGroups().find(
        group =>
            group.riders.includes(riderId)
    ) || null;
}


// ============================================
// 4. FIND WORLD RIDER FOR RACE RIDER
// ============================================

function findWorldRiderForRaceRider(
    riderId
) {
    if (!riderId) {
        return null;
    }

    return getRaceWorldRider(riderId);
}


// ============================================
// 5. ENSURE RIDER GROUP CONSISTENCY
// ============================================

function synchronizeRiderGroup(
    rider
) {
    if (!rider || !rider.id) {
        return false;
    }

    const raceGroup =
        findRaceGroupForWorldRider(
            rider.id
        );

    if (!raceGroup) {
        rider.groupId = null;
        return false;
    }

    rider.groupId = raceGroup.id;

    return true;
}


// ============================================
// 6. ENSURE GROUP RIDER CONSISTENCY
// ============================================

function synchronizeGroupRiders(
    group
) {
    if (!group || !group.riders) {
        return false;
    }

    const validRiders =
        group.riders.filter(
            riderId =>
                Boolean(
                    getRaceWorldRider(riderId)
                )
        );

    group.riders = validRiders;

    return true;
}


// ============================================
// 7. REMOVE DUPLICATE GROUP MEMBERSHIPS
// ============================================

function removeDuplicateGroupMemberships() {
    const seenRiders = new Set();
    let duplicatesRemoved = 0;

    getActiveRaceGroups().forEach(group => {
        group.riders =
            group.riders.filter(riderId => {
                if (seenRiders.has(riderId)) {
                    duplicatesRemoved++;

                    raceSyncState.warnings.push({
                        type: "duplicateGroupMembership",
                        riderId,
                        groupId: group.id
                    });

                    return false;
                }

                seenRiders.add(riderId);

                return true;
            });
    });

    return duplicatesRemoved;
}


// ============================================
// 8. SYNCHRONIZE WORLD RIDERS
// ============================================

function synchronizeWorldRiders() {
    const riders =
        getActiveRaceWorldRiders();

    riders.forEach(rider => {
        synchronizeRiderGroup(rider);
    });

    return riders.length;
}


// ============================================
// 9. SYNCHRONIZE GROUPS
// ============================================

function synchronizeRaceGroups() {
    const groups =
        getActiveRaceGroups();

    groups.forEach(group => {
        synchronizeGroupRiders(group);
    });

    removeDuplicateGroupMemberships();

    return groups.length;
}


// ============================================
// 10. SYNCHRONIZE PLAYER
// ============================================

function synchronizePlayerRaceState() {
    if (!game.player) {
        return false;
    }

    const worldPlayer =
        getRaceWorldRider(
            game.player.id
        );

    if (!worldPlayer) {
        return false;
    }

    const playerGroup =
        findRaceGroupForWorldRider(
            worldPlayer.id
        );

    if (playerGroup) {
        worldPlayer.groupId =
            playerGroup.id;

        raceSimulationState.playerGroupId =
            playerGroup.id;
    } else {
        worldPlayer.groupId = null;

        raceSimulationState.playerGroupId =
            null;
    }

    raceSimulationState.playerPosition =
        worldPlayer.position;

    return true;
}


// ============================================
// 11. SYNCHRONIZE POSITION
// ============================================

function synchronizeRiderPositions() {
    const groups =
        getActiveRaceGroups();

    groups.forEach(group => {
        const riders =
            group.riders
                .map(riderId =>
                    getRaceWorldRider(riderId)
                )
                .filter(Boolean);

        if (!riders.length) {
            return;
        }

        riders.forEach(rider => {
            if (
                typeof rider.position !== "number"
            ) {
                rider.position =
                    group.position || 100;
            }
        });

        const averagePosition =
            riders.reduce(
                (sum, rider) =>
                    sum + rider.position,
                0
            ) / riders.length;

        group.position =
            Math.round(averagePosition);
    });
}


// ============================================
// 12. SORT RIDERS INSIDE GROUP
// ============================================

function sortRidersInsideGroups() {
    getActiveRaceGroups().forEach(group => {
        group.riders.sort(
            (a, b) => {
                const riderA =
                    getRaceWorldRider(a);

                const riderB =
                    getRaceWorldRider(b);

                if (!riderA || !riderB) {
                    return 0;
                }

                return (
                    riderA.position -
                    riderB.position
                );
            }
        );
    });
}


// ============================================
// 13. REBUILD GROUP MEMBERSHIP
// ============================================

function rebuildGroupMembership() {
    const riders =
        getActiveRaceWorldRiders();

    const groups =
        getActiveRaceGroups();

    groups.forEach(group => {
        group.riders = [];
    });

    riders.forEach(rider => {
        if (!rider.groupId) {
            return;
        }

        const group =
            groups.find(
                existingGroup =>
                    existingGroup.id ===
                    rider.groupId
            );

        if (!group) {
            raceSyncState.warnings.push({
                type: "missingGroup",
                riderId: rider.id,
                groupId: rider.groupId
            });

            rider.groupId = null;
            return;
        }

        if (!group.riders.includes(rider.id)) {
            group.riders.push(rider.id);
        }
    });

    return groups;
}


// ============================================
// 14. CLEAN EMPTY GROUPS
// ============================================

function cleanEmptyRaceGroups() {
    const groups =
        getAllRaceGroups();

    const emptyGroups =
        groups.filter(
            group =>
                !group.riders ||
                group.riders.length === 0
        );

    emptyGroups.forEach(group => {
        removeRaceGroup(group.id);
    });

    return emptyGroups.length;
}


// ============================================
// 15. CREATE DEFAULT PLAYER GROUP
// ============================================

function ensurePlayerHasRaceGroup() {
    if (!game.player) {
        return null;
    }

    const player =
        getRaceWorldRider(
            game.player.id
        );

    if (!player) {
        return null;
    }

    const existingGroup =
        findRaceGroupForWorldRider(
            player.id
        );

    if (existingGroup) {
        player.groupId =
            existingGroup.id;

        return existingGroup;
    }

    const peloton =
        getActiveRaceGroups().find(
            group =>
                group.type === "peloton"
        );

    if (!peloton) {
        return null;
    }

    addRiderToRaceGroup(
        peloton.id,
        player.id
    );

    player.groupId =
        peloton.id;

    raceSimulationState.playerGroupId =
        peloton.id;

    return peloton;
}


// ============================================
// 16. SYNCHRONIZE PLAYER POSITION
// ============================================

function synchronizePlayerPosition() {
    if (!game.player) {
        return false;
    }

    const player =
        getRaceWorldRider(
            game.player.id
        );

    if (!player) {
        return false;
    }

    raceSimulationState.playerPosition =
        player.position;

    return true;
}


// ============================================
// 17. FULL SYNCHRONIZATION
// ============================================

function synchronizeRaceWorld() {
    raceSyncState.warnings = [];

    synchronizeRaceGroups();

    rebuildGroupMembership();

    synchronizeWorldRiders();

    ensurePlayerHasRaceGroup();

    synchronizeRiderPositions();

    sortRidersInsideGroups();

    synchronizePlayerRaceState();

    cleanEmptyRaceGroups();

    raceSyncState.syncCount++;

    raceSyncState.lastSync = {
        timestamp: Date.now(),

        riderCount:
            getActiveRaceWorldRiders().length,

        groupCount:
            getActiveRaceGroups().length,

        playerGroupId:
            raceSimulationState.playerGroupId,

        playerPosition:
            raceSimulationState.playerPosition,

        warnings:
            [...raceSyncState.warnings]
    };

    return raceSyncState.lastSync;
}


// ============================================
// 18. VERIFY SYNCHRONIZATION
// ============================================

function verifyRaceWorldSynchronization() {
    const problems = [];

    const riders =
        getActiveRaceWorldRiders();

    const groups =
        getActiveRaceGroups();

    riders.forEach(rider => {
        const group =
            findRaceGroupForWorldRider(
                rider.id
            );

        if (
            rider.groupId &&
            (!group ||
                group.id !== rider.groupId)
        ) {
            problems.push({
                type: "riderGroupMismatch",
                riderId: rider.id,
                riderGroupId: rider.groupId,
                actualGroupId:
                    group
                        ? group.id
                        : null
            });
        }
    });

    groups.forEach(group => {
        group.riders.forEach(riderId => {
            const rider =
                getRaceWorldRider(riderId);

            if (!rider) {
                problems.push({
                    type: "missingWorldRider",
                    groupId: group.id,
                    riderId
                });

                return;
            }

            if (rider.groupId !== group.id) {
                problems.push({
                    type: "groupRiderMismatch",
                    groupId: group.id,
                    riderId,
                    riderGroupId:
                        rider.groupId
                });
            }
        });
    });

    return {
        valid: problems.length === 0,
        problems
    };
}


// ============================================
// 19. GET PLAYER RACE POSITION DATA
// ============================================

function getSynchronizedPlayerRaceData() {
    if (!game.player) {
        return null;
    }

    const player =
        getRaceWorldRider(
            game.player.id
        );

    if (!player) {
        return null;
    }

    const group =
        findRaceGroupForWorldRider(
            player.id
        );

    return {
        riderId: player.id,

        position:
            player.position,

        groupId:
            group
                ? group.id
                : null,

        groupType:
            group
                ? group.type
                : null,

        groupSize:
            group
                ? group.riders.length
                : 0,

        energy:
            player.energy,

        fatigue:
            player.fatigue,

        form:
            player.form
    };
}


// ============================================
// 20. SYNCHRONIZED GROUP DATA
// ============================================

function getSynchronizedRaceGroups() {
    return getActiveRaceGroups().map(
        group => ({
            id: group.id,

            type: group.type,

            position:
                group.position,

            riderCount:
                group.riders.length,

            riders:
                group.riders
                    .map(riderId =>
                        getRaceWorldRider(
                            riderId
                        )
                    )
                    .filter(Boolean)
                    .map(rider => ({
                        id: rider.id,
                        name: rider.name,
                        team: rider.team,
                        position:
                            rider.position,
                        energy:
                            rider.energy,
                        fatigue:
                            rider.fatigue
                    }))
        })
    );
}


// ============================================
// 21. SYNCHRONIZATION SUMMARY
// ============================================

function getRaceSynchronizationSummary() {
    const verification =
        verifyRaceWorldSynchronization();

    return {
        syncCount:
            raceSyncState.syncCount,

        riderCount:
            getActiveRaceWorldRiders().length,

        groupCount:
            getActiveRaceGroups().length,

        player:
            getSynchronizedPlayerRaceData(),

        valid:
            verification.valid,

        problems:
            verification.problems,

        warnings:
            [...raceSyncState.warnings]
    };
}


// ============================================
// 22. RESET
// ============================================

function resetRaceSyncState() {
    raceSyncState.lastSync = null;
    raceSyncState.syncCount = 0;
    raceSyncState.warnings = [];
}
// ============================================
// CYCLING CAREER
// script.js — Del 23
// Race Progression Engine
// ============================================


// ============================================
// 1. PROGRESSION STATE
// ============================================

const raceProgressionState = {
    lastStep: null,
    stepHistory: [],
    totalSteps: 0,
    distanceTravelled: 0,
    nextDecisionKm: null
};


// ============================================
// 2. PROGRESSION SETTINGS
// ============================================

const raceProgressionSettings = {
    earlyRaceStep: 15,
    midRaceStep: 10,
    finaleStep: 3,

    minimumStep: 1,
    maximumStep: 20
};


// ============================================
// 3. GET CURRENT PHASE
// ============================================

function getRaceProgressionPhase() {
    return raceSimulationState.phase;
}


// ============================================
// 4. GET PROGRESSION DISTANCE
// ============================================

function getRaceProgressionStepDistance() {
    const phase =
        getRaceProgressionPhase();

    switch (phase) {
        case "earlyRace":
            return raceProgressionSettings.earlyRaceStep;

        case "midRace":
            return raceProgressionSettings.midRaceStep;

        case "finale":
            return raceProgressionSettings.finaleStep;

        case "finish":
            return 1;

        default:
            return raceProgressionSettings.earlyRaceStep;
    }
}


// ============================================
// 5. CLAMP STEP
// ============================================

function clampRaceProgressionStep(
    distance
) {
    return Math.max(
        raceProgressionSettings.minimumStep,
        Math.min(
            raceProgressionSettings.maximumStep,
            distance
        )
    );
}


// ============================================
// 6. FIND NEXT IMPORTANT POINT
// ============================================

function getNextRaceImportantPoint(
    currentKm,
    race
) {
    if (!race) {
        return null;
    }

    const points = [];

    // ----------------------------------------
    // Climbs
    // ----------------------------------------

    if (Array.isArray(race.climbs)) {
        race.climbs.forEach(climb => {
            if (
                typeof climb.startKm === "number" &&
                climb.startKm > currentKm
            ) {
                points.push({
                    type: "climb",
                    km: climb.startKm,
                    object: climb
                });
            }
        });
    }

    // ----------------------------------------
    // Race features
    // ----------------------------------------

    if (
        Array.isArray(race.features)
    ) {
        race.features.forEach(feature => {
            if (
                feature &&
                typeof feature.km === "number" &&
                feature.km > currentKm
            ) {
                points.push({
                    type: "feature",
                    km: feature.km,
                    object: feature
                });
            }
        });
    }

    // ----------------------------------------
    // Finish
    // ----------------------------------------

    if (
        typeof race.distance === "number" &&
        race.distance > currentKm
    ) {
        points.push({
            type: "finish",
            km: race.distance,
            object: null
        });
    }

    if (!points.length) {
        return null;
    }

    points.sort(
        (a, b) => a.km - b.km
    );

    return points[0];
}


// ============================================
// 7. CALCULATE NEXT STEP
// ============================================

function calculateNextRaceProgressionStep() {
    const race =
        game.currentRace;

    if (!race) {
        return 0;
    }

    const currentKm =
        getCurrentRaceKm();

    const baseStep =
        getRaceProgressionStepDistance();

    const nextPoint =
        getNextRaceImportantPoint(
            currentKm,
            race
        );

    if (!nextPoint) {
        return clampRaceProgressionStep(
            baseStep
        );
    }

    const distanceToPoint =
        nextPoint.km - currentKm;

    if (
        distanceToPoint <=
        baseStep
    ) {
        return Math.max(
            1,
            distanceToPoint
        );
    }

    return clampRaceProgressionStep(
        baseStep
    );
}


// ============================================
// 8. UPDATE RACE PHASE
// ============================================

function updateRaceProgressionPhase() {
    const race =
        game.currentRace;

    if (!race) {
        return raceSimulationState.phase;
    }

    const phase =
        getRacePhaseFromProgress(
            raceSimulationState.currentKm,
            raceSimulationState.totalKm
        );

    raceSimulationState.phase =
        phase;

    return phase;
}


// ============================================
// 9. ADVANCE RACE DISTANCE
// ============================================

function advanceRaceProgressionDistance(
    distance
) {
    if (!raceSimulationState.active) {
        return false;
    }

    const remaining =
        getRemainingRaceDistance();

    const actualDistance =
        Math.min(
            distance,
            remaining
        );

    raceSimulationState.currentKm +=
        actualDistance;

    raceProgressionState.distanceTravelled +=
        actualDistance;

    updateRaceProgressionPhase();

    return actualDistance;
}


// ============================================
// 10. SIMULATE RIDER MOVEMENT
// ============================================

function simulateRaceWorldMovement(
    context = {}
) {
    const riders =
        getActiveRaceWorldRiders();

    riders.forEach(rider => {
        if (
            rider.status !== "active"
        ) {
            return;
        }

        const action =
            rider.lastAction;

        let movement = 0;

        switch (action) {
            case "moveForward":
                movement = 2;
                break;

            case "follow":
                movement = 1;
                break;

            case "pull":
                movement = 1;
                break;

            case "attack":
                movement = 4;
                break;

            case "chase":
                movement = 3;
                break;

            case "protect":
                movement = 0;
                break;

            case "saveEnergy":
                movement = -1;
                break;

            case "prepareSprint":
                movement = 0;
                break;

            default:
                movement = 0;
        }

        rider.position =
            Math.max(
                1,
                rider.position - movement
            );
    });

    sortRaceWorldRidersByPosition();
}


// ============================================
// 11. SIMULATE NATURAL PELOTON MOVEMENT
// ============================================

function simulateNaturalRaceMovement(
    context = {}
) {
    const riders =
        getActiveRaceWorldRiders();

    riders.forEach(rider => {
        if (
            rider.lastAction === "attack" ||
            rider.lastAction === "chase"
        ) {
            return;
        }

        const variation =
            Math.random();

        if (variation < 0.45) {
            rider.position += 1;
        } else if (variation > 0.9) {
            rider.position -= 1;
        }

        rider.position =
            Math.max(
                1,
                rider.position
            );
    });
}


// ============================================
// 12. SIMULATE WORLD STEP
// ============================================

function simulateRaceProgressionWorldStep() {
    const context = {
        phase:
            raceSimulationState.phase,

        situation:
            raceSimulationState.currentSituation
                ? raceSimulationState.currentSituation.type
                : "normal",

        terrain:
            game.currentRace?.terrain || null,

        currentKm:
            raceSimulationState.currentKm
    };

    // Other riders make decisions.
    simulateRaceWorldStep(
        context
    );

    // Their decisions influence positions.
    simulateRaceWorldMovement(
        context
    );

    // Small natural movement keeps the
    // peloton from looking completely static.
    simulateNaturalRaceMovement(
        context
    );

    // Resolve interactions created
    // by those decisions.
    simulateRaceInteractions(
        context
    );

    // Keep the two systems synchronized.
    synchronizeRaceWorld();

    return context;
}


// ============================================
// 13. DETECT NATURAL SITUATIONS
// ============================================

function detectNaturalRaceSituation() {
    const groups =
        getActiveRaceGroups();

    const breakaway =
        groups.find(
            group =>
                group.type === "breakaway"
        );

    const chase =
        groups.find(
            group =>
                group.type === "chase"
        );

    if (
        breakaway &&
        breakaway.riders.length >= 2
    ) {
        return createRaceSituation(
            "breakawayFormed",
            {
                description:
                    "A breakaway is established."
            }
        );
    }

    if (
        chase &&
        chase.riders.length >= 2
    ) {
        return createRaceSituation(
            "attack",
            {
                description:
                    "A chase is developing behind the leaders."
            }
        );
    }

    return null;
}


// ============================================
// 14. CREATE PROGRESSION RECORD
// ============================================

function createRaceProgressionRecord(
    data = {}
) {
    return {
        step:
            raceProgressionState.totalSteps + 1,

        fromKm:
            data.fromKm ?? getCurrentRaceKm(),

        toKm:
            data.toKm ?? getCurrentRaceKm(),

        distance:
            data.distance ?? 0,

        phase:
            data.phase ??
            raceSimulationState.phase,

        situation:
            data.situation || null,

        importantPoint:
            data.importantPoint || null,

        timestamp: Date.now()
    };
}


// ============================================
// 15. MAIN PROGRESSION STEP
// ============================================

function advanceRaceProgression() {
    if (!raceSimulationState.active) {
        return null;
    }

    if (
        raceSimulationState.phase ===
        "completed"
    ) {
        return null;
    }

    const fromKm =
        getCurrentRaceKm();

    const nextStep =
        calculateNextRaceProgressionStep();

    if (nextStep <= 0) {
        return null;
    }

    const importantPoint =
        getNextRaceImportantPoint(
            fromKm,
            game.currentRace
        );

    // Move race forward.
    const travelled =
        advanceRaceProgressionDistance(
            nextStep
        );

    // Let the world act during this section.
    const worldContext =
        simulateRaceProgressionWorldStep();

    // Detect what happened naturally.
    const naturalSituation =
        detectNaturalRaceSituation();

    if (naturalSituation) {
        setCurrentRaceSituation(
            naturalSituation
        );
    }

    // Keep everything synchronized.
    synchronizeRaceWorld();

    const record =
        createRaceProgressionRecord({
            fromKm,

            toKm:
                getCurrentRaceKm(),

            distance:
                travelled,

            phase:
                raceSimulationState.phase,

            situation:
                naturalSituation
                    ? naturalSituation.type
                    : null,

            importantPoint:
                importantPoint
                    ? importantPoint.type
                    : null
        });

    raceProgressionState.totalSteps++;

    raceProgressionState.lastStep =
        record;

    raceProgressionState.stepHistory.push(
        record
    );

    return {
        record,

        worldContext,

        importantPoint,

        situation:
            naturalSituation,

        groups:
            getSynchronizedRaceGroups()
    };
}


// ============================================
// 16. ADVANCE UNTIL IMPORTANT EVENT
// ============================================

function advanceRaceToImportantMoment(
    maxSteps = 10
) {
    const results = [];

    for (
        let i = 0;
        i < maxSteps;
        i++
    ) {
        if (
            !raceSimulationState.active
        ) {
            break;
        }

        const result =
            advanceRaceProgression();

        if (!result) {
            break;
        }

        results.push(result);

        // Stop when something important
        // happens.
        if (
            result.situation ||
            result.importantPoint
        ) {
            break;
        }

        if (
            raceSimulationState.phase ===
            "finale"
        ) {
            break;
        }
    }

    return results;
}


// ============================================
// 17. GET PROGRESSION STATUS
// ============================================

function getRaceProgressionStatus() {
    return {
        currentKm:
            getCurrentRaceKm(),

        totalKm:
            raceSimulationState.totalKm,

        remainingKm:
            getRemainingRaceDistance(),

        progress:
            getRaceProgress(),

        phase:
            raceSimulationState.phase,

        totalSteps:
            raceProgressionState.totalSteps,

        lastStep:
            raceProgressionState.lastStep,

        nextImportantPoint:
            getNextRaceImportantPoint(
                getCurrentRaceKm(),
                game.currentRace
            )
    };
}


// ============================================
// 18. GET PROGRESSION HISTORY
// ============================================

function getRaceProgressionHistory() {
    return [
        ...raceProgressionState.stepHistory
    ];
}


// ============================================
// 19. RESET
// ============================================

function resetRaceProgressionState() {
    raceProgressionState.lastStep = null;
    raceProgressionState.stepHistory = [];
    raceProgressionState.totalSteps = 0;
    raceProgressionState.distanceTravelled = 0;
    raceProgressionState.nextDecisionKm = null;
}
// ============================================
// CYCLING CAREER
// script.js — Del 24
// Race Situation Generator
// ============================================


// ============================================
// 1. SITUATION GENERATOR STATE
// ============================================

const raceSituationGeneratorState = {
    lastGenerated: null,
    history: [],
    situationsGenerated: 0,
    situationsSinceDecision: 0,
    lastDecisionKm: null
};


// ============================================
// 2. SITUATION FREQUENCY
// ============================================

const raceSituationFrequency = {
    earlyRace: {
        breakawayAttempt: 0.35,
        attack: 0.08,
        positionBattle: 0.10,
        crosswinds: 0.08,
        mechanical: 0.03,
        crash: 0.02,
        weatherChange: 0.04,
        fatigue: 0.03
    },

    midRace: {
        breakawayAttempt: 0.08,
        attack: 0.12,
        positionBattle: 0.12,
        crosswinds: 0.10,
        mechanical: 0.03,
        crash: 0.02,
        weatherChange: 0.05,
        fatigue: 0.06
    },

    finale: {
        breakawayAttempt: 0.02,
        attack: 0.28,
        positionBattle: 0.30,
        crosswinds: 0.12,
        mechanical: 0.04,
        crash: 0.03,
        weatherChange: 0.04,
        fatigue: 0.16
    }
};


// ============================================
// 3. SITUATION COOLDOWNS
// ============================================

const raceSituationCooldowns = {
    breakawayAttempt: 8,
    attack: 5,
    positionBattle: 4,
    crosswinds: 10,
    mechanical: 12,
    crash: 12,
    weatherChange: 15,
    fatigue: 6,
    climb: 3,
    descent: 3,
    finale: 2
};


// ============================================
// 4. LAST OCCURRENCE
// ============================================

function getLastSituationOfType(type) {
    for (
        let i =
            raceSituationGeneratorState.history.length - 1;
        i >= 0;
        i--
    ) {
        const situation =
            raceSituationGeneratorState.history[i];

        if (situation.type === type) {
            return situation;
        }
    }

    return null;
}


// ============================================
// 5. COOLDOWN CHECK
// ============================================

function isSituationOnCooldown(type) {
    const last =
        getLastSituationOfType(type);

    if (!last) {
        return false;
    }

    const cooldown =
        raceSituationCooldowns[type] || 0;

    const currentKm =
        getCurrentRaceKm();

    return (
        currentKm - last.km <
        cooldown
    );
}


// ============================================
// 6. BASIC ELIGIBILITY
// ============================================

function canGenerateSituation(type) {
    if (!raceSimulationState.active) {
        return false;
    }

    if (
        raceSimulationState.phase ===
        "beforeRace"
    ) {
        return false;
    }

    if (
        raceSimulationState.phase ===
        "completed"
    ) {
        return false;
    }

    if (isSituationOnCooldown(type)) {
        return false;
    }

    return true;
}


// ============================================
// 7. TERRAIN HELPERS
// ============================================

function getCurrentRaceTerrain() {
    const race =
        game.currentRace;

    if (!race) {
        return null;
    }

    const currentKm =
        getCurrentRaceKm();

    // Check climbs first.
    if (Array.isArray(race.climbs)) {
        const climb =
            race.climbs.find(
                currentClimb => {
                    const start =
                        currentClimb.startKm ?? 0;

                    const end =
                        currentClimb.endKm ??
                        start +
                        (currentClimb.length || 1);

                    return (
                        currentKm >= start &&
                        currentKm <= end
                    );
                }
            );

        if (climb) {
            return "mountain";
        }
    }

    if (race.terrain) {
        return (
            race.terrain.id ||
            race.terrain
        );
    }

    return "mixed";
}


// ============================================
// 8. WEATHER HELPERS
// ============================================

function getCurrentRaceWeather() {
    const race =
        game.currentRace;

    if (!race) {
        return null;
    }

    if (!race.weather) {
        return null;
    }

    return (
        race.weather.type ||
        race.weather.id ||
        race.weather
    );
}


// ============================================
// 9. GROUP SITUATION CHECKS
// ============================================

function hasActiveBreakaway() {
    return getActiveRaceGroups().some(
        group =>
            group.type === "breakaway" &&
            group.riders.length > 0
    );
}


function hasActiveChase() {
    return getActiveRaceGroups().some(
        group =>
            group.type === "chase" &&
            group.riders.length > 0
    );
}


function isPlayerInBreakaway() {
    const playerData =
        getSynchronizedPlayerRaceData();

    return (
        playerData &&
        playerData.groupType ===
        "breakaway"
    );
}


function isPlayerInChase() {
    const playerData =
        getSynchronizedPlayerRaceData();

    return (
        playerData &&
        playerData.groupType ===
        "chase"
    );
}


// ============================================
// 10. PLAYER SITUATION RELEVANCE
// ============================================

function isSituationRelevantToPlayer(
    type
) {
    const playerData =
        getSynchronizedPlayerRaceData();

    if (!playerData) {
        return false;
    }

    switch (type) {
        case "breakawayAttempt":
            return true;

        case "attack":
            return (
                playerData.groupType ===
                    "peloton" ||
                playerData.groupType ===
                    "front" ||
                playerData.groupType ===
                    "chase" ||
                playerData.groupType ===
                    "breakaway"
            );

        case "positionBattle":
            return (
                playerData.position <= 80
            );

        case "crosswinds":
            return true;

        case "mechanical":
            return true;

        case "crash":
            return (
                playerData.position <= 100
            );

        case "weatherChange":
            return true;

        case "fatigue":
            return (
                playerData.energy <= 55 ||
                playerData.fatigue >= 45
            );

        case "climb":
            return true;

        case "descent":
            return true;

        case "finale":
            return true;

        default:
            return true;
    }
}


// ============================================
// 11. CREATE SITUATION
// ============================================

function generateRaceSituation(
    type,
    data = {}
) {
    if (!canGenerateSituation(type)) {
        return null;
    }

    if (
        !isSituationRelevantToPlayer(type)
    ) {
        return null;
    }

    const situation =
        createRaceSituation(
            type,
            {
                description:
                    data.description || "",

                severity:
                    data.severity || "normal",

                playerRelevant: true,

                ...data
            }
        );

    if (!situation) {
        return null;
    }

    raceSituationGeneratorState.lastGenerated =
        situation;

    raceSituationGeneratorState.history.push(
        situation
    );

    raceSituationGeneratorState.situationsGenerated++;

    raceSituationGeneratorState.situationsSinceDecision++;

    return situation;
}


// ============================================
// 12. BREAKAWAY SITUATION
// ============================================

function generateBreakawaySituation() {
    if (hasActiveBreakaway()) {
        return null;
    }

    return generateRaceSituation(
        "breakawayAttempt",
        {
            severity: "normal",

            description:
                "Several riders are trying to get clear."
        }
    );
}


// ============================================
// 13. ATTACK SITUATION
// ============================================

function generateAttackSituation() {
    const riders =
        getRaceWorldRivals();

    if (!riders.length) {
        return null;
    }

    const possibleAttackers =
        riders.filter(
            rider =>
                rider.status === "active" &&
                rider.energy >= 40
        );

    if (!possibleAttackers.length) {
        return null;
    }

    const attacker =
        possibleAttackers[
            Math.floor(
                Math.random() *
                possibleAttackers.length
            )
        ];

    const strength =
        calculateInteractionStrength(
            attacker,
            "attack"
        );

    return generateRaceSituation(
        "attack",
        {
            riderId:
                attacker.id,

            severity:
                strength >= 75
                    ? "high"
                    : "normal",

            description:
                `${attacker.name} attacks the group.`
        }
    );
}


// ============================================
// 14. POSITION BATTLE
// ============================================

function generatePositionBattleSituation() {
    const playerData =
        getSynchronizedPlayerRaceData();

    if (!playerData) {
        return null;
    }

    return generateRaceSituation(
        "positionBattle",
        {
            severity:
                playerData.position <= 30
                    ? "high"
                    : "normal",

            description:
                "The fight for position is intensifying."
        }
    );
}


// ============================================
// 15. CROSSWIND SITUATION
// ============================================

function generateCrosswindSituation() {
    const weather =
        getCurrentRaceWeather();

    const race =
        game.currentRace;

    const hasCrosswindFeature =
        race &&
        Array.isArray(race.features) &&
        race.features.some(
            feature =>
                feature === "crosswinds" ||
                feature?.type === "crosswinds"
        );

    if (
        weather !== "strongWind" &&
        !hasCrosswindFeature
    ) {
        return null;
    }

    return generateRaceSituation(
        "crosswinds",
        {
            severity: "high",

            description:
                "Strong crosswinds are affecting the race."
        }
    );
}


// ============================================
// 16. MECHANICAL SITUATION
// ============================================

function generateMechanicalSituation() {
    const playerData =
        getSynchronizedPlayerRaceData();

    if (!playerData) {
        return null;
    }

    const mechanicalTypes = [
        "frontWheelPuncture",
        "rearWheelPuncture",
        "gearProblem",
        "chainProblem",
        "bikeChange"
    ];

    const mechanicalType =
        mechanicalTypes[
            Math.floor(
                Math.random() *
                mechanicalTypes.length
            )
        ];

    return generateRaceSituation(
        "mechanical",
        {
            mechanicalType,

            severity:
                "high",

            description:
                "A mechanical problem interrupts the race."
        }
    );
}


// ============================================
// 17. CRASH SITUATION
// ============================================

function generateCrashSituation() {
    return generateRaceSituation(
        "crash",
        {
            severity:
                "high",

            description:
                "A crash has disrupted the race."
        }
    );
}


// ============================================
// 18. WEATHER CHANGE
// ============================================

function generateWeatherChangeSituation() {
    const weatherTypes = [
        "sun",
        "cloudy",
        "rain",
        "strongWind",
        "cold",
        "heat",
        "fog"
    ];

    const current =
        getCurrentRaceWeather();

    const alternatives =
        weatherTypes.filter(
            weather =>
                weather !== current
        );

    if (!alternatives.length) {
        return null;
    }

    const newWeather =
        alternatives[
            Math.floor(
                Math.random() *
                alternatives.length
            )
        ];

    return generateRaceSituation(
        "weatherChange",
        {
            newWeather,

            severity:
                "normal",

            description:
                "The weather is changing."
        }
    );
}


// ============================================
// 19. FATIGUE SITUATION
// ============================================

function generateFatigueSituation() {
    const playerData =
        getSynchronizedPlayerRaceData();

    if (!playerData) {
        return null;
    }

    if (
        playerData.energy > 55 &&
        playerData.fatigue < 45
    ) {
        return null;
    }

    return generateRaceSituation(
        "fatigue",
        {
            severity:
                playerData.energy <= 25
                    ? "high"
                    : "normal",

            description:
                "Fatigue is beginning to affect the race."
        }
    );
}


// ============================================
// 20. CLIMB SITUATION
// ============================================

function generateClimbSituation() {
    const terrain =
        getCurrentRaceTerrain();

    if (
        terrain !== "mountain" &&
        terrain !== "mediumMountain" &&
        terrain !== "hills"
    ) {
        return null;
    }

    return generateRaceSituation(
        "climb",
        {
            severity:
                terrain === "mountain"
                    ? "high"
                    : "normal",

            description:
                "The road is climbing and the group is changing."
        }
    );
}


// ============================================
// 21. DESCENT SITUATION
// ============================================

function generateDescentSituation() {
    const race =
        game.currentRace;

    if (!race) {
        return null;
    }

    const technical =
        Array.isArray(race.features) &&
        race.features.some(
            feature =>
                feature === "technicalDescents" ||
                feature?.type === "technicalDescents"
        );

    if (!technical) {
        return null;
    }

    return generateRaceSituation(
        "descent",
        {
            severity:
                "normal",

            description:
                "A technical descent is approaching."
        }
    );
}


// ============================================
// 22. FINALE SITUATION
// ============================================

function generateFinaleSituation() {
    if (
        raceSimulationState.phase !==
        "finale"
    ) {
        return null;
    }

    return generateRaceSituation(
        "finale",
        {
            severity:
                "high",

            description:
                "The race is entering its decisive finale."
        }
    );
}


// ============================================
// 23. WEIGHTED RANDOM TYPE
// ============================================

function chooseWeightedSituationType() {
    const phase =
        raceSimulationState.phase;

    const weights =
        raceSituationFrequency[phase];

    if (!weights) {
        return null;
    }

    const entries =
        Object.entries(weights);

    const total =
        entries.reduce(
            (sum, [, weight]) =>
                sum + weight,
            0
        );

    let random =
        Math.random() * total;

    for (
        const [type, weight]
        of entries
    ) {
        random -= weight;

        if (random <= 0) {
            return type;
        }
    }

    return entries[0][0];
}


// ============================================
// 24. GENERATE RANDOM SITUATION
// ============================================

function generateRandomRaceSituation() {
    if (
        !raceSimulationState.active
    ) {
        return null;
    }

    const type =
        chooseWeightedSituationType();

    if (!type) {
        return null;
    }

    switch (type) {
        case "breakawayAttempt":
            return generateBreakawaySituation();

        case "attack":
            return generateAttackSituation();

        case "positionBattle":
            return generatePositionBattleSituation();

        case "crosswinds":
            return generateCrosswindSituation();

        case "mechanical":
            return generateMechanicalSituation();

        case "crash":
            return generateCrashSituation();

        case "weatherChange":
            return generateWeatherChangeSituation();

        case "fatigue":
            return generateFatigueSituation();

        default:
            return null;
    }
}


// ============================================
// 25. CHECK IMPORTANT TERRAIN
// ============================================

function checkImportantTerrainSituation() {
    const terrain =
        getCurrentRaceTerrain();

    if (
        terrain === "mountain" ||
        terrain === "mediumMountain" ||
        terrain === "hills"
    ) {
        if (
            !isSituationOnCooldown("climb")
        ) {
            return generateClimbSituation();
        }
    }

    return null;
}


// ============================================
// 26. CHECK FINALE
// ============================================

function checkFinaleSituation() {
    if (
        raceSimulationState.phase !==
        "finale"
    ) {
        return null;
    }

    if (
        isSituationOnCooldown("finale")
    ) {
        return null;
    }

    return generateFinaleSituation();
}


// ============================================
// 27. GENERATE NEXT IMPORTANT SITUATION
// ============================================

function generateNextImportantRaceSituation() {
    if (
        !raceSimulationState.active
    ) {
        return null;
    }

    // Terrain takes priority.
    const terrainSituation =
        checkImportantTerrainSituation();

    if (terrainSituation) {
        return terrainSituation;
    }

    // Finale takes priority once reached.
    const finaleSituation =
        checkFinaleSituation();

    if (finaleSituation) {
        return finaleSituation;
    }

    // Otherwise choose from normal
    // race events.
    return generateRandomRaceSituation();
}


// ============================================
// 28. SHOULD STOP FOR PLAYER DECISION?
// ============================================

function shouldStopForRaceDecision(
    situation
) {
    if (!situation) {
        return false;
    }

    if (
        situation.playerRelevant === false
    ) {
        return false;
    }

    const importantTypes = [
        "breakawayAttempt",
        "attack",
        "positionBattle",
        "crosswinds",
        "mechanical",
        "crash",
        "climb",
        "descent",
        "fatigue",
        "finale"
    ];

    if (
        importantTypes.includes(
            situation.type
        )
    ) {
        return true;
    }

    return false;
}


// ============================================
// 29. MARK DECISION
// ============================================

function markRaceDecisionMade() {
    raceSituationGeneratorState.situationsSinceDecision =
        0;

    raceSituationGeneratorState.lastDecisionKm =
        getCurrentRaceKm();
}


// ============================================
// 30. GET LAST SITUATION
// ============================================

function getLastGeneratedRaceSituation() {
    return raceSituationGeneratorState.lastGenerated;
}


// ============================================
// 31. GET SITUATION HISTORY
// ============================================

function getRaceSituationHistory() {
    return [
        ...raceSituationGeneratorState.history
    ];
}


// ============================================
// 32. SITUATION SUMMARY
// ============================================

function getRaceSituationGeneratorSummary() {
    return {
        situationsGenerated:
            raceSituationGeneratorState.situationsGenerated,

        situationsSinceDecision:
            raceSituationGeneratorState.situationsSinceDecision,

        lastDecisionKm:
            raceSituationGeneratorState.lastDecisionKm,

        lastSituation:
            raceSituationGeneratorState.lastGenerated
                ? {
                    type:
                        raceSituationGeneratorState.lastGenerated.type,

                    km:
                        raceSituationGeneratorState.lastGenerated.km,

                    description:
                        raceSituationGeneratorState.lastGenerated.description
                }
                : null
    };
}


// ============================================
// 33. RESET
// ============================================

function resetRaceSituationGeneratorState() {
    raceSituationGeneratorState.lastGenerated = null;
    raceSituationGeneratorState.history = [];
    raceSituationGeneratorState.situationsGenerated = 0;
    raceSituationGeneratorState.situationsSinceDecision = 0;
    raceSituationGeneratorState.lastDecisionKm = null;
}
// ============================================
// CYCLING CAREER
// script.js — Del 25
// Race Engine Controller / Decision Loop
// ============================================

const raceControllerState = {
    active: false,
    pausedForDecision: false,
    raceId: null,
    raceName: null,

    decisionsMade: 0,
    situationsHandled: 0,

    currentActionId: null,
    currentSituationId: null,

    lastDecision: null,
    lastResolution: null,

    eventLog: [],
    decisionLog: [],

    raceStartedAt: null,
    raceFinishedAt: null
};


// ============================================
// RACE CONTROLLER - BASIC HELPERS
// ============================================

function getRaceControllerState() {
    return {
        ...raceControllerState,
        eventLog: [...raceControllerState.eventLog],
        decisionLog: [...raceControllerState.decisionLog]
    };
}


function isRaceControllerActive() {
    return raceControllerState.active === true;
}


function isRacePausedForDecision() {
    return raceControllerState.pausedForDecision === true;
}


function addRaceControllerEvent(type, message, data = {}) {
    const event = {
        id: `race-event-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
        type,
        message,
        km: typeof raceSimulationState.currentKm === "number"
            ? raceSimulationState.currentKm
            : 0,
        timestamp: new Date().toISOString(),
        data
    };

    raceControllerState.eventLog.push(event);

    return event;
}


function addRaceDecisionLog(actionId, situation, resolution) {
    const decision = {
        id: `race-decision-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
        actionId,
        situationId: situation?.id || null,
        situationType: situation?.type || null,
        km: typeof raceSimulationState.currentKm === "number"
            ? raceSimulationState.currentKm
            : 0,
        resolution: resolution || null,
        timestamp: new Date().toISOString()
    };

    raceControllerState.decisionLog.push(decision);
    raceControllerState.lastDecision = decision;

    return decision;
}


// ============================================
// PLAYER WORLD RIDER
// ============================================

function createPlayerRaceWorldRider() {
    if (!game.player) {
        return null;
    }

    const existing = typeof getRaceWorldRider === "function"
        ? getRaceWorldRider(game.player.id)
        : null;

    if (existing) {
        return existing;
    }

    const rider = {
        id: game.player.id || `player-${Date.now()}`,
        name: game.player.name || "Player",
        teamId: game.team?.id || null,
        teamName: game.team?.name || "Unknown Team",

        role: game.player.role || "Development rider",

        stats: {
            ...(game.player.stats || {})
        },

        energy: typeof game.player.energy === "number"
            ? game.player.energy
            : 100,

        fatigue: typeof game.player.fatigue === "number"
            ? game.player.fatigue
            : 0,

        form: typeof game.player.form === "number"
            ? game.player.form
            : 75,

        raceAction: "maintain",
        active: true,
        isPlayer: true
    };

    if (typeof addRaceWorldRider === "function") {
        addRaceWorldRider(rider);
    }

    return rider;
}


// ============================================
// TEAM / ROLE HELPERS
// ============================================

function getPlayerRaceRole() {
    if (typeof getCurrentPlayerRole === "function") {
        return getCurrentPlayerRole();
    }

    if (game.player?.role) {
        return game.player.role;
    }

    if (game.team?.role) {
        return game.team.role;
    }

    return "Development rider";
}


function getPlayerRaceTeam() {
    return game.team || null;
}


// ============================================
// RACE INITIALIZATION
// ============================================

function initializeRaceController(race) {
    if (!race) {
        console.error("Cannot initialize race controller without a race.");
        return false;
    }

    raceControllerState.active = false;
    raceControllerState.pausedForDecision = false;

    raceControllerState.raceId = race.id || null;
    raceControllerState.raceName = race.name || "Unnamed Race";

    raceControllerState.decisionsMade = 0;
    raceControllerState.situationsHandled = 0;

    raceControllerState.currentActionId = null;
    raceControllerState.currentSituationId = null;

    raceControllerState.lastDecision = null;
    raceControllerState.lastResolution = null;

    raceControllerState.eventLog = [];
    raceControllerState.decisionLog = [];

    raceControllerState.raceStartedAt = new Date().toISOString();
    raceControllerState.raceFinishedAt = null;

    return true;
}


// ============================================
// WORLD RIDER SETUP
// ============================================

function prepareRaceWorld(race) {
    if (!race) {
        return false;
    }

    /*
        Playeren skal eksistere både i world-rider-systemet
        og i race-group-systemet.
    */

    createPlayerRaceWorldRider();

    if (typeof initializeRaceWorld === "function") {
        initializeRaceWorld(race);
    }

    /*
        initializeRaceWorld kan have oprettet world riders.
        Derfor sørger vi for player bagefter.
    */

    createPlayerRaceWorldRider();

    if (typeof synchronizeRaceWorld === "function") {
        synchronizeRaceWorld();
    }

    return true;
}


// ============================================
// START RACE
// ============================================

function startControlledRace(race) {
    if (!race) {
        console.error("Cannot start race without a race.");
        return false;
    }

    if (raceControllerState.active) {
        console.warn("A race is already active.");
        return false;
    }

    initializeRaceController(race);

    /*
        Først initialiserer vi den grundlæggende race simulation.
    */

    if (typeof initializeRaceSimulation === "function") {
        initializeRaceSimulation(race);
    }

    /*
        Derefter opretter vi world riders og synkroniserer dem.
    */

    prepareRaceWorld(race);

    /*
        Race simulation skal være aktiv.
    */

    if (typeof startRaceSimulation === "function") {
        startRaceSimulation();
    }

    raceControllerState.active = true;

    addRaceControllerEvent(
        "race-start",
        `Race started: ${race.name || "Unnamed Race"}`
    );

    /*
        Første situation forsøges genereret.
    */

    const firstSituation = generateNextRaceControllerSituation();

    if (firstSituation) {
        prepareRaceDecision(firstSituation);
    }

    return true;
}


// ============================================
// SITUATION GENERATION
// ============================================

function generateNextRaceControllerSituation() {
    if (!raceControllerState.active) {
        return null;
    }

    if (raceControllerState.pausedForDecision) {
        return raceSimulationState.currentSituation || null;
    }

    if (typeof generateNextImportantRaceSituation !== "function") {
        return null;
    }

    const situation = generateNextImportantRaceSituation();

    if (!situation) {
        return null;
    }

    raceControllerState.currentSituationId = situation.id || null;

    return situation;
}


// ============================================
// DECISION PREPARATION
// ============================================

function prepareRaceDecision(situation) {
    if (!situation) {
        return false;
    }

    raceControllerState.pausedForDecision = true;
    raceControllerState.currentSituationId = situation.id || null;

    raceControllerState.situationsHandled += 1;

    addRaceControllerEvent(
        "decision-required",
        `Player decision required: ${situation.type || "unknown situation"}`,
        {
            situationId: situation.id || null,
            situationType: situation.type || null
        }
    );

    return true;
}


// ============================================
// AVAILABLE ACTIONS
// ============================================

function getControllerAvailableRaceActions() {
    if (!raceControllerState.active) {
        return [];
    }

    if (!raceControllerState.pausedForDecision) {
        return [];
    }

    if (typeof getAvailableRaceActions !== "function") {
        return [];
    }

    return getAvailableRaceActions();
}


// ============================================
// ACTION VALIDATION
// ============================================

function canControllerExecuteAction(actionId) {
    if (!raceControllerState.active) {
        return false;
    }

    if (!raceControllerState.pausedForDecision) {
        return false;
    }

    if (!actionId) {
        return false;
    }

    const actions = getControllerAvailableRaceActions();

    return actions.some(action => {
        const id = action.id || action.actionId;
        return id === actionId;
    });
}


// ============================================
// EXECUTE PLAYER DECISION
// ============================================

function executeControlledRaceDecision(actionId) {
    if (!canControllerExecuteAction(actionId)) {
        console.warn(`Race action cannot be executed: ${actionId}`);
        return null;
    }

    const situation = raceSimulationState.currentSituation || null;

    raceControllerState.currentActionId = actionId;

    /*
        Først registrerer vi action gennem Del 18.
    */

    let actionResult = null;

    if (typeof executeRaceAction === "function") {
        actionResult = executeRaceAction(actionId);
    }

    /*
        Derefter lader vi Del 19 afgøre resultatet.
    */

    let resolution = null;

    if (typeof resolveRaceDecision === "function") {
        resolution = resolveRaceDecision(actionId);
    }

    raceControllerState.lastResolution = resolution;

    addRaceDecisionLog(
        actionId,
        situation,
        resolution
    );

    addRaceControllerEvent(
        "decision-resolved",
        `Race decision resolved: ${actionId}`,
        {
            actionId,
            actionResult,
            resolution
        }
    );

    /*
        Spilleren har nu taget sin beslutning.
    */

    raceControllerState.decisionsMade += 1;
    raceControllerState.pausedForDecision = false;

    if (typeof markRaceDecisionMade === "function") {
        markRaceDecisionMade();
    }

    /*
        Synkroniser world/race groups efter beslutningen.
    */

    if (typeof synchronizeRaceWorld === "function") {
        synchronizeRaceWorld();
    }

    return {
        actionId,
        actionResult,
        resolution
    };
}


// ============================================
// NORMAL RACE PROGRESSION
// ============================================

function advanceControlledRace() {
    if (!raceControllerState.active) {
        return {
            success: false,
            reason: "race-not-active"
        };
    }

    if (raceControllerState.pausedForDecision) {
        return {
            success: false,
            reason: "decision-required"
        };
    }

    /*
        World riders reagerer først.
    */

    if (typeof simulateRaceInteractions === "function") {
        simulateRaceInteractions();
    }

    /*
        Derefter synkroniseres grupperne.
    */

    if (typeof synchronizeRaceWorld === "function") {
        synchronizeRaceWorld();
    }

    /*
        Så bevæger selve racen sig frem.
    */

    let progression = null;

    if (typeof advanceRaceProgression === "function") {
        progression = advanceRaceProgression();
    }

    /*
        Hvis progressionen ikke kunne udføres,
        forsøger vi stadig at se om racen er færdig.
    */

    if (isControlledRaceFinished()) {
        finishControlledRace();
        return {
            success: true,
            finished: true,
            progression
        };
    }

    /*
        Efter progression undersøger vi, om der er
        kommet en vigtig situation.
    */

    const situation = generateNextRaceControllerSituation();

    if (situation) {
        prepareRaceDecision(situation);

        return {
            success: true,
            finished: false,
            decisionRequired: true,
            situation,
            progression
        };
    }

    return {
        success: true,
        finished: false,
        decisionRequired: false,
        progression
    };
}


// ============================================
// RUN UNTIL DECISION
// ============================================

function advanceControlledRaceToDecision(maxSteps = 20) {
    if (!raceControllerState.active) {
        return {
            success: false,
            reason: "race-not-active"
        };
    }

    if (raceControllerState.pausedForDecision) {
        return {
            success: true,
            decisionRequired: true,
            situation: raceSimulationState.currentSituation || null
        };
    }

    let steps = 0;

    while (
        steps < maxSteps &&
        raceControllerState.active &&
        !raceControllerState.pausedForDecision
    ) {
        const result = advanceControlledRace();

        steps += 1;

        if (!result.success) {
            break;
        }

        if (result.finished) {
            break;
        }

        if (result.decisionRequired) {
            break;
        }
    }

    return {
        success: true,
        steps,
        decisionRequired: raceControllerState.pausedForDecision,
        finished: !raceControllerState.active,
        situation: raceSimulationState.currentSituation || null
    };
}


// ============================================
// RACE FINISH CHECK
// ============================================

function isControlledRaceFinished() {
    if (!raceSimulationState) {
        return false;
    }

    if (raceSimulationState.phase === "finish") {
        return true;
    }

    if (raceSimulationState.phase === "completed") {
        return true;
    }

    const totalKm = Number(raceSimulationState.totalKm) || 0;
    const currentKm = Number(raceSimulationState.currentKm) || 0;

    if (totalKm > 0 && currentKm >= totalKm) {
        return true;
    }

    return false;
}


// ============================================
// FINISH RACE
// ============================================

function finishControlledRace() {
    if (!raceControllerState.active) {
        return false;
    }

    /*
        Brug den eksisterende race simulation,
        hvis funktionen findes.
    */

    if (typeof finishRaceSimulation === "function") {
        finishRaceSimulation();
    }

    raceControllerState.active = false;
    raceControllerState.pausedForDecision = false;

    raceControllerState.raceFinishedAt = new Date().toISOString();

    addRaceControllerEvent(
        "race-finish",
        `Race finished: ${raceControllerState.raceName}`
    );

    /*
        Sidste synkronisering.
    */

    if (typeof synchronizeRaceWorld === "function") {
        synchronizeRaceWorld();
    }

    return true;
}


// ============================================
// COMPLETE RACE STEP
// ============================================

function runControlledRaceStep(actionId = null) {
    /*
        Hvis spilleren skal træffe et valg,
        kræver vi en action.
    */

    if (raceControllerState.pausedForDecision) {
        if (!actionId) {
            return {
                success: false,
                reason: "decision-required",
                actions: getControllerAvailableRaceActions(),
                situation: raceSimulationState.currentSituation || null
            };
        }

        const decision = executeControlledRaceDecision(actionId);

        if (!decision) {
            return {
                success: false,
                reason: "invalid-action"
            };
        }
    }

    /*
        Efter beslutningen fortsætter racen
        indtil næste vigtige situation.
    */

    return advanceControlledRaceToDecision();
}


// ============================================
// AUTO-ADVANCE
// ============================================

function runControlledRaceUntilDecision(maxSteps = 20) {
    if (!raceControllerState.active) {
        return {
            success: false,
            reason: "race-not-active"
        };
    }

    return advanceControlledRaceToDecision(maxSteps);
}


// ============================================
// RACE EVENT LOG
// ============================================

function getRaceEventLog() {
    return [...raceControllerState.eventLog];
}


function getRaceDecisionLog() {
    return [...raceControllerState.decisionLog];
}


function getLatestRaceEvent() {
    if (raceControllerState.eventLog.length === 0) {
        return null;
    }

    return raceControllerState.eventLog[
        raceControllerState.eventLog.length - 1
    ];
}


function getLatestRaceDecision() {
    if (raceControllerState.decisionLog.length === 0) {
        return null;
    }

    return raceControllerState.decisionLog[
        raceControllerState.decisionLog.length - 1
    ];
}


// ============================================
// CURRENT RACE DECISION STATE
// ============================================

function getCurrentRaceDecisionState() {
    const situation = raceSimulationState.currentSituation || null;

    return {
        active: raceControllerState.active,
        pausedForDecision: raceControllerState.pausedForDecision,

        raceId: raceControllerState.raceId,
        raceName: raceControllerState.raceName,

        currentKm: raceSimulationState.currentKm || 0,
        totalKm: raceSimulationState.totalKm || 0,

        phase: raceSimulationState.phase || null,

        situation,

        availableActions: getControllerAvailableRaceActions(),

        decisionsMade: raceControllerState.decisionsMade,
        situationsHandled: raceControllerState.situationsHandled,

        lastDecision: raceControllerState.lastDecision,
        lastResolution: raceControllerState.lastResolution
    };
}


// ============================================
// RACE SUMMARY FOR UI
// ============================================

function getRaceControllerSummary() {
    return {
        active: raceControllerState.active,

        race: {
            id: raceControllerState.raceId,
            name: raceControllerState.raceName
        },

        progress: {
            currentKm: raceSimulationState.currentKm || 0,
            totalKm: raceSimulationState.totalKm || 0,
            phase: raceSimulationState.phase || null
        },

        decision: {
            required: raceControllerState.pausedForDecision,
            situation: raceSimulationState.currentSituation || null,
            availableActions: getControllerAvailableRaceActions()
        },

        statistics: {
            decisionsMade: raceControllerState.decisionsMade,
            situationsHandled: raceControllerState.situationsHandled
        },

        lastResolution: raceControllerState.lastResolution
    };
}


// ============================================
// RESET
// ============================================

function resetRaceController() {
    raceControllerState.active = false;
    raceControllerState.pausedForDecision = false;

    raceControllerState.raceId = null;
    raceControllerState.raceName = null;

    raceControllerState.decisionsMade = 0;
    raceControllerState.situationsHandled = 0;

    raceControllerState.currentActionId = null;
    raceControllerState.currentSituationId = null;

    raceControllerState.lastDecision = null;
    raceControllerState.lastResolution = null;

    raceControllerState.eventLog = [];
    raceControllerState.decisionLog = [];

    raceControllerState.raceStartedAt = null;
    raceControllerState.raceFinishedAt = null;
}


// ============================================
// DEBUG / DEVELOPMENT HELPERS
// ============================================

function debugStartRace(race) {
    console.log("Starting controlled race:", race);

    const started = startControlledRace(race);

    if (!started) {
        console.error("Could not start controlled race.");
        return null;
    }

    console.log(
        "Race controller state:",
        getCurrentRaceDecisionState()
    );

    return getCurrentRaceDecisionState();
}


function debugRaceStep(actionId = null) {
    const result = runControlledRaceStep(actionId);

    console.log("Race step result:", result);
    console.log(
        "Race state:",
        getCurrentRaceDecisionState()
    );

    return result;
}


function debugRaceSummary() {
    console.log(
        "Race controller summary:",
        getRaceControllerSummary()
    );

    return getRaceControllerSummary();
}
// ============================================
// CYCLING CAREER
// script.js — Del 26
// Race Results & Classification Engine
// ============================================

const raceResultsState = {
    active: false,

    raceId: null,
    raceName: null,
    raceType: null,

    results: [],
    teamResults: [],

    classifications: {
        gc: [],
        points: [],
        kom: [],
        youth: []
    },

    stages: [],

    winner: null,
    playerResult: null,

    completed: false,
    createdAt: null
};


// ============================================
// BASIC HELPERS
// ============================================

function getRaceResultsState() {
    return {
        ...raceResultsState,
        results: [...raceResultsState.results],
        teamResults: [...raceResultsState.teamResults],
        classifications: {
            gc: [...raceResultsState.classifications.gc],
            points: [...raceResultsState.classifications.points],
            kom: [...raceResultsState.classifications.kom],
            youth: [...raceResultsState.classifications.youth]
        },
        stages: [...raceResultsState.stages]
    };
}


function resetRaceResults() {
    raceResultsState.active = false;

    raceResultsState.raceId = null;
    raceResultsState.raceName = null;
    raceResultsState.raceType = null;

    raceResultsState.results = [];
    raceResultsState.teamResults = [];

    raceResultsState.classifications = {
        gc: [],
        points: [],
        kom: [],
        youth: []
    };

    raceResultsState.stages = [];

    raceResultsState.winner = null;
    raceResultsState.playerResult = null;

    raceResultsState.completed = false;
    raceResultsState.createdAt = null;
}


// ============================================
// RACE TYPE HELPERS
// ============================================

function isResultsStageRace(race) {
    if (!race) {
        return false;
    }

    if (typeof isStageRace === "function") {
        return isStageRace(race);
    }

    return Array.isArray(race.stages) && race.stages.length > 0;
}


function isResultsOneDayRace(race) {
    if (!race) {
        return false;
    }

    if (typeof isOneDayRace === "function") {
        return isOneDayRace(race);
    }

    return !isResultsStageRace(race);
}


function isResultsGrandTour(race) {
    if (!race) {
        return false;
    }

    return race.type === "grandTour";
}


function isResultsWorlds(race) {
    if (!race) {
        return false;
    }

    return (
        race.type === "worldsRoad" ||
        race.type === "worldsITT"
    );
}


// ============================================
// RESULT RIDER CREATION
// ============================================

function createRaceResultRider(rider, position, totalTime = 0) {
    if (!rider) {
        return null;
    }

    return {
        position,

        riderId: rider.id || null,
        riderName: rider.name || "Unknown Rider",

        teamId: rider.teamId || null,
        teamName: rider.teamName || "Unknown Team",

        country: rider.country || null,

        time: totalTime,
        gap: 0,

        stagePoints: 0,
        komPoints: 0,

        isPlayer: rider.isPlayer === true ||
            rider.id === game.player?.id,

        abandoned: false,
        penalty: 0
    };
}


// ============================================
// RACE WORLD RIDERS
// ============================================

function getResultsWorldRiders() {
    if (typeof getActiveRaceWorldRiders === "function") {
        return getActiveRaceWorldRiders();
    }

    if (
        typeof raceWorldState !== "undefined" &&
        Array.isArray(raceWorldState.riders)
    ) {
        return raceWorldState.riders.filter(rider => rider.active !== false);
    }

    return [];
}


// ============================================
// RIDER RESULT STRENGTH
// ============================================

function getResultStat(rider, statName, fallback = 50) {
    if (!rider) {
        return fallback;
    }

    if (
        rider.stats &&
        typeof rider.stats[statName] === "number"
    ) {
        return rider.stats[statName];
    }

    if (typeof rider[statName] === "number") {
        return rider[statName];
    }

    return fallback;
}


function getRaceResultBaseStrength(rider, race) {
    if (!rider || !race) {
        return 50;
    }

    const sprint = getResultStat(rider, "sprint");
    const acceleration = getResultStat(rider, "acceleration");
    const endurance = getResultStat(rider, "endurance");
    const recovery = getResultStat(rider, "recovery");

    const flat = getResultStat(rider, "flat");
    const hill = getResultStat(rider, "hill");
    const mediumMountain = getResultStat(
        rider,
        "mediumMountain"
    );
    const mountain = getResultStat(rider, "mountain");

    const cobbles = getResultStat(rider, "cobblestones");
    const itt = getResultStat(rider, "itt");

    const positioning = getResultStat(
        rider,
        "positioning"
    );

    const raceIQ = getResultStat(
        rider,
        "raceIQ"
    );

    const technique = getResultStat(
        rider,
        "technique"
    );

    const mentality = getResultStat(
        rider,
        "mentality"
    );

    let strength = 50;

    const terrain = race.terrain || race.terrainType;
    const finish = race.finishType || race.finish;

    switch (terrain) {
        case "flat":
            strength =
                flat * 0.30 +
                sprint * 0.20 +
                acceleration * 0.10 +
                endurance * 0.15 +
                positioning * 0.15 +
                raceIQ * 0.10;
            break;

        case "hills":
        case "rolling":
            strength =
                hill * 0.25 +
                acceleration * 0.15 +
                endurance * 0.15 +
                positioning * 0.15 +
                raceIQ * 0.15 +
                technique * 0.10 +
                mentality * 0.05;
            break;

        case "mediumMountain":
            strength =
                mediumMountain * 0.30 +
                endurance * 0.20 +
                recovery * 0.15 +
                raceIQ * 0.15 +
                mentality * 0.10 +
                positioning * 0.10;
            break;

        case "mountain":
            strength =
                mountain * 0.35 +
                endurance * 0.20 +
                recovery * 0.15 +
                raceIQ * 0.15 +
                mentality * 0.10 +
                positioning * 0.05;
            break;

        case "cobbles":
            strength =
                cobbles * 0.30 +
                technique * 0.20 +
                positioning * 0.15 +
                endurance * 0.15 +
                acceleration * 0.10 +
                raceIQ * 0.10;
            break;

        case "itt":
            strength =
                itt * 0.40 +
                endurance * 0.20 +
                technique * 0.15 +
                raceIQ * 0.15 +
                mentality * 0.10;
            break;

        default:
            strength =
                endurance * 0.20 +
                raceIQ * 0.15 +
                positioning * 0.15 +
                mentality * 0.10 +
                hill * 0.10 +
                mountain * 0.10 +
                flat * 0.10 +
                sprint * 0.10;
    }

    /*
        Finish type just modifies the emphasis.
    */

    if (finish === "sprint") {
        strength += sprint * 0.12;
        strength += acceleration * 0.08;
    }

    if (finish === "uphillSprint") {
        strength += hill * 0.10;
        strength += acceleration * 0.10;
    }

    if (finish === "mountain" || finish === "summit") {
        strength += mountain * 0.12;
        strength += endurance * 0.08;
    }

    if (finish === "itt") {
        strength += itt * 0.15;
    }

    return strength;
}


// ============================================
// FORM / ENERGY / FATIGUE
// ============================================

function getResultsFormModifier(rider) {
    const form = Number(rider?.form);

    if (!Number.isFinite(form)) {
        return 0;
    }

    return (form - 75) * 0.20;
}


function getResultsEnergyModifier(rider) {
    const energy = Number(rider?.energy);

    if (!Number.isFinite(energy)) {
        return 0;
    }

    return (energy - 70) * 0.12;
}


function getResultsFatigueModifier(rider) {
    const fatigue = Number(rider?.fatigue);

    if (!Number.isFinite(fatigue)) {
        return 0;
    }

    return -(fatigue * 0.15);
}


// ============================================
// FINAL RACE STRENGTH
// ============================================

function calculateFinalRaceResultStrength(rider, race) {
    const base = getRaceResultBaseStrength(
        rider,
        race
    );

    const form = getResultsFormModifier(rider);
    const energy = getResultsEnergyModifier(rider);
    const fatigue = getResultsFatigueModifier(rider);

    /*
        Lille kontrollerede variationer.
        Senere kan Race Engine-resultatet give
        langt mere præcise påvirkninger.
    */

    const variation =
        (Math.random() - 0.5) * 8;

    return (
        base +
        form +
        energy +
        fatigue +
        variation
    );
}


// ============================================
// SORT RIDERS
// ============================================

function sortRaceResultRiders(riders, race) {
    return [...riders]
        .map(rider => ({
            rider,
            strength: calculateFinalRaceResultStrength(
                rider,
                race
            )
        }))
        .sort((a, b) => b.strength - a.strength)
        .map(entry => entry.rider);
}


// ============================================
// BUILD RACE RESULTS
// ============================================

function buildRaceResults(race) {
    if (!race) {
        return [];
    }

    const worldRiders = getResultsWorldRiders();

    if (worldRiders.length === 0) {
        console.warn(
            "No world riders available for results."
        );
        return [];
    }

    const sortedRiders = sortRaceResultRiders(
        worldRiders,
        race
    );

    const results = [];

    sortedRiders.forEach((rider, index) => {
        const position = index + 1;

        /*
            Resultatet er endnu ikke baseret på
            præcise sekunder fra Race Engine.
            Derfor bruger vi positionen som
            grundlag for et midlertidigt resultat.
        */

        const result = createRaceResultRider(
            rider,
            position
        );

        if (!result) {
            return;
        }

        results.push(result);
    });

    /*
        Winner.
    */

    if (results.length > 0) {
        results[0].time = 0;
    }

    /*
        Gaps.
        Disse er relative til vinderen.
        Senere kommer den rigtige tidsmodel.
    */

    results.forEach((result, index) => {
        if (index === 0) {
            result.gap = 0;
            return;
        }

        result.gap = calculateResultGap(
            index,
            race
        );
    });

    return results;
}


// ============================================
// GAP CALCULATION
// ============================================

function calculateResultGap(positionIndex, race) {
    const distance = Number(race?.distance) || 150;

    let baseGap = 2;

    if (distance > 200) {
        baseGap = 3;
    }

    if (distance > 250) {
        baseGap = 4;
    }

    const variation =
        Math.random() * 5;

    return Math.round(
        baseGap +
        positionIndex * (0.8 + variation / 10)
    );
}


// ============================================
// TEAM RESULTS
// ============================================

function buildTeamResults(results) {
    const teams = {};

    results.forEach(result => {
        const teamId = result.teamId || "unknown";

        if (!teams[teamId]) {
            teams[teamId] = {
                teamId,
                teamName: result.teamName,
                riders: [],
                teamTime: 0
            };
        }

        teams[teamId].riders.push(result);
    });

    Object.values(teams).forEach(team => {
        /*
            Klassisk holdtid:
            de tre bedste ryttere tæller.
        */

        const counted = [...team.riders]
            .sort((a, b) => a.position - b.position)
            .slice(0, 3);

        team.teamTime = counted.reduce(
            (sum, rider) => sum + rider.gap,
            0
        );
    });

    return Object.values(teams)
        .sort((a, b) => a.teamTime - b.teamTime);
}


// ============================================
// PLAYER RESULT
// ============================================

function findPlayerRaceResult(results) {
    if (!game.player) {
        return null;
    }

    return results.find(result =>
        result.isPlayer === true ||
        result.riderId === game.player.id
    ) || null;
}


// ============================================
// POINTS CLASSIFICATION
// ============================================

function getPointsForPosition(position, race) {
    if (!race) {
        return 0;
    }

    /*
        Grundsystem.
        De præcise pointtabeller for hver
        officiel race kommer senere fra
        race-data.
    */

    const defaultPoints = {
        1: 100,
        2: 80,
        3: 65,
        4: 55,
        5: 50,
        6: 45,
        7: 40,
        8: 36,
        9: 32,
        10: 28
    };

    if (defaultPoints[position]) {
        return defaultPoints[position];
    }

    if (position <= 20) {
        return Math.max(
            2,
            25 - position
        );
    }

    return 0;
}


function calculatePointsClassification(results, race) {
    return results
        .map(result => ({
            riderId: result.riderId,
            riderName: result.riderName,
            teamId: result.teamId,
            teamName: result.teamName,
            points: getPointsForPosition(
                result.position,
                race
            )
        }))
        .sort((a, b) => b.points - a.points);
}


// ============================================
// KOM CLASSIFICATION
// ============================================

function calculateKomClassification(results, race) {
    if (!race?.climbs || race.climbs.length === 0) {
        return [];
    }

    const classification = results.map(result => ({
        riderId: result.riderId,
        riderName: result.riderName,
        teamId: result.teamId,
        teamName: result.teamName,
        points: 0
    }));

    /*
        Første version:
        mountain-specialists får mere KOM-potentiale.
        Den rigtige model kommer når vi simulerer
        hver enkelt climb.
    */

    classification.forEach(entry => {
        const rider = getResultsWorldRiders()
            .find(r => r.id === entry.riderId);

        if (!rider) {
            return;
        }

        const mountain = getResultStat(
            rider,
            "mountain"
        );

        const mediumMountain = getResultStat(
            rider,
            "mediumMountain"
        );

        entry.points = Math.round(
            mountain * 0.7 +
            mediumMountain * 0.3
        );
    });

    return classification.sort(
        (a, b) => b.points - a.points
    );
}


// ============================================
// YOUTH CLASSIFICATION
// ============================================

function getRiderAgeForResults(rider) {
    if (!rider) {
        return 99;
    }

    if (typeof rider.age === "number") {
        return rider.age;
    }

    if (
        rider.dateOfBirth &&
        typeof getCurrentDate === "function"
    ) {
        const currentDate = new Date(
            getCurrentDate()
        );

        const birthDate = new Date(
            rider.dateOfBirth
        );

        let age =
            currentDate.getFullYear() -
            birthDate.getFullYear();

        const birthdayPassed =
            currentDate.getMonth() > birthDate.getMonth() ||
            (
                currentDate.getMonth() === birthDate.getMonth() &&
                currentDate.getDate() >= birthDate.getDate()
            );

        if (!birthdayPassed) {
            age -= 1;
        }

        return age;
    }

    return 99;
}


function calculateYouthClassification(results) {
    return results
        .filter(result => {
            const rider = getResultsWorldRiders()
                .find(r => r.id === result.riderId);

            return getRiderAgeForResults(rider) <= 25;
        })
        .sort((a, b) =>
            a.position - b.position
        )
        .map((result, index) => ({
            ...result,
            youthPosition: index + 1
        }));
}


// ============================================
// GENERAL CLASSIFICATION
// ============================================

function calculateGeneralClassification(results) {
    return [...results]
        .filter(result => !result.abandoned)
        .sort((a, b) => {
            if (a.time !== b.time) {
                return a.time - b.time;
            }

            return a.position - b.position;
        })
        .map((result, index) => ({
            ...result,
            gcPosition: index + 1
        }));
}


// ============================================
// COMPLETE RESULT SET
// ============================================

function generateRaceResultSet(race) {
    if (!race) {
        console.error(
            "Cannot generate results without race."
        );
        return null;
    }

    resetRaceResults();

    raceResultsState.active = true;
    raceResultsState.raceId = race.id || null;
    raceResultsState.raceName =
        race.name || "Unnamed Race";
    raceResultsState.raceType =
        race.type || null;
    raceResultsState.createdAt =
        new Date().toISOString();

    const results = buildRaceResults(race);

    raceResultsState.results = results;

    raceResultsState.teamResults =
        buildTeamResults(results);

    raceResultsState.winner =
        results.length > 0
            ? results[0]
            : null;

    raceResultsState.playerResult =
        findPlayerRaceResult(results);

    raceResultsState.classifications.points =
        calculatePointsClassification(
            results,
            race
        );

    raceResultsState.classifications.kom =
        calculateKomClassification(
            results,
            race
        );

    raceResultsState.classifications.youth =
        calculateYouthClassification(
            results
        );

    raceResultsState.classifications.gc =
        calculateGeneralClassification(
            results
        );

    raceResultsState.completed = true;

    return getRaceResultsState();
}


// ============================================
// STAGE RESULT
// ============================================

function createStageResult(race, stageNumber = 1) {
    if (!race) {
        return null;
    }

    const stage = Array.isArray(race.stages)
        ? race.stages[stageNumber - 1]
        : null;

    if (!stage) {
        console.warn(
            `Stage ${stageNumber} does not exist.`
        );
        return null;
    }

    const stageResults =
        buildRaceResults(stage);

    const stageData = {
        stageNumber,
        stageId: stage.id || null,
        stageName:
            stage.name ||
            `Stage ${stageNumber}`,

        distance: stage.distance || null,

        results: stageResults,

        winner:
            stageResults.length > 0
                ? stageResults[0]
                : null
    };

    raceResultsState.stages.push(stageData);

    return stageData;
}


// ============================================
// STAGE RACE GC
// ============================================

function buildStageRaceGC(stages) {
    if (!Array.isArray(stages) || stages.length === 0) {
        return [];
    }

    const riderTotals = {};

    stages.forEach(stage => {
        stage.results.forEach(result => {
            if (!riderTotals[result.riderId]) {
                riderTotals[result.riderId] = {
                    riderId: result.riderId,
                    riderName: result.riderName,
                    teamId: result.teamId,
                    teamName: result.teamName,
                    time: 0,
                    stages: 0
                };
            }

            riderTotals[result.riderId].time +=
                result.gap;

            riderTotals[result.riderId].stages += 1;
        });
    });

    return Object.values(riderTotals)
        .sort((a, b) => {
            if (a.time !== b.time) {
                return a.time - b.time;
            }

            return b.stages - a.stages;
        })
        .map((result, index) => ({
            ...result,
            position: index + 1
        }));
}


// ============================================
// RACE COMPLETION
// ============================================

function completeRaceResults(race) {
    if (!race) {
        return null;
    }

    /*
        One-day race.
    */

    if (isResultsOneDayRace(race)) {
        return generateRaceResultSet(race);
    }

    /*
        Stage race.
        Vi bygger første stage her.
        Flere stages kobles på senere gennem
        stage-race controlleren.
    */

    if (isResultsStageRace(race)) {
        resetRaceResults();

        raceResultsState.active = true;
        raceResultsState.raceId = race.id || null;
        raceResultsState.raceName =
            race.name || "Unnamed Stage Race";
        raceResultsState.raceType =
            race.type || null;
        raceResultsState.createdAt =
            new Date().toISOString();

        const firstStage =
            createStageResult(race, 1);

        if (firstStage) {
            raceResultsState.classifications.gc =
                buildStageRaceGC(
                    raceResultsState.stages
                );

            raceResultsState.playerResult =
                findPlayerRaceResult(
                    firstStage.results
                );
        }

        raceResultsState.completed = true;

        return getRaceResultsState();
    }

    return generateRaceResultSet(race);
}


// ============================================
// PLAYER RESULT SUMMARY
// ============================================

function getPlayerRaceResultSummary() {
    const result =
        raceResultsState.playerResult;

    if (!result) {
        return null;
    }

    return {
        position: result.position || null,
        gcPosition: result.gcPosition || null,

        riderId: result.riderId,
        riderName: result.riderName,

        teamName: result.teamName,

        gap: result.gap,
        time: result.time,

        points: result.stagePoints || 0,
        komPoints: result.komPoints || 0,

        abandoned: result.abandoned === true
    };
}


// ============================================
// RESULT LOOKUPS
// ============================================

function getRaceResultByPosition(position) {
    return raceResultsState.results.find(
        result => result.position === position
    ) || null;
}


function getRaceResultByRiderId(riderId) {
    return raceResultsState.results.find(
        result => result.riderId === riderId
    ) || null;
}


function getRaceWinner() {
    return raceResultsState.winner;
}


function getRaceTopTen() {
    return raceResultsState.results
        .slice(0, 10);
}


function getRaceTeamResults() {
    return [...raceResultsState.teamResults];
}


function getCurrentRaceClassifications() {
    return {
        gc: [...raceResultsState.classifications.gc],
        points: [...raceResultsState.classifications.points],
        kom: [...raceResultsState.classifications.kom],
        youth: [...raceResultsState.classifications.youth]
    };
}


// ============================================
// RESULT SUMMARY FOR UI
// ============================================

function getRaceResultsSummary() {
    return {
        raceId: raceResultsState.raceId,
        raceName: raceResultsState.raceName,
        raceType: raceResultsState.raceType,

        completed: raceResultsState.completed,

        winner: raceResultsState.winner,

        player: raceResultsState.playerResult,

        topTen: getRaceTopTen(),

        teamResults: raceResultsState.teamResults,

        classifications:
            getCurrentRaceClassifications(),

        stages: [...raceResultsState.stages]
    };
}


// ============================================
// CAREER HISTORY BRIDGE
// ============================================

function createRaceHistoryEntry(race, resultsState) {
    if (!race || !resultsState) {
        return null;
    }

    const playerResult =
        resultsState.playerResult;

    return {
        type: "race-result",

        raceId: race.id || null,
        raceName:
            race.name || "Unnamed Race",

        raceType: race.type || null,

        date:
            typeof getCurrentDate === "function"
                ? getCurrentDate()
                : game.career.currentDate,

        playerPosition:
            playerResult?.position || null,

        playerGap:
            playerResult?.gap || 0,

        winnerId:
            resultsState.winner?.riderId || null,

        winnerName:
            resultsState.winner?.riderName || null,

        teamName:
            playerResult?.teamName || null
    };
}


function saveRaceResultToCareerHistory(race) {
    if (!race || !raceResultsState.completed) {
        return null;
    }

    const entry =
        createRaceHistoryEntry(
            race,
            raceResultsState
        );

    if (!entry) {
        return null;
    }

    /*
        Del 7 forventer allerede addHistoryEntry().
        Hvis den ikke findes endnu, gemmer vi ikke
        noget i history-arrayet endnu.
    */

    if (typeof addHistoryEntry === "function") {
        return addHistoryEntry(entry);
    }

    if (Array.isArray(game.history)) {
        game.history.push(entry);
        return entry;
    }

    return null;
}


// ============================================
// WORLD RESULT BRIDGE
// ============================================

function applyRaceResultsToWorld() {
    if (!raceResultsState.completed) {
        return false;
    }

    const results = raceResultsState.results;

    if (!Array.isArray(results)) {
        return false;
    }

    results.forEach(result => {
        if (
            typeof getRaceWorldRider === "function"
        ) {
            const rider =
                getRaceWorldRider(result.riderId);

            if (!rider) {
                return;
            }

            rider.lastRacePosition =
                result.position;

            rider.lastRaceGap =
                result.gap;

            rider.lastRaceId =
                raceResultsState.raceId;
        }
    });

    return true;
}


// ============================================
// FULL RACE RESULT PIPELINE
// ============================================

function finalizeRaceWithResults(race) {
    if (!race) {
        console.error(
            "Cannot finalize race without race."
        );
        return null;
    }

    const results =
        completeRaceResults(race);

    if (!results) {
        return null;
    }

    applyRaceResultsToWorld();

    saveRaceResultToCareerHistory(race);

    return getRaceResultsSummary();
}


// ============================================
// DEBUG HELPERS
// ============================================

function debugGenerateRaceResults(race) {
    const result =
        finalizeRaceWithResults(race);

    console.log(
        "Race results:",
        result
    );

    return result;
}


function debugShowRaceTopTen() {
    const topTen =
        getRaceTopTen();

    console.table(topTen);

    return topTen;
}


function debugShowPlayerRaceResult() {
    const result =
        getPlayerRaceResultSummary();

    console.log(
        "Player race result:",
        result
    );

    return result;
}
// ============================================
// CYCLING CAREER
// script.js — Del 27
// Stage Race Engine
// ============================================

const stageRaceState = {
    active: false,

    raceId: null,
    raceName: null,
    raceType: null,

    currentStageNumber: 0,
    totalStages: 0,

    completedStages: [],
    currentStage: null,

    generalClassification: [],
    pointsClassification: [],
    komClassification: [],
    youthClassification: [],

    jerseys: {
        gc: null,
        points: null,
        kom: null,
        youth: null
    },

    player: {
        currentStageResult: null,
        gcPosition: null,
        pointsPosition: null,
        komPosition: null,
        youthPosition: null
    },

    finished: false,
    startedAt: null,
    finishedAt: null
};


// ============================================
// STATE HELPERS
// ============================================

function getStageRaceState() {
    return {
        ...stageRaceState,

        completedStages: [...stageRaceState.completedStages],

        generalClassification: [
            ...stageRaceState.generalClassification
        ],

        pointsClassification: [
            ...stageRaceState.pointsClassification
        ],

        komClassification: [
            ...stageRaceState.komClassification
        ],

        youthClassification: [
            ...stageRaceState.youthClassification
        ],

        jerseys: {
            ...stageRaceState.jerseys
        },

        player: {
            ...stageRaceState.player
        }
    };
}


function resetStageRaceState() {
    stageRaceState.active = false;

    stageRaceState.raceId = null;
    stageRaceState.raceName = null;
    stageRaceState.raceType = null;

    stageRaceState.currentStageNumber = 0;
    stageRaceState.totalStages = 0;

    stageRaceState.completedStages = [];
    stageRaceState.currentStage = null;

    stageRaceState.generalClassification = [];
    stageRaceState.pointsClassification = [];
    stageRaceState.komClassification = [];
    stageRaceState.youthClassification = [];

    stageRaceState.jerseys = {
        gc: null,
        points: null,
        kom: null,
        youth: null
    };

    stageRaceState.player = {
        currentStageResult: null,
        gcPosition: null,
        pointsPosition: null,
        komPosition: null,
        youthPosition: null
    };

    stageRaceState.finished = false;

    stageRaceState.startedAt = null;
    stageRaceState.finishedAt = null;
}


// ============================================
// STAGE ACCESS
// ============================================

function getStageRaceStages(race) {
    if (!race || !Array.isArray(race.stages)) {
        return [];
    }

    return race.stages;
}


function getStageRaceStageCount(race) {
    return getStageRaceStages(race).length;
}


function getStageRaceStage(race, stageNumber) {
    const stages = getStageRaceStages(race);

    if (
        stageNumber < 1 ||
        stageNumber > stages.length
    ) {
        return null;
    }

    return stages[stageNumber - 1];
}


function getCurrentStageRaceStage() {
    return stageRaceState.currentStage;
}


function isLastStageRaceStage() {
    return (
        stageRaceState.currentStageNumber >=
        stageRaceState.totalStages
    );
}


// ============================================
// START STAGE RACE
// ============================================

function startStageRace(race) {
    if (!race) {
        console.error(
            "Cannot start stage race without race."
        );

        return false;
    }

    const stages =
        getStageRaceStages(race);

    if (stages.length === 0) {
        console.error(
            "Stage race has no stages."
        );

        return false;
    }

    resetStageRaceState();

    stageRaceState.active = true;

    stageRaceState.raceId =
        race.id || null;

    stageRaceState.raceName =
        race.name || "Unnamed Stage Race";

    stageRaceState.raceType =
        race.type || "stageRace";

    stageRaceState.totalStages =
        stages.length;

    stageRaceState.currentStageNumber = 1;

    stageRaceState.startedAt =
        new Date().toISOString();

    stageRaceState.currentStage =
        getStageRaceStage(
            race,
            1
        );

    /*
        Klassementerne starter tomme.
        Første etape opretter det første resultat.
    */

    stageRaceState.generalClassification = [];
    stageRaceState.pointsClassification = [];
    stageRaceState.komClassification = [];
    stageRaceState.youthClassification = [];

    return true;
}


// ============================================
// STAGE RESULT
// ============================================

function generateCurrentStageResult(race) {
    if (!stageRaceState.active) {
        return null;
    }

    const stage =
        getStageRaceStage(
            race,
            stageRaceState.currentStageNumber
        );

    if (!stage) {
        return null;
    }

    /*
        Vi bruger den eksisterende race-resultatmotor
        til selve etapen.
    */

    const stageResults =
        buildRaceResults(stage);

    if (!stageResults.length) {
        return null;
    }

    const stageData = {
        stageNumber:
            stageRaceState.currentStageNumber,

        stageId:
            stage.id || null,

        stageName:
            stage.name ||
            `Stage ${stageRaceState.currentStageNumber}`,

        distance:
            stage.distance || 0,

        terrain:
            stage.terrain || null,

        finishType:
            stage.finishType || null,

        results: stageResults,

        winner:
            stageResults[0] || null
    };

    stageRaceState.currentStage = stageData;

    return stageData;
}


// ============================================
// STAGE TIME
// ============================================

function getStageRiderTime(result) {
    if (!result) {
        return 0;
    }

    if (
        typeof result.stageTime === "number"
    ) {
        return result.stageTime;
    }

    if (
        typeof result.time === "number"
    ) {
        return result.time;
    }

    return 0;
}


// ============================================
// GENERAL CLASSIFICATION
// ============================================

function updateGeneralClassification() {
    const totals = {};

    stageRaceState.completedStages.forEach(
        stage => {
            stage.results.forEach(
                result => {
                    if (!totals[result.riderId]) {
                        totals[result.riderId] = {
                            riderId: result.riderId,
                            riderName: result.riderName,
                            teamId: result.teamId,
                            teamName: result.teamName,

                            time: 0,
                            stages: 0,

                            stageWins: 0,
                            penalties: 0
                        };
                    }

                    totals[result.riderId].time +=
                        getStageRiderTime(result);

                    totals[result.riderId].stages += 1;

                    if (result.position === 1) {
                        totals[result.riderId]
                            .stageWins += 1;
                    }

                    totals[result.riderId].penalties +=
                        Number(result.penalty) || 0;
                }
            );
        }
    );

    const classification =
        Object.values(totals)
            .map(rider => ({
                ...rider,

                time:
                    rider.time +
                    rider.penalties
            }))
            .sort((a, b) => {
                if (a.time !== b.time) {
                    return a.time - b.time;
                }

                return b.stageWins - a.stageWins;
            })
            .map((rider, index) => ({
                ...rider,
                position: index + 1
            }));

    stageRaceState.generalClassification =
        classification;

    return classification;
}


// ============================================
// STAGE POINTS
// ============================================

function updatePointsClassification(race) {
    const totals = {};

    stageRaceState.completedStages.forEach(
        stage => {
            stage.results.forEach(
                result => {
                    if (!totals[result.riderId]) {
                        totals[result.riderId] = {
                            riderId: result.riderId,
                            riderName: result.riderName,
                            teamId: result.teamId,
                            teamName: result.teamName,
                            points: 0
                        };
                    }

                    totals[result.riderId].points +=
                        getPointsForPosition(
                            result.position,
                            race
                        );
                }
            );
        }
    );

    const classification =
        Object.values(totals)
            .sort((a, b) =>
                b.points - a.points
            )
            .map((rider, index) => ({
                ...rider,
                position: index + 1
            }));

    stageRaceState.pointsClassification =
        classification;

    return classification;
}


// ============================================
// KOM CLASSIFICATION
// ============================================

function getStageKomPoints(rider, stage) {
    if (!rider || !stage) {
        return 0;
    }

    const mountain =
        getResultStat(
            rider,
            "mountain"
        );

    const mediumMountain =
        getResultStat(
            rider,
            "mediumMountain"
        );

    const hill =
        getResultStat(
            rider,
            "hill"
        );

    /*
        Dette er stadig en foreløbig
        simulation-model.

        Når vi senere laver de rigtige
        climb-sektioner, gives KOM-point
        ud fra hvem der faktisk vinder
        hver climb.
    */

    const climbCount =
        Array.isArray(stage.climbs)
            ? stage.climbs.length
            : 0;

    if (climbCount === 0) {
        return 0;
    }

    return Math.round(
        mountain * 0.50 +
        mediumMountain * 0.30 +
        hill * 0.20
    );
}


function updateKomClassification() {
    const totals = {};

    stageRaceState.completedStages.forEach(
        stage => {
            const riders =
                getResultsWorldRiders();

            riders.forEach(rider => {
                const points =
                    getStageKomPoints(
                        rider,
                        stage
                    );

                if (!totals[rider.id]) {
                    totals[rider.id] = {
                        riderId: rider.id,
                        riderName: rider.name,
                        teamId: rider.teamId || null,
                        teamName:
                            rider.teamName || null,
                        points: 0
                    };
                }

                totals[rider.id].points += points;
            });
        }
    );

    const classification =
        Object.values(totals)
            .sort((a, b) =>
                b.points - a.points
            )
            .map((rider, index) => ({
                ...rider,
                position: index + 1
            }));

    stageRaceState.komClassification =
        classification;

    return classification;
}


// ============================================
// YOUTH CLASSIFICATION
// ============================================

function updateYouthClassification() {
    const gc =
        stageRaceState.generalClassification;

    const classification =
        gc
            .filter(entry => {
                const rider =
                    getResultsWorldRiders()
                        .find(
                            candidate =>
                                candidate.id ===
                                entry.riderId
                        );

                return (
                    getRiderAgeForResults(
                        rider
                    ) <= 25
                );
            })
            .map((entry, index) => ({
                ...entry,
                position: index + 1
            }));

    stageRaceState.youthClassification =
        classification;

    return classification;
}


// ============================================
// ALL CLASSIFICATIONS
// ============================================

function updateStageRaceClassifications(race) {
    updateGeneralClassification();

    updatePointsClassification(
        race
    );

    updateKomClassification();

    updateYouthClassification();

    return {
        gc:
            stageRaceState.generalClassification,

        points:
            stageRaceState.pointsClassification,

        kom:
            stageRaceState.komClassification,

        youth:
            stageRaceState.youthClassification
    };
}


// ============================================
// JERSEYS
// ============================================

function getClassificationLeader(
    classification
) {
    if (
        !Array.isArray(classification) ||
        classification.length === 0
    ) {
        return null;
    }

    return classification[0];
}


function updateStageRaceJerseys() {
    const gcLeader =
        getClassificationLeader(
            stageRaceState.generalClassification
        );

    const pointsLeader =
        getClassificationLeader(
            stageRaceState.pointsClassification
        );

    const komLeader =
        getClassificationLeader(
            stageRaceState.komClassification
        );

    const youthLeader =
        getClassificationLeader(
            stageRaceState.youthClassification
        );

    stageRaceState.jerseys = {
        gc: gcLeader
            ? {
                riderId: gcLeader.riderId,
                riderName: gcLeader.riderName,
                teamName: gcLeader.teamName
            }
            : null,

        points: pointsLeader
            ? {
                riderId: pointsLeader.riderId,
                riderName: pointsLeader.riderName,
                teamName: pointsLeader.teamName
            }
            : null,

        kom: komLeader
            ? {
                riderId: komLeader.riderId,
                riderName: komLeader.riderName,
                teamName: komLeader.teamName
            }
            : null,

        youth: youthLeader
            ? {
                riderId: youthLeader.riderId,
                riderName: youthLeader.riderName,
                teamName: youthLeader.teamName
            }
            : null
    };

    return stageRaceState.jerseys;
}


// ============================================
// PLAYER CLASSIFICATION POSITIONS
// ============================================

function findClassificationPosition(
    classification,
    riderId
) {
    if (
        !Array.isArray(classification) ||
        !riderId
    ) {
        return null;
    }

    const entry =
        classification.find(
            rider =>
                rider.riderId === riderId
        );

    return entry?.position || null;
}


function updatePlayerStageRacePositions() {
    const playerId =
        game.player?.id;

    if (!playerId) {
        return;
    }

    const currentStageResults =
        stageRaceState.currentStage?.results ||
        [];

    stageRaceState.player.currentStageResult =
        currentStageResults.find(
            result =>
                result.riderId === playerId
        ) || null;

    stageRaceState.player.gcPosition =
        findClassificationPosition(
            stageRaceState.generalClassification,
            playerId
        );

    stageRaceState.player.pointsPosition =
        findClassificationPosition(
            stageRaceState.pointsClassification,
            playerId
        );

    stageRaceState.player.komPosition =
        findClassificationPosition(
            stageRaceState.komClassification,
            playerId
        );

    stageRaceState.player.youthPosition =
        findClassificationPosition(
            stageRaceState.youthClassification,
            playerId
        );
}


// ============================================
// COMPLETE CURRENT STAGE
// ============================================

function completeCurrentStage(race) {
    if (!stageRaceState.active) {
        return null;
    }

    const stageData =
        generateCurrentStageResult(
            race
        );

    if (!stageData) {
        return null;
    }

    stageRaceState.completedStages.push(
        stageData
    );

    updateStageRaceClassifications(
        race
    );

    updateStageRaceJerseys();

    updatePlayerStageRacePositions();

    /*
        Resultatet er nu registreret.
    */

    return {
        stage: stageData,

        classifications:
            updateStageRaceClassifications(
                race
            ),

        jerseys:
            updateStageRaceJerseys(),

        player:
            stageRaceState.player
    };
}


// ============================================
// NEXT STAGE
// ============================================

function moveToNextStage(race) {
    if (!stageRaceState.active) {
        return false;
    }

    if (isLastStageRaceStage()) {
        return false;
    }

    stageRaceState.currentStageNumber += 1;

    stageRaceState.currentStage =
        getStageRaceStage(
            race,
            stageRaceState.currentStageNumber
        );

    return true;
}


// ============================================
// STAGE RACE FINISH
// ============================================

function finishStageRace() {
    if (!stageRaceState.active) {
        return false;
    }

    stageRaceState.active = false;

    stageRaceState.finished = true;

    stageRaceState.finishedAt =
        new Date().toISOString();

    /*
        Den endelige GC-leder bliver vinderen.
    */

    const finalGC =
        stageRaceState.generalClassification;

    if (finalGC.length > 0) {
        stageRaceState.jerseys.gc = {
            riderId:
                finalGC[0].riderId,

            riderName:
                finalGC[0].riderName,

            teamName:
                finalGC[0].teamName
        };
    }

    updatePlayerStageRacePositions();

    return true;
}


// ============================================
// FULL STAGE FLOW
// ============================================

function runCurrentStageRaceStage(race) {
    if (!stageRaceState.active) {
        return {
            success: false,
            reason: "stage-race-not-active"
        };
    }

    const result =
        completeCurrentStage(
            race
        );

    if (!result) {
        return {
            success: false,
            reason: "stage-result-failed"
        };
    }

    const lastStage =
        isLastStageRaceStage();

    if (lastStage) {
        finishStageRace();

        return {
            success: true,
            finished: true,
            stage: result.stage,
            classifications:
                result.classifications,
            jerseys: result.jerseys,
            player: result.player
        };
    }

    moveToNextStage(race);

    return {
        success: true,
        finished: false,

        completedStage:
            result.stage,

        nextStage:
            stageRaceState.currentStage,

        classifications:
            result.classifications,

        jerseys:
            result.jerseys,

        player:
            result.player
    };
}


// ============================================
// CURRENT STAGE INFORMATION
// ============================================

function getCurrentStageRaceInfo() {
    return {
        active: stageRaceState.active,

        raceId:
            stageRaceState.raceId,

        raceName:
            stageRaceState.raceName,

        currentStage:
            stageRaceState.currentStageNumber,

        totalStages:
            stageRaceState.totalStages,

        finishedStages:
            stageRaceState.completedStages.length,

        isLastStage:
            isLastStageRaceStage(),

        stage:
            stageRaceState.currentStage,

        jerseys:
            stageRaceState.jerseys,

        player:
            stageRaceState.player
    };
}


// ============================================
// CLASSIFICATION LOOKUPS
// ============================================

function getStageRaceGC() {
    return [
        ...stageRaceState.generalClassification
    ];
}


function getStageRacePoints() {
    return [
        ...stageRaceState.pointsClassification
    ];
}


function getStageRaceKOM() {
    return [
        ...stageRaceState.komClassification
    ];
}


function getStageRaceYouth() {
    return [
        ...stageRaceState.youthClassification
    ];
}


function getStageRaceJerseys() {
    return {
        ...stageRaceState.jerseys
    };
}


// ============================================
// PLAYER SUMMARY
// ============================================

function getPlayerStageRaceSummary() {
    return {
        currentStage:
            stageRaceState.currentStageNumber,

        totalStages:
            stageRaceState.totalStages,

        stageResult:
            stageRaceState.player.currentStageResult,

        gcPosition:
            stageRaceState.player.gcPosition,

        pointsPosition:
            stageRaceState.player.pointsPosition,

        komPosition:
            stageRaceState.player.komPosition,

        youthPosition:
            stageRaceState.player.youthPosition
    };
}


// ============================================
// STAGE RACE SUMMARY
// ============================================

function getStageRaceSummary() {
    return {
        active:
            stageRaceState.active,

        finished:
            stageRaceState.finished,

        raceId:
            stageRaceState.raceId,

        raceName:
            stageRaceState.raceName,

        currentStage:
            stageRaceState.currentStageNumber,

        totalStages:
            stageRaceState.totalStages,

        completedStages:
            stageRaceState.completedStages.length,

        jerseys:
            getStageRaceJerseys(),

        classifications: {
            gc:
                getStageRaceGC(),

            points:
                getStageRacePoints(),

            kom:
                getStageRaceKOM(),

            youth:
                getStageRaceYouth()
        },

        player:
            getPlayerStageRaceSummary()
    };
}


// ============================================
// DEBUG HELPERS
// ============================================

function debugStartStageRace(race) {
    const started =
        startStageRace(race);

    console.log(
        "Stage race started:",
        started
    );

    console.log(
        "Stage race state:",
        getStageRaceSummary()
    );

    return getStageRaceSummary();
}


function debugRunStage(race) {
    const result =
        runCurrentStageRaceStage(
            race
        );

    console.log(
        "Stage result:",
        result
    );

    return result;
}


function debugStageRaceSummary() {
    const summary =
        getStageRaceSummary();

    console.log(
        "Stage race summary:",
        summary
    );

    return summary;
}
// ============================================
// CYCLING CAREER
// script.js — Del 29
// Calendar Engine
// ============================================

const calendarState = {
    initialized: false,

    selectedRaceId: null,

    playerCalendar: [],

    raceRequests: [],

    selectionStatuses: [
        "requested",
        "accepted",
        "reserve",
        "rejected",
        "alternative"
    ],

    requestPriorities: [
        "high",
        "medium",
        "low"
    ],

    requestReasons: [
        "experience",
        "result",
        "preparation",
        "support",
        "development"
    ]
};


// ============================================
// CALENDAR — DATABASE ACCESS
// ============================================

function getCalendarRaceDatabase() {
    if (typeof raceDatabase === "undefined") {
        console.warn("Race database is not available.");
        return [];
    }

    if (!Array.isArray(raceDatabase)) {
        console.warn("Race database has an invalid format.");
        return [];
    }

    return raceDatabase;
}


function getCalendarRaces() {
    return getCalendarRaceDatabase();
}


function getCalendarRaceById(raceId) {
    if (!raceId) {
        return null;
    }

    return getCalendarRaces().find(race => race.id === raceId) || null;
}


// ============================================
// CALENDAR — RACE NORMALIZATION
// ============================================

function normalizeCalendarRace(race) {
    if (!race) {
        return null;
    }

    return {
        ...race,

        id: race.id || `race_${Date.now()}_${Math.random()}`,

        name: race.name || "Unknown Race",

        startDate: race.startDate || null,
        endDate: race.endDate || race.startDate || null,

        type: race.type || "oneDay",
        level: race.level || "continental",

        country: race.country || "Unknown",

        distance: race.distance || null,

        stages: Array.isArray(race.stages)
            ? race.stages
            : [],

        terrain: race.terrain || null,
        finishType: race.finishType || null,

        status: getRaceStatus(
            race.startDate,
            race.endDate
        )
    };
}


function getNormalizedCalendarRaces() {
    return getCalendarRaces()
        .map(normalizeCalendarRace)
        .filter(Boolean);
}


// ============================================
// CALENDAR — DATE HELPERS
// ============================================

function calendarDateToNumber(dateString) {
    if (!dateString) {
        return null;
    }

    const date = new Date(`${dateString}T00:00:00`);

    if (Number.isNaN(date.getTime())) {
        return null;
    }

    return date.getTime();
}


function isCalendarDateBefore(dateA, dateB) {
    const a = calendarDateToNumber(dateA);
    const b = calendarDateToNumber(dateB);

    if (a === null || b === null) {
        return false;
    }

    return a < b;
}


function isCalendarDateAfter(dateA, dateB) {
    const a = calendarDateToNumber(dateA);
    const b = calendarDateToNumber(dateB);

    if (a === null || b === null) {
        return false;
    }

    return a > b;
}


function isCalendarDateWithinRange(date, startDate, endDate) {
    const current = calendarDateToNumber(date);
    const start = calendarDateToNumber(startDate);
    const end = calendarDateToNumber(endDate);

    if (
        current === null ||
        start === null ||
        end === null
    ) {
        return false;
    }

    return current >= start && current <= end;
}


// ============================================
// CALENDAR — RACE STATUS
// ============================================

function getRaceStatus(startDate, endDate, currentDate = null) {
    const today =
        currentDate ||
        (
            typeof getCurrentDate === "function"
                ? getCurrentDate()
                : game.career.currentDate
        );

    if (!startDate) {
        return "upcoming";
    }

    const actualEndDate = endDate || startDate;

    if (isCalendarDateBefore(today, startDate)) {
        return "upcoming";
    }

    if (
        isCalendarDateWithinRange(
            today,
            startDate,
            actualEndDate
        )
    ) {
        return "ongoing";
    }

    if (isCalendarDateAfter(today, actualEndDate)) {
        return "completed";
    }

    return "upcoming";
}


function getCalendarRaceStatus(race) {
    if (!race) {
        return "upcoming";
    }

    return getRaceStatus(
        race.startDate,
        race.endDate
    );
}


// ============================================
// CALENDAR — CURRENT DATE
// ============================================

function getCalendarCurrentDate() {
    if (typeof getCurrentDate === "function") {
        return getCurrentDate();
    }

    if (
        game &&
        game.career &&
        game.career.currentDate
    ) {
        return game.career.currentDate;
    }

    return "2026-01-01";
}


// ============================================
// CALENDAR — UPCOMING / CURRENT / COMPLETED
// ============================================

function getUpcomingCalendarRaces(limit = 10) {
    const currentDate = getCalendarCurrentDate();

    return getNormalizedCalendarRaces()
        .filter(race => {
            return isCalendarDateAfter(
                race.startDate,
                currentDate
            );
        })
        .sort((a, b) => {
            return (
                calendarDateToNumber(a.startDate) -
                calendarDateToNumber(b.startDate)
            );
        })
        .slice(0, limit);
}


function getOngoingCalendarRaces() {
    const currentDate = getCalendarCurrentDate();

    return getNormalizedCalendarRaces()
        .filter(race => {
            return getRaceStatus(
                race.startDate,
                race.endDate,
                currentDate
            ) === "ongoing";
        });
}


function getCompletedCalendarRaces(limit = 10) {
    const currentDate = getCalendarCurrentDate();

    return getNormalizedCalendarRaces()
        .filter(race => {
            return isCalendarDateAfter(
                currentDate,
                race.endDate || race.startDate
            );
        })
        .sort((a, b) => {
            return (
                calendarDateToNumber(b.startDate) -
                calendarDateToNumber(a.startDate)
            );
        })
        .slice(0, limit);
}


function getNextCalendarRace() {
    const races = getUpcomingCalendarRaces(1);

    return races.length > 0
        ? races[0]
        : null;
}


// ============================================
// CALENDAR — FILTERS
// ============================================

function getCalendarRacesByType(type) {
    if (!type) {
        return [];
    }

    return getNormalizedCalendarRaces()
        .filter(race => race.type === type);
}


function getCalendarRacesByLevel(level) {
    if (!level) {
        return [];
    }

    return getNormalizedCalendarRaces()
        .filter(race => race.level === level);
}


function getCalendarRacesByCountry(country) {
    if (!country) {
        return [];
    }

    return getNormalizedCalendarRaces()
        .filter(race => race.country === country);
}


function getCalendarRacesByMonth(month, year = null) {
    const targetYear =
        year ||
        Number(getCalendarCurrentDate().slice(0, 4));

    return getNormalizedCalendarRaces()
        .filter(race => {
            if (!race.startDate) {
                return false;
            }

            const date = new Date(
                `${race.startDate}T00:00:00`
            );

            return (
                date.getFullYear() === targetYear &&
                date.getMonth() + 1 === month
            );
        });
}


function getCalendarRacesBetween(
    startDate,
    endDate
) {
    return getNormalizedCalendarRaces()
        .filter(race => {
            if (!race.startDate) {
                return false;
            }

            const raceStart = calendarDateToNumber(
                race.startDate
            );

            const raceEnd = calendarDateToNumber(
                race.endDate || race.startDate
            );

            const rangeStart = calendarDateToNumber(
                startDate
            );

            const rangeEnd = calendarDateToNumber(
                endDate
            );

            if (
                raceStart === null ||
                raceEnd === null ||
                rangeStart === null ||
                rangeEnd === null
            ) {
                return false;
            }

            // Includes races that overlap the requested period.
            return (
                raceStart <= rangeEnd &&
                raceEnd >= rangeStart
            );
        });
}


// ============================================
// CALENDAR — PLAYER CALENDAR ENTRIES
// ============================================

function createPlayerCalendarEntry(
    raceId,
    status = "requested",
    role = null,
    requestPriority = "medium",
    requestReason = null
) {
    const race = getCalendarRaceById(raceId);

    if (!race) {
        console.warn(
            `Cannot create calendar entry. Race not found: ${raceId}`
        );

        return null;
    }

    return {
        id: `calendar_${Date.now()}_${Math.random()}`,

        raceId: race.id,
        raceName: race.name,

        startDate: race.startDate,
        endDate: race.endDate || race.startDate,

        status,
        role,

        requestPriority,
        requestReason,

        createdAt: getCalendarCurrentDate(),

        completed: false
    };
}


function addPlayerCalendarEntry(entry) {
    if (!entry) {
        return false;
    }

    const existing = calendarState.playerCalendar.find(
        item => item.raceId === entry.raceId
    );

    if (existing) {
        return false;
    }

    calendarState.playerCalendar.push(entry);

    return true;
}


function getPlayerCalendar() {
    return [...calendarState.playerCalendar]
        .sort((a, b) => {
            return (
                calendarDateToNumber(a.startDate) -
                calendarDateToNumber(b.startDate)
            );
        });
}


function getPlayerCalendarEntry(raceId) {
    return calendarState.playerCalendar.find(
        entry => entry.raceId === raceId
    ) || null;
}


// ============================================
// CALENDAR — RACE REQUESTS
// ============================================

function isValidCalendarPriority(priority) {
    return calendarState.requestPriorities.includes(
        priority
    );
}


function isValidCalendarReason(reason) {
    return calendarState.requestReasons.includes(
        reason
    );
}


function createRaceRequest(
    raceId,
    priority = "medium",
    reason = "development"
) {
    const race = getCalendarRaceById(raceId);

    if (!race) {
        console.warn(
            `Cannot create race request. Race not found: ${raceId}`
        );

        return null;
    }

    if (!isValidCalendarPriority(priority)) {
        console.warn(
            `Invalid calendar priority: ${priority}`
        );

        return null;
    }

    if (!isValidCalendarReason(reason)) {
        console.warn(
            `Invalid calendar reason: ${reason}`
        );

        return null;
    }

    return {
        id: `request_${Date.now()}_${Math.random()}`,

        raceId: race.id,
        raceName: race.name,

        priority,
        reason,

        status: "requested",

        createdAt: getCalendarCurrentDate(),

        responseDate: null,
        responseNote: null,

        alternativeRaceId: null
    };
}


function addRaceRequest(request) {
    if (!request) {
        return false;
    }

    const existing = calendarState.raceRequests.find(
        item => item.raceId === request.raceId
    );

    if (existing) {
        return false;
    }

    calendarState.raceRequests.push(request);

    return true;
}


function requestRace(
    raceId,
    priority = "medium",
    reason = "development"
) {
    const request = createRaceRequest(
        raceId,
        priority,
        reason
    );

    if (!request) {
        return null;
    }

    if (!addRaceRequest(request)) {
        return null;
    }

    return request;
}


function getRaceRequests() {
    return [...calendarState.raceRequests];
}


function getRaceRequest(raceId) {
    return calendarState.raceRequests.find(
        request => request.raceId === raceId
    ) || null;
}


// ============================================
// CALENDAR — SELECTION DECISIONS
// ============================================

function updateRaceSelection(
    raceId,
    status,
    role = null,
    note = null,
    alternativeRaceId = null
) {
    const request = getRaceRequest(raceId);

    if (!request) {
        console.warn(
            `No race request found for: ${raceId}`
        );

        return false;
    }

    if (
        !calendarState.selectionStatuses.includes(status)
    ) {
        console.warn(
            `Invalid selection status: ${status}`
        );

        return false;
    }

    request.status = status;
    request.responseDate = getCalendarCurrentDate();
    request.responseNote = note;
    request.alternativeRaceId =
        alternativeRaceId || null;

    if (
        status === "accepted" ||
        status === "reserve"
    ) {
        let entry = getPlayerCalendarEntry(raceId);

        if (!entry) {
            entry = createPlayerCalendarEntry(
                raceId,
                status,
                role,
                request.priority,
                request.reason
            );

            addPlayerCalendarEntry(entry);
        } else {
            entry.status = status;
            entry.role = role;
        }
    }

    return true;
}


// ============================================
// CALENDAR — PLAYER RACE ROLE
// ============================================

function setPlayerRaceRole(raceId, role) {
    const entry = getPlayerCalendarEntry(raceId);

    if (!entry) {
        return false;
    }

    entry.role = role;

    return true;
}


function getPlayerRaceRole(raceId) {
    const entry = getPlayerCalendarEntry(raceId);

    return entry
        ? entry.role
        : null;
}


// ============================================
// CALENDAR — SELECTION HELPERS
// ============================================

function getAcceptedCalendarRaces() {
    return getPlayerCalendar()
        .filter(entry => entry.status === "accepted");
}


function getReserveCalendarRaces() {
    return getPlayerCalendar()
        .filter(entry => entry.status === "reserve");
}


function getRequestedCalendarRaces() {
    return getRaceRequests()
        .filter(request => request.status === "requested");
}


function getRejectedCalendarRaces() {
    return getRaceRequests()
        .filter(request => request.status === "rejected");
}


function getAlternativeCalendarRaces() {
    return getRaceRequests()
        .filter(request => request.status === "alternative");
}


// ============================================
// CALENDAR — RACE RELEVANCE
// ============================================

function isRaceOnPlayerCalendar(raceId) {
    return Boolean(
        getPlayerCalendarEntry(raceId)
    );
}


function isRaceRequested(raceId) {
    return Boolean(
        getRaceRequest(raceId)
    );
}


function isRaceAccepted(raceId) {
    const entry = getPlayerCalendarEntry(raceId);

    return Boolean(
        entry &&
        entry.status === "accepted"
    );
}


function getPlayerCalendarRacesForSeason(year) {
    return getPlayerCalendar()
        .filter(entry => {
            return (
                entry.startDate &&
                entry.startDate.startsWith(
                    String(year)
                )
            );
        });
}


// ============================================
// CALENDAR — CAREER EVENTS
// ============================================

function createCalendarRaceEvent(raceId) {
    const race = getCalendarRaceById(raceId);

    if (!race) {
        return null;
    }

    if (typeof createCareerEvent !== "function") {
        return null;
    }

    return createCareerEvent(
        "race",
        race.startDate,
        {
            raceId: race.id,
            raceName: race.name,
            raceLevel: race.level,
            raceType: race.type
        }
    );
}


function createCalendarSelectionEvent(
    raceId
) {
    const race = getCalendarRaceById(raceId);

    if (!race) {
        return null;
    }

    if (typeof createCareerEvent !== "function") {
        return null;
    }

    return createCareerEvent(
        "selection",
        race.startDate,
        {
            raceId: race.id,
            raceName: race.name
        }
    );
}


// ============================================
// CALENDAR — INITIALIZATION
// ============================================

function initializeCalendar() {
    calendarState.initialized = true;

    console.log(
        "Calendar Engine initialized."
    );

    console.log(
        "Calendar races:",
        getNormalizedCalendarRaces().length
    );

    return true;
}


// ============================================
// CALENDAR — SUMMARY
// ============================================

function getCalendarSummary() {
    const races = getNormalizedCalendarRaces();

    return {
        initialized: calendarState.initialized,

        totalRaces: races.length,

        currentDate: getCalendarCurrentDate(),

        nextRace: getNextCalendarRace(),

        ongoingRaces: getOngoingCalendarRaces(),

        upcomingRaces: getUpcomingCalendarRaces(5),

        completedRaces: getCompletedCalendarRaces(5),

        playerCalendar: getPlayerCalendar(),

        raceRequests: getRaceRequests(),

        acceptedCount:
            getAcceptedCalendarRaces().length,

        reserveCount:
            getReserveCalendarRaces().length,

        requestedCount:
            getRequestedCalendarRaces().length,

        rejectedCount:
            getRejectedCalendarRaces().length
    };
}


// ============================================
// CALENDAR — DEBUG
// ============================================

function debugCalendar() {
    const summary = getCalendarSummary();

    console.log(
        "========== CALENDAR DEBUG =========="
    );

    console.log(
        "Current date:",
        summary.currentDate
    );

    console.log(
        "Total races:",
        summary.totalRaces
    );

    console.log(
        "Next race:",
        summary.nextRace
    );

    console.log(
        "Player calendar:",
        summary.playerCalendar
    );

    console.log(
        "Race requests:",
        summary.raceRequests
    );

    console.log(
        "===================================="
    );

    return summary;
}


// ============================================
// CALENDAR — RESET
// ============================================

function resetCalendarState() {
    calendarState.initialized = false;
    calendarState.selectedRaceId = null;
    calendarState.playerCalendar = [];
    calendarState.raceRequests = [];
}


// ============================================
// CALENDAR — AUTO INITIALIZE
// ============================================

if (
    typeof raceDatabase !== "undefined"
) {
    initializeCalendar();
}
// ============================================
// CYCLING CAREER
// script.js — Del 30
// Career History & Records
// ============================================

const careerHistoryState = {
    initialized: false,

    raceResults: [],
    seasons: [],
    achievements: [],
    majorMoments: [],

    currentSeason: null
};


// ============================================
// HISTORY — GENERAL ENTRIES
// ============================================

function addHistoryEntry(entry) {
    if (!entry) {
        return null;
    }

    if (!game.history) {
        game.history = [];
    }

    const historyEntry = {
        id: entry.id ||
            `history_${Date.now()}_${Math.random()}`,

        type: entry.type || "general",

        title: entry.title || "Career Event",

        description:
            entry.description || "",

        date:
            entry.date ||
            (
                typeof getCurrentDate === "function"
                    ? getCurrentDate()
                    : game.career.currentDate
            ),

        data: entry.data || {},

        createdAt: Date.now()
    };

    game.history.push(historyEntry);

    return historyEntry;
}


function getCareerHistory() {
    if (!game.history) {
        game.history = [];
    }

    return [...game.history]
        .sort((a, b) => {
            return (
                new Date(b.date) -
                new Date(a.date)
            );
        });
}


function getHistoryEntriesByType(type) {
    return getCareerHistory()
        .filter(entry => entry.type === type);
}


function getRecentHistory(limit = 10) {
    return getCareerHistory()
        .slice(0, limit);
}


// ============================================
// HISTORY — RACE RESULTS
// ============================================

function createCareerRaceHistoryEntry(
    result
) {
    if (!result) {
        return null;
    }

    const race = result.race || {};

    return {
        id:
            result.id ||
            `race_history_${Date.now()}_${Math.random()}`,

        type: "race",

        raceId:
            result.raceId ||
            race.id ||
            null,

        raceName:
            result.raceName ||
            race.name ||
            "Unknown Race",

        date:
            result.date ||
            race.startDate ||
            getCalendarCurrentDate(),

        position:
            result.position ||
            null,

        time:
            result.time ||
            null,

        gap:
            result.gap ||
            null,

        team:
            result.team ||
            (
                game.team
                    ? game.team.name
                    : null
            ),

        raceType:
            result.raceType ||
            race.type ||
            null,

        raceLevel:
            result.raceLevel ||
            race.level ||
            null,

        resultData: {
            ...result
        }
    };
}


function saveCareerRaceResult(result) {
    const entry =
        createCareerRaceHistoryEntry(result);

    if (!entry) {
        return null;
    }

    careerHistoryState.raceResults.push(
        entry
    );

    addHistoryEntry({
        type: "race",

        title: entry.raceName,

        description:
            entry.position
                ? `Finished ${entry.position}.`
                : "Race completed.",

        date: entry.date,

        data: entry
    });

    return entry;
}


function getCareerRaceResults() {
    return [...careerHistoryState.raceResults]
        .sort((a, b) => {
            return (
                new Date(b.date) -
                new Date(a.date)
            );
        });
}


function getCareerRaceResult(raceId) {
    return careerHistoryState.raceResults.find(
        result => result.raceId === raceId
    ) || null;
}


// ============================================
// HISTORY — RESULT FILTERS
// ============================================

function getCareerWins() {
    return getCareerRaceResults()
        .filter(result => result.position === 1);
}


function getCareerPodiums() {
    return getCareerRaceResults()
        .filter(result => {
            return (
                result.position &&
                result.position <= 3
            );
        });
}


function getCareerTop10s() {
    return getCareerRaceResults()
        .filter(result => {
            return (
                result.position &&
                result.position <= 10
            );
        });
}


function getCareerRaceDays() {
    return careerHistoryState.raceResults.length;
}


function getBestCareerResult() {
    const results = getCareerRaceResults()
        .filter(result => {
            return Number.isFinite(
                Number(result.position)
            );
        });

    if (results.length === 0) {
        return null;
    }

    return [...results]
        .sort(
            (a, b) =>
                Number(a.position) -
                Number(b.position)
        )[0];
}


// ============================================
// HISTORY — SEASONS
// ============================================

function createSeasonHistory(
    year
) {
    return {
        year,

        raceDays: 0,
        wins: 0,
        podiums: 0,
        top10s: 0,

        bestResult: null,

        races: [],

        achievements: [],

        development: {},

        completed: false
    };
}


function getSeasonHistory(year) {
    return careerHistoryState.seasons.find(
        season => season.year === year
    ) || null;
}


function getOrCreateSeasonHistory(
    year
) {
    let season =
        getSeasonHistory(year);

    if (!season) {
        season = createSeasonHistory(year);

        careerHistoryState.seasons.push(
            season
        );
    }

    return season;
}


function addRaceResultToSeason(
    result
) {
    if (!result) {
        return false;
    }

    const date =
        result.date ||
        getCalendarCurrentDate();

    const year =
        Number(String(date).slice(0, 4));

    if (!year) {
        return false;
    }

    const season =
        getOrCreateSeasonHistory(year);

    season.races.push(
        result.raceId
    );

    season.raceDays =
        season.races.length;

    if (result.position === 1) {
        season.wins++;
    }

    if (
        result.position &&
        result.position <= 3
    ) {
        season.podiums++;
    }

    if (
        result.position &&
        result.position <= 10
    ) {
        season.top10s++;
    }

    if (
        result.position &&
        (
            !season.bestResult ||
            result.position <
                season.bestResult.position
        )
    ) {
        season.bestResult = {
            raceId: result.raceId,
            raceName: result.raceName,
            position: result.position
        };
    }

    return true;
}


// ============================================
// HISTORY — ACHIEVEMENTS
// ============================================

function createCareerAchievement(
    type,
    title,
    description,
    data = {}
) {
    return {
        id:
            `achievement_${Date.now()}_${Math.random()}`,

        type,

        title,

        description,

        date: getCalendarCurrentDate(),

        data
    };
}


function addCareerAchievement(
    achievement
) {
    if (!achievement) {
        return false;
    }

    careerHistoryState.achievements.push(
        achievement
    );

    addHistoryEntry({
        type: "achievement",

        title:
            achievement.title,

        description:
            achievement.description,

        date:
            achievement.date,

        data:
            achievement.data
    });

    return true;
}


function getCareerAchievements() {
    return [
        ...careerHistoryState.achievements
    ];
}


// ============================================
// HISTORY — MAJOR MOMENTS
// ============================================

function addCareerMajorMoment(
    title,
    description,
    data = {}
) {
    const moment = {
        id:
            `moment_${Date.now()}_${Math.random()}`,

        title,

        description,

        date: getCalendarCurrentDate(),

        data
    };

    careerHistoryState.majorMoments.push(
        moment
    );

    addHistoryEntry({
        type: "major_moment",

        title,

        description,

        date: moment.date,

        data
    });

    return moment;
}


function getCareerMajorMoments() {
    return [
        ...careerHistoryState.majorMoments
    ].sort((a, b) => {
        return (
            new Date(b.date) -
            new Date(a.date)
        );
    });
}


// ============================================
// HISTORY — CAREER RECORDS
// ============================================

function getCareerRecords() {
    const results =
        getCareerRaceResults();

    const bestResult =
        getBestCareerResult();

    return {
        raceDays:
            results.length,

        wins:
            getCareerWins().length,

        podiums:
            getCareerPodiums().length,

        top10s:
            getCareerTop10s().length,

        bestResult: bestResult
            ? {
                position:
                    bestResult.position,

                raceName:
                    bestResult.raceName,

                raceId:
                    bestResult.raceId
            }
            : null,

        seasons:
            careerHistoryState.seasons.length,

        achievements:
            careerHistoryState.achievements.length,

        majorMoments:
            careerHistoryState.majorMoments.length
    };
}


// ============================================
// HISTORY — SEASON REVIEW
// ============================================

function createSeasonReview(
    year
) {
    const season =
        getSeasonHistory(year);

    if (!season) {
        return null;
    }

    return {
        year: season.year,

        raceDays:
            season.raceDays,

        wins:
            season.wins,

        podiums:
            season.podiums,

        top10s:
            season.top10s,

        bestResult:
            season.bestResult,

        races:
            [...season.races],

        achievements:
            [...season.achievements],

        development:
            {
                ...season.development
            }
    };
}


function completeSeason(
    year
) {
    const season =
        getOrCreateSeasonHistory(year);

    season.completed = true;

    careerHistoryState.currentSeason =
        year + 1;

    addHistoryEntry({
        type: "season",

        title:
            `${year} Season Completed`,

        description:
            `The ${year} season has been completed.`,

        date:
            getCalendarCurrentDate(),

        data:
            createSeasonReview(year)
    });

    return season;
}


// ============================================
// HISTORY — PLAYER DEVELOPMENT
// ============================================

function saveSeasonDevelopment(
    year,
    development
) {
    const season =
        getOrCreateSeasonHistory(year);

    season.development = {
        ...development
    };

    return true;
}


// ============================================
// HISTORY — INITIALIZATION
// ============================================

function initializeCareerHistory() {
    careerHistoryState.initialized = true;

    const currentYear =
        Number(
            String(
                getCalendarCurrentDate()
            ).slice(0, 4)
        );

    careerHistoryState.currentSeason =
        currentYear;

    getOrCreateSeasonHistory(
        currentYear
    );

    return true;
}


// ============================================
// HISTORY — SUMMARY
// ============================================

function getCareerHistorySummary() {
    return {
        initialized:
            careerHistoryState.initialized,

        currentSeason:
            careerHistoryState.currentSeason,

        records:
            getCareerRecords(),

        recentResults:
            getCareerRaceResults()
                .slice(0, 5),

        seasons:
            [...careerHistoryState.seasons],

        achievements:
            getCareerAchievements(),

        majorMoments:
            getCareerMajorMoments()
    };
}


// ============================================
// HISTORY — RESET
// ============================================

function resetCareerHistory() {
    careerHistoryState.initialized = false;

    careerHistoryState.raceResults = [];

    careerHistoryState.seasons = [];

    careerHistoryState.achievements = [];

    careerHistoryState.majorMoments = [];

    careerHistoryState.currentSeason = null;
}


// ============================================
// HISTORY — AUTO INITIALIZE
// ============================================

initializeCareerHistory();
// ============================================
// CYCLING CAREER
// script.js — Del 31
// Save & Load System
// ============================================

const saveState = {
    initialized: false,

    saveKey: "cyclingCareer_save",

    lastSavedAt: null,

    lastLoadedAt: null,

    hasSave: false,

    autoSaveEnabled: true
};


// ============================================
// SAVE — STATE CREATION
// ============================================

function createSaveState() {
    return {
        version: game.version,

        saveVersion: game.saveVersion,

        savedAt: new Date().toISOString(),

        game: {
            currentScreen:
                game.currentScreen,

            gameStarted:
                game.gameStarted,

            career:
                {
                    ...game.career
                },

            player:
                game.player,

            team:
                game.team,

            contract:
                game.contract,

            agent:
                game.agent,

            currentRace:
                game.currentRace,

            world:
                game.world,

            inbox:
                game.inbox,

            history:
                game.history,

            relationships:
                game.relationships
        },

        systems: {
            riderCreation:
                typeof riderCreation !== "undefined"
                    ? riderCreation
                    : null,

            teamOfferState:
                typeof teamOfferState !== "undefined"
                    ? teamOfferState
                    : null,

            careerTime:
                typeof careerTime !== "undefined"
                    ? careerTime
                    : null,

            careerEvents:
                typeof careerEvents !== "undefined"
                    ? careerEvents
                    : null,

            inboxState:
                typeof inboxState !== "undefined"
                    ? inboxState
                    : null,

            relationshipState:
                typeof relationshipState !== "undefined"
                    ? relationshipState
                    : null,

            teamStructure:
                typeof teamStructure !== "undefined"
                    ? teamStructure
                    : null,

            trainingState:
                typeof trainingState !== "undefined"
                    ? trainingState
                    : null,

            recoveryState:
                typeof recoveryState !== "undefined"
                    ? recoveryState
                    : null,

            racePreparationState:
                typeof racePreparationState !== "undefined"
                    ? racePreparationState
                    : null,

            raceState:
                typeof raceState !== "undefined"
                    ? raceState
                    : null,

            raceSimulationState:
                typeof raceSimulationState !== "undefined"
                    ? raceSimulationState
                    : null,

            raceActionState:
                typeof raceActionState !== "undefined"
                    ? raceActionState
                    : null,

            raceResolutionState:
                typeof raceResolutionState !== "undefined"
                    ? raceResolutionState
                    : null,

            raceWorldState:
                typeof raceWorldState !== "undefined"
                    ? raceWorldState
                    : null,

            raceInteractionState:
                typeof raceInteractionState !== "undefined"
                    ? raceInteractionState
                    : null,

            raceSyncState:
                typeof raceSyncState !== "undefined"
                    ? raceSyncState
                    : null,

            raceProgressionState:
                typeof raceProgressionState !== "undefined"
                    ? raceProgressionState
                    : null,

            raceSituationGeneratorState:
                typeof raceSituationGeneratorState !== "undefined"
                    ? raceSituationGeneratorState
                    : null,

            raceControllerState:
                typeof raceControllerState !== "undefined"
                    ? raceControllerState
                    : null,

            raceResultsState:
                typeof raceResultsState !== "undefined"
                    ? raceResultsState
                    : null,

            stageRaceState:
                typeof stageRaceState !== "undefined"
                    ? stageRaceState
                    : null,

            calendarState:
                typeof calendarState !== "undefined"
                    ? calendarState
                    : null,

            careerHistoryState:
                typeof careerHistoryState !== "undefined"
                    ? careerHistoryState
                    : null
        }
    };
}


// ============================================
// SAVE — WRITE
// ============================================

function saveCareer() {
    try {
        const saveData =
            createSaveState();

        const serialized =
            JSON.stringify(saveData);

        localStorage.setItem(
            saveState.saveKey,
            serialized
        );

        saveState.lastSavedAt =
            saveData.savedAt;

        saveState.hasSave = true;

        console.log(
            "Career saved successfully."
        );

        return true;

    } catch (error) {

        console.error(
            "Failed to save career:",
            error
        );

        return false;
    }
}


// ============================================
// SAVE — CHECK
// ============================================

function hasSavedCareer() {
    try {
        return Boolean(
            localStorage.getItem(
                saveState.saveKey
            )
        );

    } catch (error) {

        console.error(
            "Could not check save:",
            error
        );

        return false;
    }
}


// ============================================
// SAVE — READ
// ============================================

function getSavedCareer() {
    try {
        const serialized =
            localStorage.getItem(
                saveState.saveKey
            );

        if (!serialized) {
            return null;
        }

        return JSON.parse(
            serialized
        );

    } catch (error) {

        console.error(
            "Could not read save:",
            error
        );

        return null;
    }
}


// ============================================
// SAVE — VALIDATION
// ============================================

function validateSaveData(
    saveData
) {
    if (!saveData) {
        return false;
    }

    if (
        typeof saveData !== "object"
    ) {
        return false;
    }

    if (!saveData.game) {
        return false;
    }

    if (!saveData.game.career) {
        return false;
    }

    if (
        typeof saveData.saveVersion !==
        "number"
    ) {
        return false;
    }

    return true;
}


// ============================================
// LOAD — GAME STATE
// ============================================

function loadGameState(
    saveData
) {
    if (
        !validateSaveData(
            saveData
        )
    ) {
        console.error(
            "Invalid save data."
        );

        return false;
    }

    const savedGame =
        saveData.game;

    game.currentScreen =
        savedGame.currentScreen ||
        "dashboard";

    game.gameStarted =
        Boolean(
            savedGame.gameStarted
        );

    game.career =
        savedGame.career ||
        game.career;

    game.player =
        savedGame.player ||
        null;

    game.team =
        savedGame.team ||
        null;

    game.contract =
        savedGame.contract ||
        null;

    game.agent =
        savedGame.agent ||
        null;

    game.currentRace =
        savedGame.currentRace ||
        null;

    game.world =
        savedGame.world ||
        game.world;

    game.inbox =
        savedGame.inbox ||
        [];

    game.history =
        savedGame.history ||
        [];

    game.relationships =
        savedGame.relationships ||
        [];

    return true;
}


// ============================================
// LOAD — SYSTEM STATES
// ============================================

function restoreSystemStates(
    systems
) {
    if (!systems) {
        return;
    }

    if (
        systems.riderCreation &&
        typeof riderCreation !== "undefined"
    ) {
        Object.assign(
            riderCreation,
            systems.riderCreation
        );
    }

    if (
        systems.teamOfferState &&
        typeof teamOfferState !== "undefined"
    ) {
        Object.assign(
            teamOfferState,
            systems.teamOfferState
        );
    }

    if (
        systems.careerTime &&
        typeof careerTime !== "undefined"
    ) {
        Object.assign(
            careerTime,
            systems.careerTime
        );
    }

    if (
        systems.careerEvents &&
        typeof careerEvents !== "undefined"
    ) {
        Object.assign(
            careerEvents,
            systems.careerEvents
        );
    }

    if (
        systems.inboxState &&
        typeof inboxState !== "undefined"
    ) {
        Object.assign(
            inboxState,
            systems.inboxState
        );
    }

    if (
        systems.relationshipState &&
        typeof relationshipState !== "undefined"
    ) {
        Object.assign(
            relationshipState,
            systems.relationshipState
        );
    }

    if (
        systems.teamStructure &&
        typeof teamStructure !== "undefined"
    ) {
        Object.assign(
            teamStructure,
            systems.teamStructure
        );
    }

    if (
        systems.trainingState &&
        typeof trainingState !== "undefined"
    ) {
        Object.assign(
            trainingState,
            systems.trainingState
        );
    }

    if (
        systems.recoveryState &&
        typeof recoveryState !== "undefined"
    ) {
        Object.assign(
            recoveryState,
            systems.recoveryState
        );
    }

    if (
        systems.racePreparationState &&
        typeof racePreparationState !== "undefined"
    ) {
        Object.assign(
            racePreparationState,
            systems.racePreparationState
        );
    }

    if (
        systems.raceState &&
        typeof raceState !== "undefined"
    ) {
        Object.assign(
            raceState,
            systems.raceState
        );
    }

    if (
        systems.raceSimulationState &&
        typeof raceSimulationState !== "undefined"
    ) {
        Object.assign(
            raceSimulationState,
            systems.raceSimulationState
        );
    }

    if (
        systems.raceActionState &&
        typeof raceActionState !== "undefined"
    ) {
        Object.assign(
            raceActionState,
            systems.raceActionState
        );
    }

    if (
        systems.raceResolutionState &&
        typeof raceResolutionState !== "undefined"
    ) {
        Object.assign(
            raceResolutionState,
            systems.raceResolutionState
        );
    }

    if (
        systems.raceWorldState &&
        typeof raceWorldState !== "undefined"
    ) {
        Object.assign(
            raceWorldState,
            systems.raceWorldState
        );
    }

    if (
        systems.raceInteractionState &&
        typeof raceInteractionState !== "undefined"
    ) {
        Object.assign(
            raceInteractionState,
            systems.raceInteractionState
        );
    }

    if (
        systems.raceSyncState &&
        typeof raceSyncState !== "undefined"
    ) {
        Object.assign(
            raceSyncState,
            systems.raceSyncState
        );
    }

    if (
        systems.raceProgressionState &&
        typeof raceProgressionState !== "undefined"
    ) {
        Object.assign(
            raceProgressionState,
            systems.raceProgressionState
        );
    }

    if (
        systems.raceSituationGeneratorState &&
        typeof raceSituationGeneratorState !== "undefined"
    ) {
        Object.assign(
            raceSituationGeneratorState,
            systems.raceSituationGeneratorState
        );
    }

    if (
        systems.raceControllerState &&
        typeof raceControllerState !== "undefined"
    ) {
        Object.assign(
            raceControllerState,
            systems.raceControllerState
        );
    }

    if (
        systems.raceResultsState &&
        typeof raceResultsState !== "undefined"
    ) {
        Object.assign(
            raceResultsState,
            systems.raceResultsState
        );
    }

    if (
        systems.stageRaceState &&
        typeof stageRaceState !== "undefined"
    ) {
        Object.assign(
            stageRaceState,
            systems.stageRaceState
        );
    }

    if (
        systems.calendarState &&
        typeof calendarState !== "undefined"
    ) {
        Object.assign(
            calendarState,
            systems.calendarState
        );
    }

    if (
        systems.careerHistoryState &&
        typeof careerHistoryState !== "undefined"
    ) {
        Object.assign(
            careerHistoryState,
            systems.careerHistoryState
        );
    }
}


// ============================================
// LOAD — CAREER
// ============================================

function loadCareer() {
    try {
        const saveData =
            getSavedCareer();

        if (!saveData) {
            console.log(
                "No saved career found."
            );

            return false;
        }

        if (
            !loadGameState(
                saveData
            )
        ) {
            return false;
        }

        restoreSystemStates(
            saveData.systems
        );

        saveState.lastLoadedAt =
            new Date().toISOString();

        saveState.hasSave = true;

        console.log(
            "Career loaded successfully."
        );

        render();

        return true;

    } catch (error) {

        console.error(
            "Failed to load career:",
            error
        );

        return false;
    }
}


// ============================================
// SAVE — DELETE
// ============================================

function deleteSavedCareer() {
    try {
        localStorage.removeItem(
            saveState.saveKey
        );

        saveState.hasSave = false;
        saveState.lastSavedAt = null;

        console.log(
            "Saved career deleted."
        );

        return true;

    } catch (error) {

        console.error(
            "Failed to delete save:",
            error
        );

        return false;
    }
}


// ============================================
// SAVE — AUTOSAVE
// ============================================

function setAutoSaveEnabled(
    enabled
) {
    saveState.autoSaveEnabled =
        Boolean(enabled);

    return saveState.autoSaveEnabled;
}


function isAutoSaveEnabled() {
    return saveState.autoSaveEnabled;
}


function autoSaveCareer() {
    if (
        !saveState.autoSaveEnabled
    ) {
        return false;
    }

    if (!game.gameStarted) {
        return false;
    }

    return saveCareer();
}


// ============================================
// SAVE — IMPORTANT EVENT HOOK
// ============================================

function saveAfterMajorEvent(
    eventType = "major_event"
) {
    if (
        !saveState.autoSaveEnabled
    ) {
        return false;
    }

    console.log(
        `Autosaving after ${eventType}...`
    );

    return saveCareer();
}


// ============================================
// SAVE — SUMMARY
// ============================================

function getSaveStateSummary() {
    return {
        initialized:
            saveState.initialized,

        hasSave:
            hasSavedCareer(),

        lastSavedAt:
            saveState.lastSavedAt,

        lastLoadedAt:
            saveState.lastLoadedAt,

        autoSaveEnabled:
            saveState.autoSaveEnabled,

        saveKey:
            saveState.saveKey
    };
}


// ============================================
// SAVE — INITIALIZATION
// ============================================

function initializeSaveSystem() {
    saveState.initialized = true;

    saveState.hasSave =
        hasSavedCareer();

    console.log(
        "Save system initialized."
    );

    return true;
}


// ============================================
// SAVE — AUTO INITIALIZE
// ============================================

initializeSaveSystem();
// ============================================
// CYCLING CAREER
// script.js — Del 32
// World Simulation & Season Progression
// ============================================

const worldProgressionState = {
    initialized: false,

    lastSimulationDate: null,

    simulatedDays: 0,

    simulatedRaces: 0,

    seasonChanges: 0,

    worldEvents: []
};


// ============================================
// WORLD — DATE
// ============================================

function getWorldCurrentDate() {
    if (typeof getCurrentDate === "function") {
        return getCurrentDate();
    }

    return game.career.currentDate;
}


function getWorldYear() {
    const date = getWorldCurrentDate();

    return Number(
        String(date).slice(0, 4)
    );
}


// ============================================
// WORLD — RIDERS
// ============================================

function getWorldRiders() {
    if (
        typeof raceWorldState !== "undefined" &&
        Array.isArray(
            raceWorldState.activeRiders
        )
    ) {
        return raceWorldState.activeRiders;
    }

    if (
        game.world &&
        Array.isArray(game.world.riders)
    ) {
        return game.world.riders;
    }

    return [];
}


function getWorldRiderById(riderId) {
    return getWorldRiders().find(
        rider => rider.id === riderId
    ) || null;
}


// ============================================
// WORLD — BASIC DEVELOPMENT
// ============================================

function getWorldDevelopmentChance(
    rider
) {
    if (!rider) {
        return 0;
    }

    const age =
        Number(rider.age) || 25;

    let chance = 0.5;

    if (age < 21) {
        chance += 0.8;
    } else if (age < 25) {
        chance += 0.4;
    } else if (age < 29) {
        chance += 0.1;
    } else if (age > 32) {
        chance -= 0.3;
    } else if (age > 35) {
        chance -= 0.7;
    }

    return Math.max(
        0.05,
        chance
    );
}


function simulateWorldRiderDevelopment(
    rider
) {
    if (!rider) {
        return false;
    }

    if (!rider.stats) {
        return false;
    }

    const chance =
        getWorldDevelopmentChance(
            rider
        );

    if (Math.random() > chance) {
        return false;
    }

    const statKeys =
        Object.keys(
            rider.stats
        );

    if (statKeys.length === 0) {
        return false;
    }

    const statKey =
        statKeys[
            Math.floor(
                Math.random() *
                statKeys.length
            )
        ];

    const current =
        Number(
            rider.stats[statKey]
        ) || 0;

    const change =
        Math.random() < 0.75
            ? 1
            : -1;

    rider.stats[statKey] =
        Math.max(
            1,
            Math.min(
                100,
                current + change
            )
        );

    return true;
}


// ============================================
// WORLD — AGE
// ============================================

function updateWorldRiderAge(
    rider,
    daysPassed
) {
    if (!rider) {
        return false;
    }

    if (
        typeof rider.age !== "number"
    ) {
        return false;
    }

    const currentAge =
        rider.age;

    const currentDate =
        getWorldCurrentDate();

    const birthDate =
        rider.birthDate || null;

    if (birthDate) {
        const birth =
            new Date(
                `${birthDate}T00:00:00`
            );

        const current =
            new Date(
                `${currentDate}T00:00:00`
            );

        if (
            !Number.isNaN(
                birth.getTime()
            ) &&
            !Number.isNaN(
                current.getTime()
            )
        ) {
            let age =
                current.getFullYear() -
                birth.getFullYear();

            const birthdayPassed =
                (
                    current.getMonth() >
                        birth.getMonth()
                ) ||
                (
                    current.getMonth() ===
                        birth.getMonth() &&
                    current.getDate() >=
                        birth.getDate()
                );

            if (!birthdayPassed) {
                age--;
            }

            rider.age = age;

            return true;
        }
    }

    return false;
}


// ============================================
// WORLD — RETIREMENT
// ============================================

function shouldWorldRiderRetire(
    rider
) {
    if (!rider) {
        return false;
    }

    const age =
        Number(rider.age) || 0;

    if (age < 34) {
        return false;
    }

    let chance = 0;

    if (age >= 34) {
        chance = 0.01;
    }

    if (age >= 36) {
        chance = 0.03;
    }

    if (age >= 38) {
        chance = 0.08;
    }

    if (age >= 40) {
        chance = 0.18;
    }

    if (age >= 42) {
        chance = 0.35;
    }

    return Math.random() < chance;
}


function retireWorldRider(
    rider
) {
    if (!rider) {
        return false;
    }

    rider.retired = true;

    rider.status =
        "retired";

    rider.retirementDate =
        getWorldCurrentDate();

    return true;
}


// ============================================
// WORLD — RACE SIMULATION
// ============================================

function simulateWorldRace(
    race
) {
    if (!race) {
        return null;
    }

    worldProgressionState.simulatedRaces++;

    const result = {
        raceId: race.id,

        raceName: race.name,

        date:
            race.startDate ||
            getWorldCurrentDate(),

        winner: null,

        podium: [],

        top10: []
    };

    const riders =
        getWorldRiders()
            .filter(rider => {
                return (
                    rider &&
                    !rider.retired
                );
            });

    if (riders.length === 0) {
        return result;
    }

    const ranked =
        [...riders]
            .sort(() => {
                return Math.random() - 0.5;
            });

    result.top10 =
        ranked
            .slice(0, 10)
            .map(rider => rider.id);

    result.podium =
        ranked
            .slice(0, 3)
            .map(rider => rider.id);

    result.winner =
        result.podium[0] || null;

    return result;
}


// ============================================
// WORLD — RACE RESULTS
// ============================================

function applyWorldRaceResult(
    raceResult
) {
    if (!raceResult) {
        return false;
    }

    const riders =
        getWorldRiders();

    raceResult.top10.forEach(
        (riderId, index) => {
            const rider =
                riders.find(
                    item =>
                        item.id ===
                        riderId
                );

            if (!rider) {
                return;
            }

            rider.lastRacePosition =
                index + 1;

            rider.lastRaceId =
                raceResult.raceId;

            rider.lastRaceDate =
                raceResult.date;

            if (
                index === 0
            ) {
                rider.wins =
                    (
                        Number(rider.wins) ||
                        0
                    ) + 1;
            }

            if (
                index < 3
            ) {
                rider.podiums =
                    (
                        Number(
                            rider.podiums
                        ) || 0
                    ) + 1;
            }
        }
    );

    return true;
}


// ============================================
// WORLD — EVENTS
// ============================================

function addWorldProgressionEvent(
    type,
    title,
    description,
    data = {}
) {
    const event = {
        id:
            `world_event_${Date.now()}_${Math.random()}`,

        type,

        title,

        description,

        date:
            getWorldCurrentDate(),

        data
    };

    worldProgressionState.worldEvents.push(
        event
    );

    if (
        !game.world.worldEvents
    ) {
        game.world.worldEvents = [];
    }

    game.world.worldEvents.push(
        event
    );

    return event;
}


function getWorldProgressionEvents(
    limit = 20
) {
    return [
        ...worldProgressionState.worldEvents
    ]
        .sort((a, b) => {
            return (
                new Date(b.date) -
                new Date(a.date)
            );
        })
        .slice(0, limit);
}


// ============================================
// WORLD — SIMULATE DAY
// ============================================

function simulateWorldDay() {
    const riders =
        getWorldRiders();

    riders.forEach(rider => {
        if (!rider || rider.retired) {
            return;
        }

        simulateWorldRiderDevelopment(
            rider
        );

        updateWorldRiderAge(
            rider,
            1
        );

        if (
            shouldWorldRiderRetire(
                rider
            )
        ) {
            retireWorldRider(
                rider
            );

            addWorldProgressionEvent(
                "retirement",
                "Rider Retirement",
                `${rider.name || "A rider"} retired from professional cycling.`,
                {
                    riderId: rider.id
                }
            );
        }
    });

    worldProgressionState.simulatedDays++;

    worldProgressionState.lastSimulationDate =
        getWorldCurrentDate();
}


// ============================================
// WORLD — SIMULATE RACE CALENDAR
// ============================================

function simulateWorldRacesBetween(
    startDate,
    endDate
) {
    if (
        typeof getCalendarRacesBetween !==
        "function"
    ) {
        return [];
    }

    const races =
        getCalendarRacesBetween(
            startDate,
            endDate
        );

    const results = [];

    races.forEach(race => {
        if (!race) {
            return;
        }

        const result =
            simulateWorldRace(
                race
            );

        applyWorldRaceResult(
            result
        );

        results.push(result);
    });

    return results;
}


// ============================================
// WORLD — ADVANCE
// ============================================

function advanceWorldSimulation(
    daysPassed
) {
    if (
        !Number.isFinite(daysPassed) ||
        daysPassed <= 0
    ) {
        return {
            days: 0,
            races: 0,
            events: []
        };
    }

    const startDate =
        getWorldCurrentDate();

    for (
        let day = 0;
        day < daysPassed;
        day++
    ) {
        simulateWorldDay();
    }

    const endDate =
        getWorldCurrentDate();

    const raceResults =
        simulateWorldRacesBetween(
            startDate,
            endDate
        );

    return {
        days:
            daysPassed,

        races:
            raceResults.length,

        raceResults,

        events:
            getWorldProgressionEvents()
    };
}


// ============================================
// SEASON — DETECTION
// ============================================

function isNewSeason(
    previousDate,
    currentDate
) {
    if (
        !previousDate ||
        !currentDate
    ) {
        return false;
    }

    const previousYear =
        Number(
            String(
                previousDate
            ).slice(0, 4)
        );

    const currentYear =
        Number(
            String(
                currentDate
            ).slice(0, 4)
        );

    return currentYear >
        previousYear;
}


// ============================================
// SEASON — START
// ============================================

function initializeNewSeason(
    year
) {
    if (
        typeof getOrCreateSeasonHistory ===
        "function"
    ) {
        getOrCreateSeasonHistory(
            year
        );
    }

    if (
        typeof careerHistoryState !==
            "undefined"
    ) {
        careerHistoryState.currentSeason =
            year;
    }

    if (
        typeof game.career !==
            "undefined"
    ) {
        game.career.season =
            year;
    }

    if (
        typeof game.world !==
            "undefined"
    ) {
        game.world.year =
            year;
    }

    worldProgressionState.seasonChanges++;

    addWorldProgressionEvent(
        "season_start",
        `Season ${year}`,
        `The ${year} cycling season has begun.`,
        {
            year
        }
    );

    if (
        typeof addCareerMajorMoment ===
        "function"
    ) {
        addCareerMajorMoment(
            `Season ${year}`,
            `A new cycling season has begun.`,
            {
                year
            }
        );
    }

    return true;
}


// ============================================
// SEASON — END
// ============================================

function completePreviousSeason(
    year
) {
    if (
        typeof completeSeason ===
        "function"
    ) {
        completeSeason(
            year
        );
    }

    addWorldProgressionEvent(
        "season_end",
        `Season ${year} completed`,
        `The ${year} cycling season has ended.`,
        {
            year
        }
    );

    return true;
}


// ============================================
// SEASON — PROCESS CHANGE
// ============================================

function processSeasonChange(
    previousDate,
    currentDate
) {
    if (
        !isNewSeason(
            previousDate,
            currentDate
        )
    ) {
        return false;
    }

    const previousYear =
        Number(
            String(
                previousDate
            ).slice(0, 4)
        );

    const currentYear =
        Number(
            String(
                currentDate
            ).slice(0, 4)
        );

    completePreviousSeason(
        previousYear
    );

    initializeNewSeason(
        currentYear
    );

    return true;
}


// ============================================
// WORLD — FULL PROGRESSION
// ============================================

function processWorldProgression(
    previousDate,
    currentDate
) {
    if (
        !previousDate ||
        !currentDate
    ) {
        return null;
    }

    const previous =
        new Date(
            `${previousDate}T00:00:00`
        );

    const current =
        new Date(
            `${currentDate}T00:00:00`
        );

    if (
        Number.isNaN(
            previous.getTime()
        ) ||
        Number.isNaN(
            current.getTime()
        )
    ) {
        return null;
    }

    const difference =
        Math.floor(
            (
                current.getTime() -
                previous.getTime()
            ) /
            (
                1000 *
                60 *
                60 *
                24
            )
        );

    if (difference <= 0) {
        return {
            days: 0,
            races: 0,
            seasonChanged: false
        };
    }

    const previousGameDate =
        game.career.currentDate;

    game.career.currentDate =
        currentDate;

    const result =
        advanceWorldSimulation(
            difference
        );

    const seasonChanged =
        processSeasonChange(
            previousGameDate,
            currentDate
        );

    return {
        ...result,

        seasonChanged
    };
}


// ============================================
// WORLD — SUMMARY
// ============================================

function getWorldProgressionSummary() {
    return {
        initialized:
            worldProgressionState.initialized,

        lastSimulationDate:
            worldProgressionState.lastSimulationDate,

        simulatedDays:
            worldProgressionState.simulatedDays,

        simulatedRaces:
            worldProgressionState.simulatedRaces,

        seasonChanges:
            worldProgressionState.seasonChanges,

        currentYear:
            getWorldYear(),

        recentEvents:
            getWorldProgressionEvents(10)
    };
}


// ============================================
// WORLD — RESET
// ============================================

function resetWorldProgression() {
    worldProgressionState.initialized = false;

    worldProgressionState.lastSimulationDate = null;

    worldProgressionState.simulatedDays = 0;

    worldProgressionState.simulatedRaces = 0;

    worldProgressionState.seasonChanges = 0;

    worldProgressionState.worldEvents = [];
}


// ============================================
// WORLD — INITIALIZE
// ============================================

function initializeWorldProgression() {
    worldProgressionState.initialized = true;

    worldProgressionState.lastSimulationDate =
        getWorldCurrentDate();

    return true;
}


initializeWorldProgression();
// ============================================
// CYCLING CAREER
// script.js — Del 33
// Core System Integration
// ============================================

const integrationState = {
    initialized: false,

    lastProcessedDate: null,

    systemsChecked: 0,

    systemsReady: 0,

    warnings: []
};


// ============================================
// INTEGRATION — SYSTEM CHECK
// ============================================

function checkSystem(
    name,
    requiredFunctions = [],
    requiredState = []
) {
    const result = {
        name,
        ready: true,
        missingFunctions: [],
        missingState: []
    };

    requiredFunctions.forEach(
        functionName => {
            if (
                typeof window !== "undefined" &&
                typeof window[functionName] !==
                    "function"
            ) {
                /*
                    Most of our functions are declared
                    directly in this script and are not
                    necessarily properties of window in
                    every environment.
                */

                try {
                    eval(functionName);
                } catch {
                    result.missingFunctions.push(
                        functionName
                    );
                }
            }
        }
    );

    requiredState.forEach(
        stateName => {
            try {
                eval(stateName);
            } catch {
                result.missingState.push(
                    stateName
                );
            }
        }
    );

    result.ready =
        result.missingFunctions.length === 0 &&
        result.missingState.length === 0;

    return result;
}


// ============================================
// INTEGRATION — REQUIRED SYSTEMS
// ============================================

function runSystemIntegrityCheck() {
    const checks = [

        checkSystem(
            "Game Core",
            [
                "changeScreen",
                "render",
                "startNewCareer"
            ],
            [
                "game"
            ]
        ),

        checkSystem(
            "Rider Creation",
            [
                "generateRiderFromCreation",
                "acceptGeneratedRider"
            ],
            [
                "riderCreation"
            ]
        ),

        checkSystem(
            "Career Time",
            [
                "getCurrentDate",
                "advanceToDate"
            ],
            [
                "careerTime"
            ]
        ),

        checkSystem(
            "Career Events",
            [
                "createCareerEvent",
                "addCareerEvent"
            ],
            [
                "careerEvents"
            ]
        ),

        checkSystem(
            "Inbox",
            [
                "addInboxMessage",
                "getInboxSummary"
            ],
            [
                "inboxState"
            ]
        ),

        checkSystem(
            "Team Structure",
            [
                "initializeTeamStructure",
                "getPlayerRole"
            ],
            [
                "teamStructure"
            ]
        ),

        checkSystem(
            "Training",
            [
                "createTrainingPlan",
                "completeTrainingPlan"
            ],
            [
                "trainingState"
            ]
        ),

        checkSystem(
            "Recovery",
            [
                "applyDailyRecovery",
                "getRecoveryStatus"
            ],
            [
                "recoveryState"
            ]
        ),

        checkSystem(
            "Race Preparation",
            [
                "createRacePreparation",
                "getRaceReadiness"
            ],
            [
                "racePreparationState"
            ]
        ),

        checkSystem(
            "Race Simulation",
            [
                "initializeRaceSimulation",
                "advanceRaceDistance"
            ],
            [
                "raceSimulationState"
            ]
        ),

        checkSystem(
            "Race Actions",
            [
                "executeRaceAction",
                "getAvailableRaceActions"
            ],
            [
                "raceActionState"
            ]
        ),

        checkSystem(
            "Race Resolution",
            [
                "resolveRaceDecision"
            ],
            [
                "raceResolutionState"
            ]
        ),

        checkSystem(
            "Race World",
            [
                "simulateRaceWorldStep"
            ],
            [
                "raceWorldState"
            ]
        ),

        checkSystem(
            "Race Synchronization",
            [
                "synchronizeRaceWorld"
            ],
            [
                "raceSyncState"
            ]
        ),

        checkSystem(
            "Race Progression",
            [
                "advanceRaceProgression"
            ],
            [
                "raceProgressionState"
            ]
        ),

        checkSystem(
            "Race Situations",
            [
                "generateNextImportantRaceSituation"
            ],
            [
                "raceSituationGeneratorState"
            ]
        ),

        checkSystem(
            "Race Controller",
            [
                "startControlledRace",
                "runControlledRaceStep"
            ],
            [
                "raceControllerState"
            ]
        ),

        checkSystem(
            "Race Results",
            [
                "finalizeRaceWithResults"
            ],
            [
                "raceResultsState"
            ]
        ),

        checkSystem(
            "Stage Race",
            [
                "startStageRace",
                "completeCurrentStage"
            ],
            [
                "stageRaceState"
            ]
        ),

        checkSystem(
            "Calendar",
            [
                "getNextCalendarRace",
                "requestRace"
            ],
            [
                "calendarState"
            ]
        ),

        checkSystem(
            "Career History",
            [
                "addHistoryEntry",
                "getCareerRecords"
            ],
            [
                "careerHistoryState"
            ]
        ),

        checkSystem(
            "Save System",
            [
                "saveCareer",
                "loadCareer"
            ],
            [
                "saveState"
            ]
        ),

        checkSystem(
            "World Progression",
            [
                "processWorldProgression"
            ],
            [
                "worldProgressionState"
            ]
        )
    ];

    integrationState.systemsChecked =
        checks.length;

    integrationState.systemsReady =
        checks.filter(
            check => check.ready
        ).length;

    integrationState.warnings =
        checks
            .filter(
                check => !check.ready
            )
            .map(check => ({
                system: check.name,

                missingFunctions:
                    check.missingFunctions,

                missingState:
                    check.missingState
            }));

    return checks;
}


// ============================================
// INTEGRATION — DAILY PLAYER SYSTEMS
// ============================================

function processDailyPlayerSystems() {
    if (!game.player) {
        return false;
    }

    /*
        Recovery and physical status.
    */

    if (
        typeof applyDailyRecovery ===
        "function"
    ) {
        applyDailyRecovery();
    }

    /*
        Race preparation.
    */

    if (
        typeof racePreparationState !==
            "undefined" &&
        racePreparationState.active
    ) {
        if (
            typeof applyRacePreparationDay ===
            "function"
        ) {
            applyRacePreparationDay();
        }
    }

    return true;
}


// ============================================
// INTEGRATION — CAREER DATE ADVANCEMENT
// ============================================

function processCareerDateChange(
    previousDate,
    currentDate
) {
    if (
        !previousDate ||
        !currentDate
    ) {
        return null;
    }

    const previous =
        new Date(
            `${previousDate}T00:00:00`
        );

    const current =
        new Date(
            `${currentDate}T00:00:00`
        );

    if (
        Number.isNaN(
            previous.getTime()
        ) ||
        Number.isNaN(
            current.getTime()
        )
    ) {
        return null;
    }

    const days =
        Math.floor(
            (
                current.getTime() -
                previous.getTime()
            ) /
            (
                1000 *
                60 *
                60 *
                24
            )
        );

    if (days <= 0) {
        return {
            days: 0
        };
    }

    /*
        Run player systems for every simulated day.
        We intentionally keep the player simulation
        lightweight between important events.
    */

    for (
        let day = 0;
        day < days;
        day++
    ) {
        processDailyPlayerSystems();
    }

    /*
        World simulation.
    */

    let worldResult = null;

    if (
        typeof processWorldProgression ===
        "function"
    ) {
        worldResult =
            processWorldProgression(
                previousDate,
                currentDate
            );
    }

    integrationState.lastProcessedDate =
        currentDate;

    return {
        days,

        world:
            worldResult
    };
}


// ============================================
// INTEGRATION — CONTINUE
// ============================================

function processCareerContinue() {
    const previousDate =
        getCalendarCurrentDate();

    /*
        The existing Continue system decides
        where the career should move.
    */

    let continueResult = null;

    if (
        typeof processNextCareerEvent ===
        "function"
    ) {
        continueResult =
            processNextCareerEvent();
    }

    const currentDate =
        getCalendarCurrentDate();

    if (
        previousDate !== currentDate
    ) {
        processCareerDateChange(
            previousDate,
            currentDate
        );
    }

    autoSaveCareer();

    return {
        previousDate,

        currentDate,

        continueResult
    };
}


// ============================================
// INTEGRATION — RACE COMPLETION
// ============================================

function processCompletedRace(
    race,
    result
) {
    if (!race) {
        return false;
    }

    /*
        Store result in career history.
    */

    if (
        result &&
        typeof saveCareerRaceResult ===
        "function"
    ) {
        const historyResult =
            saveCareerRaceResult(
                result
            );

        if (
            historyResult &&
            typeof addRaceResultToSeason ===
            "function"
        ) {
            addRaceResultToSeason(
                historyResult
            );
        }
    }

    /*
        Mark player calendar entry completed.
    */

    if (
        typeof getPlayerCalendarEntry ===
        "function"
    ) {
        const entry =
            getPlayerCalendarEntry(
                race.id
            );

        if (entry) {
            entry.completed = true;
        }
    }

    /*
        Save after a race.
    */

    saveAfterMajorEvent(
        "race completion"
    );

    return true;
}


// ============================================
// INTEGRATION — CONTRACT EVENT
// ============================================

function processContractChange(
    contract
) {
    if (!contract) {
        return false;
    }

    game.contract =
        contract;

    addHistoryEntry({
        type: "contract",

        title:
            "Contract Updated",

        description:
            "The player's contract has been updated.",

        date:
            getCalendarCurrentDate(),

        data:
            contract
    });

    saveAfterMajorEvent(
        "contract change"
    );

    return true;
}


// ============================================
// INTEGRATION — MAJOR DECISION
// ============================================

function processMajorCareerDecision(
    title,
    description,
    data = {}
) {
    addCareerMajorMoment(
        title,
        description,
        data
    );

    addHistoryEntry({
        type: "decision",

        title,

        description,

        date:
            getCalendarCurrentDate(),

        data
    });

    saveAfterMajorEvent(
        "major decision"
    );

    return true;
}


// ============================================
// INTEGRATION — RACE START
// ============================================

function processRaceStart(
    race
) {
    if (!race) {
        return false;
    }

    game.currentRace =
        race;

    game.currentScreen =
        "race";

    if (
        typeof addHistoryEntry ===
        "function"
    ) {
        addHistoryEntry({
            type: "race_start",

            title:
                race.name,

            description:
                `Race started: ${race.name}`,

            date:
                race.startDate ||
                getCalendarCurrentDate(),

            data: {
                raceId:
                    race.id
            }
        });
    }

    return true;
}


// ============================================
// INTEGRATION — CAREER STATE
// ============================================

function getCoreCareerState() {
    return {
        date:
            getCalendarCurrentDate(),

        year:
            getWorldYear(),

        player:
            game.player,

        team:
            game.team,

        contract:
            game.contract,

        agent:
            game.agent,

        currentRace:
            game.currentRace,

        nextRace:
            getNextCalendarRace(),

        records:
            getCareerRecords(),

        inbox:
            typeof getInboxSummary ===
            "function"
                ? getInboxSummary()
                : null,

        recovery:
            typeof getRecoveryStatus ===
            "function"
                ? getRecoveryStatus()
                : null,

        calendar:
            typeof getCalendarSummary ===
            "function"
                ? getCalendarSummary()
                : null
    };
}


// ============================================
// INTEGRATION — FULL STATUS
// ============================================

function getSystemIntegrationStatus() {
    const checks =
        runSystemIntegrityCheck();

    return {
        initialized:
            integrationState.initialized,

        systemsChecked:
            integrationState.systemsChecked,

        systemsReady:
            integrationState.systemsReady,

        systemsNotReady:
            integrationState.systemsChecked -
            integrationState.systemsReady,

        warnings:
            integrationState.warnings,

        checks
    };
}


// ============================================
// INTEGRATION — DEBUG
// ============================================

function debugCoreIntegration() {
    const status =
        getSystemIntegrationStatus();

    console.log(
        "========== CORE INTEGRATION =========="
    );

    console.log(
        "Systems checked:",
        status.systemsChecked
    );

    console.log(
        "Systems ready:",
        status.systemsReady
    );

    console.log(
        "Warnings:",
        status.warnings
    );

    console.log(
        "Career state:",
        getCoreCareerState()
    );

    console.log(
        "======================================"
    );

    return {
        status,

        career:
            getCoreCareerState()
    };
}


// ============================================
// INTEGRATION — INITIALIZE
// ============================================

function initializeCoreIntegration() {
    integrationState.initialized =
        true;

    integrationState.lastProcessedDate =
        getCalendarCurrentDate();

    const checks =
        runSystemIntegrityCheck();

    console.log(
        "Core integration initialized."
    );

    console.log(
        `Systems ready: ${checks.filter(
            check => check.ready
        ).length}/${checks.length}`
    );

    return true;
}


initializeCoreIntegration();