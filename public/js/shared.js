function finder(arr, name){
    return arr.find((e) => {return e.name === name;});
}
function setUpGatherRates(data){
    let gatherRates = data.units[0].gathering;
    //Get all of the gather rates with various upgrades applied.
    gatherRates["wheelbarrow"] = {res: "food", gatherRate: gatherRates.farmer.gatherRate + finder(data.upgrades, "wheelbarrow").effects.gatherRate};
    gatherRates["hand cart"] = {res: "food", gatherRate: gatherRates.farmer.gatherRate + finder(data.upgrades, "wheelbarrow").effects.gatherRate + finder(data.upgrades, "hand cart").effects.gatherRate};
    gatherRates["fishing ship shore"] = {res: "food", gatherRate: 0.28};
    gatherRates["fishing ship deep"] = {res: "food", gatherRate: 0.49};
    gatherRates["fishing ship shore gillnets"] = {res: "food", gatherRate: parseFloat((0.28 + 0.28 * 0.25).toFixed(2))};
    gatherRates["fishing ship deep gillnets"] = {res: "food", gatherRate: parseFloat((0.49 + 0.49 * 0.25).toFixed(2))};
    gatherRates["fish trap"] = {res: "food", gatherRate: 0.35};
    gatherRates["fish trap gillnets"] = {res: "food", gatherRate: parseFloat((0.35 + 0.35 * 0.25).toFixed(2))};
    gatherRates["double-bit axe"] = {
        res: "wood", gatherRate: 
            parseFloat(
            (
            gatherRates.lumberjack.gatherRate * 
            parseFloat(finder(data.upgrades, "double-bit axe").effects.gatherRate[1].substr(1))
            ).toFixed(2)
            )
    };
    gatherRates["bow saw"] = {
        res: "wood", gatherRate: 
            parseFloat(
            (
            gatherRates.lumberjack.gatherRate * 
            parseFloat(finder(data.upgrades, "double-bit axe").effects.gatherRate[1].substr(1)) *
            parseFloat(finder(data.upgrades, "bow saw").effects.gatherRate[1].substr(1))
            ).toFixed(2)
            )
    };
    gatherRates["two-man saw"] = {
        res: "wood", gatherRate: 
            parseFloat(
            (
            gatherRates.lumberjack.gatherRate * 
            parseFloat(finder(data.upgrades, "double-bit axe").effects.gatherRate[1].substr(1)) *
            parseFloat(finder(data.upgrades, "bow saw").effects.gatherRate[1].substr(1)) *
            parseFloat(finder(data.upgrades, "two-man saw").effects.gatherRate[1].substr(1))
            ).toFixed(2)
            )
    };
    gatherRates["gold mining"] = {
        res: "gold", gatherRate: 
            parseFloat(
            (
            gatherRates["gold miner"].gatherRate * 
            parseFloat(finder(data.upgrades, "gold mining").effects.gatherRate[1].substr(1))
            ).toFixed(2)
            )
    };
    gatherRates["gold shaft mining"] = {
        res: "gold", gatherRate: 
            parseFloat(
            (
            gatherRates["gold miner"].gatherRate * 
            parseFloat(finder(data.upgrades, "gold mining").effects.gatherRate[1].substr(1)) *
            parseFloat(finder(data.upgrades, "gold shaft mining").effects.gatherRate[1].substr(1))
            ).toFixed(2)
            )
    };
    gatherRates["relic"] = {
        res: "gold", gatherRate: 0.5
    };
    gatherRates["stone mining"] = {
        res: "stone", gatherRate: 
            parseFloat(
            (
            gatherRates["stone miner"].gatherRate * 
            parseFloat(finder(data.upgrades, "stone mining").effects.gatherRate[1].substr(1))
            ).toFixed(2)
            )
    };
    gatherRates["stone shaft mining"] = {
        res: "stone", gatherRate: 
            parseFloat(
            (
            gatherRates["stone miner"].gatherRate * 
            parseFloat(finder(data.upgrades, "stone mining").effects.gatherRate[1].substr(1)) *
            parseFloat(finder(data.upgrades, "stone shaft mining").effects.gatherRate[1].substr(1))
            ).toFixed(2)
            )
    };
    gatherRates["feitoria food"] = {
        res: "food", gatherRate: 1.6
    };
    gatherRates["feitoria wood"] = {
        res: "wood", gatherRate: 1
    };
    gatherRates["feitoria gold"] = {
        res: "gold", gatherRate: 0.7
    };
    gatherRates["feitoria stone"] = {
        res: "stone", gatherRate: 0.3
    };
    gatherRates["trade cart"] = {
        res: "gold", gatherRate: 0.4
    };
    
    return gatherRates;
}