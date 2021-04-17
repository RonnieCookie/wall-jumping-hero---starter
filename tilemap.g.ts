// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001e00010101010101010101010101010101010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000020101000000000000000101010101010101010101010101000000000000000000010100000000000000000000000000000101000000000000000100000000000001010000000000000001000000000000010100000000000000010000000000000101000000010000010100000000000001010000000100000000000000000000010100000001000000000000000000000101000000010000000000000000000001010000000100000000000000000000010100000001010000010000000000000101000000000000000100000000000001010000000000000001000000000000010100000000000000010000000000000101000001000000010101000001000001010000010000000000000000010000010100000100000000000000000100000101000001000000000000000001000001010000010000000000000000010000010100000100000000000000000000000101000000000000000101010101000001010000000000000100000000000000010100000001010100000000000000000101010101010101010101010101010101`, img`
2222222222222222
2..............2
2..............2
2..............2
2..............2
2.......22222222
222222.........2
2..............2
2.......2......2
2.......2......2
2.......2......2
2...2..22......2
2...2..........2
2...2..........2
2...2..........2
2...2..........2
2...22..2......2
2.......2......2
2.......2......2
2.......2......2
2..2...222..2..2
2..2........2..2
2..2........2..2
2..2........2..2
2..2........2..2
2..2...........2
2.......22222..2
2......2.......2
2...222........2
2222222222222222
`, [myTiles.transparency16,sprites.dungeon.floorMixed,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
