class Hero{
    constructor(name="", victories=0, defeats=0){
        this.name = name;
        this.victories = victories;
        this.defeats = defeats;
    }
    getVictories(){
        return parseInt(this.victories);
    }
    getDefeats(){
        return parseInt(this.defeats);
    }
}

class Match{
    #rankingLevels = [{level:"Ferro",min:0,max:10},
        {level:"Bronze", min:11, max:20},
        {level:"Prata", min:21, max:50},
        {level:"Ouro", min:51, max:80},
        {level:"Diamante", min:81, max:90},
        {level:"Lendário", min:91, max:100},
        {level:"Imortal", min:101, max:99999}];
        classifyHeroRanking(hero){
            const heroVictoryAverage = (hero.getVictories - hero.getDefeats);
            for (const level = 0; level < this.#rankingLevels.length; level++){
                if (heroVictoryAverage >= this.#rankingLevels[i].min && heroVictoryAverage <= this.#rankingLevels[i].max){
                    console.log(`O Herói tem de saldo de ${heroVictoryAverage} está no nível de ${this.#rankingLevels[level].level}`)
                    return
                }
            }
        }
}

let heroi1 = new Hero("Axel",12,1);
let Partida1 = new Match();
Partida1.classifyHeroRanking(heroi1);