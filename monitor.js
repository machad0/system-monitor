const os = require('os')

let systemInfo = {
	architecture: os.arch(),
	platform: os.platform(),
	amountMemory: os.totalmem(),
	freeMem: os.freemem(),

	percentMemory: function () {
		return Math.floor((100 * this.freeMem) / this.amountMemory)
	} 
};

console.log('System architecture: ', systemInfo.architecture)
console.log('OS Platform: ', systemInfo.platform)
console.log('Free memory:', `${systemInfo.percentMemory()}%`)
