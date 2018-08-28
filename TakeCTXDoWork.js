/**
* @param context {WebtaskContext}
*/
module.exports = function (ctx, done) {
    if (ctx.data.number <= 30 && ctx.data.number >= 0)
        if (ctx.data.algorithm == "fib")
            done(null, 'The ' + ctx.data.number + ' nth fibbonacci number is ' + fib(ctx.data.number));
        else if (ctx.data.algorithm == "fact")
            done(null, 'The ' + ctx.data.number + ' nth factorial number is ' + fact(ctx.data.number));
        else if (ctx.data.algorithm == "fibSeq")
            done(null, 'The fibbonacci sequence for ' + ctx.data.number + " iterations is " + fibSeq(ctx.data.number));
        else if (ctx.data.algorithm == "factSeq")
            done(null, 'The factorial sequence for ' + ctx.data.number + " iterations is " + factSeq(ctx.data.number));
        else
            done(null, 'No Args Given, or no valid args given, ending');
    else if (ctx.data.number > 30 || ctx.data.number < 0)
        done(null, 'Please use a number >=0 and <= 30');
    else
        done(null, 'No Args Given, or no valid args given, ending');
}

function fib(ThisInt)
{
    if (ThisInt == 0) return ThisInt;
    else if (ThisInt == 1) return ThisInt;
    else return fib( ThisInt - 1) + fib( ThisInt - 2 );
};
    
function fact(ThisInt)
{
    if (ThisInt == 0 || ThisInt == 1) return ThisInt;
    else return ThisInt * fact( ThisInt - 1);
};

function fibSeq(ThisInt)
{
    var sequence = "";
    for (var i = 0; i <= ThisInt; i++) {
        var output = fib(i);
        if (i == ThisInt)
            sequence = sequence + output;
        else
            sequence = sequence + output + ",";
    }
    return sequence;
};

function factSeq(ThisInt)
{
    var sequence = "";
    for (var i = 0; i <= ThisInt; i++) {
        var output = fact(i);
        if (i == ThisInt)
            sequence = sequence + output;
        else
            sequence = sequence + output + ",";
    }
    return sequence;
};