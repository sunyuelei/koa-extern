module.exports = async (ctx,next){
	console.log('test1');
	await next;
}