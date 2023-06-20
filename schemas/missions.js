const deployments = [
    {
        name: 'Search and Destroy',
        img: '/images/SearchAndDestroy.png'
    },
    {
        name: 'Crucible of Battle',
        img: '/images/CrucibleOfBattle.png'
    },
    {
        name: 'Hammer and Anvil',
        img: '/images/HammerAndAnvil.png'
    }
];

const primaryMissions = [
    {
        name: 'Sites of Power',
        description: `The objective markers in No Man’s Land are sites of power. At the end of each command phase, the player whose turn it is empowers all sites of power that they control that have one or more Character models from their army within range; each site of power remains empowered by that player while one or more of their Character models remains within range of it`
    },
    {
        name: 'The Ritual',
        description: `When setting up the battlefield, remove all objective markers in No Man’s Land except the one closest to the centre of the battlefield.
        In each player’s Shooting phase, the player whose turn it is can select one unit from their army that is not Battle-shocked and is eligible to shoot. Until the end of that turn, that unit is not eligible to shoot or declare a charge. At the end of that turn, the player whose turn it is can set up one objective marker wholly within No Man’s Land and within 1” of that unit provided it can be set up exactly 9” from one other objective marker and not within 6” of any other objective marker.
        `
    },
    {
        name: 'Deploy Servo Skulls',
        description: `The objective markers that start the battle in No Man’s Land are servo-skulls. At the end of each turn, each of these objective markers can be moved up to 6” in any direction by the player that controls it. When moving objective markers, they cannot end that move on top of any other objective marker or model, or inside impassable parts of terrain features (such as the walls of a ruin).`
    }
];

