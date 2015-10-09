'use strict'

//
// Market
// Created by dpekar on 10/8/15.
//

const BaseModel = require('../BaseModel')
const TileConfig = require('../../data/Tile-config')

class Market extends BaseModel {
    constructor(tilePiles) {
        super()
        this.set('tiles', [])
        this.fillUpSlots(tilePiles)
    }

    getTiles() { return this.get('tiles') }


    fillUpSlots(tilePiles) {
        let tiles = this.getTiles()
        if (tiles.length === 0) { // no tiles on board yet
            for (let i = 0; i < Market.NUM_SLOTS; i++) {
                let tile = this.selectTile(tilePiles)
                tiles.push(tile)
            }
        }
        this.set('tiles', tiles)
    }

    selectTile(tilePiles) {
        for (let stage in TileConfig.STAGES) {
            let pile = tilePiles[TileConfig.STAGES[stage]]
            if (pile.length > 0) {
                return pile.shift() 
            }
        }
    }
}

Market.SLOT_COSTS = [10, 8, 6, 4, 2, 0, 0]
Market.NUM_SLOTS = Market.SLOT_COSTS.length

module.exports = Market