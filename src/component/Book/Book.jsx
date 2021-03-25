import React from 'react';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Button from '@material-ui/core/Button';
import s from './Book.module.css'

const Book = (props) => {
    const apiUrl = 'https://react-learn-words.herokuapp.com'

    let words = props.words.map(word => {
        return <div key={word.id} className={s.wordContainer}>
                    <div className={s.wordImage} style={{backgroundImage: `url('${apiUrl}/${word.image}')`}}>
                    </div>
                    <div className={s.wordDescription}>
                        <span className={s.wordTranscription}>
                            {word.word} {word.transcription} 
                            <Button size='small' onClick={()=>props.clickAudioHandler(`${apiUrl}/${word.audio}`)}><VolumeUpIcon /></Button>
                        </span>
                        <span className={s.textMeaning}>
                            {word.textMeaning} <Button onClick={()=>props.clickAudioHandler(`${apiUrl}/${word.audioMeaning}`)}><VolumeUpIcon /></Button>
                        </span>
                        <span className={s.textMeaningTranslate}>
                            {word.textMeaningTranslate}
                        </span>
                        <span className={s.textExample}>
                            {word.textExample} <Button onClick={()=>props.clickAudioHandler(`${apiUrl}/${word.audioExample}`)}><VolumeUpIcon /></Button>
                        </span>
                        <span className={s.textExampleTranslate}>
                            {word.textExampleTranslate}
                        </span>
                    </div>
                </div>
    })

    let pagesCount = props.totalPages;
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let pagination = pages.map(page => {
        return <div className={s.pageNumberContainer} key={page}>
                <span className={`${s.page} ${props.currentPage === page && s.currentPage}`}  onClick={() => {props.onPageChanged(page)}}>{page}</span>
            </div>
    })

    let groupCount = props.totalGroup;
    let groups = []

    for (let i = 1; i <= groupCount; i++) {
        groups.push(i)
    }

    let options = groups.map(group => {
        return <option key={group} value={group}>{group}</option>
    })

    return (
        <div className={s.book}>
            <div className={`wrapper ${s.wrapper}`}>
                <div>
                    <select value={props.currentGroup} onChange={(e) => props.onGroupChanged(e.currentTarget.value)}>{options}</select>
                </div>
                <div className={s.pageContainer}>
                    <div className={s.paginationContainer}>{pagination}</div>
                    <div className={s.wordsContainer}>
                        {words}
                    </div>
                    <div className={s.paginationContainer}>{pagination}</div>
                </div>
            </div>
        </div>
    )
}

export default Book;