const secondaryMissions = [
    {
        name: 'Behind Enemy Lines',
        description: `At the end of your turn, if two or more units from your army (excluding Aircraft) are wholly within your opponent’s deployment zone, this Secondary Mission is achieved and you score 4VP
        If, at the end of your turn, only one unit from your army (excluding Aircraft) is wholly within your opponent’s deployment zone, this Secondary Mission is still achieved, but in this instance you score 2VP instead of 4VP.
        If you are using Tactical Missions, then when this Secondary Mission is achieved you score an extra 1VP (for a maximum of 5VP).
        `,
        fixed: true,
        achieved: 0,
        discard: 0
    },
    {
        name: 'Assassination',
        description: `If you are using Fixed Missions, then while this Secondary Mission is active, each time an enemy Character model is destroyed, you score 4VP.
        If you are using Tactical Missions, then at the end of the turn, if either of the conditions below are satisfied, this Secondary Mission is achieved and you score 5VP:
        One or more enemy Character units were destroyed this turn.
        All Character units from your opponent’s Army Roster have been destroyed during the battle.
        Note that if you are using Tactical Missions, this Secondary Mission is achieved even if such a unit was destroyed and then subsequently resurrected for any reason.
        `,
        fixed: true,
        achieved: 0,
        discard: 0
    },
    {
        name: 'Bring it Down',
        description: `While this Secondary Mission is active, each time an enemy Monster or Vehicle model is destroyed, you score 2VP and an extra 1VP for each of the conditions below that are satisfied (all are cumulative):
        The destroyed model had a Wounds characteristic of 10+
        The destroyed model had a Wounds characteristic of 15+
        The destroyed model had a Wounds characteristic of 20+
        Note that VP are scored even if such a model is destroyed and then subsequently resurrected for any reason. If you score any VP from this Secondary Mission during a turn, then at the end of that turn this Secondary Mission is achieved.
        If you are using Tactical Missions, then when this Secondary Mission is achieved you score an extra 1VP. However, if you are using Tactical Missions, you cannot score more than 8VP in total from this Secondary Mission.
        `,
        fixed: true,
        achieved: 0,
        discard: 0
    },
    {
        name: 'Engage on All Fronts',
        description: `At the end of your turn, if you have one or more qualifying units (see below) from your army wholly within three or more different table quarters, and those units are all more than 3” away from any other table quarter, this Secondary Mission is achieved and you score 4VP if you have qualifying units in four different table quarters, or 2VP if you have qualifying units in three different table quarters.
        While a unit is Battle-shocked, it is not a qualifying unit.
        If, when you draw this Secondary Mission card, you only have one or two qualifying units remaining in your army, you can discard this Secondary Mission card and draw a new Secondary Mission card.
        If you are using tactical Missions, then when this Secondary Mission is achieved you score an extra 1VP (for a maximum of 5VP).
        `,
        fixed: true,
        achieved: 0,
        discard: 0
    },
    {
        name: 'Storm Hostile Objectives',
        description: `At the end of your turn, if either of the below conditions are satisfied, this Secondary Mission is achieved and you score 4VP if you are using Fixed Missions, or 5VP if you are using Tactical Missions:
        You control one or more objective markers that were controlled by your opponent at the start of your turn.
        Your opponent did not control any objective markers at the start of your turn and you control one or more objective markers that you did not control at the start of your turn.
        This Secondary Mission cannot be achieved during the first battle round; if you randomly drew this Secondary Mission card during the first battle round, draw a new Secondary Mission card and shuffle this Secondary Mission card back into your Secondary Mission deck. 
        `,
        fixed: true,
        achieved: 0,
        discard: 0
    },
    {
        name: 'Cleanse',
        description: `In your Shooting phase, you can select one or more units from your army that are not Battle-shocked and are eligible to shoot. Until the end of your turn, the units you selected are not eligible to shoot or declare a charge.
        At the end of your turn, each objective marker that is not within your deployment zone that you control that has one or more of these selected units within range is cleansed by your army.
        If one or more objective markers are cleansed by your army this turn, this Secondary Mission is achieved and you score a number of VP depending on the number of objective markers cleansed by your army this turn, as follows:
        1 objective marker cleansed = 2VP if you are using Fixed Missions, or 3VP if you are using Tactical Missions.
        2 or more objective markers cleansed = 4VP if you are using Fixed Missions, or 5VP if you are using Tactical Missions.
        `,
        fixed: true,
        achieved: 0,
        discard: 0
    },
    {
        name: 'Deploy Teleport Homers',
        description: `In your shooting phase, you can select one unit from your army that is not Battle-shocked and is eligible to shoot. Until the end of your turn, that unit is not eligible to shoot or declare a charge.
        At the end of your turn, if that unit is within your opponents deployment zone, or within 6” of the centre of the battlefield, it deploys a teleport homer at that locations, this Secondary Mission is achieved and you score a number of VP depending on where the teleport homer was deployed, as follows:
        Centre of battlefield = 2VP if you are using Fixed Missions, or 3VP if you are using Tactical Missions
        Opponent’s deployment zone = 4VP if you are using Fixed Missions, or 5VP if you are using Tactical Missions
        `,
        fixed: true,
        achieved: 0,
        discard: 0
    },
    {
        name: 'Investigate Signals',
        description: `In your Shooting phase, you can select one or more units from your army that are not Battle-shocked and are eligible to shoot. Until the end of your turn, the units you selected are not eligible to shoot or declare a charge.
        At the end of your turn, each corner of the battlefield that has one or more of these selected units wholly within 9” of it is scanned by your army.
        If one or more corners are scanned by your army, this Secondary `,
        fixed: 0
    },
    {
        name: 'No Prisoners',
        description: `While this Secondary Mission is active, each time an enemy unit is destroyed, you score 2VP (to a maximum of 5VP).
        Note that VP are scored even if such a unit is destroyed and then subsequently resurrected for any reason. If you score any VP from this Secondary Mission during a turn, then at the end of that turn this Secondary Mission is achieved.`,
        fixed: 0
    },
    {
        name: 'Extend Battle Lines',
        description: `At the end of your turn, if you control one or more objective markers in your own deployment zone and you also control one or more objective markers in No Man’s Land, this Secondary Mission is achieved and you score 5VP.
        If you only have one unit remaining in your army, then this Secondary Mission is instead achieved at the end of your turn if that unit controls one objective marker in No Man’s Land, but in this instance you score 2VP instead of 5VP.`,
        fixed: 0
    },
    {
        name: 'Defend Stronghold',
        description: `At the end of your opponent’s turn, or at the end of the battle (whichever comes first), if you control one or more objective markers in your own deployment zone, this Secondary Mission is achieved and you score 3VP.
        This Secondary Mission cannot be achieved during the first battle round; if you draw this Secondary Mission card during the first battle round, draw a new Secondary Mission card and shuffle this Secondary Mission card back into your Secondary Mission deck.`,
        fixed: 0
    },
    {
        name: 'Overwhelming Force',
        description: `While this Secondary Mission is active, each time an enemy unit that started the turn within range of an objective marker is destroyed, you score 3VP (to a maximum of 5VP).
        Note that VP are scored even if such a unit is destroyed and then subsequently resurrected for any reason. If you score any VP from this Secondary Mission during a turn, then at the end of that turn this Secondary Mission is achieved.`,
        fixed: 0
    },
    {
        name: 'Secure No Mans Land',
        description: `At the end of your turn, if you control two or more objective markers in No Man’s Land, this Secondary Mission is achieved and you score 5VP.
        If, at the end of your turn, you only control one objective marker in No Man’s Land, this Secondary Mission is still achieved, but in this instance you score 2VP instead of 5VP.`,
        fixed: 0
    },
    {
        name: 'Area Denial',
        description: `At the end of your turn, if one or more units from your army (excluding Battle-shocked units) are wholly within 6” of the centre of the battlefield, and there are no enemy units wholly within 6” of the centre of the battlefield, this Secondary Mission is achieved and you score 5VP.
        If, at the end of your turn, there are one or more enemy units wholly within 6” of the centre of the battlefield, but there are no enemy units within 3” of the centre of the battlefield, then this Secondary Mission is still achieved, but in this instance you score 3VP instead of 5VP.`,
        fixed: 0
    },
    {
        name: 'A Tempting Target',
        description: `When this Secondary Mission card is drawn, your opponent must select one objective marker in No Man’s Land.
        At the end of your turn, if you control that selected objective marker, this Secondary Mission is achieved and you score 5VP.`,
        fixed: 0
    },
    {
        name: 'Capture Enemy Outpost',
        description: `At the end of your turn, if you control one or more objective markers in your opponent’s deployment zone, this Secondary Mission is achieved and you score 8VP.`,
        fixed: 0
    }
];

