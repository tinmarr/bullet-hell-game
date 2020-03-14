// 10 x 12 array max

class Level {
	constructor(scene, enemyArray){
        this.scene = scene;
        this.boxSize = 50;
        this.array = scene.cache.text.get(enemyArray).split('').filter((e,i,l)=>{return e !== '\n'}).map(Number);
		this.conversions = [null, BasicEnemy, MediumEnemy, HardEnemy, SniperEnemy, BomberEnemy, Boss1];
    }
    generateLevel(){
        for (var i=0;i<this.array.length;i++){
            if (this.conversions[this.array[i]] !== null){
                entities.add(new (this.conversions[this.array[i]])(this.scene, 25 + (i%10 * 50), 25 + parseInt((i/10).toString())*50));
            }
        }
    }
}