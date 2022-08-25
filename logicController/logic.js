/* 
    Updated Character till 2.8 patch
    No longer support new character
*/

const splitStat = (word) => {
    return word.split("_").slice(2).join("-");
};
const formatEquip = (equip) => {
    switch (equip.split("_")[1]) {
        case "BRACER":
            return "FLOWER";
        case "NECKLACE":
            return "FEATHER";
        case "SHOES":
            return "WATCH";
        case "RING":
            return "GOBLET";
        case "DRESS":
            return "HELMET";
        default:
            return "ERROR";
    }
};
const formatChar = (charID) => {
    switch (parseInt(charID % 100)) {
        case 2:
            return "Kamisato Ayaka";
        case 22:
            return "Venti";
        case 25:
            return "Xingqiu";
        case 26:
            return "Xiao";
        case 30:
            return "Zhongli";
        case 32:
            return "Bennett";
        case 33:
            return "Childe";
        case 37:
            return "Ganyu";
        case 38:
            return "Albedo";
        case 43:
            return "Sucrose";
        case 46:
            return "Hutao";
        case 47:
            return "Kaedehara Kazuha";
        case 49:
            return "Yoimiya";
        case 52:
            return "Raiden Shogun";
        case 54:
            return "Kokomi";
        case 56:
            return "Sara";
        case 57:
            return "Itto";
        case 58:
            return "Yae";
        case 55:
            return "Gorou";
        case 60:
            return "Yelan";
        case 63:
            return "Shenhe";
        case 64:
            return "Yunjin";
        case 66:
            return "Kamisato Ayato";

        default:
            return charID;
    }
};
const simplifyStat = (status) => {
    switch (status) {
        case "HP":
            return "HP";
        case "ATTACK":
            return "ATK";
        case "DEFENSE":
            return "DEF";

        case "HP-PERCENT":
            return "HP %";
        case "ATTACK-PERCENT":
            return "ATK %";
        case "DEFENSE-PERCENT":
            return "DEF %";

        case "ELEMENT-MASTERY":
            return "EM";
        case "CHARGE-EFFICIENCY":
            return "ER %";
        case "HEAL-ADD":
            return "HEALING%";

        case "CRITICAL":
            return "CRIT Rate %";
        case "CRITICAL-HURT":
            return "CRIT DMG %";

        case "ICE-ADD-HURT":
            return "Cryo DMG %";
        case "ROCK-ADD-HURT":
            return "Geo DMG %";
        case "FIRE-ADD-HURT":
            return "Pyro DMG %";
        case "WATER-ADD-HURT":
            return "Hydro DMG %";
        case "ELEC-ADD-HURT":
            return "Eletro DMG %";
        case "WIND-ADD-HURT":
            return "Anemo DMG %";

        default:
            return status;
    }
};
const formatStat = (stat) => {
    return simplifyStat(splitStat(stat));
};
const statValueCalculator = ({ statVal, statType }) => {
    switch (statType) {
        case "HP":
            return parseFloat((statVal / 254 / 2).toFixed(2));
        case "DEF":
            return parseFloat((statVal / 20 / 2).toFixed(2));
        case "ATK":
            return parseFloat((statVal / 17 / 2).toFixed(2));

        case "HP %":
            return parseFloat((statVal / 5).toFixed(2));
        case "DEF %":
            return parseFloat((statVal / 6.2).toFixed(2));
        case "ATK %":
            return parseFloat((statVal / 5).toFixed(2));

        case "EM":
            return parseFloat((statVal / 20).toFixed(2));
        case "ER %":
            return parseFloat((statVal / 5.5).toFixed(2));
        case "CRIT Rate %":
            return parseFloat((statVal / 3.3).toFixed(2));
        case "CRIT DMG %":
            return parseFloat((statVal / 6.6).toFixed(2));

        default:
            return statVal;
    }
};

export { formatChar, formatEquip, formatStat, statValueCalculator };