const gambits = [
    {
        name: 'Delayed Tactics',
        description: `Determine Distraction Target: Your Distraction target will be equal to half the number of enemy units that are within Engagement Range of one or more units from your army (rounding up) at the end of your fifth turn. If your Distraction target is less than 4, it is increased to 4.
        Distract Enemy Units: At the end of your fifth turn, roll one D6 for each enemy unit that is within Engagement Range of one or more units from your army. Add 1 to the result if that enemy unit is Battle-shocked and subtract 1 if one or more of the units from your army that are within Engagement Range of it are Battle-shocked. On a 4+, that enemy unit has been successfully delayed.
        Determine Gambit Success: If the number of enemy units that have been successfully delayed is greater than or equal to your Distraction target, this Gambit is successfully completed and you score 30VP.`
    },
    {
        name: 'Orbital Strike Coordinates',
        description: `At the end of your fifth turn, if one or more units from your army that are not Battle-shocked are wholly within 9” of a corner of the battlefield, and those units are not within your own deployment zone, roll 2D6.
        Add 1 to the result for every other corner of the battlefield that has one or more units from your army wholly within 9” of it (excluding units that are Battle-shocked or within Engagement Range of any enemy units).
        If the final result is 12 or more, this Gambit is successfully completed and you score 30VP.`
    },
    {
        name: 'Emergency Evacuation',
        description: `Determine Evacuation Target: Your Evacuation target will be equal to half the number of units from your army that are on the battlefield at the end of the battle (rounding up), including units embarked with Transport models that are on the battlefield. If your Evacuation target is less than 4, it is increased to 4.
        Evacuate Units: At the end of your fifth turn, roll one D6 for each unit from your army that is wholly within 6” of the centre of the battlefield, subtracting 1 from the result if that unit is Battle-shocked. On a 4+, that unit (and any units embarked within it) are marked for evacuation.
        Determine Gambit Success: If the number of your units that are marked for evacuation is greater than or equal to your Evacuation target, this Gambit is successfully completed and you score 30VP.`
    }
];

const specials = [
    {
        name: 'Sweep and Clear',
        description: `In this mission, if a player controls an objective marker at the end of their Command phase, that objective marker remains under their control, even if they have no models within range of it, unless their opponent controls it at the end of any subsequent Command phase.`
    },
    {
        name: 'Hidden Supplies',
        description: `In this mission, players must set up one additional objective marker in No Man’s Land.

        Unless the Chosen Battlefield mission rule is also in effect, before setting up this new objective marker, players must first move the objective marker in the centre of the battlefield 6” directly towards one of the corners of the battlefield (if No Man’s Land touches any corners of the battlefield, you must move the objective marker towards one of those corners). Players then set up the new objective marker 6” from the centre of the battlefield towards the diagonally opposite corner of the battlefield to the previously moved objective marker.`
    },
    {
        name: 'Supply Lines',
        description: `In this mission, if a player controls the objective marker in their own deployment zone at the start of their Command phase, they roll one D6: on a 4+, that player gains 1CP.`
    },
    {
        name: 'Vox Static',
        description: 'Command Reroll costs 2CP'
    },
    {
        name: 'Chilling Rain',
        description: 'No special rules'
    },
    {
        name: 'Delayed Reinforcements',
        description: 'Reinforcements come in turn 2 on a 3+'
    }
];

export { deployments, gambits, primaryMissions, secondaryMissions, specials };