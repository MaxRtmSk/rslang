import React, { Component, Fragment } from 'react';
import {words} from '../../../redux/sprint-reducer';
import style from './Words.module.css';

export default class Words extends Component {
    state = {
        firstWord: null,
        secondWord: null,
        score: 0,
        answerItem: 0,
        points: 10
    }

    componentWillMount() {
        this.showNextPair();
    }

    showNextPair = () => {
        const first = words[Math.floor(Math.random() * words.length)];
        const second = words[Math.floor(Math.random() * words.length)];
        this.setState({
            firstWord: first,
            secondWord: second
        })
    }

    getListRef = (node) => {this.ul = node};

    answerChecker = (e) => {
        const { firstWord, secondWord, score, answerItem, points } = this.state;

        if ((firstWord.id === secondWord.id && e.target.id === 'correct') ||
            (firstWord.id !== secondWord.id && e.target.id === 'wrong')) {
            
            this.ul.children[answerItem].style.backgroundColor = 'green';

            if (answerItem === 3) {           
                for (let i = 0; i <= 3; i++) {
                    this.ul.children[i].style.backgroundColor = 'white';
                }

                if (points < 80) {
                    this.setState({
                        points: points * 2
                    })
                }
            }
    
            if (answerItem === 3) {
                this.setState({
                    score: score + points,
                    answerItem: 0
                });
            } else {
                this.setState({
                    score: score + points,
                    answerItem: answerItem + 1
                });
            }
        } else {
            for (let i = 0; i <= 3; i++) {
                this.ul.children[i].style.backgroundColor = 'white';
            }

            this.setState({
                answerItem: 0,
                points: 10
            })
        }
        this.showNextPair();
    }

    render() {
        return (
            <Fragment>
                <div className={style.scoreInfo}>
                    <p className={style.score}>Счет: {this.state.score}</p>
                    <p className={style.points}>+{this.state.points} за правильный ответ</p>
                    <ul ref={this.getListRef} className={style.answersList}>
                        {[1, 2, 3, 4].map(item => {
                            return <li key={item} className={style.answer}></li>
                        })}
                    </ul>
                </div>
                <div className={style.comparedWords}>
                    <p id={`${this.state.firstWord.id}`}>{this.state.firstWord.eng}</p>
                    <p id={`${this.state.secondWord.id}`}>{this.state.secondWord.rus}</p>
                </div>
                <div className={style.answerButtons}>
                    <button id='correct' className={style.correctButton} onClick={(e) => this.answerChecker(e)}>Правильно</button>
                    <button id='wrong' className={style.wrongButton} onClick={(e) => this.answerChecker(e)}>Неправильно</button>
                </div>
            </Fragment>
        )
    }
}
