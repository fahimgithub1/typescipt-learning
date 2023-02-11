interface ReactangleOptions{
    width: number,
    length: number   //// interface give us a object/class structure. he only give shape. not warid about privat public
}

function drowRectengel(options: ReactangleOptions){
    let width = options.width;
    let length = options.length
}
//111
drowRectengel({
    width: 21,
    length: 20
});


//  *** 222 222222 ****
// drowRectengel({
//     width: 21,
//     length: 20,   //** it is given arror */
//     height: 10
// });
let thereeDoptions = {
    width: 21,
    length: 20,
    height: 10
}
drowRectengel(thereeDoptions);