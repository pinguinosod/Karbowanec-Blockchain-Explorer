var api = 'http://seed80.cryptoluka.cl:52421';
var blockTargetInterval = 900;
var coinUnits = 100000000;
var symbol = 'LUK';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
    "luk": [
	    	["luk.4miner.me", "http://us-lu.4miner.me:8118"],
	    	["luk.ciapool.com", "http://luk.ciapool.com:8117"],
	    	["luka2.bericul.com","http://luka2.bericul.com:8117"],
	    	["luka.chilepool.cl", "http://luka.chilepool.cl:8117"],
	    	["pool.cryptoluka.cl", "http://131.221.32.79:9995"]
    ]
};