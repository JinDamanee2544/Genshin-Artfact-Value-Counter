const splitStat = (word) => {
    return word.split("_").slice(2).join('-')
}
const formatEquip = (equip) =>{
    switch (equip.split('_')[1]) {
        case 'BRACER':
        return 'FLOWER'
        case 'NECKLACE':
        return 'FEATHER'
        case 'SHOES':
        return 'WATCH'
        case 'RING':
        return 'GOBLET'
        case 'DRESS':
        return 'HELMET'
        default:
        return null;
    }
}
const formatChar = (charID) => {
    switch (charID) {
        case 10000022: return 'Venti'
        case 10000030: return 'Zhongli'
        case 10000033: return 'Childe'
        case 10000037: return 'Ganyu'
        case 10000038: return 'Albedo'
        case 10000052: return 'Raiden Shogun'
        case 10000054: return 'Kokomi'
        case 10000056: return 'SARA'
        case 10000057: return 'Itto'
        case 10000058: return 'YAE'
        default:
        return charID
    }
} 
const simplifyStat = (status) => {
    switch (status) {
        case 'HP': return 'HP'
        case 'ATTACK': return 'ATK'
        case 'DEFENSE': return 'DEF'
        
        case 'HP-PERCENT': return 'HP %'
        case 'ATTACK-PERCENT': return 'ATK %'
        case 'DEFENSE-PERCENT': return 'DEF %'
        
        case 'ELEMENT-MASTERY' : return 'EM'
        case 'CHARGE-EFFICIENCY' : return 'ER %'
        case 'HEAL-ADD' : return 'HEALING%'

        case 'CRITICAL' : return 'CRIT Rate %'
        case 'CRITICAL-HURT' : return 'CRIT DMG %'
    
        case 'ICE-ADD-HURT' : return 'Cryo DMG %'
        case 'ROCK-ADD-HURT' : return 'Geo DMG %'
        case 'FIRE-ADD-HURT' : return 'Pyro DMG %'
        case 'WATER-ADD-HURT' : return 'Hydro DMG %'
        case 'ELEC-ADD-HURT' : return 'Eletro DMG %'
        case 'WIND-ADD-HURT' : return 'Anemo DMG %'

        default: return status
    }
}
const formatStat = (stat) =>{
    return simplifyStat(splitStat(stat));
}
const statValueCalculator = ({statVal,statType}) => {
    switch (statType) {
        case 'HP': return parseFloat((statVal/254/2).toFixed(2));
        case 'DEF': return parseFloat((statVal/20/2).toFixed(2));
        case 'ATK': return parseFloat((statVal/17/2).toFixed(2));

        case 'HP %': return parseFloat((statVal/5).toFixed(2));
        case 'DEF %': return parseFloat((statVal/6.2).toFixed(2));
        case 'ATK %': return parseFloat((statVal/5).toFixed(2));

        case 'EM' : return parseFloat((statVal/20).toFixed(2));
        case 'ER %' : return parseFloat((statVal/5.5).toFixed(2))
        case 'CRIT Rate %' : return parseFloat((statVal/3.3).toFixed(2))
        case 'CRIT DMG %' : return parseFloat((statVal/6.6).toFixed(2))
    
        default: return statVal
    }
}

export {formatChar,formatEquip,formatStat,statValueCalculator}