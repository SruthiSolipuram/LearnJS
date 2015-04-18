/**
 * Created by Sruthi on 4/15/15.
 */
    var exchanges =[];
var exchanges = [
    [
        {symbol: "XFX", price: 240, volume: 23432},
        {symbol: "TNZ", price: 322.19, volume: 234}
    ],
    [
        {symbol: "NCN", price: 240, volume: 23432},
        {symbol: "JXJ", price: 44.22, volume: 5343}
    ],
    [
        {symbol: "ZZZ", price: 1230, volume: 23432},
        {symbol: "YYY", price: 11.23, volume: 5343}
    ]
    ];

redExchanges = exchanges.reduce(function(memo,exchange){
   memo.push(exchange);
});

console.log(redExchanges.concat());