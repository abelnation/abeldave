'use strict'

//
// GameClient
// Created by aallison on 10/10/15.
//

const React = require('react')

const BrowserLogger = require('../../../../shared/log/BrowserLogger')
const Logger = BrowserLogger
const Market = require('./Market')
const Players = require('./Players')
const button = require('react-bootstrap').Button

/* eslint-disable no-unused-vars */
/* eslint-enable no-unused-vars */

module.exports = React.createClass({
    // getInitialState() {
    //     return this.props.client
    // },

    getDefaultProps() {
        return {}
    },

    render() {
        return (
            <div>
                <Market tiles={this.props.client.gameState.getMarket().getTiles()} />
                <div className="clearfix"></div>
                <Players players={this.props.client.gameState.getPlayers()} />
                <div className="clearfix"></div>
            </div>
        )
    },

    onStateChange(newGameState) {
        Logger.trace('GameController.onStateChange')
        this.setState({
            gameState: newGameState
        })
    },

    componentWillMount() {
    },

    componentDidMount() {
    },

    componentWillReceiveProps(nextProps) {
    },
    shouldComponentUpdate(nextProps, nextState) {
        return true
    },
    componentWillUpdate(nextProps, nextState) {
    },
    componentDidUpdate(prevProps, prevState) {
    },
    componentWillUnmount() {
    }
})
